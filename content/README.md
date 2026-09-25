# Obsidian Research Vault

This repository contains a private, source-backed Obsidian research vault. It is educational research material, not medical advice, diagnosis, dosing guidance, or an individual treatment plan.

## Start here

- [[Research/Home]] - orientation and coverage overview
- [[Research Atlas]] - entry to the fifteen-domain reference encyclopedia
- [[Learning Path]] - recommended reading sequence
- [[Library]] - source library documentation
- [[Visualizations]] - Dataview dashboards
- [[Research/Maps/Research Synthesis Map.canvas|Research Synthesis Map]] - full Canvas landscape
- [[Workflow]] - source-to-claim-to-topic workflow
- [[Research/AGENTS]] - vault-specific instructions for agents

## Repository layout

- `Research/Home.md` - the entry point
- `Research/Hubs/` - Research Atlas, Reference Index, Library (with `Library.base`, the native source library), Visualizations and Workflow
- `Research/Sources/` - one note per paper, official page, or educational source
- `Research/Topics/` - atomic topic notes with source-linked claims
- `Research/Maps/` - the fifteen domain maps and the landscape canvases
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
5. Open [[Research/Home]].

Plugin binaries and machine-local plugin data are intentionally not committed. The tracked configuration records the intended vault setup without bundling third-party code.

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
- Obsidian appearance, snippets, theme, and stable vault settings
- Agent setup: `CLAUDE.md`, `.claude/settings.json`, `.claude/hooks/`, `.mcp.json`

Excluded content includes:

- Active workspace layout
- Community plugin binaries
- Machine-local plugin state
- Claudian/Collab runtime state
- OS and editor noise
