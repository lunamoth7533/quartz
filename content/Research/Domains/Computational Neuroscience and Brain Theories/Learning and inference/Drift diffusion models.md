---
note_type: topic
title: "Drift diffusion models"
description: "Evidence-accumulation models of two-choice decisions: what drift rate, boundary separation, starting point and non-decision time mean, why joint fitting constrains them, and how they have been used to decompose reaction-time variability in ADHD."
content_layer: reference
concept_kind: theory
domain: [computational-brain-theories]
secondary_domain: [psychology, adhd]
condition: [adhd, autism]
source_count: 5
reviewed: 2026-09-27
up: "[[Computational Neuroscience and Brain Theories Map]]"
cssclasses: [research-topic]
tags: [research/topic, research/reference, research/domain/computational, research/condition/adhd, research/condition/autism]
---
# Drift diffusion models

## Definition

A drift diffusion model treats a two-choice decision as the gathering of evidence until a criterion amount is reached, and it converts accuracy together with the whole distribution of response times into estimates of separate processing components. [[P18085991 Ratcliff 2008 Diffusion decision model#^p18085991-translation|Ratcliff 2008]] [[P18085991 Ratcliff 2008 Diffusion decision model#^p18085991-parameters|Ratcliff 2008]] Its main clinical use in this library is in ADHD, where it re-describes slow and variable responding as a lower drift rate, the rate at which useful evidence is taken in. [[P27608958 Ziegler 2016 Modelling ADHD decision-making and learning#^p27608958-drift|Ziegler 2016]] [[P24628425 Karalunas 2014 Reaction time variability in ADHD and autism#^p24628425-ddm|Karalunas 2014]]

## How it works

**What the parameters mean.** Selective manipulations anchor the parameters: making stimuli harder lowered the quality of evidence (drift rate), instructions stressing speed or accuracy changed how much evidence was required before responding (boundary separation), and changing how often each stimulus appeared biased drift rate and the starting point of accumulation. [[P18085991 Ratcliff 2008 Diffusion decision model#^p18085991-parameters|Ratcliff 2008]] A further parameter, non-decision time, collects time spent outside the decision itself, which ADHD researchers read as including motor output. [[P24628425 Karalunas 2014 Reaction time variability in ADHD and autism#^p24628425-ddm|Karalunas 2014]] [[P24628425 Karalunas 2014 Reaction time variability in ADHD and autism#^p24628425-interpretation|Karalunas 2014]]

**Why joint fitting constrains the model.** Because accuracy and the shapes of the response-time distributions have to be fitted together, the model is tightly constrained and, its authors stress, testable and falsifiable. [[P18085991 Ratcliff 2008 Diffusion decision model#^p18085991-constraints|Ratcliff 2008]] General modelling rules still apply: parameter recovery should be checked before parameters are interpreted, and a good fit does not prove that the modelled mechanism is the true one. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-fitting|Wilson 2019]] [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Wilson 2019]] The mapping of parameters onto processes was validated in healthy adults, so a clinical group difference in a parameter does not by itself identify the same process. [[P18085991 Ratcliff 2008 Diffusion decision model#^p18085991-caution-mapping|Appraisal: Ratcliff 2008]]

**ADHD: from variability to drift rate.** In a meta-analysis of children, the extra reaction-time variability in ADHD was accounted for by moderate-to-large differences in drift rate and in the slow tail of the response-time distribution, with a smaller difference in non-decision time. [[P24628425 Karalunas 2014 Reaction time variability in ADHD and autism#^p24628425-ddm|Karalunas 2014]] A review of modelling studies found agreement on a lower drift rate in ADHD, while results for boundary separation were less conclusive. [[P27608958 Ziegler 2016 Modelling ADHD decision-making and learning#^p27608958-drift|Ziegler 2016]] The authors of the meta-analysis read the drift and tail differences as possible problems with arousal or state regulation and with separating signal from noise; those readings fit the parameters but are not measured by them. [[P24628425 Karalunas 2014 Reaction time variability in ADHD and autism#^p24628425-interpretation|Karalunas 2014]] [[P24628425 Karalunas 2014 Reaction time variability in ADHD and autism#^p24628425-caution-interpretation|Appraisal: Karalunas 2014]]

**Why one parameter cannot pick a theory.** Neurobiological theories of ADHD often agree on single parameters but imply different combinations of them, so a lower drift rate on its own is predicted by several competing accounts. [[P27608958 Ziegler 2016 Modelling ADHD decision-making and learning#^p27608958-predictions|Ziegler 2016]] [[P27608958 Ziegler 2016 Modelling ADHD decision-making and learning#^p27608958-caution-specificity|Appraisal: Ziegler 2016]]

**Autism.** Reaction-time variability was raised in autistic children only when samples included children who also had ADHD, which points the variability signal toward co-occurring ADHD rather than autism itself. [[P24628425 Karalunas 2014 Reaction time variability in ADHD and autism#^p24628425-autism|Karalunas 2014]]

**Reading rule.** Before reading a parameter difference as a mechanism, check that the model was fitted to full response-time distributions, that parameter recovery was shown, and that the other parameters were estimated alongside, because a lower drift rate alone fits several theories. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-fitting|Wilson 2019]] [[P27608958 Ziegler 2016 Modelling ADHD decision-making and learning#^p27608958-caution-specificity|Appraisal: Ziegler 2016]]

## Evidence and status

The model is well characterised in healthy adults through selective manipulations and has been applied widely, including to ageing and neurophysiology. [[P18085991 Ratcliff 2008 Diffusion decision model#^p18085991-parameters|Ratcliff 2008]] [[P18085991 Ratcliff 2008 Diffusion decision model#^p18085991-limit|Ratcliff 2008]] In ADHD the lower drift rate is the most consistent finding, from a child meta-analysis and a review of modelling studies, while boundary separation findings are mixed and the reinforcement-learning side of the same review rests on few studies. [[P24628425 Karalunas 2014 Reaction time variability in ADHD and autism#^p24628425-ddm|Karalunas 2014]] [[P27608958 Ziegler 2016 Modelling ADHD decision-making and learning#^p27608958-drift|Ziegler 2016]] [[P27608958 Ziegler 2016 Modelling ADHD decision-making and learning#^p27608958-rl|Ziegler 2016]] Both syntheses are a decade old, and computational measures in general often show poor reliability and construct validity, which limits their use as individual markers. [[P24628425 Karalunas 2014 Reaction time variability in ADHD and autism#^p24628425-limit|Karalunas 2014]] [[P36940888 Karvelis 2023 Individual differences in computational psychiatry#^p36940888-psychometrics|Karvelis 2023]]

## Uncertainties

- Whether a lower drift rate in ADHD reflects arousal, attention or signal-to-noise problems; the parameter itself does not say. [[P24628425 Karalunas 2014 Reaction time variability in ADHD and autism#^p24628425-caution-interpretation|Appraisal: Karalunas 2014]]
- Whether response caution, indexed by boundary separation, differs in ADHD. [[P27608958 Ziegler 2016 Modelling ADHD decision-making and learning#^p27608958-drift|Ziegler 2016]]
- Whether diffusion parameters are stable enough within a person to act as markers rather than group descriptions. [[P36940888 Karvelis 2023 Individual differences in computational psychiatry#^p36940888-psychometrics|Karvelis 2023]]
- How adults with ADHD compare, since the diffusion meta-analysis concerns children; no diffusion-model study after 2016 is sourced in this library yet.

## Recent research

- **2023 · Narrative review (Neuroscience and biobehavioral reviews).** Found that many computational measures from cognitive tasks have poor reliability and construct validity, the check that drift-rate findings in ADHD still need before any individual use. [[P36940888 Karvelis 2023 Individual differences in computational psychiatry#^p36940888-psychometrics|Karvelis 2023]]

## Connections

- [[Decision-making]] - the psychology of choice that the diffusion model formalises for fast two-choice decisions, separating evidence quality from caution.
- [[Reinforcement learning accounts of ADHD]] - the sibling computational account of ADHD; the review cited here derives both drift-rate and choice-sensitivity predictions from the same competing theories.
- [[Model comparison and identifiability]] - parameter recovery and model mimicry decide whether a fitted drift rate can be interpreted at all.
- [[Attention and executive function]] - reaction-time variability is often read as an attention measure; the model splits it into evidence quality, caution and non-decision components.
- [[Heterogeneity and presentations in ADHD]] - group-average drift differences say nothing about which people with ADHD show them, the heterogeneity question that note develops.
- [[Computational psychiatry]] - the field that uses fitted parameters such as drift rate as candidate markers, with the reliability problems that brings.
- [[Levels of analysis]] - drift rate is an algorithmic-level quantity; readings in terms of arousal or neuromodulators move to another level and need their own evidence.

**Cross-domain connection (curation).** Drift diffusion models connect the computational domain's evidence-accumulation formalism to the psychology domain's decision and attention constructs and to the ADHD domain's reaction-time literature, and the research-methods domain's reliability standards decide whether a parameter can serve as more than a group description. [[Decision-making]] [[Reinforcement learning accounts of ADHD]] [[Measurement validity and reliability]]

## Detailed lesson

- [[Lesson - Drift diffusion models]] - full lesson with a plain-language model, worked example, common confusions, source boundaries and practice questions.
- Module: [[Module 14 - Computational Neuroscience and Brain Theories|Computational Neuroscience and Brain Theories]]
