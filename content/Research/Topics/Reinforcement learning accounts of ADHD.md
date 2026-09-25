---
note_type: topic
title: "Reinforcement learning accounts of ADHD"
description: "Accounts that explain ADHD-related behaviour through altered reinforcement sensitivity or learning rate, and their evidence."
content_layer: reference
concept_kind: theory
domain: [adhd, computational-brain-theories]
secondary_domain: []
condition: []
source_count: 7
reviewed: 2026-09-25
cssclasses: [research-topic]
tags: [research/topic, research/reference, research/domain/adhd, research/domain/computational]
---
# Reinforcement learning accounts of ADHD

## Definition

Reinforcement learning accounts propose that ADHD-related behaviour reflects differences in how rapidly or strongly behaviour is shaped by reward and punishment, rather than a deficit in a single cognitive faculty.

## How it works

**Delay and reinforcement.** Delay aversion - preference for immediate smaller rewards - is one dissociable component in ADHD samples, and it is expressed in choice behaviour rather than in symptoms. [[P20410727 Sonuga-Barke 2010 Beyond the dual pathway#^p20410727-finding|Beyond the dual pathway model]]

**Computational framing.** Reinforcement learning formalises how predictions and outcomes shape choice, providing parameters such as learning rate and value sensitivity that can be estimated from behaviour. [[F123 Sutton and Barto Reinforcement Learning#^f123-framework|Reinforcement Learning]]

**Neural link.** Dopamine reward prediction error is the candidate neural signal for these updates, with the caveat that dopamine carries additional signals. [[P27069377 Schultz 2016 Reward prediction error#^p27069377-rpe|Reward prediction error]] [[P29760524 Berke 2018 What does dopamine mean#^p29760524-complexity|What does dopamine mean?]]

**Catecholamine basis.** Prefrontal catecholamine signalling influences attention and working-memory networks in an inverted-U relationship, which connects reinforcement accounts to the pharmacology of treatment. [[P19621976 Arnsten 2009 Prefrontal catecholamines and ADHD#^p19621976-catecholamines|Prefrontal catecholamines and ADHD]]

## Evidence and status

Behavioural differences on reinforcement tasks are replicable at group level; parameter estimates require careful model comparison and do not map directly onto individuals. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Computational modelling rules]]

> [!info]- In depth: from choice behaviour to estimated parameters
> **The framework, briefly.** Reinforcement learning formalises how an agent learns from reward signals to choose actions, with value functions and policies as central objects, and it treats exploration and exploitation as an explicit trade-off. Temporal-difference learning updates value estimates from the difference between predicted and observed outcomes - the quantity that maps onto prediction-error signals in the brain. It is a formal model of adaptive behaviour, not a claim about a particular neural implementation. [[F123 Sutton and Barto Reinforcement Learning#^f123-framework|Reinforcement Learning]] [[F123 Sutton and Barto Reinforcement Learning#^f123-td|Reinforcement Learning]] [[F123 Sutton and Barto Reinforcement Learning#^f123-exploration|Reinforcement Learning]] [[F123 Sutton and Barto Reinforcement Learning#^f123-limit|Reinforcement Learning]]
>
> **The behavioural evidence in ADHD.** Delay aversion - preference for a smaller immediate reward over a larger delayed one - appeared as a dissociable component in the nine-task study described in [[Heterogeneity and presentations in ADHD]], expressed in choice behaviour rather than in symptom counts. Because it dissociates from inhibitory and timing measures, it supports accounts in which reward learning and timing contribute separately rather than as one core deficit. [[P20410727 Sonuga-Barke 2010 Beyond the dual pathway#^p20410727-finding|Beyond the dual pathway model]]
>
> **The neural candidate and its limits.** Midbrain dopamine neurons respond to reward-prediction error - activation when an outcome is better than predicted, depression when it is worse - and that signal maps onto the teaching signal of reinforcement learning. It is not the whole story: dopamine neurons carry additional signals including salience and movement-related information, different populations project to different targets and can carry different signals, and the critical review of the field warns against reading a group-level reward result as a statement about what dopamine does for an individual. [[P27069377 Schultz 2016 Reward prediction error#^p27069377-rpe|Reward prediction error]] [[P27069377 Schultz 2016 Reward prediction error#^p27069377-learning|Reward prediction error]] [[P27069377 Schultz 2016 Reward prediction error#^p27069377-scope|Reward prediction error]] [[P29760524 Berke 2018 What does dopamine mean#^p29760524-complexity|What does dopamine mean?]] [[P29760524 Berke 2018 What does dopamine mean#^p29760524-heterogeneity|What does dopamine mean?]] [[P29760524 Berke 2018 What does dopamine mean#^p29760524-caution|What does dopamine mean?]]
>
> **Catecholamines connect the account to treatment.** Prefrontal function depends on noradrenaline and dopamine in an inverted-U relationship to arousal, with benefit attributed to postsynaptic alpha-2A receptors and moderate D1 stimulation, and with both too little and too much signalling impairing performance. That relationship is the mechanistic bridge to the drugs discussed in [[Stimulant and non-stimulant mechanisms]], and it is also why simple 'more dopamine is better' readings fail. [[P19621976 Arnsten 2009 Prefrontal catecholamines and ADHD#^p19621976-catecholamines|Prefrontal catecholamines and ADHD]] [[P19621976 Arnsten 2009 Prefrontal catecholamines and ADHD#^p19621976-mechanisms|Prefrontal catecholamines and ADHD]]
>
> **Estimation is where claims are made or lost.** Reading reinforcement accounts properly means fitting candidate models to behaviour, checking parameter recovery before interpreting parameters, simulating data from the candidates and reporting model-comparison uncertainty. The methods literature is explicit that different models can produce similar behaviour, so a good fit is not evidence that the hypothesised mechanism is the true one. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-fitting|Computational modelling rules]] [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-validation|Computational modelling rules]] [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Computational modelling rules]]
>
> **Reading rule.** Distinguish (a) a replicable group difference on a reinforcement task, (b) an estimated parameter such as a learning rate, and (c) a claim about everyday motivation or treatment response. Each step needs its own evidence, and the third is the weakest of the three in this literature. [[P40948064 Cortese 2025 ADHD in adults evidence base#^p40948064-open|ADHD in adults: evidence base]]

## Connections

This note links the ADHD domain to [[Reinforcement learning]] and to [[Model-based and model-free control]].

## Uncertainties

- Task parameters and everyday reinforcement sensitivity correlate weakly, which limits clinical inference from these paradigms.
