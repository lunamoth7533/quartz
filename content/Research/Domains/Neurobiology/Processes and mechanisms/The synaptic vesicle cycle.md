---
note_type: topic
title: "The synaptic vesicle cycle"
description: "How transmitter is packaged, released and recycled: vesicle pools, calcium-triggered fusion, quantal release and membrane retrieval."
content_layer: reference
concept_kind: process
domain: [neurobiology, neurochemistry]
secondary_domain: []
condition: []
source_count: 5
reviewed: 2026-09-25
up: "[[Neurobiology - Processes and mechanisms]]"
cssclasses: [research-topic]
tags: [research/topic, research/reference, research/domain/neurobiology, research/domain/neurochemistry]
---
# The synaptic vesicle cycle

## Definition

The synaptic vesicle cycle is the sequence by which a presynaptic terminal packages transmitter into vesicles, releases it on calcium entry, and retrieves membrane to refill the pool. It is the machinery behind quantal transmission.

## How it works

**From arrival to fusion: the calcium trigger.** An arriving action potential opens voltage-gated calcium channels in the terminal, and calcium entry is the key trigger for release - established by classical experiments at the skeletal neuromuscular junction. Vesicles then fuse with the presynaptic membrane, and transmitter diffuses across the cleft and binds postsynaptic receptors. [[F115 Neuroscience Online transmitter release#^f115-calcium|Transmitter release]] [[F04 OpenStax Communication between neurons#^f04-release|Communication Between Neurons]] Release depends on both calcium availability and the state of the release machinery, so the same action potential can produce different amounts of transmitter at different moments - the observation that makes short-term plasticity possible. [[F115 Neuroscience Online transmitter release#^f115-calcium|Transmitter release]] [[F115 Neuroscience Online transmitter release#^f115-requirements|Transmitter release]]

**Quantal release.** Transmitter is released in discrete units: the postsynaptic response comes in multiples of a smallest unit, consistent with the fusion of individual transmitter-filled vesicles, which is the evidence that vesicles are the unit of release. [[F115 Neuroscience Online transmitter release#^f115-quanta|Transmitter release]]

**Release probability is the second variable.** Quantal size - the postsynaptic response to one vesicle - and release probability - the chance that an arriving spike releases any given vesicle - together determine the amplitude of a synaptic response and are jointly enough to predict a synapse's output, and they are regulated separately. Two contacts on the same cell can share transmitter and receptor types yet differ twenty-fold in probability, which is why synapse identity does not fix synaptic strength. That separability is also what plasticity exploits: short-term facilitation raises probability through residual calcium, and depression lowers it by draining the readily releasable pool. [[F115 Neuroscience Online transmitter release#^f115-quanta|Transmitter release]] [[F100 Neuroscience Online synaptic plasticity#^f100-facilitation|Synaptic plasticity]]

**Pools are a budget, not a warehouse.** Vesicles cycle through reserve, recycling and readily releasable pools. The reserve pool holds most vesicles, while the readily releasable pool is the small fraction docked and fusion-ready, so only a fraction is available for immediate release and the rest must be mobilised. How full the pools are sets how much a second spike can release: a train of spikes spends the releasable pool first, and recovery depends on mobilisation from the reserve and on membrane retrieval and refilling - steps that take longer than the inter-spike interval during fast firing, so a sustained train draws down the accessible pool faster than it refills. This budget view is the mechanism underlying short-term facilitation and depression; it explains why depression is strongest at high-probability synapses (they spend their stock quickly) and weakest at low-probability ones, and why synaptic strength and a synapse's response to a burst depend on its recent spending history as much as on the number of release sites. [[F100 Neuroscience Online synaptic plasticity#^f100-facilitation|Synaptic plasticity]] [[F115 Neuroscience Online transmitter release#^f115-requirements|Transmitter release]]

**Retrieval and reloading.** The cycle closes when membrane is retrieved after fusion and vesicles are refilled by transporters, which means transmitter supply and vesicle supply are separate constraints - and why transmitter synthesis and reuptake are part of synaptic function rather than separate housekeeping. [[F108 Neuroscience Online acetylcholine#^f108-inactivation|Acetylcholine transmission]]

## Evidence and status

The cycle is established from electrophysiology, electron microscopy and molecular perturbation, largely in neuromuscular junction and slice preparations. The neuromuscular junction is large, accessible and electrically quiet, so quantal events can be recorded individually and calcium entry manipulated directly; that is why the mechanism is described with unusual confidence at that synapse and by analogy elsewhere, and the chapter-level caveat is that release mechanisms are generalised from such large, accessible preparations. [[F115 Neuroscience Online transmitter release#^f115-limit|Mechanisms of Neurotransmitter Release]] [[F04 OpenStax Communication between neurons#^f04-limit|Communication Between Neurons]] At central synapses the same machinery is inferred from smaller, faster and harder-to-access contacts. Molecular components are well characterised, but the relative importance of each pool differs by synapse type, so 'the' vesicle cycle is a composite description, and pool sizes and probabilities measured at one synapse are not transplanted to another without evidence. [[F115 Neuroscience Online transmitter release#^f115-limit|Mechanisms of Neurotransmitter Release]]

## Connections

This note details the release step of [[Synapses and plasticity]] and the supply side of [[Transmitter synthesis, release and clearance]]. It is the machinery that drugs acting on release, such as stimulants that redistribute vesicular transmitter, perturb at the cellular level. [[F87 NIDA Drugs and the brain#^f87-reward|Drugs and the Brain]]

**Cross-domain connection (curation).** Pharmacology reaches this machinery directly: drugs that change vesicular filling, release or recycling shift what every downstream receptor sees, which is why the pharmacology domain treats the presynaptic terminal as a target class in its own right alongside the receptors themselves. [[Transmitter synthesis, release and clearance]] [[Drug classes and mechanisms overview]]

## Uncertainties

- Vesicle pool sizes and release probabilities differ by synapse, so findings from one preparation do not generalise to all synapses.
- Human presynaptic function is inferred from indirect measures, including imaging and pharmacology, rather than recorded directly.
