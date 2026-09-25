---
note_type: topic
title: "Neuromodulation and circuit state"
description: "How modulators such as monoamines and acetylcholine change the properties of whole circuits, making the same anatomy produce different outputs."
content_layer: reference
concept_kind: mechanism
domain: [neurochemistry, computational-brain-theories]
secondary_domain: []
condition: []
source_count: 6
reviewed: 2026-09-25
up: "[[Neurochemistry - Mechanisms]]"
cssclasses: [research-topic]
tags: [research/topic, research/reference, research/domain/neurochemistry, research/domain/computational]
---
# Neuromodulation and circuit state

## Definition

Neuromodulation is signalling that changes how a circuit processes information rather than delivering the primary information itself. Modulators act on many cells at once, altering excitability, synaptic strength and the balance of plasticity.

## How it works

**Reconfiguration.** Neuromodulators change the properties of neurons and synapses in a circuit, so the same anatomical network can produce different functional outputs depending on which modulators are active. The anatomical wiring constrains what a circuit can do; the modulatory state selects which of those possibilities is currently realised. [[P23040802 Marder 2012 Neuromodulation#^p23040802-reconfigure|Neuromodulation]]

**State dependence.** Because modulation depends on the current state of the circuit, a transmitter cannot be assigned a fixed function independent of context, and its effect cannot be summarised without knowing the state in which it acts. [[P23040802 Marder 2012 Neuromodulation#^p23040802-state|Neuromodulation]]

**Gain changes interact.** If a modulator changes both synaptic strength and cellular excitability, the circuit's output is not simply the sum of two effects; gain changes interact multiplicatively. This is why pharmacological results in vivo are often described as state-dependent effects rather than as directional increases or decreases. [[P23040802 Marder 2012 Neuromodulation#^p23040802-reconfigure|Neuromodulation]] [[F04 OpenStax Communication between neurons#^f04-metabotropic|Communication Between Neurons]]

**Degeneracy.** Circuits with different underlying parameters can produce similar outputs - the review calls this degeneracy and treats it as a fundamental problem for relating structure to function - which complicates inference from behaviour back to mechanism, so a measured effect constrains less than it appears to. [[P23040802 Marder 2012 Neuromodulation#^p23040802-degeneracy|Neuromodulation]]

**Examples.** Noradrenaline and dopamine shape prefrontal network activity in an inverted-U pattern; cholinergic projections set cortical state; histamine neurons fire during waking and support arousal; and endocannabinoids reduce transmitter release retrogradely at specific synapses. These are the concrete cases in this library. [[P19621976 Arnsten 2009 Prefrontal catecholamines and ADHD#^p19621976-catecholamines|Prefrontal catecholamines and ADHD]] [[F108 Neuroscience Online acetylcholine#^f108-pathways|Acetylcholine]] [[P18626069 Haas 2008 Histamine in the nervous system#^p18626069-waking|Histamine in the nervous system]] [[P26698193 Lu 2016 Endogenous cannabinoid system#^p26698193-retrograde|Endogenous cannabinoid system]]

**The methodological consequence.** Because a modulator's effect depends on circuit state, and because circuits with different parameters can produce similar outputs, an experiment that reports a transmitter's effect without the state has not identified a mechanism - it has described one measurement. The practical rule is to report modulator, state and output together. [[P23040802 Marder 2012 Neuromodulation#^p23040802-state|Neuromodulation]] [[P23040802 Marder 2012 Neuromodulation#^p23040802-degeneracy|Neuromodulation]]

## Evidence and status

Circuit reconfiguration is demonstrated directly in invertebrate and vertebrate preparations where modulators can be applied and activity recorded; the generalisation to human cognition is a modelling step. [[P23040802 Marder 2012 Neuromodulation#^p23040802-reconfigure|Neuromodulation]] The argument is built largely from crustacean and vertebrate preparations where identified neurons can be recorded and modulated one at a time. That preparation choice is a strength for mechanism and a limit for generalisation: the conceptual claim is well supported and the framework transfers better than any specific parameter, while specific quantitative claims about mammalian circuits need their own evidence. [[P23040802 Marder 2012 Neuromodulation#^p23040802-limit|Neuromodulation]] Psychopharmacology provides indirect human evidence: drugs that alter these systems produce state-dependent effects.

## Connections

This note explains why [[Receptor families and second messengers]] matter for network behaviour, and it underpins the computational domain's treatment of state-dependent computation in [[Dynamical systems models]].

**Connection to the rest of the reference.** Neuromodulation is the reason the domain's transmission articles end with circuit context rather than with the transmitter; it is also the mechanistic bridge to the computational domain, where a circuit's behaviour is treated as a dynamical system whose parameters can be set. [[Dynamical systems models]]

**Cross-domain connection (curation).** Neuromodulation in the neurochemistry domain supplies the receptor-and-second-messenger substrate that the computational-brain-theories domain invokes when it describes state-dependent computation, and that the psychology domain invokes when it describes arousal or motivation. Reading them together makes the inference chain from molecular mechanism to behavioural state explicit, and it is also where the methods domain's levels-of-analysis discipline bites hardest. [[Dynamical systems models]] [[Levels of analysis]]

## Uncertainties

- Most modulator systems are studied in animal preparations; human receptor-level dynamics are inferred.
- Because modulators act broadly, distinguishing their cognitive role from their arousal or autonomic role is genuinely difficult in naturalistic settings.
