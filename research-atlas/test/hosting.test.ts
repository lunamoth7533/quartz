import assert from "node:assert/strict"
import test from "node:test"
import { h } from "preact"
import { AtlasSelfHostedFonts } from "../hosting"
import type { BuildCtx } from "../../quartz/util/ctx"
import type { QuartzTransformerPluginInstance } from "../../quartz/plugins/types"

/**
 * The fonts plugin hardcodes `/static/fonts/quartz-fonts.css`, which only
 * resolves on an apex-domain deployment. These tests pin the adapter's
 * contract: that exact stylesheet link is re-pointed per page (root, nested,
 * and 404 via the configured project prefix) while every other resource is
 * passed through untouched.
 */

const BASE_URL = "lunamoth7533.github.io/quartz"

function pluginFonts(): QuartzTransformerPluginInstance {
  // Hoisted so repeated calls return the same resource references, mirroring
  // how the real plugin's externalResources can be invoked more than once.
  const resources = {
    css: [{ content: "h1 { font-family: Fraunces; }", inline: true }],
    js: [] as [],
    additionalHead: [
      h("link", { rel: "stylesheet", href: "/static/fonts/quartz-fonts.css" }),
      h("meta", { name: "generator", content: "unrelated" }),
    ],
  }
  return {
    name: "Fonts",
    textTransform: (_ctx, src) => src,
    externalResources: () => resources,
  }
}

function resources(baseUrl: string | undefined) {
  const ctx = {
    cfg: { configuration: { baseUrl } },
  } as unknown as BuildCtx
  const wrapped = AtlasSelfHostedFonts(pluginFonts()).externalResources!(ctx)
  assert.ok(wrapped?.additionalHead, "adapter should return resources with a head list")
  return wrapped.additionalHead
}

function fontHref(fileData: { slug: string }): string {
  const head = resources(BASE_URL)
  assert.equal(head.length, 2)
  const entry = head[0]
  assert.equal(typeof entry, "function", "stylesheet link should be replaced by a resolver")
  const vnode = (entry as (data: { slug: string }) => unknown)(fileData) as {
    props: { href?: string; rel?: string }
  }
  assert.equal(vnode.props.rel, "stylesheet")
  return vnode.props.href as string
}

test("the stylesheet resolves relative to the home page", () => {
  assert.equal(fontHref({ slug: "index" }), "./static/fonts/quartz-fonts.css")
})

test("the stylesheet resolves relative to a deeply nested note", () => {
  assert.equal(
    fontHref({ slug: "Research/Learning/Lessons/M08-ADHD/Lesson" }),
    "../../../../static/fonts/quartz-fonts.css",
  )
})

test("the 404 page resolves via the configured project prefix", () => {
  assert.equal(fontHref({ slug: "404" }), "/quartz/static/fonts/quartz-fonts.css")
})

test("unrelated head entries and other resources pass through untouched", () => {
  const original = pluginFonts()
  const ctx = {
    cfg: { configuration: { baseUrl: BASE_URL } },
  } as unknown as BuildCtx
  const originalResources = original.externalResources!(ctx)
  const wrappedResources = AtlasSelfHostedFonts(original).externalResources!(ctx)

  assert.ok(originalResources && wrappedResources)
  assert.ok(originalResources.additionalHead && wrappedResources.additionalHead)
  assert.equal(wrappedResources?.css, originalResources?.css)
  assert.equal(wrappedResources?.js, originalResources?.js)
  assert.equal(wrappedResources.additionalHead[1], originalResources.additionalHead[1])
})

test("the wrapper keeps the plugin's name and other transformer hooks", () => {
  const wrapped = AtlasSelfHostedFonts(pluginFonts())
  assert.equal(wrapped.name, "Fonts")
  const ctx = {
    cfg: { configuration: { baseUrl: BASE_URL } },
  } as unknown as BuildCtx
  assert.equal(wrapped.textTransform?.(ctx, "src"), "src")
})
