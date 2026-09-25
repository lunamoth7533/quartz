import assert from "node:assert/strict"
import test from "node:test"
import type { QuartzPluginData } from "@quartz-community/types"
import type { FullSlug } from "../../quartz/util/path"
import { buildDashboardIndex, renderBlock, type AtlasDashboardBlock } from "../dashboards"
import { createDashboardTransform, dedupeBodyTitle, replaceDashboardBlocks } from "../dashboards"
import { countContent, factsFor, modulePathway } from "../components"
import { escapeHtml } from "../render"
import type { Element, Root } from "hast"

function file(
  slug: string,
  relativePath: string,
  frontmatter: Record<string, unknown>,
): QuartzPluginData {
  return {
    slug,
    relativePath,
    filePath: relativePath,
    frontmatter: { title: slug, ...frontmatter },
  } as unknown as QuartzPluginData
}

const allFiles = [
  file("Research/Sources/A", "Research/Sources/A.md", {
    note_type: "source",
    title: "Alpha study",
    year: 2021,
    condition: ["adhd"],
    source_kind: "educational",
    publisher: "OpenStax",
    access_level: "public-page",
    reading_status: "queued",
    verification: "abstract_checked",
  }),
  file("Research/Sources/B", "Research/Sources/B.md", {
    note_type: "source",
    title: "Beta study",
    year: 2019,
    condition: [],
    access_level: "abstract-only",
    reading_status: "queued",
  }),
  file("Research/Topics/T", "Research/Topics/T.md", {
    note_type: "topic",
    title: "A topic <script>alert(1)</script>",
    source_count: 1,
    domain: ["neurobiology"],
  }),
  file("Research/Learning/Lessons/M01/L", "Research/Learning/Lessons/M01/L.md", {
    note_type: "lesson",
    module: "m01",
    module_title: "Module 01",
    lesson_order: 1,
    source_count: 2,
  }),
  file("Research/Learning/Modules/M1", "Research/Learning/Modules/M1.md", {
    note_type: "module",
    module: "m01",
    module_order: 1,
    lesson_count: 1,
    source_count: 2,
  }),
  file("Research/Templates/Source template", "Research/Templates/Source template.md", {
    note_type: "source",
    title: "Template",
  }),
  file("Research/Maps/M.canvas", "Research/Maps/M.canvas", {}),
  file("research/maps/m.canvas", "Research/Maps/M.canvas.md", {}),
  file("Research/Arguments/Arg", "Research/Arguments/Arg.md", {
    note_type: "topic",
    title: "An argument that is typed as a topic",
  }),
]

const noBlocks: AtlasDashboardBlock[] = []

test("template notes are excluded from counts, pathway and dashboard rows", () => {
  const counts = countContent(allFiles)
  assert.equal(counts.sources, 2, "the template source note must not be counted")
  assert.equal(counts.topics, 1)
  assert.equal(counts.lessons, 1)
  assert.equal(counts.modules, 1)
  // The fixture holds both canvas shapes (the raw `.canvas` entry and the
  // virtual page whose slug keeps `.canvas`); a real build only has one per
  // canvas, which the site's own counts confirm.
  assert.equal(counts.canvases, 2)
  assert.equal(
    counts.arguments,
    1,
    "argument counts follow the folder, not an inconsistent note_type value",
  )
  assert.equal(counts.topics, 1, "the mis-typed argument note must not inflate topics")
  const index = buildDashboardIndex(allFiles)
  assert.ok(!index.rows.some((row) => row.file.path.startsWith("Research/Templates/")))
  assert.equal(modulePathway(allFiles).length, 1)
})

test("dashboard rows are computed from note metadata and rendered as links", () => {
  const index = buildDashboardIndex(allFiles)
  const block: AtlasDashboardBlock = {
    language: "dataview",
    source:
      'TABLE WITHOUT ID file.link AS Source, year AS Year FROM "Research/Sources" WHERE reading_status = "queued" SORT year DESC',
  }
  const rendered = renderBlock(block, index, "Research/Visualizations" as FullSlug)
  assert.equal(rendered.status, "rendered")
  assert.equal(rendered.rowCount, 2)
  assert.match(rendered.html, /Alpha study/)
  assert.match(rendered.html, /href="[^"]*a"/i, "links resolve relative to the dashboard page")
  assert.match(rendered.html, /atlas-query/, "the authored query stays visible")
})

test("note-derived values are escaped", () => {
  const index = buildDashboardIndex(allFiles)
  const rendered = renderBlock(
    {
      language: "dataview",
      source: 'TABLE file.link AS Topic, domain AS Domain FROM "Research/Topics"',
    },
    index,
    "index" as FullSlug,
  )
  assert.ok(!rendered.html.includes("<script>"), "raw HTML from a note title must not survive")
  assert.match(rendered.html, /&lt;script&gt;/)
  assert.equal(escapeHtml('a"b<c>\'d&'), "a&quot;b&lt;c&gt;&#39;d&amp;")
})

test("empty results render an honest empty state", () => {
  const index = buildDashboardIndex(allFiles)
  const rendered = renderBlock(
    {
      language: "dataview",
      source: 'TABLE file.link AS Source FROM "Research/Sources" WHERE reading_status = "read"',
    },
    index,
    "Research/Visualizations" as FullSlug,
  )
  assert.equal(rendered.status, "empty")
  assert.equal(rendered.rowCount, 0)
  assert.match(rendered.html, /No notes match this view/)
})

