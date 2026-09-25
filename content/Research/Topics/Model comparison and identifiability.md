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
cssclasses: [research-topic]
tags: [research/topic, research/reference, research/domain/computational, research/domain/methods]
---
# Model comparison and identifiability

## Definition

Model comparison is the practice of evaluating competing formal explanations against data. Identifiability concerns whether a model's parameters can be recovered from the data at all.

## How it works

**Fitting.** Candidate models are fitted to behaviour or neural data, and their fits are compared; the comparison must account for differences in flexibility. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-fitting|Computational modelling rules]]

**Simulation and recovery.** Simulating data from each candidate and checking whether the fitting procedure recovers known parameters is the standard safeguard against uninterpretable results. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-validation|Computational modelling rules]]

**Equivalence.** Different models can produce very similar behaviour, so a good fit is not evidence that the hypothesised mechanism is true. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Computational modelling rules]]

**Degeneracy in circuits.** The same problem appears biologically: circuits with different parameters can produce similar outputs. [[P23040802 Marder 2012 Neuromodulation#^p23040802-degeneracy|Neuromodulation]]

## Evidence and status

The methodology is well developed in computational neuroscience and increasingly expected in behavioural research; its absence is one reason parameter interpretations often fail to replicate.

> [!info]- In depth: why a good fit is not evidence for a mechanism
> **The basic problem.** Different models can produce similar behaviour, so a good fit is not evidence that the hypothesised mechanism is the true one. Because the observation is behaviour rather than mechanism, model comparison is a discrimination problem: whichever model predicts unseen data best is preferred, and the loser is not thereby excluded from the brain. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Computational modelling rules]]
>
> **The prescribed workflow.** Model-based analysis requires fitting candidate models to data and comparing them, with parameter recovery checks before interpreting parameters; the methods literature recommends simulating data from the candidate models, using cross-validation or similar methods, and reporting model-comparison uncertainty. The order matters - parameter recovery comes before interpretation, not after. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-fitting|Computational modelling rules]] [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-validation|Computational modelling rules]]
>
> **Degeneracy at the circuit level is the same problem in physical form.** Circuits with different underlying parameters can produce similar outputs, which the neuromodulation literature treats as a fundamental problem for relating structure to function; distinct predictive-coding algorithms also differ substantially while sharing the inference idea, so evidence for one is not evidence for another. [[P23040802 Marder 2012 Neuromodulation#^p23040802-degeneracy|Neuromodulation]] [[P26809759 Spratling 2017 Predictive coding algorithms#^p26809759-plural|Predictive coding algorithms]] [[P26809759 Spratling 2017 Predictive coding algorithms#^p26809759-difference|Predictive coding algorithms]]
>
> **Framework breadth compounds it.** A framework that accommodates many theories can be difficult to falsify in specific cases, which is why a broad principle should be paired with a specific model that makes risky predictions. [[P20068583 Friston 2010 Free-energy principle#^p20068583-status|The free-energy principle]] [[P20068583 Friston 2010 Free-energy principle#^p20068583-limit|The free-energy principle]]
>
> **Reading rule.** Report the candidate set, the comparison metric, the recovery checks and the uncertainty. Without the candidate set, a winning model has no interpretation; without recovery checks, its parameters have none either. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-validation|Computational modelling rules]]

> [!info]- Further depth: a fit is not a mechanism
> Because different models can produce similar behaviour, model comparison is a discrimination problem in which the preferred model is the one that predicts unseen data best; parameter recovery checks come before interpreting parameters, and comparison uncertainty is part of the result. Degeneracy appears physically as well: circuits with different parameters can produce similar outputs, and predictive-coding algorithms differ substantially while sharing the inference idea, so evidence for one is not evidence for another. A framework that accommodates many theories is correspondingly hard to falsify. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Computational modelling rules]] [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-validation|Computational modelling rules]] [[P23040802 Marder 2012 Neuromodulation#^p23040802-degeneracy|Neuromodulation]] [[P26809759 Spratling 2017 Predictive coding algorithms#^p26809759-difference|Predictive coding algorithms]] [[P20068583 Friston 2010 Free-energy principle#^p20068583-status|The free-energy principle]]
>
> **The workflow is the content.** The tutorial's rules - simulate before fitting, verify parameter recovery, compare flexibility-aware, check out-of-sample prediction - are a complete quality-control pipeline, and the field's credibility problem comes from studies that skip stages. Parameter-recovery failure is the characteristic silent error: a model fits well and its parameters are meaningless because the data cannot distinguish them, which no goodness-of-fit statistic reveals. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-fitting|Computational modelling rules]] [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-validation|Computational modelling rules]]
>
> **Degeneracy is the biological twin of unidentifiability.** Statistically, different parameter sets fit one dataset; biologically, different circuits produce one behaviour. Both facts break the inference from observed output to claimed mechanism, and both push the field toward interventions and perturbations that break the symmetry - manipulate and see what changes - rather than toward more passive fitting. [[P23040802 Marder 2012 Neuromodulation#^p23040802-degeneracy|Neuromodulation of neuronal circuits]] [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Computational modelling rules]]
>
> **Cross-domain connection (curation).** The clinical-translation articles in every condition domain inherit this discipline: fitted computational parameters used as "biomarkers" stand or fall on the same recovery and identifiability checks, applied to clinical samples. [[ADHD medication evidence]] [[Measurement validity and reliability]]

## Connections

This is the epistemic companion to every theory note in this domain, and it links to [[Replication and publication bias]] in the methods domain.

## Uncertainties

- Model comparison verdicts depend on the candidate set, so a winning model may simply be the best of a limited field.
