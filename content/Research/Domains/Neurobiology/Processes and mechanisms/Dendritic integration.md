---
note_type: topic
title: "Dendritic integration"
description: "How inputs distributed across a dendritic tree are combined: passive spread, active dendritic conductances, and summation at the axon initial segment."
content_layer: reference
concept_kind: mechanism
domain: [neurobiology]
secondary_domain: []
condition: []
source_count: 8
reviewed: 2026-09-25
up: "[[Neurobiology - Processes and mechanisms]]"
cssclasses: [research-topic]
tags: [research/topic, research/reference, research/domain/neurobiology]
---
# Dendritic integration

## Definition

Dendritic integration is the process by which thousands of synaptic inputs distributed across a neuron's dendritic tree are combined into a single output decision. It is where the 'many inputs, one output' arithmetic of a neuron actually happens.

## How it works

**The receiving surface.** Dendrites branch extensively and are usually covered with spines, which increase the surface available for synaptic contact and contain cytoskeletal elements responsible for the shape changes seen in some forms of plasticity. A neuron's input is therefore distributed over a large, irregular surface rather than collected at a single site. [[F102 Neuroscience Online cell types#^f102-dendrites|Organization of Cell Types]] [[F102 Neuroscience Online cell types#^f102-spines|Organization of Cell Types]]

**From local voltages to a decision.** Each active synapse produces a local graded potential whose size depends on the stimulus and on the synapse's distance from the soma, and which decays as it travels toward the soma, so distance attenuates influence. Inputs that arrive close together in time and space add - spatial and temporal summation are the standard description of how a neuron reaches threshold - and the summed potentials converge at the trigger zone, the initial segment of the axon, where voltage-gated sodium channels are dense and summed input is converted into an all-or-none output. This is why dendritic geometry - where a synapse sits, and how far its current must travel - is part of the computation rather than an implementation detail. [[F51 OpenStax Function of nervous tissue#^f51-graded|Function of Nervous Tissue]] [[F51 OpenStax Function of nervous tissue#^f51-summation|Function of Nervous Tissue]] [[F04 OpenStax Communication between neurons#^f04-initial-segment|Communication Between Neurons]]

**Why distance discounting is not a defect.** Because graded potentials decay as they spread, a distal input contributes less at the trigger zone than a proximal one of the same size. That attenuation turns dendritic geometry into part of the computation: a cell whose inputs sit on different branches can treat each branch's local sum as a separate vote, and coincidence between neighbouring inputs outweighs the same number of inputs scattered in space and time. Temporal proximity matters for the same reason - inputs that arrive within the membrane's window for charge to accumulate add; stragglers add little. [[F51 OpenStax Function of nervous tissue#^f51-graded|Function of Nervous Tissue]] [[F51 OpenStax Function of nervous tissue#^f51-summation|Function of Nervous Tissue]]

**Compartments.** The classical account distinguishes cell-body, dendritic and axonal compartments, and the same chapter notes that these distinctions do not hold for every neuron type. Compartmentalisation matters because a spine or dendritic branch can act as a semi-independent unit whose local voltage differs from the soma's, so the same number of synapses can have different effects depending on where they are and what else is active nearby. [[F102 Neuroscience Online cell types#^f102-compartments|Organization of Cell Types]]

**Active dendrites.** Dendrites are not passive cables: they carry conductances that can amplify or dampen local input, and spine shape changes accompany plasticity. [[F102 Neuroscience Online cell types#^f102-spines|Cell types]] Formal treatments of these dynamics are developed in the computational literature. [[F92 Neuronal Dynamics#^f92-models|Neuronal Dynamics]]

**Plasticity changes the arithmetic.** Short-term facilitation and depression alter how successive inputs summate over hundreds of milliseconds, while lasting changes in spine structure alter the surface available for contact on longer timescales. [[F100 Neuroscience Online synaptic plasticity#^f100-facilitation|Synaptic Plasticity]] [[F102 Neuroscience Online cell types#^f102-spines|Organization of Cell Types]] Input specificity in lasting plasticity makes sense against this geometry: a change confined to active synapses alters the local sum on one branch without rewriting the cell's whole input map, and structural spine changes adjust the receiving surface for exactly the contacts that were active. Integration and plasticity are therefore the same process viewed at different time constants rather than two separate stages: they share a timescale ladder - summation over milliseconds, short-term changes over seconds, structural change over days - and a claim about 'strengthening a synapse' is incomplete until its rung is named. [[F102 Neuroscience Online cell types#^f102-spines|Organization of Cell Types]] [[Short-term synaptic plasticity]] [[Long-term potentiation and depression]]

## Evidence and status

The mechanisms are established in reduced preparations with direct recording; the extent to which specific dendritic computations matter for behaviour in intact animals is an active question. The strongest statements about dendritic computation - branch-level spikes, coincidence detection in thin dendrites - come from reduced preparations and modelling, and the introductory treatments used here present linear summation as the baseline case. A defensible reading is that summation describes most textbook situations, that non-linear dendritic events are established in specific cell types, and that generalising either level to all neurons is unwarranted. [[F51 OpenStax Function of nervous tissue#^f51-limit|Function of Nervous Tissue]] [[F04 OpenStax Communication between neurons#^f04-caution-summation|AI synthesis: Communication Between Neurons]]

Population-level analyses of cortical activity show that the relevant variables are often distributed rather than localised to single cells, which constrains how much a single neuron's integration can explain. [[P22722855 Churchland 2012 Neural population dynamics#^p22722855-trajectory|Neural population dynamics]]

## Connections

Dendritic integration is the bridge between [[Ion gradients and membrane potential]] and [[Action potentials]], and it is the reason attention is paid to where a synapse sits on a cell rather than only to which transmitter it releases. [[F106 Neuroscience Online amino acid transmitters#^f106-spatial|Amino acid transmitters]]

**Cross-domain connection (curation).** Psychology-level descriptions of attention as selective enhancement translate, at this level, into mechanisms that change how inputs compete before the output decision is made; the bridge is a model-level one, and the population-dynamics finding that behaviour-relevant variables are distributed across cells bounds how much any single-neuron account can carry. [[Attention]] [[P22722855 Churchland 2012 Neural population dynamics#^p22722855-trajectory|Neural population dynamics]]

## Uncertainties

- Human dendritic computation cannot be recorded directly; extrapolation rests on animal work and modelling.
- Neuromodulation changes dendritic properties, so integration rules are state-dependent. [[P23040802 Marder 2012 Neuromodulation#^p23040802-state|Neuromodulation]]
