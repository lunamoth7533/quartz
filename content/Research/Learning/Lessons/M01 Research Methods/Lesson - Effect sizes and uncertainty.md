---
note_type: lesson
title: "Effect sizes and uncertainty"
module: "m01"
module_title: "Research Methods and Evidence Literacy"
lesson_order: 6
domain: [research-literacy]
condition: []
prerequisites: ["Evidence types and causal inference", "Bias and confounding"]
sources: ["P23997866", "P26952180", "P27209009", "F22"]
source_count: 4
question_count: 4
word_count: 873
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m01]
---

# Effect sizes and uncertainty

**Module.** M01 Research Methods and Evidence Literacy · **Topic.** [[Effect sizes and uncertainty]]

## Why this matters

"Significant" tells you almost nothing about whether something matters. This lesson gives you the three numbers
that do: how big the difference is, how uncertain the estimate is, and how many people the difference is spread
across. After this lesson, a bare p value should feel like a sentence with the verb missing.

## The core model

Effect size is the magnitude of a difference or association. The absolute effect size is the raw difference
between group averages; a standardized effect size expresses that difference in standard deviation units so
results on different scales can be compared.
[[P23997866 Sullivan 2012 Using effect size#^p23997866-magnitude|Using Effect Size]]

P values answer a different question. With a sufficiently large sample, a statistical test will almost always
show a significant difference unless the effect is exactly zero, so significance can accompany a difference
that is meaningless in practice.
[[P23997866 Sullivan 2012 Using effect size#^p23997866-significance|Using Effect Size]]
The informal small/medium/large labels for standardized differences are heuristics: they do not account for
measurement accuracy or population diversity, and they should not be used as thresholds.
[[P23997866 Sullivan 2012 Using effect size#^p23997866-cohen|Using Effect Size]]

Risk measures make the same point in clinical language. Absolute risk reduction is the risk difference;
relative risk reduction is that difference divided by baseline risk; the number needed to treat is one divided
by the absolute reduction. Because the relative number depends on the baseline, the same proportional reduction
can describe a large or a trivial absolute change.
[[P26952180 Ranganathan 2016 Absolute and relative risk#^p26952180-measures|Absolute and relative risk]];
[[P26952180 Ranganathan 2016 Absolute and relative risk#^p26952180-rrr|Absolute and relative risk]]

Uncertainty has its own traps. P values are commonly read as the probability that a hypothesis is true or that
results arose by chance; confidence intervals are compatibility ranges under the data and model rather than
probability distributions for the parameter.
[[P27209009 Greenland 2016 Statistical tests and P values#^p27209009-guide|Statistical tests and P values]];
[[P27209009 Greenland 2016 Statistical tests and P values#^p27209009-ci|Statistical tests and P values]]
Cochrane guidance follows the same logic when it tells reviewers not to code results as significant or
non-significant and to report the interval with the exact P value.
[[F22 Cochrane Handbook for Systematic Reviews of Interventions#^f22-thresholds|Cochrane Handbook]]

## Worked example (hypothetical)

This scenario is invented for practice. Over 12 months of follow-up, a hypothetical trial reports that a
treatment reduced the proportion of participants who had a relapse from 20% to 15%.

Compute each form. The absolute risk reduction is 5 percentage points (20% − 15%). The relative risk reduction
is 5/20 = 25%. The number needed to treat is 1/0.05 = 20 people. Now change the baseline: if the same 25%
relative reduction applied to a 2% baseline risk, the absolute reduction would be 0.5 percentage points and the
number needed to treat 200.

The sentence you would write for a decision: "Over 12 months, the treatment reduced relapse from 20% to 15% in
this trial population — an absolute risk reduction of 5 percentage points, a relative risk reduction of 25%,
and a number needed to treat of 20; the estimate has a confidence interval of [interval from the paper] and
applies to the studied population."

Notice that dropping either the absolute or the relative number changes how the result reads, and dropping the
population turns it into a promise.

## Common confusions

- "A 25% reduction is a 25% reduction." Only in relative terms; the absolute change depends entirely on
  baseline risk.
- "A p value of .04 means a 4% chance the result is chance." That is one of the classic misinterpretations the
  statistical guide documents.
- "A wide confidence interval is a bad study." It is an honest statement of uncertainty; narrow intervals from
  a biased design can be worse.

## What the sources do not establish

These sources are methodological teaching documents, not a scoring system for importance. Nothing here
identifies which effect size matters for a given decision; that judgement belongs to the outcome, the
alternatives and the person or policy making the choice.

## Check yourself

1. Convert: over two years, relapse falls from 30% to 24%. What are the absolute reduction, relative reduction
   and NNT?
2. Why do small/medium/large labels fail as decision thresholds?
3. State what a 95% confidence interval does and does not mean.
4. Which of the numbers in question 1 would you put in a one-sentence summary, and why?

## Answer notes

1. Absolute reduction 6 percentage points; relative reduction 20%; NNT ≈ 17 (1/0.06).
2. Because importance depends on the outcome, the population and the decision, while the labels are conventions
   that ignore measurement quality and context.
3. It gives a range of parameter values compatible with the data and model at the stated confidence level; it
   is not a probability that the true value lies inside a specific interval.
4. Both the absolute and relative numbers plus the population, because each can mislead alone.

## Next steps

- Continue to [[Lesson - Measurement validity and reliability]] to see how the outcome number itself is produced.
- Re-read [[Efficacy versus tolerability]] with the two-number habit in mind.
