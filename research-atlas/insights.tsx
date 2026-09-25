/**
 * Research Atlas insights: build-time charts for the note tagged
 * `research/visualizations` (the vault's Visualizations hub).
 *
 * The hub's authored tables list records; these charts answer the questions a
 * table cannot show at a glance: how the layers connect, which notes carry the
 * vault, where each domain and condition is covered, how recent and how deeply
 * checked the evidence is, and what nothing links to yet.
 *
 * Everything is computed from authored properties and links. Charts are plain
 * HTML (bars, columns, heatmap tables) so text stays readable on a phone and
 * every chart has its data in a table.
 */

import type { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "@quartz-community/types"
import { classNames } from "../quartz/util/lang"
import { resolveRelative } from "../quartz/util/path"
import type { FullSlug } from "../quartz/util/path"
import { CATEGORY_INFO, categoryFor, tagLabel, type AtlasCategory } from "./categories"
import { CategoryKey, GlobalGraphPanel } from "./graph/markup"
import { isTemplatePath } from "./notes"
import { isUtilityPage } from "./utility-pages"

type Files = QuartzComponentProps["allFiles"]
type File = Files[number]
type Frontmatter = Record<string, unknown>

export const INSIGHTS_TAG = "research/visualizations"

const fm = (file: File) => (file.frontmatter ?? {}) as Frontmatter
const list = (value: unknown): string[] =>
  value == null ? [] : (Array.isArray(value) ? value : [value]).map(String).filter((v) => v.length > 0)
const text = (value: unknown) => (value == null ? "" : String(value))
const simple = (slug: string) => (slug === "index" ? "/" : slug.endsWith("/index") ? slug.slice(0, -5) : slug)
const titleOf = (file: File) => text(fm(file).title) || String(file.slug)
const familyOf = (file: File) =>
  categoryFor({ slug: String(file.slug), noteType: fm(file).note_type, tags: fm(file).tags })

/** Published notes: no templates or utility pages (they are unlisted everywhere). */
export function publishedNotes(allFiles: Files): File[] {
  return allFiles.filter(
    (file) => Boolean(file.slug) && !isTemplatePath(file.relativePath) && !isUtilityPage(file.relativePath),
  )
}

const isListing = (slug: string) => slug === "index" || slug.endsWith("/index") || slug.startsWith("tags/")

function median(values: number[]): number {
  if (values.length === 0) return 0
  const sorted = [...values].sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)
  return sorted.length % 2 ? sorted[mid] : Math.round((sorted[mid - 1] + sorted[mid]) / 2)
}

// --- data ------------------------------------------------------------------

export const LAYERS = [
  { key: "source", label: "Sources" },
  { key: "topic", label: "Topics" },
  { key: "lesson", label: "Lessons" },
  { key: "module", label: "Modules" },
  { key: "map", label: "Maps" },
  { key: "argument", label: "Arguments" },
] as const

export interface MatrixRow {
  key: string
  label: string
  values: number[]
  total: number
}

/** Notes per value of `field` (domain or condition) and per authored note type. */
export function coverageMatrix(allFiles: Files, field: "domain" | "condition") {
  const rows = new Map<string, number[]>()
  for (const file of publishedNotes(allFiles)) {
    const layer = LAYERS.findIndex((l) => l.key === text(fm(file).note_type))
    if (layer < 0) continue
    for (const value of list(fm(file)[field])) {
      const counts = rows.get(value) ?? LAYERS.map(() => 0)
      counts[layer] += 1
      rows.set(value, counts)
    }
  }
  const used = LAYERS.map((_, i) => [...rows.values()].some((counts) => counts[i] > 0))
  return {
    columns: LAYERS.filter((_, i) => used[i]).map((l) => l.label),
    rows: [...rows.entries()]
      .map(([key, counts]): MatrixRow => {
        const values = counts.filter((_, i) => used[i])
        return { key, label: tagLabel(key), values, total: values.reduce((a, b) => a + b, 0) }
      })
      .sort((a, b) => b.total - a.total || a.label.localeCompare(b.label)),
  }
}

