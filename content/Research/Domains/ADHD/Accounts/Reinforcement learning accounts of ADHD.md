---
note_type: topic
title: "Reinforcement learning accounts of ADHD"
description: "Accounts that explain ADHD-related behaviour through altered reinforcement sensitivity or learning rate, and their evidence."
content_layer: reference
concept_kind: theory
domain: [adhd, computational-brain-theories]
secondary_domain: []
condition: []
source_count: 9
reviewed: 2026-09-27
up: "[[ADHD Map]]"
cssclasses: [research-topic]
tags: [research/topic, research/reference, research/domain/adhd, research/domain/computational]
---
# Reinforcement learning accounts of ADHD

## Definition

Reinforcement learning accounts propose that ADHD-related behaviour reflects differences in how rapidly or strongly behaviour is shaped by reward and punishment, rather than a deficit in a single cognitive faculty.

## How it works

**The framework, briefly.** Reinforcement learning formalises how a learner uses reward signals to choose actions, with value functions and policies as central objects, and it treats exploration and exploitation as an explicit trade-off; it provides parameters such as learning rate and value sensitivity that can be estimated from behaviour. Temporal-difference learning updates value estimates from the difference between predicted and observed outcomes - the quantity that maps onto prediction-error signals in the brain. It is a formal model of adaptive behaviour, not a claim about a particular neural implementation. [[F123 Sutton and Barto Reinforcement Learning#^f123-framework|Reinforcement Learning]] [[F123 Sutton and Barto Reinforcement Learning#^f123-td|Reinforcement Learning]] [[F123 Sutton and Barto Reinforcement Learning#^f123-exploration|Reinforcement Learning]] [[F123 Sutton and Barto Reinforcement Learning#^f123-limit|Reinforcement Learning]]

**The behavioural evidence in ADHD.** Delay aversion - preference for a smaller immediate reward over a larger delayed one - appeared as a dissociable component in ADHD samples in the nine-task study described in [[Heterogeneity and presentations in ADHD]], expressed in choice behaviour rather than in symptom counts. Because it dissociates from inhibitory and timing measures, it supports accounts in which reward learning and timing contribute separately rather than as one core deficit. [[P20410727 Sonuga-Barke 2010 Beyond the dual pathway#^p20410727-finding|Beyond the dual pathway model]]

**The neural candidate and its limits.** Dopamine reward prediction error is the candidate neural signal for these updates: midbrain dopamine neurons respond to reward-prediction error - activation when an outcome is better than predicted, depression when it is worse - and that signal maps onto the teaching signal of reinforcement learning. It is not the whole story: dopamine neurons carry additional signals including salience and movement-related information, different populations project to different targets and can carry different signals, and the critical review of the field warns against reading a group-level reward result as a statement about what dopamine does for an individual. [[P27069377 Schultz 2016 Reward prediction error#^p27069377-rpe|Reward prediction error]] [[P27069377 Schultz 2016 Reward prediction error#^p27069377-learning|Reward prediction error]] [[P27069377 Schultz 2016 Reward prediction error#^p27069377-scope|Reward prediction error]] [[P29760524 Berke 2018 What does dopamine mean#^p29760524-complexity|What does dopamine mean?]] [[P29760524 Berke 2018 What does dopamine mean#^p29760524-heterogeneity|What does dopamine mean?]] [[P29760524 Berke 2018 What does dopamine mean#^p29760524-caution|What does dopamine mean?]]

**Catecholamines connect the account to treatment.** Prefrontal catecholamine signalling influences attention and working-memory networks: prefrontal function depends on noradrenaline and dopamine in an inverted-U relationship to arousal, with benefit attributed to postsynaptic alpha-2A receptors and moderate D1 stimulation, and with both too little and too much signalling impairing performance. That relationship is the mechanistic bridge to the pharmacology of treatment and the drugs discussed in [[Stimulant and non-stimulant mechanisms]], and it is also why simple 'more dopamine is better' readings fail. [[P19621976 Arnsten 2009 Prefrontal catecholamines and ADHD#^p19621976-catecholamines|Prefrontal catecholamines and ADHD]] [[P19621976 Arnsten 2009 Prefrontal catecholamines and ADHD#^p19621976-mechanisms|Prefrontal catecholamines and ADHD]]

**Estimation is where claims are made or lost.** Reading reinforcement accounts properly means fitting candidate models to behaviour, checking parameter recovery before interpreting parameters, simulating data from the candidates and reporting model-comparison uncertainty. The methods literature is explicit that different models can produce similar behaviour, so a good fit is not evidence that the hypothesised mechanism is the true one. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-fitting|Computational modelling rules]] [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-validation|Computational modelling rules]] [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Computational modelling rules]]

**Reading rule.** Distinguish (a) a replicable group difference on a reinforcement task, (b) an estimated parameter such as a learning rate, and (c) a claim about everyday motivation or treatment response. Each step needs its own evidence, and the third is the weakest of the three in this literature. [[P40948064 Cortese 2025 ADHD in adults evidence base#^p40948064-open|ADHD in adults: evidence base]]

## Evidence and status

Behavioural differences on reinforcement tasks are replicable at group level; parameter estimates require careful model comparison and do not map directly onto individuals. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Computational modelling rules]]

## Recent research

- **2024 · Narrative review (Personality Neuroscience).** States the dopamine transfer deficit hypothesis in reinforcement-learning terms: weak transfer of dopamine responses from rewards to the cues that predict them would explain the spontaneously hypertensive rat's preference for immediate reinforcement and its steep delay gradient, and by extension altered reinforcement in ADHD. [[P38384667 Tripp 2024 Dopamine transfer deficit in ADHD#^p38384667-dtd|Tripp 2024]] [[P38384667 Tripp 2024 Dopamine transfer deficit in ADHD#^p38384667-rodent|Tripp 2024]] The support comes mainly from one animal model and still needs direct human tests. [[P38384667 Tripp 2024 Dopamine transfer deficit in ADHD#^p38384667-caution-translation|Appraisal: Tripp 2024]]
- **2023 · Case-control experimental study (Journal of Child Psychology and Psychiatry).** Tests such predictions in children: those with ADHD learned an instrumental response more slowly under both continuous and partial reinforcement and showed a weaker partial-reinforcement extinction effect. [[P37040877 Hulsbosch 2023 Instrumental learning in ADHD#^p37040877-acquisition|Hulsbosch 2023]] [[P37040877 Hulsbosch 2023 Instrumental learning in ADHD#^p37040877-extinction|Hulsbosch 2023]] Group differences of this kind still need model fitting before they can be read as a learning-rate parameter. [[P37040877 Hulsbosch 2023 Instrumental learning in ADHD#^p37040877-caution-mechanism|Appraisal: Hulsbosch 2023]]

## Connections

This note links the ADHD domain to [[Reinforcement learning]] and to [[Model-based and model-free control]].

- [[Drift diffusion models]] - the evidence-accumulation model behind the most consistent ADHD modelling finding, a lower drift rate, derived from the same competing theories.
- [[Cognitive models of ADHD]] - places reinforcement accounts among the other cognitive families: the dual pathway's motivational, delay-related route is the choice behaviour this note formalises.

## Uncertainties

- Task parameters and everyday reinforcement sensitivity correlate weakly, which limits clinical inference from these paradigms.

## Detailed lesson

- [[Lesson - Reinforcement learning accounts of ADHD]] - full lesson with a plain-language model, worked example, common confusions, source boundaries and practice questions.
- Module: [[Module 08 - ADHD|ADHD]]
