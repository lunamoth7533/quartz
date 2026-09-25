---
note_type: topic
title: "Network and connectome models"
description: "Describing the brain as a network: nodes, edges, topology and dynamics, and the assumptions these descriptions carry."
content_layer: reference
concept_kind: theory
domain: [computational-brain-theories, neuroanatomy-systems]
secondary_domain: []
condition: []
source_count: 7
reviewed: 2026-09-25
up: "[[Computational Neuroscience and Brain Theories - Networks and theories]]"
cssclasses: [research-topic]
tags: [research/topic, research/reference, research/domain/computational, research/domain/neuroanatomy]
---
# Network and connectome models

## Definition

Network models represent the brain as nodes (regions or neurons) connected by edges (structural or functional connections). The connectome is the complete map of those connections.

## How it works

**The modelling choice.** Network and connectome models describe the brain as nodes connected by edges, where nodes can be regions, cells or recording sites and edges can be anatomical or functional. Grey matter is associated with cell bodies and local processing while white matter carries long-range connections, so the anatomical substrate a structural connectome estimates is the white-matter tractography the tract literature describes. [[F01 OpenStax Nervous system structure and function#^f01-matter|Nervous System Structure and Function]] [[F28 OpenStax Brain imaging Psychology 2e#^f28-fmri|Brain imaging]]

**Structural versus functional edges, each an estimate.** Structural edges come from anatomy or diffusion imaging; functional edges come from statistical dependence between activity time series. The two are related but not identical, and edges are estimates twice over: a structural edge depends on tractography's crossing biases and parameter choices; a functional edge depends on how dependence is measured, how long the recording is, and what the participant was doing. Because both carry method-specific artefacts, agreement between structural and functional networks is informative precisely because it is not guaranteed - and disagreement does not identify an error, it identifies a difference between what is wired and what is coordinated. [[F28 OpenStax Brain imaging Psychology 2e#^f28-fmri|Brain imaging]] [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-flexibility|Neuroimaging reproducibility]]

**Population dynamics supply the functional version.** Cortical activity is low-dimensional at the population level, which motivates descriptions of coordinated states rather than independent regions: analysing motor cortex population activity as a dynamical system showed that preparatory and movement-related activity formed low-dimensional trajectories that single-neuron rates did not capture well. The paper's own claim is about the descriptive power of population-level models rather than about a specific circuit mechanism, which is the same caution network models need: a good low-dimensional description is not a mechanism. [[P22722855 Churchland 2012 Neural population dynamics#^p22722855-population|Neural population dynamics]] [[P22722855 Churchland 2012 Neural population dynamics#^p22722855-claim|Neural population dynamics]]

**Association areas as organised networks.** Network descriptions are most often applied to association regions, whose coordinated activity is summarised as named networks. Association areas are grouped into anterior, posterior and limbic regions, each linking information from primary and unimodal sensory or motor areas, which is the anatomical organisation that functional network descriptions attempt to capture. [[F109 Neuroscience Online association and executive processing#^f109-areas|Association and executive processing]]

**Named networks are conventions with evidence behind them.** Labels like default-mode or frontoparietal summarise recurring co-activation patterns across many studies; they are useful coordinate systems for reporting and hypothesis-making, not anatomical objects with sharp boundaries. [[P22722855 Churchland 2012 Neural population dynamics#^p22722855-population|Neural population dynamics]] [[Brain regions and networks]]

**Findings are model-dependent.** Node definition, edge definition and thresholding choices all affect results, so findings phrased as network differences inherit that dependence, which is why reproducible network science reports robustness to those choices. [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-flexibility|Neuroimaging reproducibility]]

**Degeneracy limits structure-function mapping.** Circuits with different underlying parameters can produce similar outputs, which the neuromodulation literature treats as a fundamental problem for relating structure to function - so two brains with different connectivity can produce the same behaviour, and the reverse, and a connectome constrains function without determining it. [[P23040802 Marder 2012 Neuromodulation#^p23040802-degeneracy|Neuromodulation]] [[P23040802 Marder 2012 Neuromodulation#^p23040802-state|Neuromodulation]]

## Evidence and status

Structural connectivity from animal tracing is direct; human functional network findings are reproducible at the group level but sensitive to analysis choices and modest in individual-level reliability. [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-power|Neuroimaging reproducibility]] Connectome estimates inherit analytic flexibility and modest power, with data and code sharing, preregistration, larger samples and multiverse analyses proposed as responses; a group connectome is a sample description rather than an individual fingerprint, and it does not identify an individual. [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-flexibility|Neuroimaging reproducibility]] [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-practice|Neuroimaging reproducibility]] [[P28461699 Hibar 2018 ENIGMA cortical abnormalities in bipolar disorder#^p28461699-caution-groups|AI appraisal: ENIGMA cortical abnormalities in bipolar disorder]]

## Connections

This note applies the systems material from [[Association cortex and networks]] and provides the framework used in [[Network and developmental formulations]] in the clinical domain.

**Cross-domain connection (curation).** The neurology domain's lesion-based localisation and this network framing are complementary lenses on one system - lesions test necessity, network measures describe coordination - and clinical articles that mix them should say which lens each claim uses. [[History and localisation]] [[Interpreting group brain differences]]

## Uncertainties

- Whether network-level descriptions add explanatory power beyond regional ones is contested.
