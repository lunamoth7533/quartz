---
note_type: topic
title: "Bayesian inference and predictive processing"
description: "Perception as probabilistic inference, the predictive-coding family of algorithms, and the differences between them."
content_layer: reference
concept_kind: theory
domain: [computational-brain-theories, psychology]
secondary_domain: []
condition: []
source_count: 3
reviewed: 2026-09-25
up: "[[Computational Neuroscience and Brain Theories - Learning and inference]]"
cssclasses: [research-topic]
tags: [research/topic, research/reference, research/domain/computational, research/domain/psychology]
---
# Bayesian inference and predictive processing

## Definition

Bayesian accounts treat perception as inference about the causes of sensory data, combining prior expectations with likelihood. Predictive processing is a family of algorithms implementing that idea by comparing predictions with input.

## How it works

**Levels of analysis.** Bayesian claims are made at three levels that must be kept apart. The normative level says what an ideal observer should infer given a generative model; the algorithmic level specifies a procedure that approximates that inference; the implementational level proposes how neurons could carry it out. Predictive processing lives mostly at the algorithmic level, and a claim at one level does not transfer to another: an algorithm that reproduces a perceptual phenomenon is not evidence that the brain implements it, and a neural correlate is not evidence about which inference is normatively correct. [[Levels of analysis]] [[P26809759 Spratling 2017 Predictive coding algorithms#^p26809759-plural|Predictive coding algorithms]]

**Prior, likelihood, posterior.** Perception is modelled as inference: the posterior probability of a hypothesis is proportional to the prior times the likelihood of the data. Priors encode what the system expects before the evidence arrives; the likelihood encodes how probable the current sensory data are under each hypothesis; the posterior is their combination. Perceptual phenomena such as context effects, illusions and ambiguity resolution are the classical motivating examples, because the same input yields different percepts depending on what was expected. [[P26809759 Spratling 2017 Predictive coding algorithms#^p26809759-common|Predictive coding algorithms]]

**A worked illustration with numbers.** The numbers are illustrative - chosen to make the arithmetic visible rather than drawn from a source. Suppose a blur in the peripheral field could be one of just two things: a predator-shaped object (hypothesis H1) or a wind-blown leaf (hypothesis H2). Before seeing it, the observer's priors are P(H1) = 0.1 and P(H2) = 0.9, because leaves are common in this setting. The likelihood is the probability of the observation *given* each hypothesis, and for this particular blur the shape is four times more likely under the predator hypothesis: P(blur | H1) = 0.4 and P(blur | H2) = 0.1. Bayes' rule multiplies prior by likelihood for each hypothesis - 0.1 x 0.4 = 0.04 and 0.9 x 0.1 = 0.09 - and then normalises by their sum, 0.13, so the posterior is P(H1 | blur) = 0.04 / 0.13 = 0.31 and P(H2 | blur) = 0.09 / 0.13 = 0.69. That is what a posterior is: the two products rescaled so they sum to one. The evidence moved a great deal of probability towards the predator, since the likelihood ratio is four to one, but not enough to overturn a nine-to-one prior; change either term and the answer changes, and a ten-to-one likelihood ratio would put the predator ahead. A prior dominating the posterior is not by itself an error - if the prior is calibrated to the environment, the prior-weighted answer is the better bet, and the classic illusion cases are those where the environment that shaped the prior differs from the one being tested. Nothing in this example requires the brain to represent probabilities explicitly; it requires behaviour consistent with combining prior and likelihood. [[P26809759 Spratling 2017 Predictive coding algorithms#^p26809759-common|Predictive coding algorithms]]

**Precision and prediction error.** Cortical versions of predictive coding compare top-down predictions with bottom-up input and send forward the residual mismatch, with a precision term controlling how much weight each error signal receives relative to the priors. Precision is the formal place where attention and uncertainty enter - raising precision on a channel increases its influence without changing the underlying prediction - and it links the framework to attention and to accounts of altered perception. [[P26809759 Spratling 2017 Predictive coding algorithms#^p26809759-common|Predictive coding algorithms]]

**The algorithm family is not one theory.** The label predictive coding covers several distinct algorithms - from signal-processing linear predictive coding through hierarchical cortical models to free-energy formulations - that differ in their generative models, their objectives and optimisation methods, and their neural predictions. Evidence and criticisms are therefore not transferable between them, and a result supporting one is not evidence for the others. [[P26809759 Spratling 2017 Predictive coding algorithms#^p26809759-plural|Predictive coding algorithms]] [[P26809759 Spratling 2017 Predictive coding algorithms#^p26809759-difference|Predictive coding algorithms]]

**Relation to neighbouring frameworks.** Reinforcement learning shares the prediction-error currency but specifies value and action rather than perceptual inference, and dynamical-systems accounts describe trajectories rather than posteriors. These are complementary descriptions at different levels, and a claim becomes hard to assess when the level it belongs to is not stated - a property of how the claim is written rather than of any one framework. [[Reinforcement learning]] [[Dynamical systems models]]

**Applications beyond perception.** For psychosis, a theoretical review proposes understanding hallucinations and delusions together as a disturbance in error-dependent updating of inferences and beliefs within a hierarchical Bayesian framework. That is a proposal about mechanism; it is not itself evidence that the brain implements the framework, and putting it to clinical use would need its own evidence. [[P19050712 Fletcher 2009 Perceiving is believing#^p19050712-proposal|Perceiving is believing]] Accounts for autism and interoception have also been proposed; a proposal without supporting evidence remains a proposal, and each application stands or falls on its own evidence.

## Evidence and status

The free-energy principle is a theoretical proposal by its author, and its breadth is also the basis of the criticism that a framework accommodating many theories is difficult to falsify. It therefore cannot be cited as proof that behavioural or neural results have established probabilistic inference in general: that requires a specific model whose quantitative predictions survive comparison with alternatives. [[P20068583 Friston 2010 Free-energy principle#^p20068583-claim|The free-energy principle]] [[P20068583 Friston 2010 Free-energy principle#^p20068583-status|The free-energy principle]] [[P20068583 Friston 2010 Free-energy principle#^p20068583-limit|The free-energy principle]]

What would count as a test is correspondingly specific: a useful test specifies the generative model, derives a quantitative prediction that differs from a competing account, and survives comparison on held-out data. Broad statements that a system 'minimises prediction error' fail this bar because many mechanisms do, which is the criticism attached to the unifying proposals rather than to individual models. [[P20068583 Friston 2010 Free-energy principle#^p20068583-unification|The free-energy principle]] [[P20068583 Friston 2010 Free-energy principle#^p20068583-status|The free-energy principle]] [[Model comparison and identifiability]]

## Connections

This note is the perception-side counterpart to [[Active inference and free energy]], and its psychosis application is a theoretical proposal rather than established clinical science. [[P19050712 Fletcher 2009 Perceiving is believing#^p19050712-proposal|Perceiving is believing]]

## Uncertainties

- Different predictive-coding algorithms make different neural predictions, so evidence in their favour is not interchangeable.
