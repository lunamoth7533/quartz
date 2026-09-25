/**
 * Research Atlas dashboard queries.
 *
 * The vault's two dashboard pages (`Research/Visualizations.md` and
 * `Research/Learning Dashboard.md`) are authored in Obsidian Dataview Query
 * Language. Dataview itself needs an exporter and is not rendered by the
 * Obsidian-flavoured-Markdown plugin, so the site renders those panels from the
 * real note metadata instead.
 *
 * This module deliberately implements a *closed subset* of DQL: exactly the
 * clause and expression forms those dashboards use, and nothing else. Anything
 * outside the subset raises `UnsupportedQueryError`, and the renderer then shows
 * an explicit "not supported" panel. There is no `eval`, no `Function`, no
 * dataviewjs and no general DQL engine here.
 */

export class UnsupportedQueryError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "UnsupportedQueryError"
  }
}

export type QueryValue = unknown

export interface QueryFile {
  name: string
  title: string
  /** Dataview exposes `file.link`; rendered as a link by the renderer. */
  link: { slug: string; title: string }
  path: string
  folder: string
  ext: string
  slug: string
  tags: string[]
}

export interface QueryRow {
  file: QueryFile
  [key: string]: QueryValue
}

export interface QueryColumn {
  expr: Expr
  label: string
}

export interface DashboardQuery {
  kind: "table" | "list"
  withoutId: boolean
  columns: QueryColumn[]
  from: string | null
  /**
   * Data steps in the order the author wrote them. Dataview applies clauses in
   * authored order (so `FLATTEN ... WHERE ...` filters after flattening while
   * `WHERE ... FLATTEN ...` filters before it), and so does `evaluateQuery`.
   */
  steps: QueryStep[]
  /** Convenience views of `steps` for rendering and tests. */
  where: Expr | null
  flatten: { expr: Expr; alias: string }[]
  groupBy: { expr: Expr; alias: string | null } | null
  sort: { expr: Expr; desc: boolean }[]
}

export type QueryStep =
  | { kind: "where"; expr: Expr }
  | { kind: "flatten"; expr: Expr; alias: string }
  | { kind: "group"; expr: Expr; alias: string | null }
  | { kind: "sort"; terms: { expr: Expr; desc: boolean }[] }

/** Skips null/undefined and empty-string list elements, like Dataview's FLATTEN. */
function isFlattenable(value: unknown): boolean {
  if (value == null) return false
  if (typeof value === "string") return value.trim().length > 0
  return true
}

// ---------------------------------------------------------------------------
// Expressions
// ---------------------------------------------------------------------------

type Expr =
  | { kind: "literal"; value: QueryValue }
  | { kind: "ident"; name: string }
  | { kind: "call"; name: string; args: Expr[] }
  | { kind: "not"; value: Expr }
  | { kind: "and"; left: Expr; right: Expr }
  | { kind: "or"; left: Expr; right: Expr }
  | { kind: "compare"; op: string; left: Expr; right: Expr }

type Token =
  | { type: "ident"; value: string }
  | { type: "string"; value: string }
  | { type: "number"; value: number }
  | { type: "punct"; value: string }

