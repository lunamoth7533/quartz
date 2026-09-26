/**
 * The Research Atlas note taxonomy, shared by the graph, the insight charts and
 * the navigation marks so one colour or shape means the same kind of note on
 * every surface.
 *
 * A category comes from what a note says it is: its authored `note_type` (on
 * the server) or the structural tag the vault puts on each family (in the
 * browser, where only tags are published). Folders are not used: the vault is
 * reorganised from time to time, and a note's type does not change with it.
 *
 * Colour budget: the graph lets any two nodes sit side by side, and the site's
 * categorical palette is only validated for three hues in that setting (see
 * `--atlas-cat-*` in quartz/styles/custom.scss). So only the three largest
 * families get a hue; hubs, arguments and tags share neutral ink and are told
 * apart by shape.
 */

export type AtlasCategory = "source" | "topic" | "learning" | "hub" | "argument" | "tag"

export type CategoryShape = "circle" | "square" | "diamond" | "ring"

export interface CategoryInfo {
  label: string
  shape: CategoryShape
}

/** Legend order: the three coloured families first, in palette-slot order. */
export const CATEGORY_ORDER: AtlasCategory[] = [
  "source",
  "topic",
  "learning",
  "hub",
  "argument",
  "tag",
]

export const CATEGORY_INFO: Record<AtlasCategory, CategoryInfo> = {
  source: { label: "Sources", shape: "circle" },
  topic: { label: "Topics", shape: "circle" },
  learning: { label: "Learning", shape: "circle" },
  hub: { label: "Hubs & maps", shape: "square" },
  argument: { label: "Arguments", shape: "diamond" },
  tag: { label: "Tags", shape: "ring" },
}

/** Authored note types and the family each belongs to. */
const TYPE_FAMILY: Record<string, AtlasCategory> = {
  source: "source",
  topic: "topic",
  lesson: "learning",
  module: "learning",
  "learning-aid": "learning",
  glossary: "learning",
  coverage: "learning",
  "study-session": "learning",
  argument: "argument",
}

/** Structural tags, checked in order, for when only tags are known. */
const TAG_FAMILY: [string, AtlasCategory][] = [
  ["research/source", "source"],
  ["research/topic", "topic"],
  ["research/lesson", "learning"],
  ["research/module", "learning"],
  ["research/learning", "learning"],
  ["research/argument", "argument"],
]

export interface CategorySubject {
  slug: string
  noteType?: unknown
  tags?: unknown
}

/** Hubs, maps, subdomain overviews and anything untyped share the neutral family. */
export function categoryFor({ slug, noteType, tags }: CategorySubject): AtlasCategory {
  if (slug.startsWith("tags/")) return "tag"
  const typed = typeof noteType === "string" ? TYPE_FAMILY[noteType] : undefined
  if (typed) return typed
  const own = (Array.isArray(tags) ? tags : []).map((tag) =>
    String(tag).replace(/^#/, "").toLowerCase(),
  )
  for (const [tag, family] of TAG_FAMILY) {
    if (own.some((t) => t === tag || t.startsWith(`${tag}/`))) return family
  }
  return "hub"
}

/**
 * Tag families that carry meaning in the graph. Structural tags such as
 * `research/source` restate the category and would turn into hubs joined to
 * hundreds of notes, so only domains and conditions become tag nodes.
 */
export const MEANINGFUL_TAG_PREFIXES = ["research/domain/", "research/condition/"]

export function isMeaningfulTag(tag: string): boolean {
  return MEANINGFUL_TAG_PREFIXES.some((prefix) => tag.startsWith(prefix))
}

/** "research/condition/bipolar-i" -> "Bipolar I" */
export function tagLabel(tag: string): string {
  const leaf = tag.split("/").pop() ?? tag
  return leaf
    .split("-")
    .map((word) => (/^(i|ii|iii|iv|adhd|cptsd|ptsd)$/i.test(word) ? word.toUpperCase() : word))
    .join(" ")
    .replace(/^\w/, (letter) => letter.toUpperCase())
}
