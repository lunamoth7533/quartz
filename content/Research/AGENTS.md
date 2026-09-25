# Research vault instructions

This folder is a source-backed research library inside an Obsidian vault. It covers bipolar I, ADHD, autism, complex PTSD and the underlying neurobiology, neurochemistry, psychology, pharmacology and neurology. It is educational material, not an individual treatment plan or diagnosis.

## Where things live

- `Home.md` - the entry point. `Hubs/` holds the other entry and index notes: `Research Atlas`, `Reference Index` (with `Reference Index.base` and the two relationship registers), `Library` (with `Library.base`, the native article library) and `Workflow`.
- `Domains/` - the fifteen domains in [[Research Atlas]] order. Each domain folder holds its map (`<Domain> Map`), a snapshot canvas (`<Domain> Canvas`), one folder per subdomain, and `Articles/` (papers) and `Pages/` (official and educational pages). The subdomains are the groups of the map's concept register; each subdomain folder holds a `<Domain> - <Group>` index note and its topic notes. A topic is filed under the one register that lists it (a discipline map wins over a condition map); a source record is filed once, under its own `domain`, however many topics cite it.
- Hierarchy: a topic's `up` names its subdomain note, a subdomain's `up` names the domain map, and a map's `up` names [[Research Atlas]]. Breadcrumbs, ExcaliBrain and the graph read these links.
- Topic notes (`note_type: topic`) are atomic. Every claim links to a source block as `[[Source note#^anchor]]`. Each point is stated once: mechanism in `## How it works` (bold lead-in paragraphs, ending with a **Reading rule**), evidence strength in `## Evidence and status`, and the cross-domain curation paragraph at the end of `## Connections`. Older notes keep `## Supported claims` first and carry the curation paragraph at the end of `## How it works`.
- Source records (`note_type: source`) separate `## Reported findings (checked abstract)`, `## Scope as reported` and `## Analyst cautions (AI synthesis)`; topics cite the anchors.
- `Visualizations/` - the visual index (`Visualizations.md`: graph views, charts and dashboards), `Knowledge Explorer.base`, the two Bases that maps and subdomain notes embed (`Domain Contents`, `Subdomain Topics`), and the landscape canvases (Research Synthesis Map, Reference Atlas, Reading Queue Map).
- `Learning/` - modules, lessons, study aids, `Learning Path`, `Learning Dashboard`, `Learning Library.base`, and one learning-map canvas per module in `Learning/Maps/`.
- `Arguments/` - open questions, each beside its argument-map canvas. `Templates/` - note templates and the three canvas templates. `Support/` - attachments with provenance.

## Rules

- Never mark a source `read` or `full_text_checked` unless it was actually read. Downloaded is not read.
- Do not paste abstracts, article text or transcripts. Write short original summaries (<= 100 words per source) and link out.
- Keep reported findings separate from your own appraisal. Anything in `## Analyst cautions (AI synthesis)` is reasoning, not a source claim, and topic links to those anchors are labelled as AI synthesis.
- Keep identifiers exactly as published (DOI case, PMID, journal year versus first online date).
- No page links (`file.pdf#page=6`) without verifying the page; no dose, titration or individualized clinical advice.
- Preserve existing user notes, plugins and settings; add files rather than rewriting them.

## Tooling

