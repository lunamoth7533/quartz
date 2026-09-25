---
note_type: lesson
title: "Evidence types and causal inference"
module: "m01"
module_title: "Research Methods and Evidence Literacy"
lesson_order: 1
domain: [research-literacy]
condition: []
prerequisites: []
sources: ["F09", "P39701638"]
source_count: 2
question_count: 4
word_count: 806
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m01]
---

# Evidence types and causal inference

**Module.** M01 Research Methods and Evidence Literacy · **Topic.** [[Evidence types and causal inference]]

## Why this matters

Most arguments about mental health are really arguments about what kind of study produced a claim. Reading
well means knowing, before you evaluate the number, what the design could possibly have shown. This lesson
gives you that first filter, and it is deliberately small: three design families and one question.

## The core model

Research designs differ in what they can support. Observational designs describe what co-occurs: surveys,
cohorts and case-control studies can show that two things travel together, and they can estimate how strongly.
Experimental designs manipulate a variable, and when assignment is random and the comparison is fair, they can
support causal inference about that manipulation.
[[F09 Noba Research designs#^f09-designs|Research Designs]]

Correlation alone does not establish direction or rule out a third explanation. If two variables move together,
the first could cause the second, the second could cause the first, or a third factor could drive both. That is
not a technicality; it is the reason the word "linked" is doing so much work in health headlines.
[[F09 Noba Research designs#^f09-correlation|Research Designs]]

Confounding and selection effects are the mechanisms by which comparisons get distorted, which is exactly why
random assignment and control groups exist: they make the comparison groups more alike than convenience would.
[[F09 Noba Research designs#^f09-confounds|Research Designs]]

One more layer matters when you read reviews. Statistical analyses of trial components can add detail to an
average effect across many studies without establishing what will happen for one person, because the analysis
is still describing a distribution of trial averages.
[[P39701638 Ostinelli 2025 Comparative interventions for ADHD#^p39701638-caution-absence|AI synthesis: Comparative efficacy of ADHD interventions in adults]]

## Worked example (hypothetical)

This scenario is invented for practice. A headline says: "Poor sleep causes low mood in students." The study
behind it asked 2,000 students to report sleep and mood once, then reported a correlation.

Ask the design question first. A one-time self-report of two variables can show co-occurrence; it cannot show
order. To support the causal reading, you would need something like: sleep measured objectively before mood,
repeated over time; an intervention that changes sleep while holding other routines steady; or at least a
longitudinal design with the plausible confounders (stress, work load, health, medication) measured and
modelled. Even then, the causal claim would be about the change produced by that manipulation in that
population, not about "causing" mood in general.

The honest summary sentence is: "In that sample, students who reported poorer sleep also reported lower mood;
the design cannot say which came first."

## Common confusions

- "Randomised means true." Randomisation removes some threats to inference; it does not fix measurement error,
  selective reporting or a sample that cannot answer your question.
- "Correlation tells us nothing." It tells you association is present. That is often a useful start and never
  a finish.
- "A hierarchy decides." A large, well-measured cohort can be more informative than a small, flawed trial; the
  hierarchy is a starting point, not a verdict.

## What the sources do not establish

The design lesson is a teaching source written for a general audience and simplifies; it does not cover
instrumental-variable, regression-discontinuity or natural-experiment families in detail. Nothing in the
evidence base of this vault can be upgraded from association to causation because the association is strong or
frequently replicated; that step needs a design that supports it, or explicit labelling as inference.

## Check yourself

1. A study finds that people who use a certain coping strategy have lower anxiety, measured at one time point.
   What causal step is missing?
2. What does random assignment actually change about the comparison groups?
3. Why can a component analysis of 113 trials still fail to tell you what helps one person?
4. Take one claim you currently believe about attention or mood; write the design that could test it causally.

## Answer notes

1. Direction and confounding are both missing: the strategy might reduce anxiety, anxiety might reduce use of
   the strategy, or a third factor could drive both.
2. It makes the groups statistically comparable on measured and unmeasured factors at baseline, weakening
   confounding and selection explanations for later differences.
3. Because it estimates average contributions across study populations and protocols; individual response,
   context and effect modification are not identified by the aggregate.
4. A fair answer names a manipulation, a randomised comparison where possible, a pre-specified outcome and a
   population; "test it causally" without those details is not yet a design.

## Next steps

- Continue to [[Lesson - Bias and confounding]] for how comparisons get distorted even when the design is right.
- Use the checklist in [[Learning Hub]] to keep the design question first when you read any claim in this vault.
