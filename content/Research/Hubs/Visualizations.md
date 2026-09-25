---
note_type: hub
title: Visualizations
cssclasses: [research-hub]
tags: [research/visualizations]
---

# Visualizations

This page is the dashboard layer for the research library. It uses properties that already exist in the source and topic notes, so the views update when notes change.

Two distinctions matter:

- **Verification** says what was checked: `abstract_checked`, `full_text_checked`, `educational_checked`, or an official page, document or article-page check.
- **Reading status** says whether you have read the source. Everything currently remains `queued`; a downloaded PDF is not a read source.

## Native Bases

Open [[Library.base]] for the operational views:

- **Source Table** - all source records with bibliographic and verification fields.
- **Reading Queue Board** - card view grouped by `queue_tier`.
- **Condition Cards** - source cards grouped by condition.
- **Condition coverage** and **Domain coverage** - grouped summaries.
- **Source kind summary** - papers versus educational or official sources.
- **Access and verification** - access level grouped with verification labels.
- Condition views for **Bipolar I**, **ADHD**, **Autism** and **CPTSD**.

## Reading rules

1. Use `queue_tier` to choose the order; do not let an interesting abstract jump the queue.
2. Read `access_level` before trusting scope: abstract-only evidence cannot support a full-text claim.
3. Keep reported findings, scope limits and analyst cautions in separate source blocks.
4. Update `reading_status` only after reading the source.
5. Move a claim to an argument map only when its source links and limits are explicit.

## Reading queue

```dataview
TABLE WITHOUT ID file.link AS Source, year AS Year, source_kind AS Kind, condition AS Condition, domain AS Domain, access_level AS Access, verification AS Verified, queue_tier AS Queue
FROM "Research/Sources"
WHERE reading_status = "queued"
SORT queue_tier ASC, year DESC, file.name ASC
```

### Core queue

```dataview
TABLE WITHOUT ID file.link AS Source, year AS Year, condition AS Condition, domain AS Domain, access_level AS Access, verification AS Verified
FROM "Research/Sources"
WHERE reading_status = "queued" AND queue_tier = "core"
SORT year DESC, file.name ASC
```

### Advanced queue

```dataview
TABLE WITHOUT ID file.link AS Source, year AS Year, condition AS Condition, domain AS Domain, access_level AS Access, verification AS Verified
FROM "Research/Sources"
WHERE reading_status = "queued" AND queue_tier = "advanced"
SORT year DESC, file.name ASC
```

## Access and verification

### Sources not checked from a downloaded full text

```dataview
TABLE WITHOUT ID file.link AS Source, source_kind AS Kind, access_level AS Access, verification AS Verified, source_url AS URL
FROM "Research/Sources"
WHERE access_level = "abstract-only" OR access_level = "public-page"
SORT access_level ASC, source_kind ASC, file.name ASC
```

### Access-level coverage

```dataview
TABLE length(rows) AS Sources, rows.file.link AS Records
FROM "Research/Sources"
GROUP BY access_level
SORT access_level ASC
```

### Verification coverage

```dataview
TABLE length(rows) AS Sources, rows.file.link AS Records
FROM "Research/Sources"
GROUP BY verification
SORT verification ASC
```

## Source-kind coverage

### Papers

```dataview
TABLE WITHOUT ID file.link AS Paper, year AS Year, condition AS Condition, domain AS Domain, study_type AS Design, access_level AS Access, verification AS Verified
FROM "Research/Sources"
WHERE source_kind = "paper"
SORT year DESC, file.name ASC
```

### Educational and official sources

```dataview
TABLE WITHOUT ID file.link AS Source, publisher AS Publisher, year AS Year, condition AS Condition, domain AS Domain, access_level AS Access, verification AS Verified
FROM "Research/Sources"
WHERE source_kind = "educational"
SORT publisher ASC, file.name ASC
```

### Counts by source kind

```dataview
TABLE length(rows) AS Sources, rows.file.link AS Records
FROM "Research/Sources"
GROUP BY source_kind
SORT source_kind ASC
```

## Condition and domain coverage

### Sources per condition

```dataview
TABLE length(rows) AS Sources, rows.file.link AS Records
FROM "Research/Sources"
FLATTEN condition AS Condition
WHERE Condition
GROUP BY Condition
SORT Condition ASC
```

### Sources per domain

```dataview
TABLE length(rows) AS Sources, rows.file.link AS Records
FROM "Research/Sources"
FLATTEN domain AS Domain
WHERE Domain
GROUP BY Domain
SORT Domain ASC
```

### Bipolar I sources

```dataview
TABLE WITHOUT ID file.link AS Source, year AS Year, domain AS Domain, study_type AS Design, access_level AS Access, verification AS Verified
FROM "Research/Sources"
WHERE contains(condition, "bipolar-i")
SORT year DESC, file.name ASC
```

### ADHD sources

```dataview
TABLE WITHOUT ID file.link AS Source, year AS Year, domain AS Domain, study_type AS Design, access_level AS Access, verification AS Verified
FROM "Research/Sources"
WHERE contains(condition, "adhd")
SORT year DESC, file.name ASC
```

### Autism sources

```dataview
TABLE WITHOUT ID file.link AS Source, year AS Year, domain AS Domain, study_type AS Design, access_level AS Access, verification AS Verified
FROM "Research/Sources"
WHERE contains(condition, "autism")
SORT year DESC, file.name ASC
```

### CPTSD sources

```dataview
TABLE WITHOUT ID file.link AS Source, year AS Year, domain AS Domain, study_type AS Design, access_level AS Access, verification AS Verified
FROM "Research/Sources"
WHERE contains(condition, "cptsd")
SORT year DESC, file.name ASC
```

## Topic coverage

### Topics by evidence count

```dataview
TABLE WITHOUT ID file.link AS Topic, source_count AS Sources, condition AS Condition, domain AS Domain
FROM "Research/Topics"
SORT source_count DESC, file.name ASC
```

### Topics needing more source coverage

```dataview
TABLE WITHOUT ID file.link AS Topic, source_count AS Sources, condition AS Condition, domain AS Domain
FROM "Research/Topics"
WHERE source_count <= 1
SORT source_count ASC, file.name ASC
```

## Argument dashboard

```dataview
TABLE WITHOUT ID file.link AS Argument, status AS Status, confidence AS Confidence, condition AS Condition, domain AS Domain
FROM "Research/Arguments"
SORT file.name ASC
```

## Canvas synthesis maps

- [[Evidence Map Template.canvas]] - claim, evidence standard, objections, uncertainty and next check.
- [[Argument Map Template.canvas]] - competing explanations, deciding evidence and overreach guard.
- [[Topic System Template.canvas]] - one topic connected to the five foundation domains.
- [[Reading Queue Map.canvas]] - strategic reading queue and access rules.
- [[Research Synthesis Map.canvas]] - the full condition, foundation and argument landscape.

## Reading rules

1. Use `queue_tier` to choose the order; do not let an interesting abstract jump the queue.
2. Read `access_level` before trusting scope: abstract-only evidence cannot support a full-text claim.
3. Keep reported findings, scope limits and analyst cautions in separate source blocks.
4. Update `reading_status` only after reading the source.
5. Move a claim to an argument map only when its source links and limits are explicit.

## Learning views

- [[Learning Dashboard]] - Dataview tables for lessons by module, prerequisites, question coverage and new sources.
- [[Learning Library.base]] - native Base cards and tables for lessons, modules and assessment coverage.

These views read the `Learning/` folder; the source and topic views above stay the evidence layer.