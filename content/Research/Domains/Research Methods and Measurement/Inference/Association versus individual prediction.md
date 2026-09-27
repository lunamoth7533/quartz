---
note_type: topic
title: "Association versus individual prediction"
domain: [research-literacy]
condition: []
source_count: 13
up: "[[Research Methods and Measurement Map]]"
cssclasses: [research-topic]
tags: [research/topic, research/domain/research-literacy]
content_layer: reference
concept_kind: framework
description: "Why a group association and a useful individual prediction are different achievements, and what prediction additionally requires."
secondary_domain: []
reviewed: 2026-09-27
---

# Association versus individual prediction

**Definition.** Many findings in this library are group-level associations: statistical patterns across thousands of people that do not convert into a test or forecast for one person. [[P28461699 Hibar 2018 ENIGMA cortical abnormalities in bipolar disorder#^p28461699-caution-groups|Appraisal: ENIGMA cortical MRI findings in bipolar disorder]]

## Supported claims

- Genomic studies describe population risk architecture rather than individual prediction. [[P39843750 O'Connell 2025 Genomics of bipolar disorder#^p39843750-caution-prediction|Appraisal: Bipolar disorder genomics]]
- Group-level brain averages cannot establish causation or diagnose an individual. [[P28461699 Hibar 2018 ENIGMA cortical abnormalities in bipolar disorder#^p28461699-caution-groups|Appraisal: ENIGMA cortical MRI findings in bipolar disorder]]
- A risk gene does not determine a person's traits or support needs. [[P31981491 Satterstrom 2020 Autism exome sequencing#^p31981491-caution-risk|Appraisal: Autism exome sequencing study]]

## How it works

**Different questions.** An association describes how two variables covary in a sample; prediction asks how well a value can be estimated for a new individual. The first can be strong while the second is weak. [[P23997866 Sullivan 2012 Using effect size#^p23997866-magnitude|Using effect size]]

**What a group difference is.** A group-level average describes a sample, not a person: it cannot establish causation or diagnose an individual. The bipolar imaging literature makes this explicit - cortical thickness differences were detected across hundreds of participants and the same analysis notes that group averages do not diagnose anyone. The gap is not a statistical technicality; it is the difference between a distribution property and a case. [[P28461699 Hibar 2018 ENIGMA cortical abnormalities in bipolar disorder#^p28461699-caution-groups|Appraisal: ENIGMA cortical abnormalities in bipolar disorder]] [[P28461699 Hibar 2018 ENIGMA cortical abnormalities in bipolar disorder#^p28461699-thickness|ENIGMA cortical abnormalities in bipolar disorder]] Group differences in brain measures are routinely reported and rarely diagnostic for individuals; using them that way requires validated thresholds and prospective testing. [[F28 OpenStax Brain imaging Psychology 2e#^f28-caution-modality|Appraisal: Brain imaging]] [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-power|Neuroimaging reproducibility]]

**Why they diverge.** Individual outcomes depend on many influences, measurement is noisy, and overlap between groups is often large even when mean differences are reliable. [[F68 NHGRI Polygenic risk scores#^f68-limits|Polygenic risk scores]]

**Effect size and its reading.** Effect size is the magnitude of a difference; the absolute effect size is the raw difference and standardised indices express it in standard deviation units. Cohen's d conventions of 0.2, 0.5 and 0.8 are heuristics that ignore measurement accuracy and population diversity, so a standardised difference has to be translated back into the outcome's own units before it means anything to a person. [[P23997866 Sullivan 2012 Using effect size#^p23997866-magnitude|Using effect size]] [[P23997866 Sullivan 2012 Using effect size#^p23997866-example|Using effect size]]

**Absolute risk and base rates.** Absolute risk reduction is the risk difference and must be read against baseline risk: a halving of a rare risk changes far fewer people than the same relative reduction of a common one. Relative risk reduction is the absolute reduction divided by baseline risk, which is why relative figures look larger. For the same reason, even an accurate test changes the probability of an outcome modestly when the outcome is uncommon, so predictive value depends on prevalence as well as on effect size. [[P26952180 Ranganathan 2016 Absolute and relative risk#^p26952180-arr|Absolute and relative risk]]

**Prediction requires calibration and a decision.** A polygenic score aggregates many small variant associations into one number; it is a population statistic built from specific study samples, and its meaning can shift across ancestry groups and study designs. Turning it into a statement about a person requires calibration and validation in a comparable population, evidence that acting on it improves decisions, and a pathway that can act - none of which the association literature supplies. [[F68 NHGRI Polygenic risk scores#^f68-definition|Polygenic risk scores]] [[F68 NHGRI Polygenic risk scores#^f68-limits|Polygenic risk scores]] [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-caution-individual|Appraisal: 10 years of GWAS discovery]] [[P39843750 O'Connell 2025 Genomics of bipolar disorder#^p39843750-caution-prediction|Appraisal: Genomics of bipolar disorder]]

**Low power inflates what gets published.** Low statistical power exaggerates effect sizes in published brain-behaviour correlations, so the published association is usually larger than the true one and the naive prediction built from it will be over-confident. Proposed responses include data and code sharing, preregistration, larger samples and multiverse analyses. [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-power|Neuroimaging reproducibility]] [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-practice|Neuroimaging reproducibility]]

**Measurement is a precondition.** Predicting an outcome from a measure assumes the measure means the same thing in the target population, and scale development runs through explicit phases of content validity, construction and evaluation. An instrument validated in one population can lose its properties when moved. [[P29942800 Boateng 2018 Developing and validating scales#^p29942800-phases|Developing and validating scales]] [[P29942800 Boateng 2018 Developing and validating scales#^p29942800-caution-score|Appraisal: Developing and validating scales]] [[P27942093 Putnick 2016 Measurement invariance#^p27942093-practice|Measurement invariance]]

**Practical rule.** Ask what the measure adds to information already available for that person, because incremental value - not statistical significance - is what prediction requires. [[P29942800 Boateng 2018 Developing and validating scales#^p29942800-phases|Developing and validating scales]]

**Cross-domain connection (curation).** This distinction is the structural constraint that every condition-domain biological finding in this library runs through - group-level ENIGMA and GWAS signals describe populations, not patients, and reading them otherwise is exactly the rung-error the genetics and imaging domains both warn against. [[Genetic inference and polygenic scores]] [[Interpreting group brain differences]]

## Limitation or common misconception

A real group signal can answer a group question and still say nothing about the individual in front of you.

## Recent research

- **2024 · Resampling simulation study (Nature Human Behaviour).** Externally validating a brain-based prediction of a small or medium effect needed hundreds to thousands of people in both the training and the external sample, and most earlier external validations were underpowered, which adds a sample-size requirement to the validation step described above. [[P39085406 Rosenblatt 2024 Power in external validation#^p39085406-power|Rosenblatt 2024]] [[P39085406 Rosenblatt 2024 Power in external validation#^p39085406-prior|Rosenblatt 2024]] Adequate power to confirm generalisation still says nothing about calibration or decision value for one person. [[P39085406 Rosenblatt 2024 Power in external validation#^p39085406-caution-generalise|Appraisal: Rosenblatt 2024]]
- **2024 · Case-control MRI cohort with machine learning (JAMA Psychiatry).** In 1801 adults, roughly 4 million models using structural, functional and diffusion MRI and a polygenic score classified depression versus control at 48-62% accuracy, and integrating modalities did not help. [[P38198165 Winter 2024 Machine learning biomarkers for depression#^p38198165-accuracy|Winter 2024]] [[P38198165 Winter 2024 Machine learning biomarkers for depression#^p38198165-integration|Winter 2024]] This confirms the account above at scale: extensive multivariate modelling did not turn group differences into an individual-level marker. [[P38198165 Winter 2024 Machine learning biomarkers for depression#^p38198165-conclusion|Winter 2024]] [[P38198165 Winter 2024 Machine learning biomarkers for depression#^p38198165-caution-null|Appraisal: Winter 2024]]

## Connections

- [[Genes, environment and polygenic risk]] - the methods behind polygenic scores; it shows how the population statistics this note warns against individualising are built from genome-wide association.
- [[Bipolar genetics and polygenic risk]] - an applied case: bipolar risk architecture is polygenic and statistical, describing populations rather than supporting diagnosis or personal prediction.
- [[Interpreting group brain differences]] - the imaging instance of the same gap: reliable case-control differences whose overlapping distributions cannot classify individuals.
- [[Effect sizes and uncertainty]] - supplies the effect-size vocabulary; a standardised difference must be translated into absolute terms and base rates before its meaning for a person can be judged.
- [[Neuroimaging methods]] - the modality-level account of why small-sample brain-behaviour correlations are unstable and inflated, which limits any brain-based individual prediction built on them.
- [[Suicide and self-harm]] - the clinical case where the gap is starkest: raised group risk across conditions, yet risk factors predict individual outcomes only slightly better than chance.
- [[Adverse childhood experiences]] - an applied case outside biology: ACE scores forecast group differences in later health yet discriminate between individuals barely better than chance.

## Study question

Where would an individual-level claim need prospective prediction to be tested, and why is a group association insufficient?

## Detailed lesson

- [[Lesson - Association versus individual prediction]] - full lesson with a plain-language model, worked example, misconceptions, source boundaries and practice questions.
- Module: [[Module 01 - Research Methods and Evidence Literacy|Research Methods and Evidence Literacy]]
