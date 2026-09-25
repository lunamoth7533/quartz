---
note_type: topic
title: "Short-term synaptic plasticity"
description: "Facilitation, depression and other changes that last milliseconds to seconds, driven by residual calcium and vesicle availability."
content_layer: reference
concept_kind: process
domain: [neurobiology]
secondary_domain: []
condition: []
source_count: 6
reviewed: 2026-09-25
cssclasses: [research-topic]
tags: [research/topic, research/reference, research/domain/neurobiology]
---
# Short-term synaptic plasticity

## Definition

Short-term plasticity is a change in synaptic strength lasting from milliseconds to seconds, occurring without lasting structural or molecular remodelling. It shapes how a circuit responds to patterns of activity rather than to single events.

## How it works

**Facilitation.** Residual calcium from a first action potential adds to the calcium signal of a second, so the second spike releases more transmitter. Paired-pulse facilitation decays as calcium is cleared. [[F100 Neuroscience Online synaptic plasticity#^f100-facilitation|Synaptic plasticity]] **Depression.** At synapses with high initial release probability, the readily releasable pool is depleted faster than it is refilled, so repeated spikes release less. [[F115 Neuroscience Online transmitter release#^f115-requirements|Transmitter release]] **Why both exist.** Whether a synapse facilitates or depresses depends on its baseline release probability, so the same transmitter system produces opposite short-term dynamics at different contacts. [[F100 Neuroscience Online synaptic plasticity#^f100-summation|Synaptic plasticity]]

**Functional consequence.** Short-term dynamics make transmission history-dependent, which is how circuits implement filtering, gain control and working memory-like activity over seconds. Computational treatments make these consequences explicit. [[F92 Neuronal Dynamics#^f92-networks|Neuronal Dynamics]]

## Evidence and status

Mechanisms are established from paired recordings at identified synapses. Generalising to human cognition requires models, because the relevant measurements are not directly available in people.

> [!info]- In depth: plasticity at the timescale of seconds
> **Two directions, one mechanism each.** Short-term facilitation is illustrated by paired pulses: residual calcium from the first action potential increases release on the second, an effect that decays over hundreds of milliseconds. Short-term depression runs the other way, when the readily releasable pool of vesicles has been consumed faster than it refills, so a later spike releases less. Which dominates depends on the synapse, the calcium handling and the recent firing pattern. [[F100 Neuroscience Online synaptic plasticity#^f100-facilitation|Synaptic Plasticity]]
>
> **Why this is not a lesser form of LTP.** Short-term changes persist for milliseconds to seconds and require no gene expression, whereas lasting plasticity requires second-messenger cascades and protein synthesis. They are different mechanisms with different time constants, so a short-term change is not a weak version of a long-term one; it is the synapse's fast gain control. [[F100 Neuroscience Online synaptic plasticity#^f100-lasting|Synaptic Plasticity]] [[P21779718 Bliss 2011 Long-term potentiation and depression#^p21779718-mechanism|Long-term potentiation and depression]]
>
> **Functional consequences.** Because facilitation and depression depend on recent history, they make transmission sensitive to input statistics: facilitating synapses act as filters that pass bursts and suppress isolated spikes, while depressing synapses emphasise the onset of a train. That is a computational claim about filtering properties, and it is supported at the level of the recorded preparation rather than in behaving animals. [[F100 Neuroscience Online synaptic plasticity#^f100-facilitation|Synaptic Plasticity]] [[F100 Neuroscience Online synaptic plasticity#^f100-limit|Synaptic Plasticity]]
>
> **Interaction with summation.** Short-term changes alter how successive inputs add at the postsynaptic cell, and therefore change the input-output relation of the circuit on the timescale of ongoing behaviour. Temporal summation and short-term plasticity are two descriptions of the same fast arithmetic. [[F100 Neuroscience Online synaptic plasticity#^f100-summation|Synaptic Plasticity]] [[F51 OpenStax Function of nervous tissue#^f51-summation|Function of Nervous Tissue]]
>
> **Reading rule.** Any statement that a synapse 'strengthened' should be qualified with a timescale; without it, the claim cannot be distinguished from a change in release probability on the timescale of a single burst. [[P21779718 Bliss 2011 Long-term potentiation and depression#^p21779718-timing|Long-term potentiation and depression]]

> [!info]- Further depth: dynamics during trains, and why state matters
> **During a train, both processes run at once.** Facilitation rises within a few spikes as residual calcium accumulates; depression grows as the readily releasable pool drains and cannot refill between spikes. The recorded output is their sum, which is why a synapse often facilitates at stimulus onset and depresses as the train continues, and why the same input pattern can mean different things to different synapses in one circuit. [[F100 Neuroscience Online synaptic plasticity#^f100-facilitation|Synaptic Plasticity]] [[F115 Neuroscience Online transmitter release#^f115-requirements|Mechanisms of Neurotransmitter Release]]
>
> **Longer short-term forms exist.** Post-tetanic potentiation - enhanced release lasting seconds after a burst - is described in the same chapter as facilitation and sits between it and lasting plasticity on the timescale axis; it is still a presynaptic, vesicle-supply phenomenon rather than a structural change. [[F100 Neuroscience Online synaptic plasticity#^f100-facilitation|Synaptic Plasticity]] [[F100 Neuroscience Online synaptic plasticity#^f100-lasting|Synaptic Plasticity]]
>
> **Neuromodulators retune the filter.** Release probability is a target of neuromodulation, so the same synapse can change its filtering properties - burst-passing versus onset-emphasising - when the circuit's modulatory state changes. Short-term dynamics are therefore state-dependent by construction, and measurements taken in one behavioural or pharmacological state do not transfer automatically to another. [[P23040802 Marder 2012 Neuromodulation#^p23040802-state|Neuromodulation of neuronal circuits]]
>
> **The arithmetic the reader should carry.** A synapse's output during any short sequence is approximately the number of vesicles released multiplied by the postsynaptic response to each, with both factors moving: probability rises and falls with residual calcium, pool size falls with use and recovers with time, and quantal size stays nearly fixed over these windows. That compact picture explains facilitation, depression and their coexistence without invoking any lasting change, and it is the baseline against which claims about stronger, longer-lasting plasticity must be distinguished. [[F115 Neuroscience Online transmitter release#^f115-quanta|Mechanisms of Neurotransmitter Release]] [[F100 Neuroscience Online synaptic plasticity#^f100-summation|Synaptic Plasticity]]
>
> **Cross-domain connection (curation).** Computational neuroscience builds working-memory and gain-control models on exactly these dynamics, so the psychological claim that 'transient memory does not need lasting change' rests on this presynaptic arithmetic; the link is a model-based bridge rather than a direct measurement in behaving humans. [[Working memory]] [[Neuronal cell biology and energetics]]

## Connections

This is the fast end of the spectrum developed in [[Synapses and plasticity]]; it is distinct from the lasting change described in [[Long-term potentiation and depression]], although the two interact through calcium signalling.

## Uncertainties

- The mapping from short-term dynamics to network computations is model-dependent.
- Neuromodulators alter release probability, so short-term dynamics change with circuit state. [[P23040802 Marder 2012 Neuromodulation#^p23040802-state|Neuromodulation]]
