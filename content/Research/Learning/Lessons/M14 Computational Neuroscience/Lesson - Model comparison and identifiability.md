---
note_type: lesson
title: "Model comparison and identifiability"
module: "m14"
module_title: "Computational Neuroscience and Brain Theories"
lesson_order: 4
domain: [computational-brain-theories, research-methods]
condition: []
prerequisites: ["Dynamical systems models"]
sources: ["P31769410", "P23040802", "P26809759", "P20068583"]
source_count: 4
question_count: 3
word_count: 799
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m14]
---

# Model comparison and identifiability

**Module.** M14 Computational Neuroscience and Brain Theories · **Topic.** [[Model comparison and identifiability]]

## Why this matters

Nearly every claim in the rest of this module rests on fitting a model to data. This lesson is the quality-control checklist for reading any of them, and for reading fitted "parameters" reported anywhere else in the vault as markers of a condition.

## The core model

A fit is not a mechanism: different models can produce very similar behaviour, so matching data is not evidence that a specific hypothesised mechanism is the true one. Because the observation is behaviour rather than mechanism, model comparison is a discrimination problem - whichever model predicts unseen data best is preferred, and the loser is not thereby excluded from the brain. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Computational modelling rules]]

The prescribed workflow: simulate data from each candidate model first, check whether the fitting procedure can recover the known parameters used to generate that simulated data - the standard safeguard against uninterpretable results - then compare models with methods that penalise unnecessary flexibility, and report the resulting uncertainty. Parameter recovery comes before interpretation, not after. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-fitting|Computational modelling rules]] [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-validation|Computational modelling rules]]

Parameter-recovery failure is the characteristic silent error: a model can fit well while its parameters are meaningless, because the data cannot distinguish between them, and no ordinary goodness-of-fit number reveals this on its own.

Degeneracy is the biological mirror image of the same problem: circuits with different underlying wiring can produce the same output, which the neuromodulation literature treats as a fundamental obstacle to relating structure to function. Statistically, different parameter sets fit one dataset; biologically, different circuits produce one behaviour - both facts break the inference from an observed output back to a claimed mechanism. [[P23040802 Marder 2012 Neuromodulation#^p23040802-degeneracy|Neuromodulation]]

Broad frameworks compound the problem. Distinct algorithms that share a family label - several different "predictive coding" algorithms, for instance - can differ substantially while sharing one core idea, so evidence for one is not evidence for another. [[P26809759 Spratling 2017 Predictive coding algorithms#^p26809759-plural|Predictive coding algorithms]] A framework broad enough to accommodate many specific theories can be difficult to falsify in any one case, which is why a broad principle needs pairing with one specific, risk-taking model. [[P20068583 Friston 2010 Free-energy principle#^p20068583-status|The free-energy principle]]

**Reading rule.** For any modelling claim, look for the candidate set of models considered, the comparison metric used, whether recovery was checked, and whether uncertainty was reported. Without the candidate set, a winning model has no interpretation; without recovery checks, its parameters have none either. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-validation|Computational modelling rules]]

## Worked example (hypothetical)

A paper fits "Model A," an impulsivity account, to a gambling task, finds it fits well, and concludes the task measures impulsivity. Apply the checklist: was Model A compared against a genuine rival, such as a simple noise-in-choice model, or only against "no model at all"? Was parameter recovery demonstrated? Was comparison uncertainty reported, or just a single best-fit number? If none of these were done, the defensible summary is "Model A fits the data," not "the task measures impulsivity."

## Common confusions

- "The model fit well, so it must be right." A good fit shows compatibility with the data, not that it is the only, or best, explanation.
- "A more flexible model that fits better is the better model." Flexible models fit better almost by construction; comparison must penalise that.
- "If two models predict the same thing here, one must be wrong." Both can be locally correct; the task just cannot tell them apart.

## What the sources do not establish

This discipline is well developed in computational neuroscience and increasingly expected elsewhere, but its absence in a given study is not visible from an abstract alone - the reading rule exists because these checks are often left out without saying so.

## Check yourself

1. Why does a good model fit fail to establish the model's mechanism is correct?
2. What is parameter recovery, and why must it be checked before interpreting parameters?
3. Why is a broad, flexible framework harder to test than a narrow, specific model?

## Answer notes

1. Different models, or mechanisms, can produce very similar data, so fitting well does not distinguish between them.
2. Simulating data from known parameters and checking the fitting procedure recovers them; without it, fitted parameters can be meaningless despite a good fit.
3. A framework that accommodates many theories is compatible with almost any result, so it rarely makes a prediction that could fail.

## Next steps

- Continue to [[Lesson - Reinforcement learning]].
- Related: [[Computational psychiatry]], where this discipline decides whether a fitted parameter can be used as a clinical measure.
