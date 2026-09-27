---
note_type: lesson
title: "White matter and tracts"
module: "m11"
module_title: "Neuroanatomy and Systems Neuroscience"
lesson_order: 13
domain: [neuroanatomy-systems, neurology]
condition: []
prerequisites: ["Spinal cord", "Neuroanatomical methods"]
sources: ["F01", "F02", "F110", "P28053326"]
source_count: 4
question_count: 3
word_count: 954
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m11]
---

# White matter and tracts

**Module.** M11 Neuroanatomy and Systems Neuroscience · **Topic.** [[White matter and tracts]]

## Why this matters

"Connectivity" is used for at least three different things in neuroscience writing - an anatomical axon
bundle, a statistical correlation between two regions' activity, and an effective influence estimated by a
model - and only the first of those is a tract. This lesson gives the anatomical version precisely, so later
claims using the word can be checked against what it means in context.

## The core model

Grey matter is dominated by cell bodies and local processing, white matter by long-range connections; white
matter itself is made of myelinated axons, oligodendrocytes and supporting glia, and the myelin sheath that
gives it its colour increases conduction speed along the axons it wraps. [[F01 OpenStax Nervous system structure and function#^f01-matter|Nervous System Structure]] [[F02 OpenStax Nervous tissue#^f02-myelin|Nervous Tissue]]

Tracts are grouped by origin, destination and crossing pattern into three families, each predicting a
different lesion geometry. Projection fibres connect cortex with subcortical and spinal targets, so their
damage produces long-tract deficits below the lesion. Commissural fibres cross the midline, so their damage
produces disconnection between hemispheres. Association fibres join cortical areas within one hemisphere, so
their damage produces network-level disconnection without primary sensory or motor loss. Knowing which family
is involved predicts where a lesion's effects will show up. [[F01 OpenStax Nervous system structure and function#^f01-matter|Nervous System Structure]]

Because tracts carry information between areas rather than processing it locally, damage to a tract can
produce a deficit that looks exactly like a lost function even when the responsible area is completely intact
- the logic behind disconnection syndromes, meaning a missing ability is not automatic evidence that the
associated area itself is damaged. [[F110 Neuroscience Online language#^f110-model|Language]] Myelination also raises conduction velocity, and because
different tracts myelinate on different schedules, tract integrity affects the timing relationships between
regions - white matter is a timing structure as much as a routing one.

Tract anatomy is established with high confidence by dissection and tracer studies in animals, where tracers
are transported along axons and reveal a real connection. Human estimates instead rely on diffusion imaging,
which measures the preferred direction of water movement and reconstructs plausible fibre continuations from
that indirect signal through tractography. This reconstruction resolves major bundles reasonably well but is
limited where tracts cross, is sensitive to parameter choices, does not establish which direction information
flows, and inherits the analytic-flexibility and low-power problems documented for neuroimaging generally.
Human connectional claims are therefore estimates carrying method-specific biases - stronger than a guess, but
weaker than the tracer literature that anchors them in animals. [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-flexibility|Neuroimaging reproducibility]] The reading rule: "connectivity" needs its method named
- an anatomical tract, a statistical correlation, or a modelled effective influence are three different
claims, and only the first is literally a bundle of axons.

## Worked example (hypothetical)

Suppose a hypothetical diffusion-imaging study reports "increased connectivity between region A and region B"
in one patient group, and a summary states this "proves more axons grew between A and B." Diffusion
tractography does not photograph axons; it estimates the preferred direction water moves in each small volume
of tissue and reconstructs a plausible fibre pathway from that indirect signal - sensitive to the parameters
chosen and unable to establish which direction any real signal travels. The accurate version is "an estimated
white-matter pathway measure differed between the groups on this analysis," not "more axons grew," which
asserts an anatomical fact a diffusion estimate alone cannot establish. Had the original study instead
measured a statistical correlation between the two regions' activity, the gap would be even larger, since a
correlation is not a tract claim at all. The first move in reading such a finding is identifying which of the
three meanings of "connectivity" is actually being reported.

## Common confusions

- "Connectivity always means an anatomical tract." It can mean a statistical correlation or a modelled
  effective influence instead; only an anatomical axon bundle is literally a tract.
- "Diffusion imaging shows the direction axons run." It estimates the orientation of water movement and
  reconstructs a plausible pathway; it does not establish the direction information flows.
- "A missing ability means the responsible brain area is damaged." A tract connecting to that area can be
  damaged instead, producing a disconnection syndrome with the same appearance.

## What the sources do not establish

Diffusion-derived tractography cannot distinguish afferent from efferent fibres, so any directionality claim
built on it needs its own caution, and these sources do not establish how large a given tractography finding
should shift a reader's confidence without knowing the acquisition and analysis choices behind it.

## Check yourself

1. Why does knowing which of the three tract families is involved predict where a lesion's effects will
   appear?
2. Why can a disconnection syndrome look exactly like a lost function even when the relevant cortical area is
   intact?
3. What does diffusion tractography actually measure, and what does it not establish?

## Answer notes

1. Because projection, commissural and association fibres have different destinations, so each family's
   damage produces a characteristically different pattern of effects.
2. Because the tract carries information to or from the area rather than the area itself failing, so cutting
   the connection removes the function's expression without damaging the processing region.
3. It measures the preferred direction of water movement in tissue and reconstructs a plausible fibre
   pathway from it; it does not establish which direction information travels along that pathway.

## Next steps

- Continue to [[Lesson - Sensory and motor systems]].
- See [[White matter and tracts]] for the full topic note and its link to [[Demyelination and multiple sclerosis]].