function tokenize(input: string): Token[] {
  const tokens: Token[] = []
  let i = 0
  while (i < input.length) {
    const ch = input[i]
    if (/\s/.test(ch)) {
      i++
      continue
    }
    if (ch === '"' || ch === "'") {
      const quote = ch
      let value = ""
      i++
      while (i < input.length && input[i] !== quote) {
        if (input[i] === "\\" && i + 1 < input.length) {
          value += input[i + 1]
          i += 2
          continue
        }
        value += input[i]
        i++
      }
      if (i >= input.length) throw new UnsupportedQueryError(`unterminated string in ${input}`)
      i++
      tokens.push({ type: "string", value })
      continue
    }
    if (/[0-9]/.test(ch)) {
      let raw = ""
      while (i < input.length && /[0-9._]/.test(input[i])) {
        raw += input[i]
        i++
      }
      tokens.push({ type: "number", value: Number(raw.replace(/_/g, "")) })
      continue
    }
    if (/[A-Za-z_]/.test(ch)) {
      let raw = ""
      while (i < input.length && /[A-Za-z0-9_.-]/.test(input[i])) {
        raw += input[i]
        i++
      }
      tokens.push({ type: "ident", value: raw })
      continue
    }
    const two = input.slice(i, i + 2)
    if (two === "!=" || two === "<=" || two === ">=" || two === "==") {
      tokens.push({ type: "punct", value: two })
      i += 2
      continue
    }
    if ("()[],<>=!".includes(ch)) {
      tokens.push({ type: "punct", value: ch })
      i++
      continue
    }
    throw new UnsupportedQueryError(`unsupported character ${JSON.stringify(ch)} in ${input}`)
  }
  return tokens
}

class ExpressionParser {
  private pos = 0

  constructor(private tokens: Token[], private source: string) {}

  parse(): Expr {
    const expr = this.parseOr()
    if (this.pos !== this.tokens.length) {
      throw new UnsupportedQueryError(`trailing tokens in expression: ${this.source}`)
    }
    return expr
  }

  private peek(): Token | undefined {
    return this.tokens[this.pos]
  }

  private isKeyword(value: string): boolean {
    const tok = this.peek()
    return tok?.type === "ident" && tok.value.toLowerCase() === value
  }

  private eatKeyword(value: string): boolean {
    if (this.isKeyword(value)) {
      this.pos++
      return true
    }
    return false
  }

  private parseOr(): Expr {
    let left = this.parseAnd()
    while (this.eatKeyword("or")) {
      left = { kind: "or", left, right: this.parseAnd() }
    }
    return left
  }

  private parseAnd(): Expr {
    let left = this.parseComparison()
    while (this.eatKeyword("and")) {
      left = { kind: "and", left, right: this.parseComparison() }
    }
    return left
  }

  private parseComparison(): Expr {
    const left = this.parseUnary()
    const tok = this.peek()
    if (tok?.type === "punct" && ["=", "==", "!=", "<", "<=", ">", ">="].includes(tok.value)) {
      this.pos++
      return { kind: "compare", op: tok.value, left, right: this.parseUnary() }
    }
    return left
  }

  private parseUnary(): Expr {
    if (this.eatKeyword("not")) {
      return { kind: "not", value: this.parseUnary() }
    }
    return this.parsePrimary()
  }

  private parsePrimary(): Expr {
    const tok = this.peek()
    if (!tok) throw new UnsupportedQueryError(`unexpected end of expression: ${this.source}`)
    if (tok.type === "punct" && tok.value === "(") {
      this.pos++
      const inner = this.parseOr()
      const closing = this.peek()
      if (closing?.type !== "punct" || closing.value !== ")") {
        throw new UnsupportedQueryError(`missing ) in expression: ${this.source}`)
      }
      this.pos++
      return inner
    }
    if (tok.type === "string") {
      this.pos++
      return { kind: "literal", value: tok.value }
    }
    if (tok.type === "number") {
      this.pos++
      return { kind: "literal", value: tok.value }
    }
    if (tok.type === "ident") {
      const lowered = tok.value.toLowerCase()
      if (lowered === "true" || lowered === "false") {
        this.pos++
        return { kind: "literal", value: lowered === "true" }
      }
      if (lowered === "null") {
        this.pos++
        return { kind: "literal", value: null }
      }
      this.pos++
      if (this.peek()?.type === "punct" && (this.peek() as Token).value === "(") {
        this.pos++
        const args: Expr[] = []
        if (!(this.peek()?.type === "punct" && (this.peek() as Token).value === ")")) {
          args.push(this.parseOr())
          while (this.peek()?.type === "punct" && (this.peek() as Token).value === ",") {
            this.pos++
            args.push(this.parseOr())
          }
        }
        const closing = this.peek()
        if (closing?.type !== "punct" || closing.value !== ")") {
          throw new UnsupportedQueryError(`missing ) after ${tok.value}( in ${this.source}`)
        }
        this.pos++
        return { kind: "call", name: lowered, args }
      }
      return { kind: "ident", name: tok.value }
    }
    throw new UnsupportedQueryError(`unexpected token in expression: ${this.source}`)
  }
}

