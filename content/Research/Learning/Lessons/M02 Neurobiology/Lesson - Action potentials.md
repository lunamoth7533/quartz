---
note_type: lesson
title: "Action potentials"
module: "m02"
module_title: "Neurobiology"
lesson_order: 4
domain: [neurobiology]
condition: []
prerequisites: ["Ion gradients and membrane potential"]
sources: ["F03", "F04"]
source_count: 2
question_count: 3
word_count: 583
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m02]
---

# Action potentials

**Module.** M02 Neurobiology · **Topic.** [[Action potentials]]

## Why this matters

The action potential is the clearest example in this vault of a mechanism that is both simple and easy to
over-read. It explains why signals travel reliably over long distances and why the spike itself carries no
graded information — and it raises the question of where the information actually is.

## The core model

If depolarisation reaches threshold, voltage-gated ion channels open in sequence and produce the characteristic
rise and fall of the action potential.
[[F03 OpenStax The action potential#^f03-threshold|The Action Potential]]

The spike is all-or-none and propagates at full strength along the axon rather than fading with distance.
[[F03 OpenStax The action potential#^f03-signals|The Action Potential]]

Because the shape is stereotyped, graded information cannot ride in the amplitude of a single spike. It travels
in other properties: how many spikes occur in a window, their timing relative to other events, and which cells
receive them. Spike-timing relationships matter downstream — in the plasticity literature, a pre-before-post
order within tens of milliseconds produces different synaptic outcomes from the reverse.

Release is also not strictly all-or-none at the synapse end: many neurons release transmitter in graded ways
without producing a spike, which is why the topic note carries that warning.
[[F04 OpenStax Communication between neurons#^f04-caution-summation|AI synthesis: Communication Between Neurons]]

## Worked example (hypothetical)

This scenario is invented for practice. Two sensory neurons respond to a stronger stimulus. Neuron A fires one
spike; neuron B fires eight spikes in the same 500 ms.

Decode it without reading spike size. The difference is in rate and pattern, not amplitude. Downstream cells
integrate these trains, and their own firing depends on summation, inhibition and their recent history. If the
receiving circuit is a coincidence detector, timing relative to another input may matter more than total count.

The accurate statement about the stimulus: "in this preparation, stimulus intensity was associated with firing
rate in the recorded neurons" — a statement about the encoding found in that circuit, not a universal rule.

## Common confusions

- "All-or-none means the neuron is a digital device." The output is stereotyped; the input side and the
  downstream decoding are graded.
- "A stronger stimulus means a bigger spike." It means more or differently timed spikes along the same
  all-or-none mechanism.
- "Spikes are the only signalling." Graded release and local dendritic events also matter.

## What the sources do not establish

The textbook pages cover the classical mechanism and simplify channel kinetics; they do not cover dendritic
spikes, neuromodulation or population coding. This vault holds no source that measures neural coding in a human
condition, and no lesson here reads coding findings as clinical claims.

## Check yourself

1. What opens in sequence when threshold is crossed, and what does the sequence produce?
2. Why can information not be encoded in the amplitude of a single action potential?
3. Name two properties of a spike train that could carry information about a stimulus.

## Answer notes

1. Voltage-gated ion channels, opening in sequence to produce the characteristic rise and fall of the spike.
2. Because the spike is all-or-none and regenerated along the axon, so its amplitude is stereotyped.
3. Firing rate over a window and the timing of spikes relative to other events, among others.

## Next steps

- Continue to [[Lesson - Synapses and plasticity]] for what the spike does at the next cell.
- Keep the rate-versus-timing distinction for [[Learning and conditioning]] and [[Memory processes]].
