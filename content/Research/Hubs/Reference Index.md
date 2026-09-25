---
note_type: hub
title: "Reference Index"
description: "Dynamic navigation over every reference concept article: A-Z, by domain, by concept kind, by condition, and by linked source."
content_layer: reference
reviewed: 2026-09-25
cssclasses: [research-hub]
tags: [research/index, research/reference]
---
# Reference Index

Dynamic views over the reference layer. Every query reads the `content_layer`, `domain`, `condition` and `concept_kind` properties, so the index updates when notes change; nothing here is a hardcoded list.

## A-Z of concept articles

```dataview
TABLE WITHOUT ID file.link AS Concept, concept_kind AS Kind, domain AS Domain, condition AS Condition
FROM #research/topic AND -"Research/Templates"
WHERE content_layer = "reference"
SORT file.name ASC
```

## By concept kind

```dataview
TABLE WITHOUT ID concept_kind AS Kind, length(rows) AS Notes, join(rows.file.link, ", ") AS Concepts
FROM #research/topic AND -"Research/Templates"
WHERE content_layer = "reference"
GROUP BY concept_kind
SORT length(rows) DESC
```

## By domain

```dataview
TABLE WITHOUT ID domain AS Domain, length(rows) AS Notes, join(rows.file.link, ", ") AS Concepts
FROM #research/topic AND -"Research/Templates"
WHERE content_layer = "reference"
FLATTEN domain
GROUP BY domain
SORT length(rows) DESC
```

## By condition

```dataview
TABLE WITHOUT ID condition AS Condition, length(rows) AS Notes, join(rows.file.link, ", ") AS Concepts
FROM #research/topic AND -"Research/Templates"
WHERE content_layer = "reference" AND length(condition) > 0
FLATTEN condition
GROUP BY condition
SORT length(rows) DESC
```

## Sources that are only available at abstract level

```dataview
TABLE WITHOUT ID file.link AS Source, access_level AS Access, verification AS Verified, domain AS Domain
FROM #research/source AND -"Research/Templates"
WHERE note_type = "source" AND access_level = "abstract-only"
SORT file.name ASC
```

## Sources checked at full text

```dataview
TABLE WITHOUT ID file.link AS Source, access_level AS Access, verified_on AS "Checked on"
FROM #research/source AND -"Research/Templates"
WHERE note_type = "source" AND verification = "full_text_checked"
SORT file.name ASC
```

## Notes needing review

```dataview
TABLE WITHOUT ID file.link AS Note, reviewed AS Reviewed, concept_kind AS Kind
FROM "Research"
WHERE content_layer = "reference" AND (reviewed = null OR reviewed < date("2026-01-01"))
SORT file.name ASC
```

## Relationship register

- [[Reference Index - Domain relationships]] (domain-level register)
- [[Reference Index - Concept relations]] (concept-level register)
