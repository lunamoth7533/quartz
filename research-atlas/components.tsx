/**
 * Site components for the Research Atlas.
 *
 * These read authored frontmatter and ordering metadata; they never infer
 * reading state, verification or scientific claims that a note does not state.
 */

import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types"
import { Fragment, h } from "preact"
import { BasesBody } from "@quartz-community/bases-page"
import { CanvasBody } from "@quartz-community/canvas-page"
import { ContentBody } from "@quartz-community/content-page"
import { classNames } from "../quartz/util/lang"
import { resolveRelative } from "../quartz/util/path"
import type { FullSlug } from "../quartz/util/path"
import { isInFolder, isTemplatePath } from "./notes"
import { resolveAuthoredHref } from "./notes"
import { buildDashboardIndex } from "./dashboards"

type Frontmatter = Record<string, unknown>

function text(value: unknown): string {
  if (value == null) return ""
  if (Array.isArray(value))
    return value
      .map((item) => text(item))
      .filter(Boolean)
      .join(", ")
  return String(value)
}

function values(value: unknown): string[] {
  if (value == null) return []
  if (Array.isArray(value)) return value.map((item) => text(item)).filter((item) => item.length > 0)
  const single = text(value)
  return single.length > 0 ? [single] : []
}

const ACCESS_LABELS: Record<string, string> = {
  "abstract-only": "Abstract only",
  "public-page": "Public page",
  "official-page": "Official page",
  "full-text": "Full text",
}

const VERIFICATION_LABELS: Record<string, string> = {
  abstract_checked: "Abstract checked",
  educational_checked: "Educational page checked",
  full_text_checked: "Full text checked",
  not_checked: "Not checked",
}

const READING_LABELS: Record<string, string> = {
  queued: "Queued - not read yet",
  reading: "Reading in progress",
  read: "Read",
}

function humanize(value: string): string {
  return value.replace(/[-_]/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase())
}

interface Fact {
  label: string
  value: string
  href?: string
  chips?: string[]
  note?: string
}

interface NoteRef {
  slug: FullSlug
  title: string
  noteType: string
  module: string
}

function noteRefs(allFiles: QuartzComponentProps["allFiles"]): NoteRef[] {
  const refs: NoteRef[] = []
  for (const file of allFiles) {
    if (isTemplatePath(file.relativePath)) continue
    const frontmatter = (file.frontmatter ?? {}) as Frontmatter
    if (!file.slug) continue
    refs.push({
      // `file.slug` is the slug Quartz generated for this note, so it is already
      // a full slug; the cast is the one place that fact is recorded.
      slug: file.slug as FullSlug,
      title: text(frontmatter.title),
      noteType: text(frontmatter.note_type),
      module: text(frontmatter.module),
    })
  }
  return refs
}

/**
 * Module notes by their authored `module` id (`m01`...). Lesson titles are the
 * human-facing `module_title` while the module note's title carries the
 * "Module 01 - " prefix, so the stable id is the only reliable join key.
 */
export function modulesById(
  allFiles: QuartzComponentProps["allFiles"],
): Map<string, { slug: FullSlug; title: string }> {
  const modules = new Map<string, { slug: FullSlug; title: string }>()
  for (const ref of noteRefs(allFiles)) {
    if (ref.noteType !== "module" || ref.module.length === 0) continue
    modules.set(ref.module.toLowerCase(), { slug: ref.slug, title: ref.title })
  }
  return modules
}

/**
 * Resolve an authored prerequisite title. Lessons win over topics, and a lesson
 * in the same module wins over one from another module, so the link points at
 * the study sequence element that is actually meant. Topic notes remain
 * reachable when no lesson matches.
 */
export function resolveNoteByTitle(
  allFiles: QuartzComponentProps["allFiles"],
  title: string,
  opts: { preferModule?: string; preferNoteType?: "lesson" | "topic" } = {},
): NoteRef | null {
  const wanted = title.trim().toLowerCase()
  const matches = noteRefs(allFiles).filter((ref) => ref.title.trim().toLowerCase() === wanted)
  if (matches.length === 0) return null
  const module = opts.preferModule?.toLowerCase()
  const ranked = [...matches].sort((a, b) => score(b) - score(a))
  return ranked[0] ?? null

  function score(ref: NoteRef): number {
    let value = 0
    if (opts.preferNoteType && ref.noteType === opts.preferNoteType) value += 4
    if (ref.noteType === "lesson") value += 2
    if (module && ref.module.toLowerCase() === module) value += 3
    return value
  }
}