test("unsupported and dataviewjs fences are reported, never executed", () => {
  const index = buildDashboardIndex(allFiles)
  const unsupported = renderBlock(
    { language: "dataview", source: "CALENDAR due" },
    index,
    "Research/Visualizations" as FullSlug,
  )
  assert.equal(unsupported.status, "unsupported")
  assert.match(unsupported.html, /not rendered on the site/)

  const js = renderBlock(
    { language: "dataviewjs", source: "dv.list(dv.pages())" },
    index,
    "Research/Visualizations" as FullSlug,
  )
  assert.equal(js.status, "unsupported")
  assert.match(js.html, /does not execute vault JavaScript/)
})

test("fact panels show authored fields with human labels", () => {
  const source = allFiles[0].frontmatter as Record<string, unknown>
  const facts = factsFor(source, "source", allFiles)
  const labels = facts.map((fact) => fact.label)
  assert.deepEqual(labels.slice(0, 3), ["Source type", "Published in", "Year"])
  const access = facts.find((fact) => fact.label === "Access")
  assert.equal(access?.value, "Public page")
  const rendering = factsFor(source, "source", allFiles).find(
    (fact) => fact.label === "Reading status",
  )
  assert.match(String(rendering?.value), /Queued/)
  const verification = facts.find((fact) => fact.label === "Verification")
  assert.match(String(verification?.value), /Abstract checked/)
  assert.equal(factsFor({}, "hub", allFiles).length, 0, "no raw dump for note types without facts")
  assert.equal(noBlocks.length, 0)
})

test("dashboard placeholders replace only the code block, not surrounding prose", () => {
  const tree = {
    type: "root",
    children: [
      {
        type: "element",
        tagName: "div",
        properties: { className: ["callout-content"] },
        children: [
          {
            type: "element",
            tagName: "p",
            properties: {},
            children: [{ type: "text", value: "Authored prose around the query" }],
          },
          {
            type: "element",
            tagName: "pre",
            properties: {},
            children: [
              {
                type: "element",
                tagName: "code",
                properties: { className: ["language-dataview"] },
                children: [
                  { type: "text", value: 'TABLE file.link AS Source FROM "Research/Sources"' },
                ],
              },
            ],
          },
        ],
      },
    ],
  } as unknown as Root

  const blocks: AtlasDashboardBlock[] = []
  replaceDashboardBlocks(tree, blocks)

  assert.equal(blocks.length, 1, "the fence is captured")
  const div = tree.children[0] as Element
  assert.equal(div.children.length, 2, "prose and placeholder both survive")
  const prose = div.children[0] as Element
  assert.equal((prose.children[0] as { value: string }).value, "Authored prose around the query")
  const placeholder = div.children[1] as Element
  assert.equal(placeholder.properties?.dataAtlasDashboard, "0")
})

test("deduplicating a body title keeps its anchor and drops the duplicate TOC row", () => {
  const toc = [
    { depth: 1, text: "Bias and confounding", slug: "bias-and-confounding" },
    { depth: 2, text: "Why this matters", slug: "why-this-matters" },
  ]
  const tree = {
    type: "root",
    children: [
      {
        type: "element",
        tagName: "h1",
        properties: { id: "bias-and-confounding" },
        children: [{ type: "text", value: "Bias and confounding" }],
      },
      {
        type: "element",
        tagName: "h2",
        properties: { id: "why-this-matters" },
        children: [{ type: "text", value: "Why this matters" }],
      },
    ],
  } as unknown as Root
  const componentData = {
    fileData: {
      frontmatter: { title: "Bias and confounding" },
      slug: "research/learning/lessons/m01-research-methods/lesson---bias-and-confounding",
      toc,
    },
  }

  const transform = createDashboardTransform()
  transform(tree, componentData.fileData.slug as FullSlug, componentData as never)

  const anchor = tree.children[0] as Element
  assert.equal(anchor.tagName, "span", "the heading is replaced by an anchor target")
  assert.equal(anchor.properties?.id, "bias-and-confounding")
  assert.ok(
    !tree.children.some((node) => (node as Element).tagName === "h1"),
    "only the article title remains visible",
  )
  assert.equal(toc.length, 1, "the duplicate first TOC row is dropped")
  assert.equal(toc[0]?.slug, "why-this-matters")

  // Incremental rebuilds re-run the transform over the same file data.
  transform(tree, componentData.fileData.slug as FullSlug, componentData as never)
  assert.equal(toc.length, 1, "re-running does not remove further rows")
  assert.equal((tree.children[0] as Element).properties?.id, "bias-and-confounding")

  // A heading that says something else is left completely alone.
  const otherTree = {
    type: "root",
    children: [
      {
        type: "element",
        tagName: "h1",
        properties: { id: "different-heading" },
        children: [{ type: "text", value: "Different heading" }],
      },
    ],
  } as unknown as Root
  const otherToc = [{ depth: 1, text: "Different heading", slug: "different-heading" }]
  dedupeBodyTitle(otherTree, {
    fileData: { frontmatter: { title: "Bias and confounding" }, toc: otherToc },
  } as never)
  assert.equal((otherTree.children[0] as Element).tagName, "h1")
  assert.equal(otherToc.length, 1)
})
