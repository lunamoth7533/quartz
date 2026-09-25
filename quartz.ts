import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { frameRegistry } from "./quartz/components/frames"
import { componentRegistry } from "./quartz/components/registry"
import { PageTypeDispatcher } from "./quartz/plugins/pageTypes"
import { BasesTransformer } from "@quartz-community/bases-page"
import { CanvasFrame } from "@quartz-community/canvas-page"
import {
  AtlasBasesPages,
  AtlasCanvasPages,
  AtlasContentPages,
  AtlasDashboards,
  AtlasHomePages,
  AtlasUtilityFolderPages,
  AtlasUtilityPages,
} from "./research-atlas"
import { AtlasBrandAssets } from "./research-atlas/brand"
import { AtlasGraph } from "./research-atlas/graph"
import { AtlasInsightsComponent } from "./research-atlas/insights"
import { AtlasSelfHostedFonts } from "./research-atlas/hosting"

// The canvas frame ships with the canvas page type; register it here because the
// site's own canvas page type (which adds the persistent nav) replaces the YAML
// entry. The frame keeps its stylesheet and behaviour unchanged.
frameRegistry.register("canvas", CanvasFrame as never, "research-atlas")

const config = await loadQuartzConfig()

// --- Research Atlas -------------------------------------------------------
// Site-specific presentation layer, registered here because it lives with the
// site rather than in a published plugin package. It reads authored note
// metadata only; it never writes to the vault.

// Renders the authored ```dataview dashboards from real note metadata.
config.plugins.transformers = [
  ...(config.plugins.transformers ?? []),
  // Inline `base` fences and `![[file.base]]` transclusions.
  BasesTransformer(undefined),
  AtlasDashboards(undefined),
  // Publish the vault's utility pages, keep them out of every listing surface.
  AtlasUtilityPages(undefined),
]
config.plugins.pageTypes = [
  ...(config.plugins.pageTypes ?? []),
  AtlasContentPages(undefined),
  AtlasHomePages(undefined),
  AtlasBasesPages(undefined),
  AtlasCanvasPages(undefined),
  AtlasUtilityFolderPages(undefined),
]
config.plugins.emitters = [...(config.plugins.emitters ?? []), AtlasBrandAssets(undefined)]

// The fonts plugin hardcodes an apex-domain stylesheet link; wrap its
// transformer so the self-hosted fonts resolve under the project prefix on
// every page (head, nested notes, and the 404 page).
config.plugins.transformers = (config.plugins.transformers ?? []).map((transformer) =>
  transformer.name === "Fonts" ? AtlasSelfHostedFonts(transformer) : transformer,
)

// The Atlas graph takes every registry slot of the stock graph, so the YAML
// entry for @quartz-community/graph still decides where it sits and which
// options it gets. Each slot keeps its source name: this is a replacement of
// that slot, not a conflict, and the loader only warns on conflicts.
const stockGraph = componentRegistry.get("Graph")?.component
for (const [key, entry] of componentRegistry.getAll()) {
  if (stockGraph && entry.component === stockGraph) {
    componentRegistry.register(key, AtlasGraph, entry.source, entry.manifest)
  }
}

// loadQuartzConfig() already built the page layout (with the stock graph) into
// its page-type dispatcher. Rebuild it now, so the stock renderer (d3 and
// pixi.js fetched from a CDN on every page) is neither rendered nor shipped.
export const layout = await loadQuartzLayout()

// Build-time charts for the note tagged `research/visualizations`. They go in
// through the layout rather than a page body so they render whatever that note
// is built as (it is currently a folder note); every other page renders nothing.
const insights = AtlasInsightsComponent()
for (const pageLayout of [layout.defaults, ...Object.values(layout.byPageType)]) {
  pageLayout.beforeBody = [...(pageLayout.beforeBody ?? []), insights]
}

config.plugins.emitters = config.plugins.emitters.map((emitter) =>
  emitter.name === "PageTypeDispatcher"
    ? PageTypeDispatcher({ defaults: layout.defaults, byPageType: layout.byPageType })
    : emitter,
)

// Local previews (`--serve`) rebuild on every edit, and rendering the ~800
// social-card images is most of that time. Previews skip them; deploys keep them.
if (process.argv.includes("--serve")) {
  config.plugins.emitters = config.plugins.emitters.filter(
    (emitter) => emitter.name !== "CustomOgImages",
  )
}

export default config
