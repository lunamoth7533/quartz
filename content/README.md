# Obsidian Research Vault

A private, source-backed Obsidian library for learning how bipolar I and II, ADHD, autism and complex PTSD relate to the neuroscience, psychology, pharmacology and research methods underneath them. It is educational material, not medical advice, diagnosis, dosing guidance or an individual treatment plan.

## Start here

Open the folder as an Obsidian vault; the Homepage plugin opens `Research/Home.md`. From there:

- `Research/Hubs/How to use this vault.md` - how the library is organised, how to study with it, and how to read the graph
- `Research/Learning/Learning Path.md` - the guided route: seven stages, ten modules, one lesson per core concept
- `Research/Domains/` - fifteen domain maps, each with its concept notes and sources
- `Research/Hubs/Library.md` - every source, including recent research (2023 onward)

## Layout

- `Research/Home.md` - the front door: five ways in, the fifteen domain maps in five families, recent research, open questions
- `Research/Hubs/` - the user guide, the Reference Index (A-Z and relationship registers) and the Library
- `Research/Domains/<Domain>/` - the domain map, a canvas snapshot, one folder per theme with the concept notes, and `Articles/` and `Pages/` for the sources filed under that domain
- `Research/Learning/` - the Learning Path, modules, lessons, study aids and one learning-map canvas per module
- `Research/Arguments/` - open questions beside their argument maps
- `Research/Visualizations/` - dashboards, Bases and landscape canvases
- `Research/Templates/` - note and canvas templates
- `Research/Support/` - attachments with provenance, the explorer order and the Web Clipper template
- `.obsidian/` - vault configuration, appearance, snippets, theme, graph views and display-plugin settings

## Opening this as an Obsidian vault

1. Clone the repository and open the folder in Obsidian as a vault.
2. Allow Obsidian to index the Markdown, Canvas and Base files.
3. Install the community plugins listed in `.obsidian/community-plugins.json` if Obsidian does not restore them:
   - Content and editing: Dataview, Templater, PDF Plus, Excalidraw, Advanced Canvas, Canvas Mindmap, Canvas Positioning Toolkit, Editing Toolbar, Callout Manager, Obsidian Git, Share Note
   - Navigation and display: Custom File Explorer sorting, Iconize, Extended Graph, Sync Graph Settings, Breadcrumbs, ExcaliBrain, Charts, Mindmap NextGen, Strange New Worlds, Omnisearch, Homepage, Hover Editor, Style Settings, Tag Wrangler
4. Enable the CSS snippet `research-library` (Settings → Appearance).

Plugin binaries and machine-local plugin data are not committed; the settings of the navigation and display plugins are, because they hold no tokens.

## Research rules

- Source notes record what was actually checked, not merely what was downloaded; reading status stays `queued` until a source is read.
- Every claim in a concept note links to the source block that supports it.
- What a source reports is kept separate from the library's own appraisal.
- Abstracts and article text are never pasted; summaries are short and in the library's own words.
- DOI, PMID and PMCID are preserved exactly as published.

## Git scope

Tracked: Markdown notes, Canvas JSON, Base YAML, PDF attachments under `Research/Support/`, and stable vault settings (appearance, snippets, theme, graph views in `bookmarks.json`, display-plugin settings). Not tracked: the active workspace layout, community plugin binaries, machine-local plugin state, and OS and editor noise.
