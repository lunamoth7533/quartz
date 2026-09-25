---
note_type: map
title: "Computational Neuroscience and Brain Theories Map"
description: "Domain hub: formal models of neural computation - coding, dynamics, learning, inference - and the theories of brain function built on them."
map_kind: foundation
content_layer: reference
concept_kind: framework
condition: []
domain: [computational-brain-theories]
reviewed: 2026-09-25
cssclasses: [research-map]
tags: [research/map, research/reference, research/domain/computational-brain-theories]
---
# Computational Neuroscience and Brain Theories Map

This domain covers formal descriptions of what neural systems compute and how: codes, dynamics, learning rules, inference frameworks, and the theories of consciousness that compete at a different level.

> **Reference entry point:** [[Research Atlas]] carries the fifteen-domain reference layer for this hub; [[Reference Index]] lists every concept article, the native views and the relationship register.

**Contents.** [[#Reference overview|Overview]], [[#Reference spine|Reference spine]], [[#Concept register|Concept register]], [[#Where this domain connects|Cross-domain links]], [[#Evidence boundaries|Evidence boundaries]]

## Reference overview

This domain asks what the brain computes and how that computation could be realised. Its value to
the rest of the reference is that it forces precision: a claim about coding, inference or
prediction only becomes testable when a model is specified well enough to make a quantitative
prediction that a competitor does not make.

**Levels first.** Normative theories say what an ideal system should compute, algorithmic theories
say how it could be computed, and implementational theories say what carries it out. Most
confusion in this domain comes from mixing levels - treating a normative result as evidence for an
implementation, or an implementation detail as a refutation of a normative claim. [[Levels of analysis]]

**Coding is a measurement question.** Single-unit rates, spike timing and population-level
trajectories are complementary descriptions, and which one is informative depends on the area and
the task; the strongest population-level result in this library comes from motor cortex and its
authors framed it as descriptive rather than mechanistic. [[Neural coding and population codes]]
[[P22722855 Churchland 2012 Neural population dynamics#^p22722855-claim|Neural population dynamics]]

**Learning and inference share a currency but not a formalism.** Reinforcement learning describes
behaviour as value-guided, with reward prediction error as a teaching signal that has direct
neurophysiological support in dopamine neurons; Bayesian accounts describe perception as posterior
inference, with prediction error as a residual. The two are related but not interchangeable, and
the model-based/model-free distinction is the bridge between them. [[Reinforcement learning]]
[[Reward prediction error]] [[Model-based and model-free control]] [[Bayesian inference and predictive processing]]

**Dynamics give the population description.** Dynamical-systems accounts treat circuit activity as
a trajectory through a state space, which explains how the same circuit can produce different
outputs under different inputs or modulatory states, and why different parameter sets can produce
similar behaviour - degeneracy. [[Dynamical systems models]] [[P23040802 Marder 2012 Neuromodulation#^p23040802-degeneracy|Neuromodulation]]

**Networks and theories of consciousness are the contested edge.** Connectome models describe
statistical structure at the network level, which is a different object from an anatomical wiring
diagram; and the competing theories of consciousness make ambitious claims whose comparison
depends on assumptions that the critique in this library makes explicit. [[Network and connectome models]] [[Global workspace and integrated information]] [[Theories of consciousness compared]]
[[P24811198 Oizumi 2014 Integrated information theory#^p24811198-limit|Integrated information theory]]

**Model comparison is the method that keeps this honest.** Falsifiability, identifiability and
out-of-sample prediction are what distinguish a model from a redescription; a framework that
accommodates every result predicts none. [[Model comparison and identifiability]] [[P20068583 Friston 2010 Free-energy principle#^p20068583-status|The free-energy principle]]

**Where to start.** [[Levels of analysis]] first, then [[Neural coding and population codes]] and [[Reinforcement learning]] for mechanisms, and [[Theories of consciousness compared]] for the contested end of the domain. The full article list for this domain is in the concept register below; [[Reference Index]] carries A-Z, concept-kind, domain, condition and evidence routes over the whole reference layer.

## Reference spine

Levels matter. Molecular, cellular, circuit, cognitive and behavioural descriptions are different languages, and translating between them requires an explicit model that can fail informatively. [[F91 Computational Cognitive Neuroscience#^f91-levels|Computational Cognitive Neuroscience]] [[F92 Neuronal Dynamics#^f92-models|Neuronal Dynamics]]

Coding and dynamics describe what activity represents. Rate, timing and population codes are candidates, and population recordings during movement show low-dimensional trajectories that single-neuron descriptions do not capture. [[P22722855 Churchland 2012 Neural population dynamics#^p22722855-population|Neural population dynamics]] [[P22722855 Churchland 2012 Neural population dynamics#^p22722855-trajectory|Neural population dynamics]] Dynamical models make the state-dependence explicit, and neuromodulators change the parameters of those dynamics. [[P23040802 Marder 2012 Neuromodulation#^p23040802-reconfigure|Neuromodulation of neuronal circuits]]

Learning and inference provide the formal core. Reinforcement learning defines value, policy and the exploration trade-off; temporal-difference prediction error maps onto dopamine signals, with the caveat that dopamine carries additional and heterogeneous signals. Bayesian and predictive-processing accounts describe perception as inference, and active inference extends the same logic to action. [[F123 Sutton and Barto Reinforcement Learning#^f123-framework|Reinforcement Learning]] [[F123 Sutton and Barto Reinforcement Learning#^f123-td|Reinforcement Learning]] [[P27069377 Schultz 2016 Reward prediction error#^p27069377-rpe|Dopamine reward prediction error coding]] [[P29760524 Berke 2018 What does dopamine mean#^p29760524-complexity|What does dopamine mean?]] [[P26809759 Spratling 2017 Predictive coding algorithms#^p26809759-plural|A review of predictive coding algorithms]] [[P20068583 Friston 2010 Free-energy principle#^p20068583-claim|The free-energy principle]]

Theories of consciousness sit at the contested end. Function-based accounts such as global workspace locate consciousness in what a system does; causal-structure accounts such as integrated information locate it in how the system is organised, and the unfolding argument claims the latter are false or unfalsifiable. [[P24811198 Oizumi 2014 Integrated information theory#^p24811198-axioms|From the phenomenology to the mechanisms of consciousness]] [[P31078047 Doerig 2019 Unfolding argument#^p31078047-argument|The unfolding argument]]

Model comparison is the discipline that keeps all of this honest: different models often fit the same data, so parameter recovery and out-of-sample validation are required before interpreting parameters. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-validation|Ten simple rules for the computational modeling of behavioral data]] [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Ten simple rules for the computational modeling of behavioral data]]

## Concept register

- **Foundations:** [[Levels of analysis]], [[Neural coding and population codes]], [[Dynamical systems models]], [[Model comparison and identifiability]]
- **Learning and inference:** [[Reinforcement learning]], [[Reward prediction error]], [[Model-based and model-free control]], [[Bayesian inference and predictive processing]], [[Active inference and free energy]]
- **Networks and theories:** [[Network and connectome models]], [[Global workspace and integrated information]], [[Theories of consciousness compared]]

## Where this domain connects

- Neurobiology supplies the mechanisms being modelled: [[Long-term potentiation and depression]], [[Ion gradients and membrane potential]].
- Neurochemistry supplies the modulatory and reward signals: [[Dopamine signalling]], [[Neuromodulation and circuit state]].
- Clinical domains use these models for behaviour: [[Reinforcement learning accounts of ADHD]], [[Network and developmental formulations]].

## Evidence boundaries

Models can fit data without being unique, and neural correlates of a computational term are not the term itself. This domain is explicitly about formal descriptions and their testability.
