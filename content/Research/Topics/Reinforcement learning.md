---
note_type: topic
title: "Reinforcement learning"
description: "Learning from reward: value functions, policies, the exploration-exploitation trade-off, and why the framework fits neural data."
content_layer: reference
concept_kind: theory
domain: [computational-brain-theories, psychology]
secondary_domain: []
condition: []
source_count: 4
reviewed: 2026-09-25
cssclasses: [research-topic]
tags: [research/topic, research/reference, research/domain/computational, research/domain/psychology]
---
# Reinforcement learning

## Definition

Reinforcement learning formalises how an agent learns to choose actions from reward signals. Value functions estimate future reward, policies select actions, and learning updates both. [[F123 Sutton and Barto Reinforcement Learning#^f123-framework|Reinforcement Learning]]

## How it works

**Prediction error.** Temporal-difference learning updates value estimates from the difference between predicted and observed outcomes, a quantity that maps onto reward-related dopamine signals in the brain. [[F123 Sutton and Barto Reinforcement Learning#^f123-td|Reinforcement Learning]] [[P27069377 Schultz 2016 Reward prediction error#^p27069377-rpe|Reward prediction error]]

**Exploration.** The framework treats exploration and exploitation as an explicit trade-off, which is why it is used to model adaptive behaviour under uncertainty. [[F123 Sutton and Barto Reinforcement Learning#^f123-exploration|Reinforcement Learning]]

**Model-based and model-free.** Agents can learn cached values (model-free) or use an internal model of the environment (model-based); the two produce different behavioural signatures. [[F123 Sutton and Barto Reinforcement Learning#^f123-framework|Reinforcement Learning]]

**Neural anchors.** Dopamine signals relate to prediction error, and prefrontal and striatal circuits are implicated in value-based choice, though the mapping is richer than a single signal. [[P27069377 Schultz 2016 Reward prediction error#^p27069377-scope|Reward prediction error]] [[P29760524 Berke 2018 What does dopamine mean#^p29760524-complexity|What does dopamine mean?]]

## Evidence and status

The formal framework is standard in machine learning and well supported as a description of some neural signals; using it as a complete account of human motivation is an extrapolation.

> [!info]- In depth: the formalism, its biological anchor and its interpretive limits
> **The framework.** Reinforcement learning formalises how an agent learns from reward signals to choose actions, with value functions and policies as central objects; temporal-difference learning updates value estimates from the difference between predicted and observed outcomes, and exploration and exploitation are treated as an explicit trade-off. It is a formal model of adaptive behaviour rather than a claim about any particular neural implementation. [[F123 Sutton and Barto Reinforcement Learning#^f123-framework|Reinforcement Learning]] [[F123 Sutton and Barto Reinforcement Learning#^f123-td|Reinforcement Learning]] [[F123 Sutton and Barto Reinforcement Learning#^f123-exploration|Reinforcement Learning]] [[F123 Sutton and Barto Reinforcement Learning#^f123-limit|Reinforcement Learning]]
>
> **The biological anchor.** Midbrain dopamine neurons respond to reward-prediction error - activation when an outcome is better than predicted, depression when it is worse - and that signal maps onto the teaching signal the formalism uses, which is why the framework links cellular recording to a computational language. [[P27069377 Schultz 2016 Reward prediction error#^p27069377-rpe|Reward prediction error]] [[P27069377 Schultz 2016 Reward prediction error#^p27069377-learning|Reward prediction error]]
>
> **The anchor is not the whole story.** Dopamine neurons carry additional signals including salience and movement-related information, different populations project to different targets and can carry different signals, and the critical review of the field warns against inferring what dopamine does for an individual from group-level reward experiments. A one-to-one mapping between the model's error term and a neuron type is therefore an approximation. [[P27069377 Schultz 2016 Reward prediction error#^p27069377-scope|Reward prediction error]] [[P29760524 Berke 2018 What does dopamine mean#^p29760524-heterogeneity|What does dopamine mean?]] [[P29760524 Berke 2018 What does dopamine mean#^p29760524-complexity|What does dopamine mean?]] [[P29760524 Berke 2018 What does dopamine mean#^p29760524-caution|What does dopamine mean?]]
>
> **Model-based and model-free versions.** The framework distinguishes learning that caches values from learning that builds a model of the environment and evaluates options at decision time; the two dissociate behaviourally and have different computational costs, which is why the distinction is used to interpret choice experiments in several domains in this library. [[F123 Sutton and Barto Reinforcement Learning#^f123-framework|Reinforcement Learning]] [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-fitting|Computational modelling rules]]
>
> **Fitting is where claims are won or lost.** Model-based analysis requires fitting candidate models to data, checking parameter recovery before interpreting parameters, simulating data from the candidates and reporting model-comparison uncertainty; different models can produce similar behaviour, so a good fit is not evidence that the hypothesised mechanism is the true one. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-validation|Computational modelling rules]] [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Computational modelling rules]]
>
> **The temporal-difference insight is the theory's engine.** Learning does not wait for the final outcome: each step updates value estimates from the difference between what happened and what was predicted, so a chain of small corrections builds value knowledge online. The formal quantity - the prediction error - is what made the framework neuroscientifically productive, because dopamine responses track exactly that difference: unexpected reward excites, omitted reward suppresses, and fully predicted reward produces no response. [[F123 Sutton and Barto Reinforcement Learning#^f123-td|Reinforcement Learning]] [[P27069377 Schultz 2016 Reward prediction error#^p27069377-rpe|Reward prediction error]]
>
> **What the framework does not claim.** A fitted reinforcement-learning model is a description of choice behaviour under a model class; parameters are interpretable only after recovery checks, and dopamine's heterogeneity means the mapping from signal to learning is partial rather than one-to-one. Psychiatric applications that quote model parameters as trait markers inherit exactly these limits. [[P29760524 Berke 2018 What does dopamine mean#^p29760524-complexity|What does dopamine mean?]] [[Model comparison and identifiability]]
>
> **Cross-domain connection (curation).** This formalism is the computational home of the conditioning article and the habit article in psychology: classical and operant paradigms, habit formation and the model-based/model-free distinction are all expressible inside it, which is why those three articles cross-link here rather than restating the maths. [[Learning and conditioning]] [[Procedural memory and habit]]

## Connections

This note is developed further in [[Reward prediction error]] and [[Model-based and model-free control]], and it links to the psychology material on [[Motivation and reward]].

## Uncertainties

- Individual differences in model-based control are measurable but their stability across tasks is debated.
