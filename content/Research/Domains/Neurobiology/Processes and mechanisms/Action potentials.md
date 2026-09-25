---
note_type: topic
title: "Action potentials"
domain: [neurobiology]
condition: []
source_count: 6
up: "[[Neurobiology - Processes and mechanisms]]"
cssclasses: [research-topic]
tags: [research/topic, research/domain/neurobiology]
content_layer: reference
concept_kind: mechanism
description: "The phases of the action potential, its self-propagating conduction, the refractory period, and why amplitude carries no graded information."
secondary_domain: [computational-brain-theories]
reviewed: 2026-09-25
---

# Action potentials

**Definition.** An action potential is a stereotyped electrical spike produced when depolarisation crosses threshold. [[F03 OpenStax The action potential#^f03-threshold|The Action Potential]]

## Supported claims

- Crossing threshold opens voltage-gated channels in a sequence that produces the characteristic rise and fall. [[F03 OpenStax The action potential#^f03-threshold|The Action Potential]]
- The spike is all-or-none and propagates at full strength along the axon rather than fading with distance. [[F03 OpenStax The action potential#^f03-signals|The Action Potential]]

## How it works

**The conductance sequence.** The resting axon sits near -70 mV with potassium permeability dominating and sodium permeability low. Depolarisation to threshold opens voltage-gated sodium channels and sodium entry drives the membrane towards the sodium equilibrium potential; the sodium channels then inactivate while voltage-gated potassium channels open, and potassium exit returns the membrane towards rest. The slow closing of those potassium channels produces the brief undershoot before the pump and leak conductances restore the starting distribution. [[F03 OpenStax The action potential#^f03-gradient|The Action Potential]] [[F03 OpenStax The action potential#^f03-threshold|The Action Potential]]

**Propagation at full amplitude.** The current a spike generates depolarises the neighbouring patch of membrane above threshold in turn, so the spike propagates all-or-none at full amplitude rather than decaying with distance, and a train of spikes keeps its shape along the axon. Conduction speed rises with axon diameter and, in myelinated fibres, with the spacing of nodes of Ranvier; molecular models of how channel populations interact to produce these dynamics are worked out in the computational literature. [[F03 OpenStax The action potential#^f03-signals|The Action Potential]] [[F02 OpenStax Nervous tissue#^f02-myelin|Nervous Tissue]] [[F92 Neuronal Dynamics#^f92-models|Neuronal Dynamics]]

**The refractory window.** Inactivated sodium channels make the absolute refractory period, which sets a ceiling on firing rate that varies by cell type; during the undershoot the relative refractory period makes it harder for a second stimulus to reach threshold. Refractoriness constrains firing rate and propagation through recently activated membrane, and its consequences depend on where and when a spike is initiated. [[F03 OpenStax The action potential#^f03-signals|The Action Potential]] [[F03 OpenStax The action potential#^f03-refractory|Refractory period]]

**Direction of travel and model assumptions.** In the canonical physiological account, graded inputs summate near the initial segment and an initiated axonal spike propagates away from that region while recently activated membrane passes through a refractory period. These statements describe an initiation site and a local, time-dependent membrane state. **Model inference:** refractoriness alone is not a universal one-way rule for every compartment or initiation condition; conclusions about direction require those conditions to be specified, and this account should not be used to infer experimental behavior outside the model it describes. [[F04 OpenStax Communication between neurons#^f04-initial-segment|Spike initiation]] [[F03 OpenStax The action potential#^f03-refractory|Refractory period]]

**What a spike train can carry.** Because amplitude is fixed, intensity and identity are carried by which neurons fire, how often and in what pattern relative to other cells - a coding question, not a property of the single spike, which is why "the action potential is the brain's digital signal" is only a partial statement. Three non-exclusive candidate codes appear in the literature: a rate code (spikes per unit time, robust because it averages over variability), a temporal code (the precise pattern of intervals, including synchrony across cells) and a population code (the joint activity of many neurons, where the identity of the active set matters more than any single cell's rate). Information capacity also depends on the noise and constraints of the particular circuit. [[F51 OpenStax Function of nervous tissue#^f51-coding|Function of Nervous Tissue]] [[Neural coding and population codes]]

**The caution on coding claims.** The strongest single-study support for the population view comes from motor cortex, where preparatory and movement-related activity formed distinct low-dimensional trajectories that single-neuron rates did not capture well. The authors framed the result as being about the descriptive power of population models rather than a circuit mechanism, and population findings depend on which cells were recorded and on the task; the defensible statement is that rate, timing and population structure are complementary descriptions whose usefulness is task- and area-dependent. [[P22722855 Churchland 2012 Neural population dynamics#^p22722855-population|Neural population dynamics]] [[P22722855 Churchland 2012 Neural population dynamics#^p22722855-claim|Neural population dynamics]] [[P22722855 Churchland 2012 Neural population dynamics#^p22722855-limit|Neural population dynamics]]

**Where the model stops.** The Hodgkin-Huxley account describes axonal spikes well; dendritic spikes, plateau potentials and graded-release cells are cases the simple model does not cover, which is why summation is described as the usual route to firing rather than the only one. [[F04 OpenStax Communication between neurons#^f04-caution-summation|AI synthesis: Communication Between Neurons]]

**Cross-domain connection (curation).** The coding descriptions here are the vocabulary the computational-brain-theories domain uses when it talks about rate, timing and population codes as formal descriptions of neural computation; a claim in one domain has to be translatable into the other without change of meaning. [[Neural coding and population codes]] [[Dynamical systems models]]

## Limitation or common misconception

All-or-none describes the spike itself; many neurons also release transmitter in graded ways without producing one.

## Related notes

- [[Ion gradients and membrane potential]]
- [[Synapses and plasticity]]

## Study question

If spike size is constant, what features of a spike train could carry information about stimulus intensity?

## Detailed lesson

- [[Lesson - Action potentials]] - full lesson with a plain-language model, worked example, misconceptions, source boundaries and practice questions.
- Module: [[Module 02 - Neurobiology|Neurobiology]]
