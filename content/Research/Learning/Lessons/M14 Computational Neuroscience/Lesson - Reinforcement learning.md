---
note_type: lesson
title: "Reinforcement learning"
module: "m14"
module_title: "Computational Neuroscience and Brain Theories"
lesson_order: 5
domain: [computational-brain-theories, psychology]
condition: []
prerequisites: ["Model comparison and identifiability"]
sources: ["F123", "P27069377", "P29760524", "P31769410"]
source_count: 4
question_count: 3
word_count: 788
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m14]
---

# Reinforcement learning

**Module.** M14 Computational Neuroscience and Brain Theories · **Topic.** [[Reinforcement learning]]

## Why this matters

Reinforcement learning is the formal language behind almost every claim in this vault about reward, motivation and learning from outcomes, including reward and learning accounts used in mood and attention research. Reading it correctly means knowing what the framework does and does not claim about the brain.

## The core model

The framework's central objects are a value function, which estimates future reward, and a policy, which selects actions; learning updates both. It is explicitly a formal model of adaptive behaviour, not a claim about any particular neural implementation. [[F123 Sutton and Barto Reinforcement Learning#^f123-framework|Reinforcement Learning]]

Its engine is the temporal-difference insight: learning does not wait for a final outcome. Every step updates the value estimate using the difference between what was predicted and what actually happened, so value knowledge accumulates from a chain of small corrections rather than one final result. [[F123 Sutton and Barto Reinforcement Learning#^f123-td|Reinforcement Learning]] Exploration versus exploitation is built into the framework as an explicit trade-off, which is why it is used to model choice under uncertainty. [[F123 Sutton and Barto Reinforcement Learning#^f123-exploration|Reinforcement Learning]]

The biological anchor is what made the framework neuroscientifically productive: midbrain dopamine neurons track something close to the same prediction-error quantity, firing more when an outcome beats expectation, less when it falls short, and little or not at all when an outcome was fully predicted. [[P27069377 Schultz 2016 Reward prediction error#^p27069377-rpe|Reward prediction error]] [[P27069377 Schultz 2016 Reward prediction error#^p27069377-learning|Reward prediction error]]

But the anchor is not the whole story. Dopamine neurons are not one uniform population - they carry signals beyond reward prediction error, including salience and movement-related information, and different populations project to different targets, which is why a critical review of the field warns against reading dopamine's role in one individual straight off of group-level reward experiments. [[P27069377 Schultz 2016 Reward prediction error#^p27069377-scope|Reward prediction error]] [[P29760524 Berke 2018 What does dopamine mean#^p29760524-heterogeneity|What does dopamine mean?]] [[P29760524 Berke 2018 What does dopamine mean#^p29760524-caution|What does dopamine mean?]]

What a fitted reinforcement-learning model actually is: a description of choice behaviour under one model class, with parameters interpretable only once recovery has been checked, following the same fitting discipline as any other computational model. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-validation|Computational modelling rules]] [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Computational modelling rules]]

## Worked example (hypothetical)

A task gives a player rewards on a schedule; after a change in which choice pays best, a fitted model tracks each choice's value and updates it after every trial, and the player switches preference gradually, consistent with a moderate "learning rate" parameter. Someone summarises this as "the participant's dopamine learning rate was measured directly." Check the claim against the framework: the learning rate is a parameter of a fitted formal model describing choice behaviour, not a direct recording of any neuron, and dopamine's involvement is an inference from a separate body of neurophysiology work; dopamine itself carries more than one kind of signal. The accurate rewrite: "the fitted model's learning-rate parameter describes how quickly this person's choices tracked changing outcomes; whether it maps onto dopamine activity specifically was not measured here."

## Common confusions

- "A model's 'learning rate' directly measures a neurotransmitter." It is a parameter fitted to choice behaviour, related to dopamine by separate evidence, not a recording.
- "Dopamine equals reward." Dopamine neurons carry salience and movement-related signals too.
- "Reinforcement learning proves the brain literally computes value functions." It is a formal model that fits data well; a good fit is not proof of that exact implementation.

## What the sources do not establish

The correspondence between the model's prediction-error term and dopamine activity is well replicated for a canonical population and paradigm, but it does not establish reinforcement learning as a complete account of human motivation, or license treating one fitted parameter as a direct read-out of dopamine in an individual.

## Check yourself

1. What does temporal-difference learning update on, and why not wait for the final outcome?
2. What made reinforcement learning "neuroscientifically productive" rather than a purely abstract theory?
3. Why is it a mistake to treat dopamine activity and "reward" as interchangeable?

## Answer notes

1. It updates the estimated value every step from the predicted-versus-observed difference, building value from a chain of small corrections.
2. The discovery that midbrain dopamine firing tracks reward prediction error, the same quantity the model uses as its teaching signal.
3. Dopamine neurons are heterogeneous, carrying salience and movement-related signals too, and different populations project to different targets.

## Next steps

- Continue to [[Lesson - Reward prediction error]].
- Related: [[Model comparison and identifiability]] for the fitting discipline this framework depends on.