export function parseExpression(source: string): Expr {
  const tokens = tokenize(source)
  if (tokens.length === 0) throw new UnsupportedQueryError("empty expression")
  return new ExpressionParser(tokens, source).parse()
}

// ---------------------------------------------------------------------------
// Clause splitting
// ---------------------------------------------------------------------------

const CLAUSE_KEYWORDS = ["from", "where", "flatten", "group", "sort"]

interface RawClause {
  keyword: string
  body: string
}

function splitClauses(source: string): RawClause[] {
  const clauses: RawClause[] = []
  let depth = 0
  let quote: string | null = null
  let current = ""
  let currentKeyword = ""
  let i = 0

  const push = () => {
    clauses.push({ keyword: currentKeyword, body: current.trim() })
    current = ""
  }

  while (i < source.length) {
    const ch = source[i]
    if (quote) {
      current += ch
      if (ch === quote && source[i - 1] !== "\\") quote = null
      i++
      continue
    }
    if (ch === '"' || ch === "'") {
      quote = ch
      current += ch
      i++
      continue
    }
    if (ch === "(") depth++
    if (ch === ")") depth--
    if (depth === 0 && /[A-Za-z]/.test(ch) && (i === 0 || /\s/.test(source[i - 1]))) {
      const rest = source.slice(i)
      const match = /^([A-Za-z]+)\b/.exec(rest)
      if (match) {
        const word = match[1].toLowerCase()
        if (CLAUSE_KEYWORDS.includes(word)) {
          const after = rest.slice(match[1].length)
          if (word === "group") {
            if (/^\s+by\b/i.test(after)) {
              push()
              currentKeyword = "group"
              i += match[1].length + after.match(/^\s+by/i)![0].length
              continue
            }
          } else {
            push()
            currentKeyword = word
            i += match[1].length
            continue
          }
        }
      }
    }
    current += ch
    i++
  }
  push()
  return clauses.filter((c) => c.body.length > 0 || c.keyword === "where")
}

function splitTopLevel(source: string, separator: string): string[] {
  const parts: string[] = []
  let depth = 0
  let quote: string | null = null
  let current = ""
  for (let i = 0; i < source.length; i++) {
    const ch = source[i]
    if (quote) {
      current += ch
      if (ch === quote && source[i - 1] !== "\\") quote = null
      continue
    }
    if (ch === '"' || ch === "'") {
      quote = ch
      current += ch
      continue
    }
    if (ch === "(") depth++
    if (ch === ")") depth--
    if (depth === 0 && source.startsWith(separator, i)) {
      parts.push(current.trim())
      current = ""
      i += separator.length - 1
      continue
    }
    current += ch
  }
  parts.push(current.trim())
  return parts.filter((p) => p.length > 0)
}

function splitAlias(source: string): { expr: string; alias: string | null } {
  const match = /\s+as\s+("([^"]*)"|'([^']*)'|[A-Za-z0-9_.]+)\s*$/i.exec(source)
  if (!match) return { expr: source.trim(), alias: null }
  const alias = match[2] ?? match[3] ?? match[1].replace(/^"|"$/g, "")
  return { expr: source.slice(0, match.index).trim(), alias }
}

// ---------------------------------------------------------------------------
// Query parsing
// ---------------------------------------------------------------------------