- `.claude/hooks/vault_lint.py` checks links, heading and block anchors, canvases (JSON, ids, edges, file nodes, overlaps, group borders, text overflow, edges that loop back), Bases and frontmatter. `python3 .claude/hooks/vault_lint.py` audits the whole vault and should print `0 errors · 0 warnings`. Claude Code runs it after every Write or Edit (`.claude/settings.json`) and feeds errors back. `python3 .claude/hooks/test_vault_lint.py` proves it still catches seeded defects.
- `.mcp.json` registers two MCP servers: `obsidian-local` (typed note operations through the official Obsidian CLI: read, search, create, link-aware move, properties, backlinks) and `qmd` (semantic search over the `obsidian-vault` index, refreshed in the background at every Claude Code session start; by hand: `qmd --index obsidian-vault update` then `qmd --index obsidian-vault embed`).
- Move or rename files through Obsidian (the app, or `obsidian vault="Obsidian Vault" move path=... to=...`) so wikilinks and canvas file paths update. `obsidian vault="Obsidian Vault" unresolved` and `orphans` are quick health checks.
- The CSS snippet `research-library` colours note titles by type, hides the properties table inside canvas file cards, quiets graph links and fits dashboard diagrams to the page.
- Queries select notes by `note_type` or tag, never by folder, so a note can move between domains without breaking a view; the vault check counts `source_count` against linked notes whose `note_type` is `source`.
- Obsidian setup: graph views are bookmarks (`.obsidian/bookmarks.json`, group *Graph views*); the global graph colours by domain family and Extended Graph shapes nodes by `note_type`; the file-explorer order is `Support/Explorer order.md` (Custom File Explorer sorting); icons come from Iconize. The settings of these display plugins are tracked in git; token-bearing plugin data is not. Extended Graph keeps its own copy of the graph options in its default state (`syncDefaultState` is on); an empty copy there wipes the colour groups, so change graph colours from the graph view or regenerate both together.
- Adding a topic: file it in its subdomain folder and set `up`. Adding a subdomain: create its folder and a `<Domain> - <Group>` index note (`note_type: subdomain`, `up` to the map), link its label in the map's concept register, and add it to `Explorer order.md`.

### Canvas conventions

- Text cards use real newlines (`\n` in the JSON), never `<br>`: a `<br>` card renders as a single heading line with literal list markers.
- Size text cards to their rendered content, keep at least 50px between cards, and leave room between columns for edge labels (about 12 canvas units per character).
- Edges leave the side that faces their target; same-side arcs (left to left) are for deliberate brackets.
- A label repeated on every edge of one colour belongs in the legend instead (learning maps: every green edge reads "grounded by").

## Build workspaces (archived)

Three Codex staging workspaces generated this vault. Since the 2026-09-25 reorganisation the live vault is the source of truth: edit notes in place and run the vault check. The workspaces stay on disk as archives of their generators, receipts and reports, and each apply script now refuses to write (`ALLOW_STALE_APPLY=1` overrides; do not use it before remapping the workspace to the new paths and layouts).

| Workspace | Built | Retired apply step |
| --- | --- | --- |
| `/Volumes/NVME-Home/Documents/Codex/2026-09-24/cr/work/obsidian-vault-build/` | the original library | `tools/install_research.py --apply` |
| `/Volumes/NVME-Home/Documents/Codex/2026-09-24/new-chat-3/work/obsidian-expansion/` | the learning layer ([[Learning Maintenance]]) | `tools/apply_live.py --apply` |
| `/Volumes/NVME-Home/Documents/Codex/2026-09-24/new-chat-3/work/domain-encyclopedia/` | the reference encyclopedia | `tools/apply_staged.py --apply` |

Each workspace's build, validate and self-test commands (`build_research.py`, `validate_research.py`, `selftest_installer.py`, `build_encyclopedia.py`, `validate_encyclopedia.py`, `check_assets.py`, `make_manifests.py`, `selftest_validator.py`) still run against its own staged copy; their passing outputs were `0 errors`, `0 errors · 0 warnings` and `SELFTEST PASSED`. Still useful, since none of this writes to the vault:

- `domain-encyclopedia/BUILD-REPORT.md` records what the last build covered, which sources are abstract-only, and what still needs native verification; read it before adding topics. `DESIGN-AND-PLAN.md` beside it holds the domain coverage contract that decides whether a domain is complete.
- From the encyclopedia workspace, `python3 tools/source_pack.py fetch --only P29566425` retrieves or refreshes one source receipt and `python3 tools/source_inventory.py` rebuilds the receipt inventory. `receipts/source-checks/source-inventory.json` holds the identifiers, year, journal and access level of every fetched source; a spec missing from it used to produce notes with empty identifiers and an `abstract-only` label, so check a hand-added source record against its receipt.

