---
note_type: lesson
title: "Replication and publication bias"
module: "m01"
module_title: "Research Methods and Evidence Literacy"
lesson_order: 22
domain: [research-methods]
condition: []
prerequisites: ["P-values and statistical significance", "Meta-analysis and review limits"]
sources: ["P26315443", "P33954258", "P39110675"]
source_count: 3
question_count: 4
word_count: 817
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m01]
---

# Replication and publication bias

**Module.** M01 Research Methods and Evidence Literacy · **Topic.** [[Replication and publication bias]]

## Why this matters

Every effect size in this vault passed through a filter before publication: studies with a
positive, significant, novel result are more likely to be written up and accepted than studies
that found nothing. That filter operates before you read a paper, so treating a single published
effect as the final word is usually a mistake, however careful the study looked.

## The core model

A coordinated project repeated 100 psychology experiments and correlational studies with high
statistical power, using original materials where possible. The replications reached significance
in 36% of cases against 97% of the originals, and replicated effects averaged about half the
original size.
[[P26315443 Open Science Collaboration 2015 Reproducibility#^p26315443-design|Estimating the reproducibility of psychological science]]
[[P26315443 Open Science Collaboration 2015 Reproducibility#^p26315443-result|Estimating the reproducibility of psychological science]]
That headline is not one fixed law: results varied across journals and subfields, so it describes
a distribution of outcomes rather than one rate for every literature.
[[P26315443 Open Science Collaboration 2015 Reproducibility#^p26315443-scope|Estimating the reproducibility of psychological science]]

The explanation does not require bad faith. Low power, analysis flexibility, selective reporting
of what worked, and a publication system rewarding positive findings can together inflate a
literature without any one study being fraudulent.
[[P33954258 Munafo 2017 Reproducible science#^p33954258-framing|A manifesto for reproducible science]]
Because meta-analyses pool published studies, this filter flows straight into every review built
on top of it, so a pooled estimate can look precise while carrying the same upward bias as its
inputs. Structural fixes work better than after-the-fact corrections: registering an analysis plan
before seeing data, and reviewing methods before results are known, change what gets through the
filter in the first place.
[[P33954258 Munafo 2017 Reproducible science#^p33954258-practices|A manifesto for reproducible science]]

The record is not uniformly bleak. Among highly cited clinical intervention studies that had ever
been formally replicated, 20 of 24 held up with no systematic sign of shrinkage - notably better
than the psychology-wide figure, though most studies in that pool had never been replicated at
all, and the comparison covers only the minority that had.
[[P39110675 da Costa 2024 Replicability of highly cited clinical research#^p39110675-rate|da Costa 2024]]
[[P39110675 da Costa 2024 Replicability of highly cited clinical research#^p39110675-limit|da Costa 2024]]

## Worked example (hypothetical)

This scenario is invented for practice. An original study reports a study technique boosts recall
by a large margin; a well-powered independent replication a year later finds a much smaller,
non-significant effect. Resist both easy readings: it is not proof the original researchers erred
- publication bias and ordinary low power can inflate a finding without misconduct - and it is not
proof the technique does nothing, since a failed replication is information about size and
reliability, not an automatic verdict, especially as populations and settings can differ.

The reasonable step is neither "debunked" nor "confirmed" but an updated estimate: treat the
original effect as an upper bound, weigh the replication's larger sample appropriately, and look
for a preregistered direct replication before concluding either way.

## Common confusions

- "A failed replication means the original researchers did something wrong." Low power and
  publication incentives can inflate a finding without misconduct.
- "One successful replication settles the question." A single replication is one more data point,
  not a final verdict.
- "Published effect sizes are unbiased estimates of the truth." Published effects are filtered
  toward significance, which tends to inflate them.

## What the sources do not establish

The reproducibility project describes psychology specifically, with outcomes varying by subfield
rather than one universal number; extending its 36% figure to other fields is not something that
project supports. The clinical replication study covers only the minority of studies that had a
replication attempt, so it cannot speak to how the rest would have fared.

## Check yourself

1. What two headline numbers came out of the large psychology replication project, and what do
   they mean?
2. Name three mechanisms that can inflate a published literature without requiring misconduct.
3. Why does publication bias affect meta-analyses even when the pooling itself is done correctly?
4. What did the clinical-research replication study find that qualifies the psychology-wide
   pattern?

## Answer notes

1. 36% of replications reached significance versus 97% of originals, with effects about half the
   original size.
2. Low power, analysis flexibility, and selective reporting of positive results.
3. A meta-analysis pools published studies already filtered toward significance, so the pooled
   estimate inherits that filter.
4. Highly cited clinical replications mostly held up without systematic inflation, though most
   such studies had no replication attempt at all.

## Next steps

- Continue to [[Lesson - Translational validity]] for what happens when a well-replicated finding
  still has to cross into a different species, setting or population.
- Revisit [[Meta-analysis and review limits]] to connect this filter back to how a pooled estimate
  is built.
