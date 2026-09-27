---
note_type: lesson
title: "Chemical and electrical synapses"
module: "m02"
module_title: "Neurobiology"
lesson_order: 12
domain: [neurobiology]
condition: []
prerequisites: ["Synapses and plasticity"]
sources: ["F04", "F115", "F06"]
source_count: 3
question_count: 3
word_count: 749
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m02]
---

# Chemical and electrical synapses

**Module.** M02 Neurobiology · **Topic.** [[Chemical and electrical synapses]]

## Why this matters

"Synapse" is often treated as one mechanism, but neurons connect in two genuinely different ways. Knowing which
one a claim is about explains why almost every psychoactive drug targets one type and largely ignores the other.

## The core model

At a chemical synapse, the presynaptic cell releases transmitter that binds receptors on the postsynaptic cell.
At an electrical synapse, gap junctions directly connect the two cells' cytoplasm.
[[F04 OpenStax Communication between neurons#^f04-types|Communication Between Neurons]]

The chemical sequence runs in a fixed order: an arriving spike opens voltage-gated calcium channels, calcium
triggers vesicle fusion, transmitter diffuses across the cleft, and it binds a postsynaptic receptor. The effect
depends on which receptor it binds - depolarising or hyperpolarising - not on the transmitter alone. That
sequence takes roughly a millisecond, the price paid for amplification from one vesicle to many receptors, a
controllable sign, and rich modulation.
[[F04 OpenStax Communication between neurons#^f04-types|Communication Between Neurons]]
[[F04 OpenStax Communication between neurons#^f04-release|Communication Between Neurons]]

The evidence behind this picture: transmitter is released in discrete, quantal units - postsynaptic responses
come in multiples of a smallest step, matching individual vesicles fusing one at a time - and release depends
jointly on calcium availability and the state of the release machinery, so the same spike can release different
amounts at different moments. Both findings, largely from classical neuromuscular-junction recordings, are the
backbone of the vesicle-release account.
[[F115 Neuroscience Online transmitter release#^f115-quanta|Mechanisms of Neurotransmitter Release]]

Receptor identity decides both sign and speed: the same glutamate molecule depolarises adult cells through fast
ionotropic receptors, while metabotropic receptors act through second messengers on much slower timescales.
"Excitatory" and "inhibitory" are properties of the synapse, not of the transmitter.
[[F04 OpenStax Communication between neurons#^f04-receptor|Communication Between Neurons]]

An electrical synapse skips the chemical steps: gap junctions pass current directly, so transmission is faster,
mostly bidirectional, and largely stereotyped. Electrical synapses are far less common than chemical ones in
mammals, and their main job is synchronising the cells they couple.
[[F06 OpenStax Cells of the nervous system#^f06-electrical|Cells of the Nervous System]]

The two are not competitors for the same job: electrical transmission trades amplification and sign control for
speed and synchrony, while chemical transmission pays a delay for both. The same pair of neurons can also have
both kinds of contact at once, so a spike can deliver a fast electrical nudge followed by a slower chemical one.
[[F04 OpenStax Communication between neurons#^f04-types|Communication Between Neurons]]
[[F06 OpenStax Cells of the nervous system#^f06-electrical|Cells of the Nervous System]]

## Worked example (hypothetical)

This scenario is invented for practice. Two fictional recordings from neurons A and B: stimulating A produces a
response in B with almost no delay, then a second, smaller response about a millisecond later. A near-instant
response does not fit the calcium-to-receptor-binding sequence a chemical synapse requires; it fits a gap
junction passing current directly. The delayed component, arriving after roughly the time that sequence takes,
fits a chemical synapse instead.

The defensible conclusion: "A and B appear to have both an electrical and a chemical contact."

## Common confusions

- "A synapse is always chemical." Gap junctions form electrical synapses that use no transmitter.
- "Electrical synapses are just fast chemical ones." They lack the calcium-triggered sequence entirely.
- "Whether a synapse excites or inhibits depends on the transmitter." It depends on the receptor.

## What the sources do not establish

How much electrical coupling contributes to mammalian cortical function, beyond systems needing synchrony, is
still being worked out. The chemical-versus-electrical division is also a teaching simplification: some cells
release transmitter without firing a spike, and some gap junctions are gated or asymmetric.

## Check yourself

1. List the steps between an arriving spike and a postsynaptic effect at a chemical synapse.
2. What decides whether a synapse is excitatory or inhibitory?
3. Name one property that favours an electrical synapse and one that favours a chemical one.

## Answer notes

1. Calcium channels open, calcium triggers vesicle fusion, transmitter crosses the cleft, and it binds a
   postsynaptic receptor.
2. The identity of the postsynaptic receptor, not the transmitter.
3. Electrical: speed and synchrony with no delay. Chemical: amplification, controllable sign, and modulation, at
   the cost of a delay.

## Next steps

- Continue to [[Lesson - The synaptic vesicle cycle]] for the release machinery in more depth.
- Revisit [[Receptor families and second messengers]] for how receptor identity is set molecularly.
