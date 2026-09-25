---
note_type: topic
title: "Procedural memory and habit"
description: "Skill learning, habit formation and the shift from goal-directed to automatic control."
content_layer: reference
concept_kind: process
domain: [psychology, computational-brain-theories]
secondary_domain: []
condition: []
source_count: 7
reviewed: 2026-09-25
cssclasses: [research-topic]
tags: [research/topic, research/reference, research/domain/psychology, research/domain/computational]
---
# Procedural memory and habit

## Definition

Procedural memory supports skills and habits acquired through practice, typically expressed in performance rather than in verbal recall. Habit refers to behaviour controlled by antecedent cues after repetition.

## How it works

**Skill acquisition.** Performance improves with practice and becomes less dependent on attention, which is why dual-task interference decreases as a skill consolidates. [[F41 OpenStax Psychology 2e how memory functions#^f41-three|How Memory Functions]]

**Habit formation.** Repeated performance in a stable context shifts control toward cue-triggered behaviour that persists even when the outcome becomes less valuable. [[F39 OpenStax Psychology 2e operant conditioning#^f39-consequences|Operant Conditioning]]

**Computational description.** Habitual control resembles model-free learning, while flexible goal-directed control resembles model-based evaluation; tasks are designed to separate them. [[F123 Sutton and Barto Reinforcement Learning#^f123-framework|Reinforcement Learning]]

**Neural basis.** Striatal circuits are implicated in habit learning and in the transition from goal-directed to habitual control. [[F56 Neuroscience Online basal ganglia#^f56-pathways|Basal ganglia]]

## Evidence and status

Habit phenomena are well established in animals and humans; measuring habit strength in natural settings remains indirect and mostly relies on inference from behaviour.

> [!info]- In depth: learning skills and forming habits
> **Skill and habit are different objects.** Procedural memory covers the skills and routines that improve with practice and are expressed in performance rather than in recall, while habits are behaviours elicited by a context after repetition. Both are distinguished from episodic and semantic memory by what is stored and how it is expressed. [[F41 OpenStax Psychology 2e how memory functions#^f41-three|How Memory Functions]] [[F11 Noba Memory encoding storage retrieval#^f11-stages|Memory encoding storage retrieval]]
>
> **The behavioural mechanism.** Operant conditioning changes behaviour through consequences: reinforcement makes a behaviour more likely and punishment less likely, and the same consequence-based learning underlies habit formation. That is the level at which a habit claim can be tested in behaviour. [[F39 OpenStax Psychology 2e operant conditioning#^f39-consequences|Operant Conditioning]] [[F10 Noba Conditioning and learning#^f10-operant|Conditioning and Learning]]
>
> **The computational version.** Reinforcement learning formalises how an agent learns from reward signals to choose actions with value functions and policies, and it distinguishes cached values from model-based evaluation - the formal reason a well-practised behaviour can persist when its outcome changes. [[F123 Sutton and Barto Reinforcement Learning#^f123-framework|Reinforcement Learning]] [[F123 Sutton and Barto Reinforcement Learning#^f123-exploration|Reinforcement Learning]]
>
> **The circuit-level home.** Signals are processed through direct and indirect pathways whose relative activity shapes cortical output, which is why the basal ganglia are described as modulating rather than generating movement - the same circuitry implicated in habit learning and in movement disorders. [[F56 Neuroscience Online basal ganglia#^f56-pathways|Basal Ganglia]] [[F56 Neuroscience Online basal ganglia#^f56-disorders|Basal Ganglia]]
>
> **Habit has a clinical face.** Repeated exposure to drugs changes circuits involved in reward, stress and self-control, which is why use can become compulsive, and response varies with the drug, route, amount, genetics and environment. That is a habit-adjacent mechanism with clinical consequences rather than a claim about any individual. [[F87 NIDA Drugs and the brain#^f87-adaptation|Drugs and the Brain]] [[F87 NIDA Drugs and the brain#^f87-variation|Drugs and the Brain]]

> [!info]- Further depth: skill, habit and the circuitry behind them
> Procedural memory covers skills expressed in performance rather than recall, while habits are context-elicited behaviours after repetition; both are distinguished from episodic and semantic memory by what is stored. Operant consequences explain acquisition, the reinforcement-learning formalism explains why a practised behaviour persists when its outcome changes, and the basal ganglia's modulatory pathways are the circuit home for both habit learning and movement disorders. Repeated drug exposure changing reward, stress and self-control circuits is the clinical face of the same mechanism. [[F41 OpenStax Psychology 2e how memory functions#^f41-three|How Memory Functions]] [[F123 Sutton and Barto Reinforcement Learning#^f123-framework|Reinforcement Learning]] [[F56 Neuroscience Online basal ganglia#^f56-pathways|Basal Ganglia]] [[F87 NIDA Drugs and the brain#^f87-adaptation|Drugs and the Brain]]
>
> **The goal-directed to habit transition, stated carefully.** The behavioural signature of the transition is outcome-insensitivity: after enough repetition in a stable context, performance persists even when the outcome is devalued, which is the operational test distinguishing habit from goal-directed control. The distinction matters clinically because interventions aimed at goals and expectations act on the goal-directed system, while cue-triggered habits respond to context change and competing responses - so the kind of intervention must match the kind of control. [[F39 OpenStax Psychology 2e operant conditioning#^f39-consequences|Operant Conditioning]] [[F123 Sutton and Barto Reinforcement Learning#^f123-framework|Reinforcement Learning]]
>
> **Why practice quality matters as much as amount.** Skill consolidation distributes across time and sleep, and performance becomes less attention-dependent with practice, which is why dual-task interference falls. The consolidation story connects this article to the memory-processes literature: procedural learning obeys the same distributed-practice and consolidation logic that governs declarative retention, even though what is stored is expressed as performance rather than recall. [[F41 OpenStax Psychology 2e how memory functions#^f41-three|How Memory Functions]] [[Memory processes]]
>
> **Cross-domain connection (curation).** The basal ganglia circuits that house habit learning are the same circuits neurology describes in movement disorders, and the reinforcement-learning formalism computational neuroscience uses for model-free control is the quantitative version of the psychology-level construct - three domains, one system, at three levels of description. [[Movement disorders]] [[Reinforcement learning]]

## Connections

This note completes the memory systems with [[Episodic memory]] and is used in the clinical domain's accounts of substance-related behaviour. [[F87 NIDA Drugs and the brain#^f87-adaptation|Drugs and the Brain]]

## Uncertainties

- The degree to which everyday behaviour is habitual is disputed and difficult to measure outside the laboratory.
