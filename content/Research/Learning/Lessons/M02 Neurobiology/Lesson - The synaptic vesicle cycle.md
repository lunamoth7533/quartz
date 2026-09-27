---
note_type: lesson
title: "The synaptic vesicle cycle"
module: "m02"
module_title: "Neurobiology"
lesson_order: 13
domain: [neurobiology, neurochemistry]
condition: []
prerequisites: ["Chemical and electrical synapses"]
sources: ["F115", "F04", "F100", "F108"]
source_count: 4
question_count: 3
word_count: 735
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m02]
---

# The synaptic vesicle cycle

**Module.** M02 Neurobiology · **Topic.** [[The synaptic vesicle cycle]]

## Why this matters

Stimulant drugs act directly on the machinery that packages and releases transmitter, not on the receptors that
receive it. This cycle also explains why a synapse's output changes moment to moment, which the next lesson
builds on.

## The core model

When an action potential arrives at a terminal, it opens voltage-gated calcium channels, and calcium entry
triggers release - established by classical neuromuscular-junction experiments. Vesicles then fuse with the
membrane, and transmitter diffuses across the cleft to bind postsynaptic receptors.
[[F115 Neuroscience Online transmitter release#^f115-calcium|Transmitter release]]
[[F04 OpenStax Communication between neurons#^f04-release|Communication Between Neurons]]
Release depends on both calcium availability and the current state of the release machinery, so the same spike
can release different amounts at different moments - the observation that makes short-term plasticity possible.
[[F115 Neuroscience Online transmitter release#^f115-calcium|Transmitter release]]

Transmitter is released in discrete units rather than a trickle: postsynaptic responses come in multiples of a
smallest step, matching what individual vesicles fusing one at a time would produce.
[[F115 Neuroscience Online transmitter release#^f115-quanta|Transmitter release]]

Two variables set a response's size: quantal size, the response to one vesicle, and release probability, the
chance a vesicle is released. They are regulated separately - two contacts on the same cell can differ
twenty-fold in probability, so identity does not fix strength. Facilitation raises probability through leftover
calcium; depression lowers it by draining the pool of ready vesicles.
[[F115 Neuroscience Online transmitter release#^f115-quanta|Transmitter release]]
[[F100 Neuroscience Online synaptic plasticity#^f100-facilitation|Synaptic plasticity]]

Vesicles sit in a budget, not a warehouse: reserve, recycling and readily releasable pools. The reserve holds most
vesicles, while the readily releasable pool is the small, docked, fusion-ready fraction. A rapid train spends that
pool first, and recovery - mobilising the reserve, retrieving and refilling membrane - takes longer than the gap
between spikes in fast firing. That is why depression is strongest at high-probability synapses, and why a
synapse's response depends on its recent spending history as much as its number of release sites.
[[F100 Neuroscience Online synaptic plasticity#^f100-facilitation|Synaptic plasticity]]
[[F115 Neuroscience Online transmitter release#^f115-requirements|Transmitter release]]

The cycle closes when membrane is retrieved and vesicles refilled by transporters, so transmitter supply and
vesicle supply are separate constraints - why synthesis and reuptake count as synaptic function, not separate
housekeeping.
[[F108 Neuroscience Online acetylcholine#^f108-inactivation|Acetylcholine transmission]]

## Worked example (hypothetical)

This scenario is invented for practice. A hypothetical recording from one synapse during a ten-spike burst shows
the first responses roughly equal, then each shrinking until it settles into a small, steady response. A synapse
with high starting release probability spends its readily releasable pool quickly; mobilisation and retrieval
both take longer than the interval between spikes in a fast burst, so each successive response draws on less
supply.

The defensible statement: "the shrinking responses reflect pool depletion at a high-probability synapse, not a
shortage of transmitter overall - the reserve pool still holds most of the terminal's supply."

## Common confusions

- "Release probability is fixed by the transmitter and receptor at a synapse." Two contacts sharing both can
  still differ twenty-fold.
- "A depressed synapse has run out of transmitter." Only the small, readily releasable fraction is depleted.
- "Quantal size and release probability are the same thing." They are separate, independently regulated
  variables.

## What the sources do not establish

The cycle is described with most confidence at the neuromuscular junction, large and accessible enough for direct
recording. At central synapses the same steps are inferred by analogy, pool sizes differ by synapse type, and
human presynaptic function is estimated indirectly rather than recorded directly.

## Check yourself

1. What triggers vesicle fusion once an action potential reaches a terminal?
2. Name the two variables that together set the size of a synaptic response.
3. Why does a rapid burst often produce smaller and smaller responses at a high-probability synapse?

## Answer notes

1. Calcium entry through voltage-gated calcium channels opened by the arriving spike.
2. Quantal size (response to one vesicle) and release probability (chance a vesicle is released); regulated
   separately.
3. The readily releasable pool is spent faster than it refills from the reserve during a fast burst.

## Next steps

- Continue to [[Lesson - Dendritic integration]] for what happens once transmitter reaches the postsynaptic
  cell.
- Revisit [[Short-term synaptic plasticity]] for how this pool dynamic produces facilitation and depression.
