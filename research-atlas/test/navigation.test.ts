import assert from "node:assert/strict"
import test from "node:test"
import { h } from "preact"
import { render } from "preact-render-to-string"
import type { QuartzComponent, QuartzComponentProps, QuartzPluginData } from "@quartz-community/types"
import { AtlasHomeComponent, AtlasNavComponent, countContent } from "../components"
import { resolveAuthoredHref } from "../notes"
import { AtlasHomePages } from "../page-types"

/**
 * The site's own navigation targets are authored the way the vault is authored:
 * original case, spaces and file extension. These tests render the real
 * components and check the hrefs that come out, rather than re-stating the
 * expected URLs by hand, so an unresolved authored path fails here.
 */

function file(slug: string, relativePath: string, frontmatter: Record<string, unknown> = {}) {
  return {
    slug,
    relativePath,
    filePath: relativePath,
    frontmatter: { title: slug, ...frontmatter },
  } as unknown as QuartzPluginData
}

/**
 * Mirrors the real vault: markdown notes keep their authored path and get a
 * lower-cased, space-free slug, while canvas pages are virtual pages whose slug
 * keeps the `.canvas` extension and whose relative path ends in `.md`.
 */
const allFiles = [
  file("index", "index.md", { note_type: "hub", title: "Research Atlas" }),
  file("readme", "README.md", { title: "README" }),
  file("research/home", "Research/Home.md", { title: "Research Home" }),
  file("research/library", "Research/Library.md", { title: "Article library" }),
  file("research/visualizations", "Research/Visualizations.md", { title: "Visualizations" }),
  file("research/workflow", "Research/Workflow.md", { title: "Workflow" }),
  file("research/learning/learning-hub", "Research/Learning/Learning Hub.md", {
    note_type: "hub",
    title: "Learning Hub",
  }),
  file("research/learning/glossary", "Research/Learning/Glossary.md", { title: "Glossary" }),
  file("research/learning/lessons/m01-research-methods", "Research/Learning/Lessons/M01.md", {
    note_type: "lesson",
    module: "m01",
    module_title: "Module 01",
    lesson_order: 1,
    prerequisites: ["Nothing to read first"],
    title: "Research methods",
  }),
  file(
    "research/learning/lessons/m01-research-methods/lesson---bias-and-confounding",
    "Research/Learning/Lessons/M01/Lesson - Bias and Confounding.md",
    {
      note_type: "lesson",
      module: "m01",
      module_title: "Module 01",
      lesson_order: 2,
      prerequisites: ["Research methods"],
      title: "Bias and confounding",
    },
  ),
  file("research/learning/modules/module-01---research-methods", "Research/Learning/Modules/Module 01 - Research Methods.md", {
    note_type: "module",
    module: "m01",
    module_order: 1,
    lesson_count: 2,
    source_count: 3,
    title: "Module 01 - Research Methods",
  }),
  file("research/sources/f01-example-source", "Research/Sources/F01 Example Source.md", {
    note_type: "source",
    title: "Example source",
  }),
  file("research/maps/research-synthesis-map.canvas", "research/maps/research-synthesis-map.canvas.md", {
    title: "Research Synthesis Map",
  }),
  file("research/maps/adhd-map", "Research/Maps/ADHD Map.md", { title: "ADHD map" }),
  file("research/learning-library.base", "research/learning-library.base.md", {
    title: "Learning Library",
  }),
]

const slugSet = new Set(allFiles.map((entry) => String(entry.slug)))

/** Pages the navigation is rendered on, as `[slug, kind]`. */
const renderedPages: string[] = [
  "readme",
  "research/library",
  "research/learning/learning-hub",
  "research/learning/lessons/m01-research-methods/lesson---bias-and-confounding",
  "research/maps/research-synthesis-map.canvas",
  "research/learning-library.base",
]

function renderWith(component: QuartzComponent, slug: string): string {
  const props = {
    ctx: {},
    fileData: { slug, relativePath: `${slug}.md`, frontmatter: {} },
    externalResources: { css: [], js: [] },
    cfg: {},
    children: [],
    tree: {},
    allFiles,
  } as unknown as QuartzComponentProps
  return render(h(component as never, props as never))
}

function hrefsIn(html: string): string[] {
  return [...html.matchAll(/<a\b[^>]*?\shref="([^"]*)"/g)].map((match) => match[1]!)
}

/**
 * Resolve a rendered href back to the slug it points at, the way a browser
 * would. The site root is Quartz's `index` slug, exactly as it is emitted.
 */
