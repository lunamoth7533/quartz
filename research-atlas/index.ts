/**
 * Research Atlas - the site-specific layer for the vault at
 * `content/` (`/Volumes/NVME-Home/Documents/Obsidian Vault`).
 *
 * Everything here is presentation: it reads authored note metadata and renders
 * it. No vault note is modified and no vault JavaScript is executed.
 */

export {
  AtlasDashboards,
  buildDashboardIndex,
  renderBlock,
  replaceDashboardBlocks,
  dedupeBodyTitle,
} from "./dashboards"
export { AtlasBasesPages, AtlasCanvasPages, AtlasContentPages } from "./page-types"
export {
  AtlasUtilityFolderPages,
  AtlasUtilityPages,
  isUtilityPage,
  UTILITY_FOLDER_INDEX_SLUG,
} from "./utility-pages"
export {
  AtlasBasesBodyComponent,
  AtlasCanvasBodyComponent,
  AtlasFactsComponent,
  AtlasHomeComponent,
  AtlasContentBodyComponent,
  AtlasNavComponent,
  LessonContextComponent,
  countContent,
  modulesById,
  modulePathway,
  resolveNoteByTitle,
  sectionForSlug,
} from "./components"
export {
  isInFolder,
  isTemplatePath,
  resolveAuthoredHref,
  resolveAuthoredSlug,
  splitAuthoredAnchor,
} from "./notes"
export { parseQuery, parseExpression, evaluateQuery, selectRows, toQueryRow, UnsupportedQueryError } from "./dql"
export { escapeHtml, renderDashboard, renderUnsupported } from "./render"
