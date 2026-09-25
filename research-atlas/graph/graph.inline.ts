/**
 * Research Atlas graph (client).
 *
 * Replaces the stock graph so the view stays readable at vault scale:
 * - nodes are coloured by note family and shaped for the neutral families
 *   (shared taxonomy in ../categories.ts, colours from --atlas-cat-*);
 * - the global view pulls each family toward its own region, so the vault
 *   reads as neighbourhoods joined by links instead of one hairball;
 * - the legend doubles as a filter, and condition / domain / search highlight
 *   a subset without repainting anything else;
 * - labels are placed greedily so they never overlap.
 *
 * Rendering is Canvas 2D with d3-force bundled in at build time: no CDN
 * requests, and a fraction of the stock graph's pixi.js payload.
 */
import {
  forceCollide,
  forceLink,
  forceManyBody,
  forceSimulation,
  forceX,
  forceY,
  type Simulation,
  type SimulationLinkDatum,
  type SimulationNodeDatum,
} from "d3-force"
import type { ContentDetails } from "@quartz-community/types"
import {
  CATEGORY_INFO,
  CATEGORY_ORDER,
  categoryFor,
  isMeaningfulTag,
  tagLabel,
  type AtlasCategory,
} from "../categories"

type Mode = "local" | "global"

interface GraphCfg {
  depth: number
  showTags: boolean
}

interface Note {
  id: string
  title: string
  cat: AtlasCategory
  tags: string[]
  out: string[]
}

interface Model {
  notes: Map<string, Note>
  adj: Map<string, Set<string>>
  edges: [string, string][]
  tagMembers: Map<string, string[]>
}

interface GNode extends SimulationNodeDatum {
  id: string
  title: string
  cat: AtlasCategory
  deg: number
  r: number
}

interface GLink extends SimulationLinkDatum<GNode> {
  source: GNode
  target: GNode
  tag: boolean
}

interface Highlight {
  query: string
  tag: string
}

interface Handle {
  destroy(): void
  redraw(): void
  setHidden(hidden: Set<AtlasCategory>): void
  setHighlight(highlight: Highlight): void
  focusFirstMatch(): void
  counts(): { notes: number; links: number; matched: number }
}

// --- slugs -----------------------------------------------------------------

/** Same rule as Quartz's simplifySlug: drop a trailing "index". */
function simplify(full: string): string {
  if (full === "index") return "/"
  return full.endsWith("/index") ? full.slice(0, -"index".length) : full
}

function hrefFor(currentFull: string, targetSimple: string): URL {
  const depth = currentFull.split("/").length - 1
  const root = depth === 0 ? "." : Array(depth).fill("..").join("/")
  const target = targetSimple === "/" ? "" : targetSimple
  return new URL(`${root}/${target}`, window.location.toString())
}

function currentSlug(): string {
  return document.body.dataset.slug ?? "index"
}

function navigate(currentFull: string, id: string) {
  const url = hrefFor(currentFull, id.startsWith("tag:") ? `tags/${id.slice(4)}` : id)
  if (typeof window.spaNavigate === "function") window.spaNavigate(url)
  else window.location.assign(url)
}

// --- data ------------------------------------------------------------------

let modelPromise: Promise<Model> | undefined

function getModel(): Promise<Model> {
  modelPromise ??= fetchData.then((index) => buildModel(index as unknown as Record<string, ContentDetails>))
  return modelPromise
}

function buildModel(index: Record<string, ContentDetails>): Model {
  const notes = new Map<string, Note>()
  for (const [full, details] of Object.entries(index)) {
    // Tag pages become tag nodes below; generated folder listings have no links
    // of their own and would only float as disconnected dots.
    const generatedListing =
      (full === "index" || full.endsWith("/index")) && (details.links?.length ?? 0) === 0
    if (full.startsWith("tags/") || generatedListing) continue
    const id = simplify(full)
    notes.set(id, {
      id,
      title: details.title || id,
      cat: categoryFor({ slug: full, tags: details.tags }),
      tags: (details.tags ?? []).filter(isMeaningfulTag),
      out: details.links ?? [],
    })
  }

  const adj = new Map<string, Set<string>>()
  const edges: [string, string][] = []
  const seen = new Set<string>()
  const connect = (a: string, b: string) => {
    let set = adj.get(a)
    if (!set) adj.set(a, (set = new Set()))
    set.add(b)
  }
  for (const note of notes.values()) {
    for (const target of note.out) {
      if (target === note.id || !notes.has(target)) continue
      const key = note.id < target ? `${note.id}\n${target}` : `${target}\n${note.id}`
      if (seen.has(key)) continue
      seen.add(key)
      edges.push([note.id, target])
      connect(note.id, target)
      connect(target, note.id)
    }
  }

  const tagMembers = new Map<string, string[]>()
  for (const note of notes.values()) {
    for (const tag of note.tags) {
      const members = tagMembers.get(tag)
      if (members) members.push(note.id)
      else tagMembers.set(tag, [note.id])
    }
  }
  return { notes, adj, edges, tagMembers }
}

