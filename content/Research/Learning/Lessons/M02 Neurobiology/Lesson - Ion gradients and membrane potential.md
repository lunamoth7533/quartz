---
note_type: lesson
title: "Ion gradients and membrane potential"
module: "m02"
module_title: "Neurobiology"
lesson_order: 3
domain: [neurobiology]
condition: []
prerequisites: ["Neurons and glia"]
sources: ["F03", "F04"]
source_count: 2
question_count: 3
word_count: 599
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m02]
---

# Ion gradients and membrane potential

**Module.** M02 Neurobiology · **Topic.** [[Ion gradients and membrane potential]]

## Why this matters

The membrane potential is the state variable of a neuron. Without it, action potentials, receptor effects and
excitation-inhibition balance are vocabulary without a mechanism. This lesson supplies the mechanism in one
page.

## The core model

Neurons maintain different ion concentrations inside and outside the membrane, producing a resting potential
that is negative inside relative to outside.
[[F03 OpenStax The action potential#^f03-gradient|The Action Potential]]

Ions cross the membrane through channels, and the resulting voltage depends on which channels are open. Because
gradients are maintained by pumps and transporters, the neuron is not at equilibrium; it spends energy to stay
ready to signal.

Local voltage changes — graded potentials — spread passively and decay with distance. They summate at the
initial segment of the axon, where voltage-gated sodium channels are dense, and that summation is what decides
whether a spike begins.
[[F04 OpenStax Communication between neurons#^f04-initial-segment|Communication Between Neurons]]

Two things follow that matter later. First, the same input can matter or not depending on what else is active,
because summation is additive in time and space. Second, most signalling in the nervous system is graded and
local; the all-or-none spike is the output stage, not the whole conversation.

## Worked example (hypothetical)

This scenario is invented for practice. A small depolarising input arrives at a synapse on a neuron's dendrite.
In one situation the neuron fires; in another it does not.

Reason through the summation. In the first situation, three neighbouring synapses are active within a few
milliseconds and the dendrite's local voltage crosses threshold at the initial segment. In the second, the same
synapse is active alone, and the depolarisation decays before reaching the integration point. The input was
identical; the context was not.

The general lesson: excitability is a property of the cell's current state — recent activity, inhibitory
conductances, channel phosphorylation, and how far the input sits from the spike-initiation zone. "This synapse
excites the cell" is shorthand for a conditional statement.

## Common confusions

- "The resting potential is fixed." It shifts with channel state, ion concentrations and cell activity.
- "Depolarisation always fires the cell." Depolarisation must reach threshold at the right place and time.
- "The battery metaphor explains everything." It is a useful first model and says nothing about channel types,
  time courses or neuromodulation.

## What the sources do not establish

The sources are educational overviews and do not cover computational detail such as cable theory, dendritic
nonlinearities or the specific channel complements of different cell types. Any claim about a specific neuron's
behaviour would need evidence beyond this vault.

## Check yourself

1. What produces the resting membrane potential, and what does it mean that the cell is not at equilibrium?
2. Where do graded potentials summate, and why there?
3. Explain in one sentence how the same input can fire a cell in one context and not another.

## Answer notes

1. Ion gradients maintained across the membrane by pumps and transporters; the cell spends energy to keep
   gradients that are not at equilibrium.
2. At the initial segment of the axon, where voltage-gated sodium channels are dense, because summation there
   decides whether a spike starts.
3. Because the local voltage change summates with other inputs, and whether it reaches threshold depends on
   what else is active and the cell's current state.

## Next steps

- Continue to [[Lesson - Action potentials]] for what happens after threshold.
- Revisit [[Excitation and inhibition balance]] later with this summation picture in hand.
