---
note_type: coverage
title: "Learning Coverage Matrix"
cssclasses: [research-hub]
tags: [research/learning, research/coverage]
---

# Learning Coverage Matrix

Which concepts have lessons, which module teaches them, and how deep the evidence goes. Every table below is computed live from note properties and links, so it stays current as notes are added.

## Coverage at a glance

```dataviewjs
const topics = dv.pages('#research/topic').where(p => p.note_type === "topic" && !p.file.path.includes("/Templates/"));
const lessons = dv.pages('#research/lesson').where(p => p.note_type === "lesson");
const sources = dv.pages('#research/source').where(p => p.note_type === "source" && !p.file.path.includes("/Templates/"));
const taught = topics.where(t => t.file.outlinks.some(l => l.path.includes("/Lessons/")));
const words = lessons.map(l => Number(l.word_count) || 0).array().sort((a, b) => a - b);
dv.table(["Measure", "Count"], [
  ["Concepts", topics.length],
  ["Concepts with a lesson", taught.length],
  ["Lessons", lessons.length],
  ["Modules", dv.pages('#research/module').where(p => p.note_type === "module").length],
  ["Practice questions", lessons.map(l => Number(l.question_count) || 0).array().reduce((a, b) => a + b, 0)],
  ["Median lesson length (words)", words.length ? words[Math.floor(words.length / 2)] : 0],
  ["Source records", sources.length],
  ["Sources checked in full text", sources.where(s => s.verification === "full_text_checked").length],
  ["Sources checked at abstract level", sources.where(s => s.verification === "abstract_checked").length],
  ["Recent research (2023 onward)", sources.where(s => (s.file.tags || []).includes("#research/recent")).length],
]);
```

## Modules

```dataview
TABLE WITHOUT ID file.link AS Module, lesson_count AS Lessons, source_count AS Sources
FROM #research/module
WHERE note_type = "module"
SORT module_order ASC
```

## Concepts and their lessons

```dataview
TABLE WITHOUT ID file.link AS Concept, filter(file.outlinks, (l) => contains(l.path, "/Lessons/")) AS Lesson, source_count AS Sources
FROM #research/topic
WHERE note_type = "topic" AND !contains(file.path, "Templates")
SORT file.folder ASC, file.name ASC
```

## Concepts still without a lesson

```dataview
LIST
FROM #research/topic
WHERE note_type = "topic" AND !contains(file.path, "Templates") AND length(filter(file.outlinks, (l) => contains(l.path, "/Lessons/"))) = 0
SORT file.name ASC
```

## Maps, modules and learning maps

| Domain map | Module | Learning map |
| --- | --- | --- |
| [[Research Methods and Measurement Map]] | [[Module 01 - Research Methods and Evidence Literacy]] | [[Learning Map - Research Methods.canvas]] |
| [[Neurobiology Map]] | [[Module 02 - Neurobiology]] | [[Learning Map - Neurobiology.canvas]] |
| [[Neurochemistry Map]] | [[Module 03 - Neurochemistry]] | [[Learning Map - Neurochemistry.canvas]] |
| [[Psychology Map]] | [[Module 04 - Psychology]] | [[Learning Map - Psychology.canvas]] |
| [[Pharmacology Map]] | [[Module 05 - Pharmacology]] | [[Learning Map - Pharmacology.canvas]] |
| [[Neurology Map]] | [[Module 06 - Neurology]] | [[Learning Map - Neurology.canvas]] |
| [[Bipolar Disorders Map]] | [[Module 07 - Bipolar Disorders]] | [[Learning Map - Bipolar Disorders.canvas]] |
| [[ADHD Map]] | [[Module 08 - ADHD]] | [[Learning Map - ADHD.canvas]] |
| [[Autism Map]] | [[Module 09 - Autism]] | [[Learning Map - Autism.canvas]] |
| [[CPTSD Map]] | [[Module 10 - CPTSD]] | [[Learning Map - CPTSD.canvas]] |
| [[Neuroanatomy and Systems Neuroscience Map]] | [[Module 11 - Neuroanatomy and Systems Neuroscience]] | the domain canvas beside the map |
| [[Genetics and Neurodevelopment Map]] | [[Module 12 - Genetics and Neurodevelopment]] | the domain canvas beside the map |
| [[Neuroendocrinology and Neuroimmunology Map]] | [[Module 13 - Neuroendocrinology and Neuroimmunology]] | the domain canvas beside the map |
| [[Computational Neuroscience and Brain Theories Map]] | [[Module 14 - Computational Neuroscience and Brain Theories]] | the domain canvas beside the map |
| [[Clinical Psychiatry and Psychopathology Map]] | [[Module 15 - Clinical Psychiatry and Psychopathology]] | the domain canvas beside the map |
| [[Argument - Is chemical imbalance a useful explanation]] | (open question) | [[Argument Map - Chemical imbalance explanation.canvas]] |
| [[Argument - Does ADHD medication change long-term outcomes]] | (open question) | [[Argument Map - ADHD medication long-term outcomes.canvas]] |
| [[Argument - Does trauma therapy need a stabilization phase]] | (open question) | [[Argument Map - Trauma therapy stabilization phase.canvas]] |

## Open questions

These are real evidence limits, not unfilled placeholders. Each names the module where the question is currently taught and what would change the answer.

- **Does measured LTP/LTD-like plasticity in humans track specific memories?** (M02 Neurobiology) - Converging human studies linking plasticity measures to specific learning outcomes and showing longevity, input specificity and associativity.
- **How should functional impairment be defined and measured in adult ADHD?** (M08 ADHD) - Validated functional instruments plus longitudinal data that link scores to real outcomes.
- **Do ADHD medication gains in core symptoms translate into long-term function, quality of life and safety?** (M08 ADHD) - Long-term randomised evidence where feasible and prospective cohorts with pre-specified confounding control.
- **Does sequencing trauma-therapy components inside one protocol matter?** (M10 CPTSD) - Trials that randomise sequence within the same components, with moderator and dropout analyses.
- **What is the biological signature of ICD-11 complex PTSD specifically?** (M10 CPTSD) - Studies that recruit ICD-11 complex PTSD samples, contrast them with PTSD and controls, and replicate with convergent measures.
- **How well do polygenic scores transfer across ancestries, environments and case definitions?** (M01 Research Methods / M02 Neurobiology) - Multi-ancestry discovery and calibration studies with external validation and decision-impact analysis.
- **Are autism interventions effective and acceptable for adults?** (M09 Autism) - Adult trials with outcomes chosen with autistic participants, and long-term follow-up.
- **How much of the group imaging difference in bipolar disorder is medication exposure versus illness?** (M06 Neurology / M07 Bipolar Disorders) - Longitudinal first-episode cohorts with prospective treatment-exposure measurement.
- **What spacing schedule works best for this material?** (M01 Research Methods) - Direct studies of spacing intervals for this kind of material; the current review supports spacing over massing and does not identify an optimum.
- **Do simple explanatory models help engagement without misstating mechanism?** (M03 Neurochemistry / M07 Bipolar Disorders) - Studies of explanation comprehension and its effects on engagement, alongside careful mechanism language.

## Coverage limits

- Not every claim in the vault is taught: the coverage unit is the topic note, and topics whose claims are abstract-only keep that limit in the lesson.
- The curriculum is finite. It is not an exhaustive review of any of these fields, and empty searches in the connectors used for this build were not treated as evidence of absence.
- Lessons teach the sources that exist here. Where the vault has no source, the topic and the coverage matrix name the gap instead of filling it.
