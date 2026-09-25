# Obsidian Research Vault

This repository contains a private, source-backed Obsidian research vault. It is educational research material, not medical advice, diagnosis, dosing guidance, or an individual treatment plan.

## Start here

- [[Research/Home]] - orientation and coverage overview
- [[Research Atlas]] - entry to the fifteen-domain reference encyclopedia
- [[Learning Path]] - recommended reading sequence
- [[Library]] - source library documentation
- [[Visualizations]] - visual index: graph views, charts and dashboards
- [[Research Synthesis Map.canvas|Research Synthesis Map]] - full Canvas landscape
- [[Workflow]] - source-to-claim-to-topic workflow
- [[Research/AGENTS]] - vault-specific instructions for agents

## Repository layout

- `Research/Home.md` - the entry point
- `Research/Hubs/` - Research Atlas, Reference Index, Library (with `Library.base`, the native source library) and Workflow
- `Research/Domains/` - fifteen domains; each holds its map and canvas, one folder per subdomain (index note plus topic notes with source-linked claims), and `Articles/` and `Pages/` for its source records
- `Research/Visualizations/` - visual index, dashboards, Bases and the landscape canvases
- `Research/Learning/` - modules, lessons, study aids and one learning-map canvas per module
- `Research/Arguments/` - open research questions, competing explanations and their argument maps
- `Research/Templates/` - source, topic, argument, and study-session templates plus canvas templates
- `Research/Support/` - downloaded attachments and provenance records
- `.obsidian/` - vault configuration, appearance, snippets, and theme
- `CLAUDE.md`, `.claude/`, `.mcp.json` - agent setup: vault rules, the lint hook, and the Obsidian and search MCP servers (see `Research/AGENTS.md`)
- `.gitignore` - excludes volatile workspace state and local plugin binaries

## Opening this as an Obsidian vault

1. Clone the repository.
2. Open the repository folder in Obsidian as a vault.
3. Allow Obsidian to index the Markdown, Canvas, and Base files.
4. Install the community plugins referenced by `.obsidian/community-plugins.json` if Obsidian does not restore them automatically:
   - Dataview
   - Advanced Canvas
   - Canvas Mindmap
   - Canvas Positioning Toolkit
   - Excalidraw
   - Templater
   - PDF Plus
   - Editing Toolbar
   - Callout Manager
   - Obsidian Git
   - Claudian
   - Share Note (shares are encrypted by default)

   Navigation and visualization:
   - Custom File Explorer sorting (explorer order, from `Research/Support/Explorer order.md`)
   - Iconize (folder and hub icons)
   - Extended Graph (node shapes by note type)
   - Sync Graph Settings (local graphs use the global colours)
   - Breadcrumbs (hierarchy trail from `up`)
   - ExcaliBrain (visual navigator)
   - Charts (dashboard charts)
   - Mindmap NextGen
   - Strange New Worlds (reference counts)
   - Omnisearch
   - Homepage (opens `Research/Home`)
   - Hover Editor
   - Style Settings
   - Tag Wrangler
5. Open [[Research/Home]].

Plugin binaries and machine-local plugin data are intentionally not committed; the exception is the settings of the navigation and display plugins above, which hold no tokens. The tracked configuration records the intended vault setup without bundling third-party code.

## Research rules

The vault uses a strict separation between source reporting and interpretation:

- Source notes record what was actually checked, not merely what was downloaded.
- Topic claims link to source blocks.
- Analyst cautions are labeled separately from reported findings.
- Reading status is not upgraded until a source is actually read.
- Article text and abstracts are not pasted into the repository.
- Identifiers such as DOI, PMID, and PMCID are preserved exactly.

## Git scope

Tracked content includes:

- Markdown notes
- Canvas JSON
- Base YAML
- PDF attachments stored under `Research/Support/`
- Obsidian appearance, snippets, theme, and stable vault settings, including graph presets (`bookmarks.json`) and the display-plugin settings
- Agent setup: `CLAUDE.md`, `.claude/settings.json`, `.claude/hooks/`, `.mcp.json`

Excluded content includes:

- Active workspace layout
- Community plugin binaries
- Machine-local plugin state
- Claudian/Collab runtime state
- OS and editor noise
