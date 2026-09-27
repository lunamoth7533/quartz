---
note_type: lesson
title: "Active inference and free energy"
module: "m14"
module_title: "Computational Neuroscience and Brain Theories"
lesson_order: 10
domain: [computational-brain-theories]
condition: []
prerequisites: ["Bayesian inference and predictive processing"]
sources: ["P20068583", "P26809759", "P31769410", "P31078047"]
source_count: 4
question_count: 3
word_count: 799
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m14]
---

# Active inference and free energy

**Module.** M14 Computational Neuroscience and Brain Theories · **Topic.** [[Active inference and free energy]]

## Why this matters

Active inference is offered as a single unifying account of perception, action and learning, and a claim of this scope needs careful reading, since breadth is both its appeal and the reason it is hard to test.

## The core model

The core proposal: a single quantity related to prediction error and surprise is minimised by perception, action and learning together, and several existing brain theories can reportedly be rewritten as optimising some version of it. That unifying scope is the source of both its appeal and its critics. [[P20068583 Friston 2010 Free-energy principle#^p20068583-claim|The free-energy principle]]

Action reframed as inference: classical accounts treat perception and action as separate systems; active inference instead treats acting-to-bring-about a predicted state as the same kind of process as perceptual inference, folding behaviour into one minimisation without a separate reward system. This genuinely generates different explanations for behaviours like seeking information or avoiding surprise, which is what makes it scientifically interesting despite the testability concerns below. [[P20068583 Friston 2010 Free-energy principle#^p20068583-claim|The free-energy principle]]

Its relationship to predictive processing: perception-side predictive-coding algorithms implement parts of this picture, and active inference adds action and policy selection on top. But "predictive coding" names several distinct algorithms differing in their generative models and methods, so evidence for one does not transfer to another - a framework-level claim is a different object than an algorithm-level claim. [[P26809759 Spratling 2017 Predictive coding algorithms#^p26809759-plural|Predictive coding algorithms]]

The falsifiability objection: the same breadth that makes the framework unifying also makes it hard to falsify in any specific case, since many different models can be written in its terms - a statement about the shape of the theory, not about whether it is true. Because the framework can accommodate so many results, successfully describing a phenomenon in free-energy terms is weak evidence next to a divergent, falsifiable quantitative prediction. [[P20068583 Friston 2010 Free-energy principle#^p20068583-status|The free-energy principle]]

What would make a version of it testable: the same standards as any other model - specify one with identifiable parameters, fit it against genuine alternatives, check parameters can be recovered, and report comparison uncertainty. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-fitting|Computational modelling rules]]

Its place in an open debate: whether it is a scientific theory or a mathematical language many possible theories can be written in remains unresolved among researchers who work with it. [[P31078047 Doerig 2019 Unfolding argument#^p31078047-debate|The unfolding argument]]

## Worked example (hypothetical)

A talk claims: "active inference explains why people avoid uncertain situations, because they are minimising free energy." Apply the falsifiability check: could any observed behaviour, in principle, fail to be describable as minimising some version of free energy? If the framework absorbs both uncertainty-avoiding and uncertainty-seeking behaviour equally well by adjusting which term is doing the work, the claim is not yet a testable prediction - it is a redescription. A testable version would specify, in advance, the exact quantities and their expected relationship, and would report how that prediction fares against a simpler alternative, such as ordinary reinforcement learning on the same task.

## Common confusions

- "Active inference is proven correct because it describes so many behaviours." Describing many behaviours after the fact is what a hard-to-falsify framework does, not a prediction that could have failed.
- "Free energy and reward are just different words for the same thing." Active inference folds action into perception's minimisation without a separate reward system, a substantively different proposal.
- "Because it is mathematical, it is automatically a rigorous, tested theory." A framework can be precise and still broad enough to fit almost any result.

## What the sources do not establish

Whether active inference is a scientific theory making risky predictions, or a general mathematical language many theories can be written in, is described here as an open disagreement, and the source used for the core proposal is a theoretical review rather than a test of one falsifiable version.

## Check yourself

1. What single change does active inference make to the perception-action separation?
2. Why is a framework's breadth both its appeal and its central criticism?
3. What would a genuinely testable version of active inference need?

## Answer notes

1. It treats acting to bring about a predicted state as the same kind of inference as perceiving, rather than two separate systems.
2. Breadth lets it describe many behaviours and unify theories, but makes it hard to state an outcome it could not also accommodate.
3. A specific model with identifiable parameters, compared against alternatives, with recovery checked and uncertainty reported.

## Next steps

- Continue to [[Lesson - Network and connectome models]].
- Related: [[Bayesian inference and predictive processing]] for the perception-side half of this pairing.
