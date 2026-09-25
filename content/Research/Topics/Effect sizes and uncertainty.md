---
note_type: topic
title: "Effect sizes and uncertainty"
domain: [research-literacy]
condition: []
source_count: 4
cssclasses: [research-topic]
tags: [research/topic, research/domain/research-literacy]
content_layer: reference
concept_kind: method
description: "Absolute, relative and standardised effect sizes, the limits of conventional thresholds, and why significance is not magnitude."
secondary_domain: []
reviewed: 2026-09-25
---

# Effect sizes and uncertainty

**Definition.** An effect size is the magnitude of a difference or association, reported separately from whether it reached statistical significance. [[P23997866 Sullivan 2012 Using effect size#^p23997866-magnitude|Using Effect Size]]

## Supported claims

- Effect size is the magnitude of the difference between groups; the absolute effect size is the raw difference and standardized indices express it in standard deviation units. [[P23997866 Sullivan 2012 Using effect size#^p23997866-magnitude|P23997866]]
- A significant P value can accompany a trivial difference when samples are large, so significance alone does not carry clinical meaning. [[P23997866 Sullivan 2012 Using effect size#^p23997866-significance|P23997866]]
- Informal small, medium and large conventions ignore measurement accuracy and population diversity, so they are heuristics rather than thresholds for importance. [[P23997866 Sullivan 2012 Using effect size#^p23997866-cohen|P23997866]]
- Risk measures can be absolute (risk difference), relative (proportional reduction) or person-based (number needed to treat), and the same relative reduction can hide very different absolute changes. [[P26952180 Ranganathan 2016 Absolute and relative risk#^p26952180-measures|P26952180]]; [[P26952180 Ranganathan 2016 Absolute and relative risk#^p26952180-rrr|P26952180]]
- P values are commonly misread as the probability that a hypothesis is true or that results arose by chance; confidence intervals are compatibility ranges under a model rather than probability distributions for a parameter. [[P27209009 Greenland 2016 Statistical tests and P values#^p27209009-guide|P27209009]]; [[P27209009 Greenland 2016 Statistical tests and P values#^p27209009-ci|P27209009]]
- Cochrane guidance tells reviewers not to rely on significance thresholds and to report the confidence interval with the exact P value. [[F22 Cochrane Handbook for Systematic Reviews of Interventions#^f22-thresholds|F22]]
- Presenting only a relative reduction can exaggerate a small absolute benefit, which is why this library asks for both numbers and the baseline risk. [[P26952180 Ranganathan 2016 Absolute and relative risk#^p26952180-caution-framing|AI synthesis: P26952180]]

## Limitation or common misconception

These are reporting conventions, not a scoring system: whether an effect matters depends on the outcome, the comparator and the decision, not on the label attached to the number.

> [!info]- Reference: absolute, relative and standardised effects
> **Three currencies.** The absolute effect is the raw difference in outcome; the relative effect expresses it as a ratio; the standardised effect divides by variability. Each answers a different question and none substitutes for the others. Standardised effects are comparable across studies only insofar as the underlying construct, measurement instrument and population variance are themselves comparable - a standardised difference computed on different instruments or in very different populations is not automatically a like-for-like comparison. [[P23997866 Sullivan 2012 Using effect size#^p23997866-magnitude|Using effect size]]
>
> **Conventions are not thresholds.** Cohen's d values of 0.2, 0.5 and 0.8 are heuristics that ignore measurement accuracy and population diversity, so they should be read as rough bands. [[P23997866 Sullivan 2012 Using effect size#^p23997866-cohen|Using effect size]] [[P23997866 Sullivan 2012 Using effect size#^p23997866-caution-thresholds|AI appraisal: Using effect size]]
>
> **Intervals, tests and what each can say.** A confidence interval is a compatibility range under a statistical model; it corresponds to the corresponding test only when the model and test assumptions match. An interval that excludes the null is a statement about that null, not about equivalence - crossing the null does not demonstrate equivalence, and an interval that includes practically important effects alongside the null does not rule them out. Predefined margins matter: whether an interval rules out a clinically important difference depends on what 'clinically important' was specified to mean before the data were seen. [[P27209009 Greenland 2016 Statistical tests and P values#^p27209009-ci|Statistical tests and P values]] [[P23997866 Sullivan 2012 Using effect size#^p23997866-significance|Using effect size]]
>
> **A hypothetical worked example.** Suppose (hypothetically, for illustration only) a two-arm trial with 1000 participants per arm and a 12-month follow-up. Outcome: cardiovascular event. Control arm: 100 events (10% risk). Treatment arm: 80 events (8% risk). The risk difference is 2 percentage points (10% − 8%). The risk ratio is 0.8 (8%/10%). The number needed to treat is 1/0.02 = 50: on average, 50 people would need treatment for 12 months for one fewer cardiovascular event than would have occurred otherwise. All three figures describe the same data; each answers a different question (absolute change, relative change, person-basis). None of this describes any actual trial or individual outcome.
>
> **Reporting.** Effect sizes belong alongside uncertainty intervals, and confidence intervals should be reported rather than significance labels. [[F22 Cochrane Handbook for Systematic Reviews of Interventions#^f22-thresholds|Cochrane Handbook]]
>
> **Interpretation.** A small standardised difference can matter for policy and a large one can be irrelevant for an individual, so context determines importance. [[P23997866 Sullivan 2012 Using effect size#^p23997866-caution-thresholds|AI appraisal: Using effect size]]
>
> **Standardised and unstandardised answer different questions.** A standardised effect size (a correlation, a standardised mean difference) is unit-free and comparable across studies; an unstandardised one (kilograms, points on a named scale, absolute risk difference) keeps the units that make clinical meaning possible. Large standardised effects can be clinically trivial and small absolute-risk changes can matter at population scale - the aspirin example in the effect-size literature is the canonical demonstration - so reporting practice needs both, with the interval, not the point estimate, carrying the uncertainty. [[P23997866 Sullivan 2012 Using effect size#^p23997866-significance|Using effect size]] [[P26952180 Ranganathan 2016 Absolute and relative risk|Absolute and relative risk]]
>
> **Match the inference to the question.** A p-value summarizes compatibility with a particular null model; a confidence interval shows a range of effects under its construction assumptions. Their usual correspondence requires matching models and tests. An interval crossing the null can still exclude some practically important effects, or can permit both important benefit and harm; the actual bounds matter. Equivalence is a separate question requiring justified, prespecified margins and an appropriate analysis. Statistical non-significance alone cannot answer it. [[P27209009 Greenland 2016 Statistical tests and P values#^p27209009-ci|Statistical tests and P values]] [[Longitudinal and within-person inference]]
>
> **Cross-domain connection (curation).** Every condition-domain evidence article in this library consumes these conventions; the effect-size article is the shared vocabulary those articles rely on when they quote ORs, SMDs and certainty grades. [[Trial endpoints, benefit and harms]] [[Efficacy versus tolerability]]

## Related notes

- [[Evidence types and causal inference]]
- [[Bias and confounding]]
- [[Reading a study and matching populations]]
- [[Efficacy versus tolerability]]

## Study question

Take one effect from the library and restate it as an absolute change, a relative change and a person-based number, then say which version changes your reading.
