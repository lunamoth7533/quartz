---
note_type: lesson
title: "Bayesian inference and predictive processing"
module: "m14"
module_title: "Computational Neuroscience and Brain Theories"
lesson_order: 9
domain: [computational-brain-theories, psychology]
condition: []
prerequisites: ["Drift diffusion models"]
sources: ["P26809759", "P20068583", "P19050712", "P41168907"]
source_count: 4
question_count: 3
word_count: 792
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m14]
---

# Bayesian inference and predictive processing

**Module.** M14 Computational Neuroscience and Brain Theories · **Topic.** [[Bayesian inference and predictive processing]]

## Why this matters

Predictive-processing language - priors, precision, prediction error - appears throughout this vault's accounts of perception, autism and psychosis. This lesson supplies the arithmetic so later claims can be checked rather than taken on faith.

## The core model

Three levels must be kept separate: what an ideal observer should infer given a generative model (normative), the procedure approximating that inference (algorithmic), and how neurons might carry it out (implementational). Predictive processing operates mostly at the algorithmic level, and success there does not transfer to another level. [[Levels of analysis]]

The basic quantities: perception is modelled as combining a prior (what was expected beforehand) with a likelihood (how probable the input is under each candidate explanation) to produce a posterior, the updated belief. [[P26809759 Spratling 2017 Predictive coding algorithms#^p26809759-common|Predictive coding algorithms]]

A worked illustration, chosen to make the arithmetic visible rather than drawn from any source: a shape at the edge of vision could be a predator (H1) or a wind-blown leaf (H2). The prior favours the ordinary explanation, P(H1)=0.1, P(H2)=0.9, and the shape is four times more likely under the predator hypothesis. Multiplying prior by likelihood and normalising gives a posterior of 0.31 for H1, 0.69 for H2: belief shifted toward the predator, but not enough to overturn a nine-to-one prior. A prior dominating the outcome is not automatically an error - if it matches the environment, the prior-weighted answer is the better bet on average. [[P26809759 Spratling 2017 Predictive coding algorithms#^p26809759-common|Predictive coding algorithms]]

Precision is the formal home of attention: cortical predictive-coding models compare top-down predictions against bottom-up input and pass forward the mismatch, weighted by a precision term controlling each error signal's influence - raising precision on a channel increases its influence without changing what was predicted. [[P26809759 Spratling 2017 Predictive coding algorithms#^p26809759-common|Predictive coding algorithms]] It is not one theory, either: "predictive coding" names a family of distinct algorithms differing in their generative models and predictions, so evidence for one does not transfer to the others. [[P26809759 Spratling 2017 Predictive coding algorithms#^p26809759-plural|Predictive coding algorithms]]

An applied proposal, clearly labelled as such: one theoretical review proposes understanding psychotic symptoms as a disturbance in error-dependent updating of beliefs within this kind of framework - a proposal about mechanism, not evidence the brain implements it. [[P19050712 Fletcher 2009 Perceiving is believing#^p19050712-proposal|Perceiving is believing]] Breadth is a double-edged sword here too: the free-energy principle, one broad formulation, is a theoretical proposal whose generality is also the basis for the criticism that an accommodating framework is hard to falsify in any specific case. [[P20068583 Friston 2010 Free-energy principle#^p20068583-status|The free-energy principle]]

## Worked example (hypothetical)

Extend the example: if new evidence is ten times more likely under the predator hypothesis, instead of four, the posterior flips to favour the predator. Whether a strong prior gets overturned depends entirely on the likelihood ratio's strength, which is why "prior expectation dominated perception here" is only checkable once both numbers are stated.

## Common confusions

- "Bayesian models mean the brain literally calculates probabilities." The framework requires only that behaviour is consistent with combining prior and likelihood.
- "Predictive coding is one specific, agreed-on theory." It is a family of distinct algorithms; evidence for one does not automatically support the others.
- "A strong prior overriding new evidence is always a bias." If the prior is well calibrated to the environment, weighting it heavily is the better strategy on average.

## What the sources do not establish

The free-energy principle's breadth is itself flagged as a testability problem, so no source here shows behavioural or neural results have established probabilistic inference "in general" - that needs one specific model whose predictions survive comparison against rivals. Applications are not uniform across development either: a 2025 meta-analysis of a related measure found autistic children showed smaller mismatch responses than peers while adults showed larger ones. [[P41168907 Sapey-Triomphe 2025 Mismatch negativity in autism meta-analysis#^p41168907-age|Sapey-Triomphe 2025]]

## Check yourself

1. What three components combine to produce a Bayesian posterior?
2. In the worked example, what has to change to overturn a nine-to-one prior?
3. Why is "predictive coding" not the name of one single, testable theory?

## Answer notes

1. The prior, the likelihood, and their combination, the posterior.
2. The likelihood ratio must be strong enough - changing it from four-to-one to ten-to-one flipped which hypothesis the posterior favoured.
3. It names a family of distinct algorithms with different generative models and predictions, so evidence for one does not automatically support the others.

## Next steps

- Continue to [[Lesson - Active inference and free energy]].
- Related: [[Levels of analysis]] for the level-separation this framework depends on.
