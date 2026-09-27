---
note_type: lesson
title: "Screening and diagnostic accuracy"
module: "m01"
module_title: "Research Methods and Evidence Literacy"
lesson_order: 18
domain: [research-methods]
condition: [adhd, bipolar-i, bipolar-ii, autism, cptsd]
prerequisites: ["P-values and statistical significance", "Measurement validity and reliability"]
sources: ["P34065637", "P25451435", "P33538826"]
source_count: 3
question_count: 4
word_count: 810
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m01]
---

# Screening and diagnostic accuracy

**Module.** M01 Research Methods and Evidence Literacy · **Topic.** [[Screening and diagnostic accuracy]]

## Why this matters

A screening questionnaire produces one number, read as if it settles something. It does not. Four
related statistics decide what a positive or negative screen means, and one of the four changes
depending on where and on whom the screen is used - exactly the detail a headline tends to drop.

## The core model

Diagnostic accuracy is judged against a reference standard using four numbers. Sensitivity is the
share of people who truly have the condition whom the test flags positive; specificity the share
who truly do not have it whom it flags negative.
[[P34065637 Monaghan 2021 Sensitivity specificity and predictive values#^p34065637-definitions|Monaghan 2021]]
Those start from the true state and ask about the result; predictive values flip the question -
positive predictive value is the share of positive results that are correct, negative predictive
value the share of negative results that are correct.
[[P34065637 Monaghan 2021 Sensitivity specificity and predictive values#^p34065637-predictive|Monaghan 2021]]

Sensitivity and specificity are usually treated as fixed properties of a test, but predictive
values shift with how common the condition is in the group tested - the base rate. The same test
gives far more trustworthy positive results where the condition is common than where it is rare,
because a rare-condition setting's much larger pool of true negatives keeps generating false
positives even at high specificity.
[[P34065637 Monaghan 2021 Sensitivity specificity and predictive values#^p34065637-prevalence|Monaghan 2021]]
A widely used mood-disorder questionnaire shows this: its accuracy differed meaningfully between
psychiatric and primary-care settings, because the base rate differed.
[[P25451435 Carvalho 2015 Screening for bipolar spectrum disorders#^p25451435-accuracy|Carvalho 2015]]
[[P25451435 Carvalho 2015 Screening for bipolar spectrum disorders#^p25451435-primary|Carvalho 2015]]

The cut-off score is also a choice, trading one error for the other. A well-validated trauma
screen performed strongly overall against a structured interview, but the cut-off best on average
missed many cases in one subgroup, while a different cut-off worked better there at the cost of
more false alarms.
[[P33538826 Bovin 2021 PC-PTSD-5 accuracy in veterans#^p33538826-cutpoint|Bovin 2021]] A screen is
therefore a first step, not a verdict: a positive score opens the door to fuller assessment.
[[P34065637 Monaghan 2021 Sensitivity specificity and predictive values#^p34065637-caution-stability|Appraisal: Monaghan 2021]]

## Worked example (hypothetical)

This scenario is invented for practice. A new screen has 90% sensitivity and 90% specificity,
tested in two settings of 1,000 people each. In a specialist clinic where 20% truly have the
condition, the test catches 180 of 200 true cases and clears 720 of 800 without it, leaving 80
false positives - so of 260 positive results, about 69% are correct. In a community sample where
only 2% truly have it, the test still catches 18 of 20 true cases and clears about 882 of 980
without it, leaving 98 false positives - so of 116 positive results, only about 16% are correct.

The test did not get worse - sensitivity and specificity never changed. The base rate did,
flipping a trustworthy result into a mostly unreliable one.

## Common confusions

- "A test with 90% sensitivity and specificity gives a 90%-trustworthy result." Trustworthiness
  depends on the base rate too.
- "A screen and a diagnosis are the same thing." A positive screen indicates fuller assessment is
  warranted; it does not establish the condition.
- "One cut-off score is correct for everybody." A cut-off trades false positives against false
  negatives, and the best trade-off can differ by sample and purpose.

## What the sources do not establish

Accuracy figures for this vault's screening tools come from uneven evidence, and referral-setting
figures cannot be assumed to hold in a community sample without separate testing. A co-occurring
condition can also mean published accuracy does not describe that overlapping population.

## Check yourself

1. Explain the difference between sensitivity and positive predictive value in your own words.
2. Why can the same test give a trustworthy positive result in one setting and an unreliable one
   in another?
3. What trade-off does moving a screening cut-off score up or down create?
4. What should a person do with a positive screening result, according to this lesson?

## Answer notes

1. Sensitivity asks, among true cases, what share the test catches; positive predictive value asks,
   among positives, what share are true cases.
2. Predictive values depend on the base rate in that setting, which sensitivity and specificity
   alone do not capture.
3. Raising sensitivity increases false positives; raising specificity increases missed cases.
4. Treat it as a reason to pursue fuller assessment against a reliable reference standard, not as a
   diagnosis.

## Next steps

- Continue to [[Lesson - Measurement invariance]] for another way a measurement tool's meaning can
  shift across the people it is used on.
- Revisit [[Association versus individual prediction]] for the same base-rate logic applied to
  group-level research findings.
