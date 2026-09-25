import assert from "node:assert/strict"
import test from "node:test"
import type { QuartzPluginData } from "@quartz-community/types"
import { buildDashboardIndex } from "../dashboards"
import { countContent } from "../components"
import { AtlasUtilityPages, isUtilityPage } from "../utility-pages"

/**
 * `Research/AGENTS.md` and `Research/Templates/**` are published (other notes
 * link to them) but must never appear in a discovery surface. These tests cover
 * the classification itself and the count/index exclusions that depend on it.
 */

function file(
  slug: string,
  relativePath: string,
  frontmatter: Record<string, unknown> = {},
): QuartzPluginData {
  return {
    slug,
    relativePath,
    filePath: relativePath,
    frontmatter: { title: slug, ...frontmatter },
  } as unknown as QuartzPluginData
}

test("only the vault's utility paths are classified as utility pages", () => {
  const utility = [
    "Research/AGENTS.md",
    "Research/Templates/Source template.md",
    "Research/Templates/Argument template.md",
    "Research/Templates/nested/anything.md",
  ]
  for (const path of utility) {
    assert.equal(isUtilityPage(path), true, `${path} should be a utility page`)
  }

  const library = [
    "Research/Home.md",
    "Research/Sources/F01 OpenStax.md",
    "Research/Learning/Lessons/M01/Lesson.md",
    // A note that merely ends in "Template.md" is not in the utility folder.
    "Research/Templates.md",
    "Research/AGENTS.md.bak",
    // The config keeps ignoring a top-level `templates/` directory.
    "Templates/Note.md",
    undefined,
    null,
  ]
  for (const path of library) {
    assert.equal(isUtilityPage(path), false, `${String(path)} should not be a utility page`)
  }
})

test("the transformer marks utility pages unlisted and leaves library notes alone", () => {
  const instance = AtlasUtilityPages() as unknown as {
    htmlPlugins?: () => Array<
      () => (tree: unknown, file: { data: Record<string, unknown> }) => void
    >
  }
  const [utilityPlugin] = instance.htmlPlugins?.() ?? []
  assert.ok(utilityPlugin, "the transformer must register a rehype plugin")
  const transform = utilityPlugin!()

  for (const relativePath of ["Research/AGENTS.md", "Research/Templates/Source template.md"]) {
    const file = { data: { relativePath } as Record<string, unknown> }
    transform(undefined, file)
    assert.equal(file.data.unlisted, true, `${relativePath} must be marked unlisted`)
  }

  const library = { data: { relativePath: "Research/Sources/F01 OpenStax.md" } as Record<string, unknown> }
  transform(undefined, library)
  assert.equal("unlisted" in library.data, false, "library notes must not be marked unlisted")
})

test("templates stay out of the counts and the dashboard rows", () => {
  const withTemplates = [
    file("Research/Sources/A", "Research/Sources/A.md", { note_type: "source", source_count: 1 }),
    file("Research/Topics/T", "Research/Topics/T.md", { note_type: "topic" }),
    file("Research/Learning/Lessons/M01/L", "Research/Learning/Lessons/M01/L.md", {
      note_type: "lesson",
      module: "m01",
    }),
    // A template carries source/lesson-looking frontmatter and must not count.
    file("Research/Templates/Source template", "Research/Templates/Source template.md", {
      note_type: "source",
      source_kind: "paper",
      title: "{{title}}",
    }),
    file("Research/Templates/Lesson template", "Research/Templates/Lesson template.md", {
      note_type: "lesson",
      module: "m01",
      title: "{{title}}",
    }),
  ]

  const counts = countContent(withTemplates)
  assert.equal(counts.sources, 1, "the source template must not be counted as a source")
  assert.equal(counts.topics, 1)
  assert.equal(counts.lessons, 1, "the lesson template must not be counted as a lesson")

  const rows = buildDashboardIndex(withTemplates).rows
  assert.equal(rows.length, 3, "only the three library notes may become dashboard rows")
  assert.ok(
    !rows.some((row) => row.file.path.includes("Templates/")),
    "no template may reach a dashboard row",
  )
})

test("unlisted utility pages stay out of the dashboard rows", () => {
  const agents = file("research/agents", "Research/AGENTS.md", {})
  agents.unlisted = true
  const rows = buildDashboardIndex([
    file("Research/Sources/A", "Research/Sources/A.md", { note_type: "source" }),
    agents,
  ]).rows
  assert.equal(rows.length, 1)
  assert.ok(!rows.some((row) => row.file.slug === "research/agents"))
})