function sourceFacts(frontmatter: Frontmatter): Fact[] {
  const facts: Fact[] = []
  const kind = text(frontmatter.source_kind)
  if (kind) facts.push({ label: "Source type", value: kind === "paper" ? "Paper" : humanize(kind) })
  const publisher = text(frontmatter.publisher) || text(frontmatter.journal)
  if (publisher) facts.push({ label: "Published in", value: publisher })
  if (frontmatter.year) facts.push({ label: "Year", value: text(frontmatter.year) })
  const design = text(frontmatter.study_type)
  if (design) facts.push({ label: "Design", value: design })
  const population = text(frontmatter.population)
  if (population) facts.push({ label: "Population", value: population })
  const access = text(frontmatter.access_level)
  if (access) facts.push({ label: "Access", value: ACCESS_LABELS[access] ?? humanize(access) })
  const verification = text(frontmatter.verification)
  if (verification) {
    const checked = text(frontmatter.verified_on)
    facts.push({
      label: "Verification",
      value: `${VERIFICATION_LABELS[verification] ?? humanize(verification)}${checked ? ` (${checked})` : ""}`,
    })
  }
  const reading = text(frontmatter.reading_status)
  if (reading) {
    facts.push({
      label: "Reading status",
      value: READING_LABELS[reading] ?? humanize(reading),
      note: "As recorded in the note",
    })
  }
  const queue = text(frontmatter.queue_tier)
  if (queue) facts.push({ label: "Reading queue", value: humanize(queue) })
  const conditions = values(frontmatter.condition).map(humanize)
  if (conditions.length > 0) facts.push({ label: "Condition", value: "", chips: conditions })
  const domains = values(frontmatter.domain).map(humanize)
  if (domains.length > 0) facts.push({ label: "Domain", value: "", chips: domains })
  const url = text(frontmatter.source_url)
  if (url) facts.push({ label: "Source", value: url, href: url })
  const doi = text(frontmatter.doi)
  if (doi) facts.push({ label: "DOI", value: doi })
  const pmid = text(frontmatter.pmid)
  if (pmid) facts.push({ label: "PMID", value: pmid })
  const pmcid = text(frontmatter.pmcid)
  if (pmcid) facts.push({ label: "PMCID", value: pmcid })

  return facts
}

function lessonFacts(frontmatter: Frontmatter, allFiles: QuartzComponentProps["allFiles"]): Fact[] {
  const facts: Fact[] = []
  const moduleTitle = text(frontmatter.module_title)
  if (moduleTitle) {
    const module = modulesById(allFiles).get(text(frontmatter.module).toLowerCase())
    facts.push({ label: "Module", value: moduleTitle, href: module?.slug })
  }
  if (frontmatter.lesson_order) {
    facts.push({ label: "Order", value: `Lesson ${text(frontmatter.lesson_order)}` })
  }
  if (frontmatter.source_count != null) {
    facts.push({ label: "Sources cited", value: text(frontmatter.source_count) })
  }
  if (frontmatter.question_count != null) {
    facts.push({ label: "Study questions", value: text(frontmatter.question_count) })
  }
  return facts
}

function moduleFacts(frontmatter: Frontmatter): Fact[] {
  const facts: Fact[] = []
  if (frontmatter.lesson_count != null) {
    facts.push({ label: "Lessons", value: text(frontmatter.lesson_count) })
  }
  if (frontmatter.source_count != null) {
    facts.push({ label: "Sources cited", value: text(frontmatter.source_count) })
  }
  const canvas = text(frontmatter.canvas)
  if (canvas) facts.push({ label: "Canvas", value: canvas })
  return facts
}

