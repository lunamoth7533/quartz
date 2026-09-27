---
note_type: lesson
title: "Model-based and model-free control"
module: "m14"
module_title: "Computational Neuroscience and Brain Theories"
lesson_order: 7
domain: [computational-brain-theories, psychology]
condition: []
prerequisites: ["Reward prediction error"]
sources: ["F123", "P31769410", "P27069377", "P29760524"]
source_count: 4
question_count: 3
word_count: 797
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m14]
---

# Model-based and model-free control

**Module.** M14 Computational Neuroscience and Brain Theories · **Topic.** [[Model-based and model-free control]]

## Why this matters

This distinction is the standard interpretive lens for choice experiments across many conditions in this vault, and its most common misreading - treating an estimated model weight as a direct brain-system measurement - shows up constantly in secondary summaries.

## The core model

The distinction itself: model-free control caches values for actions directly from experienced outcomes, without representing how the environment works; model-based control builds an internal model of the environment's transitions and outcomes and evaluates options with it at choice time. [[F123 Sutton and Barto Reinforcement Learning#^f123-framework|Reinforcement Learning]]

The trade-off is computational, which is why it shows up behaviourally: a cached value is cheap but stale when the world changes, since it cannot reflect a change in an outcome's worth, while an internal model updates but costs working memory, search and time. [[F123 Sutton and Barto Reinforcement Learning#^f123-framework|Reinforcement Learning]] [[F123 Sutton and Barto Reinforcement Learning#^f123-exploration|Reinforcement Learning]]

The classic dissociation uses tasks that change what an outcome is worth (devaluation) or how actions lead to outcomes (transition changes), designed so model-free control should miss the change and model-based control should track it; model-based choices adjust, model-free choices tend to persist, though model-based control itself degrades under load or time pressure. [[F123 Sutton and Barto Reinforcement Learning#^f123-exploration|Reinforcement Learning]] That is why the distinction is used to interpret choice data rather than read directly off brain activity - the signatures are what experiments measure, not the strategies themselves, which remain an inferred construction. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-fitting|Computational modelling rules]]

The neural picture is not a clean split. Dopamine's reward-prediction-error signal maps onto the teaching signal model-free learning uses, and prefrontal regions are implicated in model-based evaluation, but dopamine also carries other signals, so its activity does not by itself identify which system produced a choice. [[P27069377 Schultz 2016 Reward prediction error#^p27069377-rpe|Reward prediction error]]

People deploy a mixture of both systems, and estimating the balance means fitting a mixture model with the usual parameter-recovery and comparison-uncertainty requirements; the two accounts can mimic each other under some designs, so the task itself has to be built to separate them. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-fitting|Computational modelling rules]]

**Reading rule.** An estimated "model-based weight" is a fitted parameter describing a pattern in choices on one task, not a direct brain-system measurement; secondary summaries often drop this framing even when the original authors state it. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Computational modelling rules]] [[P29760524 Berke 2018 What does dopamine mean#^p29760524-caution|What does dopamine mean?]]

## Worked example (hypothetical)

Two people play a two-stage choice task. After a reward is unexpectedly devalued, Person A keeps choosing the action that used to lead to it, while Person B switches away immediately. A write-up claims "Person B has a stronger model-based brain system." Apply the reading rule: what was observed is a pattern of choices around one devaluation event on one task; "model-based weight" labels a parameter fitted to that pattern, influenced by task difficulty, time pressure or practice, not only a stable trait. The defensible statement is "Person B's choices were more consistent with the model-based account," leaving open whether that difference is stable or state-dependent.

## Common confusions

- "Everyone is purely model-based or purely model-free." Most people use a mixture; the interesting question is the balance, not a category.
- "A behavioural signature identifies the strategy with certainty." The two accounts can mimic each other under some designs.
- "A low model-based weight is a fixed personality trait." It is a task- and model-dependent estimate that can shift with load or state.

## What the sources do not establish

The distinction is well established experimentally, but no source here settles whether an individual's balance between the two systems is a stable trait across tasks and time, or reflects momentary factors like fatigue or stress instead.

## Check yourself

1. What is the key computational difference between model-free and model-based control?
2. Why does model-based control tend to survive outcome devaluation while model-free control does not?
3. Why is a fitted "model-based weight" not a direct measurement of a brain system?

## Answer notes

1. Model-free control uses cached values from past outcomes; model-based control uses an internal model to evaluate options at choice time.
2. Model-based control updates once it represents that an outcome's value changed; model-free control relies on cached values that do not immediately reflect the change.
3. It is a parameter estimated by fitting a model to choices on one task, influenced by task design, load and state, not a direct readout of a brain system.

## Next steps

- Continue to [[Lesson - Drift diffusion models]].
- Related: [[Reinforcement learning]] for the framework this distinction extends.
