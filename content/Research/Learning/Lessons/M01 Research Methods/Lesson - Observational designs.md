---
note_type: lesson
title: "Observational designs"
module: "m01"
module_title: "Research Methods and Evidence Literacy"
lesson_order: 13
domain: [research-methods]
condition: []
prerequisites: ["Experimental designs", "Bias and confounding"]
sources: ["F09", "P17941715", "P16060722"]
source_count: 3
question_count: 4
word_count: 805
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m01]
---

# Observational designs

**Module.** M01 Research Methods and Evidence Literacy · **Topic.** [[Observational designs]]

## Why this matters

Most of what is known about long-term course, risk factors and rare outcomes in this vault comes
from observational studies, because many exposures cannot or should not be assigned to people.
Reading this evidence well means knowing which of three designs produced a claim, and what each
can and cannot rule out.

## The core model

A cohort study follows a group forward and records who develops an outcome, which allows
incidence and temporal order to be estimated - at the cost of long follow-up and attrition.
[[F09 Noba Research designs#^f09-designs|Research Designs]] A case-control study works backwards,
starting from people who already have the outcome and looking back at exposure; that is efficient
for rare outcomes, but leans on memory and records, and the choice of comparison group becomes
part of what the estimate means.

A cross-sectional study measures exposure and outcome at the same moment - cheap, but unable to
say which came first, making it the weakest of the three for any claim about order or cause.
[[F09 Noba Research designs#^f09-correlation|Research Designs]] None of the three assigns
anything, so a difference between groups can always be explained by a third factor rather than the
exposure itself. [[F09 Noba Research designs#^f09-confounds|Research Designs]] That is also why
observational estimates tend to run larger than what later randomised studies of the same question
find.
[[P16060722 Ioannidis 2005 Why most findings are false#^p16060722-probability|Why most published research findings are false]]

None of this makes these designs a lesser fallback: exposures that are harmful, fixed at birth, or
unfold over decades cannot ethically be randomised, so a cohort, case-control study or natural
experiment is the only route to an answer, and their realism and long horizons are strengths an
experiment cannot match. A widely used checklist sets out what such a study should report about
its design, sampling and confounding.
[[P17941715 Vandenbroucke 2007 STROBE#^p17941715-purpose|STROBE]] Its own authors are explicit
this is a floor, not a ceiling: a fully reported study can still be biased, because reporting
completeness and study quality are different properties.
[[P17941715 Vandenbroucke 2007 STROBE#^p17941715-limits|STROBE]]

## Worked example (hypothetical)

This scenario is invented for practice. Researchers want to know whether a rare workplace
exposure is associated with a condition that develops in a small fraction of exposed people, years
later. A cohort design means recruiting exposed and unexposed workers now and following both for
years - accurate about timing, but slow, and needing a very large sample for a rare outcome. A
case-control design instead starts from people who already have the condition and matched people
who do not, asking both about past exposure - far more efficient, but now depending on recall and
on whether the comparison group was chosen fairly. A cross-sectional survey would be weakest here:
it could not even establish that exposure came before the condition.

The honest conclusion is not that case-control is best in general - it fits this question's
constraints, provided the authors report how comparisons were selected and exposure measured.

## Common confusions

- "Observational means low quality by default." A large, well-measured observational study can be
  more informative than a small, poorly targeted experiment.
- "Cross-sectional data can show what changed first." It cannot; exposure and outcome are captured
  at the same moment.
- "A checklist like STROBE certifies a study is sound." It certifies the study reported enough for
  a reader to judge that.

## What the sources do not establish

The reporting checklist behind this lesson governs transparency, not validity, and does not
measure how much bias any particular study carries. General design guidance does not settle how
much confounding remains in a specific comparison; that has to be judged study by study.

## Check yourself

1. Why is a case-control design often chosen for a rare outcome?
2. Name one cost specific to a cohort design and one specific to a case-control design.
3. Why can a cross-sectional study never resolve which of two associated variables came first?
4. What does passing a reporting checklist tell you, and what does it not tell you?

## Answer notes

1. It samples by outcome rather than waiting for a rare event in a followed cohort, needing far
   fewer participants.
2. Cohort: long follow-up and attrition. Case-control: recall accuracy and comparison-group
   selection.
3. It measures exposure and outcome at one shared moment, so the data contain no information about
   order.
4. That the study reported enough to be judged; not that it is free of bias or confounding.

## Next steps

- Continue to [[Lesson - Longitudinal and within-person inference]] to see what following people
  over time adds beyond a single cohort comparison.
- Compare with [[Causality and counterfactuals]] for why none of these designs alone settles a
  causal question.
