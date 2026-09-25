---
note_type: hub
title: Research Home
cssclasses: [research-hub]
tags: [research/home]
---

# Research Home

A curated starting library for **Bipolar I, ADHD, autism and complex PTSD**, plus the neurobiology, neurochemistry, psychology, pharmacology and neurology underneath them. Every substantive claim in a topic note links to a block in a source note so you can check it.

> [!warning] Research library, not clinical advice
> It is a research library, not an individual treatment plan. Nothing here is a diagnosis, a dose or a substitute for clinical advice.

## Start here

| If you want to… | Open |
| --- | --- |
| Look up a concept or a field | [[Research Atlas]] → [[Reference Index]] |
| Learn the material in order | [[Learning Path]] → [[Learning Hub]] |
| Find or check a source | [[Library]] |
| See queues and coverage | [[Visualizations]] · [[Learning Dashboard]] |
| Understand the method | [[Workflow]] |
| See the whole landscape | [[Research Synthesis Map.canvas\|Research Synthesis Map]] · [[Reference Atlas.canvas\|Reference Atlas]] |

## Coverage

Live counts by note type:

```dataview
TABLE WITHOUT ID note_type AS "Note type", length(rows) AS "Notes"
FROM "Research"
WHERE note_type AND !contains(file.folder, "Templates")
GROUP BY note_type
SORT length(rows) DESC
```

All sources are queued; verification labels say what was actually checked - abstract-level checks, official pages, or full-text reads - and file availability is tracked separately from reading status. This is a curated reference library rather than a systematic review: the reference layer was rebuilt from a staged source pack whose retrieval receipts are kept with the build. The journal set includes reviews, guidelines and one editorial, so each record states its own `study_type` rather than claiming uniform peer review.

Source records separate what the checked abstract reports from the analyst's own methodological cautions, and topics label any link into those cautions as AI synthesis. Where a mechanism still has no verified source, the note says so and points to the advanced queue instead of filling the gap.

## Reference encyclopedia

[[Research Atlas]] maps fifteen domains to canonical concept articles, [[Reference Index]] carries the dynamic A-Z, domain, condition and evidence routes plus the cross-domain relationship register, and `Reference Index.base` renders the same notes as native tables. The learning material below remains the slower route through the same library.

**Condition hubs**

- [[Bipolar I Map]] - mania-defined course, phase-specific treatment evidence, dopamine and genomic findings, imaging limits.
- [[ADHD Map]] - lifespan course, prefrontal catecholamines, medication and CBT evidence, measurement problems.
- [[Autism Map]] - heterogeneity, rare variants, support and services, adult evidence gaps.
- [[CPTSD Map]] - ICD-11 construct, classification differences, phase-based therapy evidence, biological evidence limits.

**Foundation hubs**

- [[Neurobiology Map]] - cells, membranes, spikes, synapses, networks, genes.
- [[Neurochemistry Map]] - signalling basics, transmitters, balance, stress and sleep systems.
- [[Psychology Map]] - attention, learning, memory, regulation, therapy evidence.
- [[Pharmacology Map]] - exposure, action, safety, trial logic, applied medication evidence.
- [[Neurology Map]] - organization, examination, measurement, honest interpretation.

**Six further domain hubs** complete the reference taxonomy:
- [[Neuroanatomy and Systems Neuroscience Map]]
- [[Genetics and Neurodevelopment Map]]
- [[Neuroendocrinology and Neuroimmunology Map]]
- [[Computational Neuroscience and Brain Theories Map]]
- [[Clinical Psychiatry and Psychopathology Map]]
- [[Research Methods and Measurement Map]]

- [[Research Atlas]] - collects all fifteen.

## Start with research literacy

These five notes make the rest of the library readable. They explain designs, bias, populations, prediction and how to treat guideline summaries.

- [[Evidence types and causal inference]]
- [[Bias and confounding]]
- [[Reading a study and matching populations]]
- [[Association versus individual prediction]]
- [[Reviews, guidelines and preprints]]

## How to study here

1. [[Learning Path]] sequences the material from research literacy through cells and circuits to conditions.
2. [[Workflow]] shows the source to claim to topic to argument method, with a working PDF page link and block transclusion.
3. [[Study session template]] is the note format for a working session.

Templates: [[Source template]], [[Topic template]], [[Argument template]], [[Study session template]].

## Learning layer

The detailed curriculum sits under `Learning/` and keeps the atomic notes as the evidence layer.

- [[Learning Hub]] - entry point: how to use the layer, the ten modules and the study loop.
- [[Module 01 - Research Methods and Evidence Literacy|Research Methods]] - start here; then the nine field and condition modules.
- [[Learning Dashboard]] - Dataview views for lessons, modules, prerequisites and coverage.
- [[Learning Library.base]] - native Base views over the learning layer.
- [[Learning Coverage Matrix]] - every topic, its lesson, sources and open questions.
- [[Glossary]] and [[Practice and Synthesis Exercises]] - terminology, claim tracing and worked reasoning practice.

## Starter research questions

- [[Argument - Is chemical imbalance a useful explanation]]
- [[Argument - Does ADHD medication change long-term outcomes]]
- [[Argument - Does trauma therapy need a stabilization phase]]

These are AI-generated starter questions with competing explanations, not claims about any person.

## Visualization layer

- [[Visualizations]] - the visual index: which view answers which question, the graph-view legend, live charts, the domain-connection diagram, and the dashboards for queue, access, verification, source kind, condition, domain, topic and argument coverage.
- Graph views - saved under **Bookmarks → Graph views**: knowledge map, concept skeleton, domain hierarchy, evidence quality, concept kinds, one close-up per domain family, learning layer and arguments.
- Domain canvases - one per domain, beside its map, starting with [[Neurobiology Canvas.canvas]].
- [[Research Synthesis Map.canvas]] - the full condition, foundation and argument landscape.
- [[Reference Atlas.canvas]] - how the fifteen reference domains connect.
- [[Reading Queue Map.canvas]] - strategic queue rules and access interpretation.
- Learning maps - one canvas per module in `Learning/Maps/`, starting with [[Learning Map - Research Methods.canvas]].
- Argument maps - one canvas beside each starter question in `Arguments/`.
- [[Evidence Map Template.canvas]], [[Argument Map Template.canvas]] and [[Topic System Template.canvas]] - reusable synthesis canvases.

## Article library

See [[Library]] for what each view is for and how to read the columns.

![[Library.base]]

## Folders

| Folder | Holds |
| --- | --- |
| `Hubs/` | entry and index notes: Research Atlas, Reference Index, Library and Workflow |
| `Domains/` | the fifteen domains in atlas order; each holds its map and canvas, one folder per subdomain with its index note and topic notes, and `Articles/` and `Pages/` for the source records filed under that domain |
| `Visualizations/` | the visual index, dashboards and Bases, and the landscape canvases |
| `Learning/` | modules, lessons, learning maps and study aids |
| `Arguments/` | questions and evidence needs, kept separate from findings, with their argument maps |
| `Templates/` | source, topic, argument and study-session templates plus the canvas templates |
| `Support/` | downloaded attachments and their provenance |
