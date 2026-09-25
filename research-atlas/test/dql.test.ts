import assert from "node:assert/strict"
import fs from "node:fs"
import path from "node:path"
import test from "node:test"
import YAML from "yaml"
import {
  evaluateExpression,
  evaluateQuery,
  groupKeyColumn,
  parseExpression,
  parseQuery,
  parseSource,
  selectRows,
  toQueryRow,
  type QueryRow,
} from "../dql"

const VAULT = path.join(process.cwd(), "content")

interface Note {
  slug: string
  relativePath: string
  title: string
  frontmatter: Record<string, unknown>
}

function readVaultNotes(): Note[] {
  const notes: Note[] = []
  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith(".")) continue
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        walk(full)
        continue
      }
      if (!entry.name.endsWith(".md")) continue
      const raw = fs.readFileSync(full, "utf-8")
      const match = /^---\n([\s\S]*?)\n---/.exec(raw)
      if (!match) continue
      // Parsed with a real YAML parser so fixture typing matches the build.
      const frontmatter = (YAML.parse(match[1]) ?? {}) as Record<string, unknown>
      const relativePath = path.relative(VAULT, full)
      notes.push({
        slug: relativePath.replace(/\.md$/, ""),
        relativePath,
        title: String(frontmatter.title ?? entry.name.replace(/\.md$/, "")),
        frontmatter,
      })
    }
  }
  walk(VAULT)
  return notes
}

function rowsFromNotes(notes: Note[]): QueryRow[] {
  return notes.map((note) => toQueryRow(note))
}

function authoredDashboardBlocks(): { path: string; source: string }[] {
  const blocks: { path: string; source: string }[] = []
  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith(".")) continue
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        walk(full)
        continue
      }
      if (!entry.name.endsWith(".md")) continue
      const raw = fs.readFileSync(full, "utf-8")
      const regex = /```dataview\s*\n([\s\S]*?)```/g
      let match: RegExpExecArray | null
      while ((match = regex.exec(raw)) !== null) {
        blocks.push({ path: path.relative(VAULT, full), source: match[1].trim() })
      }
    }
  }
  walk(VAULT)
  return blocks
}

const notes = readVaultNotes()
const rows = rowsFromNotes(notes)
const blocks = authoredDashboardBlocks()

// The vault files notes by domain, so its dashboards select sources and topics
// by tag and leave the templates out; the fixtures below do the same.
const SOURCES_FROM = '#research/source AND -"Research/Templates"'
const TOPICS_FROM = '#research/topic AND -"Research/Templates"'
const SOURCES = parseSource(SOURCES_FROM)

test("every authored dataview block is inside the supported subset", () => {
  // The vault is edited continuously, so the invariant is that every block parses,
  // not how many there are.
  assert.ok(blocks.length > 0, "the vault has authored dashboard blocks")
  for (const block of blocks) {
    assert.doesNotThrow(() => parseQuery(block.source), `unsupported query in ${block.path}`)
  }
})

test("no authored dashboards evaluate to an unsupported view", () => {
  for (const block of blocks) {
    const query = parseQuery(block.source)
    const results = evaluateQuery(query, selectRows(rows, query.source ?? query.from))
    assert.ok(Array.isArray(results), `query in ${block.path} did not evaluate`)
  }
})

test("source selection excludes templates and unrelated notes", () => {
  const sources = selectRows(rows, SOURCES)
  assert.ok(sources.length > 50)
  for (const row of sources) {
    assert.equal(row.note_type, "source", row.file.path)
    assert.ok(!row.file.path.startsWith("Research/Templates/"), row.file.path)
  }
  const templates = selectRows(rows, "Research/Templates")
  assert.equal(templates.length, 4, "the four note templates live in their own folder")
  assert.ok(templates.some((row) => row.note_type === "source"), "a template carries the source tag")
})

test("reading-queue query matches authored queue semantics", () => {
  const query = parseQuery(
    `TABLE WITHOUT ID file.link AS Source, queue_tier AS Queue FROM ${SOURCES_FROM} WHERE reading_status = "queued" SORT queue_tier ASC, year DESC, file.name ASC`,
  )
  const results = evaluateQuery(query, selectRows(rows, query.source ?? query.from))
  const expected = selectRows(rows, SOURCES).filter(
    (row) => row.reading_status === "queued",
  )
  assert.equal(results.length, expected.length)
  assert.ok(results.length > 0)
  const core = evaluateQuery(
    parseQuery(
      `TABLE file.link AS Source FROM ${SOURCES_FROM} WHERE reading_status = "queued" AND queue_tier = "core"`,
    ),
    selectRows(rows, SOURCES),
  )
  assert.equal(
    core.length,
    expected.filter((row) => row.queue_tier === "core").length,
  )
})