// --- palette -----------------------------------------------------------------

interface Palette {
  cat: Record<AtlasCategory, string>
  surface: string
  link: string
  linkStrong: string
  ink: string
  inkStrong: string
  font: string
}

function readPalette(el: Element): Palette {
  const style = getComputedStyle(el)
  const v = (name: string, fallback: string) => style.getPropertyValue(name).trim() || fallback
  const cat = {} as Record<AtlasCategory, string>
  for (const key of CATEGORY_ORDER) cat[key] = v(`--atlas-cat-${key}`, "#888")
  return {
    cat,
    surface: v("--light", "#faf6ef"),
    link: v("--lightgray", "#e9e1d3"),
    linkStrong: v("--gray", "#726656"),
    ink: v("--darkgray", "#3f3a34"),
    inkStrong: v("--dark", "#211d18"),
    font: v("--interfaceFont", "system-ui, sans-serif"),
  }
}

// --- layout ------------------------------------------------------------------

/**
 * Where each family settles in the global view (unit circle, scaled by the
 * number of notes). Topics sit between the sources they cite and the lessons
 * that teach them; hubs and tags sit in the middle because they join everything.
 */
const ANCHORS: Record<AtlasCategory, [number, number]> = {
  source: [-1, 0.25],
  topic: [0, -0.8],
  learning: [1, 0.25],
  hub: [0, 0.15],
  argument: [0, 1.05],
  tag: [0, 0.15],
}

const REDUCED_MOTION =
  typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches

/** Positions of the global layout survive SPA navigation, so reopening is instant. */
const globalPositions = new Map<string, { x: number; y: number }>()

function radius(deg: number, mode: Mode, cat: AtlasCategory): number {
  if (cat === "tag") return 4 + Math.min(6, Math.sqrt(deg) * 0.5)
  const base = mode === "global" ? 2.5 + Math.sqrt(deg) * 0.8 : 4 + Math.sqrt(deg) * 1.1
  return Math.min(base, mode === "global" ? 13 : 16)
}

function selectNoteIds(model: Model, mode: Mode, cfg: GraphCfg, current: string, hidden: Set<AtlasCategory>) {
  if (mode === "global") {
    return new Set([...model.notes.values()].filter((n) => !hidden.has(n.cat)).map((n) => n.id))
  }
  const keep = new Set<string>()
  if (!model.notes.has(current)) return keep
  keep.add(current)
  let frontier = [current]
  const depth = cfg.depth < 0 ? Infinity : cfg.depth
  for (let level = 0; level < depth && frontier.length > 0; level++) {
    const next: string[] = []
    for (const id of frontier) {
      for (const neighbour of model.adj.get(id) ?? []) {
        if (keep.has(neighbour)) continue
        keep.add(neighbour)
        next.push(neighbour)
      }
    }
    frontier = next
  }
  return keep
}

// --- the view ------------------------------------------------------------------

