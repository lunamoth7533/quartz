---
note_type: module
title: "Module 14 - Computational Neuroscience and Brain Theories"
module: "m14"
module_order: 14
domain: [computational-brain-theories]
condition: []
lesson_count: 14
source_count: 32
cssclasses: [research-module]
tags: [research/module, research/module/m14]
---

# Module 14 - Computational Neuroscience and Brain Theories

**Lessons.** 14 · **Entry point.** [[Learning Path]]

## What this module is for

Formal models of what neural systems compute and how: single-cell and population coding, dynamical-systems descriptions, reinforcement learning and its dopamine correspondence, Bayesian and active-inference accounts of perception and action, network and connectome models, and the competing theories of consciousness - ending in computational psychiatry, where these formalisms become candidate measures in bipolar disorder, ADHD, autism and CPTSD.

The module's throughline is precision under uncertainty. A claim in this domain becomes testable only once its level, its model class and its evidence are all named, and the same identifiability problem - different models, or different mechanisms, can produce very similar data - recurs in every lesson, from single-neuron codes to theories of consciousness to fitted clinical parameters.

## Learning objectives

1. Name the level a computational claim is made at (normative, algorithmic, implementational) and the bridging assumption needed to move between levels.
2. Distinguish candidate neural codes (rate, timing, population) and explain what a dynamical-systems, trajectory-based description adds and does not add.
3. Apply the model-comparison checklist - candidate set, parameter recovery, comparison uncertainty - to any fitted computational claim, including reinforcement-learning, drift-diffusion and network parameters.
4. Explain reinforcement learning's core objects (value, policy, prediction error), its dopamine correspondence, and that correspondence's limits.
5. Compare Bayesian/predictive-processing, active-inference and consciousness theories on what each treats as evidence and what each would need to be falsified.
6. Read a computational-psychiatry finding for its wing (data- or theory-driven), its model comparison, its parameter's reliability, and its confounds (medication, mood state).

## Lesson sequence

1. [[Lesson - Levels of analysis]] · 5 sources
2. [[Lesson - Neural coding and population codes]] · after [[Lesson - Levels of analysis]] · 5 sources
3. [[Lesson - Dynamical systems models]] · after [[Lesson - Neural coding and population codes]] · 4 sources
4. [[Lesson - Model comparison and identifiability]] · after [[Lesson - Dynamical systems models]] · 4 sources
5. [[Lesson - Reinforcement learning]] · after [[Lesson - Model comparison and identifiability]] · 4 sources
6. [[Lesson - Reward prediction error]] · after [[Lesson - Reinforcement learning]] · 4 sources
7. [[Lesson - Model-based and model-free control]] · after [[Lesson - Reward prediction error]] · 4 sources
8. [[Lesson - Drift diffusion models]] · after [[Lesson - Model-based and model-free control]] · 5 sources
9. [[Lesson - Bayesian inference and predictive processing]] · after [[Lesson - Drift diffusion models]] · 4 sources
10. [[Lesson - Active inference and free energy]] · after [[Lesson - Bayesian inference and predictive processing]] · 4 sources
11. [[Lesson - Network and connectome models]] · after [[Lesson - Active inference and free energy]] · 5 sources
12. [[Lesson - Global workspace and integrated information]] · after [[Lesson - Network and connectome models]] · 5 sources
13. [[Lesson - Theories of consciousness compared]] · after [[Lesson - Global workspace and integrated information]] · 5 sources
14. [[Lesson - Computational psychiatry]] · after [[Lesson - Theories of consciousness compared]] · 8 sources

## Worked-example trail

