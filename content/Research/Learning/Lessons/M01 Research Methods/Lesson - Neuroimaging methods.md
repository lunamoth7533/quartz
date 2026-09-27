---
note_type: lesson
title: "Neuroimaging methods"
module: "m01"
module_title: "Research Methods and Evidence Literacy"
lesson_order: 21
domain: [research-methods, neurology]
condition: []
prerequisites: ["Measurement validity and reliability", "Psychophysiology methods"]
sources: ["F28", "P28053326", "P28461699"]
source_count: 3
question_count: 4
word_count: 811
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m01]
---

# Neuroimaging methods

**Module.** M01 Research Methods and Evidence Literacy · **Topic.** [[Neuroimaging methods]]

## Why this matters

A brain scan looks like direct evidence in a way a questionnaire never does - which is precisely
why it needs the same sceptical checklist, and arguably more. Each imaging method estimates
something indirect, the analysis behind any image involves more researcher choices than most
readers realise, and a finding solid at the group level often says nothing reliable about one
person.

## The core model

The common methods measure different things. Structural imaging captures anatomy from how tissues
respond in a magnetic field. Functional imaging tracks blood flow and oxygen changes over seconds,
an indirect stand-in for neural activity, trading timing for spatial detail. Scalp electrical
recording captures summed activity with millisecond timing but coarse spatial information. [[F28 OpenStax Brain imaging Psychology 2e#^f28-mri|Brain imaging]]
[[F28 OpenStax Brain imaging Psychology 2e#^f28-fmri|Brain imaging]]
[[F28 OpenStax Brain imaging Psychology 2e#^f28-eeg|Brain imaging]] Because they measure different
physical quantities, disagreement between them is expected, not automatically an error, and
agreement does not by itself turn a method into something that can classify a person; a
multimodal claim still needs an explicit argument for what the methods share.
[[F28 OpenStax Brain imaging Psychology 2e#^f28-caution-modality|Appraisal: Brain imaging]]

The bigger problem sits upstream: turning raw data into a result involves many defensible choices
- cleaning, modelling, which comparisons to run - and different reasonable choices on the same
data can produce different conclusions, a central reason neuroimaging findings have struggled to
replicate.
[[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-flexibility|Neuroimaging reproducibility]]
Sample size compounds this: brain-behaviour correlations from small samples are unstable, and low
power inflates the effect sizes that reach publication, since only studies finding a large effect
by chance clear the bar to be reported. Proposed responses include sharing data and code,
preregistering analyses, and testing whether a result survives different reasonable choices.
[[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-power|Neuroimaging reproducibility]]

Even a reliable, well-powered group finding is a different claim from an individual one. A large
multi-site analysis of a structural measure across a psychiatric population and matched controls
can detect a real average difference while being explicit that a group average describes the
sample and cannot, alone, diagnose or predict for one person in it.
[[P28461699 Hibar 2018 ENIGMA cortical abnormalities in bipolar disorder#^p28461699-caution-groups|Appraisal: ENIGMA cortical abnormalities in bipolar disorder]]

## Worked example (hypothetical)

This scenario is invented for practice. A study scans 25 volunteers and reports a correlation
between activity in one brain region and memory-task scores, calling it a "brain marker" of memory
ability. Ask about modality: how many analytic choices sat between raw scan and reported
correlation, since a different pipeline might give a different result. Ask about power: 25
participants is exactly the sample size known to produce unstable brain-behaviour correlations,
where a striking effect is more likely inflated than precise. Ask about level: even a replicated
correlation would describe a group pattern, not one person's memory ability.

The defensible summary is narrow: activity correlated with scores under this pipeline in this
sample; whether it replicates, and whether it says anything about one individual, remain open.

## Common confusions

- "A brain scan is direct evidence of what's happening mentally." Every imaging method is an
  indirect, physically specific measure, several steps from a psychological claim.
- "Agreement between two imaging methods proves a finding." It is informative, but still needs an
  explicit account of what the methods share.
- "A reliable group-level brain difference can predict for one person." Group averages and
  individual prediction are different claims with different evidence requirements.

## What the sources do not establish

The reproducibility literature describes research practices generally, not any single finding
here; whether a specific result suffered from analytic flexibility must be checked against that
study's methods. A group-level finding does not establish what caused a difference or whether it
would classify an individual.

## Check yourself

1. Name the three physical quantities that structural imaging, functional imaging and scalp
   electrical recording each measure.
2. Why is disagreement between two imaging modalities not automatically evidence that one of them
   is wrong?
3. What specific problem does small sample size create for brain-behaviour correlations?
4. Why can a reliable group-level brain difference still fail to classify an individual person?

## Answer notes

1. Magnetic tissue properties, blood flow and oxygen changes, and summed electrical activity.
2. The methods measure genuinely different quantities, so their relationship must be argued for
   rather than assumed.
3. Unstable estimates, with low power inflating the effect sizes that reach publication.
4. A group average describes the sample as a whole and does not supply individual-level accuracy.

## Next steps

- Continue to [[Lesson - Replication and publication bias]] for the wider pattern behind the
  reproducibility problem raised here.
- Revisit [[Effect sizes and uncertainty]] to connect small-sample effect inflation back to the
  general estimation lesson.
