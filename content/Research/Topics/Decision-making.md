---
note_type: topic
title: "Decision-making"
description: "Judgment under uncertainty: heuristics, biases, framing effects and their interpretation."
content_layer: reference
concept_kind: process
domain: [psychology, computational-brain-theories]
secondary_domain: []
condition: []
source_count: 6
reviewed: 2026-09-25
cssclasses: [research-topic]
tags: [research/topic, research/reference, research/domain/psychology, research/domain/computational]
---
# Decision-making

## Definition

Decision-making research studies how people choose between options, particularly under uncertainty. It documents both systematic departures from normative models and the conditions under which those departures appear.

## How it works

**Heuristics.** People use simplifying strategies such as availability and representativeness, which are efficient in many environments and produce characteristic errors in others. [[F97 OpenStax Psychology 2e what is cognition#^f97-concepts|What Is Cognition?]]

**Framing.** Choices change with how options are described, which is difficult to reconcile with purely value-maximising accounts. [[F46 OpenStax Psychology 2e social psychology#^f46-situational|What Is Social Psychology?]]

**Computation.** Reinforcement-learning models describe choice as value comparison updated by prediction error, providing a quantitative alternative to descriptive bias lists. [[F123 Sutton and Barto Reinforcement Learning#^f123-framework|Reinforcement Learning]]

**Interpretation caution.** Many classic findings were established in small samples; the broader replication record means effect sizes should be read with the same caution as elsewhere in psychology. [[P26315443 Open Science Collaboration 2015 Reproducibility#^p26315443-result|Estimating the reproducibility of psychological science]]

## Evidence and status

Framing and anchoring effects replicate in large samples, while some classic priming and depletion findings have fared less well, so the field distinguishes stable effects from fragile ones. [[P33954258 Munafo 2017 Reproducible science#^p33954258-metadata|A manifesto for reproducible science]]

> [!info]- In depth: choosing under uncertainty, and the mechanisms that shape the choice
> **The formal frame.** Reinforcement learning formalises how an agent learns from reward signals to choose actions, with value functions and policies as central objects and exploration-exploitation as an explicit trade-off. It provides the vocabulary - expected value, uncertainty, policy - that decision research in this library uses. [[F123 Sutton and Barto Reinforcement Learning#^f123-framework|Reinforcement Learning]] [[F123 Sutton and Barto Reinforcement Learning#^f123-exploration|Reinforcement Learning]]
>
> **Cognition enters through concepts and framing.** Cognition is described through concepts and categories, and social psychology examines how situations and interpretations shape behaviour rather than treating choice as a fixed property of the person - two reminders that a decision is constructed from a representation of the situation as well as from its payoffs. [[F97 OpenStax Psychology 2e what is cognition#^f97-concepts|What Is Cognition?]] [[F46 OpenStax Psychology 2e social psychology#^f46-situational|Social Psychology]] [[F46 OpenStax Psychology 2e social psychology#^f46-situational|Social Psychology]]
>
> **Evidence about decisions is subject to the general replication problem.** A large multi-team replication project found replication effect sizes averaging about half the original magnitudes, and the reproducible-science literature attributes such patterns to incentives, publication practices and analysis flexibility rather than to individual misconduct - a caution that applies with force to laboratory decision paradigms. [[P26315443 Open Science Collaboration 2015 Reproducibility#^p26315443-result|Reproducibility in psychology]] [[P33954258 Munafo 2017 Reproducible science#^p33954258-metadata|A manifesto for reproducible science]]
>
> **Correlation is not mechanism.** Observational designs describe what co-occurs, while experimental designs manipulate a variable and can support causal inference when assignment and control are sound; the same logic applies to choice behaviour, where a correlate of a decision is not a cause of it. [[F09 Noba Research designs#^f09-designs|Research Designs]] [[F09 Noba Research designs#^f09-correlation|Research Designs]]
>
> **Reading rule.** Name the task, the model, the parameter and the population before trusting a decision-science claim; and check whether the finding has been replicated with a design that could have failed. [[P26315443 Open Science Collaboration 2015 Reproducibility#^p26315443-limit|Reproducibility in psychology]]

> [!info]- Further depth: value, uncertainty and the framing of the situation
> Reinforcement learning supplies the vocabulary of expected value, uncertainty and policy, and the exploration-exploitation trade-off is an explicit part of the framework rather than an afterthought. Concepts and categories shape how options are represented, and social psychology's emphasis on situations and interpretations warns that a decision is constructed from a representation as well as from payoffs. Laboratory decision paradigms are subject to the general replication problem: effect sizes in the multi-team psychology replication averaged about half the originals. [[F123 Sutton and Barto Reinforcement Learning#^f123-framework|Reinforcement Learning]] [[F97 OpenStax Psychology 2e what is cognition#^f97-concepts|What Is Cognition?]] [[F46 OpenStax Psychology 2e social psychology#^f46-situational|Social Psychology]] [[P26315443 Open Science Collaboration 2015 Reproducibility#^p26315443-result|Reproducibility in psychology]]
>
> **Heuristics are double-edged by design.** Availability and representativeness work because environmental structure usually makes them adequate; the documented biases appear where the environment's statistics diverge from the heuristic's assumptions. That framing - ecological rationality - is why the literature moved past "humans are irrational": the same strategy that produces the availability error also produces fast, mostly correct judgements under time pressure, and neither finding cancels the other. [[F97 OpenStax Psychology 2e what is cognition]]
>
> **What framing effects rule out.** If choices reverse when the same outcomes are described as gains or losses, preferences cannot be read off outcomes alone - they depend on the reference point the description sets. That is the empirical core of prospect-style accounts and the reason framing is more than a communication nuisance: it is evidence about how value is constructed at decision time. [[F46 OpenStax Psychology 2e social psychology#^f46-situational|What Is Social Psychology?]]
>
> **Cross-domain connection (curation).** Computational neuroscience's reinforcement-learning and Bayesian models are the formal descendants of this literature, specifying the computations the heuristics approximate; the interval between a bias demonstrated in a questionnaire and a model fitted to choices is exactly the level-of-analysis gap this library keeps flagging. [[Reinforcement learning]] [[Model comparison and identifiability]]

## Connections

This note connects to [[Motivation and reward]] and to the clinical material on impulsive choice in the ADHD domain.

## Uncertainties

- Which departures from normative models count as biases versus adaptive strategies is partly a normative question.
