---
note_type: topic
title: "Causality and counterfactuals"
description: "What a causal claim asserts, why the counterfactual is the reference point, and which designs approximate it."
content_layer: reference
concept_kind: framework
domain: [research-methods]
secondary_domain: []
condition: []
source_count: 5
reviewed: 2026-09-25
up: "[[Research Methods and Measurement - Inference]]"
cssclasses: [research-topic]
tags: [research/topic, research/reference, research/domain/methods]
---
# Causality and counterfactuals

## Definition

A causal claim asserts that an outcome would differ had the exposure differed, other things being equal. The comparison that never happened - the counterfactual - is the reference point for every causal design.

## How it works

**The counterfactual idea.** A causal effect is defined as the difference between what happened under the exposure and what would have happened without it, in the same person at the same time - the counterfactual is the definition, not a method. That comparison is never observable - each person receives one condition, so only one arm is ever observed - and causal inference is therefore the discipline of constructing a defensible substitute for the missing counterfactual: every causal inference is an argument about the unobserved arm. [[F09 Noba Research designs#^f09-designs|Research Designs]]

**Randomisation.** Random assignment constructs the substitute by design: it makes the groups exchangeable in expectation - comparable on average, balancing even the unobserved by construction - which is why trials support causal inference about the assigned intervention. [[F09 Noba Research designs#^f09-designs|Research designs]]

**Observational approximation.** Where randomisation is impossible, designs try to approximate the counterfactual by modelling or by exploiting natural experiments - matching and adjustment balance the measured, instrumental variables exploit natural variation - and each buys credibility under specific assumptions. Designs differ in how plausibly they construct the argument about the unobserved arm, and the argument's strength is the causal claim's strength. [[P27209009 Greenland 2016 Statistical tests and P values|Statistical tests and P values]] [[Evidence types and causal inference]]

**Confounding, selection and measurement bias are the three failure families.** Confounding creates a common cause of exposure and outcome; selection makes the analysed sample unrepresentative of the causal question; measurement error, especially differential error, manufactures or masks association. Each has design remedies and analysis remedies, and the remedies differ - which is why "adjusted for confounders" is a claim about the measured subset of one family, not a certificate of causality. [[Bias and confounding]] [[Observational designs]]

**Why a significant association is not enough.** The probability that a claimed finding is true depends on prior odds, study power, the number of tested relationships and bias - not on the p value alone - so even a well-designed study is necessary but not sufficient. Small studies, small effects, many tested hypotheses and flexible designs all raise the chance that a nominally significant result is a false positive, which is why the same analysis pipeline can support and fail to replicate a claim, and why small flexible studies in large literatures are the least informative. [[P16060722 Ioannidis 2005 Why most findings are false#^p16060722-probability|Why most published research findings are false]] [[F09 Noba Research designs#^f09-correlation|Research Designs]]

**Components and transitivity.** Questions about why an intervention works - which component carried the effect - require additional designs and assumptions beyond the overall comparison. When evidence is combined indirectly - comparing treatments that were never compared head to head through shared comparators - validity depends on the transitivity assumption that populations and settings are similar enough for indirect comparisons to be meaningful. That assumption is about causal structure rather than about statistics, and it is testable only indirectly. [[P27913917 Network meta-analysis introduction#^p27913917-indirect|Network meta-analysis introduction]] [[P27913917 Network meta-analysis introduction#^p27913917-assumption|Network meta-analysis introduction]] [[P27913917 Network meta-analysis introduction#^p27913917-interpretation|Network meta-analysis introduction]]

**Preregistration as a causal-inference tool.** Separating prediction from postdiction makes the difference between confirmatory and exploratory work visible, which is what allows a reader to weight a claim appropriately; practical workflows include registering analysis plans and reporting deviations. Preregistration does not make a study causal, but it removes the flexibility that would otherwise allow the same data to support several incompatible stories. [[P29531091 Nosek 2018 Preregistration revolution#^p29531091-purpose|Preregistration revolution]] [[P29531091 Nosek 2018 Preregistration revolution#^p29531091-distinction|Preregistration revolution]]

**Reading rule.** For any causal sentence in this library, name the contrast, the counterfactual substitute and the assumptions required to get from data to claim. Reverse causation, residual confounding and measurement error are the three that remain live in most observational clinical evidence. [[F09 Noba Research designs#^f09-designs|Research Designs]]

## Evidence and status

The framework is standard in epidemiology and increasingly in psychology; its practical value is that it makes assumptions explicit instead of importing causal language from association.

## Connections

This is the conceptual foundation for [[Experimental designs]] and [[Observational designs]], and it is applied in the argument notes on long-term medication outcomes.

**Cross-domain connection (curation).** Mendelian randomisation is the genetics domain's instrument-based entry into this framework, and this article supplies the assumptions that make an instrument valid - the same assumptions the gene-environment article states are probed, not proven. [[Genome-wide association studies]] [[Gene-environment interplay and epigenetics]]

## Uncertainties

- Natural experiments vary in how convincingly they isolate a causal mechanism, and each requires substantive justification.