function mountGraph(
  container: HTMLElement,
  model: Model,
  mode: Mode,
  cfg: GraphCfg,
  hiddenInit: Set<AtlasCategory>,
): Handle {
  const current = simplify(currentSlug())
  const canvas = document.createElement("canvas")
  canvas.className = "atlas-graph-canvas"
  container.replaceChildren(canvas)
  const ctx = canvas.getContext("2d")!
  let palette = readPalette(container)

  let hidden = new Set(hiddenInit)
  let highlight: Highlight = { query: "", tag: "" }
  let nodes: GNode[] = []
  let links: GLink[] = []
  let byId = new Map<string, GNode>()
  let neighbours = new Map<string, Set<string>>()
  let focus: Set<string> | null = null
  let sim: Simulation<GNode, GLink> | null = null

  // view transform: screen = centre + t + world * k
  let width = 1
  let height = 1
  let k = 1
  let tx = 0
  let ty = 0
  let hovered: GNode | null = null
  let frame = 0

  const requestDraw = () => {
    if (!frame) frame = requestAnimationFrame(draw)
  }

  function build() {
    const ids = selectNoteIds(model, mode, cfg, current, hidden)
    const previous = new Map(nodes.map((n) => [n.id, n]))
    const deg = (id: string) => model.adj.get(id)?.size ?? 0
    nodes = [...ids].map((id) => {
      const note = model.notes.get(id)!
      const old = previous.get(id) ?? (mode === "global" ? globalPositions.get(id) : undefined)
      return {
        id,
        title: note.title,
        cat: note.cat,
        deg: deg(id),
        r: radius(deg(id), mode, note.cat),
        x: old?.x,
        y: old?.y,
      }
    })
    byId = new Map(nodes.map((n) => [n.id, n]))
    links = []
    for (const [a, b] of model.edges) {
      const source = byId.get(a)
      const target = byId.get(b)
      if (source && target) links.push({ source, target, tag: false })
    }
    if (cfg.showTags && !hidden.has("tag")) {
      const tags = new Set<string>()
      for (const id of ids) for (const tag of model.notes.get(id)!.tags) tags.add(tag)
      for (const tag of tags) {
        const members = (model.tagMembers.get(tag) ?? []).filter((id) => byId.has(id))
        const id = `tag:${tag}`
        const old = previous.get(id)
        const node: GNode = {
          id,
          title: `#${tagLabel(tag)}`,
          cat: "tag",
          deg: members.length,
          r: radius(members.length, mode, "tag"),
          x: old?.x,
          y: old?.y,
        }
        nodes.push(node)
        byId.set(id, node)
        for (const member of members) links.push({ source: byId.get(member)!, target: node, tag: true })
      }
    }
    neighbours = new Map()
    for (const link of links) {
      for (const [a, b] of [
        [link.source.id, link.target.id],
        [link.target.id, link.source.id],
      ]) {
        let set = neighbours.get(a)
        if (!set) neighbours.set(a, (set = new Set()))
        set.add(b)
      }
    }
    computeFocus()
    simulate(previous.size === 0 && !nodes.some((n) => n.x !== undefined))
  }

  function simulate(fresh: boolean) {
    sim?.stop()
    const count = new Map<string, number>()
    for (const link of links) {
      count.set(link.source.id, (count.get(link.source.id) ?? 0) + 1)
      count.set(link.target.id, (count.get(link.target.id) ?? 0) + 1)
    }
    const spread = mode === "global" ? Math.max(180, Math.sqrt(nodes.length) * 13) : 0
    sim = forceSimulation<GNode, GLink>(nodes)
      .force(
        "charge",
        forceManyBody<GNode>()
          .strength(mode === "global" ? -34 : -110)
          .distanceMax(mode === "global" ? 260 : 420),
      )
      .force(
        "link",
        forceLink<GNode, GLink>(links)
          .distance((l) => (l.tag ? 46 : mode === "global" ? 30 : 52))
          .strength((l) => {
            const base = 1 / Math.min(count.get(l.source.id) ?? 1, count.get(l.target.id) ?? 1)
            if (l.tag) return base * 0.25
            // Cross-family links still pull, just less, so the regions hold.
            return mode === "global" && l.source.cat !== l.target.cat ? base * 0.3 : base
          }),
      )
      .force("collide", forceCollide<GNode>((n) => n.r + (mode === "global" ? 1.5 : 4)))
      .force(
        "x",
        forceX<GNode>((n) => (mode === "global" ? ANCHORS[n.cat][0] * spread : 0)).strength(
          mode === "global" ? 0.07 : 0.06,
        ),
      )
      .force(
        "y",
        forceY<GNode>((n) => (mode === "global" ? ANCHORS[n.cat][1] * spread : 0)).strength(
          mode === "global" ? 0.07 : 0.06,
        ),
      )
      .stop()

    // Settle before the first frame so the view opens readable, not as a burst.
    const warm = REDUCED_MOTION ? 300 : fresh ? (mode === "global" ? 140 : 80) : 20
    for (let i = 0; i < warm; i++) sim.tick()
    if (fresh) fit()
    if (REDUCED_MOTION) {
      requestDraw()
      return
    }
    sim.on("tick", requestDraw)
    sim.alpha(fresh ? 0.25 : 0.15).restart()
  }

  function fit() {
    if (nodes.length === 0) return
    let minX = Infinity
    let minY = Infinity
    let maxX = -Infinity
    let maxY = -Infinity
    for (const n of nodes) {
      minX = Math.min(minX, n.x! - n.r)
      maxX = Math.max(maxX, n.x! + n.r)
      minY = Math.min(minY, n.y! - n.r)
      maxY = Math.max(maxY, n.y! + n.r)
    }
    const pad = mode === "global" ? 48 : 24
    k = Math.max(0.15, Math.min(2.2, Math.min((width - pad) / (maxX - minX || 1), (height - pad) / (maxY - minY || 1))))
    tx = -((minX + maxX) / 2) * k
    ty = -((minY + maxY) / 2) * k
  }

  function computeFocus() {
    const query = highlight.query.trim().toLowerCase()
    if (!query && !highlight.tag) {
      focus = null
      return
    }
    const members = highlight.tag ? new Set(model.tagMembers.get(highlight.tag) ?? []) : null
    focus = new Set(
      nodes
        .filter((n) => (!members || members.has(n.id)) && (!query || n.title.toLowerCase().includes(query)))
        .map((n) => n.id),
    )
  }

  // --- drawing ---

  const toScreen = (n: GNode): [number, number] => [width / 2 + tx + n.x! * k, height / 2 + ty + n.y! * k]

  function nodePath(n: GNode, x: number, y: number, r: number) {
    ctx.beginPath()
    switch (CATEGORY_INFO[n.cat].shape) {
      case "square":
        ctx.roundRect(x - r * 0.9, y - r * 0.9, r * 1.8, r * 1.8, r * 0.3)
        break
      case "diamond":
        ctx.moveTo(x, y - r * 1.2)
        ctx.lineTo(x + r * 1.2, y)
        ctx.lineTo(x, y + r * 1.2)
        ctx.lineTo(x - r * 1.2, y)
        ctx.closePath()
        break
      default:
        ctx.arc(x, y, r, 0, Math.PI * 2)
    }
  }

  function draw() {
    frame = 0
    const dpr = window.devicePixelRatio || 1
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.clearRect(0, 0, width, height)

    const active = hovered ? new Set([hovered.id, ...(neighbours.get(hovered.id) ?? [])]) : focus
    const isActive = (id: string) => !active || active.has(id)

    // Links: quiet by default, emphasised around the hovered node.
    ctx.lineWidth = 1
    ctx.strokeStyle = palette.link
    ctx.globalAlpha = active ? 0.35 : 0.9
    ctx.beginPath()
    for (const l of links) {
      if (hovered && (l.source === hovered || l.target === hovered)) continue
      if (active && !(isActive(l.source.id) && isActive(l.target.id))) continue
      const [x1, y1] = toScreen(l.source)
      const [x2, y2] = toScreen(l.target)
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
    }
    ctx.stroke()
    if (hovered) {
      ctx.globalAlpha = 1
      ctx.strokeStyle = palette.linkStrong
      ctx.lineWidth = 1.5
      ctx.beginPath()
      for (const l of links) {
        if (l.source !== hovered && l.target !== hovered) continue
        const [x1, y1] = toScreen(l.source)
        const [x2, y2] = toScreen(l.target)
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
      }
      ctx.stroke()
    }

    // Nodes: category fill with a 2px surface ring so overlaps stay legible.
    const scale = Math.max(0.6, Math.min(1.6, Math.sqrt(k)))
    for (const n of nodes) {
      const [x, y] = toScreen(n)
      if (x < -20 || y < -20 || x > width + 20 || y > height + 20) continue
      const r = n.r * scale
      ctx.globalAlpha = isActive(n.id) ? 1 : 0.14
      nodePath(n, x, y, r)
      if (n.cat === "tag") {
        ctx.fillStyle = palette.surface
        ctx.fill()
        ctx.lineWidth = 2
        ctx.strokeStyle = palette.cat.tag
        ctx.stroke()
      } else {
        ctx.fillStyle = palette.cat[n.cat]
        ctx.fill()
        ctx.lineWidth = 2
        ctx.strokeStyle = palette.surface
        ctx.stroke()
      }
      if (n.id === current) {
        nodePath(n, x, y, r + 3.5)
        ctx.lineWidth = 2
        ctx.strokeStyle = palette.inkStrong
        ctx.stroke()
      }
    }
    ctx.globalAlpha = 1
    drawLabels(active)
  }

  /** Greedy placement: most important labels first, skip any that would overlap. */
  function drawLabels(active: Set<string> | null) {
    const size = mode === "global" ? 12 : 11
    const placed: [number, number, number, number][] = []
    const priority = (n: GNode) =>
      n.id === current ? 1e6 : n === hovered ? 1e5 : active?.has(n.id) ? 1e4 + n.deg : n.deg
    const everything = k >= (mode === "global" ? 1.7 : 1.2) || (mode === "local" && nodes.length <= 14)
    const candidates = nodes
      .filter((n) => everything || n.id === current || n === hovered || active?.has(n.id) || n.deg >= 12)
      .sort((a, b) => priority(b) - priority(a))
      .slice(0, width < 420 ? 8 : mode === "global" ? 70 : 40)

    ctx.textAlign = "center"
    ctx.textBaseline = "top"
    ctx.lineJoin = "round"
    for (const n of candidates) {
      const strong = n.id === current || n === hovered
      ctx.font = `${strong ? 600 : 400} ${size}px ${palette.font}`
      const text = n.title.length > 38 ? `${n.title.slice(0, 36)}…` : n.title
      const [nx, y] = toScreen(n)
      const top = y + n.r * Math.max(0.6, Math.min(1.6, Math.sqrt(k))) + 3
      const w = ctx.measureText(text).width
      // Keep the label inside the frame rather than letting the edge cut it.
      const x = Math.min(Math.max(nx, w / 2 + 4), width - w / 2 - 4)
      const box: [number, number, number, number] = [x - w / 2 - 2, top - 1, x + w / 2 + 2, top + size + 2]
      const overlaps = placed.some((p) => box[0] < p[2] && box[2] > p[0] && box[1] < p[3] && box[3] > p[1])
      if (overlaps && !strong) continue
      placed.push(box)
      ctx.globalAlpha = !active || active.has(n.id) ? 1 : 0.35
      ctx.lineWidth = 3
      ctx.strokeStyle = palette.surface
      ctx.strokeText(text, x, top)
      ctx.fillStyle = strong ? palette.inkStrong : palette.ink
      ctx.fillText(text, x, top)
    }
    ctx.globalAlpha = 1
  }

  // --- interaction ---

  function nodeAt(px: number, py: number): GNode | null {
    let best: GNode | null = null
    let bestDist = Infinity
    for (const n of nodes) {
      const [x, y] = toScreen(n)
      const d = Math.hypot(px - x, py - y)
      const hit = Math.max(12, n.r * Math.sqrt(k) + 6)
      if (d < hit && d < bestDist) {
        best = n
        bestDist = d
      }
    }
    return best
  }

  const pointers = new Map<number, { x: number; y: number }>()
  let drag: { node: GNode | null; startX: number; startY: number; moved: boolean; tx: number; ty: number } | null = null
  let pinch: { dist: number; k: number } | null = null

  const local = (e: PointerEvent | WheelEvent) => {
    const rect = canvas.getBoundingClientRect()
    return [e.clientX - rect.left, e.clientY - rect.top] as const
  }

  function zoomAt(px: number, py: number, nextK: number) {
    const clamped = Math.max(0.15, Math.min(6, nextK))
    // keep the world point under the pointer fixed
    const wx = (px - width / 2 - tx) / k
    const wy = (py - height / 2 - ty) / k
    k = clamped
    tx = px - width / 2 - wx * k
    ty = py - height / 2 - wy * k
    requestDraw()
  }

  const onPointerDown = (e: PointerEvent) => {
    const [x, y] = local(e)
    pointers.set(e.pointerId, { x, y })
    canvas.setPointerCapture(e.pointerId)
    if (pointers.size === 2) {
      const [a, b] = [...pointers.values()]
      pinch = { dist: Math.hypot(a.x - b.x, a.y - b.y), k }
      drag = null
      return
    }
    const node = nodeAt(x, y)
    drag = { node, startX: x, startY: y, moved: false, tx, ty }
    if (node) {
      node.fx = node.x
      node.fy = node.y
      sim?.alphaTarget(0.2).restart()
    }
  }

  const onPointerMove = (e: PointerEvent) => {
    const [x, y] = local(e)
    if (pointers.has(e.pointerId)) pointers.set(e.pointerId, { x, y })
    if (pinch && pointers.size === 2) {
      const [a, b] = [...pointers.values()]
      zoomAt((a.x + b.x) / 2, (a.y + b.y) / 2, pinch.k * (Math.hypot(a.x - b.x, a.y - b.y) / pinch.dist))
      return
    }
    if (drag) {
      if (Math.hypot(x - drag.startX, y - drag.startY) > 4) drag.moved = true
      if (drag.node) {
        drag.node.fx = (x - width / 2 - tx) / k
        drag.node.fy = (y - height / 2 - ty) / k
      } else if (drag.moved) {
        tx = drag.tx + (x - drag.startX)
        ty = drag.ty + (y - drag.startY)
      }
      requestDraw()
      return
    }
    const next = nodeAt(x, y)
    if (next !== hovered) {
      hovered = next
      canvas.style.cursor = next ? "pointer" : "grab"
      canvas.title = next ? `${next.title} · ${CATEGORY_INFO[next.cat].label}` : ""
      requestDraw()
    }
  }

  const onPointerUp = (e: PointerEvent) => {
    pointers.delete(e.pointerId)
    if (pointers.size < 2) pinch = null
    if (!drag) return
    const { node, moved } = drag
    drag = null
    if (node) {
      node.fx = null
      node.fy = null
      sim?.alphaTarget(0)
      if (!moved) {
        container.dispatchEvent(new CustomEvent("atlas-graph-navigate", { bubbles: true }))
        navigate(currentSlug(), node.id)
      }
    }
  }

  const onLeave = () => {
    if (hovered) {
      hovered = null
      requestDraw()
    }
  }

  const onWheel = (e: WheelEvent) => {
    e.preventDefault()
    const [x, y] = local(e)
    zoomAt(x, y, k * Math.exp(-e.deltaY * 0.0018))
  }

  canvas.addEventListener("pointerdown", onPointerDown)
  canvas.addEventListener("pointermove", onPointerMove)
  canvas.addEventListener("pointerup", onPointerUp)
  canvas.addEventListener("pointercancel", onPointerUp)
  canvas.addEventListener("pointerleave", onLeave)
  canvas.addEventListener("wheel", onWheel, { passive: false })

  function resize() {
    const rect = container.getBoundingClientRect()
    width = Math.max(1, rect.width)
    height = Math.max(1, rect.height)
    const dpr = window.devicePixelRatio || 1
    canvas.width = Math.round(width * dpr)
    canvas.height = Math.round(height * dpr)
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    requestDraw()
  }
  const observer = new ResizeObserver(resize)
  observer.observe(container)
  resize()
  build()

  const label = () => {
    const noteCount = nodes.filter((n) => n.cat !== "tag").length
    return mode === "local"
      ? `Graph of ${noteCount - 1} notes linked to this page`
      : `Graph of ${noteCount} notes and ${links.filter((l) => !l.tag).length} links`
  }
  container.setAttribute("role", "img")
  container.setAttribute("aria-label", label())

  return {
    destroy() {
      sim?.stop()
      if (frame) cancelAnimationFrame(frame)
      observer.disconnect()
      if (mode === "global") for (const n of nodes) if (n.cat !== "tag") globalPositions.set(n.id, { x: n.x!, y: n.y! })
    },
    redraw() {
      palette = readPalette(container)
      requestDraw()
    },
    setHidden(next) {
      hidden = new Set(next)
      build()
      container.setAttribute("aria-label", label())
    },
    setHighlight(next) {
      highlight = next
      computeFocus()
      requestDraw()
    },
    focusFirstMatch() {
      if (!focus || focus.size === 0) return
      const best = [...focus].map((id) => byId.get(id)!).sort((a, b) => b.deg - a.deg)[0]
      k = Math.max(k, 1.4)
      tx = -best.x! * k
      ty = -best.y! * k
      hovered = best
      requestDraw()
    },
    counts() {
      return {
        notes: nodes.filter((n) => n.cat !== "tag").length,
        links: links.filter((l) => !l.tag).length,
        matched: focus ? [...focus].filter((id) => !id.startsWith("tag:")).length : 0,
      }
    },
  }
}

