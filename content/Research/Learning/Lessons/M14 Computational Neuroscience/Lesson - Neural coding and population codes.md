---
note_type: lesson
title: "Neural coding and population codes"
module: "m14"
module_title: "Computational Neuroscience and Brain Theories"
lesson_order: 2
domain: [computational-brain-theories, neurobiology]
condition: []
prerequisites: ["Levels of analysis"]
sources: ["F03", "F51", "P21779718", "P22722855", "P31769410"]
source_count: 5
question_count: 3
word_count: 765
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m14]
---

# Neural coding and population codes

**Module.** M14 Computational Neuroscience and Brain Theories · **Topic.** [[Neural coding and population codes]]

## Why this matters

Understanding how information is carried in neural activity underlies every later claim in this module about learning, decision-making and disorder-related differences in brain signals. Getting the code wrong changes what a finding actually means, which is why this lesson comes right after the levels lesson: coding claims are a concrete case of naming the level a claim is made at.

## The core model

Action potentials are all-or-none, fixed-shape events, so a neuron cannot signal intensity by making a bigger spike - intensity and identity must instead be carried by timing, rate, or a pattern across many cells. [[F03 OpenStax The action potential#^f03-signals|The Action Potential]] The classical starting point is a rate code: which cells fire, and how often. [[F51 OpenStax Function of nervous tissue#^f51-coding|Function of Nervous Tissue]]

Timing matters too. Spike-timing-dependent plasticity shows that relative timing is not incidental: presynaptic-then-postsynaptic firing within about 50 milliseconds strengthens a synapse, while the reverse order weakens it, giving timing a real functional consequence rather than just averaging out into a rate. [[P21779718 Bliss 2011 Long-term potentiation and depression#^p21779718-timing|Long-term potentiation and depression]]

Population-level codes changed what counts as an explanation. Analysing primate motor cortex during reaching as a dynamical system, one influential study found that the population's collective activity, treated as a trajectory through a low-dimensional space, captured preparatory and movement-related states that single-neuron firing rates did not capture well. [[P22722855 Churchland 2012 Neural population dynamics#^p22722855-population|Neural population dynamics]] [[P22722855 Churchland 2012 Neural population dynamics#^p22722855-trajectory|Neural population dynamics]] The authors frame this as a claim about the descriptive power of population-level models, not about a specific circuit mechanism - the standard caution against over-reading a good description as an explanation. [[P22722855 Churchland 2012 Neural population dynamics#^p22722855-claim|Neural population dynamics]]

Choosing between rate, timing and population codes is itself a modelling exercise. Different candidate codes can often fit the same recordings, so identifying "the" code a region uses is a model-comparison problem with the same fitting cautions as anywhere else in this domain, not a fact read straight off the data. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-fitting|Computational modelling rules]]

**Reading rule.** Name the signal, the coding hypothesis, and the evidence class before treating any coding claim as settled.

## Worked example (hypothetical)

Two labs record from "planning cortex" during a decision task using the same 200 neurons. Lab A reports that single-neuron firing rates barely change before a choice and concludes "no preparatory signal exists here." Lab B pools the same recordings into a population trajectory and finds a clear, decodable pre-choice state. Work through why both can be right: Lab A's negative result concerns a single-cell rate code, and Lab B's positive result concerns a population-level code - they are different coding hypotheses tested against the same data, not contradictory claims about the same one. The accurate synthesis: a population code carried a preparatory signal that individual rate codes largely missed, which is exactly the kind of result that revises how "no effect" findings from single-unit studies should be read.

## Common confusions

- "If single neurons don't show it, it isn't there." Population-level structure can carry a signal single-unit rates miss.
- "Population methods just repackage rate coding, so this is trivial." The trajectories captured preparatory structure single-neuron rates did not.
- "A population code proves how the brain implements the computation." It is a model that fits well; other codes might fit too.

## What the sources do not establish

Which code a given area "actually" uses is not settled by any single study; population findings depend on which and how many cells were sampled. The evidence here comes from one species and one task (primate reaching), so generalising it to other regions or tasks needs its own evidence.

## Check yourself

1. Why can't a single action potential's shape carry stimulus "intensity"?
2. What did the population-trajectory analysis find that single-neuron rates did not?
3. Why is choosing between codes a model-comparison problem rather than a direct observation?

## Answer notes

1. The action potential is a stereotyped, fixed-amplitude event; information is instead carried by timing, rate, or patterns across cells.
2. Distinct, low-dimensional trajectories for preparatory versus movement-related activity, including a preparatory state before movement began.
3. Different codes can often fit the same data, so identifying "the" code needs comparing candidate models, not reading one off the data.

## Next steps

- Continue to [[Lesson - Dynamical systems models]].
- Related: [[Levels of analysis]] frames what any coding claim is actually claiming.
