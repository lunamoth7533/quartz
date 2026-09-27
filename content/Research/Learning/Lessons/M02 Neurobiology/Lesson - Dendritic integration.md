---
note_type: lesson
title: "Dendritic integration"
module: "m02"
module_title: "Neurobiology"
lesson_order: 14
domain: [neurobiology]
condition: []
prerequisites: ["Ion gradients and membrane potential", "Action potentials"]
sources: ["F102", "F51", "F04", "P22722855", "P23040802"]
source_count: 5
question_count: 3
word_count: 758
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m02]
---

# Dendritic integration

**Module.** M02 Neurobiology · **Topic.** [[Dendritic integration]]

## Why this matters

A neuron can receive thousands of synaptic inputs, yet produces one kind of output: fire or do not fire.
Dendritic integration is where that arithmetic happens, and why where a synapse sits matters as much as which
transmitter it releases.

## The core model

Dendrites branch extensively and are usually covered in spines, small protrusions that increase the surface
available for contact and contain the cytoskeletal elements behind some forms of plasticity. Input arrives spread
across a large, irregular surface, not collected at one site.
[[F102 Neuroscience Online cell types#^f102-dendrites|Organization of Cell Types]]
[[F102 Neuroscience Online cell types#^f102-spines|Organization of Cell Types]]

Each active synapse produces a local graded potential that decays as it travels toward the soma, so distance
discounts a synapse's influence. Inputs arriving close together in time and space add - spatial and temporal
summation - and the summed potentials converge at the axon's initial segment, where sodium channels are densest
and the all-or-none decision is made.
[[F51 OpenStax Function of nervous tissue#^f51-graded|Function of Nervous Tissue]]
[[F51 OpenStax Function of nervous tissue#^f51-summation|Function of Nervous Tissue]]
[[F04 OpenStax Communication between neurons#^f04-initial-segment|Communication Between Neurons]]

That distance discount is part of the computation, not a flaw: a cell whose inputs land on different branches can
treat each branch's local sum as something like a separate vote, so coincidence on one branch outweighs the same
number of inputs scattered across branches or spread out in time.
[[F51 OpenStax Function of nervous tissue#^f51-graded|Function of Nervous Tissue]]
[[F51 OpenStax Function of nervous tissue#^f51-summation|Function of Nervous Tissue]]

The classical picture divides a neuron into cell-body, dendritic and axonal compartments, though it does not hold
for every neuron type. A single spine or branch can behave as a semi-independent unit with its own local voltage,
and dendrites carry conductances that amplify or dampen local input, alongside spine shape changes that accompany
plasticity.
[[F102 Neuroscience Online cell types#^f102-compartments|Organization of Cell Types]]
[[F102 Neuroscience Online cell types#^f102-spines|Organization of Cell Types]]

Integration and plasticity share a timescale ladder: summation over milliseconds, short-term transmission change
over seconds, and lasting structural change in spines over days. A claim that a synapse has "strengthened" is
incomplete until it names which rung it means.

## Worked example (hypothetical)

This scenario is invented for practice. A hypothetical neuron has two equal-strength inputs: one near the soma,
one on a distant branch. Paired within milliseconds with a second input on the same nearby branch, the proximal
input fires the cell; paired the same way with a second input on a different distant branch, the distal input
does not. The proximal pair's signal has less distance to decay and can sum directly on a shared branch; the
distal pair, spread across branches, cannot benefit from that local summation.

The defensible statement: "the response depended not just on the number of active synapses, but on where each
sat and whether their inputs could combine locally."

## Common confusions

- "Every synapse counts the same regardless of location." Distance and branch both change a synapse's
  contribution.
- "A neuron just adds up all its inputs like a counter." Linear summation is the baseline case; some cell types
  show genuinely nonlinear, branch-level events.
- "Population-level findings mean single-neuron integration is irrelevant." They limit, not eliminate, how much
  it can explain.

## What the sources do not establish

The strongest claims about dendritic computation come from reduced preparations and modelling, while linear
summation is the baseline case taught here. Human dendritic computation cannot be recorded directly, and
neuromodulators change dendritic properties, so integration rules are state-dependent.
[[P22722855 Churchland 2012 Neural population dynamics#^p22722855-trajectory|Neural population dynamics]]
[[P23040802 Marder 2012 Neuromodulation#^p23040802-state|Neuromodulation]]

## Check yourself

1. Why does a synapse far from the soma generally have less influence on firing than one close to the soma?
2. What does it mean to say a dendritic branch can act as a "separate vote"?
3. Give one reason population-level recordings limit what a single neuron's dendritic arithmetic can explain.

## Answer notes

1. Its local potential decays as it spreads toward the initial segment, losing size before it contributes to
   the summed decision.
2. Inputs sharing a branch can sum locally before travelling on, behaving like one unit in the overall
   summation.
3. Behaviour-relevant variables are often distributed across many cells rather than concentrated in one.

## Next steps

- Continue to [[Lesson - Short-term synaptic plasticity]] for how this arithmetic changes over a burst.
- Revisit [[Long-term potentiation and depression]] for the slower end of the same timescale ladder.