// --- panels ------------------------------------------------------------------

const STORAGE_KEY = "atlas-graph-global"

const MARKED_SURFACES = ".explorer, .backlinks, .page-listing, .recent-notes, .search-layout"

function loadGlobalPrefs(): Set<AtlasCategory> {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "null") as AtlasCategory[] | null
    if (Array.isArray(saved)) return new Set(saved.filter((c) => CATEGORY_ORDER.includes(c)))
  } catch {
    // storage unavailable: fall back to defaults
  }
  return new Set<AtlasCategory>(["tag"])
}

function saveGlobalPrefs(hidden: Set<AtlasCategory>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...hidden]))
  } catch {
    // storage unavailable: preferences just are not remembered
  }
}

function fillSelect(select: HTMLSelectElement, model: Model, prefix: string) {
  if (select.options.length > 1) return
  const tags = [...model.tagMembers.entries()]
    .filter(([tag]) => tag.startsWith(prefix))
    .sort((a, b) => tagLabel(a[0]).localeCompare(tagLabel(b[0])))
  for (const [tag, members] of tags) {
    const option = document.createElement("option")
    option.value = tag
    option.textContent = `${tagLabel(tag)} (${members.length})`
    select.append(option)
  }
}

/** Wires one global panel (the modal or an inline one) to a graph instance. */
async function mountPanel(panel: HTMLElement): Promise<Handle | null> {
  const stage = panel.querySelector<HTMLElement>(".atlas-global-stage")
  if (!stage) return null
  const model = await getModel()
  if (!panel.isConnected) return null
  const cfg = JSON.parse(panel.dataset.cfg ?? "{}") as Partial<GraphCfg>
  const hidden = loadGlobalPrefs()
  const handle = mountGraph(stage, model, "global", { depth: -1, showTags: cfg.showTags ?? true }, hidden)

  const search = panel.querySelector<HTMLInputElement>(".atlas-global-search")
  const condition = panel.querySelector<HTMLSelectElement>(".atlas-global-condition")
  const domain = panel.querySelector<HTMLSelectElement>(".atlas-global-domain")
  const status = panel.querySelector<HTMLElement>(".atlas-global-status")
  if (condition) fillSelect(condition, model, "research/condition/")
  if (domain) fillSelect(domain, model, "research/domain/")

  const totals = new Map<AtlasCategory, number>()
  for (const note of model.notes.values()) totals.set(note.cat, (totals.get(note.cat) ?? 0) + 1)
  totals.set("tag", model.tagMembers.size)

  const updateStatus = () => {
    if (!status) return
    const { notes, links, matched } = handle.counts()
    const parts = [`${notes.toLocaleString()} notes`, `${links.toLocaleString()} links`]
    if (search?.value || condition?.value || domain?.value) parts.push(`${matched.toLocaleString()} highlighted`)
    status.textContent = parts.join(" · ")
  }

  for (const button of panel.querySelectorAll<HTMLButtonElement>(".atlas-legend-toggle")) {
    const cat = button.dataset.cat as AtlasCategory
    button.setAttribute("aria-pressed", String(!hidden.has(cat)))
    const count = button.querySelector(".atlas-legend-count")
    if (count) count.textContent = (totals.get(cat) ?? 0).toLocaleString()
    button.onclick = () => {
      if (hidden.has(cat)) hidden.delete(cat)
      else hidden.add(cat)
      button.setAttribute("aria-pressed", String(!hidden.has(cat)))
      saveGlobalPrefs(hidden)
      handle.setHidden(hidden)
      updateStatus()
    }
  }

  const applyHighlight = () => {
    // One tag at a time: choosing a condition clears the domain and vice versa.
    handle.setHighlight({ query: search?.value ?? "", tag: condition?.value || domain?.value || "" })
    updateStatus()
  }
  if (search) {
    search.oninput = applyHighlight
    search.onkeydown = (e) => {
      if (e.key === "Enter") handle.focusFirstMatch()
    }
  }
  if (condition)
    condition.onchange = () => {
      if (domain && condition.value) domain.value = ""
      applyHighlight()
    }
  if (domain)
    domain.onchange = () => {
      if (condition && domain.value) condition.value = ""
      applyHighlight()
    }
  applyHighlight()
  return handle
}

