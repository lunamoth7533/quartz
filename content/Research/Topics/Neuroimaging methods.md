---
note_type: topic
title: "Neuroimaging methods"
description: "What structural, functional and diffusion imaging measure, and the specific inference problems each carries."
content_layer: reference
concept_kind: method
domain: [research-methods, neurology]
secondary_domain: []
condition: []
source_count: 5
reviewed: 2026-09-25
cssclasses: [research-topic]
tags: [research/topic, research/reference, research/domain/methods, research/domain/neurology]
---
# Neuroimaging methods

## Definition

Neuroimaging methods estimate properties of brain tissue and activity indirectly. Structural MRI images anatomy, functional MRI measures activity-related haemodynamic change, diffusion imaging estimates white-matter microstructure, and EEG records summed electrical activity.

## How it works

**Signals.** Structural MRI depends on magnetic properties of tissue; functional MRI tracks blood oxygenation and flow over seconds; EEG has millisecond resolution but limited spatial precision. [[F28 OpenStax Brain imaging Psychology 2e#^f28-mri|Brain imaging]] [[F28 OpenStax Brain imaging Psychology 2e#^f28-fmri|Brain imaging]] [[F28 OpenStax Brain imaging Psychology 2e#^f28-eeg|Brain imaging]]

**Different quantities.** The three modalities measure different things - tissue properties, haemodynamics and summed electrical activity - so agreement between them is informative and disagreement is expected. [[F28 OpenStax Brain imaging Psychology 2e#^f28-caution-modality|AI appraisal: Brain imaging]]

**Analysis flexibility.** Preprocessing and modelling involve many defensible choices, and this flexibility is a central source of irreproducibility in the field. [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-flexibility|Neuroimaging reproducibility]]

**Power and effect size.** Brain-behaviour correlations in small samples are unstable and typically exaggerate effects, which is why large samples and preregistration are now recommended. [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-power|Neuroimaging reproducibility]] [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-practice|Neuroimaging reproducibility]]

## Evidence and status

Modality physics are well established; group-level findings are reproducible with adequate samples, and individual-level prediction is generally not validated. [[P28461699 Hibar 2018 ENIGMA cortical abnormalities in bipolar disorder#^p28461699-caution-groups|AI appraisal: ENIGMA cortical abnormalities in bipolar disorder]]

> [!info]- In depth: three modalities, three quantities, one shared reproducibility problem
> **What each modality measures.** Structural MRI images anatomy: hydrogen atoms in tissues of different densities emit different signals in a magnetic field, and a computer reconstructs the image. Functional MRI tracks blood flow and oxygen levels over time, giving an activity-related haemodynamic signal with more spatial detail than earlier activity methods. EEG measures electrical activity through scalp electrodes, reporting frequency and amplitude with accuracy within milliseconds but without fine spatial localisation. [[F28 OpenStax Brain imaging Psychology 2e#^f28-mri|Brain Imaging]] [[F28 OpenStax Brain imaging Psychology 2e#^f28-fmri|Brain Imaging]] [[F28 OpenStax Brain imaging Psychology 2e#^f28-eeg|Brain Imaging]]
>
> **Disagreement between modalities is not automatically error.** The three measure different quantities - magnetic tissue properties, haemodynamic change and summed electrical activity - so disagreement is not automatically error and agreement does not make any one of them a clinical classifier. That statement is the reason a multimodal finding needs an argument about what the signals have in common, not just a replication across modalities. [[F28 OpenStax Brain imaging Psychology 2e#^f28-caution-modality|AI appraisal: Brain Imaging]] [[F28 OpenStax Brain imaging Psychology 2e#^f28-limit|Brain Imaging]]
>
> **Analytic flexibility is the central reproducibility problem.** Many defensible choices in preprocessing and modelling produce different maps from the same data, and low statistical power exaggerates effect sizes in published brain-behaviour correlations. Proposed responses include data and code sharing, preregistration, larger samples and multiverse or specification-curve analyses; the review concerns research practice and makes no claims about any disorder. [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-flexibility|Neuroimaging reproducibility]] [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-power|Neuroimaging reproducibility]] [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-practice|Neuroimaging reproducibility]] [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-limit|Neuroimaging reproducibility]]
>
> **Group maps are not individual tests.** A large consortium analysis can detect a reliable average difference and still be unable to classify an individual; the ENIGMA bipolar analysis states that group-level averages describe a sample and cannot establish causation or diagnose an individual, and it reports that medication and illness duration were associated with the measures it studied. [[P28461699 Hibar 2018 ENIGMA cortical abnormalities in bipolar disorder#^p28461699-caution-groups|AI appraisal: ENIGMA cortical abnormalities in bipolar disorder]] [[P28461699 Hibar 2018 ENIGMA cortical abnormalities in bipolar disorder#^p28461699-medication|ENIGMA cortical abnormalities in bipolar disorder]]
>
> **Reading rule.** For an imaging claim, name the modality, the contrast, the analysis pipeline's degrees of freedom, the sample, and whether the claim is descriptive or individual-level. The reliability literature is the reason those questions come before the finding. [[P26315443 Open Science Collaboration 2015 Reproducibility#^p26315443-result|Reproducibility in psychology]] [[F15 NINDS Neurological diagnostic tests and procedures#^f15-caution-modality|AI appraisal: Neurological diagnostic tests]]

> [!info]- Further depth: three quantities and one shared problem
> Structural MRI images anatomy from magnetic tissue properties, functional MRI tracks a haemodynamic signal with better spatial detail and slower timing, and EEG reports summed electrical activity with millisecond accuracy and poor spatial localisation; because they measure different quantities, disagreement is not automatically error and agreement does not make any of them a classifier. Analytic flexibility and low power remain the field's central reproducibility problems, and group maps cannot classify individuals. [[F28 OpenStax Brain imaging Psychology 2e#^f28-mri|Brain Imaging]] [[F28 OpenStax Brain imaging Psychology 2e#^f28-fmri|Brain Imaging]] [[F28 OpenStax Brain imaging Psychology 2e#^f28-eeg|Brain Imaging]] [[F28 OpenStax Brain imaging Psychology 2e#^f28-caution-modality|AI appraisal: Brain Imaging]] [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-flexibility|Neuroimaging reproducibility]] [[P28461699 Hibar 2018 ENIGMA cortical abnormalities in bipolar disorder#^p28461699-caution-groups|AI appraisal: ENIGMA cortical abnormalities in bipolar disorder]]

## Connections

This is the applied counterpart to [[Neuroanatomical methods]] and the methodological basis for [[Interpreting group brain differences]] and [[Bipolar MRI findings and their limits]].

## Uncertainties

- None of these methods measures neuronal firing directly in humans, so mechanism claims require bridging assumptions.
