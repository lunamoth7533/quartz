---
note_type: lesson
title: "Causality and counterfactuals"
module: "m01"
module_title: "Research Methods and Evidence Literacy"
lesson_order: 16
domain: [research-methods]
condition: []
prerequisites: ["Experimental designs", "Observational designs"]
sources: ["F09", "P16060722", "P29531091"]
source_count: 3
question_count: 4
word_count: 814
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m01]
---

# Causality and counterfactuals

**Module.** M01 Research Methods and Evidence Literacy · **Topic.** [[Causality and counterfactuals]]

## Why this matters

You have now met experiments, cohorts, case-control studies and qualitative work. This lesson asks
what a causal claim built on any of them actually asserts, because "X causes Y" does more
philosophical work than it looks like, and naming that work is what lets you judge whether a
design can support it.

## The core model

A causal claim says an outcome would have been different if the exposure had been different,
everything else held the same, in the same person at the same time. That comparison - the
counterfactual - is never directly observable, because any one unit only ever experiences one
condition; causal inference is the discipline of building a defensible stand-in for it.
[[F09 Noba Research designs#^f09-designs|Research Designs]]

Random assignment builds that stand-in particularly well: because groups are formed by chance, the
unexposed group is, on average, a fair substitute for what the exposed group would have looked
like without the exposure. Where randomisation is impossible, researchers approximate the same
comparison by other means - adjusting statistically, or finding real-world variation that mimics
random assignment - and each route buys credibility only under specific, checkable assumptions.

This is also why a significant result is never, on its own, a causal one. Whether a finding is
likely true depends on prior plausibility, statistical power, how many comparisons were tried, and
measurement bias - not the p-value alone.
[[P16060722 Ioannidis 2005 Why most findings are false#^p16060722-probability|Why most published research findings are false]]
Three problems can each break a causal argument alone: an unmeasured shared cause of exposure and
outcome; a sample made unrepresentative by who entered or stayed; and measurement error that
manufactures or hides an association. Each has its own remedy, which is why "adjusted for
confounders" names one specific family of threats, not a certificate of causality.

One safeguard cuts across all of this: deciding what you are testing, and how, before seeing the
results. Separating that confirmatory step from later exploration is what lets a reader tell a real
prediction from a story assembled afterward; it does not itself make a study causal, but it stops
the same data supporting several incompatible conclusions.
[[P29531091 Nosek 2018 Preregistration revolution#^p29531091-purpose|Preregistration revolution]]

## Worked example (hypothetical)

This scenario is invented for practice. A country hypothetically shifts school start times later
in one region but not another, and a year on, students in the later-start region report better
mood. No one was randomised - the change applied to whole schools for administrative reasons.

Name the counterfactual first: what this region's mood would have looked like without the change.
Since nobody assigned it at random, researchers must argue for a substitute - comparing similar
regions beforehand, or checking whether mood moved similarly elsewhere for unrelated reasons. Then
check the three failure points: a shared cause of the policy and mood (a wealthier district might
change policy sooner and have other advantages); who stayed in the sample; and whether mood was
measured the same way in both regions. None of this proves the natural experiment failed - it shows
what must be argued before the claim earns a randomised trial's confidence.

## Common confusions

- "A believable story about mechanism is enough." A plausible causal story still needs a design
  ruling out specific alternatives, not just a fitting mechanism.
- "If it's significant, it's real." Significance depends on power, prior plausibility and how many
  things were tested, not the p-value alone.
- "Statistically adjusting for confounders removes them." Adjustment only handles confounders that
  were measured.

## What the sources do not establish

The counterfactual framework states assumptions clearly; it does not supply them. It does not tell
you, for any specific finding here, whether its substitute for the missing comparison was a good
one - that judgement is made design by design.

## Check yourself

1. In your own words, what is a counterfactual, and why is it never directly observed?
2. What specific problem does random assignment solve for a counterfactual argument?
3. Name the three failure families that can each break a causal argument.
4. Why is preregistration relevant to causal inference even though it does not itself prove
   causation?

## Answer notes

1. The outcome that would have occurred under the condition that did not happen; unobserved
   because any unit experiences only one condition.
2. It builds a comparison group equivalent, on average, to the exposed group on measured and
   unmeasured characteristics.
3. Confounding, selection, and measurement bias.
4. It separates confirmatory testing from exploratory analysis, stopping the same data from
   supporting incompatible conclusions after the fact.

## Next steps

- Continue to [[Lesson - P-values and statistical significance]] to unpack the statistic this
  lesson leaned on.
- Revisit [[Bias and confounding]] for a closer look at the confounding and selection failure
  families.