// --- page wiring ---------------------------------------------------------------

document.addEventListener("nav", async () => {
  const handles = new Set<Handle>()
  const cleanups: (() => void)[] = []

  // Local graphs in the sidebar.
  const locals = [...document.querySelectorAll<HTMLElement>(".atlas-graph-local")]
  if (locals.length > 0) {
    const model = await getModel()
    // A page with no links of its own (the generated home page, listings) gets
    // an overview of the whole atlas instead of an empty frame.
    const inIndex = model.notes.has(simplify(currentSlug()))
    for (const el of locals) {
      if (!el.isConnected) continue
      const cfg = JSON.parse(el.dataset.cfg ?? "{}") as Partial<GraphCfg>
      handles.add(
        inIndex
          ? mountGraph(el, model, "local", { depth: cfg.depth ?? 1, showTags: cfg.showTags ?? false }, new Set())
          : mountGraph(el, model, "global", { depth: -1, showTags: false }, new Set<AtlasCategory>(["tag"])),
      )
    }
  }

  // Inline global panels (the Visualizations hub) mount when scrolled into view.
  const inline = [...document.querySelectorAll<HTMLElement>(".atlas-global-panel[data-inline]")]
  if (inline.length > 0) {
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        io.unobserve(entry.target)
        void mountPanel(entry.target as HTMLElement).then((h) => h && handles.add(h))
      }
    })
    inline.forEach((panel) => io.observe(panel))
    cleanups.push(() => io.disconnect())
  }

  // The modal global graph, opened from the sidebar button or Ctrl/Cmd+G.
  const overlay = document.querySelector<HTMLElement>(".atlas-global-overlay")
  let modal: Handle | null = null
  let opener: HTMLElement | null = null
  // The overlay is rendered inside the sidebar, whose stacking context would
  // keep it under the other sidebar; it moves to <body> while open.
  const home = overlay?.parentElement ?? null
  const close = () => {
    if (!overlay || overlay.hidden) return
    overlay.hidden = true
    if (home && overlay.parentElement !== home) home.append(overlay)
    document.documentElement.classList.remove("atlas-graph-open")
    modal?.destroy()
    if (modal) handles.delete(modal)
    modal = null
    opener?.focus()
  }
  const open = async () => {
    if (!overlay || !overlay.hidden) return
    opener = document.activeElement as HTMLElement | null
    document.body.append(overlay)
    overlay.hidden = false
    document.documentElement.classList.add("atlas-graph-open")
    const panel = overlay.querySelector<HTMLElement>(".atlas-global-panel")
    if (!panel) return
    modal = await mountPanel(panel)
    if (modal) handles.add(modal)
    panel.querySelector<HTMLInputElement>(".atlas-global-search")?.focus()
  }

  const onKey = (e: KeyboardEvent) => {
    if (e.key === "g" && (e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey) {
      e.preventDefault()
      if (overlay?.hidden) void open()
      else close()
    } else if (e.key === "Escape") {
      close()
    }
  }
  document.addEventListener("keydown", onKey)
  cleanups.push(() => document.removeEventListener("keydown", onKey))

  for (const button of document.querySelectorAll<HTMLButtonElement>(".atlas-graph-expand")) {
    button.onclick = () => void open()
  }
  if (overlay) {
    const onBackdrop = (e: MouseEvent) => {
      if (e.target === overlay) close()
    }
    overlay.addEventListener("click", onBackdrop)
    overlay.addEventListener("atlas-graph-navigate", close)
    overlay.querySelector<HTMLButtonElement>(".atlas-global-close")?.addEventListener("click", close)
    cleanups.push(() => {
      overlay.removeEventListener("click", onBackdrop)
      overlay.removeEventListener("atlas-graph-navigate", close)
    })
  }

  // Navigation marks: the graph's family key beside links in the explorer,
  // backlinks, folder and tag listings, recent notes and search results. Those
  // links carry only an href, so the family comes from the same content index.
  const surfaces = document.querySelectorAll<HTMLElement>(MARKED_SURFACES)
  if (surfaces.length > 0) {
    const model = await getModel()
    const base = document.body.dataset.basepath ?? ""
    const mark = (root: ParentNode) => {
      for (const a of root.querySelectorAll<HTMLAnchorElement>("a[href]")) {
        if (a.dataset.cat) continue
        const url = new URL(a.href, window.location.href)
        if (url.origin !== window.location.origin) continue
        let path = decodeURIComponent(url.pathname)
        if (base && path.startsWith(base)) path = path.slice(base.length)
        const note = model.notes.get(path.replace(/^\/+/, "").replace(/\.html$/, ""))
        if (note) a.dataset.cat = note.cat
      }
    }
    for (const surface of surfaces) {
      mark(surface)
      // The explorer and search results render after this script runs.
      const observer = new MutationObserver(() => mark(surface))
      observer.observe(surface, { childList: true, subtree: true })
      cleanups.push(() => observer.disconnect())
    }
  }

  const onTheme = () => handles.forEach((h) => h.redraw())
  document.addEventListener("themechange", onTheme)
  cleanups.push(() => document.removeEventListener("themechange", onTheme))

  window.addCleanup(() => {
    close()
    handles.forEach((h) => h.destroy())
    cleanups.forEach((fn) => fn())
  })
})

// Types the component's import as a string; the build inlines this file and
// strips this line (quartz/cli/handlers.js, inline-script-loader).
export default ""
