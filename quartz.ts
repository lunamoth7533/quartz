import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { frameRegistry } from "./quartz/components/frames"
import { BasesTransformer } from "@quartz-community/bases-page"
import { CanvasFrame } from "@quartz-community/canvas-page"
import {
  AtlasBasesPages,
  AtlasCanvasPages,
  AtlasContentPages,
  AtlasDashboards,
  AtlasUtilityFolderPages,
  AtlasUtilityPages,
} from "./research-atlas"
import { AtlasBrandAssets } from "./research-atlas/brand"

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
  AtlasBasesPages(undefined),
  AtlasCanvasPages(undefined),
  AtlasUtilityFolderPages(undefined),
]
config.plugins.emitters = [...(config.plugins.emitters ?? []), AtlasBrandAssets(undefined)]

export default config

export const layout = await loadQuartzLayout()
