---
note_type: lesson
title: "Pharmacodynamics and receptors"
module: "m05"
module_title: "Pharmacology"
lesson_order: 2
domain: [pharmacology]
condition: []
prerequisites: ["Pharmacokinetics and ADME"]
sources: ["F13", "F04", "F21", "P25566076"]
source_count: 4
question_count: 3
word_count: 734
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m05]
---

# Pharmacodynamics and receptors

**Module.** M05 Pharmacology · **Topic.** [[Pharmacodynamics and receptors]]

## Why this matters

Pharmacodynamics answers "what does the drug do to the body", and the answer is always more specific and more
distributed than the marketing version. This lesson explains why a single target produces both the intended
effect and the side-effect list, and why tolerance and withdrawal exist.

## The core model

Pharmacodynamics describes what a drug does to the body, usually by acting on receptors, enzymes, transporters
or ion channels.
[[F13 NIGMS How do medicines work#^f13-targets|How Do Medicines Work?]]

Agonists mimic or enhance a signal while antagonists block it, and the same target can appear in many tissues.
[[F13 NIGMS How do medicines work#^f13-agonism|How Do Medicines Work?]]

Receptor-level detail matters: nicotinic receptors depolarise while muscarinic receptors can depolarise or
hyperpolarise depending on subtype, so "the drug acts on acetylcholine receptors" underdetermines the effect.
[[F04 OpenStax Communication between neurons#^f04-cholinergic|Communication Between Neurons]]

Two consequences follow. First, selectivity for a target reduces off-target effects and cannot eliminate
on-target effects in other tissues, because the target is widely distributed. Second, the effect depends on
the system's state: with repeated exposure the same concentration can produce a smaller response, which the
checked teaching source calls tolerance — the body getting used to a medication so that more of it is needed
for the same effect.
[[F21 OpenStax Pharmacokinetics and pharmacodynamics#^f21-tolerance|Pharmacokinetics and Pharmacodynamics]]

A checked review of opioid receptor pharmacology shows what a receptor-level account of that adaptation looks
like in one system: desensitisation, uncoupling, internalisation and post-endocytic trafficking, with the speed
and extent depending on the agonist, receptor type and pathway studied.
[[P25566076 Allouche 2014 Opioid receptor desensitization and tolerance#^p25566076-desensitization|Opioid receptor desensitization]];
[[P25566076 Allouche 2014 Opioid receptor desensitization and tolerance#^p25566076-mechanism|Opioid receptor desensitization]]
That is one worked example rather than a universal mechanism: adaptation differs by drug, receptor and effect,
and tolerance can develop for one effect of a drug and not another.
[[P25566076 Allouche 2014 Opioid receptor desensitization and tolerance#^p25566076-tolerance|Opioid receptor desensitization]]

One more distinction organises the receptor story. Binding and activation are separate properties: a molecule
can occupy a receptor without switching it on, and the size of the response depends on what happens after
occupancy as much as on how much drug is present. That is why dose and effect can diverge, and why more of a
drug is not the same as more effect.

## Worked example (hypothetical)

This scenario is invented for practice. A hypothetical medicine is described as "a selective antagonist at
receptor X, developed for condition Y". Its side-effect list includes effects in several organ systems.

Explain the pattern rather than treating it as a puzzle. Receptor X is expressed in the target circuit and in
other tissues; blocking it produces effects wherever it normally contributes to signalling. The development
programme chose X because its role in the target circuit is prominent, not because it is unique to that circuit.

The model also predicts a time course: the first dose's effects may differ from chronic effects because
tolerance and receptor regulation develop alongside the exposure. That is why trials measure effects at
specified time points rather than assuming a constant response.

## Common confusions

- "Selective means side-effect free." Selectivity is relative; on-target effects follow the target's
  distribution.
- "More occupancy means more benefit." Tolerance and ceiling effects break the linear assumption.
- "Receptors are switches." They are part of dynamic systems with regulation and feedback.

## What the sources do not establish

The teaching sources explain target classes and agonist/antagonist logic; they do not cover receptor kinetics,
occupancy relationships or adaptation quantitatively. This vault holds no source that supports predicting a
specific person's response or side effects from a target description.

## Check yourself

1. Name four categories of drug target.
2. Why does one target produce both intended and unintended effects?
3. What does the receptor-subtype example teach about the phrase "acts on acetylcholine receptors"?

## Answer notes

1. Receptors, enzymes, transporters and ion channels.
2. Because the target appears in many tissues and systems, so engaging it affects all of them to some degree.
3. That the phrase underdetermines the effect, because the subtype and location determine whether the result is
   fast excitation, slower modulation, or something else.

## Next steps

- Continue to [[Lesson - Half-life and steady state]] for the time dimension of exposure.
- See [[Serotonin signalling]] for an applied receptor-distribution story.