test("array membership, flatten and grouping agree with the metadata", () => {
  const adhd = evaluateQuery(
    parseQuery(
      `TABLE file.link AS Source FROM ${SOURCES_FROM} WHERE contains(condition, "adhd")`,
    ),
    selectRows(rows, SOURCES),
  )
  const manualAdhd = selectRows(rows, SOURCES).filter((row) =>
    (Array.isArray(row.condition) ? row.condition : [row.condition])
      .map((value) => String(value).toLowerCase())
      .includes("adhd"),
  )
  assert.equal(adhd.length, manualAdhd.length)
  assert.ok(adhd.length > 0)

  const byCondition = evaluateQuery(
    parseQuery(
      `TABLE length(rows) AS Sources FROM ${SOURCES_FROM} FLATTEN condition AS Condition WHERE Condition GROUP BY Condition`,
    ),
    selectRows(rows, SOURCES),
  )
  const totalFlattened = byCondition.reduce(
    (sum, group) => sum + (group.rows as unknown[]).length,
    0,
  )
  const manualFlattened = selectRows(rows, SOURCES).reduce((sum, row) => {
    const values = row.condition
    if (values == null || values === "") return sum
    return sum + (Array.isArray(values) ? values.length : 1)
  }, 0)
  assert.equal(totalFlattened, manualFlattened)
})

test("flatten aliases shadow same-named fields and grouped tables keep their key column", () => {
  const query = parseQuery(
    `TABLE length(rows) AS Sources FROM ${SOURCES_FROM} FLATTEN condition AS Condition WHERE Condition GROUP BY Condition SORT Condition ASC`,
  )
  const groups = evaluateQuery(query, selectRows(rows, query.source ?? query.from))
  const keys = groups.map((group) => String(group.key))
  assert.deepEqual(keys, [...keys].sort(), "groups come back in authored sort order")
  for (const condition of ["adhd", "autism", "bipolar-i", "cptsd"]) {
    assert.ok(keys.includes(condition), `a group for ${condition}`)
  }

  // A note that lists two conditions must appear once in each of those groups,
  // not once in a group keyed by the whole array.
  const multiValueNote = selectRows(rows, SOURCES).find(
    (row) => Array.isArray(row.condition) && row.condition.length > 1,
  )
  assert.ok(multiValueNote, "the vault has a source that lists two conditions")
  const multiValueGroups = groups.filter((group) =>
    (group.rows as QueryRow[]).some((row) => row.file.slug === multiValueNote.file.slug),
  )
  assert.equal(
    multiValueGroups.length,
    (multiValueNote.condition as unknown[]).length,
  )
  assert.ok(!keys.some((key) => key.includes(",")), "group keys stay scalar")

  const sourcesWithCondition = selectRows(rows, SOURCES).filter((row) => {
    const value = row.condition
    return Array.isArray(value) ? value.length > 0 : value != null && value !== ""
  })
  const expectedEntries = sourcesWithCondition.reduce(
    (total, row) => total + (Array.isArray(row.condition) ? row.condition.length : 1),
    0,
  )
  assert.equal(
    groups.reduce((total, group) => total + (group.rows as unknown[]).length, 0),
    expectedEntries,
  )

  const keyColumn = groupKeyColumn(query)
  assert.equal(keyColumn?.label, "Condition")
  assert.equal(groupKeyColumn(parseQuery(`TABLE key AS K FROM ${SOURCES_FROM} GROUP BY domain`)), null)
})