function topicFacts(frontmatter: Frontmatter): Fact[] {
  const facts: Fact[] = []
  if (frontmatter.source_count != null) {
    facts.push({ label: "Sources", value: text(frontmatter.source_count) })
  }
  const conditions = values(frontmatter.condition).map(humanize)
  if (conditions.length > 0) facts.push({ label: "Condition", value: "", chips: conditions })
  const domains = values(frontmatter.domain).map(humanize)
  if (domains.length > 0) facts.push({ label: "Domain", value: "", chips: domains })
  return facts
}

function argumentFacts(frontmatter: Frontmatter): Fact[] {
  const facts: Fact[] = []
  const status = text(frontmatter.status)
  if (status) facts.push({ label: "Status", value: humanize(status) })
  const confidence = text(frontmatter.confidence)
  if (confidence) facts.push({ label: "Confidence", value: humanize(confidence) })
  const conditions = values(frontmatter.condition).map(humanize)
  if (conditions.length > 0) facts.push({ label: "Condition", value: "", chips: conditions })
  return facts
}

export function factsFor(
  frontmatter: Frontmatter,
  noteType: string,
  allFiles: QuartzComponentProps["allFiles"],
): Fact[] {
  switch (noteType) {
    case "source":
      return sourceFacts(frontmatter)
    case "lesson":
      return lessonFacts(frontmatter, allFiles)
    case "module":
      return moduleFacts(frontmatter)
    case "topic":
      return topicFacts(frontmatter)
    case "argument":
      return argumentFacts(frontmatter)
    default:
      return []
  }
}

const AtlasFacts: QuartzComponent = ({
  fileData,
  allFiles,
  displayClass,
}: QuartzComponentProps) => {
  const frontmatter = (fileData.frontmatter ?? {}) as Frontmatter
  const noteType = text(frontmatter.note_type)
  if (isTemplatePath(fileData.relativePath)) return null
  const facts = factsFor(frontmatter, noteType, allFiles)
  if (facts.length === 0) return null
  return (
    <dl class={classNames(displayClass, "atlas-facts")} aria-label="Note details">
      {facts.map((fact) => (
        <div class="atlas-fact" key={fact.label}>
          <dt>{fact.label}</dt>
          <dd>
            {fact.chips ? (
              <span class="atlas-chips">
                {fact.chips.map((chip) => (
                  <span class="atlas-chip" key={chip}>
                    {chip}
                  </span>
                ))}
              </span>
            ) : fact.href ? (
              <a
                class={/^https?:/i.test(fact.href) ? "external" : "internal"}
                href={
                  /^https?:/i.test(fact.href)
                    ? fact.href
                    : resolveRelative(fileData.slug as FullSlug, fact.href as FullSlug)
                }
              >
                {fact.value}
              </a>
            ) : (
              fact.value
            )}
            {fact.note ? <span class="atlas-fact-note"> {fact.note}</span> : null}
          </dd>
        </div>
      ))}
    </dl>
  )
}

export const AtlasFactsComponent: QuartzComponentConstructor = () => AtlasFacts

interface LessonLink {
  slug: FullSlug
  title: string
  order: number
}

function lessonsInModule(allFiles: QuartzComponentProps["allFiles"], module: string): LessonLink[] {
  return allFiles
    .filter((file) => !isTemplatePath(file.relativePath))
    .filter((file) => {
      const frontmatter = (file.frontmatter ?? {}) as Frontmatter
      return (
        Boolean(file.slug) &&
        text(frontmatter.note_type) === "lesson" &&
        text(frontmatter.module) === module
      )
    })
    .map((file) => ({
      slug: file.slug as FullSlug,
      title: text((file.frontmatter as Frontmatter)?.title) || String(file.slug),
      order: Number((file.frontmatter as Frontmatter)?.lesson_order ?? 0),
    }))
    .sort((a, b) => a.order - b.order)
}

