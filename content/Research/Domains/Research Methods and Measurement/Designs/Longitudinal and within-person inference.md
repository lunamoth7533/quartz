---
note_type: topic
title: "Longitudinal and within-person inference"
description: "Following people over time, distinguishing between-person from within-person effects, and the specific problems of repeated measurement."
content_layer: reference
concept_kind: method
domain: [research-methods]
secondary_domain: []
condition: []
source_count: 5
reviewed: 2026-09-25
up: "[[Research Methods and Measurement - Designs]]"
cssclasses: [research-topic]
tags: [research/topic, research/reference, research/domain/methods]
---
# Longitudinal and within-person inference

## Definition

Longitudinal research measures the same people repeatedly to describe change over time. Within-person inference concerns how a person varies from their own baseline; between-person inference concerns how people differ from each other. The two can have different signs.

## How it works

**Descriptive patterns.** Longitudinal designs estimate incidence, trajectories and ordering of events, which cross-sectional data cannot provide. [[F09 Noba Research designs#^f09-designs|Research designs]]

**The problem with global retrospective reports.** Global self-reports are limited by recall bias and cannot capture how behaviour changes over time and context: a summary asked at the end of a week is a reconstruction, not a sample of the week. Ecological momentary assessment samples current states repeatedly in real time and in natural environments, using diaries, phones or sensors; it reduces recall bias and captures context dependence, which makes it a different kind of measurement rather than merely a more frequent one. [[P18509902 Shiffman 2008 Ecological momentary assessment#^p18509902-rationale|Ecological momentary assessment]] [[P18509902 Shiffman 2008 Ecological momentary assessment#^p18509902-method|Ecological momentary assessment]]

**Costs and design choices.** Momentary and repeated sampling has practical and methodological costs, including participant burden, adherence problems and the difference between sampling at intervals and sampling events. Interval sampling estimates the distribution of states in time; event sampling characterises what surrounds an occurrence. Which one a study needs depends on the question, and pooling them changes what the resulting average means. [[P18509902 Shiffman 2008 Ecological momentary assessment#^p18509902-tradeoffs|Ecological momentary assessment]] [[P18509902 Shiffman 2008 Ecological momentary assessment#^p18509902-limit|Ecological momentary assessment]]

**Between-person and within-person effects are different estimands.** A correlation computed across people (people higher on X tend to have more Y) and a correlation computed across occasions within people (when a person's X rises, their Y rises) answer different questions: an association observed between people does not automatically hold within a person over time, and the two can even have opposite signs - something that is associated with a worse outcome across people may be followed by improvement within a person who is recovering. Designs and analyses must therefore state which level the claim belongs to. [[P18509902 Shiffman 2008 Ecological momentary assessment#^p18509902-tradeoffs|Ecological momentary assessment]] Longitudinal designs are the only ones that can separate these levels, and the analysis has to be specified to do so: designs that measure people repeatedly and model within-person deviations - panel models, experience-sampling designs - are what make within-person claims testable, and they routinely revise conclusions drawn cross-sectionally. [[P18509902 Shiffman 2008 Ecological momentary assessment#^p18509902-rationale|Ecological momentary assessment]] [[Longitudinal and within-person inference]]

**Time ordering is what converts prediction into process.** Cross-lag and intensive-longitudinal designs estimate whether earlier values of X predict later change in Y above Y's own history - the minimum design requirement for a directional process claim, still short of causal proof without additional assumptions or manipulation. Most retrospective claims about how conditions develop fail this requirement, which is why the developmental and course literatures lean on prospective cohorts. [[P23488505 Hatzenbuehler 2013 Stigma as fundamental cause#^p23488505-argument|Stigma as a fundamental cause of health inequalities]] [[Evidence types and causal inference]]

**Attrition.** People who leave longitudinal studies differ systematically from those who stay, which biases estimates unless attrition is modelled. [[P17941715 Vandenbroucke 2007 STROBE#^p17941715-limits|STROBE]]

**Measurement must hold across time as well as groups.** Comparing a person with themselves across months assumes invariance over the interval, and partial invariance changes what a change score means. [[P27942093 Putnick 2016 Measurement invariance#^p27942093-levels|Measurement invariance]] Reporting guidelines likewise govern transparency rather than validity: STROBE improves the reporting of observational studies, and its own commentary states that a fully reported study can still be biased. [[P17941715 Vandenbroucke 2007 STROBE#^p17941715-limits|STROBE]]

**Reading rule.** Ask whether the study compared people or occasions, whether measurement was concurrent or retrospective, and whether the instrument was invariant over the interval studied. A longitudinal design with none of those questions addressed is not automatically an improvement on a cross-sectional one. [[F09 Noba Research designs#^f09-designs|Research Designs]]

## Evidence and status

Longitudinal designs supply most of what is known about course and outcome; their weakness is confounding over time, which grows with follow-up length.

## Connections

This note supports the course and outcome articles across the condition domains and connects to [[Allostasis and chronic stress]], where chronicity is central.

**Cross-domain connection (curation).** The condition domains' course and prognosis articles - bipolar longitudinal course, ADHD lifespan persistence - are applied within-person questions, and this note is the methods article that says what evidence those questions require. [[Bipolar I episodes and course]] [[ADHD across the lifespan]]

## Uncertainties

- Measurement instruments themselves may change meaning over long follow-up, which is an invariance problem in the temporal dimension. [[P27942093 Putnick 2016 Measurement invariance#^p27942093-levels|Measurement invariance]]