test("grouped counts use distinct values for shared citations", () => {
  const query = parseQuery(
    'TABLE length(rows) AS Lessons, length(unique(flat(rows.sources))) AS Sources, sum(rows.question_count) AS Questions FROM "Research/Learning/Lessons" WHERE note_type = "lesson" GROUP BY module_title',
  )
  const results = evaluateQuery(query, selectRows(rows, query.source ?? query.from))
  assert.ok(results.length >= 10, "one group per module")
  const lessonRows = selectRows(rows, "Research/Learning/Lessons").filter(
    (row) => row.note_type === "lesson",
  )
  const lessonsCounted = results.reduce((sum, group) => sum + (group.rows as unknown[]).length, 0)
  assert.equal(lessonsCounted, lessonRows.length)
  const [lessonsColumn, sourcesColumn, questionsColumn] = query.columns
  for (const group of results) {
    const members = group.rows as QueryRow[]
    const distinct = new Set<string>()
    for (const member of members) {
      for (const source of Array.isArray(member.sources) ? member.sources : []) {
        distinct.add(String(source))
      }
    }
    assert.equal(
      evaluateExpression(sourcesColumn.expr, group),
      distinct.size,
      `distinct source count for ${String(group.key)}`,
    )
    assert.equal(evaluateExpression(lessonsColumn.expr, group), members.length)
    const questions = members.reduce((sum, member) => sum + Number(member.question_count ?? 0), 0)
    assert.equal(evaluateExpression(questionsColumn.expr, group), questions)
  }
})

test("comparison against an empty field does not match", () => {
  const query = parseQuery(
    `TABLE file.link AS Topic FROM ${TOPICS_FROM} WHERE note_type = "topic" AND source_count <= 1`,
  )
  const empty = toQueryRow({
    slug: "research/topics/unsourced",
    relativePath: "Research/Domains/X/Unsourced.md",
    title: "Unsourced",
    frontmatter: { note_type: "topic", tags: ["research/topic"] },
  })
  const results = evaluateQuery(query, selectRows([...rows, empty], query.source ?? query.from))
  for (const row of results) {
    assert.ok(Number(row.source_count) <= 1)
    assert.ok(row.source_count != null, "empty metadata stays out of range comparisons")
  }
  assert.ok(!results.some((row) => (row.file as { slug: string }).slug === "research/topics/unsourced"))
})

test("clauses apply in authored order", () => {
  const flattenThenWhere = parseQuery(
    `TABLE file.link AS Source FROM ${SOURCES_FROM} FLATTEN condition AS Item WHERE Item`,
  )
  const afterFlatten = evaluateQuery(flattenThenWhere, selectRows(rows, flattenThenWhere.source ?? flattenThenWhere.from))
  assert.equal(
    afterFlatten.length,
    selectRows(rows, SOURCES).reduce(
      (total, row) => total + (Array.isArray(row.condition) ? row.condition.length : 0),
      0,
    ),
    "WHERE after FLATTEN filters the flattened rows",
  )
  for (const row of afterFlatten) {
    assert.ok(row.Item != null && row.Item !== "")
  }

  const whereThenFlatten = parseQuery(
    `TABLE file.link AS Source FROM ${SOURCES_FROM} WHERE contains(condition, "adhd") FLATTEN condition AS Item WHERE Item`,
  )
  const beforeFlattenRows = evaluateQuery(
    whereThenFlatten,
    selectRows(rows, whereThenFlatten.source ?? whereThenFlatten.from),
  )
  assert.ok(beforeFlattenRows.length > 0)
  assert.ok(
    beforeFlattenRows.length < afterFlatten.length,
    "filtering before flattening keeps fewer rows than filtering after",
  )
  const matchedSources = selectRows(rows, SOURCES).filter(
    (row) =>
      Array.isArray(row.condition) &&
      row.condition.some((value) => String(value).toLowerCase() === "adhd"),
  )
  assert.equal(
    beforeFlattenRows.length,
    matchedSources.reduce(
      (total, row) => total + (Array.isArray(row.condition) ? row.condition.length : 0),
      0,
    ),
    "a WHERE before FLATTEN keeps whole rows, which then expand one row per value",
  )
  const allowed = new Set(
    matchedSources.flatMap((row) => (row.condition as unknown[]).map((v) => String(v).toLowerCase())),
  )
  for (const row of beforeFlattenRows) {
    // A source that lists two conditions appears once per value, so the kept
    // values are the conditions of the rows that matched.
    assert.ok(allowed.has(String(row.Item).toLowerCase()))
  }
  assert.ok(
    beforeFlattenRows.some((row) => String(row.Item).toLowerCase() === "adhd"),
  )
})

