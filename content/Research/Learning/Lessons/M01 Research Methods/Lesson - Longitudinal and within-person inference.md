---
note_type: lesson
title: "Longitudinal and within-person inference"
module: "m01"
module_title: "Research Methods and Evidence Literacy"
lesson_order: 14
domain: [research-methods]
condition: []
prerequisites: ["Observational designs"]
sources: ["F09", "P18509902", "P27942093"]
source_count: 3
question_count: 4
word_count: 742
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m01]
---

# Longitudinal and within-person inference

**Module.** M01 Research Methods and Evidence Literacy · **Topic.** [[Longitudinal and within-person inference]]

## Why this matters

A cohort study follows people forward. Longitudinal designs push further, asking not just what
happens to a group over time but what happens within one person relative to their own baseline - a
distinction that matters because a pattern across people can point opposite to the pattern within
one person over time.

## The core model

Longitudinal designs measure the same people repeatedly, making it possible to describe a
trajectory rather than a single snapshot. [[F09 Noba Research designs#^f09-designs|Research Designs]]
A retrospective summary of a week is a reconstruction shaped by recall, not a sample of what
actually happened. Ecological momentary assessment samples a person's state repeatedly, in real
time, to avoid that reconstruction, at the cost of asking more of participants.
[[P18509902 Shiffman 2008 Ecological momentary assessment#^p18509902-rationale|Ecological momentary assessment]]

A correlation calculated across people describes between-person differences; a correlation
calculated across occasions within one person describes a within-person process. These are not the
same question, and they can have different signs - something linked to a worse outcome across a
group can still be followed by improvement within one person who is recovering.
[[P18509902 Shiffman 2008 Ecological momentary assessment#^p18509902-tradeoffs|Ecological momentary assessment]]
Repeated within-person measurement is also the minimum route to a directional claim: an earlier
value predicting a later change in another measure, above that measure's own prior trend, is still
short of full causal proof without further assumptions.

Two practical problems matter here. People who drop out are rarely a random subset of those who
started, so ignoring dropout biases estimates. And a comparison across months or years assumes the
instrument still means the same thing at each wave; when that breaks down, even partially, a
change score loses one clean interpretation.
[[P27942093 Putnick 2016 Measurement invariance#^p27942093-levels|Measurement invariance]]

## Worked example (hypothetical)

This scenario is invented for practice. In a three-week diary study, forty volunteers rate sleep
quality and concentration each evening. Across the sample, people who report worse average sleep
also report worse average concentration - a between-person association. But within one volunteer's
own three weeks, nights after unusually poor sleep are not obviously followed by worse
concentration; on some nights it is better, perhaps because a bad night prompted more rest the next
day.

The between-person and within-person patterns answer different questions, and only the second
describes what happens inside one person over time - which is why the first question to ask of any
such claim is whether the analysis compared people or compared each person to their own other
occasions.

## Common confusions

- "A group-level association also describes individuals." A between-person correlation can differ
  from, or even reverse, the within-person pattern.
- "More time points always fixes the problem." More waves help only if attrition is addressed and
  the instrument still means the same thing at each wave.
- "Longitudinal data automatically prove causation." Time order is necessary for a process claim
  but not sufficient; confounding over time can still explain the pattern.

## What the sources do not establish

The momentary-assessment literature describes method trade-offs, not a verdict on any specific
longitudinal claim here; whether a study separated within- from between-person effects has to be
checked study by study. Measurement invariance across long follow-ups is often assumed rather than
tested.

## Check yourself

1. What is the difference between a between-person and a within-person correlation?
2. Why can these two correlations have opposite signs?
3. Name two problems specific to longitudinal designs that a single cross-sectional study does not
   face.
4. What minimum evidence does a design need before claiming an earlier measure predicts a later
   change in another?

## Answer notes

1. Between-person compares people to each other; within-person compares each person's occasions to
   their own.
2. The process linking two measures across people can differ from the process linking them within
   one person over time.
3. Non-random attrition, and the risk the instrument no longer means the same thing at a later
   wave.
4. That an earlier value predicts a later change in the second measure, above and beyond that
   measure's own prior trend.

## Next steps

- Continue to [[Lesson - Qualitative designs]] for a design family built to answer a different
  kind of question altogether.
- Return to [[Measurement validity and reliability]] to revisit what a score needs before it can
  be trusted, let alone compared over time.
