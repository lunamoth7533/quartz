---
note_type: lesson
title: "Levels of analysis"
module: "m14"
module_title: "Computational Neuroscience and Brain Theories"
lesson_order: 1
domain: [computational-brain-theories, research-methods]
condition: []
prerequisites: []
sources: ["F92", "F91", "P31769410", "P23040802", "F121"]
source_count: 5
question_count: 3
word_count: 786
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m14]
---

# Levels of analysis

**Module.** M14 Computational Neuroscience and Brain Theories · **Topic.** [[Levels of analysis]]

## Why this matters

Claims in this domain constantly cross levels without saying so: a molecular finding is offered as an explanation of a behaviour, or a behavioural difference is described as though it were already a circuit finding. Spotting that crossing is the single most useful reading skill this module teaches.

## The core model

The same nervous system can be described in several distinct vocabularies: a channel's conductance, a synapse's weight, a network's trajectory, and a person's reported choice. None of these translates into another automatically; the translation has to be made explicit, usually by a model stating which lower-level property is assumed to produce which higher-level pattern. [[F92 Neuronal Dynamics#^f92-models|Neuronal Dynamics]]

A widely used vocabulary, going back to David Marr, separates the *computation* being performed, the *algorithm* that performs it, and the *implementation* that carries it out physically. Naming these three turns a vague mismatch into a specific one: a model can reproduce behaviour while being biologically implausible, or a cellular detail can turn out to have no consequence for the computation at all. [[F91 Computational Cognitive Neuroscience#^f91-levels|Computational Cognitive Neuroscience]]

The levels are not a ladder of importance: a molecular difference can be irrelevant to a behavioural question, and behavioural data alone can be too coarse to distinguish mechanisms that explain it equally well. This is the identifiability problem that shows up wherever models are fit to data - different mechanisms can produce very similar output, so a good account at one level is not automatically evidence for a specific story at another. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Computational modelling rules]] The same degeneracy appears physiologically: circuits built from different parameters can produce near-identical outputs. [[P23040802 Marder 2012 Neuromodulation#^p23040802-degeneracy|Neuromodulation]]

A sentence saying a cellular finding "explains" a behaviour, or that a task deficit "is" a circuit problem, crosses levels in one step and needs the explicit bridging model a careful account would supply. Some frameworks build the separation in from the start: the NIMH's Research Domain Criteria project organises studies along a matrix of units of analysis, from genes through cells, circuits and physiology to behaviour and self-report, so a finding at one unit is not silently promoted to another. [[F121 NIMH RDoC#^f121-matrix|RDoC]]

**Reading rule.** For any mechanistic-sounding sentence, ask which level the claim is actually made at, what was measured to support it, and what bridging assumption would connect it to the level the conclusion is stated in. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-validation|Computational modelling rules]]

## Worked example (hypothetical)

A news summary of an invented study reads: "Researchers found a gene variant linked to a subtype of hyperactive behaviour, showing the behaviour is caused by this molecular difference." The gene variant is a molecular-level claim; hyperactive behaviour, as rated by an observer, is behavioural. Between them sits everything the summary skips: how the variant alters a protein, a cell's signalling, a circuit's dynamics, and how that shows up as a measurable difference in some but not all carriers. A study measuring only the gene and the behaviour has evidence for an association between the two ends of that chain, not for the mechanism in the middle. The accurate rewrite: "a gene variant is statistically associated with this behavioural measure; the biological pathway connecting them is not established here."

## Common confusions

- "The genetic level is the deepest, so it is the most explanatory." Depth is not explanatory priority.
- "A circuit-level imaging correlate proves a psychological theory." It constrains theories; it does not choose between them.
- "A model that reproduces behaviour found the real mechanism." Different mechanisms can produce the same behaviour.

## What the sources do not establish

Nothing here supplies a rule for when a lower-level difference is sufficient to explain a higher-level one; that judgment is argued case by case. The RDoC matrix keeps levels separate for research design; it is not evidence that any study has closed the gap between two of its rows.

## Check yourself

1. Name Marr's three levels.
2. Why is a good model fit not evidence for its proposed mechanism?
3. In the worked example, what is missing between the gene finding and the behaviour claim?

## Answer notes

1. Computation, algorithm, and implementation.
2. Different mechanisms can produce very similar behaviour, so a fit does not single out the true one.
3. The chain from protein to cell signalling to circuit dynamics to behaviour; the study only measures the two endpoints.

## Next steps

- Continue to [[Lesson - Neural coding and population codes]].
- See also [[Computational Neuroscience and Brain Theories Map]] for how this concept frames the rest of the domain.
