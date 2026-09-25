---
note_type: topic
title: "Dynamical systems models"
description: "Describing neural activity as trajectories through a state space, and what such models do and do not explain."
content_layer: reference
concept_kind: theory
domain: [computational-brain-theories]
secondary_domain: []
condition: []
source_count: 4
reviewed: 2026-09-25
up: "[[Computational Neuroscience and Brain Theories - Foundations]]"
cssclasses: [research-topic]
tags: [research/topic, research/reference, research/domain/computational]
---
# Dynamical systems models

## Definition

A dynamical systems model describes neural activity as a trajectory through a state space defined by the activity of a population, with the dynamics - not the individual cells - doing the computational work.

## How it works

**The modelling move.** A dynamical systems description treats a population's activity as a point moving through a low-dimensional state space, so the object of study becomes trajectories and their structure rather than individual unit rates, and tasks correspond to different trajectories. [[P22722855 Churchland 2012 Neural population dynamics#^p22722855-population|Neural population dynamics]]

**What "low-dimensional" means and why it surprised.** The population-dynamics study of motor cortex found that the activity of hundreds of neurons is well described by a few latent variables - a trajectory through a small state space - rather than by hundreds of independent single-cell codes, and that preparatory and movement-related activity formed distinct trajectories through that space that single-neuron rates did not capture well. The surprise is preparatory: the population state moves before movement begins, and the preparatory trajectory predicts the movement trajectory, which reframes preparation as dynamics about to unfold rather than as static motor plans and suggests that the system's state, not just its current input, determines the response. The description changed what counts as an explanation of motor cortex activity. [[P22722855 Churchland 2012 Neural population dynamics#^p22722855-population|Neural population dynamics]] [[P22722855 Churchland 2012 Neural population dynamics#^p22722855-trajectory|Neural population dynamics]]

**Where the dynamics come from.** Network models in the computational literature show how connectivity and cellular properties generate such dynamics: formal neuron models extend from single cells to populations and networks, where dynamics and coding properties emerge from connectivity rather than from single-cell properties - which is the modelling lineage behind trajectory descriptions. [[F92 Neuronal Dynamics#^f92-networks|Neuronal Dynamics]] [[F92 Neuronal Dynamics#^f92-models|Neuronal Dynamics]]

**The state-dependence problem does not go away.** Neuromodulators change the properties of neurons and synapses in a circuit - the parameters of these dynamics - so the same anatomical network can produce different functional outputs and different trajectories in different states, and the effect of a transmitter cannot be summarised without knowing the circuit's state. A dynamical description must therefore specify the state it was measured in, and degeneracy means similar outputs can arise from different parameters. [[P23040802 Marder 2012 Neuromodulation#^p23040802-reconfigure|Neuromodulation]] [[P23040802 Marder 2012 Neuromodulation#^p23040802-state|Neuromodulation]] [[P23040802 Marder 2012 Neuromodulation#^p23040802-limit|Neuromodulation]] [[P23040802 Marder 2012 Neuromodulation#^p23040802-degeneracy|Neuromodulation]]

## Evidence and status

Dynamical descriptions fit population recordings well and are widely used; the mapping from a fitted dynamical model to a biological mechanism is not automatic. Different models can produce similar behaviour, so a good fit of a dynamical model is not evidence that the hypothesised mechanism is the true one; the same discipline described for behavioural models applies here. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Computational modelling rules]]

The motor-cortex paper's claim is about the descriptive power of population-level models rather than about a specific circuit mechanism, and the analysis is a primary study of motor-cortex recordings in primates. Reading a low-dimensional description as an explanation of the circuit is the standard misreading. [[P22722855 Churchland 2012 Neural population dynamics#^p22722855-claim|Neural population dynamics]] [[P22722855 Churchland 2012 Neural population dynamics#^p22722855-limit|Neural population dynamics]]

A trajectory description is a description: it captures the data at one level and does not by itself name the circuit mechanism that produces it, and different network models can generate the same latent dynamics. The finding constrains mechanism accounts - any candidate must be able to produce such dynamics - without identifying one. That restraint is the standard this domain's articles apply to each other. [[Model comparison and identifiability]] [[F92 Neuronal Dynamics#^f92-networks|Neuronal Dynamics]]

## Connections

This note complements [[Neural coding and population codes]] and supplies the vocabulary used in [[Network and connectome models]].

**Cross-domain connection (curation).** Neuromodulation is where neurochemistry enters this framework: modulators change the parameters, so arousal, pharmacology and disease state are changes to the dynamical system, not external forces acting on it. [[Neuromodulation and circuit state]] [[ADHD and prefrontal catecholamines]]

## Uncertainties

- Dimensionality reduction choices affect the resulting picture, so reported trajectories are partly analysis-dependent.
