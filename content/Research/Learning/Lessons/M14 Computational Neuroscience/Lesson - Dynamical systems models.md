---
note_type: lesson
title: "Dynamical systems models"
module: "m14"
module_title: "Computational Neuroscience and Brain Theories"
lesson_order: 3
domain: [computational-brain-theories]
condition: []
prerequisites: ["Neural coding and population codes"]
sources: ["P22722855", "F92", "P23040802", "P31769410"]
source_count: 4
question_count: 3
word_count: 769
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m14]
---

# Dynamical systems models

**Module.** M14 Computational Neuroscience and Brain Theories · **Topic.** [[Dynamical systems models]]

## Why this matters

This lesson supplies the vocabulary - trajectory, state space, degeneracy - used throughout the rest of the module whenever a circuit's collective activity, rather than any one cell, is doing the explanatory work.

## The core model

The modelling move is to treat a population's activity as a point moving through a state space, so the object of study becomes the trajectory and its structure rather than any individual unit's firing rate; different tasks correspond to different trajectories. [[P22722855 Churchland 2012 Neural population dynamics#^p22722855-population|Neural population dynamics]]

What surprised researchers using this approach on motor cortex during reaching is that the activity of hundreds of neurons is well described by a handful of latent variables - a trajectory through a small state space - rather than hundreds of independent single-cell codes. Preparatory and movement-related activity formed distinct trajectories, and the preparatory trajectory predicted the coming movement trajectory before movement began, reframing "preparation" as dynamics already unfolding rather than a static plan held in reserve. [[P22722855 Churchland 2012 Neural population dynamics#^p22722855-trajectory|Neural population dynamics]]

Where do such dynamics come from? Network models show dynamics and coding properties emerging from connectivity, not from any single cell's properties in isolation - the modelling lineage behind trajectory descriptions. [[F92 Neuronal Dynamics#^f92-networks|Neuronal Dynamics]]

The state-dependence problem does not go away just because a trajectory has been fitted. Neuromodulators change the effective parameters of a circuit - not just add a signal on top of it - so the same anatomical wiring can produce different dynamics in different neuromodulatory states, meaning a dynamical description is only strictly valid for the state it was measured in. [[P23040802 Marder 2012 Neuromodulation#^p23040802-reconfigure|Neuromodulation]] [[P23040802 Marder 2012 Neuromodulation#^p23040802-state|Neuromodulation]]

Degeneracy compounds this: different underlying parameter sets can generate the same observed dynamics, so a good fit of a dynamical model is not evidence that the fitted mechanism is the real one - the same identifiability discipline that applies to every other computational claim in this domain. [[P23040802 Marder 2012 Neuromodulation#^p23040802-degeneracy|Neuromodulation]] [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Computational modelling rules]] The standard misreading is treating a good low-dimensional description as though it had already identified the circuit mechanism producing it - the original motor-cortex study's own claim was about descriptive power, not circuit mechanism. [[P22722855 Churchland 2012 Neural population dynamics#^p22722855-claim|Neural population dynamics]]

## Worked example (hypothetical)

A lab reports that a brain area's activity during a waiting period traces a smooth loop in state space that "predicts" how long the wait will feel, and a write-up claims this proves the circuit contains an internal timer mechanism. Work through the reasoning: the loop is a description of the population's trajectory, fitted after the fact. A genuine test of a timer mechanism would need to show the loop's shape changes in a way that hypothesis specifically predicts and a non-timer account does not, and would need the modulatory state the loop was measured in - arousal, attention, recent history - to be controlled, since the same network can trace different loops in different states. Absent that comparison, the defensible claim is "activity during waiting traces a structured trajectory consistent with, but not unique to, a timing process."

## Common confusions

- "A smooth, structured trajectory means the mechanism was found." A trajectory is a description; a mechanism needs its own test.
- "The dynamics are a fixed property of the circuit's wiring." Neuromodulators can reconfigure the same wiring into different dynamics.
- "Different trajectories must mean different wiring, and vice versa." Degeneracy runs both ways.

## What the sources do not establish

The motor-cortex findings come from one system, primate reaching, and do not establish that all cognitive processes are best described this way. No dynamical description here identifies the biophysical mechanism producing the trajectory, only that some mechanism must be able to produce it.

## Check yourself

1. What did the preparatory-trajectory finding change about "movement preparation"?
2. Why must a dynamical description specify the state it was measured in?
3. Why is a good model fit not proof of the underlying mechanism?

## Answer notes

1. It reframed preparation as dynamics already unfolding, since the preparatory trajectory predicted the coming movement.
2. Neuromodulators change a circuit's effective parameters, so the same wiring produces different dynamics in different states.
3. Degeneracy means different parameter sets can produce very similar dynamics, so a good fit does not identify which is real.

## Next steps

- Continue to [[Lesson - Model comparison and identifiability]].
- Related: [[Neural coding and population codes]] for the representational side of this picture.
