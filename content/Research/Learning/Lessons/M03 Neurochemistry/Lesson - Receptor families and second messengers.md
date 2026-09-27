---
note_type: lesson
title: "Receptor families and second messengers"
module: "m03"
module_title: "Neurochemistry"
lesson_order: 13
domain: [neurochemistry]
condition: []
prerequisites: ["Transmitter synthesis, release and clearance"]
sources: ["F04", "P31299229", "P28153641"]
source_count: 3
question_count: 3
word_count: 700
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m03]
---

# Receptor families and second messengers

**Module.** M03 Neurochemistry · **Topic.** [[Receptor families and second messengers]]

## Why this matters

The same transmitter can excite one cell and inhibit another, and the reason is never the transmitter - it is the receptor. Receptors are the decision point of chemical signalling, and a claim about "what dopamine does" or "what serotonin does" is incomplete until it names which receptor, on which cell, is doing the deciding.

## The core model

Ionotropic receptors are ligand-gated ion channels: a transmitter binds, a pore opens, ions cross the membrane, and the voltage change happens within milliseconds. The effect is fast, brief and local, and glutamate's excitatory and GABA-A's inhibitory channels are the standard examples in cortex. [[F04 OpenStax Communication between neurons#^f04-receptor|Communication Between Neurons]]

Metabotropic receptors work differently. They are coupled to G-proteins rather than to a channel directly, and binding sets off an intracellular cascade of second messengers that can modify existing channels, change how excitable a cell is, or alter which genes it transcribes, over seconds to hours rather than milliseconds. One receptor can activate many downstream effector molecules, so a single binding event is not limited to opening one channel - which is why metabotropic effects can be large, slow to appear and slow to end. [[F04 OpenStax Communication between neurons#^f04-receptor|Communication Between Neurons]]

Because the same transmitter binds different receptor families in different places, receptor identity - not transmitter identity - decides the sign of an effect: dopamine's D1-type and D2-type receptors can push a cell in opposite directions. Every sentence about "what a transmitter does" is therefore implicitly a sentence about which receptors are present in the tissue under discussion. [[F04 OpenStax Communication between neurons#^f04-receptor|Communication Between Neurons]]

This has direct consequences for drugs. Most psychoactive drugs bind more than one receptor subtype, with different strengths at each, so "selective" describes a preference rather than a guarantee, and off-target binding is the ordinary case rather than the exception - a common explanation for side effects unrelated to a drug's intended target. Even where a drug's main target is well understood, occupying a receptor does not translate in a straight line into a clinical effect: exposure, how much of the drug reaches the tissue, downstream adaptation, and which outcome is measured all sit between binding and benefit, which is why binding affinities cannot be read off as effect sizes. [[P31299229 Kaar 2020 Antipsychotics mechanisms#^p31299229-offtarget|Antipsychotics mechanisms]] [[P28153641 Harmer 2017 How do antidepressants work#^p28153641-monoamine|How do antidepressants work]]

## Worked example (hypothetical)

This scenario is invented for practice. A fictional drug, "Compound Q," is marketed as "a selective receptor X blocker," and its manufacturer argues that its side effects must be unrelated to receptor X because the drug is selective.

Question the premise. Selectivity in pharmacology is graded: Compound Q likely has some affinity for related receptor subtypes even if its strongest binding is at receptor X, and most psychoactive drugs bind several subtypes at different strengths. A side effect could come from a related subtype, from receptor X itself in a different tissue than the one intended, or from a downstream adaptation rather than the initial binding event at all.

The defensible statement is: "Compound Q's primary binding target is receptor X; without a full binding profile and a mechanism study of the side effect, its cause cannot be assigned to receptor X alone." That is the discipline occupancy data requires.

## Common confusions

- "Selective means only one target." Selectivity is a matter of relative affinity, and off-target binding is common.
- "A fast ionotropic effect and a slow metabotropic effect must come from two different transmitters." They can be two receptors for the same transmitter.
- "Knowing the binding affinity tells you the clinical effect size." Occupancy, exposure, adaptation and outcome all sit between binding and effect.

## What the sources do not establish

Receptor binding and functional assays establish pharmacology quantitatively in the laboratory; they do not by themselves establish how a receptor's occupancy translates into a clinical outcome in people, and individual differences in receptor abundance are not yet usable to predict who will respond to a given drug.

## Check yourself

1. What is the key functional difference between an ionotropic and a metabotropic receptor?
2. Why can the same transmitter have opposite effects on two different cells?
3. Why can two drugs with similar receptor occupancy differ in their clinical effect?

## Answer notes

1. Ionotropic receptors open an ion channel directly for a fast, brief, local effect; metabotropic receptors act through G-proteins and second messengers for a slower, more sustained effect.
2. Because the effect depends on which receptor family the transmitter binds on that particular cell, not on the transmitter itself.
3. Because exposure, tissue-level target engagement, downstream adaptation and the outcome being measured all intervene between occupancy and a clinical result.

## Next steps

- Continue to [[Lesson - Monoamine reuptake and degradation]].
- See [[Neuromodulation and circuit state]] for how these receptor effects add up at the level of a whole circuit.
