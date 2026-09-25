---
note_type: lesson
title: "MRI versus EEG"
module: "m06"
module_title: "Neurology"
lesson_order: 4
domain: [neurology]
condition: []
prerequisites: ["Structural versus functional measures"]
sources: ["F15", "F28", "P28461699"]
source_count: 3
question_count: 3
word_count: 690
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m06]
---

# MRI versus EEG

**Module.** M06 Neurology · **Topic.** [[MRI versus EEG]]

## Why this matters

MRI and EEG are the two workhorses of clinical neuroscience, and they are usually compared as if one were
better. The honest comparison is a trade: spatial detail against temporal detail. Choosing between them is
choosing which question you accept not answering.

## The core model

The three modalities are easiest to keep apart as three different measurements rather than three rival tests.

| Modality | What it measures | Strength | Limit |
| --- | --- | --- | --- |
| Structural MRI | Magnetic properties of tissue, reconstructed as anatomy | Spatial detail of structure | No timing, and no direct measure of activity |
| Functional MRI | Blood flow and oxygen levels tracked over time (haemodynamic) | Spatial detail about activity-related change | Seconds-scale timing and an indirect signal |
| EEG | Summed electrical activity recorded at the scalp | Millisecond timing | Coarse spatial localisation |

The NINDS overview treats imaging and EEG as different modalities that measure different things.
[[F15 NINDS Neurological diagnostic tests and procedures#^f15-modalities|Neurological Diagnostic Tests and Procedures]]

The row detail comes from the checked OpenStax section: MRI reconstructs anatomy from magnetic signals, fMRI
tracks blood flow and oxygen over time, and EEG records electrical activity with millisecond accuracy but
without fine spatial localisation.
[[F28 OpenStax Brain imaging Psychology 2e#^f28-mri|Brain Imaging (Psychology 2e, section 3.4)]];
[[F28 OpenStax Brain imaging Psychology 2e#^f28-fmri|Brain Imaging (Psychology 2e, section 3.4)]];
[[F28 OpenStax Brain imaging Psychology 2e#^f28-eeg|Brain Imaging (Psychology 2e, section 3.4)]]

The practical trade follows from the rows. A structural finding, such as a group difference in cortical
thickness, describes anatomy and says nothing directly about circuit dynamics; an fMRI difference describes an
activity-related haemodynamic signal rather than electrical activity; and an EEG difference carries timing
without precise localisation.
[[P28461699 Hibar 2018 ENIGMA cortical abnormalities in bipolar disorder#^p28461699-thickness|ENIGMA cortical MRI findings in bipolar disorder]]

## Worked example (hypothetical)

This scenario is invented for practice. A research question asks whether a particular cognitive process
involves early activity in one region followed by activity in another.

Answer with a design rather than a modality. EEG alone can establish the timing of signal changes and not the
precise source. Structural MRI alone gives anatomy and no timing. Functional MRI gives a spatial map with
seconds of resolution, which may be too coarse for the proposed sequence. A combined approach — EEG for timing,
fMRI or source modelling for spatial hypotheses — is the design that matches the question, with the caveat that
the two signals sample different things and can disagree without either being wrong.

The lesson: modality choice follows from the resolution the question requires.

## Common confusions

- "EEG measures activity and MRI measures structure." Both can measure activity-related quantities; the
  difference is what they sample and their resolution.
- "fMRI measures electrical activity." It measures a blood-flow-related signal that correlates with activity.
- "Unexpected disagreement means error." Different modalities sample different processes; agreement is
  evidence, not a requirement.

## What the sources do not establish

The overview describes modality categories at a general level; it does not cover sensitivity, source
localisation, artefact handling or clinical thresholds. This vault holds no source that validates either
modality for diagnosing the conditions it covers.

## Check yourself

1. State the resolution trade between structural MRI and EEG.
2. What does fMRI sample, and how does that limit timing claims?
3. Which modality would you combine with a structural scan to study timing, and what would you lose?

## Answer notes

1. Structural MRI gives anatomy from magnetic tissue properties; fMRI gives an indirect haemodynamic signal
   with seconds-scale timing; EEG gives electrical activity with millisecond timing and coarse spatial
   localisation.
2. Blood flow and oxygen levels; the slow haemodynamic time course limits fine ordering of events.
3. EEG, because of its timing; you lose spatial precision, which then needs a model or a second modality.

## Next steps

- Continue to [[Lesson - Interpreting group brain differences]].
- Keep this comparison for [[Bipolar MRI findings and their limits]] in Module 07.
