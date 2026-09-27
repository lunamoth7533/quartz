---
note_type: lesson
title: "P-values and statistical significance"
module: "m01"
module_title: "Research Methods and Evidence Literacy"
lesson_order: 17
domain: [research-methods]
condition: []
prerequisites: ["Effect sizes and uncertainty", "Causality and counterfactuals"]
sources: ["P18582619", "P27209009", "P16060722", "P23997866"]
source_count: 4
question_count: 4
word_count: 812
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m01]
---

# P-values and statistical significance

**Module.** M01 Research Methods and Evidence Literacy · **Topic.** [[P-values and statistical significance]]

## Why this matters

"Significant" appears next to almost every number in this vault's sources, and it is one of the
most reliably misread words in science reporting. Getting it right needs no new statistics - only
precision about the one narrow question a p-value answers.

## The core model

A p-value is the probability, under a model that assumes the tested hypothesis and every analysis
assumption, of a result at least as extreme as the one observed; "statistically significant" means
only that this fell below a chosen line, conventionally 0.05.
[[P18582619 Goodman 2008 Twelve P-value misconceptions#^p18582619-caution-definition|Appraisal: Goodman 2008]]
It is not the probability the hypothesis is true, and says nothing about how large or important
the effect is. [[P27209009 Greenland 2016 Statistical tests and P values#^p27209009-guide|Greenland 2016]]
The most consequential misreading treats one experiment's p-value as the probability a conclusion
is wrong.
[[P18582619 Goodman 2008 Twelve P-value misconceptions#^p18582619-error|Goodman 2008]]

Significance and size are separate: a trial can find a significant difference under one percent in
absolute risk - real, but maybe not worth acting on - while a smaller study can miss a genuinely
large effect for lack of power.
[[P23997866 Sullivan 2012 Using effect size#^p23997866-significance|Sullivan 2012]] A large
p-value is likewise not proof of no effect, only that this test did not detect one confidently.
[[P16060722 Ioannidis 2005 Why most findings are false#^p16060722-probability|Why most published research findings are false]]
A confidence interval is often misread too: it is a range compatible with the data under the
model, not a probability distribution over the true value.
[[P27209009 Greenland 2016 Statistical tests and P values#^p27209009-ci|Greenland 2016]] Whether a
result should be trusted also depends on prior plausibility, power and how many comparisons were
tried - a small, flexible study testing an implausible idea can turn up a significant result more
likely to be a false positive than real.

The threshold has shaped the literature: across twenty-five years of biomedical abstracts, the
share reporting a p-value rose sharply, values clustered right at or below 0.05, and intervals or
effect sizes appeared far less often.
[[P27209009 Greenland 2016 Statistical tests and P values#^p27209009-caution-threshold|Appraisal: Greenland 2016]]
Most methodologists now recommend leading with the effect size and its interval instead.
[[P23997866 Sullivan 2012 Using effect size#^p23997866-report|Sullivan 2012]]

## Worked example (hypothetical)

This scenario is invented for practice. A trial of 4,000 participants finds programme A beats
programme B on quiz scores by 0.6 points on a 100-point scale, p = 0.03. Under no true difference,
a gap this large would occur about 3% of the time by chance - nothing about how probable "no true
difference" itself is. A 0.6-point gap, even if real, may not justify switching programmes, which
is why the effect size and its interval, not the p-value, are what matter for a decision. And with
4,000 participants, even a tiny true difference could reach significance, so a single p-value is
not the whole story.

The defensible sentence names all three: a small, statistically significant difference was
detected; whether it matters depends on its size relative to what would justify a change, not on
the p-value alone.

## Common confusions

- "p < 0.05 means the hypothesis is probably true." A p-value says nothing about the probability
  any hypothesis is true.
- "p > 0.05 means there is no effect." It means this test did not detect one confidently, which
  can simply reflect low power.
- "A smaller p-value means a bigger effect." A p-value is shaped by sample size as much as effect
  size.

## What the sources do not establish

None supplies a replacement threshold that solves the problem outright; intervals, Bayes factors
and preregistration each address a different part of it. How much any specific pooled estimate
here has been shaped by selective reporting has to be asked of that literature specifically.

## Check yourself

1. State, in one sentence, what a p-value is a probability of.
2. Why is "p > 0.05" not the same as "no effect exists"?
3. Why can a huge sample size make significance testing misleading on its own?
4. Name two things methodologists recommend reporting alongside, or instead of, the bare p-value.

## Answer notes

1. The probability, under the tested hypothesis and every analysis assumption, of a result at
   least as extreme as the one observed.
2. It can reflect low power rather than a true absence of effect.
3. Even a trivially small, unimportant difference can become significant with enough participants.
4. The effect size with its confidence interval, and whether the analysis was preregistered as
   confirmatory.

## Next steps

- Continue to [[Lesson - Screening and diagnostic accuracy]], which runs on the same base-rate
  logic in a different setting.
- Revisit [[Effect sizes and uncertainty]] for the estimation side of the same question.