test("flatten skips null and empty list elements", () => {
  const query = parseQuery(`TABLE file.link AS N FROM ${SOURCES_FROM} FLATTEN condition AS Item`)
  const synthetic = [
    toQueryRow({
      slug: "research/sources/empty",
      relativePath: "Research/Sources/Empty.md",
      title: "Empty",
      frontmatter: { note_type: "source", tags: ["research/source"], condition: [] },
    }),
    toQueryRow({
      slug: "research/sources/mixed",
      relativePath: "Research/Sources/Mixed.md",
      title: "Mixed",
      frontmatter: { note_type: "source", tags: ["research/source"], condition: [null, "", "adhd"] },
    }),
    toQueryRow({
      slug: "research/sources/scalar",
      relativePath: "Research/Sources/Scalar.md",
      title: "Scalar",
      frontmatter: { note_type: "source", tags: ["research/source"], condition: "cptsd" },
    }),
  ]
  const results = evaluateQuery(query, selectRows(synthetic, query.from))
  assert.equal(results.length, 2, "an empty list contributes no rows and blanks are skipped")
  assert.deepEqual(
    results.map((row) => String(row.Item)).sort(),
    ["adhd", "cptsd"],
  )
})

test("unsupported query shapes fail loudly instead of guessing", () => {
  assert.throws(() => {
    const query = parseQuery(`TABLE x AS X FROM ${SOURCES_FROM} WHERE bar(access_level) = 1`)
    evaluateQuery(query, selectRows(rows, query.source ?? query.from))
  }, /unsupported function bar/)
  assert.throws(() => parseQuery("CALENDAR something"))
  assert.throws(() => parseQuery('TABLE x FROM "a" FLATTEN length(condition)'), /requires an alias/)
  assert.throws(() => parseQuery('TABLE x FROM "a" GROUP BY condition SORT condition ASC LIMIT 5'))
  assert.throws(
    () => parseQuery(`TABLE x WHERE note_type = "lesson" FROM ${SOURCES_FROM}`),
    /FROM must come before/,
  )
})

test("FROM sources combine tags, folders, negation and grouping as Dataview does", () => {
  const synthetic = [
    { slug: "a", relativePath: "Research/Domains/X/Articles/A.md", tags: ["research/source"] },
    { slug: "b", relativePath: "Research/Domains/X/Pages/B.md", tags: ["Research/Source/educational"] },
    { slug: "c", relativePath: "Research/Templates/C.md", tags: ["research/source"] },
    { slug: "d", relativePath: "Research/Domains/X/Topic D.md", tags: ["research/topic"] },
  ].map((n) => toQueryRow({ ...n, title: n.slug, frontmatter: { tags: n.tags } }))
  const pick = (from: string) =>
    selectRows(synthetic, parseSource(from))
      .map((row) => (row.file as { slug: string }).slug)
      .sort()
  assert.deepEqual(pick(SOURCES_FROM), ["a", "b"], "nested tags match, case-insensitively")
  assert.deepEqual(pick('#research/topic OR "Research/Templates"'), ["c", "d"])
  assert.deepEqual(pick('-(#research/source OR #research/topic)'), [])
  assert.deepEqual(pick('"Research/Domains" AND -#research/topic'), ["a", "b"])
  assert.deepEqual(parseSource('"Research/Learning"'), { kind: "folder", path: "Research/Learning" })
  assert.throws(() => parseSource('#a AND'), /unsupported FROM/)
})

test("negation, flatten-in-place, join and date follow Dataview", () => {
  const row = toQueryRow({
    slug: "s",
    relativePath: "Research/Domains/X/Articles/S.md",
    title: "S",
    frontmatter: { condition: ["adhd", "autism"], reviewed: new Date("2025-12-01T00:00:00Z") },
  })
  const run = (query: string) => evaluateQuery(parseQuery(query), [row])
  assert.equal(run('LIST WHERE !contains(condition, "cptsd")').length, 1)
  assert.equal(run('LIST WHERE !contains(condition, "adhd")').length, 0)
  assert.equal(run("LIST WHERE condition != null").length, 1, "!= is still inequality")
  assert.deepEqual(
    run("TABLE condition FLATTEN condition").map((r) => r.condition),
    ["adhd", "autism"],
  )
  assert.equal(evaluateExpression(parseExpression('join(condition, " / ")'), row), "adhd / autism")
  assert.equal(evaluateExpression(parseExpression("join(condition)"), row), "adhd, autism")
  assert.equal(run('LIST WHERE reviewed < date("2026-01-01")').length, 1)
  assert.equal(run('LIST WHERE reviewed < date("2025-06-01")').length, 0)
})
