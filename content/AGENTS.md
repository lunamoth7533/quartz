# Research vault - maintainer notes

`Research/` is a source-backed learning library on bipolar I, ADHD, autism and complex PTSD and the neurobiology, neurochemistry, psychology, pharmacology, neurology and methods underneath them. It is educational material, not a diagnosis or an individual treatment plan.

These notes are for maintaining the vault. They, `CLAUDE.md` and `README.md` are hidden from Obsidian's file explorer (CSS snippet `research-library`) and excluded from search and the graph (*Excluded files* in `.obsidian/app.json`). This is not an Obsidian Mind vault: global instructions about `work/`, `brain/`, `perf/`, `org/` and the `om-*` commands and hooks do not apply.

## Layout

- `Research/Home.md` - the one front door (the Homepage plugin opens it): five ways in, the fifteen domain maps in five families, recent research, open questions.
- `Research/Hubs/` - `How to use this vault` (the user guide), `Reference Index` (with `Reference Index.base` and the two relationship registers) and `Library` (with `Library.base`).
- `Research/Domains/<Domain>/` - `<Domain> Map` (the map of content), `<Domain> Canvas` (a dated snapshot), one folder per theme holding the concept notes, `Articles/` (papers) and `Pages/` (official and educational pages). A concept is filed under the one map that registers it; a source is filed once, under its own `domain`.
- `Research/Learning/` - `Learning Path` (the learning entry), `Study Workflow`, `Glossary`, `Practice and Synthesis Exercises`, `Learning Coverage Matrix`, `Learning Dashboard`, `Learning Library.base`, `Modules/`, `Lessons/` and `Maps/` (one canvas per module).
- `Research/Arguments/` - open questions beside their argument-map canvases.
- `Research/Visualizations/` - `Visualizations.md`, `Knowledge Explorer.base`, `Domain Contents.base` (embedded by every map) and the landscape canvases.
- `Research/Templates/` - note and canvas templates. `Research/Support/` - attachments with provenance, `Explorer order.md`, the Web Clipper template.

**Hierarchy:** a concept's `up` names its domain map; a map's `up` names `[[Home]]`. Breadcrumbs, ExcaliBrain and the graph read `up`. Theme folders organise the file explorer only; there are no index notes for them, because each map's *Concept register* already groups its concepts by theme.

## Note formats

- **Concept notes** (`note_type: topic`) are atomic: Definition · How it works (bold lead-ins, ending with a **Reading rule**) · Evidence and status · Uncertainties · Recent research · Connections. Every factual sentence links a source block as `[[Source note#^anchor|Short title]]`. Every entry under Connections says *why* the linked concept matters (part of, mechanism behind, measured by, contrasts with, tested in), and the section ends with the `**Cross-domain connection (curation).**` paragraph. Older notes keep Supported claims / Limitation or common misconception / Study question / Detailed lesson, and carry the curation paragraph at the end of How it works.
- **Source notes** (`note_type: source`): Reported findings (checked abstract, or checked full text) · Scope as reported · Library appraisal · Used by · Working notes. Anchors are `^p<pmid>-<slug>` for papers and `^f<nn>-<slug>` for pages. *Library appraisal* is the library's own methodological reasoning, never a source claim, and a concept link into one of its anchors is labelled `|Appraisal: <short title>]]`.
- **Recent research:** a paper published in 2023 or later carries the tag `research/recent` and is cited from the `## Recent research` section of the concept it updates, placed immediately before `## Connections`.
- **Domain maps** (`note_type: map`): Concept register · Overview · Key evidence · Where this domain connects · Evidence boundaries · Learning route (with evidence gaps, study question and learning layer where present) · In this folder (Base embeds).

## Rules

