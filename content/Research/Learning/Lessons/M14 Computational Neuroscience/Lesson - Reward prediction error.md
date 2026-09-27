---
note_type: lesson
title: "Reward prediction error"
module: "m14"
module_title: "Computational Neuroscience and Brain Theories"
lesson_order: 6
domain: [computational-brain-theories, neurochemistry]
condition: []
prerequisites: ["Reinforcement learning"]
sources: ["P27069377", "F123", "P29760524", "P31769410"]
source_count: 4
question_count: 3
word_count: 800
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m14]
---

# Reward prediction error

**Module.** M14 Computational Neuroscience and Brain Theories · **Topic.** [[Reward prediction error]]

## Why this matters

Reward prediction error is treated as the strongest known bridge between a formal computational quantity and a specific physiological signal, anchoring a large share of psychiatric theorising about reward, motivation and mood. Reading it well means knowing how far that bridge reaches.

## The core model

What the signal is: the difference between reward received and reward expected. Midbrain dopamine neurons fire more when an outcome beats prediction, less when it falls short, and little or not at all when it was already fully predicted - a response defined relative to expectation, not reward itself. [[P27069377 Schultz 2016 Reward prediction error#^p27069377-rpe|Reward prediction error]]

Why it matters computationally: this signal maps onto the teaching signal used by temporal-difference learning, linking a cellular recording directly to a formal learning rule rather than merely describing a neuron's response in isolation. [[P27069377 Schultz 2016 Reward prediction error#^p27069377-learning|Reward prediction error]] [[F123 Sutton and Barto Reinforcement Learning#^f123-td|Reinforcement Learning]]

Why the match is treated as a showcase result: a formal theory predicted a specific teaching signal in advance, and dopamine responses matched not just its direction but its transfer - shifting to respond to an earlier predictive cue once that cue became informative. That kind of confirmation is rare enough that this correspondence anchors a large share of psychiatric reward theorising. [[P27069377 Schultz 2016 Reward prediction error#^p27069377-rpe|Reward prediction error]]

Why the caveat is load-bearing: dopamine neurons are not one homogeneous population. They carry signals beyond reward prediction error, including salience and movement-related information, and different subpopulations project to different targets and can carry differently signed signals. Treating "dopamine equals reward prediction error" as a strict identity, rather than one measured role within a heterogeneous system, is the misreading newer electrophysiology rules out. [[P27069377 Schultz 2016 Reward prediction error#^p27069377-scope|Reward prediction error]] [[P29760524 Berke 2018 What does dopamine mean#^p29760524-heterogeneity|What does dopamine mean?]]

Clinical caution: prediction-error accounts interpret reinforcement-learning differences across several conditions, but those interpretations describe group-average behaviour, and the field's own critical assessment warns against inferring what dopamine does for one individual from group-level experiments. [[P29760524 Berke 2018 What does dopamine mean#^p29760524-caution|What does dopamine mean?]] A model reproducing a prediction-error-like pattern is not thereby proof the brain computes that exact model. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Computational modelling rules]]

**Reading rule.** Separate three things: the measured neuronal response (well established), the computational quantity it resembles (a mapping with known limits), and the algorithmic claim about what the brain computes (needing converging evidence, not correlation alone). [[P29760524 Berke 2018 What does dopamine mean#^p29760524-complexity|What does dopamine mean?]]

## Worked example (hypothetical)

An article states: "Because dopamine encodes reward prediction error, and this person's dopamine system is disrupted, they cannot experience reward normally." Apply the separation. The measured claim needs an actual recording of dopamine activity, which the sentence lacks. The computational quantity, prediction error, is defined relative to expectation rather than reward itself, so "disrupted dopamine" and "cannot experience reward" are not automatically the same statement. The algorithmic leap - one signal to all reward experience - assumes dopamine is the only relevant channel, which the heterogeneity evidence argues against. The defensible version separates what was measured from what was inferred.

## Common confusions

- "A prediction-error account explains reward experience in general." It is a well-supported account of one teaching signal, not a complete theory of subjective reward.
- "Dopamine dysfunction always means someone can't feel reward." Dopamine carries several kinds of signal; prediction error is only one.
- "The theory predicted the signal once, so it is proven for every case." The correspondence is strong for the paradigm studied, not a licence to treat every finding as confirming the same story.

## What the sources do not establish

The basic mapping is well replicated in animals and supported by human imaging and pharmacology, but its scope as a full account of dopamine is contested, and no source here licenses translating a group-level finding into a claim about one individual.

## Check yourself

1. What does a reward prediction error measure: reward received, expected, or the difference?
2. What made the dopamine-prediction-error correspondence a "showcase" result rather than just a correlation?
3. Why does dopamine's heterogeneity matter for research citing "the dopamine system"?

## Answer notes

1. The difference between reward received and reward expected.
2. A theory predicted the signal's properties in advance, including its transfer to a predictive cue, and recordings matched that prediction rather than being fitted after the fact.
3. Different dopamine subpopulations carry different signals, so "the dopamine system did X" can obscure which signal, in which population, is meant.

## Next steps

- Continue to [[Lesson - Model-based and model-free control]].
- Related: [[Reinforcement learning]] for the formal framework this signal belongs to.