export const FLOW_FAMILIES: AtlasCategory[] = ["source", "topic", "learning", "hub", "argument"]

export interface LinkStats {
  /** flows[from][to]: links from notes of one family to notes of another. */
  flows: number[][]
  inbound: Map<string, Set<string>>
  noteBySlug: Map<string, File>
}

export function linkStats(allFiles: Files): LinkStats {
  const notes = publishedNotes(allFiles).filter((file) => !isListing(String(file.slug)))
  const noteBySlug = new Map(notes.map((file) => [simple(String(file.slug)), file]))
  const flows = FLOW_FAMILIES.map(() => FLOW_FAMILIES.map(() => 0))
  const inbound = new Map<string, Set<string>>()
  for (const file of notes) {
    const from = simple(String(file.slug))
    const fromFamily = FLOW_FAMILIES.indexOf(familyOf(file))
    for (const target of new Set((file as { links?: string[] }).links ?? [])) {
      if (target === from || !noteBySlug.has(target)) continue
      const toFamily = FLOW_FAMILIES.indexOf(familyOf(noteBySlug.get(target)!))
      if (fromFamily >= 0 && toFamily >= 0) flows[fromFamily][toFamily] += 1
      const set = inbound.get(target) ?? new Set<string>()
      set.add(from)
      inbound.set(target, set)
    }
  }
  return { flows, inbound, noteBySlug }
}

export function backbone(stats: LinkStats, limit = 12) {
  return [...stats.inbound.entries()]
    .map(([slug, from]) => ({ slug, count: from.size, file: stats.noteBySlug.get(slug)! }))
    .sort((a, b) => b.count - a.count || titleOf(a.file).localeCompare(titleOf(b.file)))
    .slice(0, limit)
}

export function looseEnds(stats: LinkStats) {
  return [...stats.noteBySlug.entries()]
    .filter(([slug]) => !stats.inbound.has(slug))
    .map(([slug, file]) => ({ slug, file, category: familyOf(file) }))
    .sort((a, b) => a.category.localeCompare(b.category) || titleOf(a.file).localeCompare(titleOf(b.file)))
}

const sourcesOf = (allFiles: Files) =>
  publishedNotes(allFiles).filter((file) => text(fm(file).note_type) === "source")

export function yearCounts(allFiles: Files) {
  const years = sourcesOf(allFiles)
    .map((file) => Number(fm(file).year))
    .filter((year) => Number.isInteger(year) && year > 1800)
  if (years.length === 0) return { years, columns: [] as { label: string; value: number }[] }
  const min = Math.min(...years)
  const max = Math.max(...years)
  const columns = Array.from({ length: max - min + 1 }, (_, i) => ({
    label: String(min + i),
    value: years.filter((year) => year === min + i).length,
  }))
  return { years, columns }
}

export function designCounts(allFiles: Files, limit = 9) {
  const counts = new Map<string, number>()
  for (const file of sourcesOf(allFiles)) {
    const design = text(fm(file).study_type).trim()
    if (design) counts.set(design, (counts.get(design) ?? 0) + 1)
  }
  const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  const rows = sorted.slice(0, limit).map(([label, value]) => ({ label, value }))
  const rest = sorted.slice(limit)
  if (rest.length > 0) {
    rows.push({
      label: `${rest.length} other designs`,
      value: rest.reduce((sum, [, value]) => sum + value, 0),
    })
  }
  return { rows, total: sorted.reduce((sum, [, value]) => sum + value, 0), kinds: sorted.length }
}

/** Depth of checking for papers, least to most (the ordinal ramp follows this order). */
export const PAPER_CHECKS = [
  { key: "abstract_checked", label: "Abstract only" },
  { key: "article_page_checked", label: "Article page" },
  { key: "full_text_checked", label: "Full text" },
] as const

