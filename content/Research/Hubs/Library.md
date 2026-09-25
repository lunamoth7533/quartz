---
note_type: hub
title: Library
cssclasses:
  - research-hub
tags:
  - research/library
---

# Library

`Library.base` is the operational article library: one row per source record, filtered to `note_type: source`, wherever the record is filed (each domain keeps its sources in `Articles/` and `Pages/`). Every view is a native Bases view, so sorting, grouping and export stay inside Obsidian.

Current coverage, counted live by source kind:

```dataview
TABLE WITHOUT ID source_kind AS "Source kind", length(rows) AS "Records"
FROM #research/source AND -"Research/Templates"
WHERE note_type = "source"
GROUP BY source_kind
```

All remain queued; verification labels describe what was checked, not whether the full text was read.

## Views in the Base

- **Source Table** - all source records, sorted by title.
- **Reading Queue Board** - card view grouped by `queue_tier`.
- **Condition Cards** - source cards grouped by condition.
- **Journal articles** - papers sorted newest first.
- **Educational and official** - official or educational pages.
- **Reading queue** - queued sources grouped by queue tier.
- **Condition coverage** - source records grouped by condition.
- **Domain coverage** - source records grouped by domain.
- **Source kind summary** - papers versus educational or official records.
- **Access and verification** - access level grouped with verification labels.
- **Bipolar I**, **ADHD**, **Autism**, **CPTSD** - focused condition views.

Columns to read first: `verification` (what was actually checked), `access_level` (abstract, public page or downloaded PDF) and `reading_status` (queued until read). `doi`, `pmid` and `source_url` are the citation handles.

![[Library.base]]

## Dashboards and synthesis maps

[[Visualizations]] adds Dataview tables for the reading queue, access and verification coverage, source-kind coverage, condition and domain coverage, topic coverage and argument status.

The Canvas layer lives beside the notes it maps:

- `Visualizations/` - [[Reading Queue Map.canvas]], [[Research Synthesis Map.canvas]] and [[Reference Atlas.canvas]]
- `Domains/<Domain>/` - one domain canvas beside each domain map
- `Templates/` - [[Evidence Map Template.canvas]], [[Argument Map Template.canvas]] and [[Topic System Template.canvas]]
- `Learning/Maps/` - one learning map per module
- `Arguments/` - one argument map per starter question

## Adding a source

1. Create the note from [[Source template]].
2. Fill in the bibliographic fields from the publisher page, not from memory.
3. Write your own summary paragraphs and add block anchors.
4. Link claims from topic notes to those anchors.
5. Update `reading_status` only when you actually read the source.