const LessonContext: QuartzComponent = ({
  fileData,
  allFiles,
  displayClass,
}: QuartzComponentProps) => {
  const frontmatter = (fileData.frontmatter ?? {}) as Frontmatter
  const noteType = text(frontmatter.note_type)
  if (noteType !== "lesson" || isTemplatePath(fileData.relativePath)) return null
  const currentSlug = fileData.slug as string
  const module = text(frontmatter.module)
  const sequence = lessonsInModule(allFiles, module)
  const position = sequence.findIndex((lesson) => lesson.slug === currentSlug)
  const previous = position > 0 ? sequence[position - 1] : null
  const next = position >= 0 && position < sequence.length - 1 ? sequence[position + 1] : null
  const moduleTitle = text(frontmatter.module_title)
  const moduleNote = modulesById(allFiles).get(module.toLowerCase())
  const moduleSlug = moduleNote?.slug ?? null
  const prerequisites = values(frontmatter.prerequisites)

  return (
    <nav class={classNames(displayClass, "atlas-lesson-nav")} aria-label="Lesson navigation">
      <div class="atlas-lesson-position">
        {moduleTitle ? (
          <span class="atlas-lesson-module">
            {moduleSlug ? (
              <a class="internal" href={resolveRelative(fileData.slug as FullSlug, moduleSlug)}>
                {moduleTitle}
              </a>
            ) : (
              moduleTitle
            )}
          </span>
        ) : null}
        {position >= 0 ? (
          <span class="atlas-lesson-count">
            Lesson {position + 1} of {sequence.length}
          </span>
        ) : null}
      </div>
      {prerequisites.length > 0 ? (
        <p class="atlas-lesson-prereqs">
          <span class="atlas-lesson-label">Comes after</span>{" "}
          {prerequisites.map((prerequisite, index) => {
            const target = resolveNoteByTitle(allFiles, prerequisite, {
              preferModule: module,
              preferNoteType: "lesson",
            })
            return (
              <span key={prerequisite}>
                {index > 0 ? ", " : null}
                {target ? (
                  <a
                    class="internal"
                    href={resolveRelative(fileData.slug as FullSlug, target.slug)}
                  >
                    {prerequisite}
                  </a>
                ) : (
                  prerequisite
                )}
              </span>
            )
          })}
        </p>
      ) : null}
      {previous || next ? (
        <div class="atlas-lesson-steps">
          {previous ? (
            <a
              class="internal atlas-step atlas-step-previous"
              href={resolveRelative(fileData.slug as FullSlug, previous.slug)}
            >
              <span class="atlas-step-label">Previous</span>
              <span class="atlas-step-title">{previous.title}</span>
            </a>
          ) : null}
          {next ? (
            <a
              class="internal atlas-step atlas-step-next"
              href={resolveRelative(fileData.slug as FullSlug, next.slug)}
            >
              <span class="atlas-step-label">Next</span>
              <span class="atlas-step-title">{next.title}</span>
            </a>
          ) : null}
        </div>
      ) : null}
    </nav>
  )
}

export const LessonContextComponent: QuartzComponentConstructor = () => LessonContext

interface Counts {
  sources: number
  topics: number
  lessons: number
  modules: number
  arguments: number
  canvases: number
}

