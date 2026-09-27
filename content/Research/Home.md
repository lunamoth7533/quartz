---
note_type: hub
title: Research Home
description: "The front door: five ways in, the fifteen domain maps in five families, recent research and open questions."
cssclasses: [research-hub]
tags: [research/home]
---

# Research Home

A connected library for learning how **bipolar I and II, ADHD, autism and complex PTSD** relate to the brain and mind science underneath them. Concepts link to each other with a reason for every link, lessons teach them in order, and every factual sentence points at the evidence behind it.

> [!warning] Educational library, not clinical advice
> Nothing here is a diagnosis, a dose, a titration or a substitute for clinical care.

## Five ways in

| I want to… | Start at |
| --- | --- |
| **Learn** it in order | [[Learning Path]] - eight stages, fifteen modules, a lesson for every concept |
| **Explore** a field or condition | [[#Domain maps]] below - fifteen maps in five families |
| **Look up** a term or concept | [[Reference Index]] (A-Z, by kind, by condition) · [[Glossary]] |
| **Check the evidence** | [[Library]] - every paper and page, with what was checked |
| **Weigh an open question** | [[#Open questions]] below |

New here? Read [[How to use this vault]] first; it takes ten minutes and explains the note types, the study loop and the graph.

## Domain maps

Each map is a curated overview of one field: what it is about, its concepts grouped by theme, how it connects to the other fields, and where its evidence runs out.

**Biology and chemistry**
- [[Neurobiology Map]] - cells, membranes, spikes, synapses, plasticity and the cell biology of the nervous system.
- [[Neurochemistry Map]] - transmitter life cycles, receptor families, the signalling systems and why one-molecule stories fail.
- [[Neuroanatomy and Systems Neuroscience Map]] - regions, pathways and large-scale systems, from spinal cord to association cortex.
- [[Genetics and Neurodevelopment Map]] - inheritance, common and rare variants, polygenic scores and how the brain is built.
- [[Neuroendocrinology and Neuroimmunology Map]] - stress axes, autonomic control, circadian timing and immune signalling.

**Mind and computation**
- [[Psychology Map]] - perception, attention, learning, memory, emotion, social cognition and therapy models.
- [[Computational Neuroscience and Brain Theories Map]] - neural coding, reinforcement learning, predictive processing and theories of consciousness.

**Clinical and applied**
- [[Pharmacology Map]] - exposure and action, every major drug class (antidepressants, antipsychotics, mood stabilisers, sedatives, hypnotics and more), and how benefit and harm are measured.
- [[Neurology Map]] - examination, localisation, diagnostics and the main neurological conditions.
- [[Clinical Psychiatry and Psychopathology Map]] - classification, construct families, formulation and co-occurrence.

**The four conditions**
- [[Bipolar Disorders Map]] - bipolar I (mania) and bipolar II (hypomania), shared course and features, the leading hypotheses and phase-specific treatment evidence.
- [[ADHD Map]] - lifespan course, measurement, catecholamine and learning accounts, medication and psychological treatment evidence.
- [[Autism Map]] - heterogeneity, masking, double empathy, genetics, assessment in adults and support.
- [[CPTSD Map]] - the ICD-11 construct, trauma and memory mechanisms, and the treatment-sequencing debate.

**Method**
- [[Research Methods and Measurement Map]] - designs, measurement, inference, bias and research integrity: the tools for reading everything else.

Relationships between domains are stated in the concept notes themselves; the curated register is in [[Reference Index#Relationship register|the reference index]], and [[Reference Atlas.canvas|Reference Atlas]] draws the domains as one picture.

## Bridges between the conditions

The four conditions share more than their maps suggest. These concepts cut across them, each with the evidence for what is shared and what is not:

- [[Emotion dysregulation across conditions]] - one dimension measured in ADHD, bipolar disorders, autism and complex PTSD, and why similar scores need not mean a shared mechanism.
- [[Sleep and circadian disruption across conditions]] - sleep loss before mania, delayed sleep phase in ADHD, insomnia in autism, nightmares after trauma: cause, consequence or shared vulnerability.
- [[Trauma and PTSD in autistic and ADHD people]] - higher exposure, harder assessment, and what adapting trauma treatment involves.
- [[Alexithymia]] - difficulty naming one's own feelings, and how much of the autism and trauma findings it explains.
- [[Co-occurrence and differential reasoning]] - how overlapping features are told apart, and why co-occurrence is the rule rather than the exception.

Condition-specific additions: [[Autistic burnout]] · [[Predictive processing accounts of autism]] · [[Mood monitoring and early warning signs in bipolar disorder]].

## Start with research literacy

These five concepts make the rest of the library readable:

- [[Evidence types and causal inference]] · [[Bias and confounding]] · [[Reading a study and matching populations]] · [[Association versus individual prediction]] · [[Reviews, guidelines and preprints]]

## Recent research

Papers from 2023 onward, linked into the concepts they update. Each source note says what was checked; all are queued, none marked read.

```dataview
TABLE WITHOUT ID file.link AS "Paper", year AS "Year", study_type AS "Design", file.inlinks AS "Linked from"
FROM #research/recent
WHERE note_type = "source"
SORT year DESC, file.name ASC
LIMIT 25
```

The full list, with access and verification columns, is in [[Library#Recent research]].

## Open questions

Starter questions with competing explanations and the evidence each would need; they are not claims about any person.

- [[Argument - Is chemical imbalance a useful explanation]]
- [[Argument - Does ADHD medication change long-term outcomes]]
- [[Argument - Does trauma therapy need a stabilization phase]]

## Views

- [[Visualizations]] - dashboards and charts; the graph views are under **Bookmarks → Graph views**, and the global graph opens on the concept map.
- [[Research Synthesis Map.canvas|Research Synthesis Map]] - conditions, foundations and questions on one canvas.
- Each domain map has a canvas beside it, and each module has a learning map in `Learning/Maps/`.

## Library at a glance

```dataview
TABLE WITHOUT ID note_type AS "Note type", length(rows) AS "Notes"
FROM "Research"
WHERE note_type AND !contains(file.folder, "Templates")
GROUP BY note_type
SORT length(rows) DESC
```

## Where things live

| Folder | Holds |
| --- | --- |
| `Hubs/` | [[How to use this vault]], [[Reference Index]] (with its Base and relationship registers) and [[Library]] |
| `Domains/` | the fifteen domains; each holds its map and canvas, a folder per theme with the concept notes, and `Articles/` and `Pages/` for the sources filed under it |
| `Learning/` | [[Learning Path]], modules, lessons, study aids and learning-map canvases |
| `Arguments/` | open questions beside their argument maps |
| `Visualizations/` | [[Visualizations]], dashboard Bases and the landscape canvases |
| `Templates/` | note and canvas templates |
| `Support/` | downloaded attachments with provenance |
