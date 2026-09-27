---
note_type: lesson
title: "Experimental designs"
module: "m01"
module_title: "Research Methods and Evidence Literacy"
lesson_order: 12
domain: [research-methods]
condition: []
prerequisites: ["Evidence types and causal inference", "Bias and confounding"]
sources: ["F09", "P29531091", "P30097390"]
source_count: 3
question_count: 4
word_count: 787
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m01]
---

# Experimental designs

**Module.** M01 Research Methods and Evidence Literacy · **Topic.** [[Experimental designs]]

## Why this matters

Observational data can show two things travel together without saying which one, if either,
causes the other. An experiment is the tool built to close that gap. Knowing what it buys - and
what it still cannot promise - lets you tell a strong causal claim from a merely confident one.

## The core model

An experiment manipulates something and measures what happens next. The researcher decides who
gets which condition, rather than letting people sort themselves into groups, which is what lets
the later comparison mean something about cause rather than about who volunteers for what.
[[F09 Noba Research designs#^f09-designs|Research Designs]] Random assignment does the work: when
each participant's group is decided by chance, the groups should differ only by chance too,
balancing both measured and unmeasured characteristics between them.
[[F09 Noba Research designs#^f09-confounds|Research designs]]

A control condition stands in for what would have happened without the treatment. Where the
outcome is subjective, blinding participants and raters to who received what protects the
comparison from expectation effects. Deciding the outcome in advance, and analysing every assigned
participant by their original group even if they did not finish, keeps the benefit of randomisation
from leaking away during analysis.
[[P29531091 Nosek 2018 Preregistration revolution#^p29531091-purpose|Preregistration revolution]]

Experiments take different shapes: parallel-group trials compare separate groups; crossover
designs pass each person through more than one condition, assuming no carry-over between them;
factorial designs test two manipulations at once; cluster designs randomise whole groups rather
than individuals.

Randomisation licenses a causal claim about the exact comparison tested - this manipulation, this
population, this time frame - not about a different population, comparator or longer horizon. A
well-known synthesis of ADHD medication trials shows the limit precisely: every trial was
randomised, yet the authors still found insufficient data at 26 and 52 weeks, because duration is a
design choice randomisation cannot supply.
[[P30097390 Cortese 2018 ADHD medication efficacy and tolerability#^p30097390-longterm|ADHD medication efficacy and tolerability]]

## Worked example (hypothetical)

This scenario is invented for practice. Suppose you want to know whether a study technique
improves quiz performance, so you let 80 volunteers choose whether to use it, then compare scores.
Stop before trusting that: the groups were chosen, not assigned, so anyone more motivated may have
picked the technique - and that difference, not the technique, could explain a gap.

Redesign it as an experiment: randomly assign volunteers to the technique or a matched control
activity, decide the outcome in advance, and keep any grader blind to group. A score difference is
now harder to explain away by who chose what - though the claim still only covers this technique,
this population and this one quiz, not whether it holds for a different subject or a test taken
months later.

## Common confusions

- "Randomised means the result is automatically correct." Randomisation addresses assignment bias
  specifically; it does not fix a poorly measured outcome or a sample too small to detect a real
  effect.
- "An experiment always beats an observational study." A large, well-measured observational study
  can be more informative than a small, poorly controlled experiment on the wrong outcome.
- "A causal finding in the tested group applies everywhere." Internal validity and external
  validity are separate questions; a strong experiment only answers the first.

## What the sources do not establish

The teaching source behind the general model does not work through instrumental-variable or
regression-discontinuity designs, other ways of approximating randomisation. A design being
randomised does not, by itself, say whether it followed people long enough or measured the outcome
that actually matters.

## Check yourself

1. What specifically does random assignment balance between groups?
2. Why does a crossover design need an assumption a parallel-group design does not?
3. In the ADHD medication synthesis, what was strong and what was still missing?
4. A friend says an experiment "proves" a technique works for everyone. What two questions would
   you ask first?

## Answer notes

1. Both measured and unmeasured participant characteristics, in expectation, by removing any link
   between those characteristics and condition.
2. It assumes no carry-over from the first condition into the second, which a parallel-group
   design testing separate groups does not need.
3. Every trial was randomised; data at 26 and 52 weeks were still insufficient, since duration is
   separate from randomisation.
4. Which population, comparator and time frame it tested, and whether the outcome measured is the
   one the claim needs.

## Next steps

- Continue to [[Lesson - Observational designs]] for the counterpart family and where it is the
  only option.
- See [[Trial endpoints, benefit and harms]] for how this design family is applied to clinical
  outcomes.
