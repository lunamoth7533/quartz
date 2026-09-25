---
note_type: topic
title: "Half-life and steady state"
domain: [pharmacology]
condition: []
source_count: 5
cssclasses: [research-topic]
tags: [research/topic, research/domain/pharmacology]
content_layer: reference
concept_kind: process
description: "Half-life, accumulation and steady state as exposure models, with lithium as the worked example of why timing and clearance matter."
secondary_domain: []
reviewed: 2026-09-25
---

# Half-life and steady state

**Definition.** Elimination half-life is the time for the amount of drug in the body to halve; repeated dosing moves concentration toward steady state. [[F21 OpenStax Pharmacokinetics and pharmacodynamics#^f21-halflife|Pharmacokinetics and Pharmacodynamics]]

## Supported claims

- Repeated dosing approaches steady state, when intake and elimination balance. [[F21 OpenStax Pharmacokinetics and pharmacodynamics#^f21-halflife|Pharmacokinetics and Pharmacodynamics]]
- Concentration, half-life and steady state are models of exposure over time rather than dosing instructions. [[F21 OpenStax Pharmacokinetics and pharmacodynamics#^f21-model|Pharmacokinetics and Pharmacodynamics]]

> [!info]- In depth: why timing is a separate question from mechanism
> **Half-life sets the clock.** Elimination half-life determines how long a drug remains after a dose and how many doses are needed before accumulation and elimination balance at steady state, conventionally approached after several half-lives. That arithmetic explains why onset and washout are properties of kinetics rather than potency. [[F12 NIGMS What happens to medicine in your body#^f12-adme|What happens to medicine in your body]]
>
> **Steady state is an average, not a constant.** At steady state concentrations fluctuate between doses, and the size of the fluctuation depends on half-life relative to dosing interval. Comparisons of drugs by 'level' are therefore only meaningful when the interval and the time of sampling are specified. [[F12 NIGMS What happens to medicine in your body#^f12-limit|What happens to medicine in your body]]
>
> **Kinetics and effect can dissociate.** For drugs whose clinical effect develops over weeks - the antidepressant case in this library - steady-state plasma concentration is reached long before the clinical change appears, so the therapeutic effect cannot be read off the exposure curve. That gap is the reason downstream adaptation is part of the mechanism story. [[P28153641 Harmer 2017 How do antidepressants work#^p28153641-monoamine|How do antidepressants work]] [[Receptor adaptation tolerance and dependence]]
>
> **Reading rule.** When a claim says a drug 'works quickly' or 'takes weeks', identify which quantity is meant: exposure, target occupancy, or the measured clinical outcome. They follow different time courses. [[Trial endpoints, benefit and harms]]

> [!info]- Reference: what the model does and does not predict
> **Half-life.** Elimination half-life is the time for the amount in the body to fall by half; it is a property of the drug and the person's clearance, not a fixed constant. [[F21 OpenStax Pharmacokinetics and pharmacodynamics#^f21-halflife|Pharmacokinetics and pharmacodynamics]]
>
> **Accumulation.** Repeated dosing moves a drug toward steady state, reached in roughly four to five half-lives on an unchanged regimen. [[F21 OpenStax Pharmacokinetics and pharmacodynamics#^f21-halflife|Pharmacokinetics and pharmacodynamics]]
>
> **Why it is a model.** Concentration, half-life and steady state are descriptions of exposure over time, not dosing instructions for any individual. [[F21 OpenStax Pharmacokinetics and pharmacodynamics#^f21-model|Pharmacokinetics and pharmacodynamics]]
>
> **Long half-life in practice.** Lithium's half-life of roughly 18 to 36 hours and renal clearance mean sample timing matters for interpretation, which is why monitoring requires stable conditions. [[F27 DailyMed lithium carbonate labelling#^f27-half-life|Lithium carbonate labelling]] [[F27 DailyMed lithium carbonate labelling#^f27-monitoring|Lithium carbonate labelling]]
>
> **Boundary.** Pharmacokinetics describes exposure; it says nothing about whether the exposure helps, which is an efficacy question answered by trials. [[F13 NIGMS How do medicines work#^f13-limit|How do medicines work]]
>
> **Why the same half-life means different things in different people.** Half-life is a property of the drug and of the person's clearance: renal function, liver metabolism, age, interactions and body composition all move it. A population statement like "half-life of roughly 18 to 36 hours" therefore describes the range across studied people, not a property of the molecule alone, and the same regimen produces different exposure curves in different bodies. That is the pharmacokinetic reason monitoring exists as a practice rather than a formality. [[F27 DailyMed lithium carbonate labelling#^f27-clearance|Lithium carbonate labelling]] [[F21 OpenStax Pharmacokinetics and pharmacodynamics#^f21-halflife|Pharmacokinetics and Pharmacodynamics]]
>
> **What steady state does and does not promise.** Steady state means average intake equals average elimination, so the concentration stops climbing; it does not mean the concentration is stable within a day. Dosing establishes a repeating peak-and-trough pattern whose swing depends on half-life relative to the dosing interval, which is why two drugs at the same average level can differ in how much they swing, and why a sample drawn at an unknown time since the last dose is hard to interpret. [[F21 OpenStax Pharmacokinetics and pharmacodynamics#^f21-halflife|Pharmacokinetics and Pharmacodynamics]]
>
> **The worked example this library keeps returning to.** Lithium illustrates every part of the model at once: renal elimination, a half-life long enough that a missed sample timing matters, a narrow window that makes the swings consequential, and monitoring that explicitly requires stable conditions - same time since dose, stable salt and fluid intake - precisely because the model's inputs move. The example is developed in [[Lithium mechanisms and uncertainty]] and [[Therapeutic index, monitoring and interactions]]. [[F27 DailyMed lithium carbonate labelling#^f27-monitoring|Lithium carbonate labelling]]
>
> **Cross-domain connection (curation).** Research-methods owns the general lesson this domain keeps meeting: an exposure model is an estimator with assumptions, and a clinical claim that quotes a concentration inherits the sampling and timing assumptions used to produce it. [[Pharmacokinetics and ADME]] [[Measurement validity and reliability]]

## Limitation or common misconception

Concentration is a proxy: clinical response often lags exposure and depends on adaptation in the system the drug acts on.

## Related notes

- [[Pharmacokinetics and ADME]]
- [[Therapeutic index, monitoring and interactions]]

## Study question

Why can a drug's clinical effect appear before or after its concentration peaks?

## Detailed lesson

- [[Lesson - Half-life and steady state]] - full lesson with a plain-language model, worked example, misconceptions, source boundaries and practice questions.
- Module: [[Module 05 - Pharmacology|Pharmacology]]
