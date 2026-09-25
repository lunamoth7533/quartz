---
note_type: hub
title: Workflow
cssclasses: [research-hub]
tags: [research/workflow]
---

# Workflow

This vault follows the source to claim to topic to argument structure: notes live in `Sources/`, `Topics/` and `Arguments/` with attachments in `Support/` , and an article library is built from metadata with Bases.

## 1. One source record per source

Each record keeps frontmatter identifiers, an honest access label and your own paraphrase split into anchored blocks. The block below shows the parts a topic link needs:

```text
## Summary (paraphrase, not a quote)
Support approaches are individualized and include behavioural, educational,
developmental and family-focused options.
^f20-supports
```

## 2. Claims link to source blocks

A topic claim cites the exact block it rests on rather than the whole note:

- Support approaches are individualized and span behavioural, educational, developmental and family-focused options. [[F20 NIMH Autism spectrum disorder#^f20-supports|NIMH, Autism Spectrum Disorder]]

Block transclusion pulls the source text inline, so the evidence is visible without leaving the topic:

![[F20 NIMH Autism spectrum disorder#^f20-supports]]

## 3. Attachments keep their provenance

Downloaded files sit in `Support/` with a receipt (URL, hash, access basis) in [[Attachments]]. Link a verified page directly:

- [[NIMH - Autism Spectrum Disorder.pdf#page=6|NIMH Autism Spectrum Disorder, page 6 (Interventions and Services; Medication)]]

Page links are only added after the page content is actually verified. Sources that could not be downloaded keep their online link and say so in [[Attachments]].

## 4. Read side by side

Open the PDF in a split pane (command palette: *Split right*) and keep the source note in the other pane. PDF++ adds highlight and backlink helpers for the tutorial's selection workflow (26:00-31:00); the built-in PDF viewer already supports page links such as `#page=6`.

## 5. Separate findings from hypotheses

Atomic statements belong in `Topics/`. Questions, competing explanations and evidence needs belong in `Arguments/`, marked as AI-generated starter questions (33:00-36:50). Never move a hypothesis into a topic note's claim list without a source that supports it.

## 6. Capture new pages

For non-PDF sources the official Web Clipper can create a source record from a URL (31:50). The ready template lives at `Research/Support/Web Clipper/research-source-capture.json`:

1. Open the Web Clipper extension, choose **Import** and pick that file.
2. Set the template's vault to `Obsidian Vault`; the capture path is already `Research/Sources`.
3. Clip a page, then replace the captured text with your own summary, add a block anchor and set `reading_status`.

Without a browser extension, capture the page manually with the fields from [[Source template]].

## Publication versus inference

A topic claim is either sourced or marked as a question. `verification:` records what was checked (`abstract_checked`, `educational_checked`), and `reading_status:` stays `queued` until the source has actually been read. Downloaded does not mean read.

## Keeping the library honest

Before adding a batch of notes, check four things by hand:

1. Does every claim link to a block, and does that block say what the claim says it says?
2. Does the source note separate reported findings (`## Reported findings`) from your own appraisal (`## Analyst cautions (AI synthesis)`)?
3. Are identifiers and the reading status exactly as published, with `queued` still set for anything not read?
4. Is any summary paragraph longer than 100 words, or does it restate the abstract rather than paraphrasing it?

Developer commands and the automated checks live in `Research/AGENTS.md`.

## Learning layer

The source to claim to topic to argument method above now feeds a learning layer under `Learning/`.

- [[Study Workflow]] - how to study a lesson, use retrieval practice and schedule review.
- [[Learning Hub]] - the ten-module curriculum and how it maps to the atomic notes.
- [[Learning Maintenance]] - rebuild and validation commands for the learning layer.

Keep the rule from the top of this note: the lesson explains, the topic asserts, and the source block decides.