export function parseQuery(source: string): DashboardQuery {
  const trimmed = source.trim()
  const clauses = splitClauses(trimmed)
  const head = clauses[0]
  if (!head || head.keyword !== "") {
    throw new UnsupportedQueryError("query must start with TABLE or LIST")
  }
  const headMatch = /^(TABLE|LIST)\b/i.exec(head.body)
  if (!headMatch) throw new UnsupportedQueryError(`unsupported query head: ${head.body}`)
  const kind = headMatch[1].toUpperCase() === "TABLE" ? "table" : "list"
  let headBody = head.body.slice(headMatch[1].length).trim()

  let withoutId = false
  if (/^without\s+id\b/i.test(headBody)) {
    withoutId = true
    headBody = headBody.replace(/^without\s+id\b/i, "").trim()
  }

  const columns: QueryColumn[] = []
  if (headBody.length > 0) {
    for (const raw of splitTopLevel(headBody, ",")) {
      const { expr, alias } = splitAlias(raw)
      const parsed = parseExpression(expr)
      columns.push({ expr: parsed, label: alias ?? labelFor(parsed) })
    }
  }

  const query: DashboardQuery = {
    kind,
    withoutId,
    columns,
    from: null,
    steps: [],
    where: null,
    flatten: [],
    groupBy: null,
    sort: [],
  }

  for (const clause of clauses.slice(1)) {
    switch (clause.keyword) {
      case "from": {
        if (query.steps.length > 0) {
          throw new UnsupportedQueryError(
            "FROM must come before WHERE/FLATTEN/GROUP BY/SORT, as in the authored queries",
          )
        }
        const match = /^("([^"]*)"|'([^']*)'|[A-Za-z0-9_./ -]+)$/.exec(clause.body.trim())
        if (!match) throw new UnsupportedQueryError(`unsupported FROM clause: ${clause.body}`)
        query.from = (match[2] ?? match[3] ?? match[1]).trim()
        break
      }
      case "where": {
        const expr = parseExpression(clause.body)
        query.where = expr
        query.steps.push({ kind: "where", expr })
        break
      }
      case "flatten": {
        const { expr, alias } = splitAlias(clause.body)
        if (!alias) throw new UnsupportedQueryError(`FLATTEN requires an alias: ${clause.body}`)
        const parsed = { expr: parseExpression(expr), alias }
        query.flatten.push(parsed)
        query.steps.push({ kind: "flatten", ...parsed })
        break
      }
      case "group": {
        const { expr, alias } = splitAlias(clause.body)
        const parsed = { expr: parseExpression(expr), alias }
        query.groupBy = parsed
        query.steps.push({ kind: "group", ...parsed })
        break
      }
      case "sort": {
        const terms: { expr: Expr; desc: boolean }[] = []
        for (const raw of splitTopLevel(clause.body, ",")) {
          const match = /^(.*?)(?:\s+(asc|desc))?$/i.exec(raw.trim())
          if (!match) throw new UnsupportedQueryError(`unsupported SORT term: ${raw}`)
          terms.push({
            expr: parseExpression(match[1].trim()),
            desc: (match[2] ?? "asc").toLowerCase() === "desc",
          })
        }
        query.sort.push(...terms)
        query.steps.push({ kind: "sort", terms })
        break
      }
      default:
        throw new UnsupportedQueryError(`unsupported clause: ${clause.keyword}`)
    }
  }

  return query
}

function labelFor(expr: Expr): string {
  switch (expr.kind) {
    case "ident":
      return expr.name
    case "call":
      return expr.name
    case "literal":
      return String(expr.value)
    default:
      return "value"
  }
}

/**
 * Dataview prints the grouped value as the first column of a grouped TABLE.
 * The authored dashboards rely on that column, so the site renderer adds it too.
 */
export function groupKeyColumn(query: DashboardQuery): QueryColumn | null {
  if (!query.groupBy) return null
  const referencesKey = query.columns.some(
    (column) => column.expr.kind === "ident" && column.expr.name.toLowerCase() === "key",
  )
  if (referencesKey) return null
  return {
    expr: { kind: "ident", name: "key" },
    label: query.groupBy.alias ?? labelFor(query.groupBy.expr),
  }
}