Older standalone source-build payloads must not be replayed over the learning layer: they predate the correction cycle and lack its check anchors.

## Reference encyclopedia

The reference layer is `Hubs/Research Atlas.md`, the maps, topics and source records under `Domains/`, `Hubs/Reference Index.md`, `Hubs/Reference Index.base` and `Visualizations/Reference Atlas.canvas`. Anchors, access labels, reading status and the separation of reported findings from appraisal govern every note, including the lessons, concepts, hubs and source records.

### Fields this layer adds

- `content_layer: reference` marks notes that belong to the reference encyclopedia; the DQL and Base views filter on it.
- `concept_kind` is one of `structure`, `process`, `mechanism`, `theory`, `method`, `condition`, `framework`.
- `domain` and `secondary_domain` are the canonical domain keys used by the hubs; `condition` carries condition keys.
- `reviewed` is the last review date; `Reference Index` lists reference notes whose `reviewed` is missing or old.
- `source_count` must equal the number of distinct source notes the note links; the vault check flags a topic whose count drifts.
- `access_level` and `verification` must state what was actually read for that source; `Reference Index` has separate queries for abstract-only and full-text-checked records.

### Entry points

[[Research Atlas]] is the reference entry. [[Reference Index]] carries the dynamic routes plus the curated relationship register, and `Reference Index.base` renders the same notes as native tables. Sources remain the evidence layer: a topic claim links to an anchored block in its source note (a link ending in `#^anchor`), and the anchor block is what a reader checks.

The rules above are unchanged for the reference layer. Anchors, access labels, reading status and the separation of reported findings from appraisal govern every note, including the new concepts, hubs and source records.

## Reorganisation of 2026-09-25

The live vault was tidied by hand on request. Git history holds every pre-image.

- **Moved (through Obsidian, links updated):** `Research Atlas`, `Reference Index` (note, Base, both registers), `Library` (note and Base), `Visualizations` and `Workflow` into `Hubs/`; `Learning Path`, `Learning Dashboard` and `Learning Library.base` into `Learning/`; learning-map canvases into `Learning/Maps/`; argument-map canvases into `Arguments/`; the three canvas templates into `Templates/`.
- **Canvases:** every canvas re-laid out (geometry and edge sides only), text cards switched from `<br>` to newlines, the Reference Atlas's fifteen identical "domain" spokes replaced by one "domain" edge per domain group, and the learning maps' per-edge "grounded by" labels moved into each legend.
- **Topics:** the repeated depth sections ("In depth", "Further depth", "Reference") were merged into the core sections so each point is stated once. Every source link, AI-appraisal label, reading rule and curation paragraph was kept; each note was checked against its pre-merge text for lost links and for sentences whose content disappeared. Git history holds the pre-merge text.
- **Domains:** `Topics/`, `Sources/` and `Maps/` were replaced by `Domains/` (domain, subdomain, topic; `Articles/` and `Pages/` per domain), and the Visualizations hub and landscape canvases moved into `Visualizations/`, all through Obsidian's rename so links and canvas paths updated. Folder-based Dataview and Bases filters now select by `note_type` or tag; each topic gained an `up` property and each subdomain an index note.
- **Repair:** `Argument - Does ADHD medication change long-term outcomes` had a stale copy of the topic "ADHD diagnosis and measurement" (frontmatter included) prepended to it, so it was typed as a topic and missing from argument views. It was restored from the original build payload; the removed block duplicated `Topics/ADHD diagnosis and measurement.md` line for line.
- **Tidy:** duplicate `research/source` tags removed from 61 source notes; hard-coded coverage counts replaced by live Dataview counts or dated to the build they describe; the Learning Path's plasticity note corrected in place.

**The staging workspaces predate this reorganisation.** Their preimages and path lists name the old locations and layouts, so a replay would recreate moved files at their old paths (duplicate note names) and restore the old canvas geometry and topic layout. `apply_staged.py`, `apply_live.py` and `install_research.py` therefore refuse `--apply` (see Build workspaces above).
