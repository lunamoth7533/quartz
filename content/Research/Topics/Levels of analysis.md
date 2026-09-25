---
note_type: topic
title: "Levels of analysis"
description: "Why the same system is described at molecular, cellular, circuit, cognitive and behavioural levels, and what each level can and cannot explain."
content_layer: reference
concept_kind: framework
domain: [computational-brain-theories, research-methods]
secondary_domain: []
condition: []
source_count: 7
reviewed: 2026-09-25
cssclasses: [research-topic]
tags: [research/topic, research/reference, research/domain/computational, research/domain/methods]
---
# Levels of analysis

## Definition

Levels of analysis are the distinct descriptions used for the same system: molecules and channels, cells, circuits, systems, cognition and behaviour. A claim at one level is not automatically a claim at another.

## How it works

**Distinct vocabularies.** A channel conductance, a synaptic weight, a network trajectory and a behavioural choice are different kinds of description; translating between them requires an explicit model. [[F92 Neuronal Dynamics#^f92-models|Neuronal Dynamics]]

**Why modelling helps.** Computational work makes the translation explicit: a model states which cellular properties are assumed to produce which circuit behaviour, and can fail informatively. [[F91 Computational Cognitive Neuroscience#^f91-levels|Computational Cognitive Neuroscience]]

**Levels are not a hierarchy of importance.** Molecular detail can be irrelevant to a behavioural question, and behavioural data can be insufficient to distinguish mechanisms - both directions of failure occur. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Computational modelling rules]]

**Research frameworks use this explicitly.** RDoC organises research by units of analysis from genes to self-report, which is a practical application of the levels idea. [[F121 NIMH RDoC#^f121-matrix|Research Domain Criteria]]

## Evidence and status

The distinction is conceptual and uncontroversial; the practical difficulty is that most empirical work measures one level and infers another.

> [!info]- In depth: describing, modelling and explaining at different scales
> **Why the distinction exists.** The same phenomenon can be described at the level of molecules, cells, circuits, behaviour or self-report, and a claim at one level does not translate automatically into another. RDoC makes this explicit by combining units of analysis - genes, molecules, cells, circuits, physiology, behaviour and self-report - with domains of function in a matrix used to design studies, rather than treating one unit as the explanation of another. [[F121 NIMH RDoC#^f121-matrix|RDoC]] [[F121 NIMH RDoC#^f121-purpose|RDoC]]
>
> **Models are built at specific levels.** Computational work develops formal models of neurons, from integrate-and-fire to conductance-based descriptions, connecting model parameters to measured quantities, and builds models from single neurons up to networks, using simulations to test whether a mechanism can reproduce a cognitive phenomenon. A model at one level is an argument about what that level must implement, not a measurement at any level. [[F92 Neuronal Dynamics#^f92-models|Neuronal Dynamics]] [[F91 Computational Cognitive Neuroscience#^f91-levels|Computational Cognitive Neuroscience]]
>
> **Identifiability limits the inference.** Different models can produce similar behaviour, so a good fit is not evidence that the hypothesised mechanism is the true one; parameter recovery checks and model comparison with reported uncertainty are the minimum discipline. The same degeneracy appears physiologically: circuits with different underlying parameters can produce similar outputs, which the neuromodulation literature treats as a fundamental problem for relating structure to function. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Computational modelling rules]] [[P23040802 Marder 2012 Neuromodulation#^p23040802-degeneracy|Neuromodulation]]
>
> **Framework breadth cuts both ways.** A framework that accommodates many theories can be difficult to falsify in specific cases, and distinct algorithms within one named framework differ substantially, so evidence for one is not automatically evidence for another. Claiming a level is not the same as making a prediction at it. [[P20068583 Friston 2010 Free-energy principle#^p20068583-status|The free-energy principle]] [[P26809759 Spratling 2017 Predictive coding algorithms#^p26809759-plural|Predictive coding algorithms]] [[P26809759 Spratling 2017 Predictive coding algorithms#^p26809759-difference|Predictive coding algorithms]]
>
> **Reading rule.** For any mechanistic sentence, name the level it is claimed at, the measurement that supports it, and the bridge assumption that carries it to another level. Marr-style levels are a vocabulary for asking that question, not a licence to assume the answer. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-validation|Computational modelling rules]]

> [!info]- Further depth: naming the level and the bridge
> RDoC's matrix crosses units of analysis - genes, molecules, cells, circuits, physiology, behaviour, self-report - with functional domains, which is a design tool for keeping levels explicit rather than a claim that one level explains another. Models are built at specific levels: neuron models connect parameters to measured quantities, and network models ask whether a mechanism can reproduce a phenomenon. Identifiability limits the inference, since different models can produce similar behaviour, and physiological degeneracy shows the same structure-function gap. [[F121 NIMH RDoC#^f121-matrix|RDoC]] [[F92 Neuronal Dynamics#^f92-models|Neuronal Dynamics]] [[F91 Computational Cognitive Neuroscience#^f91-levels|Computational Cognitive Neuroscience]] [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Computational modelling rules]] [[P23040802 Marder 2012 Neuromodulation#^p23040802-degeneracy|Neuromodulation]]
>
> **The three-level vocabulary earns its keep in failures.** Marr-style levels - computation, algorithm, implementation - organise both successes and failures: a model can succeed at one level while missing another, and the interesting results are often the mismatches - an algorithm that reproduces behaviour while being biologically implausible, or a neural detail with no computational consequence. Framing mismatches as failures at a named level keeps critique precise rather than global. [[F91 Computational Cognitive Neuroscience#^f91-levels|Computational Cognitive Neuroscience]] [[F92 Neuronal Dynamics#^f92-models|Neuronal Dynamics]]
>
> **Why translational claims are level-crossing claims.** A claim that a cellular finding "explains" a behaviour crosses implementation to computation in one step; a claim that a task deficit "is" a circuit problem crosses the other way. Each crossing needs the explicit model that the levels article demands, and most cross-level overreach in psychiatric literature is a crossing performed without one. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Computational modelling rules]] [[Translational validity]]
>
> **Cross-domain connection (curation).** RDoC's matrix is the institutional version of this idea - the same construct studied across units from genes to self-report - and this note supplies its conceptual justification plus its caveat: units at different levels are not reducible to each other, so a matrix is not a hierarchy of importance. [[F121 NIMH RDoC#^f121-matrix|Research Domain Criteria]] [[Categorical versus dimensional classification]]

## Connections

This note frames [[Neural coding and population codes]], [[Dynamical systems models]] and the whole computational domain. It is also the conceptual reference for [[Translational validity]] in the methods domain.

## Uncertainties

- There is no agreed rule for when a lower-level difference is sufficient to explain a higher-level one.
