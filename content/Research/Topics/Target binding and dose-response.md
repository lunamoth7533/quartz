---
note_type: topic
title: "Target binding and dose-response"
description: "Affinity, efficacy and potency: what binding measurements establish and what they leave open."
content_layer: reference
concept_kind: mechanism
domain: [pharmacology]
secondary_domain: []
condition: []
source_count: 7
reviewed: 2026-09-25
cssclasses: [research-topic]
tags: [research/topic, research/reference, research/domain/pharmacology]
---
# Target binding and dose-response

## Definition

Affinity describes how tightly a drug binds its target; efficacy describes the response it produces once bound; potency describes how much drug is needed for a given effect. They are separate properties.

## How it works

**Binding.** Binding assays measure affinity, often as a dissociation constant, and selectivity compares affinity across targets. [[F13 NIGMS How do medicines work#^f13-targets|How do medicines work]]

**Dose-response.** Response increases with concentration up to a plateau, and the shape of the curve depends on efficacy and on the system's amplification. A drug with high affinity but low efficacy can act as an antagonist in the presence of an agonist.

**Partial agonism.** Partial agonists produce less than a full response at full occupancy, which is how they can stabilise signalling rather than maximally drive it; this profile is used deliberately in some psychotropics. [[P31299229 Kaar 2020 Antipsychotics mechanisms#^p31299229-d2|Antipsychotics mechanisms]]

**Translation gap.** Binding and functional assays are in vitro or animal measurements; clinical effect depends on exposure, target engagement in tissue, downstream adaptation and the outcome measured. [[P28153641 Harmer 2017 How do antidepressants work#^p28153641-monoamine|How do antidepressants work?]]

## Evidence and status

Affinity and potency are among the most precise measurements in pharmacology; the mapping from these to clinical benefit is where most uncertainty lies.

> [!info]- In depth: receptors, affinity and why the dose-response curve matters clinically
> **The target layer.** Pharmacodynamics acts through receptors, enzymes, transporters or ion channels; agonists mimic or enhance a signal while antagonists block it, and the same target appears in many tissues, which is why a drug's effects are rarely single. Affinity describes how tightly a drug binds, and efficacy describes what binding does - properties that can vary independently, so a molecule that binds tightly may still produce a small effect. [[F13 NIGMS How do medicines work#^f13-targets|How do medicines work]] [[F13 NIGMS How do medicines work#^f13-agonism|How do medicines work]]
>
> **Occupancy does not equal effect, and partial agonism exists.** A partial agonist can act as an agonist when endogenous signalling is low and as an antagonist when it is high, which is how one molecule can dampen a system in both directions. Receptor families carry different transduction machinery: ionotropic receptors open channels directly, while metabotropic receptors act through second messengers that can modify channels and gene transcription on slower timescales. [[F04 OpenStax Communication between neurons#^f04-receptor|Communication Between Neurons]] [[F04 OpenStax Communication between neurons#^f04-metabotropic|Communication Between Neurons]]
>
> **The clinical version of the curve.** D2 blockade produces both antipsychotic response and the endocrine and motor side effects that bound the usable range, which is what a therapeutic window means here: the range separating benefit from harm is bounded on both sides, and the mechanism is shared while the pathways behind each effect are not. That structure is documented for antipsychotics and appears in the receptor-adaptation literature for opioids and benzodiazepines, where tolerance and withdrawal shape the usable range. [[P31299229 Kaar 2020 Antipsychotics mechanisms#^p31299229-d2|Antipsychotics mechanisms]] [[P25566076 Allouche 2014 Opioid receptor desensitization and tolerance#^p25566076-tolerance|Opioid receptor desensitization and tolerance]] [[P23789008 Griffin 2013 Benzodiazepine pharmacology#^p23789008-risks|Benzodiazepine pharmacology]]
>
> **Time course matters as much as concentration.** Antidepressant effects emerge over weeks even though monoamine changes occur within hours, which is why dose-response reasoning about the acute target does not predict the clinical timeline; the field explains the delay with downstream processing and plasticity changes. [[P28153641 Harmer 2017 How do antidepressants work#^p28153641-monoamine|How do antidepressants work]] [[P28153641 Harmer 2017 How do antidepressants work#^p28153641-plasticity|How do antidepressants work]]
>
> **Reading rule.** Separate affinity, occupancy, functional effect, dose and outcome. This library reproduces no dosing, titration or monitoring guidance; the reference point here is the shape of the relationship rather than any number. [[F13 NIGMS How do medicines work#^f13-limit|How do medicines work]] [[P25687772 Alda 2015 Lithium pharmacology and pharmacogenetics#^p25687772-caution-monitoring|AI appraisal: Lithium pharmacology and pharmacogenetics]]

> [!info]- Further depth: affinity, efficacy and the shape of the curve
> Affinity describes how tightly a molecule binds and efficacy describes what binding does, and the two vary independently, so a tightly binding molecule can produce a small effect; partial agonists act as agonists when endogenous tone is low and as antagonists when it is high. The clinical version is a bounded window: D2 blockade produces both response and endocrine and motor side effects, and tolerance for opioid and benzodiazepine effects develops unevenly across actions. Time course is separate again, since antidepressant effects emerge over weeks while monoamine changes occur within hours. [[F13 NIGMS How do medicines work#^f13-targets|How do medicines work]] [[F13 NIGMS How do medicines work#^f13-agonism|How do medicines work]] [[P31299229 Kaar 2020 Antipsychotics mechanisms#^p31299229-d2|Antipsychotics mechanisms]] [[P25566076 Allouche 2014 Opioid receptor desensitization and tolerance#^p25566076-tolerance|Opioid receptor desensitization and tolerance]] [[P28153641 Harmer 2017 How do antidepressants work#^p28153641-monoamine|How do antidepressants work]]

> [!info]- Further depth: occupancy, effect and the clinical window
> Occupancy is not effect, which is why a tightly binding molecule can produce a small response and why partial agonists move a system in both directions depending on endogenous tone. The clinical expression of this is a bounded dose range: benefit and side effects can share one target, as they do for striatal D2 blockade, while tolerance develops unevenly across a drug's actions. This library reproduces no dosing or monitoring guidance; the reference point is the shape of the relationship. [[F13 NIGMS How do medicines work#^f13-agonism|How do medicines work]] [[P31299229 Kaar 2020 Antipsychotics mechanisms#^p31299229-d2|Antipsychotics mechanisms]] [[P31299229 Kaar 2020 Antipsychotics mechanisms#^p31299229-offtarget|Antipsychotics mechanisms]] [[P25566076 Allouche 2014 Opioid receptor desensitization and tolerance#^p25566076-tolerance|Opioid receptor desensitization and tolerance]]

## Connections

This note extends [[Pharmacodynamics and receptors]] and is used in [[Antipsychotic mechanisms]] and [[Antidepressant mechanisms]].

## Uncertainties

- Two drugs with similar binding profiles can differ clinically because of metabolites, kinetics and off-target actions.
