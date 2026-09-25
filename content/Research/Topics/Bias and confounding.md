---
note_type: topic
title: "Bias and confounding"
domain: [research-literacy]
condition: []
source_count: 7
cssclasses: [research-topic]
tags: [research/topic, research/domain/research-literacy]
content_layer: reference
concept_kind: framework
description: "Confounding, selection, analytic flexibility, publication bias and low power, and the procedural remedies that target each."
secondary_domain: []
reviewed: 2026-09-25
---

# Bias and confounding

**Definition.** Bias is a systematic distortion that pushes results away from the truth; confounding is the special case where a third factor is linked to both the exposure and the outcome. [[F09 Noba Research designs#^f09-confounds|Research Designs]]

## Supported claims

- Confounding and selection effects distort comparisons, which is why random assignment and control groups exist. [[F09 Noba Research designs#^f09-confounds|Research Designs]]
- A complex-trauma meta-analysis reports some indications of publication bias in its own evidence base. [[P40154799 Hu 2025 Psychological interventions for CPTSD#^p40154799-moderators|Psychological interventions for complex PTSD]]

> [!info]- In depth: the systematic distortions that survive good intentions
> **Confounding.** Confounding and selection effects distort comparisons, which is why random assignment and preregistered outcomes matter: a third variable that influences both exposure and outcome produces an association that no amount of statistical significance will fix. The textbook treatment pairs this with selection effects, which arise when who enters the study depends on both sides of the comparison. [[F09 Noba Research designs#^f09-confounds|Research Designs]] [[F09 Noba Research designs#^f09-designs|Research Designs]]
>
> **Why significance testing does not address it.** The probability that a claimed finding is true depends on prior odds, power, the number of tested relationships and bias rather than on the p value alone, and the settings that make false positives likelier are small studies, small effects, many tested hypotheses and flexible designs. That argument is analytic rather than empirical; its influence comes from reframing how published significance should be interpreted. [[P16060722 Ioannidis 2005 Why most findings are false#^p16060722-probability|Why most published research findings are false]] [[P16060722 Ioannidis 2005 Why most findings are false#^p16060722-conditions|Why most published research findings are false]]
>
> **Analytic flexibility as a bias source.** In neuroimaging, analytic flexibility - many defensible choices in preprocessing and modelling - is identified as a central source of irreproducibility, and low statistical power exaggerates effect sizes in published brain-behaviour correlations. Proposed responses include data and code sharing, preregistration, larger samples and multiverse or specification-curve analyses. [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-flexibility|Neuroimaging reproducibility]] [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-power|Neuroimaging reproducibility]] [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-practice|Neuroimaging reproducibility]]
>
> **Moderation and heterogeneity as clues rather than noise.** When a pooled effect is moderated - as in the complex-trauma therapy meta-analysis, where participants with childhood trauma showed lower effects and risk of bias and sample composition moderated results - the moderators are often the most informative part of the analysis. Reading them as nuisance converts a design signal into an inconvenience. [[P40154799 Hu 2025 Psychological interventions for CPTSD#^p40154799-moderators|Psychological interventions for CPTSD]]
>
> **Reading rule.** Name the specific bias: confounding, selection, measurement, attrition, reporting or publication. Each has different remedies - design, sensitivity analysis, registration, funnel checks - and 'bias' as a general accusation is not a critique. [[P33954258 Munafo 2017 Reproducible science#^p33954258-metadata|A manifesto for reproducible science]] [[P26315443 Open Science Collaboration 2015 Reproducibility#^p26315443-result|Reproducibility in psychology]]

> [!info]- Reference: the main threats, named
> **Confounding.** A third variable associated with both exposure and outcome distorts the comparison; randomisation addresses it, and observational designs must measure and model it. [[F09 Noba Research designs#^f09-confounds|Research designs]]
>
> **Selection.** Who enters a study determines what can be estimated, which is why sampling frames and attrition matter as much as analysis. [[F09 Noba Research designs#^f09-designs|Research designs]]
>
> **Flexibility.** Many defensible analytic choices create opportunities for results to depend on the analysis path; preregistration and specification-curve methods exist to make that visible. [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-flexibility|Neuroimaging reproducibility]] [[P29531091 Nosek 2018 Preregistration revolution#^p29531091-distinction|The preregistration revolution]]
>
> **Publication and reporting.** Studies with positive results are more likely to be published and reported, which biases the visible literature even when each study is sound. [[P16060722 Ioannidis 2005 Why most findings are false#^p16060722-conditions|Why most published research findings are false]] [[P33954258 Munafo 2017 Reproducible science#^p33954258-metadata|A manifesto for reproducible science]]
>
> **Small studies with large effects.** Low power produces unstable estimates that exaggerate effects when they reach significance, a pattern documented in replication projects. [[P26315443 Open Science Collaboration 2015 Reproducibility#^p26315443-result|Estimating the reproducibility of psychological science]]
>
> **Bias is not misconduct.** Most of these mechanisms operate through ordinary incentives and habits, which is why the proposed remedies are procedural rather than moral. [[P33954258 Munafo 2017 Reproducible science#^p33954258-framing|A manifesto for reproducible science]]

> [!info]- Further depth: naming the specific distortion
> Confounding and selection effects distort comparisons, which is why random assignment and preregistered outcomes matter; the settings that make false positives likelier are small studies, small effects, many tested hypotheses and flexible designs. In neuroimaging, analytic flexibility and low power are documented as central problems, with sharing, preregistration, larger samples and multiverse analyses proposed as responses. Moderators in a synthesis are often the most informative part of the analysis rather than noise: the complex-trauma meta-analysis found lower effects for participants with childhood trauma and moderation by risk of bias. [[F09 Noba Research designs#^f09-confounds|Research Designs]] [[P16060722 Ioannidis 2005 Why most findings are false#^p16060722-conditions|Why most published research findings are false]] [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-flexibility|Neuroimaging reproducibility]] [[P40154799 Hu 2025 Psychological interventions for CPTSD#^p40154799-moderators|Psychological interventions for CPTSD]]
>
> **Cross-domain connection (curation).** The same bias mechanics decide whether a clinical trial or an observational finding in the clinical-psychiatry domain can carry the claim it is reported with - selection effects and confounding operate identically in a bipolar trial and in a cohort study of brain volumes, so this article is the shared lens across the library. [[Evidence types and causal inference]] [[Observational designs]]

## Limitation or common misconception

Naming a bias does not measure it; direction and size usually require replication or sensitivity analysis.

## Related notes

- [[Evidence types and causal inference]]
- [[Reviews, guidelines and preprints]]

## Study question

For one source in this library, list two plausible confounders and say whether the authors could have measured them.

## Detailed lesson

- [[Lesson - Bias and confounding]] - full lesson with a plain-language model, worked example, misconceptions, source boundaries and practice questions.
- Module: [[Module 01 - Research Methods and Evidence Literacy|Research Methods and Evidence Literacy]]