- [[Lesson - Levels of analysis]] - hypothetical worked example: a headline claiming a gene "causes" hyperactive behaviour is traced level by level to find what evidence is actually missing.
- [[Lesson - Neural coding and population codes]] - hypothetical worked example: two labs disagree about a "preparatory signal" until a single-cell code and a population code are told apart.
- [[Lesson - Dynamical systems models]] - hypothetical worked example: a state-space "loop" said to prove a timing mechanism is checked against what a trajectory actually shows.
- [[Lesson - Model comparison and identifiability]] - hypothetical worked example: a well-fitting "impulsivity model" is run through the comparison-and-recovery checklist before its claim is accepted.
- [[Lesson - Reinforcement learning]] - hypothetical worked example: a task's fitted "learning rate" is separated from a claim about dopamine it was never designed to measure.
- [[Lesson - Reward prediction error]] - hypothetical worked example: a claim that disrupted dopamine means someone "cannot experience reward" is split into its measured, computational and algorithmic parts.
- [[Lesson - Model-based and model-free control]] - hypothetical worked example: one person's faster adjustment after a reward changes is checked against what a "model-based weight" can and cannot mean.
- [[Lesson - Drift diffusion models]] - hypothetical worked example: a lower drift rate is tested against several rival theories it is equally consistent with.
- [[Lesson - Bayesian inference and predictive processing]] - hypothetical worked example: a predator-or-leaf judgement is worked through in numbers, then re-run with stronger evidence to show what actually moves a posterior.
- [[Lesson - Active inference and free energy]] - hypothetical worked example: a claim that a theory "explains" uncertainty-avoidance is checked for whether it could have failed.
- [[Lesson - Network and connectome models]] - hypothetical worked example: a scan described as showing "reduced network connectivity" is unpacked into its node, edge and threshold choices.
- [[Lesson - Global workspace and integrated information]] - hypothetical worked example: a debate over which consciousness theory is "correct" is reframed around what each theory would have to forbid.
- [[Lesson - Theories of consciousness compared]] - hypothetical worked example: a headline claiming one 2025 study "proved" a theory of consciousness is checked against what an adversarial collaboration is actually built to show.
- [[Lesson - Computational psychiatry]] - hypothetical worked example: a headline claiming a computer task can "diagnose ADHD" is run through the reading rule for wing, comparison, reliability and confounds.

## Core and advanced branches

**Core sequence**

- Read the four foundations lessons in order before the learning-and-inference block, then networks and theories, then the computational-psychiatry capstone.
- For every fitted-parameter claim, name the candidate set, the recovery check and the comparison uncertainty before judging it.

**Advanced branch**

- Compare how the same model-comparison discipline plays out differently in a physiological finding (reward prediction error), a theoretical dispute (theories of consciousness) and a clinical application (computational psychiatry).
- Design the reliability study you would want run before treating a favourite computational parameter as a candidate clinical measure.

## Common confusions

- A model that fits well has found the true mechanism, rather than one description among several that could fit equally well.
- A fitted parameter is a direct measurement of a brain system, rather than an estimate from one task and one model.
- A broad, unifying framework's breadth is evidence of its truth, rather than an obstacle to testing it.

## Module assessment

Answer from memory first; the parent lesson holds the supporting detail.

1. Why does a good fit between a computational model and behavioural or neural data fail to prove the model's mechanism is correct?
   - *Working answer.* Identifiability: different models, or different underlying mechanisms, can produce very similar data, so matching the data does not single out which one actually produced it; parameter recovery and comparison against rivals are required before a fitted parameter is interpreted.
   - *Answer sources.* [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Computational modelling rules]]; [[P23040802 Marder 2012 Neuromodulation#^p23040802-degeneracy|Neuromodulation]]

2. What does the correspondence between dopamine firing and reward prediction error establish, and what does it not establish?
   - *Working answer.* It establishes that midbrain dopamine activity closely tracks the difference between predicted and received reward, confirming a specific prediction of temporal-difference learning theory. It does not establish that dopamine is a single, uniform "reward signal," since dopamine neurons are heterogeneous and carry other information, including salience and movement-related signals.
   - *Answer sources.* [[P27069377 Schultz 2016 Reward prediction error#^p27069377-rpe|Reward prediction error]]; [[P29760524 Berke 2018 What does dopamine mean#^p29760524-heterogeneity|What does dopamine mean?]]

3. Why should a computational-psychiatry finding, such as a fitted parameter differing between a clinical group and controls, be read as a candidate research measure rather than a diagnostic tool?
   - *Working answer.* Many computational measures show poor test-retest reliability and construct validity; reliability demonstrated in healthy volunteers has not been shown to extend to clinical groups or longer intervals; and most condition-level findings in this domain come from single samples or reviews rather than large replicated studies.
   - *Answer sources.* [[P36940888 Karvelis 2023 Individual differences in computational psychiatry#^p36940888-psychometrics|Karvelis 2023]]; [[P38774643 Mkrtchian 2023 Reliability of reinforcement learning parameters#^p38774643-caution-generalise|Appraisal: Mkrtchian 2023]]

## Source boundaries

Several sources in this module are theoretical reviews, single case-control studies or one meta-analysis with large unexplained heterogeneity, rather than large replicated trials; each lesson names that status where it matters. The capstone lesson states plainly where fitted computational parameters are candidate research measures rather than clinical or diagnostic tools, and no lesson in this module gives dosing, titration or individual treatment guidance.

## Next steps

- Revisit [[Computational Neuroscience and Brain Theories Map]] to see the full concept register this module draws from.
- Return to [[Learning Path]] once the check-yourself questions in each lesson are answerable without the notes.
