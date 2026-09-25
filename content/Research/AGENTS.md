# Research vault instructions

This folder is a source-backed research library inside an Obsidian vault. It covers bipolar I, ADHD, autism, complex PTSD and the underlying neurobiology, neurochemistry, psychology, pharmacology and neurology. It is educational material, not an individual treatment plan or diagnosis.

## Where things live

- `Sources/` - one record per paper or official/educational page. Each note separates `## Reported findings (checked abstract)`, `## Scope as reported` and `## Analyst cautions (AI synthesis)`; topics cite the anchors.
- `Topics/` - atomic notes. Every claim links to a source block as `[[Source note#^anchor]]`.
- `Maps/`, `Arguments/`, `Templates/`, `Support/` - navigation, open questions, note templates and attachments with provenance.
- `Library.base` and `Library.md` - the native article library.

## Rules

- Never mark a source `read` or `full_text_checked` unless it was actually read. Downloaded is not read.
- Do not paste abstracts, article text or transcripts. Write short original summaries (<= 100 words per source) and link out.
- Keep reported findings separate from your own appraisal. Anything in `## Analyst cautions (AI synthesis)` is reasoning, not a source claim, and topic links to those anchors are labelled as AI synthesis.
- Keep identifiers exactly as published (DOI case, PMID, journal year versus first online date).
- No page links (`file.pdf#page=6`) without verifying the page; no dose, titration or individualized clinical advice.
- Preserve existing user notes, plugins and settings; add files rather than rewriting them.

## Developer commands

The staging workspace is `/Volumes/NVME-Home/Documents/Codex/2026-09-24/cr/work/obsidian-vault-build/`. From there:

```bash
python3 tools/build_research.py          # regenerate payload/ from tools/content_*.py
python3 tools/validate_research.py       # frontmatter, links, anchors, ledger, clipper
python3 tools/selftest_validator.py      # prove the validator catches injected defects
python3 tools/selftest_installer.py      # installer apply/idempotency on a fixture vault
```

Live apply and verification: `python3 tools/install_research.py --vault "Obsidian Vault" --apply` then `--verify-only`.

## Learning layer maintenance

The generated learning layer under `Learning/` has its own workflow: [[Learning Maintenance]] records the
authoring workspace (`/Volumes/NVME-Home/Documents/Codex/2026-09-24/new-chat-3/work/obsidian-expansion`), the
rebuild and validation commands, and the rule that older source-build payloads must not be replayed over this
layer because they predate the correction cycle and lack its check anchors.

Nothing in the rules above changes. Anchors, access labels, reading status and the separation of reported
findings from appraisal govern every note, including the new lessons and source records.