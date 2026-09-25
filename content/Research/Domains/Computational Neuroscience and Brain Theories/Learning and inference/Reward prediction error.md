---
note_type: topic
title: "Reward prediction error"
description: "The signal proposed to drive learning from reward, its neural correlates, and the conditions under which the mapping is disputed."
content_layer: reference
concept_kind: theory
domain: [computational-brain-theories, neurochemistry]
secondary_domain: []
condition: []
source_count: 4
reviewed: 2026-09-25
up: "[[Computational Neuroscience and Brain Theories - Learning and inference]]"
cssclasses: [research-topic]
tags: [research/topic, research/reference, research/domain/computational, research/domain/neurochemistry]
---
# Reward prediction error

## Definition

A reward prediction error is the difference between the reward received and the reward expected. It is the teaching signal in temporal-difference learning and a candidate description of midbrain dopamine activity.

## How it works

**What the signal is.** Midbrain dopamine neurons respond to reward-prediction error: firing increases when an outcome is better than predicted and is depressed when it falls short. The signal is defined relative to expectation rather than to reward itself, which is why it explains both the activation to unexpected good outcomes and the little or absent response to fully predicted ones. [[P27069377 Schultz 2016 Reward prediction error#^p27069377-rpe|Reward prediction error]]

**Why it matters computationally.** The signal maps onto the teaching signal of reinforcement learning, so the correspondence links a cellular recording to a formal learning rule rather than merely describing a neuronal response, and it allows a computational model to generate predictions that can be tested against neural data. [[P27069377 Schultz 2016 Reward prediction error#^p27069377-learning|Reward prediction error]] [[F123 Sutton and Barto Reinforcement Learning#^f123-td|Reinforcement Learning]]

**Why the correspondence is the field's showcase.** A formal learning theory predicted a specific teaching signal; dopaminergic responses matched its sign, size and, critically, its transfer - responding to the predictor once the cue became informative. That pattern of confirmation is why dopamine is treated as the strongest, and rare, case of a computational construct having a physiological candidate, and why it anchors so many psychiatric models of reward-related alteration. [[P27069377 Schultz 2016 Reward prediction error#^p27069377-rpe|Reward prediction error]] [[P27069377 Schultz 2016 Reward prediction error#^p27069377-learning|Reward prediction error]]

**The heterogeneity caveat is load-bearing.** Dopamine neurons are not homogeneous: they carry signals beyond reward prediction error, including salience and movement-related information; subpopulations carry differently signed and non-error signals; different populations project to different targets and can carry different signals; and markers like movement initiation appear in the same recordings. The showcase correspondence holds for the canonical population and paradigm; treating "dopamine = reward" as an identity, rather than as one measured role of a heterogeneous system, is the misreading the newer electrophysiology forecloses. [[P27069377 Schultz 2016 Reward prediction error#^p27069377-scope|Reward prediction error]] [[P27069377 Schultz 2016 Reward prediction error#^p27069377-limit|Reward prediction error]] [[P29760524 Berke 2018 What does dopamine mean#^p29760524-heterogeneity|What does dopamine mean?]] [[P29760524 Berke 2018 What does dopamine mean#^p29760524-complexity|What does dopamine mean?]]

**Psychiatric use and interpreting a fit.** Prediction-error accounts are used to interpret reinforcement-learning differences in several conditions; those interpretations are models of group-average behaviour, not diagnostic measures, and the field's own critical assessment cautions against inferring what dopamine does for an individual from group-level reward experiments. [[P29760524 Berke 2018 What does dopamine mean#^p29760524-caution|What does dopamine mean?]] Because different models can produce similar behaviour, a model that reproduces a prediction-error-like signal is not proof that the brain computes that model; parameter recovery checks and model comparison with reported uncertainty are the minimum discipline. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Computational modelling rules]] [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-fitting|Computational modelling rules]]

**Reading rule.** Separate the measured neuronal response, the computational quantity it resembles, and the algorithmic claim about what the brain computes. The first is well established, the second is a mapping with identified limits, and the third requires converging evidence from behaviour and manipulation. [[P29760524 Berke 2018 What does dopamine mean#^p29760524-complexity|What does dopamine mean?]]

## Evidence and status

The basic mapping is well replicated in animals and supported by human imaging and pharmacological work; its scope as a general account of dopamine is contested by researchers in the field. [[P29760524 Berke 2018 What does dopamine mean#^p29760524-caution|What does dopamine mean?]]

## Connections

This is the physiological anchor for [[Reinforcement learning]] and is used in the ADHD domain's account of reinforcement sensitivity.

**Cross-domain connection (curation).** This note is the computational domain's direct export to conditions: reinforcement-learning parameters measured in ADHD, depression and psychosis research all descend from it, and their interpretability is bounded by the modelling-cautions article rather than by the strength of the dopamine correspondence. [[Dopamine hypothesis in bipolar disorder]] [[Model comparison and identifiability]]

## Uncertainties

- Translating group-level prediction-error differences into claims about any individual is not supported.
