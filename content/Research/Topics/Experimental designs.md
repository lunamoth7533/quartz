---
note_type: topic
title: "Experimental designs"
description: "Manipulation, randomisation, control conditions and blinding: what an experiment buys and where its inference stops."
content_layer: reference
concept_kind: method
domain: [research-methods]
secondary_domain: []
condition: []
source_count: 5
reviewed: 2026-09-25
cssclasses: [research-topic]
tags: [research/topic, research/reference, research/domain/methods]
---
# Experimental designs

## Definition

An experiment manipulates an independent variable and measures an outcome, with random assignment used to make comparison groups equivalent on average. Randomisation is what licenses causal language. [[F09 Noba Research designs#^f09-designs|Research designs]]

## How it works

**Assignment and control.** Random assignment balances measured and unmeasured confounders in expectation; control conditions establish what would have happened otherwise. [[F09 Noba Research designs#^f09-confounds|Research designs]]

**Blinding.** Where outcomes are subjective, blinding participants and raters protects against expectancy effects, and trials with different blinding can produce different estimates.

**Design variants.** Parallel-group, crossover, factorial and cluster designs trade off efficiency, contamination risk and generalisability; each has assumptions about carry-over or dependence.

**Clinical trials.** Regulatory descriptions of phase 1 to 3 studies describe escalating size and purpose: safety and dosage, then efficacy and side effects, then confirmation in larger groups. [[F89 FDA Clinical research#^f89-phases|Clinical research]] Most investigational drugs do not complete all phases, so approved treatments are a filtered subset of what was tested. [[F89 FDA Clinical research#^f89-proportion|Clinical research]]

## Evidence and status

Randomised designs are the strongest available tool for causal questions about interventions; they still generalise only to the populations, settings and durations studied. [[P30097390 Cortese 2018 ADHD medication efficacy and tolerability#^p30097390-longterm|ADHD medication efficacy and tolerability]]

> [!info]- In depth: what randomisation buys, and what it does not answer
> **The core contrast.** Observational designs describe what co-occurs, while experimental designs manipulate a variable and can support causal inference when assignment and control are sound. The power of an experiment comes from controlling what varies: the researcher decides who receives which condition, so the groups should differ only by chance rather than by the reasons people ended up in them. [[F09 Noba Research designs#^f09-designs|Research Designs]] [[F09 Noba Research designs#^f09-confounds|Research Designs]]
>
> **Why assignment matters so much.** Confounding and selection effects distort comparisons, which is why random assignment and preregistered outcomes matter. If the people who choose a treatment are systematically different - more motivated, less severe, better supported - then a difference between groups cannot be attributed to the treatment. Randomisation addresses that specific problem by breaking the link between participant characteristics and condition, and preregistration limits the freedom to select outcomes after seeing the data. [[F09 Noba Research designs#^f09-confounds|Research Designs]] [[P29531091 Nosek 2018 Preregistration revolution#^p29531091-purpose|Preregistration revolution]]
>
> **Where clinical trials sit in the sequence.** Clinical research phases proceed from phase 1 safety and dosage in small groups, through phase 2 efficacy and side effects, to phase 3 efficacy and monitoring in larger groups, where participants are commonly randomised to the investigational product or a comparator such as placebo or standard treatment. Only a minority of investigational drugs proceed through all phases, which frames later-phase evidence as a filtered sample of what was tested. [[F89 FDA Clinical research#^f89-phases|Clinical Research]] [[F89 FDA Clinical research#^f89-design|Clinical Research]] [[F89 FDA Clinical research#^f89-proportion|Clinical Research]]
>
> **What a trial cannot deliver by being randomised.** Duration and follow-up are design choices: the ADHD network meta-analysis found insufficient data at 26 and 52 weeks and its authors called for urgent research on long-term effects, even though every included trial was randomised. Rater choice and comparator choice are likewise part of the design, and both changed the apparent effect in the same literature. [[P30097390 Cortese 2018 ADHD medication efficacy and tolerability#^p30097390-longterm|ADHD medication efficacy and tolerability]] [[P30097390 Cortese 2018 ADHD medication efficacy and tolerability#^p30097390-efficacy|ADHD medication efficacy and tolerability]]
>
> **Reading rule.** Ask what was randomised, what was controlled, what was measured by whom, and for how long. A randomised design strengthens the causal claim about the contrast actually tested; it does not extend that claim to other populations, other comparators or longer horizons. [[F09 Noba Research designs#^f09-limit|Research Designs]] [[P27913917 Network meta-analysis introduction#^p27913917-assumption|Network meta-analysis introduction]]

> [!info]- Further depth: what randomisation controls and what it cannot answer
> Experimental designs manipulate a variable and can support causal inference when assignment and control are sound, because the researcher decides who receives which condition and confounds are broken in expectation; preregistered outcomes limit the freedom to choose an endpoint after seeing data. Duration, rater and comparator remain design choices: the ADHD network meta-analysis found insufficient data at 26 and 52 weeks even though every included trial was randomised, and rater choice changed the apparent effect. A randomised design strengthens the claim about the contrast actually tested, not about other populations or longer horizons. [[F09 Noba Research designs#^f09-designs|Research Designs]] [[P29531091 Nosek 2018 Preregistration revolution#^p29531091-purpose|Preregistration revolution]] [[P30097390 Cortese 2018 ADHD medication efficacy and tolerability#^p30097390-longterm|ADHD medication efficacy and tolerability]] [[F89 FDA Clinical research#^f89-proportion|Clinical Research]]
>
> **Randomisation's contribution is the unmeasured half of balance.** Matching and adjustment balance measured confounders; randomisation makes treatment assignment independent of everything measured and unmeasured, which is the part no analysis can retrofit. That is why the randomised design's primacy for causal questions is structural rather than traditional, and why intent-to-treat analysis - preserving the randomised allocation - is the analysis that keeps the design's guarantee intact. [[F09 Noba Research designs#^f09-correlation|Research Designs]] [[Trial endpoints, benefit and harms]]
>
> **Internal validity buys external questions, not answers.** A well-randomised trial licenses a causal claim about the contrast it tested in the population it enrolled; whether it generalises is a separate argument about population, setting, intervention fidelity and outcome horizons. Efficacy-versus-effectiveness language names the two ends, and the gap between them is exactly where the translational-validity and population-matching articles operate. [[Efficacy versus tolerability]] [[Reading a study and matching populations]]
>
> **Cross-domain connection (curation).** The psychotherapy and medication evidence articles in every condition domain are this design family's applications, and their comparator and rater caveats are the design's boundary conditions carried forward. [[ADHD medication evidence]] [[Bipolar psychotherapy evidence]]

## Connections

This note is the counterpart to [[Observational designs]] and is applied in [[Trial endpoints, benefit and harms]].

## Uncertainties

- Blinding is not always feasible, and unblinded trials systematically overestimate some effects.