export function paperChecks(allFiles: Files) {
  const sources = sourcesOf(allFiles)
  const papers = sources.filter((file) => text(fm(file).source_kind) === "paper")
  const segments = PAPER_CHECKS.map((level) => ({
    ...level,
    value: papers.filter((file) => text(fm(file).verification) === level.key).length,
  }))
  const recorded = segments.reduce((sum, s) => sum + s.value, 0)
  const others = sources.filter((file) => text(fm(file).source_kind) !== "paper")
  return {
    papers: papers.length,
    segments,
    unrecorded: papers.length - recorded,
    others: others.length,
    othersChecked: others.filter((file) => text(fm(file).verification).endsWith("_checked")).length,
  }
}

export function readingState(allFiles: Files) {
  const sources = sourcesOf(allFiles)
  const count = (field: string, value: string) =>
    sources.filter((file) => text(fm(file)[field]) === value).length
  return {
    total: sources.length,
    read: count("reading_status", "read"),
    reading: count("reading_status", "reading"),
    queued: count("reading_status", "queued"),
    core: count("queue_tier", "core"),
    advanced: count("queue_tier", "advanced"),
  }
}

export function topicDepth(allFiles: Files) {
  const values = publishedNotes(allFiles)
    .filter((file) => text(fm(file).note_type) === "topic")
    .map((file) => Number(fm(file).source_count))
    .filter((value) => Number.isFinite(value) && value >= 0)
  const max = values.length ? Math.max(...values) : 0
  return {
    values,
    columns: Array.from({ length: max + 1 }, (_, n) => ({
      label: String(n),
      value: values.filter((value) => value === n).length,
    })),
  }
}

// --- chart primitives ------------------------------------------------------------

const pct = (value: number, max: number) => (max > 0 ? Math.max(0, Math.min(100, (value / max) * 100)) : 0)
const fmt = (value: number) => value.toLocaleString("en-US")

function Chart({ id, title, takeaway, children }: { id: string; title: string; takeaway: string; children: unknown }) {
  return (
    <figure class="atlas-chart" aria-labelledby={`${id}-title`}>
      <figcaption>
        <h3 id={`${id}-title`}>{title}</h3>
        <p>{takeaway}</p>
      </figcaption>
      {children}
    </figure>
  )
}

function DataTable({ head, rows }: { head: string[]; rows: (string | number)[][] }) {
  return (
    <details class="atlas-chart-data">
      <summary>Show the data</summary>
      <table>
        <thead>
          <tr>
            {head.map((cell) => (
              <th scope="col">{cell}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr>
              {row.map((cell, i) => (i === 0 ? <th scope="row">{cell}</th> : <td>{cell}</td>))}
            </tr>
          ))}
        </tbody>
      </table>
    </details>
  )
}

interface BarRow {
  label: string
  value: number
  href?: string
  category?: AtlasCategory
}

function Bars({ rows, unit }: { rows: BarRow[]; unit: string }) {
  const max = Math.max(1, ...rows.map((row) => row.value))
  return (
    <ol class="atlas-bars">
      {rows.map((row) => (
        <li title={`${row.label}: ${fmt(row.value)} ${unit}`}>
          <span class="atlas-bar-label">
            {row.category ? <CategoryKey category={row.category} /> : null}
            {row.href ? (
              <a class="internal" href={row.href}>
                {row.label}
              </a>
            ) : (
              row.label
            )}
          </span>
          <span class="atlas-bar-track">
            <span class="atlas-bar" data-cat={row.category} style={`width:${pct(row.value, max)}%`} />
          </span>
          <span class="atlas-bar-value">{fmt(row.value)}</span>
        </li>
      ))}
    </ol>
  )
}

