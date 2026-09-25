---
note_type: map
title: "Pharmacology Map"
map_kind: foundation
condition: []
domain: [pharmacology]
cssclasses: [research-map]
tags: [research/map]
content_layer: reference
description: "Domain hub: drug exposure, target action, adaptation, safety principles, drug classes and how treatment evidence is measured."
reviewed: 2026-09-25
concept_kind: framework
---

# Pharmacology Map

Pharmacology has two directions: what the body does to a drug and what the drug does to the body, plus the trial logic that evaluates both.

**Contents.** [[#Reference overview|Overview]], [[#Reference spine|Reference spine]], [[#Concept register|Concept register]], [[#Where this domain connects|Cross-domain links]], [[#Evidence boundaries|Evidence boundaries]], [[#Learning route|Learning route]], [[#Core sequence|Core sequence]]

## Reference overview

Pharmacology describes what the body does to a drug and what a drug does to the body, and then
asks how that translates into measured benefit and harm. The domain is included here because
psychiatric treatment claims are pharmacological claims, and because the common failure mode in
this area is a leap from binding affinity to clinical effect.

**Exposure is a separate problem from action.** Absorption, distribution, metabolism and excretion
determine the concentration at the target over time; bioavailability varies with route and
formulation; half-life and steady-state kinetics determine how long a change takes to accumulate
and to wash out. Two drugs with identical receptor affinity can differ entirely in effect because
exposure differs. [[Pharmacokinetics and ADME]] [[Half-life and steady state]]

**Action depends on affinity, efficacy and the system's state.** Agonists, antagonists and partial
agonists differ in what they do to signalling after binding; potency (how much drug is needed) and
efficacy (what effect is produced) are separate quantities; and the same target appears in many
tissues, so effects are rarely single. Where the drug is an allosteric modulator, its effect scales
with endogenous transmitter release, which makes it state-dependent by construction. [[Target binding and dose-response]] [[Pharmacodynamics and receptors]] [[P23789008 Griffin 2013 Benzodiazepine pharmacology#^p23789008-mechanism|Benzodiazepine pharmacology]]

**Adaptation follows exposure.** Receptors desensitise, signalling cascades compensate, and
tolerance and dependence emerge from those adjustments. Adaptation is not always undesirable: some
therapeutic effects appear only after weeks of treatment, which is why exposure and effect can be
decoupled in both directions. [[Receptor adaptation tolerance and dependence]] [[P28153641 Harmer 2017 How do antidepressants work#^p28153641-plasticity|How do antidepressants work]]

**Safety is a systems property.** Therapeutic index, adverse effects, interactions and monitoring
requirements follow from the exposure-response relationship rather than from the class name; a
narrow window between too little and too much is a property of the drug's kinetics and the
patient's physiology together. [[Therapeutic index, monitoring and interactions]] [[F18 FDA Narrow therapeutic index drugs#^f18-window|Setting and Implementing Standards for Narrow Therapeutic Index Drugs]]

**Classes and endpoints close the loop.** Antidepressant, antipsychotic, stimulant and mood
stabiliser classes are defined by mechanism families whose members differ in selectivity;
trials measure symptom scales, functioning and discontinuation, and the choice of endpoint and
comparator determines what a result supports. [[Drug classes and mechanisms overview]]
[[Antidepressant mechanisms]] [[Antipsychotic mechanisms]] [[Stimulant and non-stimulant mechanisms]] [[Trial endpoints, benefit and harms]]

**Evidence boundaries.** Binding and functional assays are in vitro or animal measurements; trial
populations differ from clinic populations; efficacy and tolerability trade off differently across
people; and this library contains no dose, titration or individualised guidance. [[Efficacy versus tolerability]] [[P30097390 Cortese 2018 ADHD medication efficacy and tolerability#^p30097390-caution-choice|AI synthesis: ADHD medication efficacy and tolerability]]

**Where to start.** [[Pharmacokinetics and ADME]] and [[Half-life and steady state]] for exposure, [[Target binding and dose-response]] for action, and [[Trial endpoints, benefit and harms]] for how effects are established. The full article list for this domain is in the concept register below; [[Reference Index]] carries A-Z, concept-kind, domain, condition and evidence routes over the whole reference layer.

## Reference spine

Pharmacology explains how drugs move through the body, how they act at targets, and how their effects are measured. The organising distinction is between exposure - what the body does to the drug - and response - what the drug does to the body.

Exposure follows four processes: absorption, distribution, metabolism and excretion. Bioavailability, half-life and steady state summarise them as models rather than dosing instructions. [[F12 NIGMS What happens to medicine in your body#^f12-adme|What happens to medicine in your body]] [[F21 OpenStax Pharmacokinetics and pharmacodynamics#^f21-halflife|Pharmacokinetics and pharmacodynamics]] [[F21 OpenStax Pharmacokinetics and pharmacodynamics#^f21-model|Pharmacokinetics and pharmacodynamics]] Lithium is the worked example here: renal elimination, a long half-life, and monitoring under stable conditions. [[F27 DailyMed lithium carbonate labelling#^f27-clearance|Lithium carbonate labelling]] [[F27 DailyMed lithium carbonate labelling#^f27-monitoring|Lithium carbonate labelling]]

Response begins with binding. Affinity, efficacy and potency are separate properties, and receptor families determine whether an action is fast or modulatory. [[F13 NIGMS How do medicines work#^f13-targets|How do medicines work]] [[F04 OpenStax Communication between neurons#^f04-metabotropic|Communication Between Neurons]] Occupancy does not map directly onto clinical effect: antipsychotic response and motor and endocrine side effects both track striatal D2 blockade, which is why the mechanism is described as having a window. [[P31299229 Kaar 2020 Antipsychotics mechanisms#^p31299229-d2|Antipsychotics mechanisms]]

Repeated action produces adaptation. Tolerance can be partial and effect-specific, and receptor-level processes including desensitisation and trafficking are part of the explanation; dependence and withdrawal overlap with, but are not identical to, tolerance. [[P25566076 Allouche 2014 Opioid receptor desensitization and tolerance#^p25566076-tolerance|Opioid receptor desensitization and tolerance]] [[P25566076 Allouche 2014 Opioid receptor desensitization and tolerance#^p25566076-mechanism|Opioid receptor desensitization and tolerance]] [[P23789008 Griffin 2013 Benzodiazepine pharmacology#^p23789008-risks|Benzodiazepine pharmacology]]

Evidence comes from trials with specific endpoints, raters and durations. Effects differ by who rates the outcome and by what the comparator is, and long-term literature is thinner than short-term literature for most classes. [[P30097390 Cortese 2018 ADHD medication efficacy and tolerability#^p30097390-efficacy|ADHD medication efficacy and tolerability]] [[P30097390 Cortese 2018 ADHD medication efficacy and tolerability#^p30097390-longterm|ADHD medication efficacy and tolerability]]

## Concept register

- **Exposure:** [[Pharmacokinetics and ADME]], [[Half-life and steady state]]
- **Action:** [[Pharmacodynamics and receptors]], [[Target binding and dose-response]], [[Receptor adaptation tolerance and dependence|Receptor adaptation, tolerance and dependence]], [[Monoamine reuptake and degradation]]
- **Classes:** [[Drug classes and mechanisms overview]], [[Antidepressant mechanisms]], [[Antipsychotic mechanisms]], [[Stimulant and non-stimulant mechanisms]]
- **Safety and evidence:** [[Therapeutic index, monitoring and interactions]], [[Efficacy versus tolerability]], [[Trial endpoints, benefit and harms]]

## Where this domain connects

- Neurochemistry supplies the targets: [[Receptor families and second messengers]], [[Transmitter synthesis, release and clearance]].
- Clinical domains supply the conditions in which effects are measured: [[Clinical Psychiatry and Psychopathology Map]].
- Methods supply the designs that establish effects: [[Experimental designs]], [[Meta-analysis and review limits]].

## Evidence boundaries

Mechanism is much better established than individual response prediction. Nothing in this domain is dosing, titration or personal treatment guidance. [[F19 FDA Drug interactions what you should know#^f19-advice|Drug interactions: what you should know]]

## Learning route

The sections below keep the earlier learning-oriented framing of this hub - course sequence, study questions and the learning-layer pointer. They are retained for continuity and cross-reference; where they state a mechanism, the reference overview above and the linked articles are the current account.

## Core sequence

### Exposure

Topics: [[Pharmacokinetics and ADME]], [[Half-life and steady state]]

Open question: Why does the same dose produce different concentrations in different people?

### Action

Topics: [[Pharmacodynamics and receptors]], [[Serotonin signalling]]

Open question: How do agonists and antagonists differ from a simple on-off switch?

### Safety

Topics: [[Therapeutic index, monitoring and interactions]], [[Lithium mechanisms and uncertainty]]

Open question: Which drug properties make monitoring worthwhile?

### Trial logic

Topics: [[Efficacy versus tolerability]], [[Short-term versus long-term outcomes]]

Open question: What does a network meta-analysis ranking include and omit?

### Applied evidence

Topics: [[ADHD medication evidence]], [[Phase-specific bipolar treatment evidence]]

Open question: Why must phase or age group travel with a treatment claim?

## Evidence gaps

- Individual dose selection rests on clinical judgment rather than aggregate dose-response models.
- Long-term safety and functional outcomes are under-represented in randomized evidence.

## Study question

Given a drug's half-life, therapeutic window and interaction profile, what would routine monitoring need to cover?

## Learning layer

- [[Module 05 - Pharmacology]] - module guide, lesson sequence, prerequisites and assessment.
- [[Learning Map - Pharmacology.canvas]] - populated canvas with lessons, sources, uncertainty and open questions.