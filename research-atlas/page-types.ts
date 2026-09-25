/**
 * Page types for the Research Atlas.
 *
 * Each type reuses an installed community page type (same matcher, layout,
 * frame, generator and transforms) and swaps in a body that adds the site's
 * persistent quick navigation. Canvas and Base pages are provided from here
 * rather than straight from their YAML entries so the nav reaches those
 * surfaces too; their own plugin options are passed through unchanged.
 */

import { BasesPage } from "@quartz-community/bases-page"
import { CanvasPage } from "@quartz-community/canvas-page"
import { ContentPage } from "@quartz-community/content-page"
import type { QuartzPageTypePlugin } from "@quartz-community/types"
import {
  AtlasBasesBodyComponent,
  AtlasCanvasBodyComponent,
  AtlasContentBodyComponent,
} from "./components"
import { createDashboardTransform } from "./dashboards"

/** Defaults declared by the installed `@quartz-community/canvas-page` manifest. */
const CANVAS_DEFAULTS = {
  enableInteraction: true,
  initialZoom: 1,
  minZoom: 0.1,
  maxZoom: 5,
}

/** Defaults declared by the installed `@quartz-community/bases-page` manifest. */
const BASES_DEFAULTS = {
  defaultViewType: "table",
  linkResolution: "shortest" as const,
}

/** Content notes: reading surfaces plus the authored dashboards. */
export const AtlasContentPages: QuartzPageTypePlugin = () => {
  const base = ContentPage()
  return {
    ...base,
    name: "AtlasContentPages",
    priority: (base.priority ?? 0) + 5,
    body: AtlasContentBodyComponent,
    treeTransforms: () => [createDashboardTransform()],
  }
}

/** Base views (`*.base`) with the persistent nav. */
export const AtlasBasesPages: QuartzPageTypePlugin = () => {
  const base = BasesPage(BASES_DEFAULTS)
  return {
    ...base,
    name: "AtlasBasesPages",
    priority: (base.priority ?? 0) + 1,
    body: AtlasBasesBodyComponent,
  }
}

/** Canvas maps with a compact nav strip. */
export const AtlasCanvasPages: QuartzPageTypePlugin = () => {
  const base = CanvasPage(CANVAS_DEFAULTS)
  return {
    ...base,
    name: "AtlasCanvasPages",
    priority: (base.priority ?? 0) + 1,
    body: AtlasCanvasBodyComponent,
  }
}
