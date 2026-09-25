---
note_type: topic
title: "Active inference and free energy"
description: "A framework that treats action, perception and learning as minimising a single quantity, and the criticisms that scope raises."
content_layer: reference
concept_kind: theory
domain: [computational-brain-theories]
secondary_domain: []
condition: []
source_count: 5
reviewed: 2026-09-25
up: "[[Computational Neuroscience and Brain Theories - Learning and inference]]"
cssclasses: [research-topic]
tags: [research/topic, research/reference, research/domain/computational]
---
# Active inference and free energy

## Definition

The free-energy principle proposes that perception, action and learning all reduce a quantity related to prediction error and surprise. Active inference extends this to action, treating behaviour as a way of changing inputs to match predictions.

## How it works

**One objective for perception, action and learning.** The free-energy principle proposes that action, perception and learning all minimise a single quantity, and argues that several existing brain theories can be expressed as optimisation of value or its complement. That unifying scope is the source of both its appeal and its critics. [[P20068583 Friston 2010 Free-energy principle#^p20068583-claim|The free-energy principle]] [[P20068583 Friston 2010 Free-energy principle#^p20068583-unification|The free-energy principle]]

**Action as inference.** Classical accounts separate perception (inference about the world) from action (acting on it); active inference treats acting to bring about predicted states as the same kind of process as perceptual inference, so behaviour becomes part of one minimisation without a separate reward system. The reframe generates genuinely different explanations for some behaviours - seeking information, avoiding surprise - which is what makes it scientifically interesting despite its testability limits. [[P20068583 Friston 2010 Free-energy principle#^p20068583-claim|The free-energy principle]] [[Bayesian inference and predictive processing]]

**Relation to predictive processing.** Perception-side algorithms implement parts of the framework, and active inference adds action and policies. "Predictive coding" itself covers several distinct algorithms that all fit a generative model to sensory data but differ in their generative models and optimisation methods, so evidence for one algorithm is not evidence for another: a framework claim and an algorithmic claim are different objects. [[P26809759 Spratling 2017 Predictive coding algorithms#^p26809759-plural|Predictive coding algorithms]] [[P26809759 Spratling 2017 Predictive coding algorithms#^p26809759-difference|Predictive coding algorithms]] [[P26809759 Spratling 2017 Predictive coding algorithms#^p26809759-common|Predictive coding algorithms]]

**The falsifiability objection.** The breadth that makes the framework unifying also makes it difficult to falsify in specific cases, since many models can be written in its terms - a statement about the shape of the theory rather than about its truth. Because the framework accommodates many results, a successful expression of a phenomenon in free-energy terms is weak evidence compared with a divergent quantitative prediction, a point the review's own status discussion makes. [[P20068583 Friston 2010 Free-energy principle#^p20068583-status|The free-energy principle]] [[P20068583 Friston 2010 Free-energy principle#^p20068583-unification|The free-energy principle]]

**What a testable version looks like.** The methods literature's requirements apply: specify a model with parameters, fit it against alternatives, check that parameters are recoverable and report comparison uncertainty, because different models can produce similar behaviour. Active inference becomes testable when it is narrowed to a model with identifiable parameters, and the domain's model-comparison article supplies the standards such a model would need to meet. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-fitting|Computational modelling rules]] [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Computational modelling rules]] [[Model comparison and identifiability]]

## Evidence and status

The framework has generated testable models in perception, motor control and interoception; whether it is a theory or a mathematical language for theories is an open disagreement in the field. [[P31078047 Doerig 2019 Unfolding argument#^p31078047-debate|The unfolding argument]] Separate the principle, the algorithm and the implementation, and ask which one a study actually tested: the source in this library is a theoretical review whose access was abstract-level, and the principle is a framework rather than a validated mechanism. [[P20068583 Friston 2010 Free-energy principle#^p20068583-limit|The free-energy principle]]

## Connections

This note completes the perception-action pair with [[Bayesian inference and predictive processing]], and it belongs to the theory-comparison discussion in [[Theories of consciousness compared]].

**Cross-domain connection (curation).** The psychosis-application proposal the Bayesian article carries is the nearest clinical extension in this library, and it is a proposal; the levels-of-analysis article supplies the guardrail that a framework-level claim is not an implementational finding. [[P19050712 Fletcher 2009 Perceiving is believing]] [[Levels of analysis]]

## Uncertainties

- Empirical discrimination between active-inference models and simpler reinforcement-learning accounts is often inconclusive. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Computational modelling rules]]
