/**
 * Research Atlas graph component: the sidebar's local graph, its key, and the
 * global graph (opened from the sidebar button or Ctrl/Cmd+G).
 *
 * It takes the `@quartz-community/graph` slot in quartz.config.yaml (quartz.ts
 * re-points the registry), so placement and options stay in the YAML:
 *
 *   localGraph:  { depth: 1, showTags: false }  links followed from this page
 *   globalGraph: { showTags: true }             offer domain/condition tag nodes
 */

import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types"
import { i18n } from "../../quartz/i18n"
import { classNames } from "../../quartz/util/lang"
import { CATEGORY_INFO, CATEGORY_ORDER } from "../categories"
import { CategoryKey, GlobalGraphPanel } from "./markup"
import script from "./graph.inline"
import style from "./graph.scss"

export { CategoryKey, GlobalGraphPanel } from "./markup"

export interface AtlasGraphOptions {
  localGraph?: { depth?: number; showTags?: boolean }
  globalGraph?: { showTags?: boolean }
}

const EXPAND_ICON = (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
    <path d="M9.5 2.5h4v4M6.5 13.5h-4v-4M13.5 2.5 9 7M2.5 13.5 7 9" />
  </svg>
)

export const AtlasGraph: QuartzComponentConstructor<AtlasGraphOptions> = (opts) => {
  const local = { depth: 1, showTags: false, ...opts?.localGraph }
  const global = { showTags: true, ...opts?.globalGraph }

  const Graph: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => (
    <div class={classNames(displayClass, "graph", "atlas-graph")}>
      <h3>{i18n((cfg.locale ?? "en-US") as Parameters<typeof i18n>[0]).components.graph.title}</h3>
      <div class="atlas-graph-frame">
        <div class="atlas-graph-local" data-cfg={JSON.stringify(local)} />
        <button
          type="button"
          class="atlas-graph-expand"
          aria-label="Open the graph of the whole atlas (Ctrl+G)"
          title="Open the graph of the whole atlas (Ctrl+G)"
        >
          {EXPAND_ICON}
        </button>
      </div>
      <ul class="atlas-graph-legend" aria-label="Graph key">
        {CATEGORY_ORDER.filter((category) => category !== "tag").map((category) => (
          <li>
            <CategoryKey category={category} />
            {CATEGORY_INFO[category].label}
          </li>
        ))}
      </ul>
      <div class="atlas-global-overlay" hidden>
        <GlobalGraphPanel showTags={global.showTags} />
      </div>
    </div>
  )

  Graph.css = style
  Graph.afterDOMLoaded = script
  return Graph
}
