---
note_type: lesson
title: "Short-term synaptic plasticity"
module: "m02"
module_title: "Neurobiology"
lesson_order: 15
domain: [neurobiology]
condition: []
prerequisites: ["The synaptic vesicle cycle"]
sources: ["F100", "F115", "F51", "P21779718", "P23040802"]
source_count: 5
question_count: 3
word_count: 800
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m02]
---

# Short-term synaptic plasticity

**Module.** M02 Neurobiology · **Topic.** [[Short-term synaptic plasticity]]

## Why this matters

Not every change in how strong a synapse looks is a sign of learning. Short-term plasticity changes a synapse's
output over milliseconds to seconds using the vesicle machinery already in place, and mistaking it for a lasting
change is a common way plasticity claims get overstated.

## The core model

Short-term plasticity is a change in synaptic strength lasting milliseconds to seconds, with no lasting
structural remodelling; it shapes response to a pattern of activity, not a single event.

Facilitation happens when residual calcium from a first spike adds to a second's calcium signal, so the second
spike releases more transmitter, fading over hundreds of milliseconds.
[[F100 Neuroscience Online synaptic plasticity#^f100-facilitation|Synaptic plasticity]]
Depression works differently: at synapses with high starting release probability, the readily releasable pool is
used up faster than it refills, so repeated spikes release progressively less.
[[F115 Neuroscience Online transmitter release#^f115-requirements|Transmitter release]]
Whether a synapse facilitates or depresses depends on its baseline probability, calcium handling, and recent
firing - so the same transmitter system can show opposite dynamics at different contacts.
[[F100 Neuroscience Online synaptic plasticity#^f100-summation|Synaptic plasticity]]

During a rapid train, both run at once: facilitation builds within the first few spikes, while depression grows
as the pool drains faster than it refills. What is recorded is their sum, which is why a synapse often
facilitates briefly and then depresses as a train continues.
[[F100 Neuroscience Online synaptic plasticity#^f100-facilitation|Synaptic plasticity]]
[[F115 Neuroscience Online transmitter release#^f115-requirements|Transmitter release]]

A compact way to hold this: output over a short sequence is approximately vesicles released multiplied by the
postsynaptic response to each. Probability rises and falls with residual calcium, pool size falls with use and
recovers with time, and quantal size stays close to fixed - the baseline any claim of a longer-lasting change
must be distinguished from.
[[F115 Neuroscience Online transmitter release#^f115-quanta|Mechanisms of Neurotransmitter Release]]

Short-term change is not a weak version of long-term potentiation: it needs no gene expression, while lasting
plasticity requires second-messenger cascades and new protein synthesis - different mechanisms on different time
constants. Post-tetanic potentiation, lasting seconds after a burst, sits between the two but is still a
presynaptic, vesicle-supply phenomenon.
[[F100 Neuroscience Online synaptic plasticity#^f100-lasting|Synaptic plasticity]]
[[P21779718 Bliss 2011 Long-term potentiation and depression#^p21779718-mechanism|Long-term potentiation and depression]]

Because both processes depend on recent history, they act as filters - facilitating synapses pass bursts,
depressing ones emphasise a train's start - changing how inputs add at the postsynaptic cell. Release probability
is itself a target of neuromodulation, so filtering behaviour is state-dependent by construction.
[[F100 Neuroscience Online synaptic plasticity#^f100-facilitation|Synaptic plasticity]]
[[F51 OpenStax Function of nervous tissue#^f51-summation|Function of Nervous Tissue]]
[[P23040802 Marder 2012 Neuromodulation#^p23040802-state|Neuromodulation of neuronal circuits]]

The reading rule: any statement that a synapse "strengthened" needs a timescale, or it cannot be told apart from
an ordinary, transient change in release probability during one burst.
[[P21779718 Bliss 2011 Long-term potentiation and depression#^p21779718-timing|Long-term potentiation and depression]]

## Worked example (hypothetical)

This scenario is invented for practice. Two hypothetical synapses, X and Y, receive the same five-spike burst; X
starts with a high release probability, Y a low one. X should rise briefly then drop sharply, spending its pool
too fast to refill; Y should rise more and drop little.

The defensible statement: "the same burst produced facilitation at Y and depression at X because of their
starting probabilities - not a lasting change at either."

## Common confusions

- "Short-term plasticity is a weak form of long-term potentiation." Different mechanisms on different time
  constants.
- "A facilitating synapse has become permanently stronger." It is transient, gone within seconds.
- "All synapses respond to a burst the same way." The response depends on starting release probability.

## What the sources do not establish

The mechanisms are established from paired recordings at identified synapses. The filtering account is a
computational description at the level of the recorded preparation; extending it to human cognition needs
models, since the relevant measurements are not directly available in people.

## Check yourself

1. What causes facilitation, and what causes depression, at the level of the vesicle cycle?
2. Why is short-term plasticity not simply a weaker version of long-term potentiation?
3. Why might the same burst produce facilitation at one synapse and depression at another?

## Answer notes

1. Facilitation: residual calcium boosting release. Depression: the readily releasable pool used up faster than
   it refills.
2. They are different mechanisms on different time constants; only lasting plasticity needs gene expression and
   new protein synthesis.
3. The outcome depends on each synapse's starting release probability and calcium handling.

## Next steps

- Continue to [[Lesson - Neuronal cell biology and energetics]] for how a neuron powers this machinery.
- Revisit [[Working memory]] for how these dynamics model transient memory.
