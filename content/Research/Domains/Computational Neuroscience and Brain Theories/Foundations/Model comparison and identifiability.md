---
note_type: topic
title: "Model comparison and identifiability"
description: "How competing models are compared, why a good fit is weak evidence, and what parameter recovery adds."
content_layer: reference
concept_kind: method
domain: [computational-brain-theories, research-methods]
secondary_domain: []
condition: []
source_count: 4
reviewed: 2026-09-25
up: "[[Computational Neuroscience and Brain Theories - Foundations]]"
cssclasses: [research-topic]
tags: [research/topic, research/reference, research/domain/computational, research/domain/methods]
---
# Model comparison and identifiability

## Definition

Model comparison is the practice of evaluating competing formal explanations against data. Identifiability concerns whether a model's parameters can be recovered from the data at all.

## How it works

**A fit is not a mechanism.** Different models can produce very similar behaviour, so a good fit is not evidence that the hypothesised mechanism is the true one. Because the observation is behaviour rather than mechanism, model comparison is a discrimination problem: whichever model predicts unseen data best is preferred, and the loser is not thereby excluded from the brain. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Computational modelling rules]]

**The prescribed workflow.** Model-based analysis fits candidate models to behaviour or neural data and compares them, and the comparison must account for differences in flexibility. The methods literature recommends simulating data from each candidate and checking whether the fitting procedure recovers known parameters - the standard safeguard against uninterpretable results - then using cross-validation or similar methods and reporting model-comparison uncertainty as part of the result. The order matters: parameter recovery comes before interpretation, not after. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-fitting|Computational modelling rules]] [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-validation|Computational modelling rules]]

**The workflow is the content.** The tutorial's rules - simulate before fitting, verify parameter recovery, compare flexibility-aware, check out-of-sample prediction - are a complete quality-control pipeline, and the field's credibility problem comes from studies that skip stages. Parameter-recovery failure is the characteristic silent error: a model fits well and its parameters are meaningless because the data cannot distinguish them, which no goodness-of-fit statistic reveals. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-fitting|Computational modelling rules]] [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-validation|Computational modelling rules]]

**Degeneracy is the biological twin of unidentifiability.** The same problem appears in physical form: circuits with different underlying parameters can produce similar outputs, which the neuromodulation literature treats as a fundamental problem for relating structure to function. Statistically, different parameter sets fit one dataset; biologically, different circuits produce one behaviour. Both facts break the inference from observed output to claimed mechanism, and both push the field toward interventions and perturbations that break the symmetry - manipulate and see what changes - rather than toward more passive fitting. [[P23040802 Marder 2012 Neuromodulation#^p23040802-degeneracy|Neuromodulation of neuronal circuits]] [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Computational modelling rules]]

**Plural algorithms and broad frameworks.** Distinct predictive-coding algorithms differ substantially while sharing the inference idea, so evidence for one is not evidence for another. [[P26809759 Spratling 2017 Predictive coding algorithms#^p26809759-plural|Predictive coding algorithms]] [[P26809759 Spratling 2017 Predictive coding algorithms#^p26809759-difference|Predictive coding algorithms]] Framework breadth compounds the problem: a framework that accommodates many theories can be difficult to falsify in specific cases, which is why a broad principle should be paired with a specific model that makes risky predictions. [[P20068583 Friston 2010 Free-energy principle#^p20068583-status|The free-energy principle]] [[P20068583 Friston 2010 Free-energy principle#^p20068583-limit|The free-energy principle]]

**Reading rule.** Report the candidate set, the comparison metric, the recovery checks and the uncertainty. Without the candidate set, a winning model has no interpretation; without recovery checks, its parameters have none either. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-validation|Computational modelling rules]]

## Evidence and status

The methodology is well developed in computational neuroscience and increasingly expected in behavioural research; its absence is one reason parameter interpretations often fail to replicate.

## Connections

This is the epistemic companion to every theory note in this domain, and it links to [[Replication and publication bias]] in the methods domain.

**Cross-domain connection (curation).** The clinical-translation articles in every condition domain inherit this discipline: fitted computational parameters used as "biomarkers" stand or fall on the same recovery and identifiability checks, applied to clinical samples. [[ADHD medication evidence]] [[Measurement validity and reliability]]

## Uncertainties

- Model comparison verdicts depend on the candidate set, so a winning model may simply be the best of a limited field.
