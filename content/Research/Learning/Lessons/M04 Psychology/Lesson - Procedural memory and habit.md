---
note_type: lesson
title: "Procedural memory and habit"
module: "m04"
module_title: "Psychology"
lesson_order: 10
domain: [psychology, computational-brain-theories]
condition: []
prerequisites: ["Episodic memory", "Learning and conditioning"]
sources: ["F10", "F11", "F39", "F41", "F87", "F123"]
source_count: 6
question_count: 3
word_count: 874
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m04]
---

# Procedural memory and habit

**Module.** M04 Psychology · **Topic.** [[Procedural memory and habit]]

## Why this matters

Skills and habits explain a large share of everyday behaviour that never touches conscious deliberation - and the mechanism that makes a practised skill efficient is what makes an unwanted habit resistant to reasoning about its outcome. Separating "skill", "habit" and "goal-directed action" clarifies what intervention could plausibly change which behaviour.

## The core model

Procedural memory supports skills and habits acquired through practice, shown in performance rather than verbal recall - but a skill and a habit differ. A skill is a routine that improves with practice; a habit is a behaviour a context comes to trigger after enough repetition. [[F41 OpenStax Psychology 2e how memory functions#^f41-three|How Memory Functions]] [[F11 Noba Memory encoding storage retrieval#^f11-stages|Memory encoding storage retrieval]]

The behavioural mechanism behind habit formation is operant conditioning: reinforcement makes a behaviour more likely and punishment less likely, and habits are built from this consequence-based learning, repeated until a cue - not a deliberate decision - triggers the behaviour. [[F39 OpenStax Psychology 2e operant conditioning#^f39-consequences|Operant Conditioning]] [[F10 Noba Conditioning and learning#^f10-operant|Conditioning and Learning]]

The clearest behavioural signature of the shift from goal-directed action to habit is outcome-insensitivity: after enough repetition in a stable context, a behaviour can persist even when the outcome it once earned becomes less valuable or is deliberately devalued. That test - does behaviour change when the payoff changes? - is how researchers tell a habit apart from a goal-directed action, and it matters clinically because the two kinds of control respond to different interventions: goal-directed behaviour responds to changing what a person expects or values, while a cue-triggered habit responds to changing the context or building a competing response. [[F39 OpenStax Psychology 2e operant conditioning#^f39-consequences|Operant Conditioning]] [[F123 Sutton and Barto Reinforcement Learning#^f123-framework|Reinforcement Learning]]

Reinforcement learning gives this a formal shape: habitual control resembles "model-free" learning from cached values built up over repetitions, while goal-directed control resembles "model-based" evaluation that recomputes value from a model of the situation each time - the formal reason a well-practised behaviour can keep running after its outcome changes, since the cached value has not yet been updated. Tasks are deliberately designed to pull the two systems apart. [[F123 Sutton and Barto Reinforcement Learning#^f123-framework|Reinforcement Learning]] [[F123 Sutton and Barto Reinforcement Learning#^f123-exploration|Reinforcement Learning]]

This mechanism has a clinical face: repeated exposure to drugs changes the circuits involved in reward, stress and self-control, one reason use can become compulsive even when a person values stopping - response varies with the drug, route, amount, genetics and environment, so this describes a mechanism with consequences, not a claim about any individual's choices. [[F87 NIDA Drugs and the brain#^f87-adaptation|Drugs and the Brain]] [[F87 NIDA Drugs and the brain#^f87-variation|Drugs and the Brain]]

## Worked example (hypothetical)

This scenario is invented for practice. Someone reaches for their phone every time they sit at their desk, even on days they have decided to focus and know the phone will not help.

Apply the outcome-insensitivity test. If the behaviour persists even after the "reward" - checking notifications - stops being valuable that day (nothing new), and the cue is simply sitting at the desk, that looks like a habit rather than a goal-directed choice: context is triggering behaviour independent of its payoff. The model-free versus model-based framing predicts the fix is not reasoning about why checking is unhelpful today - that targets a value already held - but changing the cue (a different seat, phone elsewhere) or building a competing response. Reasoning about outcomes is the goal-directed lever; it rarely moves a cue-triggered habit alone.

## Common confusions

- "A skill and a habit are the same thing." A skill is a practised routine that improves performance; a habit is a cue-triggered behaviour that can persist regardless of current value.
- "Explaining why a habit is unhelpful should stop it." Habits are outcome-insensitive once established, so context change and competing responses work where explanation does not.
- "Compulsive drug use is simply a series of choices." Repeated exposure changes circuits underlying reward, stress and self-control - a mechanism with consequences, not a description of willpower.

## What the sources do not establish

Measuring habit strength outside the laboratory remains indirect, relying on inference from behaviour rather than a direct readout, and how much everyday behaviour is habitual, as opposed to goal-directed, is disputed and hard to settle empirically.

## Check yourself

1. What distinguishes a skill from a habit?
2. What test do researchers use to tell a habit apart from a goal-directed action?
3. Why might explaining the downside of a habit fail to change it?

## Answer notes

1. A skill is a practised routine expressed in improved performance; a habit is a behaviour a context triggers after repetition.
2. Outcome devaluation: whether behaviour persists even when its payoff is made less valuable.
3. Because an established habit is outcome-insensitive and cue-triggered, closer to cached "model-free" value than to a recomputed, goal-directed evaluation - so it responds to changing cues or context more than to changing beliefs about the outcome.

## Next steps

- Continue to [[Lesson - Motivation and reward]].
- Compare with [[Learning and conditioning]] for the conditioning principles this lesson builds on.
