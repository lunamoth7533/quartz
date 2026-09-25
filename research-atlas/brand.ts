/**
 * Site mark for the Research Atlas.
 *
 * Emits the favicon from the site's own icon rather than the Quartz demo logo,
 * and leaves `quartz/static` (upstream assets) untouched.
 */

import fs from "node:fs/promises"
import path from "node:path"
import sharp from "sharp"
import type { FilePath, QuartzEmitterPlugin } from "@quartz-community/types"

const ICON_SVG = path.join("research-atlas", "assets", "icon.svg")

export const AtlasBrandAssets: QuartzEmitterPlugin = () => ({
  name: "AtlasBrandAssets",
  async emit({ argv }) {
    const source = path.join(process.cwd(), ICON_SVG)
    const icon = await sharp(await fs.readFile(source)).resize(48, 48).png()
    const output = path.join(argv.output, "favicon.ico")
    await fs.mkdir(path.dirname(output), { recursive: true })
    await fs.writeFile(output, await icon.toBuffer())
    return [output as FilePath]
  },
})