function Columns({
  columns,
  tickEvery,
  unit,
  axisLabel,
  category,
}: {
  columns: { label: string; value: number }[]
  tickEvery: number
  unit: string
  axisLabel: string
  category: AtlasCategory
}) {
  const max = Math.max(1, ...columns.map((c) => c.value))
  const peak = columns.findIndex((c) => c.value === max)
  return (
    <div class="atlas-columns" data-cat={category}>
      <div class="atlas-columns-scale" aria-hidden="true">
        <span>{fmt(max)}</span>
        <span>0</span>
      </div>
      <div class="atlas-columns-plot" aria-hidden="true">
        {columns.map((c, i) => (
          <span class="atlas-col" title={`${c.label}: ${fmt(c.value)} ${unit}`}>
            {i === peak ? <span class="atlas-col-peak">{fmt(c.value)}</span> : null}
            <span class="atlas-col-bar" style={`height:${pct(c.value, max)}%`} />
          </span>
        ))}
      </div>
      <div class="atlas-columns-axis" aria-hidden="true">
        {columns.map((c, i) => (
          <span>{i % tickEvery === 0 || i === columns.length - 1 ? c.label : ""}</span>
        ))}
      </div>
      <p class="atlas-columns-caption">{axisLabel}</p>
    </div>
  )
}