- Never mark a source `read` or `full_text_checked` unless it was actually read. Downloaded is not read.
- Do not paste abstracts, article text or transcripts. Write short original summaries (at most 100 words of findings per source), quote nothing longer than 15 words, and link out.
- Keep reported findings separate from appraisal (`## Library appraisal`).
- Keep identifiers exactly as published (DOI case, PMID, journal year versus first online date); take them from the publisher or PubMed, never from memory.
- No page links (`file.pdf#page=6`) without verifying the page; no dose, titration or individualized clinical advice.
- Vault notes do not mention AI, agents, assistants or generated text (owner's request, 2026-09-27). Call the library's own reasoning "library appraisal".
- Queries select notes by `note_type`, tag or property, never by folder, so a note can move without breaking a view.
- `source_count` equals the number of distinct source notes a concept links; the vault check flags drift.
- Preserve existing user notes, plugins and settings.

## Tooling

- `python3 .claude/hooks/vault_lint.py` audits the whole vault (links, heading and block anchors, canvases, Bases, frontmatter, `source_count`) and should print `0 errors · 0 warnings`. Claude Code runs it after every Write or Edit (`.claude/settings.json`); Codex runs the copy in `.codex/hooks/` (`.codex/hooks.json`). `python3 .claude/hooks/test_vault_lint.py` proves it still catches seeded defects.
- `.mcp.json` registers `obsidian-local` (typed note operations through the Obsidian CLI) and `qmd` (semantic search over the `obsidian-vault` index, refreshed at session start; by hand `qmd --index obsidian-vault update` then `qmd --index obsidian-vault embed`).
- Move or rename files through Obsidian (the app, or `obsidian vault="Obsidian Vault" move path=... to=...`) so wikilinks and canvas paths update. `obsidian vault="Obsidian Vault" unresolved` and `orphans` are quick health checks.
- **Graph.** The default global graph (`.obsidian/graph.json`) is the concept map: `-path:"Research/Templates/" (path:"Research/Home.md" OR [note_type:map] OR [note_type:topic])`. Twelve views are bookmarks (`.obsidian/bookmarks.json`, group *Graph views*). Colour groups are ordered so note types win before families: Home and maps white, `#research/recent` gold, articles dark grey, pages light grey, lessons and modules teal, arguments magenta, then by folder: conditions red, clinical orange, mind and computation green, methods yellow, biology and chemistry blue, other hubs pale grey. Extended Graph shapes nodes by `note_type` and keeps its own copy of the default options (`plugins/extended-graph/data.json`: `states[0].engineOptions` and `backupGraphOptions`, with `syncDefaultState` on); change it together with `graph.json` or the colour groups are wiped.
- The CSS snippet `research-library` colours note titles by type, hides the properties table inside canvas cards, quiets graph links, fits dashboard diagrams, and hides these maintenance files from the file explorer.
- File-explorer order is `Research/Support/Explorer order.md` (Custom File Explorer sorting); icons come from Iconize. The display plugins' settings are tracked in git; token-bearing plugin data is not.
- **Adding a concept:** file it in its domain's theme folder, set `up` to the domain map, add it to the map's Concept register, and link it with a reason from two or three related concepts. The domain canvas is a dated snapshot; add a card for the new concept if you want it there.
- **Adding a source:** start from the template, file it in `Articles/` or `Pages/` of its domain, anchor each finding, tag `research/recent` if published 2023 or later, cite it from the concept, update `source_count`.

### Canvas conventions

- Text cards use real newlines (`\n` in the JSON), never `<br>`.
- Size text cards to their content, keep at least 50px between cards, and leave room between columns for edge labels (about 12 canvas units per character).
- Edges leave the side that faces their target; same-side arcs are for deliberate brackets.
- A label repeated on every edge of one colour belongs in the legend instead.

## Build workspaces (archived)

Three staging workspaces generated the original vault. The live vault is the source of truth; the workspaces stay on disk as archives, and each apply script refuses to write (`ALLOW_STALE_APPLY=1` overrides; do not use it: the workspaces predate both reorganisations below, and a replay would recreate moved and deleted notes at their old paths).

| Workspace | Built | Retired apply step |
| --- | --- | --- |
| `/Volumes/NVME-Home/Documents/Codex/2026-09-24/cr/work/obsidian-vault-build/` | the original library | `tools/install_research.py --apply` |
| `/Volumes/NVME-Home/Documents/Codex/2026-09-24/new-chat-3/work/obsidian-expansion/` | the learning layer | `tools/apply_live.py --apply` |
| `/Volumes/NVME-Home/Documents/Codex/2026-09-24/new-chat-3/work/domain-encyclopedia/` | the reference encyclopedia | `tools/apply_staged.py --apply` |

`domain-encyclopedia/BUILD-REPORT.md` records what that build covered and which sources are abstract-only; `DESIGN-AND-PLAN.md` holds its domain coverage contract. From that workspace, `python3 tools/source_pack.py fetch --only P29566425` refreshes one source receipt and `python3 tools/source_inventory.py` rebuilds the receipt inventory.

## History

- **2026-09-25 reorganisation.** Hubs, learning files and canvases moved into `Hubs/`, `Learning/`, `Arguments/`, `Templates/` and `Visualizations/`; `Topics/`, `Sources/` and `Maps/` replaced by `Domains/`; every canvas re-laid out; repeated depth sections in topics merged so each point is stated once; one argument note restored from its build payload. Git history holds every pre-image.
- **2026-09-27 restructure.** Hierarchy flattened to Home → domain map → concept: the 48 theme index notes and `Research Atlas` were removed (Home took over the atlas; each map's register already grouped its concepts), `up` retargeted, and each map reordered so its Concept register comes first. `Learning Hub` merged into `Learning Path`; `Workflow` replaced by `How to use this vault`; `Learning Maintenance` folded into these notes. All AI and agent wording removed from the notes: `## Analyst cautions (AI synthesis)` became `## Library appraisal` and link labels `AI appraisal:`/`AI synthesis:` became `Appraisal:`. Bare *Related notes* lists became explained *Connections*; recent papers (2023 onward, tag `research/recent`) were added to concepts' *Recent research* sections; new cross-condition concepts were written; the graph was reset to the concept map with twelve bookmarked views; templates updated to the current formats.