// ---------------------------------------------------------------------------
// Evaluation
// ---------------------------------------------------------------------------

function lookup(context: Record<string, unknown>, name: string): unknown {
  const segments = name.split(".")
  const lower = segments[0].toLowerCase()
  let current: unknown
  const keys = Object.keys(context)
  // Last match wins: a FLATTEN alias is appended after the original fields and
  // must shadow an author field that differs only by case (`condition` vs
  // `Condition`).
  const key = [...keys].reverse().find((k) => k.toLowerCase() === lower)
  if (key === undefined) {
    // Dataview treats unknown fields as null rather than failing the query.
    return null
  }
  current = context[key]
  for (const segment of segments.slice(1)) {
    const segLower = segment.toLowerCase()
    if (current == null) return null
    if (Array.isArray(current)) {
      return current.map((item) =>
        item && typeof item === "object"
          ? lookup(item as Record<string, unknown>, segments.slice(1).join("."))
          : null,
      )
    }
    if (typeof current !== "object") return null
    const record = current as Record<string, unknown>
    const match = Object.keys(record).find((k) => k.toLowerCase() === segLower)
    if (match === undefined) return null
    current = record[match]
  }
  return current ?? null
}

function asArray(value: unknown): unknown[] {
  if (value == null) return []
  return Array.isArray(value) ? value : [value]
}

function compareValues(left: unknown, right: unknown): number {
  const leftEmpty = left == null || left === ""
  const rightEmpty = right == null || right === ""
  if (leftEmpty && rightEmpty) return 0
  if (leftEmpty) return 1
  if (rightEmpty) return -1
  if (typeof left === "number" && typeof right === "number") return left - right
  if (typeof left === "boolean" && typeof right === "boolean") {
    return Number(left) - Number(right)
  }
  return String(left).localeCompare(String(right), "en", { numeric: true, sensitivity: "base" })
}

export function evaluateExpression(expr: Expr, row: Record<string, unknown>): unknown {
  switch (expr.kind) {
    case "literal":
      return expr.value
    case "ident":
      return lookup(row, expr.name)
    case "not":
      return !truthy(evaluateExpression(expr.value, row))
    case "and":
      return (
        truthy(evaluateExpression(expr.left, row)) && truthy(evaluateExpression(expr.right, row))
      )
    case "or":
      return (
        truthy(evaluateExpression(expr.left, row)) || truthy(evaluateExpression(expr.right, row))
      )
    case "compare": {
      const left = evaluateExpression(expr.left, row)
      const right = evaluateExpression(expr.right, row)
      const cmp = compareValues(left, right)
      switch (expr.op) {
        case "=":
        case "==":
          return cmp === 0
        case "!=":
          return cmp !== 0
        case "<":
          return cmp < 0
        case "<=":
          // Empty values sort last, so <= must not treat null as "less than".
          return left != null && left !== "" && cmp <= 0
        case ">":
          return cmp > 0
        case ">=":
          return cmp >= 0
        default:
          throw new UnsupportedQueryError(`unsupported operator ${expr.op}`)
      }
    }
    case "call": {
      const args = expr.args.map((arg) => evaluateExpression(arg, row))
      switch (expr.name) {
        case "contains": {
          const [haystack, needle] = args
          if (Array.isArray(haystack)) return haystack.some((item) => compareValues(item, needle) === 0)
          if (haystack == null) return false
          return String(haystack).toLowerCase().includes(String(needle).toLowerCase())
        }
        case "length":
          if (typeof args[0] === "number") return args[0]
          if (typeof args[0] === "string") return args[0].length
          return asArray(args[0]).length
        case "unique": {
          const seen = new Set<string>()
          const result: unknown[] = []
          for (const item of asArray(args[0])) {
            const key = JSON.stringify(item ?? null)
            if (seen.has(key)) continue
            seen.add(key)
            result.push(item)
          }
          return result
        }
        case "flat": {
          const result: unknown[] = []
          for (const item of asArray(args[0])) {
            if (Array.isArray(item)) result.push(...item)
            else if (item != null) result.push(item)
          }
          return result
        }
        case "sum": {
          let total = 0
          for (const item of asArray(args[0])) {
            const numeric = typeof item === "number" ? item : Number(item)
            if (Number.isFinite(numeric)) total += numeric
          }
          return total
        }
        default:
          throw new UnsupportedQueryError(`unsupported function ${expr.name}()`)
      }
    }
    default:
      throw new UnsupportedQueryError("unsupported expression")
  }
}

