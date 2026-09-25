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
cssclasses: [research-topic]
tags: [research/topic, research/reference, research/domain/computational, research/domain/neurochemistry]
---
# Reward prediction error

## Definition

A reward prediction error is the difference between the reward received and the reward expected. It is the teaching signal in temporal-difference learning and a candidate description of midbrain dopamine activity.

## How it works

**Neural correlate.** Midbrain dopamine neurons increase firing when outcomes exceed prediction and reduce firing when they fall short. [[P27069377 Schultz 2016 Reward prediction error#^p27069377-rpe|Reward prediction error]]

**Why it matters.** The correspondence links a cellular signal to a formal learning rule, making dopamine a rare case where a computational construct has a physiological candidate. [[P27069377 Schultz 2016 Reward prediction error#^p27069377-learning|Reward prediction error]]

**Disputed completeness.** Dopamine neurons are heterogeneous, carry signals beyond prediction error including salience and movement-related information, and different populations project to different targets. [[P29760524 Berke 2018 What does dopamine mean#^p29760524-heterogeneity|What does dopamine mean?]] [[P29760524 Berke 2018 What does dopamine mean#^p29760524-complexity|What does dopamine mean?]]

**Psychiatric use.** Prediction-error accounts are used to interpret reinforcement-learning differences in several conditions; those interpretations are models of group-average behaviour, not diagnostic measures. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Computational modelling rules]]

## Evidence and status

The basic mapping is well replicated in animals and supported by human imaging and pharmacological work; its scope as a general account of dopamine is contested by researchers in the field. [[P29760524 Berke 2018 What does dopamine mean#^p29760524-caution|What does dopamine mean?]]

> [!info]- In depth: a signal that survives replication, and the questions it does not answer
> **What the signal is.** Midbrain dopamine neurons respond to reward-prediction error: activation when an outcome is better than predicted and depression when it is worse. The signal is defined relative to expectation rather than to reward itself, which is why it explains both the response to unexpected good outcomes and the absence of response to fully predicted ones. [[P27069377 Schultz 2016 Reward prediction error#^p27069377-rpe|Reward prediction error]]
>
> **Why it matters computationally.** The signal maps onto the teaching signal of reinforcement learning, which is the reason the finding links cellular recording to a formal framework rather than merely describing a neuronal response. That link is what allows a computational model to generate predictions that can be tested against neural data. [[P27069377 Schultz 2016 Reward prediction error#^p27069377-learning|Reward prediction error]] [[F123 Sutton and Barto Reinforcement Learning#^f123-td|Reinforcement Learning]]
>
> **The complications.** The review notes that dopamine carries additional signals beyond reward prediction error, including salience and movement-related information, and different populations project to different targets and can carry different signals. The field's own critical assessment cautions against inferring what dopamine does for an individual from group-level reward experiments. [[P27069377 Schultz 2016 Reward prediction error#^p27069377-scope|Reward prediction error]] [[P27069377 Schultz 2016 Reward prediction error#^p27069377-limit|Reward prediction error]] [[P29760524 Berke 2018 What does dopamine mean#^p29760524-heterogeneity|What does dopamine mean?]] [[P29760524 Berke 2018 What does dopamine mean#^p29760524-caution|What does dopamine mean?]]
>
> **Interpreting a fit.** Because different models can produce similar behaviour, a model that reproduces a prediction-error-like signal is not proof that the brain computes that model; parameter recovery checks and model comparison with reported uncertainty are the minimum discipline. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Computational modelling rules]] [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-fitting|Computational modelling rules]]
>
> **Reading rule.** Separate the measured neuronal response, the computational quantity it resembles, and the algorithmic claim about what the brain computes. The first is well established, the second is a mapping with identified limits, and the third requires converging evidence from behaviour and manipulation. [[P29760524 Berke 2018 What does dopamine mean#^p29760524-complexity|What does dopamine mean?]]

> [!info]- Further depth: a replicated signal and its interpretive limits
> The signal is defined relative to expectation, which is why unpredicted good outcomes produce activation, fully predicted ones produce little, and worse-than-predicted outcomes produce depression - the property that maps onto reinforcement learning's teaching signal. Dopamine also carries salience and movement-related information, different populations project to different targets, and the field's critical review warns against inferring what dopamine does for an individual from group-level reward experiments. A model reproducing a prediction-error-like signal is not proof that the brain computes that model. [[P27069377 Schultz 2016 Reward prediction error#^p27069377-rpe|Reward prediction error]] [[P27069377 Schultz 2016 Reward prediction error#^p27069377-learning|Reward prediction error]] [[P27069377 Schultz 2016 Reward prediction error#^p27069377-scope|Reward prediction error]] [[P29760524 Berke 2018 What does dopamine mean#^p29760524-heterogeneity|What does dopamine mean?]] [[P29760524 Berke 2018 What does dopamine mean#^p29760524-caution|What does dopamine mean?]] [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Computational modelling rules]]
>
> **Why the correspondence is the field's showcase.** A formal learning theory predicted a specific teaching signal; dopaminergic responses matched its sign, size and, critically, its transfer - responding to the predictor once the cue became informative. That pattern of confirmation is why the reward-prediction-error story is treated as the strongest case of a computational construct having a physiological candidate, and why it anchors so many psychiatric models of reward-related alteration. [[P27069377 Schultz 2016 Reward prediction error#^p27069377-rpe|Reward prediction error]] [[P27069377 Schultz 2016 Reward prediction error#^p27069377-learning|Reward prediction error]]
>
> **The heterogeneity caveat is load-bearing.** Dopamine neurons are not homogeneous: subpopulations carry differently signed and non-error signals, projections target different regions, and markers like movement initiation appear in the same recordings. The showcase correspondence holds for the canonical population and paradigm; treating "dopamine = reward" as an identity, rather than as one measured role of a heterogeneous system, is the misreading the newer electrophysiology forecloses. [[P29760524 Berke 2018 What does dopamine mean#^p29760524-heterogeneity|What does dopamine mean?]] [[P29760524 Berke 2018 What does dopamine mean#^p29760524-complexity|What does dopamine mean?]]
>
> **Cross-domain connection (curation).** This note is the computational domain's direct export to conditions: reinforcement-learning parameters measured in ADHD, depression and psychosis research all descend from it, and their interpretability is bounded by the modelling-cautions article rather than by the strength of the dopamine correspondence. [[Dopamine hypothesis in bipolar disorder]] [[Model comparison and identifiability]]

## Connections

This is the physiological anchor for [[Reinforcement learning]] and is used in the ADHD domain's account of reinforcement sensitivity.

## Uncertainties

- Translating group-level prediction-error differences into claims about any individual is not supported.
