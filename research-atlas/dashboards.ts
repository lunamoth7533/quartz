/**
 * Renders the vault's authored Dataview dashboard panels on the site.
 *
 * Two authored pages contain ```dataview fences:
 *   - `Research/Visualizations.md`
 *   - `Research/Learning Dashboard.md`
 *
 * Dataview is an Obsidian plugin and is not rendered by the
 * Obsidian-flavoured-Markdown transformer, so those fences would otherwise ship
 * as inert code blocks. This plugin keeps the authored source untouched and:
 *
 *   1. captures each `dataview` fence during Markdown -> HAST conversion and
 *      swaps it for a placeholder div (the transformer step), then
 *   2. resolves every placeholder at render time from the real note metadata
 *      (the page-type tree transform), where `allFiles` is available.
 *
 * `dataviewjs` fences are never executed; they are replaced by an explicit
 * "not executed" panel. Nothing here evaluates JavaScript from the vault.
 */

import { fromHtml } from "hast-util-from-html"
import type { Element, Root } from "hast"
import { AtlasContentBodyComponent } from "./components"
import type {
  QuartzPageTypePlugin,
  QuartzTransformerPlugin,
  QuartzPluginData,
  TreeTransform,
} from "@quartz-community/types"
import { ContentPage } from "@quartz-community/content-page"
import type { FullSlug } from "../quartz/util/path"
import {
  evaluateQuery,
  parseQuery,
  selectRows,
  toQueryRow,
  UnsupportedQueryError,
  type QueryRow,
} from "./dql"
import { renderDashboard, renderUnsupported, type RenderContext } from "./render"
import { isTemplatePath } from "./notes"

export interface AtlasDashboardBlock {
  /** Raw fence content, kept verbatim so the authored query stays visible. */
  source: string
  /** `dataview` fences are rendered; `dataviewjs` fences are reported, never run. */
  language: "dataview" | "dataviewjs"
}

declare module "vfile" {
  interface DataMap {
    atlasDashboardBlocks?: AtlasDashboardBlock[]
  }
}

function classList(node: Element): string[] {
  const value = node.properties?.className
  if (Array.isArray(value)) return value.map((item) => String(item))
  return value == null ? [] : String(value).split(/\s+/)
}

function fenceLanguage(node: Element): string | null {
  const fromData = node.properties?.dataLanguage ?? node.properties?.dataLanguageName
  if (typeof fromData === "string") {
    const lowered = fromData.toLowerCase()
    if (lowered.includes("dataviewjs")) return "dataviewjs"
    if (lowered.includes("dataview")) return "dataview"
  }
  for (const cls of classList(node)) {
    const match = /^language-(.+)$/.exec(cls)
    if (!match) continue
    const lowered = match[1].toLowerCase()
    if (lowered.includes("dataviewjs")) return "dataviewjs"
    if (lowered.includes("dataview")) return "dataview"
  }
  return null
}

function elementChildren(node: Element): Element[] {
  return (node.children ?? []).filter((child): child is Element => child.type === "element")
}

/**
 * Returns the outermost element that should be replaced by a dashboard
 * placeholder, handling both plain `pre > code` and syntax-highlighted
 * `figure > pre > code` shapes.
 */
function matchDashboardContainer(node: Element): { codeElement: Element; language: string } | null {
  const direct = fenceLanguage(node)
  if (node.tagName === "code" && direct) return { codeElement: node, language: direct }
  if (node.tagName === "pre") {
    const [code] = elementChildren(node)
    if (code && code.tagName === "code") {
      const language = fenceLanguage(code)
      if (language) return { codeElement: code, language }
    }
    return null
  }
  if (node.tagName === "figure") {
    // Syntax highlighting wraps code in `figure > pre > code`; replace only that
    // container so surrounding prose (e.g. a callout's other content) survives.
    for (const child of elementChildren(node)) {
      const match = matchDashboardContainer(child)
      if (match) return match
    }
    return null
  }
  return null
}

function extractText(node: Element): string {
  let text = ""
  const walk = (current: Element | Root) => {
    for (const child of current.children ?? []) {
      if (child.type === "text") text += child.value
      else if (child.type === "element") walk(child)
    }
  }
  walk(node)
  return text
}

