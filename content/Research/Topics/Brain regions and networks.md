---
note_type: topic
title: "Brain regions and networks"
domain: [neurobiology]
condition: []
source_count: 10
cssclasses: [research-topic]
tags: [research/topic, research/domain/neurobiology]
content_layer: reference
concept_kind: framework
description: "How regional descriptions of the brain relate to systems, loops and network accounts, and what each kind of claim can support."
secondary_domain: [computational-brain-theories]
reviewed: 2026-09-25
---

# Brain regions and networks

**Definition.** The brain is organized into regions with characteristic connections that work as hubs inside distributed networks. [[F05 OpenStax The central nervous system#^f05-networks|The Central Nervous System]]

## Supported claims

- Cortex, thalamus, hypothalamus, basal nuclei, brainstem, cerebellum and spinal cord each sit inside loops spanning several regions. [[F05 OpenStax The central nervous system#^f05-parts|The Central Nervous System]]
- Naming a structure identifies a hub of processing; functions are carried by the network the structure participates in. [[F05 OpenStax The central nervous system#^f05-networks|The Central Nervous System]]
- Prefrontal networks regulate attention, distraction screening, impulse inhibition and planning. [[P19621976 Arnsten 2009 Prefrontal catecholamines and ADHD#^p19621976-networks|Prefrontal catecholamine mechanisms]]

> [!info]- In depth: from structures to systems, without losing the levels
> **Two descriptive layers.** A regional description names structures and their connections; a network description names sets of regions whose activity covaries. Neither reduces to the other: anatomical connection is a necessary substrate for functional coupling but not a sufficient predictor of it, and functional coupling appears between regions with no direct anatomical link. [[F01 OpenStax Nervous system structure and function#^f01-matter|Nervous System Structure and Function]] [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-flexibility|Neuroimaging reproducibility]]
>
> **What networks are for.** Network descriptions compress high-dimensional activity into a small number of patterns, which is useful for describing large-scale organisation and for generating hypotheses about integration. The same compression is why they are easy to over-interpret: the patterns depend on the analysis choices, the threshold, the atlas and the sample. [[P22722855 Churchland 2012 Neural population dynamics#^p22722855-population|Neural population dynamics]] [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-practice|Neuroimaging reproducibility]]
>
> **Large-scale organisation in this library.** The standard divisions - sensory and motor systems, association cortex, limbic and subcortical loops, thalamocortical systems - are described in the domain's articles with their own evidence; the network level adds a vocabulary for talking about their coordination, not a replacement for them. [[Sensory and motor systems]] [[Association cortex and networks]] [[Thalamus and hypothalamus]]
>
> **Reading rule.** Three questions separate a usable network claim from a decorative one: which measure, which analysis choices, and which population. Without those, a network name is a label rather than a finding. [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-limit|Neuroimaging reproducibility]]

> [!info]- Reference: from structures to systems
> **Structure names are hubs, not functions.** The central nervous system is described region by region - cortex, thalamus and hypothalamus, basal nuclei, limbic structures, brain stem, cerebellum, spinal cord - but those regions work in loops, so naming a structure identifies a hub of processing rather than a single job. [[F05 OpenStax The central nervous system#^f05-parts|The Central Nervous System]] [[F05 OpenStax The central nervous system#^f05-networks|The Central Nervous System]]
>
> **Sectional anatomy is the working language.** Structures are learned as they appear in transverse and coronal sections, which is why localisation reasons from the plane in which a lesion appears. [[F54 Neuroscience Online nervous system overview#^f54-sections|Overview of the Nervous System]]
>
> **Systems cut across regions.** A sensory system is a chain: receptors, a primary afferent, a crossing second-order neuron, a thalamic relay and a cortical target. [[F52 OpenStax Central processing#^f52-pathway|Central Processing]] Motor control is similarly distributed across cortex, basal ganglia, cerebellum and descending pathways. [[F53 OpenStax Motor responses#^f53-descending|Motor Responses]]
>
> **Association cortex and networks.** Association areas link information from primary sensory and motor areas, and are grouped into anterior, posterior and limbic regions. [[F109 Neuroscience Online association and executive processing#^f109-areas|Association and executive processing]] Modern network descriptions add a statistical layer: regions covary in activity, and those covariance patterns are interpreted as networks rather than as single structures. [[P22722855 Churchland 2012 Neural population dynamics#^p22722855-population|Neural population dynamics]]
>
> **Interpretive caution.** Reading a structure-function claim from a lesion requires knowing which fibres pass through the region, and reading one from imaging requires knowing what the signal measures. [[F28 OpenStax Brain imaging Psychology 2e#^f28-caution-modality|AI appraisal: Brain imaging]] [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-flexibility|Neuroimaging reproducibility]]
>
> **A worked example: prefrontal networks and attention.** Prefrontal regions participate in networks that regulate attention, screen distraction, inhibit impulses and plan; the evidence for those functions comes from lesion, recording and imaging work converging on the prefrontal contributions rather than from one method. Reading the claim well means keeping its parts separate: the region named (prefrontal cortex), the network it participates in (with parietal and subcortical partners), the function measured (a specific task contrast), and the population studied. Collapsing them produces the shorthand 'the prefrontal cortex does attention', which survives neither a lesion study nor a network analysis. [[P19621976 Arnsten 2009 Prefrontal catecholamines and ADHD#^p19621976-networks|Prefrontal catecholamine mechanisms]]
>
> **Loops, not assembly lines.** The large structures - cortex, thalamus, basal nuclei, cerebellum - are connected in recurrent loops: cortex projects to the basal nuclei and cerebellum, both feed back through thalamic relays, and sensory pathways reach cortex only after a thalamic station. Recurrence is why activity in a 'downstream' structure can shape what 'upstream' structures do next, and why the directional language of flow diagrams is a convenience rather than a wiring fact. [[F05 OpenStax The central nervous system#^f05-parts|The Central Nervous System]] [[F52 OpenStax Central processing#^f52-pathway|Central Processing]] [[F53 OpenStax Motor responses#^f53-descending|Motor Responses]]
>
> **What a network measure adds and what it costs.** A covariance pattern across regions compresses thousands of pairwise relationships into a nameable organisation, which is the only practical way to describe large-scale coordination. The compression discards the anatomy underneath: two regions can covary because they are connected, because both track a third signal, or because the sample's tasks pushed them together, and the analysis choices - atlas, threshold, parcellation - move the boundaries of the named network. A network claim therefore needs its measure, its analysis choices and its population stated, and it earns more confidence when it predicts something held out rather than redescribing the data it was found in. [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-flexibility|Neuroimaging reproducibility]] [[P22722855 Churchland 2012 Neural population dynamics#^p22722855-population|Neural population dynamics]]
>
> **Cross-domain connection (curation).** Neurology's localisation practice and this article's network framing are two conventions for the same object: a lesion localises because tracts and hubs are anatomically regular, while a network account explains why damage to one node can spare some functions and disturb others far away. [[History and localisation]] [[Sensory and motor systems]]

## Limitation or common misconception

'The amygdala does X' style claims are shorthand that hides loops, feedback and individual variation.

## Related notes

- [[Neurons and glia]]
- [[Attention and executive function]]
- [[Structural versus functional measures]]

## Study question

Pick a function you care about and describe which network, not which single region, you would look at.

## Detailed lesson

- [[Lesson - Brain regions and networks]] - full lesson with a plain-language model, worked example, misconceptions, source boundaries and practice questions.
- Module: [[Module 02 - Neurobiology|Neurobiology]]
