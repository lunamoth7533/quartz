/**
 * Build-only classification for the vault's utility pages.
 *
 * `Research/AGENTS.md` and `Research/Templates/**` are real vault files that
 * other notes link to, but they are authoring scaffolding rather than library
 * content: they should be published so the references resolve, and stay out of
 * every discovery surface.
 *
 * Excluding them from the build (`ignorePatterns`) did the opposite - it made
 * 22 authored references 404 - so they are now built and marked with Quartz's
 * native `file.data.unlisted` convention, which the installed plugins already
 * honour: `contentIndex` (and therefore search, explorer, graph and the RSS and
 * sitemap), `backlinks`, `recent-notes`, `folder-page`, `tag-page` and the
 * Bases views all skip an unlisted page.
 *
 * Nothing here reads or writes a vault file; the flag lives in parsed metadata
 * for the duration of one build.
 */

import { FolderPage } from "@quartz-community/folder-page"
import type { QuartzPageTypePlugin, QuartzTransformerPlugin } from "@quartz-community/types"
import { slugifyFilePath } from "../quartz/util/path"
import type { FilePath, FullSlug } from "../quartz/util/path"

/** Individual utility notes, keyed by their vault-relative path. */
export const UTILITY_PAGE_PATHS: readonly string[] = ["Research/AGENTS.md"]

/** Folders whose notes are scaffolding for authoring, not library content. */
export const UTILITY_PAGE_FOLDERS: readonly string[] = ["Research/Templates/"]

/** Vault-relative folder that holds the utility notes, without its trailing slash. */
const UTILITY_FOLDER_PATH = UTILITY_PAGE_FOLDERS[0]!.replace(/\/+$/, "")

/**
 * Slug of the folder page for the utility folder.
 *
 * Breadcrumbs and the parent folder listing link every folder by its folder
 * page, and the installed `FolderPage` only creates a page for a folder that
 * holds at least one *listed* note. A folder whose notes are all unlisted
 * therefore has no page while two stock components still link to it, so this
 * page type publishes that one missing index page.
 */
export const UTILITY_FOLDER_INDEX_SLUG = `${slugifyFilePath(
  UTILITY_FOLDER_PATH as FilePath,
)}/index` as FullSlug

declare module "vfile" {
  interface DataMap {
    /**
     * Quartz v5's convention for "publish the page, keep it out of listings".
     * Declared here because `@quartz-community/types` does not model it and the
     * `unlisted-pages` transformer sets it from frontmatter only.
     */
    unlisted?: boolean
  }
}

/** True for the vault's utility pages, matched by exact path or folder prefix. */
export function isUtilityPage(relativePath: string | undefined | null): boolean {
  if (!relativePath) return false
  return (
    UTILITY_PAGE_PATHS.includes(relativePath) ||
    UTILITY_PAGE_FOLDERS.some((folder) => relativePath.startsWith(folder))
  )
}

/**
 * Marks the utility pages unlisted as they are parsed, so every later consumer
 * (emitters, page types, components) sees the same classification.
 */
export const AtlasUtilityPages: QuartzTransformerPlugin = () => ({
  name: "AtlasUtilityPages",
  htmlPlugins() {
    return [
      () => (_tree, file) => {
        if (!isUtilityPage(file.data?.relativePath)) return
        file.data.unlisted = true
      },
    ]
  },
})

/**
 * Publishes the utility folder's index page with the installed folder layout and
 * body, so `Research/Templates/` (linked by the Research folder page and by the
 * template pages' breadcrumbs) resolves. Nothing else is generated: the stock
 * `FolderPage` still owns every other folder page.
 */
export const AtlasUtilityFolderPages: QuartzPageTypePlugin = () => {
  const base = FolderPage(undefined)
  return {
    ...base,
    name: "AtlasUtilityFolderPages",
    priority: (base.priority ?? 0) + 1,
    match: (args) => String(args?.slug ?? "") === UTILITY_FOLDER_INDEX_SLUG,
    generate: ({ content }) => {
      const holdsUtilityPages = content.some(([, file]) =>
        isUtilityPage(file.data?.relativePath),
      )
      if (!holdsUtilityPages) return []
      return [
        {
          slug: UTILITY_FOLDER_INDEX_SLUG,
          title: UTILITY_FOLDER_PATH.split("/").pop() ?? UTILITY_FOLDER_PATH,
          // Reachable so the folder links resolve, but never listed itself: the
          // folder page must not put the utility folder back into the index, the
          // explorer or the search results it was just removed from.
          data: { unlisted: true },
        },
      ]
    },
  }
}
