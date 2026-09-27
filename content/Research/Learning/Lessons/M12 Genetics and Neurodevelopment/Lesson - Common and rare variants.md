---
note_type: lesson
title: "Common and rare variants"
module: "m12"
module_title: "Genetics and Neurodevelopment"
lesson_order: 4
domain: [genetics-neurodevelopment]
condition: []
prerequisites: ["Inheritance and variation"]
sources: ["F67", "P31981491", "P28686856"]
source_count: 3
question_count: 3
word_count: 800
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m12]
---
# Common and rare variants

**Module.** M12 Genetics and Neurodevelopment · **Topic.** [[Common and rare variants]]

## Why this matters

Two genetic study designs dominate this domain - genome-wide association and sequencing - built to find different things. Confusing them is how a "no common-variant signal" result gets misread as "genetics doesn't matter here," when it may simply mean the study looked in the wrong place.

## The core model

Common variants are present in a substantial share of a population and individually have tiny effects - often odds ratios near 1.01 - so credible detection needs very large samples, replication, and testing millions of variants at once. Combined into a polygenic score, they can account for a meaningful share of how a trait varies across a population, even though each one alone explains almost nothing. [[F67 NHGRI GWAS fact sheet#^f67-design|GWAS fact sheet]] [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-polygenic|10 years of GWAS discovery]]

Rare variants sit at the other end of the spectrum: uncommon, sometimes brand-new in a family (de novo), and capable of substantially larger effects. They are detected by sequencing, often with family data, since association-style designs lack enough carriers to find them. A large autism sequencing study identified 102 risk genes this way, clustered in gene regulation and neuronal communication and expressed early in development. [[P31981491 Satterstrom 2020 Autism exome sequencing#^p31981491-model|Autism exome sequencing]]

These are two regimes rather than one sliding scale because of a detection trade-off: association studies are powered for common, small-effect variants; sequencing is powered for rare, larger-effect variants by reading each person's sequence directly. Neither samples the whole space, so neither one's silence rules out the other.

That matters for reading a null result: a study with no significant common-variant association tells you nothing about whether rare variants of larger effect are involved - it was not built to see them. The reverse holds too: a rare-variant finding in a handful of families does not estimate how much of the trait, population-wide, that regime explains.

The two regimes are not competitors. A single condition can be shaped by both at once, and modern genomic studies increasingly look for both, sometimes finding they point at overlapping biology despite being detected by entirely different methods. [[F67 NHGRI GWAS fact sheet#^f67-meaning|GWAS fact sheet]]

## Worked example (hypothetical)

This scenario is invented for practice. Two fictional teams study "trait Q." Team A runs a genome-wide association study in 200,000 unrelated adults and finds no genome-wide-significant variant. Team B sequences 300 family trios and finds several de novo variants clustered in a small set of signalling genes. A summary claims the studies "contradict" each other. Team A's design is powered for common, small-effect variants, not rare, family-specific ones; Team B's is powered for exactly the rare, larger-effect variants it found, but is far too small to detect the tiny common-variant effects typical of complex traits. The accurate reading: the studies answer different questions and are consistent - trait Q may simply need a larger common-variant sample while still having an identifiable rare-variant component.

## Common confusions

- "No signal in a GWAS means the trait isn't genetic." It may only mean the common-variant signal needs a larger sample, or that rare variants play the larger role.
- "Rare-variant findings tell you how much of the population's cases they explain." A rare-variant study identifies genes and mechanisms; population-level contribution needs a different, larger design.
- "The two variant classes should always agree." They are detected by different methods in different samples and can validly tell partially different stories.

## What the sources do not establish

Detection methods for both variant classes are well established; the full architecture of most psychiatric conditions - how much each regime contributes, and how they interact - is characterised only in general terms, and effect-size estimates keep shifting as samples grow.

## Check yourself

1. Why do common-variant studies need very large samples while rare-variant studies often use family data instead?
2. Does a null result in a genome-wide association study rule out a genetic contribution from rare variants? Why or why not?
3. Can a single condition be influenced by both common and rare variants? What does that imply for interpreting either kind of study alone?

## Answer notes

1. Common variants have very small individual effects, needing huge samples to detect reliably; rare variants are uncommon enough that family data helps confirm they are real and, where relevant, de novo.
2. No - a null common-variant result reflects what that design could detect, not the full genetic picture; rare variants require a sequencing design.
3. Yes; a study of one type alone gives an incomplete picture, and a full account usually needs both approaches.

## Next steps

- Continue to [[Lesson - Genome-wide association studies]].
- See also [[Lesson - Polygenic scores and prediction]] for how common-variant findings are aggregated into a single research measure.