export function countContent(allFiles: QuartzComponentProps["allFiles"]): Counts {
  const counts: Counts = {
    sources: 0,
    topics: 0,
    lessons: 0,
    modules: 0,
    arguments: 0,
    canvases: 0,
  }
  const canvases = new Set<string>()
  for (const file of allFiles) {
    if (isTemplatePath(file.relativePath)) continue
    const relativePath = file.relativePath ?? ""
    const slug = file.slug ?? ""
    // Canvas and Base pages arrive as virtual pages whose slug keeps the
    // original extension while their relative path ends in `.md`.
    if (relativePath.endsWith(".canvas") || slug.endsWith(".canvas")) {
      // A canvas can arrive twice (its file and its virtual page); count it once.
      // Virtual pages carry a slug-shaped path, so templates are caught by slug.
      if (!/(^|\/)templates\//i.test(slug)) canvases.add(slug.replace(/\.canvas$/, ""))
      continue
    }
    const noteType = text((file.frontmatter as Frontmatter)?.note_type)
    // Count by authored note type, which survives the vault being refiled. The
    // Arguments folder still wins over the type: an argument note may carry a
    // `note_type: topic` value that a raw type tally would misreport as a topic.
    if (isInFolder(relativePath, "Research/Arguments") || noteType === "argument")
      counts.arguments += 1
    else if (noteType === "source") counts.sources += 1
    else if (noteType === "topic") counts.topics += 1
    else if (noteType === "lesson") counts.lessons += 1
    else if (noteType === "module") counts.modules += 1
  }
  counts.canvases = canvases.size
  return counts
}

interface ModuleEntry {
  slug: FullSlug
  title: string
  lessons: number
  sources: number
  order: number
}

export function modulePathway(allFiles: QuartzComponentProps["allFiles"]): ModuleEntry[] {
  const index = buildDashboardIndex(allFiles)
  return index.rows
    .filter((row) => text(row.note_type) === "module")
    .map((row) => ({
      slug: row.file.slug as FullSlug,
      title: text(row.title) || row.file.name,
      lessons: Number(row.lesson_count ?? 0),
      sources: Number(row.source_count ?? 0),
      order: Number(row.module_order ?? 0),
    }))
    .sort((a, b) => a.order - b.order)
}

const AtlasHome: QuartzComponent = ({ fileData, allFiles, displayClass }: QuartzComponentProps) => {
  if (fileData.slug !== "index") return null
  const counts = countContent(allFiles)
  const modules = modulePathway(allFiles)
  // Targets are authored vault paths: resolve them to the slugs this build
  // emitted instead of casting them to a FullSlug (which they are not).
  const entryPoints: { label: string; detail: string; authoredPath: string; note: string }[] = [
    {
      label: "Start learning",
      detail:
        "Ten modules that build research literacy first, then neurobiology through to the conditions.",
      authoredPath: "Research/Learning/Learning Hub",
      note: `${counts.modules} modules, ${counts.lessons} lessons`,
    },
    {
      label: "Browse evidence",
      detail:
        "Every source record keeps reported findings, scope limits and analyst cautions separate.",
      authoredPath: "Research/Library",
      note: `${counts.sources} source records`,
    },
    {
      label: "Explore maps",
      detail: "Canvases and dashboards for coverage, reading queue, arguments and synthesis.",
      authoredPath: "Research/Maps/Research Synthesis Map.canvas",
      note: `${counts.canvases} canvases`,
    },
  ]
  return (
    <div class={classNames(displayClass, "atlas-home")}>
      <p class="atlas-home-tagline">
        A source-backed library for learning how the evidence on bipolar I, ADHD, autism and complex
        PTSD was produced, what it can support and where it is still thin.
      </p>
      <div class="atlas-entries">
        {entryPoints.map((entry) => {
          const target = resolveAuthoredHref(
            String(fileData.slug ?? ""),
            allFiles,
            entry.authoredPath,
          )
          return (
            <a
              class="internal atlas-entry"
              href={target.href}
              data-atlas-unresolved={target.resolved ? undefined : "true"}
              key={entry.label}
            >
              <span class="atlas-entry-label">{entry.label}</span>
              <span class="atlas-entry-detail">{entry.detail}</span>
              <span class="atlas-entry-note">{entry.note}</span>
            </a>
          )
        })}
      </div>
      <dl class="atlas-counts" aria-label="Library coverage">
        <div>
          <dt>Sources</dt>
          <dd>{counts.sources}</dd>
        </div>
        <div>
          <dt>Topics</dt>
          <dd>{counts.topics}</dd>
        </div>
        <div>
          <dt>Lessons</dt>
          <dd>{counts.lessons}</dd>
        </div>
        <div>
          <dt>Modules</dt>
          <dd>{counts.modules}</dd>
        </div>
        <div>
          <dt>Arguments</dt>
          <dd>{counts.arguments}</dd>
        </div>
        <div>
          <dt>Canvases</dt>
          <dd>{counts.canvases}</dd>
        </div>
      </dl>
      <section class="atlas-pathway" aria-label="Module pathway">
        <h2>Study pathway</h2>
        <ol>
          {modules.map((module) => (
            <li key={module.slug}>
              <a class="internal" href={resolveRelative(fileData.slug as FullSlug, module.slug)}>
                {module.title}
              </a>
              <span class="atlas-pathway-meta">
                {module.lessons} lessons, {module.sources} sources
              </span>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}

export const AtlasHomeComponent: QuartzComponentConstructor = () => AtlasHome

interface NavItem {
  key: string
  label: string
  /** Authored vault path (or an already-slug-shaped target); resolved at render time. */
  authoredPath: string
  description: string
}

const ATLAS_NAV_ITEMS: NavItem[] = [
  { key: "home", label: "Home", authoredPath: "index", description: "Research Atlas home" },
  {
    key: "learn",
    label: "Learn",
    authoredPath: "Research/Learning/Learning Hub",
    description: "The ten-module study pathway",
  },
  {
    key: "evidence",
    label: "Evidence",
    authoredPath: "Research/Library",
    description: "Source records, topics and the article library",
  },
  {
    key: "maps",
    label: "Maps",
    authoredPath: "Research/Maps/Research Synthesis Map.canvas",
    description: "Canvases and synthesis maps",
  },
]

/** Which section a page belongs to, used for the nav's active state. */
export function sectionForSlug(slug: string): string {
  if (slug === "index") return "home"
  if (slug.startsWith("research/learning")) return "learn"
  if (slug.endsWith(".canvas") || slug.startsWith("research/maps")) return "maps"
  return "evidence"
}

/**
 * Persistent quick navigation (Home / Learn / Evidence / Maps) for reading and
 * data surfaces. The homepage keeps its curated entry cards instead.
 */
const AtlasNav: QuartzComponent = ({ fileData, allFiles, displayClass }: QuartzComponentProps) => {
  const slug = String(fileData.slug ?? "")
  if (slug === "index") return null
  const active = sectionForSlug(slug)
  return (
    <nav class={classNames(displayClass, "atlas-nav")} aria-label="Research Atlas sections">
      {ATLAS_NAV_ITEMS.map((item) => {
        const target = resolveAuthoredHref(slug, allFiles, item.authoredPath)
        return (
          <a
            key={item.key}
            class={classNames("atlas-nav-item", active === item.key ? "is-active" : undefined)}
            href={target.href}
            data-atlas-unresolved={target.resolved ? undefined : "true"}
            aria-current={active === item.key ? "page" : undefined}
            title={item.description}
          >
            {item.label}
          </a>
        )
      })}
    </nav>
  )
}

export const AtlasNavComponent: QuartzComponentConstructor = () => AtlasNav

/** Keeps a wrapped component's stylesheet and client scripts attached to the wrapper. */
function inheritComponentResources(
  wrapper: QuartzComponent,
  inner: QuartzComponent,
): QuartzComponent {
  wrapper.css = inner.css
  wrapper.beforeDOMLoaded = inner.beforeDOMLoaded
  wrapper.afterDOMLoaded = inner.afterDOMLoaded
  return wrapper
}

/**
 * Content body used by the Atlas content page type: the stock body plus the
 * Research Atlas reading surfaces (evidence facts, lesson context, homepage
 * hero). Each component renders nothing unless the note calls for it, so notes
 * that do not use these surfaces are unchanged.
 */
export const AtlasContentBodyComponent: QuartzComponentConstructor = () => {
  const Content = ContentBody()
  const AtlasContentBody: QuartzComponent = (props: QuartzComponentProps) =>
    h(
      Fragment,
      null,
      h(AtlasNav as never, props),
      h(AtlasFacts as never, props),
      h(LessonContext as never, props),
      h(AtlasHome as never, props),
      h(Content as never, props),
    )
  return AtlasContentBody
}

/** Base views (`*.base`) with the persistent nav and the Base body intact. */
export const AtlasBasesBodyComponent: QuartzComponentConstructor = () => {
  const Content = BasesBody(undefined)
  const AtlasBasesBody: QuartzComponent = (props: QuartzComponentProps) =>
    h(Fragment, null, h(AtlasNav as never, props), h(Content as never, props))
  return inheritComponentResources(AtlasBasesBody, Content)
}

/** Canvas pages get a compact nav strip that floats over the canvas stage. */
export const AtlasCanvasBodyComponent: QuartzComponentConstructor = () => {
  const Content = CanvasBody(undefined)
  const AtlasCanvasBody: QuartzComponent = (props: QuartzComponentProps) =>
    h(
      Fragment,
      null,
      h(AtlasNav as never, { ...props, displayClass: "atlas-nav-overlay" }),
      h(Content as never, props),
    )
  return inheritComponentResources(AtlasCanvasBody, Content)
}
