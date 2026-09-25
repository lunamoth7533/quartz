---
note_type: lesson
title: "Bias and confounding"
module: "m01"
module_title: "Research Methods and Evidence Literacy"
lesson_order: 2
domain: [research-literacy]
condition: []
prerequisites: ["Evidence types and causal inference"]
sources: ["F09", "P40154799", "F22"]
source_count: 3
question_count: 4
word_count: 800
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m01]
---

# Bias and confounding

**Module.** M01 Research Methods and Evidence Literacy · **Topic.** [[Bias and confounding]]

## Why this matters

Two studies can both be honest and competent and still disagree, because they compared different people in
different ways. Bias and confounding are the vocabulary for that problem. They are also the most common way a
true sentence becomes a false one when it is moved from a study into a claim about a person.

## The core model

Bias is a systematic distortion that pushes results away from the truth in a particular direction. Confounding
is the special case in which a third factor is associated with both the exposure and the outcome, so the
exposure-outcome relationship is partly or wholly explained by that factor.
[[F09 Noba Research designs#^f09-confounds|Research Designs]]

The design lesson names two consequences directly: confounding and selection effects distort comparisons, and
random assignment with controlled outcomes exists to weaken those explanations.
[[F09 Noba Research designs#^f09-confounds|Research Designs]]

Bias is not only created by reviewers. A systematic review of psychological interventions for complex trauma
reports some indications of publication bias in its own evidence base, alongside moderated results.
[[P40154799 Hu 2025 Psychological interventions for CPTSD#^p40154799-moderators|Psychological interventions for complex PTSD]]
That matters because pooled effects are only as good as the studies that reached them; a review inherits the
bias of its inputs. Cochrane guidance responds to the same problem by requiring an explicit certainty rating
for each important outcome, weighing risk of bias, imprecision, inconsistency, indirectness and publication
bias.
[[F22 Cochrane Handbook for Systematic Reviews of Interventions#^f22-certainty|Cochrane Handbook]]

There is a discipline in this lesson: naming a bias does not measure it. To move past naming, you need either a
design that removes the suspect pathway, a measured variable that lets you model it, or a sensitivity analysis
that shows how much the estimate would move. Otherwise "confounded" is itself an untested claim.

## Worked example (hypothetical)

This scenario is invented for practice. A cohort study reports that people who attended a psychoeducation
programme had fewer hospitalisations over two years than people who did not. The difference is real in the data.

Ask three questions. Was attendance self-selected? Yes, people chose the programme. What predicts attendance?
Probably a combination of motivation, illness stability, family support, insurance and travel distance. Do those
predict hospitalisation independently? Plausibly, yes. That makes each of them a candidate confounder rather
than an explanation that has been ruled out.

A fair summary says: "Attendance was associated with fewer hospitalisations; because attendance was not
randomised, part or all of the difference may reflect who chose to attend." A randomised trial of the programme
would change that sentence, and so would a cohort that measured stability and support well enough to model them.

## Common confusions

- "Confounded means wrong." It means the causal reading is not yet supported; the association may still be real
  and useful.
- "More variables fix it." Adding variables that are consequences of the exposure can create new bias rather
  than removing it; the choice of adjustment set is a design decision, not a checklist.
- "Bias accusations are neutral." They are directional claims and should be specific: who is missing, which way
  would that move the estimate, and how would we know?

## What the sources do not establish

The teaching source is introductory and does not cover causal graphs, collider bias or quantitative bias
analysis. This vault has no source that quantifies how much publication bias affects the complex-trauma
meta-analysis; the meta-analysis reports an indication, not a corrected estimate.

## Check yourself

1. Define confounding in one sentence without using the word "cause".
2. Why is a review's own certainty rating a response to bias rather than a measurement of it?
3. Give one confounder for a study comparing people who take medication with people who do not.
4. For one source in this library, name a bias that would move the result and the direction you expect.

## Answer notes

1. A third factor associated with both the exposure and the outcome that can distort the apparent relationship
   between them.
2. It is a structured judgement about how much the estimate should be trusted given known threats; it does not
   estimate the size of the bias.
3. Illness severity is the classic example: it predicts both treatment and outcome, and it is often measured
   imperfectly.
4. A fair answer names the source, the missing or distorted element, and a direction (for example, dropout of
   the least-improved participants would overstate benefit).

## Next steps

- Continue to [[Lesson - Reading a study and matching populations]] to see how populations and measures carry
  the same problem into each new context.
- Re-read the analyst cautions in this vault with this lesson in mind; that is where design limits are recorded.
