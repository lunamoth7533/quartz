---
note_type: topic
title: "Neuroimaging methods"
description: "What structural, functional and diffusion imaging measure, and the specific inference problems each carries."
content_layer: reference
concept_kind: method
domain: [research-methods, neurology]
secondary_domain: []
condition: []
source_count: 7
reviewed: 2026-09-27
up: "[[Research Methods and Measurement Map]]"
cssclasses: [research-topic]
tags: [research/topic, research/reference, research/domain/methods, research/domain/neurology]
---
# Neuroimaging methods

## Definition

Neuroimaging methods estimate properties of brain tissue and activity indirectly. Structural MRI images anatomy, functional MRI measures activity-related haemodynamic change, diffusion imaging estimates white-matter microstructure, and EEG records summed electrical activity.

## How it works

**What each modality measures.** Structural MRI images anatomy from magnetic tissue properties: hydrogen atoms in tissues of different densities emit different signals in a magnetic field, and a computer reconstructs the image. Functional MRI tracks blood flow and oxygen levels over seconds, giving an activity-related haemodynamic signal with more spatial detail than earlier activity methods but slower timing. EEG measures summed electrical activity through scalp electrodes, reporting frequency and amplitude with accuracy within milliseconds but without fine spatial localisation. [[F28 OpenStax Brain imaging Psychology 2e#^f28-mri|Brain imaging]] [[F28 OpenStax Brain imaging Psychology 2e#^f28-fmri|Brain imaging]] [[F28 OpenStax Brain imaging Psychology 2e#^f28-eeg|Brain imaging]]

**Different quantities, so disagreement is not automatically error.** The three modalities measure different things - magnetic tissue properties, haemodynamic change and summed electrical activity - so agreement between them is informative, disagreement is expected rather than automatically error, and agreement does not make any one of them a clinical classifier. That is the reason a multimodal finding needs an argument about what the signals have in common, not just a replication across modalities. [[F28 OpenStax Brain imaging Psychology 2e#^f28-caution-modality|Appraisal: Brain imaging]] [[F28 OpenStax Brain imaging Psychology 2e#^f28-limit|Brain imaging]]

**Analytic flexibility is the central reproducibility problem.** Preprocessing and modelling involve many defensible choices that produce different maps from the same data, and this flexibility is a central source of irreproducibility in the field. [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-flexibility|Neuroimaging reproducibility]]

**Power and effect size.** Brain-behaviour correlations in small samples are unstable, and low statistical power exaggerates effect sizes in published brain-behaviour correlations. Proposed responses include data and code sharing, preregistration, larger samples and multiverse or specification-curve analyses; the review concerns research practice and makes no claims about any disorder. [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-power|Neuroimaging reproducibility]] [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-practice|Neuroimaging reproducibility]] [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-limit|Neuroimaging reproducibility]]

**Reading rule.** For an imaging claim, name the modality, the contrast, the analysis pipeline's degrees of freedom, the sample, and whether the claim is descriptive or individual-level. The reliability literature is the reason those questions come before the finding. [[P26315443 Open Science Collaboration 2015 Reproducibility#^p26315443-result|Reproducibility in psychology]] [[F15 NINDS Neurological diagnostic tests and procedures#^f15-caution-modality|Appraisal: Neurological diagnostic tests]]

## Evidence and status

Modality physics are well established; group-level findings are reproducible with adequate samples, and individual-level prediction is generally not validated. A large consortium analysis can detect a reliable average difference and still be unable to classify an individual: the ENIGMA bipolar analysis states that group-level averages describe a sample and cannot establish causation or diagnose an individual, and it reports that medication and illness duration were associated with the measures it studied. [[P28461699 Hibar 2018 ENIGMA cortical abnormalities in bipolar disorder#^p28461699-caution-groups|Appraisal: ENIGMA cortical abnormalities in bipolar disorder]] [[P28461699 Hibar 2018 ENIGMA cortical abnormalities in bipolar disorder#^p28461699-medication|ENIGMA cortical abnormalities in bipolar disorder]]

## Recent research

- **2025 · Model with empirical validation across fMRI datasets (Nature).** Across 76 phenotypes in nine fMRI datasets, individual-level prediction accuracy tracked total scan duration; sample size mattered more in the end, but scans of about 30 minutes were the most cost-effective, which adds scan length to sample size as a design lever. [[P40670782 Ooi 2025 Longer scans boost BWAS prediction#^p40670782-model|Ooi 2025]] [[P40670782 Ooi 2025 Longer scans boost BWAS prediction#^p40670782-tradeoff|Ooi 2025]] Better prediction of research phenotypes is not evidence of individual clinical accuracy. [[P40670782 Ooi 2025 Longer scans boost BWAS prediction#^p40670782-caution-prediction|Appraisal: Ooi 2025]]
- **2024 · Meta-analysis and reanalysis of MRI cohorts (Nature).** Across 63 MRI studies (77,695 scans), wider covariate spread and longitudinal designs gave larger standardised effects and better replicability, while longitudinal models that merge between- and within-person change lowered them, which extends the power problem above from sample size to study design. [[P39604734 Kang 2024 Study design and BWAS replicability#^p39604734-design|Kang 2024]] [[P39604734 Kang 2024 Study design and BWAS replicability#^p39604734-sampling|Kang 2024]] [[P39604734 Kang 2024 Study design and BWAS replicability#^p39604734-longitudinal|Kang 2024]] A larger standardised effect under an optimised design describes that sample, not a stronger link in any one person. [[P39604734 Kang 2024 Study design and BWAS replicability#^p39604734-caution-standardised|Appraisal: Kang 2024]]

## Connections

This is the applied counterpart to [[Neuroanatomical methods]] and the methodological basis for [[Interpreting group brain differences]] and [[Bipolar MRI findings and their limits]].

## Uncertainties

- None of these methods measures neuronal firing directly in humans, so mechanism claims require bridging assumptions.

## Detailed lesson

- [[Lesson - Neuroimaging methods]] - full lesson with a plain-language model, worked example, misconceptions, source boundaries and practice questions.
- Module: [[Module 01 - Research Methods and Evidence Literacy|Research Methods and Evidence Literacy]]
