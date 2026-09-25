---
note_type: map
title: "Neurobiology Map"
map_kind: foundation
condition: []
domain: [neurobiology]
cssclasses: [research-map]
tags: [research/map]
content_layer: reference
description: "Domain hub: cellular signalling, synaptic transmission, plasticity and the developmental programme that builds and prunes circuits."
reviewed: 2026-09-25
concept_kind: framework
---

# Neurobiology Map

Start here if you want the physical substrate: cells, membranes, spikes, connections and the genetic material that builds them.

**Contents.** [[#Reference overview|Overview]], [[#Reference spine|Reference spine]], [[#Concept register|Concept register]], [[#Where this domain connects|Cross-domain links]], [[#Evidence boundaries|Evidence boundaries]], [[#Learning route|Learning route]], [[#Core sequence|Core sequence]]

## Reference overview

Neurobiology is the layer every other domain rests on: cells that signal, membranes that make
signalling possible, connections that change with use, and a developmental programme that builds
and prunes them. The domain's organising idea is that each level constrains the one above it -
channel behaviour sets what a spike can be, spike timing sets what a synapse can learn, and
synaptic rules set what a circuit can store - while none of those levels determines the one above
it. That asymmetry is why mechanism claims and behavioural claims have to be argued separately.

**Signalling rests on gradients that are continuously paid for.** Pumps and leak channels hold a
negative resting potential; graded potentials decay with distance and summate at the trigger zone;
past threshold the spike regenerates at full amplitude. Because the gradients leak, restoring them
consumes energy continuously, which links this domain directly to perfusion and metabolism: an
interrupted supply produces deficits in seconds to minutes. [[Ion gradients and membrane potential]]
[[Action potentials]] [[Neuronal cell biology and energetics]]

**Transmission converts electricity into chemistry and back.** Calcium entry triggers quantal
release, receptor identity decides sign and speed, and clearance resets the synapse. The same
machinery supports fast point-to-point signalling and slow modulation, which is why transmitter
identity alone never determines an effect. [[The synaptic vesicle cycle]] [[Chemical and electrical synapses]] [[Receptor families and second messengers]]

**Change happens on several timescales.** Vesicle and calcium dynamics produce facilitation and
depression within a second; second-messenger cascades and, for the late phase, gene expression
produce durable changes; structural reorganisation follows over longer periods. The properties
that make the durable form interesting - input specificity, associativity, timing dependence -
come from reduced preparations, and the caution attached to them is that they model learning
rather than measuring it. [[Short-term synaptic plasticity]] [[Long-term potentiation and depression]] [[Synapses and plasticity]]

**Development supplies the scaffold.** Proliferation, migration, differentiation, synaptogenesis
and experience-dependent pruning run in overlapping waves rather than in sequence, with trophic
competition deciding which connections survive and inhibitory maturation opening sensitive
periods. Normal development therefore involves deletion as much as growth. [[Circuit development and homeostasis]] [[Neurotrophic support and cell death]] [[Sensitive periods]]

**Glia are participants.** Astrocytes shape the extracellular environment and barrier properties,
oligodendrocytes myelinate central axons, and microglia survey the parenchyma continuously. The
older picture of passive support cells has been replaced by one in which glial populations create
the conditions for signalling and, in several cases, respond to it. [[Glial cell types]] [[Myelin and saltatory conduction]] [[Neuroimmune interactions and microglia]]

**Evidence boundaries for this domain.** Cellular mechanisms are established mainly in reduced
preparations and animals, so human claims sit one level above the evidence; the dominance of LTP
and LTD as an account of learning-related change is a modelling choice as much as a finding; and
excitatory/inhibitory language is only meaningful once a level (synapse, cell, network) is named.
[[P21779718 Bliss 2011 Long-term potentiation and depression#^p21779718-caution-inference|AI synthesis: Long-term potentiation and depression]]
[[P23040802 Marder 2012 Neuromodulation#^p23040802-degeneracy|Neuromodulation]]

**Where to start.** [[Neurons and glia]] for the cell inventory, [[Action potentials]] for signalling, [[Synapses and plasticity]] for change, and [[Circuit development and homeostasis]] for how the system is built. The full article list for this domain is in the concept register below; [[Reference Index]] carries A-Z, concept-kind, domain, condition and evidence routes over the whole reference layer.

## Reference spine

Neurobiology is the layer beneath every other domain here: cells that signal, membranes that make signalling possible, connections that can change, and a developmental programme that builds and prunes them.

The starting point is the division of labour between neurons and glia. Neurons have distinct compartments for input, integration and output; dendrites collect input and often carry spines whose cytoskeletal elements respond to plasticity-related signals. [[F102 Neuroscience Online cell types#^f102-dendrites|Organization of Cell Types]] [[F102 Neuroscience Online cell types#^f102-spines|Organization of Cell Types]] Glial populations each do a different job: astrocytes influence the extracellular environment and barrier properties, oligodendrocytes myelinate central axons, microglia survey and respond to damage. [[F02 OpenStax Nervous tissue#^f02-glia|Nervous Tissue]] [[F105 Neuroscience Online blood-brain barrier#^f105-support|Blood Brain Barrier]] [[P15831717 Nimmerjahn 2005 Microglial surveillance#^p15831717-surveillance|Microglial surveillance]]

Signalling begins with gradients. Pumps and leak channels set a negative resting potential; graded potentials vary with the stimulus and decay with distance, and their sum at the trigger zone decides whether the neuron fires. [[F03 OpenStax The action potential#^f03-gradient|The Action Potential]] [[F51 OpenStax Function of nervous tissue#^f51-graded|Function of Nervous Tissue]] [[F51 OpenStax Function of nervous tissue#^f51-summation|Function of Nervous Tissue]] Above threshold the action potential propagates at full amplitude, so information is carried by which cells fire and in what pattern. [[F03 OpenStax The action potential#^f03-signals|The Action Potential]] [[P22722855 Churchland 2012 Neural population dynamics#^p22722855-population|Neural population dynamics]]

At synapses the electrical signal becomes chemical. Calcium entry triggers quantal release, and receptor identity decides whether the effect is fast and local or slow and modulatory. [[F115 Neuroscience Online transmitter release#^f115-calcium|Mechanisms of Neurotransmitter Release]] [[F04 OpenStax Communication between neurons#^f04-receptor|Communication Between Neurons]] [[F04 OpenStax Communication between neurons#^f04-metabotropic|Communication Between Neurons]] Plasticity spans several timescales whose requirements differ: short-term facilitation and depression follow from vesicle and calcium dynamics within a second, while the durable forms studied in slices require second-messenger cascades and, for the late phase specifically, gene expression and protein synthesis. Assigning a protein-synthesis requirement to lasting change in general overstates what the cited review establishes. [[F100 Neuroscience Online synaptic plasticity#^f100-facilitation|Synaptic Plasticity]] [[P21779718 Bliss 2011 Long-term potentiation and depression#^p21779718-mechanism|Long-term potentiation and depression]]

Development supplies the scaffold plasticity later modifies: proliferation, migration, differentiation, synaptogenesis and experience-dependent pruning, with myelin added over a longer timeline. Removal is part of the programme, with competition and trophic support deciding which inputs survive. [[P19794405 Tau 2010 Normal development of brain circuits#^p19794405-sequence|Normal development of brain circuits]] [[P21042938 Stiles 2010 Basics of brain development#^p21042938-processes|The basics of brain development]] [[F101 Neuroscience Online synapse formation and elimination#^f101-competition|Synapse Formation, Survival, and Elimination]]

## Concept register

- **Structures:** [[Neurons and glia]], [[Glial cell types]], [[Nervous tissue and myelin]], [[Membrane transport and ion channels]], [[Myelin and saltatory conduction]], [[Chemical and electrical synapses]]
- **Processes and mechanisms:** [[Ion gradients and membrane potential]], [[Action potentials]], [[The synaptic vesicle cycle]], [[Synapses and plasticity]], [[Short-term synaptic plasticity]], [[Long-term potentiation and depression]], [[Dendritic integration]], [[Neuronal cell biology and energetics]], [[Neurotrophic support and cell death]], [[Circuit development and homeostasis]]
- **Frameworks and contested ideas:** [[Excitation and inhibition balance]], [[Levels of analysis]]

## Where this domain connects

- Neurochemistry supplies the transmitters and receptors used here: [[Transmitter synthesis, release and clearance]], [[Receptor families and second messengers]].
- Neuroanatomy places these mechanisms in circuits: [[Cortical layers and columns]], [[Spinal cord]].
- Genetics and neurodevelopment explains how the scaffold is built: [[Neurogenesis and migration]], [[Synaptic pruning and myelination]].
- Computational neuroscience formalises what these mechanisms compute: [[Dynamical systems models]], [[Neural coding and population codes]].

## Evidence boundaries

Cellular mechanisms are established mainly in reduced preparations and animals, so human claims sit a level above the evidence. LTP and LTD are the dominant cellular model of learning-related change rather than a measurement of learning, and human 'LTP-like' effects are not LTP. [[P21779718 Bliss 2011 Long-term potentiation and depression#^p21779718-translation|Long-term potentiation and depression]] [[P21779718 Bliss 2011 Long-term potentiation and depression#^p21779718-caution-inference|AI appraisal: Long-term potentiation and depression]]

## Learning route

The sections below keep the earlier learning-oriented framing of this hub - course sequence, study questions and the learning-layer pointer. They are retained for continuity and cross-reference; where they state a mechanism, the reference overview above and the linked articles are the current account.

## Core sequence

### Cells and tissue

Topics: [[Neurons and glia]], [[Nervous tissue and myelin]]

Open question: Which structural feature is most often over-interpreted in psychiatry reporting?

### Electrical signalling

Topics: [[Ion gradients and membrane potential]], [[Action potentials]]

Open question: How does the all-or-none spike carry graded information?

### Connections

Topics: [[Synapses and plasticity]], [[Brain regions and networks]]

Open question: Where does the 'one region, one function' story break first?

### Genetic material

Topics: [[Genes, environment and polygenic risk]], [[Association versus individual prediction]]

Open question: What does a polygenic score actually estimate?

## Evidence gaps

- Cellular mechanisms are largely established in animals and inferred in humans.
- Network-level claims about psychiatric conditions usually rest on group averages.

## Study question

Which claim in this map would you most want to see demonstrated in living humans, and how?

## Learning layer

- [[Module 02 - Neurobiology]] - module guide, lesson sequence, prerequisites and assessment.
- [[Learning Map - Neurobiology.canvas]] - populated canvas with lessons, sources, uncertainty and open questions.