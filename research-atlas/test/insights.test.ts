import assert from "node:assert/strict"
import test from "node:test"
import { h } from "preact"
import { render } from "preact-render-to-string"
import type {
  QuartzComponent,
  QuartzComponentProps,
  QuartzPluginData,
} from "@quartz-community/types"
import { categoryFor, tagLabel } from "../categories"
import {
  AtlasInsightsComponent,
  backbone,
  coverageMatrix,
  designCounts,
  linkStats,
  looseEnds,
  paperChecks,
  topicDepth,
  yearCounts,
} from "../insights"

function note(
  slug: string,
  relativePath: string,
  frontmatter: Record<string, unknown>,
  links: string[] = [],
) {
  return {
    slug,
    relativePath,
    filePath: relativePath,
    links,
    frontmatter: { title: slug.split("/").pop(), ...frontmatter },
  } as unknown as QuartzPluginData
}

/** A small vault with every family, a template and a generated folder listing. */
const allFiles = [
  note("research/sources/a", "Research/Sources/a.md", {
    note_type: "source",
    source_kind: "paper",
    verification: "full_text_checked",
    year: 2019,
    study_type: "Review",
    domain: ["psychology"],
    condition: ["adhd"],
    reading_status: "queued",
    queue_tier: "core",
  }),
  note("research/sources/b", "Research/Sources/b.md", {
    note_type: "source",
    source_kind: "paper",
    verification: "abstract_checked",
    year: 2021,
    study_type: "Review",
    domain: ["psychology", "neurology"],
    reading_status: "queued",
    queue_tier: "advanced",
  }),
  note("research/sources/c", "Research/Sources/c.md", {
    note_type: "source",
    source_kind: "educational",
    verification: "educational_checked",
    study_type: "Open textbook section",
    domain: ["neurology"],
    reading_status: "read",
  }),
  note(
    "research/topics/t1",
    "Research/Topics/t1.md",
    { note_type: "topic", source_count: 2, domain: ["psychology"], condition: ["adhd"] },
    ["research/sources/a", "research/sources/b", "research/sources/a", "research/missing"],
  ),
  note(
    "research/learning/lessons/l1",
    "Research/Learning/Lessons/l1.md",
    { note_type: "lesson", domain: ["psychology"] },
    ["research/topics/t1", "research/sources/a", "research/learning/lessons/l1"],
  ),
  note("research/hubs/visualizations", "Research/Hubs/Visualizations.md", {
    note_type: "hub",
    title: "Visualizations",
    tags: ["research/visualizations"],
  }),
  note(
    "research/templates/source",
    "Research/Templates/Source.md",
    { note_type: "source", year: 1900 },
    ["research/sources/c"],
  ),
  note("research/sources/index", "Research/Sources/index.md", {}, []),
]

test("categories follow what a note is, wherever it is filed", () => {
  assert.equal(
    categoryFor({ slug: "research/domains/x/articles/p1", noteType: "source" }),
    "source",
  )
  assert.equal(categoryFor({ slug: "research/domains/x/y/topic", noteType: "topic" }), "topic")
  assert.equal(
    categoryFor({ slug: "research/learning/lessons/m01/x", noteType: "lesson" }),
    "learning",
  )
  assert.equal(categoryFor({ slug: "anywhere", noteType: "module" }), "learning")
  assert.equal(categoryFor({ slug: "research/arguments/a", noteType: "argument" }), "argument")
  assert.equal(categoryFor({ slug: "research/domains/x/x-map", noteType: "map" }), "hub")
  assert.equal(categoryFor({ slug: "research/domains/x/y/y", noteType: "subdomain" }), "hub")
  // In the browser only tags are known; nested and #-prefixed tags still count.
  assert.equal(
    categoryFor({ slug: "a", tags: ["research/educational", "research/source"] }),
    "source",
  )
  assert.equal(categoryFor({ slug: "a", tags: ["#Research/Topic/sub"] }), "topic")
  assert.equal(categoryFor({ slug: "a", tags: ["research/reference"] }), "hub")
  assert.equal(categoryFor({ slug: "tags/research/domain/psychology" }), "tag")
})

