/**
 * Small shared helpers for reading authored vault paths.
 *
 * Authored paths and Quartz slugs are different namespaces. A path is written
 * the way the vault is: original case, spaces, a leading slash, and often a
 * file extension (`Research/Learning/Learning Hub.md`). A `FullSlug` is
 * lower-cased, space-free and extension-free (`research/learning/learning-hub`),
 * and `isFullSlug` rejects a string that carries a space or `#`. Casting one to
 * the other therefore produced links that 404 even though the note exists, so
 * authored targets are resolved against the pages the build actually emitted.
 */

import { resolveRelative, slugifyFilePath } from "../quartz/util/path"
import type { FilePath, FullSlug } from "../quartz/util/path"

/** The minimum a page has to expose to be a link target. */
export interface KnownPage {
  slug?: string | null
  relativePath?: string | null
}

/** Split `path#anchor` without losing an anchor that itself holds a `#`. */
export function splitAuthoredAnchor(authoredPath: string): { path: string; anchor: string } {
  const trimmed = (authoredPath ?? "").trim()
  const hash = trimmed.indexOf("#")
  if (hash < 0) return { path: trimmed, anchor: "" }
  return { path: trimmed.slice(0, hash).trim(), anchor: trimmed.slice(hash) }
}

/**
 * Resolve a path exactly as it is authored in the vault to the slug Quartz
 * generated for that file, or `null` when no page in this build matches it.
 *
 * Both the file's own slug and its slugified relative path are accepted: canvas
 * and Base pages are virtual pages whose slug keeps the source extension while
 * their relative path ends in `.md`, so the two spellings differ there.
 */
export function resolveAuthoredSlug(
  pages: readonly KnownPage[],
  authoredPath: string,
): FullSlug | null {
  const wanted = slugifyFilePath(splitAuthoredAnchor(authoredPath).path as FilePath)
  if (wanted.length === 0) return null
  for (const page of pages) {
    if (page.slug === wanted) return page.slug as FullSlug
  }
  for (const page of pages) {
    if (!page.slug || !page.relativePath) continue
    if (slugifyFilePath(page.relativePath as FilePath) === wanted) return page.slug as FullSlug
  }
  // Like an Obsidian link, fall back to the file name when it is unique, so the
  // site's own targets survive the vault being refiled. Ambiguity stays unresolved.
  const name = wanted.split("/").pop()
  const byName = pages.filter((page) => page.slug?.split("/").pop() === name)
  return byName.length === 1 ? (byName[0].slug as FullSlug) : null
}

export interface AuthoredHref {
  /** Relative href from the current page to the target, anchor included. */
  href: string
  /** False when no page in the build matches the authored path. */
  resolved: boolean
}

/**
 * Build the href for an authored vault path. A path that matches nothing still
 * produces a well-formed link (so the navigation keeps its shape) but reports
 * `resolved: false`, which the components surface as `data-atlas-unresolved`
 * instead of failing silently.
 */
export function resolveAuthoredHref(
  currentSlug: string,
  pages: readonly KnownPage[],
  authoredPath: string,
): AuthoredHref {
  const { path, anchor } = splitAuthoredAnchor(authoredPath)
  const current = (currentSlug ?? "") as FullSlug
  const slug = resolveAuthoredSlug(pages, path)
  if (slug) return { href: resolveRelative(current, slug) + anchor, resolved: true }
  return {
    href: resolveRelative(current, slugifyFilePath(path as FilePath)) + anchor,
    resolved: false,
  }
}

/** Templates are real files in the vault but never part of the library it describes. */
export function isTemplatePath(relativePath: string | undefined | null): boolean {
  if (!relativePath) return true
  return (
    relativePath.startsWith("Research/Templates/") ||
    relativePath.includes("/Templates/") ||
    relativePath.endsWith("Template.md")
  )
}

/** True for paths under the given vault folder, ignoring templates. */
export function isInFolder(relativePath: string | undefined, folder: string): boolean {
  if (!relativePath || isTemplatePath(relativePath)) return false
  return relativePath.startsWith(`${folder.replace(/\/+$/, "")}/`)
}