/** Exported for the transformer regression test. */
export function replaceDashboardBlocks(root: Root, blocks: AtlasDashboardBlock[]) {
  const walk = (parent: Root | Element) => {
    const children = parent.children ?? []
    for (let index = 0; index < children.length; index++) {
      const child = children[index]
      if (child.type !== "element") continue
      const match = matchDashboardContainer(child)
      if (match) {
        const blockIndex = blocks.length
        blocks.push({
          source: extractText(match.codeElement).replace(/\n+$/, ""),
          language: match.language as AtlasDashboardBlock["language"],
        })
        children[index] = {
          type: "element",
          tagName: "div",
          properties: { dataAtlasDashboard: String(blockIndex) },
          children: [],
        }
        continue
      }
      walk(child)
    }
  }
  walk(root)
}

/** Transformer step: capture the authored query and leave a placeholder. */
export const AtlasDashboards: QuartzTransformerPlugin = () => ({
  name: "AtlasDashboards",
  // Runs after the syntax highlighter so both `pre > code` and highlighted
  // `figure > pre > code` shapes are captured.
  htmlPlugins() {
    return [
      () => (tree, file) => {
        const blocks: AtlasDashboardBlock[] = []
        replaceDashboardBlocks(tree as Root, blocks)
        if (blocks.length > 0) {
          file.data.atlasDashboardBlocks = blocks
        }
      },
    ]
  },
})

interface DashboardIndex {
  rows: QueryRow[]
  slugs: Set<string>
}

let cachedIndex: { files: readonly QuartzPluginData[]; index: DashboardIndex } | null = null

export function buildDashboardIndex(allFiles: readonly QuartzPluginData[]): DashboardIndex {
  if (cachedIndex && cachedIndex.files === allFiles) return cachedIndex.index
  const rows: QueryRow[] = []
  const slugs = new Set<string>()
  for (const file of allFiles) {
    const slug = file.slug
    const relativePath = file.relativePath
    if (!slug || !relativePath) continue
    slugs.add(slug)
    if (!relativePath.endsWith(".md")) continue
    if (isTemplatePath(relativePath)) continue
    // Utility pages are published but unlisted: the same native convention that
    // keeps them out of the content index keeps them out of these tables.
    if (file.unlisted === true) continue
    // Canvas and Base pages are virtual pages, not notes with metadata.
    if (slug.endsWith(".canvas") || slug.endsWith(".base")) continue
    const frontmatter = (file.frontmatter ?? {}) as Record<string, unknown>
    if (Object.keys(frontmatter).length === 0) continue
    rows.push(
      toQueryRow({
        slug,
        relativePath,
        title: String(frontmatter.title ?? slug.split("/").pop() ?? slug),
        frontmatter,
      }),
    )
  }
  const index: DashboardIndex = { rows, slugs }
  cachedIndex = { files: allFiles, index }
  return index
}

/** Render one authored panel; never throws — unsupported views become explicit panels. */
export function renderBlock(
  block: AtlasDashboardBlock,
  index: DashboardIndex,
  currentSlug: FullSlug,
): { html: string; status: string; rowCount: number } {
  if (block.language === "dataviewjs") {
    const rendered = renderUnsupported(
      block.source,
      "This panel uses dataviewjs (JavaScript). The site does not execute vault JavaScript.",
    )
    return { html: rendered.html, status: rendered.status, rowCount: 0 }
  }
  const context: RenderContext = { currentSlug, knownSlugs: index.slugs }
  try {
    const query = parseQuery(block.source)
    const selected = selectRows(index.rows, query.source ?? query.from)
    const results = evaluateQuery(query, selected)
    const rendered = renderDashboard(query, results, context, block.source)
    return { html: rendered.html, status: rendered.status, rowCount: rendered.rowCount }
  } catch (error) {
    const message =
      error instanceof UnsupportedQueryError
        ? error.message
        : `Unexpected error while reading note metadata: ${(error as Error).message}`
    const rendered = renderUnsupported(block.source, message)
    return { html: rendered.html, status: rendered.status, rowCount: 0 }
  }
}