function targetSlug(currentSlug: string, href: string): string {
  const base = new URL(`https://atlas.test/${currentSlug}`)
  const resolved = new URL(href, base)
  const path = decodeURI(resolved.pathname).replace(/^\//, "").replace(/\/$/, "")
  return path.length === 0 ? "index" : path
}

test("rendered nav and homepage targets resolve to real pages", () => {
  const nav = AtlasNavComponent()
  const home = AtlasHomeComponent()
  let checked = 0

  for (const slug of renderedPages) {
    for (const [name, component] of [
      ["AtlasNav", nav],
      ["AtlasHome", home],
    ] as const) {
      const html = renderWith(component, slug)
      const hrefs = hrefsIn(html)
      if (name === "AtlasHome" && hrefs.length === 0) continue
      assert.ok(hrefs.length > 0, `${name} rendered no links on ${slug}`)
      for (const href of hrefs) {
        const target = targetSlug(slug, href)
        assert.ok(
          slugSet.has(target),
          `${name} on ${slug} links to "${href}" (slug "${target}"), which this build never emits`,
        )
        checked += 1
      }
    }
  }

  assert.ok(checked >= 12, `expected the nav and homepage links to be exercised, saw ${checked}`)
})

test("rendered navigation hrefs carry no authored-path artifacts", () => {
  const nav = AtlasNavComponent()
  const home = AtlasHomeComponent()

  for (const slug of renderedPages) {
    for (const component of [nav, home]) {
      for (const href of hrefsIn(renderWith(component, slug))) {
        const path = decodeURI(href.split("#")[0]!)
        assert.ok(!path.includes(" "), `href "${href}" still contains a space`)
        assert.ok(path === path.toLowerCase(), `href "${href}" still contains capitals`)
        assert.ok(!/\.[a-z]+\.(md|canvas|base)$/i.test(path), `href "${href}" keeps a source extension`)
      }
    }
  }
})

test("no rendered navigation link is marked unresolved", () => {
  const nav = AtlasNavComponent()
  const home = AtlasHomeComponent()
  const html = [renderWith(nav, "research/library"), renderWith(home, "index")].join("")
  assert.ok(!html.includes("data-atlas-unresolved"), "every authored target must resolve in a real build")
})

test("authored vault paths resolve to the slugs the build generates", () => {
  const cases: [string, string][] = [
    ["Research/Learning/Learning Hub", "research/learning/learning-hub"],
    ["/Research/Library", "research/library"],
    ["Research/Learning/Learning Hub.md", "research/learning/learning-hub"],
    ["Research/Maps/Research Synthesis Map.canvas", "research/maps/research-synthesis-map.canvas"],
    ["Research/Maps/ADHD Map.md", "research/maps/adhd-map"],
    ["Research/Learning Library.base", "research/learning-library.base"],
    ["index", "index"],
  ]

  for (const [authored, expected] of cases) {
    const resolved = resolveAuthoredHref("index", allFiles, authored)
    assert.equal(resolved.resolved, true, `"${authored}" should match a file in the build`)
    assert.equal(
      targetSlug("index", resolved.href),
      expected,
      `"${authored}" should link to ${expected}, got "${resolved.href}"`,
    )
  }
})

test("anchors survive resolution and unknown paths are reported", () => {
  const anchored = resolveAuthoredHref(
    "research/learning/learning-hub",
    allFiles,
    "Research/Library#article-library",
  )
  assert.equal(anchored.resolved, true)
  assert.equal(anchored.href, "../../research/library#article-library")

  const missing = resolveAuthoredHref("index", allFiles, "Research/Does Not Exist")
  assert.equal(missing.resolved, false, "a path with no page behind it must not report success")
})

test("a refiled target still resolves by its unique name, like an Obsidian link", () => {
  const refiled = [
    file("research/hubs/library", "Research/Hubs/Library.md", { title: "Library" }),
    file("research/visualizations/map.canvas", "Research/Visualizations/Map.canvas.md", {}),
    file("research/a/overview", "Research/A/Overview.md", {}),
    file("research/b/overview", "Research/B/Overview.md", {}),
  ]
  const moved = resolveAuthoredHref("index", refiled, "Research/Library")
  assert.equal(moved.resolved, true)
  assert.equal(moved.href, "./research/hubs/library")
  assert.equal(resolveAuthoredHref("index", refiled, "Research/Maps/Map.canvas").resolved, true)
  assert.equal(
    resolveAuthoredHref("index", refiled, "Research/Overview").resolved,
    false,
    "two notes share the name, so the link stays unresolved instead of guessing",
  )
})

test("the site root is generated only while the vault has no root note", () => {
  const home = AtlasHomePages()
  const generate = (slugs: string[]) =>
    home.generate!({
      content: slugs.map((slug) => [{}, { data: { slug } }]),
    } as never)
  assert.deepEqual(
    generate(["research/home"]).map((page) => page.slug),
    ["index"],
    "no index.md: publish the home surface at the root",
  )
  assert.deepEqual(generate(["index", "research/home"]), [], "an authored index.md wins")
  assert.equal(home.match!({ slug: "index" } as never), false, "real notes stay with the content page type")
})

test("a canvas counts once although it arrives as a file and as its virtual page", () => {
  const counts = countContent([
    file("research/maps/a.canvas", "Research/Maps/a.canvas", {}),
    file("research/maps/a.canvas", "Research/Maps/a.canvas.md", {}),
    file("research/maps/b.canvas", "Research/Maps/b.canvas.md", {}),
    file("research/templates/t.canvas", "research/templates/t.canvas.md", {}),
  ])
  assert.equal(counts.canvases, 2, "templates are not library canvases")
})