export function truthy(value: unknown): boolean {
  if (value == null) return false
  if (typeof value === "boolean") return value
  if (typeof value === "number") return value !== 0
  if (typeof value === "string") return value.trim().length > 0
  if (Array.isArray(value)) return value.length > 0
  return true
}

export function evaluateQuery(query: DashboardQuery, rows: QueryRow[]): Record<string, unknown>[] {
  let working: Record<string, unknown>[] = rows

  for (const step of query.steps) {
    switch (step.kind) {
      case "where": {
        working = working.filter((row) => truthy(evaluateExpression(step.expr, row)))
        break
      }
      case "flatten": {
        const flattened: Record<string, unknown>[] = []
        for (const row of working) {
          const values = asArray(evaluateExpression(step.expr, row))
          for (const value of values) {
            if (!isFlattenable(value)) continue
            flattened.push({ ...row, [step.alias]: value })
          }
        }
        working = flattened
        break
      }
      case "group": {
        const groups = new Map<string, { key: unknown; rows: Record<string, unknown>[] }>()
        for (const row of working) {
          const key = evaluateExpression(step.expr, row)
          const mapKey = JSON.stringify(key ?? null)
          const existing = groups.get(mapKey)
          if (existing) existing.rows.push(row)
          else groups.set(mapKey, { key, rows: [row] })
        }
        working = [...groups.values()].map((group) => ({
          ...group.rows[0],
          ...(step.alias ? { [step.alias]: group.key } : {}),
          key: group.key,
          rows: group.rows,
        }))
        break
      }
      case "sort": {
        working = [...working].sort((a, b) => {
          for (const term of step.terms) {
            const cmp = compareValues(evaluateExpression(term.expr, a), evaluateExpression(term.expr, b))
            if (cmp !== 0) return term.desc ? -cmp : cmp
          }
          return 0
        })
        break
      }
      default:
        throw new UnsupportedQueryError("unsupported query step")
    }
  }

  return working
}

// ---------------------------------------------------------------------------
// Row construction
// ---------------------------------------------------------------------------

export interface SourceNote {
  slug: string
  relativePath: string
  title: string
  frontmatter: Record<string, unknown>
}

export function toQueryRow(note: SourceNote): QueryRow {
  const fileName = note.relativePath.split("/").pop() ?? note.relativePath
  const stem = fileName.replace(/\.[^.]+$/, "")
  const folder = note.relativePath.includes("/")
    ? note.relativePath.slice(0, note.relativePath.lastIndexOf("/"))
    : ""
  const frontmatter = note.frontmatter ?? {}
  const row = { ...frontmatter } as QueryRow
  for (const key of Object.keys(row)) {
    if (key.toLowerCase() === "file") delete row[key]
  }
  row.file = {
    name: stem,
    title: note.title ?? stem,
    link: { slug: note.slug, title: note.title ?? stem },
    path: note.relativePath,
    folder,
    ext: fileName.includes(".") ? fileName.slice(fileName.lastIndexOf(".") + 1) : "",
    slug: note.slug,
    tags: asArray(frontmatter.tags).map((tag) => String(tag)),
  }
  return row
}

export function selectRows(rows: QueryRow[], from: string | null): QueryRow[] {
  if (!from) return rows
  const folder = from.replace(/^\/+|\/+$/g, "")
  return rows.filter((row) => row.file.path.startsWith(`${folder}/`))
}
