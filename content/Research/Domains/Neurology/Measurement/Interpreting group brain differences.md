---
note_type: topic
title: "Interpreting group brain differences"
domain: [neurology]
condition: [bipolar-i]
source_count: 6
up: "[[Neurology Map]]"
cssclasses: [research-topic]
tags: [research/topic, research/domain/neurology, research/condition/bipolar-i]
content_layer: reference
concept_kind: method
description: "What group-average imaging findings establish, how medication and course confound them, and why they do not become individual tests."
secondary_domain: [research-methods]
reviewed: 2026-09-27
---

# Interpreting group brain differences

**Definition.** Psychiatric imaging studies usually compare group averages, so statistical differences must be separated from individual diagnosis or causation. [[P28461699 Hibar 2018 ENIGMA cortical abnormalities in bipolar disorder#^p28461699-caution-groups|Appraisal: ENIGMA cortical MRI findings in bipolar disorder]]

## Supported claims

- A 6503-person analysis found thinner cortex in frontal, temporal and parietal regions in bipolar disorder. [[P28461699 Hibar 2018 ENIGMA cortical abnormalities in bipolar disorder#^p28461699-thickness|ENIGMA cortical MRI findings in bipolar disorder]]
- Medication exposure is entangled with the findings: lithium, antiepileptic and antipsychotic treatment showed associations with cortical measures. [[P28461699 Hibar 2018 ENIGMA cortical abnormalities in bipolar disorder#^p28461699-medication|ENIGMA cortical MRI findings in bipolar disorder]]
- Group averages cannot establish causation or provide an individual test. [[P28461699 Hibar 2018 ENIGMA cortical abnormalities in bipolar disorder#^p28461699-caution-groups|Appraisal: ENIGMA cortical MRI findings in bipolar disorder]]

## How it works

**What a group difference is.** Large consortium analyses estimate group-average cortical differences. The bipolar analysis found thinner cortex bilaterally in frontal, temporal and parietal regions, with the largest effects in named frontal and temporal areas - a reliable average difference in cortical thickness that still cannot support individual inference. [[P28461699 Hibar 2018 ENIGMA cortical abnormalities in bipolar disorder#^p28461699-thickness|ENIGMA cortical abnormalities in bipolar disorder]] Group-level averages describe a sample, not a person: they cannot establish causation or diagnose an individual, and do not provide an individual test. [[P28461699 Hibar 2018 ENIGMA cortical abnormalities in bipolar disorder#^p28461699-caution-groups|Appraisal: ENIGMA cortical abnormalities in bipolar disorder]]

**Confounds have to be examined rather than assumed.** In the same analysis, commonly prescribed drugs including lithium, antiepileptics and antipsychotics were associated with cortical measures even after accounting for multiple medications, longer illness duration was associated with reduced thickness, and reduced surface area was associated with a history of psychosis, so the difference is entangled with treatment and course. Those associations are part of the result, not nuisance to be waved away. [[P28461699 Hibar 2018 ENIGMA cortical abnormalities in bipolar disorder#^p28461699-medication|ENIGMA cortical abnormalities in bipolar disorder]] [[P28461699 Hibar 2018 ENIGMA cortical abnormalities in bipolar disorder#^p28461699-course|ENIGMA cortical abnormalities in bipolar disorder]]

**Effect size and classification power diverge.** A group difference large enough to be statistically robust at the sample level supports only weak individual classification, because the case and control distributions overlap: the difference of means can sit far from either distribution's decision boundary. This divergence is the quantitative core of why psychiatric imaging has many reliable group findings and no routine diagnostic test, and it is a property of distributions rather than a flaw of any study. A statistically robust group difference therefore does not imply a useful personal measurement; that gap is the subject of [[Association versus individual prediction]] and [[Structural versus functional measures]]. [[P28461699 Hibar 2018 ENIGMA cortical abnormalities in bipolar disorder#^p28461699-caution-groups|Appraisal: ENIGMA cortical abnormalities in bipolar disorder]]

**Reverse-inference claims need their own evidence.** From a detected difference to a condition attribution is a reverse-inference step - condition implies difference was observed, difference therefore implies condition - and it fails when the difference also occurs in other conditions and in some healthy people, which it typically does. The disciplined form states the base rates and shows the difference discriminates in the relevant comparison, not just that it is present. [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-flexibility|Neuroimaging reproducibility]] [[Evidence types and causal inference]]

**The methods literature sets the priors.** Imaging is indirect and analysis choices multiply: analytic flexibility - many defensible preprocessing and modelling choices - is a central source of irreproducibility, and low power exaggerates effect sizes in published brain-behaviour correlations, with data sharing, preregistration, larger samples and multiverse analyses proposed as responses. [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-flexibility|Neuroimaging reproducibility]] [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-power|Neuroimaging reproducibility]] [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-practice|Neuroimaging reproducibility]]

**Modalities measure different things.** Structural and functional measures answer different questions: the three families measure magnetic tissue properties, haemodynamic change and summed electrical activity, so disagreement between them is not automatically error and agreement does not make any one of them a classifier. A multimodal result needs an argument about what the signals share. [[F28 OpenStax Brain imaging Psychology 2e#^f28-caution-modality|Appraisal: Brain Imaging]] [[F28 OpenStax Brain imaging Psychology 2e#^f28-limit|Brain Imaging]]

**Reading rule.** Ask what the comparison was, which covariates were modelled, what the effect size is in interpretable units, and whether the claim is descriptive or individual. Most overstatement in this area happens at the last step. [[P23997866 Sullivan 2012 Using effect size#^p23997866-magnitude|Using effect size]] [[P28461699 Hibar 2018 ENIGMA cortical abnormalities in bipolar disorder#^p28461699-limit|ENIGMA cortical abnormalities in bipolar disorder]]

**Cross-domain connection (curation).** The genetics domain handles the same trap with polygenic scores - population statistic, individual ambiguity - so the imaging and genetics articles make one argument in two modalities, and both point at the individual-prediction article for the shared resolution. [[Genetic inference and polygenic scores]] [[Association versus individual prediction]]

## Limitation or common misconception

Effect sizes in imaging are small relative to individual variation, so a real group difference can still be useless as a personal measurement.

## Recent research

- **2024 · Case-control MRI cohort with machine learning (JAMA Psychiatry).** In 1801 adults, extensive multivariate models across MRI modalities and a polygenic score told depression from control at only 48-62% accuracy, a quantitative instance of the gap above between a robust group difference and individual classification. [[P38198165 Winter 2024 Machine learning biomarkers for depression#^p38198165-accuracy|Winter 2024]] [[P38198165 Winter 2024 Machine learning biomarkers for depression#^p38198165-conclusion|Winter 2024]] Near-chance classification does not mean the brain differences are absent. [[P38198165 Winter 2024 Machine learning biomarkers for depression#^p38198165-caution-null|Appraisal: Winter 2024]]
- **2023 · Case-control MRI study with normative modelling (Nature Neuroscience).** Across 1294 people with one of six diagnoses, including ADHD, autism and bipolar disorder, individual grey-matter deviations fell in the same region in fewer than 7% of people with the same diagnosis, though they converged on shared circuits and networks in up to 56%, which sharpens the group-average caution above. [[P37580620 Segal 2023 Heterogeneity of brain abnormalities#^p37580620-regional|Segal 2023]] [[P37580620 Segal 2023 Heterogeneity of brain abnormalities#^p37580620-circuits|Segal 2023]] A group-average map can therefore show a difference that few individuals share. [[P37580620 Segal 2023 Heterogeneity of brain abnormalities#^p37580620-caution-average|Appraisal: Segal 2023]]

## Connections

- [[Structural versus functional measures]] - the measurement-level distinction behind any imaging difference: structural and functional findings answer different questions, and neither becomes a diagnosis on its own.
- [[MRI versus EEG]] - the modality choice behind a group difference; each signal has its own physical basis and inference distance, which bounds what a difference can mean.
- [[Association versus individual prediction]] - the general argument this note applies to imaging: a robust group association is a different achievement from an accurate individual prediction.
- [[Neuroimaging methods]] - the methods layer: analytic flexibility and low power set the priors for how far a published group difference should be trusted.
- [[Bipolar MRI findings and their limits]] - the condition-domain reading of the same consortium evidence, including the medication and illness-course confounds it cannot remove.

## Study question

Why does a statistically robust group difference not imply a useful individual test?

## Detailed lesson

- [[Lesson - Interpreting group brain differences]] - full lesson with a plain-language model, worked example, misconceptions, source boundaries and practice questions.
- Module: [[Module 06 - Neurology|Neurology]]