export function createDashboardTransform(): TreeTransform {
  return (root, slug, componentData) => {
    dedupeBodyTitle(root, componentData)
    const blocks = componentData.fileData.atlasDashboardBlocks as
      | AtlasDashboardBlock[]
      | undefined
    if (!blocks || blocks.length === 0) return
    const index = buildDashboardIndex(componentData.allFiles)
    const walk = (parent: Root | Element) => {
      for (const child of parent.children ?? []) {
        if (child.type !== "element") continue
        const rawIndex = child.properties?.dataAtlasDashboard
        if (rawIndex !== undefined) {
          const block = blocks[Number(rawIndex)]
          if (block) {
            const rendered = renderBlock(block, index, slug)
            const fragment = fromHtml(rendered.html, { fragment: true })
            child.tagName = "div"
            child.properties = {
              class: ["atlas-dashboard", `atlas-dashboard-${rendered.status}`],
            }
            child.children = fragment.children as Element["children"]
          }
          continue
        }
        walk(child)
      }
    }
    walk(root)
  }
}

/**
 * Quartz renders the note title above the article, and these notes also start
 * with an `# H1`. When the two say the same thing the body heading is replaced
 * at render time by a zero-height anchor target that keeps the heading's `id`,
 * so `#slug` links (and existing inbound anchor links) still resolve while the
 * reader sees the title once. The matching entry is also dropped from the
 * table-of-contents data, which would otherwise list the title twice.
 *
 * The vault file keeps its heading, and a body heading that says something else
 * is left alone.
 */
export function dedupeBodyTitle(root: Root, componentData: { fileData: QuartzPluginData }) {
  const frontmatter = (componentData.fileData.frontmatter ?? {}) as Record<string, unknown>
  const candidates = new Set(
    [frontmatter.title, componentData.fileData.slug?.split("/").pop()]
      .filter((value): value is string => typeof value === "string")
      .map((value) => value.trim().toLowerCase().replace(/\s+/g, " ")),
  )
  let removed = false
  const walk = (parent: Root | Element) => {
    if (removed) return
    const children = parent.children ?? []
    for (let index = 0; index < children.length; index++) {
      const child = children[index]
      if (child.type !== "element") continue
      if (child.tagName === "h1") {
        const text = extractText(child).trim().toLowerCase().replace(/\s+/g, " ")
        if (candidates.has(text)) {
          const id = child.properties?.id
          const anchorId = typeof id === "string" && id.length > 0 ? id : null
          if (anchorId) {
            // Keep the anchor so `#heading` links still land on the title area.
            children[index] = {
              type: "element",
              tagName: "span",
              properties: {
                id: anchorId,
                class: ["atlas-title-anchor"],
                "aria-hidden": "true",
              },
              children: [],
            }
          } else {
            children.splice(index, 1)
          }
          removed = true
          dropDuplicateTocEntry(componentData, text, anchorId)
        }
        return
      }
      walk(child)
      if (removed) return
    }
  }
  walk(root)
}

/** Removes the table-of-contents row that pointed at the deduplicated title. */
function dropDuplicateTocEntry(
  componentData: { fileData: QuartzPluginData },
  normalizedTitle: string,
  anchorId: string | null,
) {
  const toc = componentData.fileData.toc as
    | { depth: number; text: string; slug: string }[]
    | undefined
  if (!Array.isArray(toc) || toc.length === 0) return
  const first = toc[0]
  if (!first) return
  const firstText = String(first.text ?? "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
  const pointsAtRemovedHeading =
    firstText === normalizedTitle || (anchorId !== null && first.slug === anchorId)
  if (pointsAtRemovedHeading) {
    // Idempotent for incremental rebuilds: the row is gone on the next pass.
    toc.shift()
  }
}

/**
 * Page type for content notes. It keeps the stock content-page matcher and
 * layout and swaps in the Atlas content body (which adds the reading surfaces)
 * plus the render-time dashboard transform.
 */
export const AtlasDashboardPages: QuartzPageTypePlugin = () => {
  const contentPage = ContentPage()
  return {
    name: "AtlasDashboardPages",
    priority: (contentPage.priority ?? 0) + 5,
    layout: contentPage.layout,
    frame: contentPage.frame,
    body: AtlasContentBodyComponent,
    match: (args) => {
      // Defer to the stock content-page matcher so every content note keeps the
      // same eligibility rules; the Atlas body and dashboard transform add the
      // site's reading surfaces on top.
      return contentPage.match(args as never)
    },
    treeTransforms: () => [createDashboardTransform()],
  }
}
