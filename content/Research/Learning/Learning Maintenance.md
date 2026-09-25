---
note_type: learning-aid
title: "Learning Maintenance"
cssclasses: [research-hub]
tags: [research/learning, research/maintenance]
---

# Learning Maintenance

How to change the learning layer without breaking the vault. Since the 2026-09-25 reorganisation the live vault is the source of truth: edit lessons, modules and topics in place, and let the vault check catch broken links, anchors and canvases.

## Where the rules live

- `Research/AGENTS.md` holds the vault rules: anchors, access labels, reading status and the separation of
  reported findings from appraisal. This note adds the learning layer on top of them.
- The layer was generated in the staging workspace
  `/Volumes/NVME-Home/Documents/Codex/2026-09-24/new-chat-3/work/obsidian-expansion/` (`tools/content_*.py`,
  `tools/build_learning.py`). That workspace predates the reorganisation and is kept as an archive: its apply step
  now refuses to run. Its build ran only from that directory, rejected `--out` paths outside its staging area, and
  refused to touch any note whose bytes differed from its captured baseline. Older standalone source-build payloads
  must not be replayed over this layer either: they predate the correction cycle, do not carry the check anchors,
  and would overwrite the lessons with pre-review text.

## Commands

```bash
python3 .claude/hooks/vault_lint.py        # whole-vault check: links, anchors, canvases, Bases, frontmatter
python3 .claude/hooks/test_vault_lint.py   # prove the check still catches seeded defects
```

Run them from the vault root. Claude Code runs the same check after every edit. The archived workspace's own
commands (`build_learning.py`, `validate_learning.py`, `selftest_validator.py`) still run against its staged copy.

## Checklist for a new lesson or source

1. Add the source record first with identifiers checked against the primary or official page, an honest
   `access_level`, `verification` and `reading_status: queued`.
2. Add or reuse anchored blocks; keep reported findings, source limitations and analyst cautions in separate
   sections, and label every link into a caution block as AI synthesis.
3. Write the lesson with a plain-language model, claim-adjacent citations, a hypothetical worked example,
   misconceptions, source boundaries, 3-5 retrieval questions and answer notes.
4. Link it from the topic note's *Detailed lesson* section and its module guide, and add a coverage matrix entry
   for a new topic.
5. Run the vault check and read the coverage matrix entry for the new material.

## What the check will not do

It checks structure, links, anchors, metadata, coverage counts and canvas schema. It cannot check whether a
sentence is true. Scientific review stays with a human reader who opens the source blocks, and the coverage matrix
is the place to record what is still unresolved rather than smoothing it over.
