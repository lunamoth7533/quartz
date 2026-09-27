---
note_type: lesson
title: "Drift diffusion models"
module: "m14"
module_title: "Computational Neuroscience and Brain Theories"
lesson_order: 8
domain: [computational-brain-theories]
condition: [adhd, autism]
prerequisites: ["Model-based and model-free control"]
sources: ["P18085991", "P27608958", "P24628425", "P31769410", "P36940888"]
source_count: 5
question_count: 3
word_count: 800
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m14]
---

# Drift diffusion models

**Module.** M14 Computational Neuroscience and Brain Theories · **Topic.** [[Drift diffusion models]]

## Why this matters

Drift diffusion models are this module's clearest worked example of turning ordinary behavioural data into separate, interpretable components, and they source one of the most consistently replicated computational findings about ADHD in this library.

## The core model

The basic idea: a two-choice decision is modelled as gathering noisy evidence until it crosses a criterion amount, using accuracy together with the entire response-time distribution, not just the average, to estimate several components at once. [[P18085991 Ratcliff 2008 Diffusion decision model#^p18085991-translation|Ratcliff 2008]]

What the parameters mean was established by manipulating each one: a harder task lowered the model's estimated evidence quality, or drift rate; instructions favouring speed over accuracy changed how much evidence was required, or boundary separation; and stimulus frequency shifted the starting point of accumulation. A further parameter, non-decision time, absorbs time spent outside the decision itself, such as motor output. [[P18085991 Ratcliff 2008 Diffusion decision model#^p18085991-parameters|Ratcliff 2008]] [[P24628425 Karalunas 2014 Reaction time variability in ADHD and autism#^p24628425-ddm|Karalunas 2014]]

Why the model is unusually testable: because accuracy and the whole response-time distribution must be fitted together, it is tightly constrained, and its authors present it as falsifiable rather than infinitely flexible - though the usual caution still applies, since a good fit does not prove the fitted mechanism is true. [[P18085991 Ratcliff 2008 Diffusion decision model#^p18085991-constraints|Ratcliff 2008]]

The ADHD finding: a meta-analysis of children found the well-known extra reaction-time variability in ADHD was mostly accounted for by a lower drift rate and a heavier slow tail, with a smaller non-decision-time difference; a separate review of modelling studies agreed on the lower drift rate while boundary-separation findings were less consistent. [[P24628425 Karalunas 2014 Reaction time variability in ADHD and autism#^p24628425-ddm|Karalunas 2014]] [[P27608958 Ziegler 2016 Modelling ADHD decision-making and learning#^p27608958-drift|Ziegler 2016]]

Why one parameter cannot settle a theory: several different neurobiological accounts of ADHD independently predict the same lower drift rate, so finding it does not, by itself, choose between those competing accounts. [[P27608958 Ziegler 2016 Modelling ADHD decision-making and learning#^p27608958-predictions|Ziegler 2016]]

Autism: raised reaction-time variability appeared in autistic children mainly when the sample also included co-occurring ADHD, pointing the variability signal toward the co-occurring condition rather than autism on its own. [[P24628425 Karalunas 2014 Reaction time variability in ADHD and autism#^p24628425-autism|Karalunas 2014]]

**Reading rule.** Before treating a parameter difference as a mechanism, check the model was fitted to the full response-time distribution, that recovery was demonstrated, and the other parameters were estimated alongside it - a lower drift rate alone is consistent with several competing theories. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Wilson 2019]]

## Worked example (hypothetical)

A study finds people scoring higher on an attention questionnaire show a lower drift rate on a decision task, and the write-up concludes "the drift-rate difference proves an attention-specific mechanism." Apply the reading rule: several distinct accounts of attention-related difficulty predict the same lower-drift-rate pattern, so this single parameter cannot distinguish between them. A more decisive test would examine boundary separation and non-decision time too, and would need the parameter-recovery check first. The defensible claim is "this sample showed a lower drift rate, consistent with several competing accounts this design could not distinguish between."

## Common confusions

- "A lower drift rate means someone is trying less hard." It reflects the modelled quality of evidence accumulation, not effort or motivation.
- "One parameter difference identifies which theory of ADHD is correct." Several competing theories predict the same single-parameter pattern.
- "The reaction-time variability finding is specific to autism." In the cited meta-analysis, raised variability tracked co-occurring ADHD, not autism itself.

## What the sources do not establish

The parameter-to-process mapping was validated in healthy adults, so a clinical group's difference in a parameter need not mean the same process is affected. The main ADHD synthesis is a decade or more old and concerns children, and computational measures generally show weaker reliability than assumed, limiting their use as individual markers. [[P36940888 Karvelis 2023 Individual differences in computational psychiatry#^p36940888-psychometrics|Karvelis 2023]]

## Check yourself

1. What two things does a drift diffusion model use together to estimate its parameters?
2. What is the most consistent ADHD finding from this modelling, and why can't it alone identify the correct theory?
3. What did the autism finding about reaction-time variability actually track?

## Answer notes

1. Choice accuracy and the full distribution of response times, not just the average.
2. A lower drift rate; several distinct neurobiological accounts of ADHD independently predict that same finding.
3. Co-occurring ADHD within the autistic samples studied, rather than autism on its own.

## Next steps

- Continue to [[Lesson - Bayesian inference and predictive processing]].
- Related: [[Computational psychiatry]] for how this drift-rate finding is used as a candidate clinical measure.
