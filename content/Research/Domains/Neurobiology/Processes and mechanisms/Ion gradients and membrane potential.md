---
note_type: topic
title: "Ion gradients and membrane potential"
domain: [neurobiology]
condition: []
source_count: 6
up: "[[Neurobiology - Processes and mechanisms]]"
cssclasses: [research-topic]
tags: [research/topic, research/domain/neurobiology]
content_layer: reference
concept_kind: mechanism
description: "Ion gradients, the electrochemical driving forces behind the resting potential, and the distinction between graded and all-or-none signalling."
secondary_domain: []
reviewed: 2026-09-25
---

# Ion gradients and membrane potential

**Definition.** Neurons maintain different ion concentrations inside and outside the membrane, which produces a resting voltage that is negative inside. [[F03 OpenStax The action potential#^f03-gradient|The Action Potential]]

## Supported claims

- Ion gradients across the membrane produce the resting potential against which signals are measured. [[F03 OpenStax The action potential#^f03-gradient|The Action Potential]]
- Local graded potentials can summate toward threshold at the axon's initial segment. [[F04 OpenStax Communication between neurons#^f04-initial-segment|Communication Between Neurons]]

## How it works

**The physical set-up.** A neuron maintains unequal concentrations of ions across a lipid membrane: sodium is concentrated outside the cell, potassium inside, and large anions are trapped inside. Selectively permeable channels let some ions cross, and the resulting separation of charge produces a resting potential that is negative inside relative to the outside. [[F03 OpenStax The action potential#^f03-gradient|The Action Potential]]

**Two gradients, one pump.** The gradients are built and maintained by active transport, the sodium-potassium pump being the standard example, and they are consumed continuously: the membrane is not a capacitor that charges once but a leaky system that must be recharged. [[F03 OpenStax The action potential#^f03-gradient|The Action Potential]]

**Why the resting value is not any single ion's equilibrium.** Movement across the membrane is driven by both the concentration gradient and the electrical field; when those forces balance for a given ion, its electrochemical equilibrium can be calculated. The membrane at rest is far more permeable to potassium than to sodium, so the resting potential sits near the potassium equilibrium potential but is pulled away from it by the small sodium leak and by the relative permeabilities - the standard explanation for a quantity that textbooks state as a number rather than a mechanism. The qualitative rule worth keeping is that the resting value is a weighted outcome of the permeabilities present, not the equilibrium of the most abundant ion. [[F03 OpenStax The action potential#^f03-gradient|The Action Potential]] [[F02 OpenStax Nervous tissue#^f02-neuron|Nervous Tissue]]

**Driving force, and why channels do nothing on their own.** A closed channel has no effect regardless of the gradient across it; opening a channel lets the ions move towards their equilibrium and pushes the membrane potential in that direction. This is the reason the same depolarising conductance can be experimentally powerful in one cell and negligible in another: what decides the result is how far the membrane sits from the ion's equilibrium, that is, the driving force. [[F03 OpenStax The action potential#^f03-threshold|The Action Potential]] [[F04 OpenStax Communication between neurons#^f04-receptor|Communication Between Neurons]]

**Graded and all-or-none mechanisms act on the same substrate.** Graded potentials are local changes in membrane potential whose size varies with the stimulus, and they decay with distance; they summate in space and time, and their combined effect at the trigger zone decides whether the cell fires. The whole receiving phase of the neuron is therefore a manipulation of the resting potential, which is why anything that shifts the gradient - altered pump activity, ion imbalance, channelopathy - changes excitability rather than merely moving a number. [[F51 OpenStax Function of nervous tissue#^f51-graded|Function of Nervous Tissue]] [[F51 OpenStax Function of nervous tissue#^f51-summation|Function of Nervous Tissue]] The all-or-none action potential takes over from there, which is why amplitude carries no graded information in the spike train. [[F03 OpenStax The action potential#^f03-signals|The Action Potential]]

**The resting potential is not fixed.** 'Resting potential' is not one fixed number for every neuron or every moment: cells change their leak and channel composition, and neuromodulators shift excitability by acting on those conductances. [[P23040802 Marder 2012 Neuromodulation#^p23040802-reconfigure|Neuromodulation]]

**What the resting potential is not.** It is not a measure of how active a cell has been, nor an index of energy status that can be read off directly; and the popular 'electricity' framing obscures that currents here are carried by ions across a thin lipid layer, with magnitudes in nanoamperes and milliseconds. Reading the resting potential as a state variable of the whole cell is a category error, which is one reason extracellular recordings and imaging proxies cannot be converted into it. [[F03 OpenStax The action potential#^f03-limit|The Action Potential]] [[F28 OpenStax Brain imaging Psychology 2e#^f28-caution-modality|AI appraisal: Brain imaging]]

**Cross-domain connection (curation).** Driving force is what turns the pharmacology domain's receptor-occupancy claims into effects at the cell - a ligand-gated channel opened by a drug produces a postsynaptic response of a magnitude that depends on the ion gradient it opens onto, so pharmacodynamic claims depend on the cellular physics described here. [[Pharmacodynamics and receptors]] [[Antipsychotic mechanisms]]

## Limitation or common misconception

The battery metaphor is useful and incomplete: membrane voltage is dynamic and channel types differ across cells.

## Related notes

- [[Action potentials]]
- [[Excitation and inhibition balance]]
- [[Synaptic signalling model]]

## Study question

Sketch how a small depolarising input could fail to trigger firing in one context and succeed in another.

## Detailed lesson

- [[Lesson - Ion gradients and membrane potential]] - full lesson with a plain-language model, worked example, misconceptions, source boundaries and practice questions.
- Module: [[Module 02 - Neurobiology|Neurobiology]]
