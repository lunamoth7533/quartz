/**
 * Graph markup shared by the sidebar component and the insights page. Kept
 * free of the stylesheet and client script so server-side code and tests can
 * import it; ./index.tsx attaches both.
 */

import { CATEGORY_INFO, CATEGORY_ORDER, type AtlasCategory } from "../categories"

export function CategoryKey({ category }: { category: AtlasCategory }) {
  return <span class={`atlas-key atlas-key-${category}`} aria-hidden="true" />
}

/** The global graph with its filter row, legend and status line. */
export function GlobalGraphPanel({ showTags, inline }: { showTags: boolean; inline?: boolean }) {
  const categories = CATEGORY_ORDER.filter((category) => showTags || category !== "tag")
  return (
    <section
      class="atlas-global-panel"
      data-cfg={JSON.stringify({ showTags })}
      data-inline={inline ? "" : undefined}
      role={inline ? "region" : "dialog"}
      aria-modal={inline ? undefined : "true"}
      aria-label="Graph of the whole atlas"
    >
      <div class="atlas-global-bar">
        <div class="atlas-global-filters">
          <input
            type="search"
            class="atlas-global-search"
            placeholder="Find a note"
            aria-label="Find a note in the graph"
          />
          <select class="atlas-global-condition" aria-label="Highlight notes about a condition">
            <option value="">All conditions</option>
          </select>
          <select class="atlas-global-domain" aria-label="Highlight notes in a domain">
            <option value="">All domains</option>
          </select>
        </div>
        {inline ? null : (
          <button type="button" class="atlas-global-close" aria-label="Close the graph">
            ×
          </button>
        )}
      </div>
      <div class="atlas-global-legend" role="group" aria-label="Show or hide kinds of note">
        {categories.map((category) => (
          <button type="button" class="atlas-legend-toggle" data-cat={category} aria-pressed="true">
            <CategoryKey category={category} />
            {CATEGORY_INFO[category].label}
            <span class="atlas-legend-count" />
          </button>
        ))}
      </div>
      <div class="atlas-global-stage" />
      <p class="atlas-global-foot">
        <span class="atlas-global-status" aria-live="polite" />
        <span>
          Colour and shape show the kind of note; size shows how many links it has. Drag to pan,
          scroll or pinch to zoom, click a note to open it.
        </span>
      </p>
    </section>
  )
}
