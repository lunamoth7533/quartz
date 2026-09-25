---
note_type: learning-aid
title: "Learning Dashboard"
cssclasses: [research-hub]
tags: [research/learning, research/dashboard]
---

# Learning Dashboard

Dataview queries over the learning layer. All queries are DQL only; nothing here requires JavaScript. The
companion native views live in [[Learning Library.base]].

## Lessons by module

`Sources` counts distinct source keys across the group, so a source cited by several lessons in one module is
counted once there; `sum(source_count)` would have double-counted those shared citations.

```dataview
TABLE length(rows) AS Lessons, length(unique(flat(rows.sources))) AS Sources, sum(rows.question_count) AS Questions
FROM "Research/Learning/Lessons"
WHERE note_type = "lesson"
GROUP BY module_title
SORT module_title ASC
```

## Lesson index

```dataview
TABLE WITHOUT ID file.link AS Lesson, module_title AS Module, lesson_order AS Order, source_count AS Sources, question_count AS Questions
FROM "Research/Learning/Lessons"
WHERE note_type = "lesson"
SORT module ASC, lesson_order ASC
```

## Module guides

```dataview
TABLE WITHOUT ID file.link AS Module, lesson_count AS Lessons, source_count AS Sources, canvas AS Canvas
FROM "Research/Learning/Modules"
WHERE note_type = "module"
SORT module ASC
```

## Prerequisites map

```dataview
TABLE WITHOUT ID file.link AS Lesson, module_title AS Module, prerequisites AS "Comes after"
FROM "Research/Learning/Lessons"
WHERE note_type = "lesson" AND length(prerequisites) > 0
SORT module ASC, lesson_order ASC
```

## Topic evidence depth

Every topic has exactly one detailed lesson; the topic-to-lesson mapping is verified in the build checks rather
than inferred from links. This table shows how many source records stand behind each topic, thinnest first.

```dataview
TABLE WITHOUT ID file.link AS Topic, source_count AS Sources, domain AS Domain, condition AS Condition
FROM #research/topic AND -"Research/Templates"
WHERE note_type = "topic"
SORT source_count ASC, file.name ASC
```

## Thin-coverage topics

```dataview
TABLE WITHOUT ID file.link AS Topic, source_count AS Sources, domain AS Domain, condition AS Condition
FROM #research/topic AND -"Research/Templates"
WHERE note_type = "topic" AND source_count <= 1
SORT source_count ASC, file.name ASC
```

## New prerequisite sources

```dataview
TABLE WITHOUT ID file.link AS Source, year AS Year, access_level AS Access, verification AS Verified, queue_tier AS Queue
FROM #research/source AND -"Research/Templates"
WHERE verification = "full_text_checked" OR access_level = "official-page"
SORT year DESC, file.name ASC
```

## Study aids

```dataview
LIST
FROM "Research/Learning"
WHERE note_type = "glossary" OR note_type = "learning-aid" OR note_type = "coverage"
SORT file.name ASC
```

## Reading-state check

Everything the learning layer cites stays queued until it is actually read. A `read` row here means someone
changed a reading state; check that it was earned.

```dataview
TABLE WITHOUT ID file.link AS Source, reading_status AS Status, access_level AS Access
FROM #research/source AND -"Research/Templates"
WHERE reading_status = "read" OR verification = "full_text_checked"
SORT reading_status ASC, file.name ASC
```