test("tag labels read as words", () => {
  assert.equal(tagLabel("research/condition/bipolar-i"), "Bipolar I")
  assert.equal(tagLabel("research/condition/adhd"), "ADHD")
  assert.equal(tagLabel("research-methods"), "Research methods")
})

test("coverage counts notes per value and note type, dropping empty columns", () => {
  const { columns, rows } = coverageMatrix(allFiles, "domain")
  assert.deepEqual(columns, ["Sources", "Topics", "Lessons"])
  assert.deepEqual(
    rows.map((r) => [r.label, r.values, r.total]),
    [
      ["Psychology", [2, 1, 1], 4],
      ["Neurology", [2, 0, 0], 2],
    ],
  )
})

test("link stats count each linking note once and ignore self, missing and template links", () => {
  const stats = linkStats(allFiles)
  const top = backbone(stats)
  assert.equal(top[0].slug, "research/sources/a")
  assert.equal(top[0].count, 2, "t1 links twice and l1 once: two distinct notes")
  // topic -> source: t1 links a and b; lesson -> topic: l1 links t1; lesson -> source: l1 links a
  assert.equal(stats.flows[1][0], 2)
  assert.equal(stats.flows[2][1], 1)
  assert.equal(stats.flows[2][0], 1)
  assert.equal(stats.flows[2][2], 0, "a self-link is not a flow")
  assert.ok(!stats.inbound.has("research/sources/c"), "only the template links to c")
  assert.ok(!stats.noteBySlug.has("research/sources/"), "generated listings are not notes")
})

test("loose ends are notes nothing links to", () => {
  const loose = looseEnds(linkStats(allFiles)).map((entry) => entry.slug)
  assert.deepEqual(loose, [
    "research/hubs/visualizations",
    "research/learning/lessons/l1",
    "research/sources/c",
  ])
})

test("paper checks split papers by depth and report the other sources separately", () => {
  const checks = paperChecks(allFiles)
  assert.equal(checks.papers, 2)
  assert.deepEqual(
    checks.segments.map((s) => [s.key, s.value]),
    [
      ["abstract_checked", 1],
      ["article_page_checked", 0],
      ["full_text_checked", 1],
    ],
  )
  assert.equal(checks.others, 1)
  assert.equal(checks.othersChecked, 1)
})

test("years form a continuous axis and ignore templates", () => {
  const { years, columns } = yearCounts(allFiles)
  assert.deepEqual(years.sort(), [2019, 2021])
  assert.deepEqual(
    columns.map((c) => [c.label, c.value]),
    [
      ["2019", 1],
      ["2020", 0],
      ["2021", 1],
    ],
  )
})

test("designs fold the tail into one row", () => {
  const { rows, total, kinds } = designCounts(allFiles, 1)
  assert.equal(total, 3)
  assert.equal(kinds, 2)
  assert.deepEqual(rows, [
    { label: "Review", value: 2 },
    { label: "1 other designs", value: 1 },
  ])
})

test("topic depth counts topics per number of sources", () => {
  assert.deepEqual(
    topicDepth(allFiles).columns.map((c) => c.value),
    [0, 0, 1],
  )
})

test("the insights panel renders only on the tagged hub", () => {
  const Insights = AtlasInsightsComponent() as QuartzComponent
  const renderFor = (slug: string) => {
    const fileData = allFiles.find((f) => f.slug === slug)!
    return render(
      h(
        Insights as never,
        {
          fileData,
          allFiles,
          cfg: {},
          displayClass: undefined,
        } as unknown as QuartzComponentProps,
      ),
    )
  }
  const html = renderFor("research/hubs/visualizations")
  assert.match(html, /At a glance/)
  assert.match(html, /class="atlas-global-panel"[^>]*data-inline/)
  assert.match(html, /<table class="atlas-heat">/)
  assert.match(html, /1 of 2 papers \(50%\) were checked against the full text/)
  assert.equal(renderFor("research/topics/t1"), "")
})
