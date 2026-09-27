---
note_type: lesson
title: "Reinforcement learning accounts of ADHD"
module: "m08"
module_title: "ADHD"
lesson_order: 11
domain: [adhd, computational-brain-theories]
condition: []
prerequisites: ["Cognitive models of ADHD"]
sources: ["F123", "P27069377", "P29760524", "P31769410", "P37040877"]
source_count: 5
question_count: 3
word_count: 800
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m08]
---

# Reinforcement learning accounts of ADHD

**Module.** M08 ADHD · **Topic.** [[Reinforcement learning accounts of ADHD]]

## Why this matters

"Motivated by reward differently" is vague until turned into numbers - a learning rate, a reward sensitivity -
that can be estimated and checked against alternatives. That precision is the appeal of reinforcement-learning
accounts, and exactly where overreach creeps in: a well-fitted number is not automatically a fact about
someone's everyday motivation.

## The core model

**The framework, briefly.** Reinforcement learning formalises how a learner uses reward signals to choose
actions, with value functions and policies as its central objects. Temporal-difference learning updates value
estimates from the difference between a predicted and an observed outcome - the quantity that maps onto
prediction-error signals in the brain. It is a formal model of adaptive behaviour, not a claim about a
particular neural implementation.
[[F123 Sutton and Barto Reinforcement Learning#^f123-framework|Reinforcement Learning]]
[[F123 Sutton and Barto Reinforcement Learning#^f123-td|Reinforcement Learning]]

**The neural candidate, and its limits.** Midbrain dopamine neurons respond to reward-prediction error, and that
signal maps onto reinforcement learning's teaching signal.
[[P27069377 Schultz 2016 Reward prediction error#^p27069377-rpe|Schultz 2016]]
But dopamine also carries salience and movement-related information across different neuron populations, and a
critical review warns against reading a group-level finding as a statement about what dopamine does for one
person.
[[P29760524 Berke 2018 What does dopamine mean#^p29760524-complexity|Berke 2018]]
[[P29760524 Berke 2018 What does dopamine mean#^p29760524-caution|Appraisal: Berke 2018]]

**Behavioural evidence in ADHD.** Children with ADHD learned an instrumental response more slowly than controls
under both continuous and partial reinforcement, and showed a weaker partial-reinforcement extinction effect - a
replicable group difference on a learning task, though not yet a fitted learning-rate parameter.
[[P37040877 Hulsbosch 2023 Instrumental learning in ADHD#^p37040877-acquisition|Hulsbosch 2023]]
[[P37040877 Hulsbosch 2023 Instrumental learning in ADHD#^p37040877-caution-mechanism|Appraisal: Hulsbosch 2023]]

**Estimation is where claims are made or lost.** Reading a reinforcement-learning account properly means fitting
candidate models to behaviour, checking that fitting can recover known parameters from simulated data, and
reporting how confident the model comparison is. Different models can produce very similar behaviour, so a good
fit is not evidence that its hypothesised mechanism is the true one.
[[P31769410 Wilson 2019 Computational modelling rules#^p31769410-fitting|Wilson 2019]]
[[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Wilson 2019]]

**Reading rule.** Keep three claims separate: (a) a replicable group difference on a task, (b) an estimated
parameter such as a learning rate, and (c) a claim about everyday motivation or treatment response. Each needs
its own evidence, and the third is the weakest in this literature.

## Worked example (hypothetical)

This scenario is invented for practice. A hypothetical paper fits a reinforcement-learning model to a
card-choice task and concludes: "the ADHD group has a lower learning rate, meaning they are less motivated by
rewards in daily life."

Take it apart at each step. Is there a real group difference on the task itself, independent of any model? Say
yes - that part can stand alone. Was the "learning rate" label earned? That requires parameter recovery and
comparison against rival models, since two different mechanisms can produce the same choice pattern; skipping
that step leaves the specific parameter label unjustified even though the group difference is real. Does the
card-choice task say anything about daily-life rewards, such as a job? No - that leap is untested by the study.

The defensible version: adults with ADHD chose more slowly toward the better option on this task; whether that
reflects a specific learning-rate difference depends on unreported validation steps; and the daily-motivation
claim goes beyond anything the task measured.

## Common confusions

- "A model that fits the data proves the mechanism." A good fit is compatible with more than one process unless
  rivals were tested and ruled out.
- "The dopamine prediction-error signal explains ADHD motivation." Dopamine carries several signal types across
  different neuron populations; a group finding does not describe one person.
- "A lab task's learning rate tells us about everyday motivation." Task parameters and everyday reinforcement
  sensitivity correlate only weakly.

## What the sources do not establish

No source here validates a fitted learning-rate parameter as a clinical marker of ADHD, and the dopamine
transfer deficit hypothesis rests mainly on one rodent strain awaiting human tests.

## Check yourself

1. What does temporal-difference learning update, and what brain signal has been proposed to carry it?
2. Why is a good model fit not sufficient evidence that its mechanism is correct?
3. What three claims should be kept apart when reading a reinforcement-learning study of ADHD?

## Answer notes

1. It updates a value estimate from the difference between a predicted and an observed outcome; dopamine
   neurons' reward-prediction-error responses have been proposed as the carrying signal.
2. Different candidate models can produce very similar behaviour, so fitting one well does not rule out the
   others without formal model comparison.
3. A replicable group difference on a task, an estimated parameter, and a claim about everyday motivation or
   treatment response - each needs its own evidence.

## Next steps

- Continue to [[Lesson - ADHD and substance use]].
- Compare with [[Lesson - ADHD and prefrontal catecholamines]] for the receptor-level mechanism beneath this
  account.
