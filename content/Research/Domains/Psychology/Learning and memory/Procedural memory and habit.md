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
up: "[[Psychology - Learning and memory]]"
cssclasses: [research-topic]
tags: [research/topic, research/reference, research/domain/psychology, research/domain/computational]
---
# Procedural memory and habit

## Definition

Procedural memory supports skills and habits acquired through practice, typically expressed in performance rather than in verbal recall. Habit refers to behaviour controlled by antecedent cues after repetition.

## How it works

**Skill and habit are different objects.** Skills and habits are both distinguished from episodic and semantic memory by what is stored and how it is expressed, but they are not the same thing: a skill is a routine that improves with practice and shows in performance, a habit is a behaviour elicited by a context after repetition. [[F41 OpenStax Psychology 2e how memory functions#^f41-three|How Memory Functions]] [[F11 Noba Memory encoding storage retrieval#^f11-stages|Memory encoding storage retrieval]]

**Skill acquisition and consolidation.** Performance improves with practice and becomes less dependent on attention, which is why dual-task interference decreases as a skill consolidates. Skill consolidation distributes across time and sleep, so practice quality matters as much as amount: procedural learning obeys the same distributed-practice and consolidation logic that governs declarative retention, even though what is stored is expressed as performance rather than recall. [[F41 OpenStax Psychology 2e how memory functions#^f41-three|How Memory Functions]] [[Memory processes]]

**The behavioural mechanism.** Operant conditioning changes behaviour through consequences: reinforcement makes a behaviour more likely and punishment less likely, and the same consequence-based learning underlies habit formation. That is the level at which a habit claim can be tested in behaviour. [[F39 OpenStax Psychology 2e operant conditioning#^f39-consequences|Operant Conditioning]] [[F10 Noba Conditioning and learning#^f10-operant|Conditioning and Learning]]

**The goal-directed to habit transition.** Repeated performance in a stable context shifts control toward cue-triggered behaviour. The behavioural signature of the transition is outcome-insensitivity: after enough repetition, performance persists even when the outcome becomes less valuable or is devalued, which is the operational test distinguishing habit from goal-directed control. The distinction matters clinically because interventions aimed at goals and expectations act on the goal-directed system, while cue-triggered habits respond to context change and competing responses - so the kind of intervention must match the kind of control. [[F39 OpenStax Psychology 2e operant conditioning#^f39-consequences|Operant Conditioning]] [[F123 Sutton and Barto Reinforcement Learning#^f123-framework|Reinforcement Learning]]

**The computational version.** Reinforcement learning formalises how an agent learns from reward signals to choose actions with value functions and policies. Habitual control resembles model-free learning from cached values, while flexible goal-directed control resembles model-based evaluation - the formal reason a well-practised behaviour can persist when its outcome changes - and tasks are designed to separate them. [[F123 Sutton and Barto Reinforcement Learning#^f123-framework|Reinforcement Learning]] [[F123 Sutton and Barto Reinforcement Learning#^f123-exploration|Reinforcement Learning]]

**The circuit-level home.** Striatal circuits are implicated in habit learning and in the transition from goal-directed to habitual control. Signals are processed through direct and indirect pathways whose relative activity shapes cortical output, which is why the basal ganglia are described as modulating rather than generating movement - the same circuitry implicated in habit learning and in movement disorders. [[F56 Neuroscience Online basal ganglia#^f56-pathways|Basal Ganglia]] [[F56 Neuroscience Online basal ganglia#^f56-disorders|Basal Ganglia]]

**Habit has a clinical face.** Repeated exposure to drugs changes circuits involved in reward, stress and self-control, which is why use can become compulsive, and response varies with the drug, route, amount, genetics and environment. That is a habit-adjacent mechanism with clinical consequences rather than a claim about any individual. [[F87 NIDA Drugs and the brain#^f87-adaptation|Drugs and the Brain]] [[F87 NIDA Drugs and the brain#^f87-variation|Drugs and the Brain]]

## Evidence and status

Habit phenomena are well established in animals and humans; measuring habit strength in natural settings remains indirect and mostly relies on inference from behaviour.

## Connections

This note completes the memory systems with [[Episodic memory]] and is used in the clinical domain's accounts of substance-related behaviour. [[F87 NIDA Drugs and the brain#^f87-adaptation|Drugs and the Brain]]

**Cross-domain connection (curation).** The basal ganglia circuits that house habit learning are the same circuits neurology describes in movement disorders, and the reinforcement-learning formalism computational neuroscience uses for model-free control is the quantitative version of the psychology-level construct - three domains, one system, at three levels of description. [[Movement disorders]] [[Reinforcement learning]]

## Uncertainties

- The degree to which everyday behaviour is habitual is disputed and difficult to measure outside the laboratory.
