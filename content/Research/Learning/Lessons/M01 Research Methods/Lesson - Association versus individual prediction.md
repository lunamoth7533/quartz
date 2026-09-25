---
note_type: lesson
title: "Association versus individual prediction"
module: "m01"
module_title: "Research Methods and Evidence Literacy"
lesson_order: 4
domain: [research-literacy]
condition: []
prerequisites: ["Reading a study and matching populations"]
sources: ["P28461699", "P39843750", "P31981491"]
source_count: 3
question_count: 4
word_count: 741
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m01]
---

# Association versus individual prediction

**Module.** M01 Research Methods and Evidence Literacy · **Topic.** [[Association versus individual prediction]]

## Why this matters

The gap between "this is true on average" and "this tells me about you" is where a great deal of harm is done,
in both directions: group findings get read as personal verdicts, and real group findings get dismissed because
they do not diagnose. Learning to hold both is a core skill of this vault.

## The core model

Group-level averages describe samples. In the ENIGMA imaging analysis of 6503 individuals, cortical thickness
differed on average between people with bipolar disorder and controls; that comparison cannot establish
causation and cannot diagnose an individual, because the distributions overlap and the study was never
calibrated as a personal test.
[[P28461699 Hibar 2018 ENIGMA cortical abnormalities in bipolar disorder#^p28461699-caution-groups|AI synthesis: ENIGMA cortical MRI findings in bipolar disorder]]

Genomic findings have the same structure. A multi-ancestry bipolar analysis identified hundreds of loci, and
its risk architecture is statistical: it describes populations rather than predicting an individual's course.
[[P39843750 O'Connell 2025 Genomics of bipolar disorder#^p39843750-caution-prediction|AI synthesis: Bipolar disorder genomics]]

Autism exome findings add the developmental version: a risk gene does not determine a person's traits or
support needs.
[[P31981491 Satterstrom 2020 Autism exome sequencing#^p31981491-caution-risk|AI synthesis: Autism exome sequencing study]]

Individual prediction is a separate technical claim. It requires a model fitted and calibrated in a comparable
population, a decision threshold with established consequences, and validation in people who were not part of
the discovery sample. Almost nothing in this vault has been evaluated that way, and where it has not, the
correct sentence keeps the word "average" and the phrase "in the studied sample".

## Worked example (hypothetical)

This scenario is invented for practice. A friend reads that people with a certain condition have, on average,
a thinner cortex in one region, and asks whether their own scan shows it.

A single scan is a measurement with error, and the study finding is a difference between group means with
overlapping distributions. Even if the average difference is statistically robust, the overlap means many
people in each group sit on the same side of the boundary. Turning that into an individual test needs a
validated classifier, a threshold, sensitivity and specificity estimates, and evidence about what a positive
result would change in care.

The honest answer: "That scan cannot answer your question, and the study does not claim it can. The finding
describes a group difference with medication and illness-duration confounds."

## Common confusions

- "Statistically strong means strong for each person." Statistical strength is about certainty in the group
  estimate, not about individual accuracy.
- "No individual use" means "the finding is useless": group findings drive research questions, mechanism
  hypotheses and policy, and they constrain what cannot claim to be a personal prediction.
- "A high score means high risk." Without calibration, a score's position in a distribution carries no defined
  personal probability.

## What the sources do not establish

None of these sources offers a clinical decision rule, and none reports individual-level sensitivity and
specificity for the measures discussed. The vault therefore treats every such finding as group-level only, and
records the transfer gap as an open question in the coverage matrix.

## Check yourself

1. Why does overlap between two group distributions block individual prediction even when the group difference
   is significant?
2. What three things does an individual prediction require beyond a group association?
3. Write the group-appropriate version of "this gene causes autism".
4. Where would you look in this vault for a claim that is being overextended to individuals?

## Answer notes

1. Because significance describes the group estimate's precision, not the separation of individuals; with
   overlap, many members of each group fall on the other group's side of the average.
2. A calibrated model in a comparable population, a validated decision threshold, and external validation with
   evidence about the consequences of using it.
3. Something like "variants in this gene contribute to population-level risk in the studied samples; they do
   not determine an individual's traits or support needs".
4. In the AI-synthesis cautions of the source notes, and in the lessons that cite them; the coverage matrix
   lists the same gap at topic level.

## Next steps

- Continue to [[Lesson - Reviews, guidelines and preprints]] for the layer above individual studies.
- Return to [[Brain regions and networks]] and [[Interpreting group brain differences]] for the imaging case.
