/**
 * Project-prefix hosting adapter for the site's self-hosted fonts.
 *
 * `@quartz-community/quartz-fonts` hardcodes the stylesheet link
 * `/static/fonts/quartz-fonts.css`, which only resolves on an apex-domain
 * deployment. On this site's project URL (`lunamoth7533.github.io/quartz`)
 * it 404s and the fonts silently fall back to system fonts. The wrapper
 * passes the plugin's resources through untouched except for that exact
 * stylesheet link, resolving it the same way `Head` resolves its other
 * static assets: relative to the page, or via the configured project prefix
 * on the 404 page.
 */

import { joinSegments, pathToRoot } from "../quartz/util/path"
import type { FullSlug } from "../quartz/util/path"
import type { BuildCtx } from "../quartz/util/ctx"
import type { StaticResources } from "../quartz/util/resources"
import type { QuartzTransformerPluginInstance } from "../quartz/plugins/types"

const PLUGIN_FONTS_STYLESHEET = "/static/fonts/quartz-fonts.css"
const FONTS_STYLESHEET_PATH = "static/fonts/quartz-fonts.css"
type HeadEntry = StaticResources["additionalHead"][number]

function hrefOf(entry: unknown): string | undefined {
  if (!entry || typeof entry !== "object") return undefined
  const props = (entry as { props?: { href?: unknown } }).props
  const attrs = (entry as { properties?: { href?: unknown } }).properties
  const href = props?.href ?? attrs?.href
  return typeof href === "string" ? href : undefined
}

export function AtlasSelfHostedFonts(
  fonts: QuartzTransformerPluginInstance,
): QuartzTransformerPluginInstance {
  return {
    ...fonts,
    externalResources(ctx: BuildCtx) {
      const resources = fonts.externalResources?.(ctx)
      if (!resources) return resources
      const baseUrl = ctx.cfg.configuration.baseUrl
      const projectPath = baseUrl ? new URL(`https://${baseUrl}`).pathname : ""
      const additionalHead = (resources.additionalHead ?? []).map((entry: HeadEntry): HeadEntry => {
        if (hrefOf(entry) !== PLUGIN_FONTS_STYLESHEET) return entry
        return (pageData) => {
          const baseDir =
            pageData.slug === "404" ? projectPath : pathToRoot(pageData.slug as FullSlug)
          return <link rel="stylesheet" href={joinSegments(baseDir, FONTS_STYLESHEET_PATH)} />
        }
      })
      return { ...resources, additionalHead }
    },
  }
}
