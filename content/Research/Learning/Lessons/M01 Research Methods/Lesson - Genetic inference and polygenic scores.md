---
note_type: lesson
title: "Genetic inference and polygenic scores"
module: "m01"
module_title: "Research Methods and Evidence Literacy"
lesson_order: 9
domain: [research-literacy]
condition: []
prerequisites: ["Association versus individual prediction"]
sources: ["P28686856", "F07", "P39843750"]
source_count: 3
question_count: 4
word_count: 830
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m01]
---

# Genetic inference and polygenic scores

**Module.** M01 Research Methods and Evidence Literacy · **Topic.** [[Genetic inference and polygenic scores]]

## Why this matters

Genetics is where numbers are most easily mistaken for destinies. The chain from heritability to associated
variants to a polygenic score has three different meanings, and each link is a place where a population
statistic gets rewritten as a personal prediction. This lesson walks the chain.

## The core model

Heritability describes how much of the variation in a trait, in a studied population and its environments, is
associated with genetic differences. It is not the proportion of one person's trait that is genetic.
[[F07 OpenStax Human genetics#^f07-heritability|Human Genetics]]

Genome-wide association studies test many variants at once. By their tenth year they had produced roughly ten
thousand robust trait-variant associations, and the picture is highly polygenic: many loci with individually
small effects, often odds ratios near 1.01 for common diseases.
[[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-discovery|10 Years of GWAS Discovery]];
[[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-polygenic|10 Years of GWAS Discovery]]

The "missing heritability" gap narrowed as sample sizes grew: by 2014, height variants explained more than
twenty percent of heritability.
[[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-heritability|10 Years of GWAS Discovery]]

A polygenic score is built by estimating variant effects in a discovery sample and applying them in an
independent sample; the main driver of prediction accuracy is the size of the discovery sample.
[[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-prs|10 Years of GWAS Discovery]]

The bipolar literature shows the scale and the limit: 298 loci and 36 credible genes in a very large
multi-ancestry analysis, with the authors describing the architecture as statistical rather than personally
predictive.
[[P39843750 O'Connell 2025 Genomics of bipolar disorder#^p39843750-loci|Bipolar disorder genomics]];
[[P39843750 O'Connell 2025 Genomics of bipolar disorder#^p39843750-caution-prediction|AI synthesis: Bipolar disorder genomics]]

Turning a score into a personal statement requires calibration in a comparable population and evidence that
using it changes decisions for the better. Without that, the score is a distributional statement about a
sample.
[[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-caution-individual|AI synthesis: 10 Years of GWAS Discovery]]

## Worked example (hypothetical)

This scenario is invented for practice. A direct-to-consumer report tells someone they are in the "top 5%" for
a polygenic score for a psychiatric condition.

Trace the chain. Which discovery sample produced the score, and how well does that sample match the person's
ancestry, age and environment? What is the condition's definition in the discovery study, and does it match the
clinical construct? How was the score calibrated — against what base rate, in what population? What threshold
is "top 5%" relative to, and what does the report claim it changes? Finally, what decision would the person
change based on it, and is there evidence that the change improves outcomes?

The honest interpretation: the score locates the person within a distribution derived from other people, with
accuracy that depends on population match, and it does not by itself carry a personal probability or a
clinical action. That is not a statement about whether genetics matters; it is a statement about what a score
can and cannot support.

## Common confusions

- "Heritability tells me how genetic my condition is." It describes variation in a population; environments
  and populations change the number.
- "A high score means high risk." Without calibration, rank in a distribution is not a personal probability.
- "No individual prediction means genetics is irrelevant." Polygenic and rare-variant findings shape biology
  and research programs; they are just not personal forecasts yet.

## What the sources do not establish

The GWAS review is now several years old and its sweep of the field has been overtaken by larger and more
multi-ancestry studies, including the bipolar study cited here. Neither source provides a validated clinical
score or a decision threshold, and this vault does not attempt to interpret anyone's genetic results.

## Check yourself

1. What is the difference between heritability and individual genetic determination?
2. Why does discovery-sample size dominate polygenic score accuracy?
3. What additional evidence is needed before a score could inform a screening decision?
4. Why is ancestry representation a scientific issue and not only a fairness issue?

## Answer notes

1. Heritability is a population-level proportion of variance; individual determination is a different claim
   that heritability cannot support.
2. Because individual variant effects are tiny and noisy; larger samples estimate them more precisely, which is
   what the score's accuracy depends on.
3. Calibration in a comparable population, a defined threshold, external validation, and evidence that acting
   on the score improves outcomes.
4. Because linkage patterns, allele frequencies and environmental contexts differ across populations, so
   prediction accuracy and calibration change when a score is moved.

## Next steps

- Continue to [[Lesson - Co-occurrence and differential reasoning]] for another reasoning problem that is
  easier to over-simplify than to use well.
- Compare this lesson with [[Bipolar genetics and polygenic risk]] and [[Autism genetics and rare variants]].
