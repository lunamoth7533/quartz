---
note_type: learning-aid
title: "Learning Maintenance"
cssclasses: [research-hub]
tags: [research/learning, research/maintenance]
---

# Learning Maintenance

How to change the learning layer without breaking the vault. The layer is generated from the content modules in
the task workspace and validated before it is applied; direct hand-editing of staged files is what the checks are
designed to catch.

## Where the rules live

- `Research/AGENTS.md` holds the vault rules: anchors, access labels, reading status and the separation of
  reported findings from appraisal. This note adds the learning layer on top of them.
- The source of truth for the generated layer is the staging workspace
  `work/obsidian-expansion/` (`tools/content_*.py`, `tools/build_learning.py`). The vault receives the built
  result, not the authoring files.

## Commands

```bash
cd /Volumes/NVME-Home/Documents/Codex/2026-09-24/new-chat-3/work/obsidian-expansion
python3 tools/build_learning.py            # rebuild staged-vault/ from baseline + authored content
python3 tools/validate_learning.py         # structure, links, anchors, sources, coverage, canvases, base
python3 tools/selftest_validator.py        # inject defects into a copy and prove the validator rejects them
```

Run these from that absolute task directory in a fresh shell; `tools/` and `staged-vault/` are relative to it,
and the commands refuse to run against a different working tree. The build now rejects any `--out` path outside
its own staging area before it touches the filesystem, so a mistyped destination fails without deleting
anything. Older standalone source-build payloads must not be replayed over this layer: they predate the
correction cycle, do not carry the check anchors, and would overwrite the lessons with pre-review text.

The build refuses to append navigation to any note whose bytes do not match the captured baseline, so concurrent
edits are never overwritten: a changed note fails the check and has to be rebased deliberately.

## Checklist for a new lesson or source

1. Add the source record first with identifiers checked against the primary or official page, an honest
   `access_level`, `verification` and `reading_status: queued`.
2. Add or reuse anchored blocks; keep reported findings, source limitations and analyst cautions in separate
   sections, and label every link into a caution block as AI synthesis.
3. Write the lesson with a plain-language model, claim-adjacent citations, a hypothetical worked example,
   misconceptions, source boundaries, 3-5 retrieval questions and answer notes.
4. Update the topic note's *Detailed lesson* link only if the topic is new; existing topics are appended by the
   builder.
5. Rebuild, validate, and read the coverage matrix entry for the new material.

## What the validator will not do

It checks structure, links, anchors, metadata, coverage and canvas schema. It cannot check whether a sentence is
true. Scientific review stays with a human reader who opens the source blocks, and the coverage matrix is the
place to record what is still unresolved rather than smoothing it over.
