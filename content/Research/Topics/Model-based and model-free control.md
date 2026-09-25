---
note_type: topic
title: "Model-based and model-free control"
description: "Two ways of choosing actions - cached values versus an internal model of the world - and how their signatures are measured."
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
# Model-based and model-free control

## Definition

Model-free control selects actions using previously learned values without simulating outcomes. Model-based control uses an internal model of how the environment works to evaluate prospective actions.

## How it works

**Computational difference.** Model-free learning caches values and is cheap at decision time; model-based control is flexible but requires simulation and depends on working memory. [[F123 Sutton and Barto Reinforcement Learning#^f123-framework|Reinforcement Learning]]

**Behavioural signatures.** Outcome devaluation and transition-revaluation paradigms distinguish the two: model-based choices change when the outcome's value changes or when the environment's structure changes. [[F123 Sutton and Barto Reinforcement Learning#^f123-exploration|Reinforcement Learning]]

**Neural associations.** Dopamine and striatal circuits are linked to value learning, while prefrontal regions are implicated in model-based inference; the mapping is not a clean division. [[P27069377 Schultz 2016 Reward prediction error#^p27069377-scope|Reward prediction error]]

**Modelling cautions.** Distinguishing the two requires careful task design and model comparison; a good fit does not prove which strategy a person used. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-fitting|Computational modelling rules]] [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-validation|Computational modelling rules]]

## Evidence and status

The distinction is well established experimentally in humans and animals; the balance between the strategies varies with task, load, stress and individual differences.

> [!info]- In depth: two ways to choose, and how experiments tell them apart
> **The distinction.** Model-free control learns values for actions from experienced outcomes, caching a policy without representing the environment's structure; model-based control builds a model of transitions and outcomes and evaluates options at decision time. The two differ in computational cost and in how they respond to changes in the environment: a cached value cannot update when a reward changes, while a model can. [[F123 Sutton and Barto Reinforcement Learning#^f123-framework|Reinforcement Learning]] [[F123 Sutton and Barto Reinforcement Learning#^f123-exploration|Reinforcement Learning]]
>
> **The classic dissociations are behavioural.** Outcome devaluation and transition-revaluation designs change the environment in ways that model-free learners should miss and model-based learners should follow, which is why the distinction is used to interpret choice data rather than being inferred from brain activity alone. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-fitting|Computational modelling rules]]
>
> **Fitting both accounts requires care.** Model-based analysis means fitting candidate models to data and comparing them, with parameter recovery checks before interpreting parameters, simulated data from the candidates and reported model-comparison uncertainty; the two models can produce similar behaviour in some designs, so the design has to separate them. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-validation|Computational modelling rules]] [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Computational modelling rules]]
>
> **The neural bridge is the prediction error.** Dopamine reward-prediction error maps onto the teaching signal that model-free learning uses, but dopamine also carries other signals, and the mapping does not by itself identify which control system produced a choice. [[P27069377 Schultz 2016 Reward prediction error#^p27069377-rpe|Reward prediction error]] [[P27069377 Schultz 2016 Reward prediction error#^p27069377-scope|Reward prediction error]]
>
> **Reading rule.** Ask which contrast the design used, which model won the comparison, and whether the parameters were recoverable. An estimated 'model-based weight' is a model's parameter, not a measurement of a brain system. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Computational modelling rules]] [[F123 Sutton and Barto Reinforcement Learning#^f123-limit|Reinforcement Learning]]

> [!info]- Further depth: two learning systems and the designs that separate them
> Model-free control caches values for actions from experienced outcomes, while model-based control builds a model of transitions and outcomes and evaluates options at decision time; they differ in cost and in how they respond when the environment changes. Outcome devaluation and transition-revaluation designs are the classic behavioural dissociations, and fitting both accounts requires parameter recovery plus model comparison with reported uncertainty because the two can mimic each other in some designs. Dopamine prediction error supplies the teaching signal for the model-free side, while the mapping does not identify which system produced a choice. [[F123 Sutton and Barto Reinforcement Learning#^f123-framework|Reinforcement Learning]] [[F123 Sutton and Barto Reinforcement Learning#^f123-exploration|Reinforcement Learning]] [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-validation|Computational modelling rules]] [[P27069377 Schultz 2016 Reward prediction error#^p27069377-rpe|Reward prediction error]] [[P27069377 Schultz 2016 Reward prediction error#^p27069377-scope|Reward prediction error]]
>
> **The trade-off is computational, which is why it shows up behaviourally.** Caching values is cheap at choice time but stale when the world changes; simulating outcomes is flexible but costs working memory, search and time. Behavioural signatures follow from the costs: model-free control persists through outcome devaluation, model-based control survives it but degrades under cognitive load and time pressure. The signatures are what experiments actually measure - not the strategies themselves, which remain inferred constructions. [[F123 Sutton and Barto Reinforcement Learning#^f123-framework|Reinforcement Learning]] [[F123 Sutton and Barto Reinforcement Learning#^f123-exploration|Reinforcement Learning]]
>
> **Human control is a mixture, estimated not observed.** People deploy both systems, and the mixture varies by task, stress, expertise and individual; fitting a mixture model is the standard estimate, with all the identifiability cautions that entails. Psychiatric interpretations that read a low model-based weight as a trait - in addiction or compulsion research - are reading a task- and model-dependent quantity, a framing their own authors usually state and secondary summaries usually drop. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-fitting|Computational modelling rules]] [[P29760524 Berke 2018 What does dopamine mean#^p29760524-caution|What does dopamine mean?]]
>
> **Cross-domain connection (curation).** Habit formation in the psychology domain is the behavioural-level twin of model-free control, and working-memory dependence is where the executive-function literature connects; this article is the formal spine both hang on. [[Procedural memory and habit]] [[Working memory]]
>
> **Cross-domain connection (curation).** Model-based versus model-free control is the computational-brain-theories distinction that the ADHD clinical and psychology domains use when they discuss reinforcement-sensitivity and behavioural flexibility. A claim in the ADHD domain about "reduced model-based control" inherits this article's definitional constraints, and a claim about what a task measures inherits the methods domain's operationalisation discipline. [[Reinforcement learning accounts of ADHD]] [[Measurement validity and reliability]]

## Connections

This note extends [[Reinforcement learning]] and is used in the ADHD and clinical domains where reinforcement sensitivity is discussed.

## Uncertainties

- Parameters estimated from behaviour are not direct measures of a neural strategy. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Computational modelling rules]]