/** A heatmap that is also its own data table: shading shows size, the number is always printed. */
function Heatmap({
  columns,
  rows,
  corner,
  caption,
}: {
  columns: string[]
  rows: { label: string; values: number[] }[]
  corner: string
  caption: string
}) {
  const max = Math.max(1, ...rows.flatMap((row) => row.values))
  const step = (value: number) => (value <= 0 ? 0 : Math.max(1, Math.ceil((value / max) * 6)))
  return (
    <div class="atlas-heat-wrap">
      <table class="atlas-heat">
        <caption>{caption}</caption>
        <thead>
          <tr>
            <th scope="col">{corner}</th>
            {columns.map((column) => (
              <th scope="col">{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr>
              <th scope="row">{row.label}</th>
              {row.values.map((value, i) => (
                <td class={`heat-${step(value)}`} title={`${row.label} · ${columns[i]}: ${fmt(value)}`}>
                  {value > 0 ? fmt(value) : <span aria-label="none">·</span>}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// --- the panel ---------------------------------------------------------------------

const AtlasInsights: QuartzComponent = ({ fileData, allFiles, displayClass }: QuartzComponentProps) => {
  if (!list(fm(fileData as File).tags).includes(INSIGHTS_TAG)) return null
  const here = fileData.slug as FullSlug
  const href = (slug: string) => resolveRelative(here, slug as FullSlug)

  const stats = linkStats(allFiles)
  const familyLabel = (cat: AtlasCategory) => CATEGORY_INFO[cat].label
  let strongest = { from: 0, to: 0, value: -1 }
  stats.flows.forEach((row, from) =>
    row.forEach((value, to) => {
      if (from !== to && value > strongest.value) strongest = { from, to, value }
    }),
  )
  const top = backbone(stats)
  const loose = looseEnds(stats)
  const looseByFamily = FLOW_FAMILIES.map((cat) => ({ cat, count: loose.filter((l) => l.category === cat).length }))

  const domains = coverageMatrix(allFiles, "domain")
  const lessonCol = domains.columns.indexOf("Lessons")
  const untaught = domains.rows.filter((row) => lessonCol >= 0 && row.values[lessonCol] === 0 && row.total >= 10)
  const conditions = coverageMatrix(allFiles, "condition")
  const byTotal = [...conditions.rows].filter((r) => r.total >= 5)

  const { years, columns: yearColumns } = yearCounts(allFiles)
  const designs = designCounts(allFiles)
  const checks = paperChecks(allFiles)
  const full = checks.segments.find((s) => s.key === "full_text_checked")?.value ?? 0
  const abstractOnly = checks.segments.find((s) => s.key === "abstract_checked")?.value ?? 0
  const reading = readingState(allFiles)
  const depth = topicDepth(allFiles)
  const thin = depth.values.filter((v) => v <= 2).length

  return (
    <section class={classNames(displayClass, "atlas-insights")} aria-labelledby="atlas-insights-title">
      <h2 id="atlas-insights-title">At a glance</h2>
      <p class="atlas-insights-lead">
        Computed from note properties and links each time the site is built. Colour and shape mean the same
        kind of note everywhere on this site:{" "}
        {(["source", "topic", "learning", "hub", "argument"] as AtlasCategory[]).map((cat) => (
          <span class="atlas-inline-key" key={cat}>
            <CategoryKey category={cat} />
            {familyLabel(cat)}
          </span>
        ))}
        .
      </p>

      <GlobalGraphPanel showTags inline />

      <div class="atlas-chart-grid">
        <Chart
          id="atlas-flows"
          title="How the layers link to each other"
          takeaway={
            strongest.value > 0
              ? `The busiest route runs from ${familyLabel(FLOW_FAMILIES[strongest.from]).toLowerCase()} to ${familyLabel(FLOW_FAMILIES[strongest.to]).toLowerCase()} (${fmt(strongest.value)} links). Rows link out to columns.`
              : "No links between layers yet."
          }
        >
          <Heatmap
            corner="Links from ↓ to →"
            caption="Links from notes in each row family to notes in each column family"
            columns={FLOW_FAMILIES.map(familyLabel)}
            rows={FLOW_FAMILIES.map((cat, i) => ({ label: familyLabel(cat), values: stats.flows[i] }))}
          />
        </Chart>

        <Chart
          id="atlas-backbone"
          title="The notes everything else leans on"
          takeaway={
            top.length > 0
              ? `${titleOf(top[0].file)} is linked from ${fmt(top[0].count)} notes, more than any other.`
              : "No notes are linked yet."
          }
        >
          <Bars
            unit="linking notes"
            rows={top.map((entry) => ({
              label: titleOf(entry.file),
              value: entry.count,
              href: href(entry.slug),
              category: familyOf(entry.file),
            }))}
          />
          <DataTable
            head={["Note", "Kind", "Notes linking to it"]}
            rows={top.map((entry) => [titleOf(entry.file), familyLabel(familyOf(entry.file)), entry.count])}
          />
        </Chart>

        <Chart
          id="atlas-domains"
          title="Where each domain is covered"
          takeaway={
            untaught.length > 0
              ? `${untaught.length} domains have sources and topics but no lessons yet: ${untaught.map((r) => r.label).join(", ")}.`
              : "Every domain with ten or more notes is taught in at least one lesson."
          }
        >
          <Heatmap
            corner="Domain"
            caption="Notes per domain and note type"
            columns={domains.columns}
            rows={domains.rows}
          />
        </Chart>

        <Chart
          id="atlas-conditions"
          title="How each condition is covered"
          takeaway={
            byTotal.length > 1
              ? `${byTotal[0].label} has the most notes (${fmt(byTotal[0].total)}); ${byTotal[byTotal.length - 1].label} the fewest among the main conditions (${fmt(byTotal[byTotal.length - 1].total)}).`
              : "Too few condition notes to compare."
          }
        >
          <Heatmap
            corner="Condition"
            caption="Notes per condition and note type"
            columns={conditions.columns}
            rows={conditions.rows}
          />
        </Chart>

        <Chart
          id="atlas-years"
          title="How recent the evidence is"
          takeaway={
            years.length > 0
              ? `Half of the ${fmt(years.length)} dated sources were published in ${median(years)} or later; ${fmt(years.filter((y) => y >= 2020).length)} since 2020.`
              : "No source records a year."
          }
        >
          <Columns
            columns={yearColumns}
            tickEvery={5}
            unit="sources"
            axisLabel="Sources per publication year"
            category="source"
          />
          <DataTable
            head={["Year", "Sources"]}
            rows={yearColumns.filter((c) => c.value > 0).map((c) => [c.label, c.value])}
          />
        </Chart>

        <Chart
          id="atlas-designs"
          title="What kind of evidence it is"
          takeaway={
            designs.rows.length > 0
              ? `${fmt(designs.total)} sources record a design across ${fmt(designs.kinds)} labels; the most common is "${designs.rows[0].label}" (${fmt(designs.rows[0].value)}).`
              : "No source records a study design."
          }
        >
          <Bars unit="sources" rows={designs.rows} />
          <DataTable head={["Design (as recorded)", "Sources"]} rows={designs.rows.map((r) => [r.label, r.value])} />
        </Chart>

        <Chart
          id="atlas-checks"
          title="How deeply papers were checked"
          takeaway={`${fmt(full)} of ${fmt(checks.papers)} papers (${Math.round(pct(full, checks.papers))}%) were checked against the full text; ${fmt(abstractOnly)} rest on the abstract only.`}
        >
          <div class="atlas-stack" role="img" aria-label={checks.segments.map((s) => `${s.label}: ${s.value}`).join(", ")}>
            {checks.segments
              .filter((s) => s.value > 0)
              .map((s) => (
                <span
                  class={`atlas-stack-seg ord-${PAPER_CHECKS.findIndex((l) => l.key === s.key) + 1}`}
                  style={`flex-grow:${s.value}`}
                  title={`${s.label}: ${fmt(s.value)} papers`}
                />
              ))}
          </div>
          <ul class="atlas-stack-legend">
            {checks.segments.map((s, i) => (
              <li>
                <span class={`atlas-swatch ord-${i + 1}`} aria-hidden="true" />
                {s.label} <strong>{fmt(s.value)}</strong>
              </li>
            ))}
            {checks.unrecorded > 0 ? <li>Not recorded {fmt(checks.unrecorded)}</li> : null}
          </ul>
          <p class="atlas-chart-note">
            {fmt(checks.othersChecked)} of {fmt(checks.others)} educational and official sources were checked against
            the page itself.
          </p>
        </Chart>

        <Chart
          id="atlas-reading"
          title="What has been read"
          takeaway="Reading status as recorded in each source note; a downloaded or verified source is not a read one."
        >
          <dl class="atlas-stats">
            <div>
              <dt>Read</dt>
              <dd>
                {fmt(reading.read)}
                <span> of {fmt(reading.total)}</span>
              </dd>
            </div>
            <div>
              <dt>Reading now</dt>
              <dd>{fmt(reading.reading)}</dd>
            </div>
            <div>
              <dt>Queued</dt>
              <dd>
                {fmt(reading.queued)}
                <span>
                  {" "}
                  {fmt(reading.core)} core · {fmt(reading.advanced)} advanced
                </span>
              </dd>
            </div>
          </dl>
        </Chart>

        <Chart
          id="atlas-depth"
          title="How well each topic is supported"
          takeaway={
            depth.values.length > 0
              ? `Topics cite a median of ${median(depth.values)} sources; ${fmt(thin)} cite two or fewer.`
              : "No topic records a source count."
          }
        >
          <Columns
            columns={depth.columns}
            tickEvery={1}
            unit="topics"
            axisLabel="Topics by number of sources cited"
            category="topic"
          />
          <DataTable
            head={["Sources cited", "Topics"]}
            rows={depth.columns.filter((c) => c.value > 0).map((c) => [c.label, c.value])}
          />
        </Chart>

        <Chart
          id="atlas-loose"
          title="Loose ends"
          takeaway={
            loose.length > 0
              ? `${fmt(loose.length)} notes have no other note linking to them, so they can only be found by search or the explorer.`
              : "Every note is linked from at least one other note."
          }
        >
          <ul class="atlas-stack-legend">
            {looseByFamily
              .filter((f) => f.count > 0)
              .map((f) => (
                <li>
                  <CategoryKey category={f.cat} />
                  {familyLabel(f.cat)} <strong>{fmt(f.count)}</strong>
                </li>
              ))}
          </ul>
          {loose.length > 0 ? (
            <details class="atlas-chart-data">
              <summary>List them</summary>
              <ul class="atlas-loose-list">
                {loose.map((entry) => (
                  <li>
                    <CategoryKey category={entry.category} />
                    <a class="internal" href={href(entry.slug)}>
                      {titleOf(entry.file)}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          ) : null}
        </Chart>
      </div>
    </section>
  )
}

export const AtlasInsightsComponent: QuartzComponentConstructor = () => AtlasInsights
