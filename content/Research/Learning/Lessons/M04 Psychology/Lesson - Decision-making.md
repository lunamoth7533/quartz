---
note_type: lesson
title: "Decision-making"
module: "m04"
module_title: "Psychology"
lesson_order: 12
domain: [psychology, computational-brain-theories]
condition: []
prerequisites: ["Motivation and reward"]
sources: ["F97", "F46", "F123", "P26315443"]
source_count: 4
question_count: 3
word_count: 858
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m04]
---

# Decision-making

**Module.** M04 Psychology · **Topic.** [[Decision-making]]

## Why this matters

Headlines love a clean story: "humans are irrational" or "this bias explains everything." Decision-making research supports neither pure pessimism nor pure optimism - the same shortcut that produces a documented bias also produces fast, mostly correct judgements under time pressure. Reading this literature well means keeping both halves in view.

## The core model

Reinforcement learning offers a formal alternative to a list of biases: choice as a comparison of values, updated by prediction error, with an explicit trade-off between exploring new options and exploiting known ones - shared vocabulary for what a choice is doing computationally, not just the error it produced. [[F123 Sutton and Barto Reinforcement Learning#^f123-framework|Reinforcement Learning]] [[F123 Sutton and Barto Reinforcement Learning#^f123-exploration|Reinforcement Learning]]

A decision is never read directly off a payoff table; it is constructed from a representation of the situation. Cognition research on concepts and categories shows how options get mentally represented, and social psychology's central lesson - that situations and interpretations shape behaviour - applies as much to choice as to any other behaviour. [[F97 OpenStax Psychology 2e what is cognition#^f97-concepts|What Is Cognition?]] [[F46 OpenStax Psychology 2e social psychology#^f46-situational|Social Psychology]]

Heuristics - simplifying strategies such as judging frequency by how easily examples come to mind - are efficient in most environments and produce characteristic errors in others. This is ecological rationality: a heuristic works because the environment's statistics usually match its assumptions, and biases appear where that match breaks down - the same strategy that produces an availability error also produces fast, largely correct judgements under time pressure, which is why the field moved past a blanket "humans are irrational" framing. [[F97 OpenStax Psychology 2e what is cognition#^f97-concepts|What Is Cognition?]]

Framing effects are the clearest evidence a decision is not just a readout of outcomes: when the same options, described as a gain or loss, produce reversed choices, preferences depend on the reference point the description sets, ruling out any purely value-maximising account. [[F46 OpenStax Psychology 2e social psychology#^f46-situational|What Is Social Psychology?]]

This field also has a known replication problem: a large multi-team project that re-ran many classic findings, including decision-relevant ones, found replicated effect sizes averaging about half the originals - a caution to name the task, model and population, and check whether a finding has been independently replicated. [[P26315443 Open Science Collaboration 2015 Reproducibility#^p26315443-result|Estimating the reproducibility of psychological science]] [[P26315443 Open Science Collaboration 2015 Reproducibility#^p26315443-limit|Reproducibility in psychology]]

## Worked example (hypothetical)

This scenario is invented for practice. A pop-science article says "a study proves people are irrational because they chose differently depending on whether a medical outcome was framed as a 90% survival rate or a 10% death rate" - identical numbers, different choices.

Read it as the field does, not as the headline does. The framing shift is real evidence against a purely value-maximising account, since the choice moved despite identical outcomes. But "irrational" overclaims: the same sensitivity that produces a reversal in an artificial vignette also lets people react appropriately to real framing, which often carries genuine information about intent. Ask, too, whether this effect has replicated at a similar size before treating the original number as settled.

## Common confusions

- "Framing and other biases prove people are irrational." The same heuristics that produce biases in unusual cases also produce fast, accurate judgements in ordinary ones.
- "A documented psychological bias is a fixed, universal effect size." Large-scale replication work found many classic effects roughly halved on re-test, so effect sizes need the same caution applied to other areas of psychology.
- "A decision is a direct readout of the option's value." Framing effects show that how an option is described changes the choice, so the description is part of what is being computed, not just packaging around it.

## What the sources do not establish

The sources describe reliable heuristic and framing phenomena and a documented, general replication problem in the field; they do not license treating every published decision-making effect as equally solid, and whether a given departure from a normative model counts as a "bias" or an adaptive strategy is partly a normative judgement rather than a purely empirical one.

## Check yourself

1. Why does the same heuristic that causes a bias in one setting produce good judgements in another?
2. What do framing effects rule out about how decisions are made?
3. What did the large multi-team replication project find about effect sizes, and why does that matter for reading a single decision-making study?

## Answer notes

1. Because a heuristic is efficient when the environment's statistics match its assumptions, and it produces characteristic errors only where that match breaks down.
2. That preferences are not read off outcomes alone; how an option is described sets a reference point that changes the choice, even when the outcomes are identical.
3. Replicated effects averaged about half the size of the originals, so a single study's effect size should be treated as provisional until it has been independently retested.

## Next steps

- Continue to [[Lesson - Language]].
- Compare with [[Motivation and reward]] for the value signals decision-making draws on.
