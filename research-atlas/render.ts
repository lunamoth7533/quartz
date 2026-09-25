/**
 * Turns evaluated dashboard rows into HTML for the site.
 *
 * Everything that reaches the markup is escaped here, and every generated link
 * is resolved with Quartz's own path helper so relative links stay correct at
 * any slug depth. Values that are not note references stay as plain text: the
 * dashboards show what the source metadata actually says.
 */

import { resolveRelative } from "../quartz/util/path"
import type { FullSlug } from "../quartz/util/path"
import type { DashboardQuery, QueryColumn } from "./dql"
import { evaluateExpression, groupKeyColumn, UnsupportedQueryError } from "./dql"

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export interface RenderContext {
  currentSlug: FullSlug
  /** Slugs of every page in the build, used to decide whether a value can be linked. */
  knownSlugs: Set<string>
}

function isNotePath(value: string): boolean {
  return /^[^"\n]+\.(md|canvas|base)$/i.test(value.trim())
}

function noteStem(value: string): string {
  return value.trim().replace(/\.(md|canvas|base)$/i, "")
}

function linkHtml(target: FullSlug, label: string, context: RenderContext): string {
  const href = resolveRelative(context.currentSlug, target)
  return `<a class="internal" href="${escapeHtml(href)}">${escapeHtml(label)}</a>`
}

function slugCandidates(value: string): string[] {
  const stem = noteStem(value)
  return [stem, `Research/${stem}`, `Research/Learning/${stem}`]
}

function resolveValueSlug(value: string, context: RenderContext): string | null {
  const candidates = slugCandidates(value)
  const found = candidates.find((candidate) => context.knownSlugs.has(candidate))
  return found ?? null
}

function formatPrimitive(value: unknown, context: RenderContext): string {
  if (value == null) return ""
  if (value instanceof Date) {
    return escapeHtml(value.toISOString().slice(0, 10))
  }
  if (typeof value === "number") return escapeHtml(String(value))
  if (typeof value === "boolean") return value ? "yes" : "no"
  if (typeof value === "string") {
    const trimmed = value.trim()
    if (trimmed.length === 0) return ""
    if (isNotePath(trimmed) && !trimmed.includes("://")) {
      const slug = resolveValueSlug(trimmed, context)
      if (slug) return linkHtml(slug as FullSlug, noteStem(trimmed), context)
    }
    if (/^https?:\/\//i.test(trimmed)) {
      return `<a class="external" href="${escapeHtml(trimmed)}" target="_blank" rel="noopener">${escapeHtml(trimmed)}</a>`
    }
    return escapeHtml(trimmed)
  }
  if (Array.isArray(value)) {
    return value.map((item) => formatValue(item, context)).filter((html) => html.length > 0).join(", ")
  }
  if (typeof value === "object") {
    const record = value as Record<string, unknown>
    if (typeof record.slug === "string" && typeof record.title === "string") {
      return linkHtml(record.slug as FullSlug, record.title, context)
    }
    return escapeHtml(JSON.stringify(value))
  }
  return escapeHtml(String(value))
}

export function formatValue(value: unknown, context: RenderContext): string {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    const record = value as Record<string, unknown>
    if (typeof record.slug === "string" && typeof record.title === "string") {
      return linkHtml(record.slug as FullSlug, record.title, context)
    }
  }
  if (Array.isArray(value)) {
    return value
      .map((item) => formatValue(item, context))
      .filter((html) => html.length > 0)
      .join(", ")
  }
  return formatPrimitive(value, context)
}

function isNumeric(value: unknown): boolean {
  return typeof value === "number" || /^-?[0-9.]+$/.test(String(value ?? ""))
}

export interface RenderedBlock {
  html: string
  status: "rendered" | "empty" | "unsupported"
  rowCount: number
  message?: string
}

function querySourceHtml(querySource: string): string {
  return `<details class="atlas-query"><summary>Query</summary><pre><code class="language-dataview">${escapeHtml(
    querySource,
  )}</code></pre></details>`
}

function captionHtml(status: string, rowCount: number): string {
  const label =
    status === "unsupported"
      ? "not rendered"
      : rowCount === 1
        ? "1 note"
        : `${rowCount} notes`
  return `<div class="atlas-dashboard-caption">${escapeHtml(label)}</div>`
}

/**
 * Render one dashboard panel. `rows` are already the rows the query selected;
 * this function only formats them, so an unsupported expression surfaces as an
 * explicit panel instead of silently rendering the wrong thing.
 */
export function renderDashboard(
  query: DashboardQuery,
  rows: Record<string, unknown>[],
  context: RenderContext,
  querySource: string,
): RenderedBlock {
  let body = ""
  const groupColumn = groupKeyColumn(query)
  const columnExpressions: QueryColumn[] = groupColumn
    ? [groupColumn, ...query.columns]
    : query.columns

  if (query.kind === "list") {
    if (rows.length === 0) {
      body = `<div class="atlas-empty">No notes match this view.</div>`
    } else {
      const items = rows
        .map((row) => {
          const value =
            columnExpressions.length > 0
              ? evaluateExpression(columnExpressions[0].expr, row)
              : (row.file as Record<string, unknown>)
          return `<li>${formatValue(value, context)}</li>`
        })
        .join("")
      body = `<ul class="atlas-list">${items}</ul>`
    }
  } else {
    if (columnExpressions.length === 0) {
      throw new UnsupportedQueryError("TABLE without columns")
    }
    const head = columnExpressions
      .map((column) => `<th scope="col">${escapeHtml(column.label)}</th>`)
      .join("")
    const bodyRows = rows
      .map((row) => {
        const cells = columnExpressions
          .map((column) => {
            const value = evaluateExpression(column.expr, row)
            const numeric = isNumeric(value) ? ' class="atlas-num"' : ""
            return `<td${numeric}>${formatValue(value, context)}</td>`
          })
          .join("")
        return `<tr>${cells}</tr>`
      })
      .join("")
    const table =
      rows.length === 0
        ? `<div class="atlas-empty">No notes match this view.</div>`
        : `<div class="table-container"><table><thead><tr>${head}</tr></thead><tbody>${bodyRows}</tbody></table></div>`
    body = table
  }

  const caption = captionHtml(rows.length === 0 ? "empty" : "rendered", rows.length)
  return {
    html: `${body}${caption}${querySourceHtml(querySource)}`,
    status: rows.length === 0 ? "empty" : "rendered",
    rowCount: rows.length,
  }
}

export function renderUnsupported(querySource: string, message: string): RenderedBlock {
  return {
    html: `<div class="atlas-unsupported"><p><strong>This view is not rendered on the site.</strong></p><p>${escapeHtml(
      message,
    )}</p><p>The authored query is preserved below and still works in Obsidian with Dataview enabled.</p></div>${querySourceHtml(
      querySource,
    )}`,
    status: "unsupported",
    rowCount: 0,
    message,
  }
}
