---
note_type: topic
title: "P-values and statistical significance"
description: "What a p-value is and is not, the common misreadings, how the 0.05 threshold shapes what gets published, and the alternatives: estimation with intervals, Bayes factors and preregistration."
content_layer: reference
concept_kind: method
domain: [research-methods]
secondary_domain: []
condition: []
source_count: 11
reviewed: 2026-09-27
up: "[[Research Methods and Measurement Map]]"
cssclasses: [research-topic]
tags: [research/topic, research/reference, research/domain/methods]
---
# P-values and statistical significance

## Definition

A p-value is the probability, calculated under a test model that includes the null hypothesis and every analysis assumption, of a result at least as extreme as the one observed; calling a result "statistically significant" means only that this probability fell below a chosen threshold, conventionally 0.05. [[P18582619 Goodman 2008 Twelve P-value misconceptions#^p18582619-caution-definition|Appraisal: Goodman 2008]] [[P27209009 Greenland 2016 Statistical tests and P values#^p27209009-caution-threshold|Appraisal: Greenland 2016]] It is not the probability that the hypothesis is true, and it says nothing about how large or important an effect is. [[P27209009 Greenland 2016 Statistical tests and P values#^p27209009-guide|Greenland 2016]] [[P23997866 Sullivan 2012 Using effect size#^p23997866-significance|Sullivan 2012]]

## How it works

**A statement about data under a model.** P values appear in almost every medical paper, yet they sit outside any formal system of statistical inference, one reason they are so often misread. [[P18582619 Goodman 2008 Twelve P-value misconceptions#^p18582619-status|Goodman 2008]] Because the calculation assumes the whole test model, analysis choices made after seeing the results can produce small p-values when the tested hypothesis is true and large ones when it is false. [[P27209009 Greenland 2016 Statistical tests and P values#^p27209009-protocols|Greenland 2016]]

**Common misreadings.** Greenland and colleagues list 25 misinterpretations, beginning with reading P as the probability that the tested hypothesis is true, and Goodman sets out twelve with their consequences. [[P27209009 Greenland 2016 Statistical tests and P values#^p27209009-guide|Greenland 2016]] [[P18582619 Goodman 2008 Twelve P-value misconceptions#^p18582619-misconceptions|Goodman 2008]] The most serious, in Goodman's account, is believing that one experiment's data can yield the probability that a conclusion is wrong without outside evidence or mechanistic plausibility. [[P18582619 Goodman 2008 Twelve P-value misconceptions#^p18582619-error|Goodman 2008]] Whether a claimed finding is true depends on prior odds, power, the number of relationships tested and bias, not on the p-value alone. [[P16060722 Ioannidis 2005 Why most findings are false#^p16060722-probability|Why most published research findings are false]] Significance is not size: with large samples a trivial difference can be significant, as in an aspirin trial whose risk difference was under one percent. [[P23997866 Sullivan 2012 Using effect size#^p23997866-significance|Sullivan 2012]] [[P23997866 Sullivan 2012 Using effect size#^p23997866-example|Sullivan 2012]] A large p-value is not proof of no effect either, and a confidence interval is a compatibility range under a model rather than a probability distribution for the true value. [[P18582619 Goodman 2008 Twelve P-value misconceptions#^p18582619-caution-definition|Appraisal: Goodman 2008]] [[P27209009 Greenland 2016 Statistical tests and P values#^p27209009-ci|Greenland 2016]] Power, likewise, describes a test design under assumptions, not the probability that a particular result is correct. [[P27209009 Greenland 2016 Statistical tests and P values#^p27209009-power|Greenland 2016]]

**How the threshold shapes the literature.** Between 1990 and 2014 the share of MEDLINE abstracts reporting P values rose from 7.3% to 15.6%, reaching 54.8% of randomised-trial abstracts. [[P26978209 Chavalarias 2016 Reporting of P values 1990-2015#^p26978209-trend|Chavalarias 2016]] Reported values cluster at .05 and at .001 or below, 96% of papers that give P values report at least one at .05 or less, and confidence intervals and effect sizes appear in only a small minority of abstracts. [[P26978209 Chavalarias 2016 Reporting of P values 1990-2015#^p26978209-significant|Chavalarias 2016]] [[P26978209 Chavalarias 2016 Reporting of P values 1990-2015#^p26978209-alternatives|Chavalarias 2016]] p-hacking - collecting or selecting data or analyses until a result crosses the line - is widespread on text-mining evidence, although its effect inside meta-analyses looked weak. [[P25768323 Head 2015 Extent and consequences of p-hacking#^p25768323-definition|Head 2015]] [[P25768323 Head 2015 Extent and consequences of p-hacking#^p25768323-extent|Head 2015]] [[P25768323 Head 2015 Extent and consequences of p-hacking#^p25768323-meta|Head 2015]] Small studies, small effects, many tested hypotheses and flexible designs are the settings in which significant findings are most often false. [[P16060722 Ioannidis 2005 Why most findings are false#^p16060722-conditions|Why most published research findings are false]] When 100 psychology studies were repeated, 36% of replications reached significance against 97% of the originals, with effects about half as large. [[P26315443 Open Science Collaboration 2015 Reproducibility#^p26315443-result|Open Science Collaboration 2015]]

**Alternatives and complements.** Estimation puts the effect size and its interval first: Cochrane guidance tells reviewers not to label results significant or non-significant and to report the interval with the exact P value, and the text-mining authors make the same call. [[F22 Cochrane Handbook for Systematic Reviews of Interventions#^f22-thresholds|Cochrane Handbook]] [[P26978209 Chavalarias 2016 Reporting of P values 1990-2015#^p26978209-recommendation|Chavalarias 2016]] Effect sizes are the main finding and belong beside any test. [[P23997866 Sullivan 2012 Using effect size#^p23997866-report|Sullivan 2012]] Bayes factors are offered as a more interpretable measure of evidence, though they move judgement into the choice of prior and alternative hypothesis rather than removing it. [[P18582619 Goodman 2008 Twelve P-value misconceptions#^p18582619-bayes|Goodman 2008]] [[P18582619 Goodman 2008 Twelve P-value misconceptions#^p18582619-caution-bayes|Appraisal: Goodman 2008]] Preregistration separates prediction from postdiction, so readers can tell confirmatory from exploratory tests and weight each accordingly. [[P29531091 Nosek 2018 Preregistration revolution#^p29531091-distinction|Preregistration revolution]] [[P29531091 Nosek 2018 Preregistration revolution#^p29531091-purpose|Preregistration revolution]]

**Reading rule.** Read a p-value as one summary of fit to a stated model and never alone: ask for the effect size and its interval, how many tests were run, whether the analysis was prespecified, and how plausible the claim was beforehand. [[P27209009 Greenland 2016 Statistical tests and P values#^p27209009-caution-threshold|Appraisal: Greenland 2016]] [[P16060722 Ioannidis 2005 Why most findings are false#^p16060722-probability|Why most published research findings are false]] [[P29531091 Nosek 2018 Preregistration revolution#^p29531091-purpose|Preregistration revolution]]

## Evidence and status

The misreadings have been documented for decades, and no interpretation of these statistics is both simple and foolproof. [[P27209009 Greenland 2016 Statistical tests and P values#^p27209009-misinterpretation|Greenland 2016]] [[P18582619 Goodman 2008 Twelve P-value misconceptions#^p18582619-status|Goodman 2008]] Meta-research shows significance-centred reporting dominating the biomedical literature and p-hacking to be common. [[P26978209 Chavalarias 2016 Reporting of P values 1990-2015#^p26978209-significant|Chavalarias 2016]] [[P25768323 Head 2015 Extent and consequences of p-hacking#^p25768323-extent|Head 2015]] Estimation-first reporting is established guidance for systematic reviews. [[F22 Cochrane Handbook for Systematic Reviews of Interventions#^f22-thresholds|Cochrane Handbook]] There is no single agreed replacement: intervals, Bayes factors and preregistration each address a different part of the problem. [[P18582619 Goodman 2008 Twelve P-value misconceptions#^p18582619-caution-bayes|Appraisal: Goodman 2008]] [[P29531091 Nosek 2018 Preregistration revolution#^p29531091-distinction|Preregistration revolution]]

## Uncertainties

- How much p-hacking distorts pooled estimates in psychiatric research specifically; the reassuring meta-analytic test was cross-disciplinary and works only in aggregate. [[P25768323 Head 2015 Extent and consequences of p-hacking#^p25768323-caution-aggregate|Appraisal: Head 2015]]
- Whether clustering of reported values at .05 reflects p-hacking, publication bias or both. [[P26978209 Chavalarias 2016 Reporting of P values 1990-2015#^p26978209-caution-selection|Appraisal: Chavalarias 2016]]
- Whether a stricter threshold, or dropping thresholds altogether, would improve reliability; no such proposal is sourced in this library yet.

## Recent research

- **2024 · Meta-research study (PLoS One).** Of 24 highly cited clinical studies with a valid replication, 20 held up when replication was judged by a significant effect in the same direction plus overlapping intervals, a criterion that itself leans on significance. [[P39110675 da Costa 2024 Replicability of highly cited clinical research#^p39110675-rate|da Costa 2024]] [[P39110675 da Costa 2024 Replicability of highly cited clinical research#^p39110675-limit|da Costa 2024]]
- **2024 · Meta-research study (PLoS One).** Within papers, the link between sample size and effect size was much stronger for focal effects than for randomly chosen ones, the pattern selective emphasis on significant results would produce, though the mechanism was left open. [[P38359021 Linden 2024 Sample size and effect size#^p38359021-focal|Linden 2024]] [[P38359021 Linden 2024 Sample size and effect size#^p38359021-caution-indicator|Appraisal: Linden 2024]]
- **2016 · Meta-research study (JAMA).** Twenty-five years of abstracts showed rising P-value reporting, clustering at .05 and scarce intervals and effect sizes. [[P26978209 Chavalarias 2016 Reporting of P values 1990-2015#^p26978209-trend|Chavalarias 2016]] [[P26978209 Chavalarias 2016 Reporting of P values 1990-2015#^p26978209-alternatives|Chavalarias 2016]]

## Connections

- [[Effect sizes and uncertainty]] - the estimation side of the same question: magnitude and interval are what a p-value leaves out.
- [[Replication and publication bias]] - the filter that turns a significance threshold into a distorted literature, and the replication record that exposes it.
- [[Meta-analysis and review limits]] - where selectively significant studies are pooled, and where tests for p-hacking and publication bias are run.
- [[Evidence types and causal inference]] - a small p-value says nothing about design; whether an effect is causal depends on how the data were produced.
- [[Bias and confounding]] - systematic error moves an estimate without changing how significant it looks, so bias and significance are separate checks.
- [[Screening and diagnostic accuracy]] - the same base-rate logic: whether a significant finding is true depends on prior odds, as a positive test depends on prevalence.

**Cross-domain connection (curation).** Every condition domain in this library quotes p-values from trials and cohorts, and the research-methods domain's rule is that significance never stands alone: the pharmacology domain's efficacy claims need effect sizes and intervals, and the genetics domain's genome-wide thresholds are a stricter version of the same multiple-testing problem. [[Trial endpoints, benefit and harms]] [[Genome-wide association studies]] [[Effect sizes and uncertainty]]

## Detailed lesson

- [[Lesson - P-values and statistical significance]] - full lesson with a plain-language model, worked example, misconceptions, source boundaries and practice questions.
- Module: [[Module 01 - Research Methods and Evidence Literacy|Research Methods and Evidence Literacy]]
