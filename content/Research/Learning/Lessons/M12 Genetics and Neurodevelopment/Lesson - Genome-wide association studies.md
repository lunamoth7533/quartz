---
note_type: lesson
title: "Genome-wide association studies"
module: "m12"
module_title: "Genetics and Neurodevelopment"
lesson_order: 5
domain: [genetics-neurodevelopment, research-methods]
condition: []
prerequisites: ["Common and rare variants"]
sources: ["F67", "P28686856", "P29844615"]
source_count: 3
question_count: 3
word_count: 796
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m12]
---
# Genome-wide association studies

**Module.** M12 Genetics and Neurodevelopment · **Topic.** [[Genome-wide association studies]]

## Why this matters

A genome-wide association study, or GWAS, is the workhorse design behind most "loci found" headlines quoted across this library's condition pages. Reading a GWAS result well means knowing how much a "hit" actually establishes - less than most coverage implies.

## The core model

A GWAS compares genetic variants across a large sample to find markers statistically associated with a trait, without assuming which gene is involved: researchers genotype many people, compare variant frequencies between groups or against a continuous trait, and apply a strict threshold because a million or more variants are tested at once. [[F67 NHGRI GWAS fact sheet#^f67-design|GWAS fact sheet]]

The single most important thing to hold onto: a significant signal marks a region statistically associated with the trait in that sample - not the causal variant, the responsible gene, or how it acts.

Because effects are small, GWAS needs scale: very large samples and replication before a signal is credible. One structural threat is population stratification - if cases and controls differ in ancestry, a variant simply more common in one group can look falsely associated. Ancestry matching, statistical adjustment and within-family designs are the standard defences, which is why cross-ancestry replication is treated as a real quality marker. [[F67 NHGRI GWAS fact sheet#^f67-design|GWAS fact sheet]] [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-design|10 years of GWAS discovery]]

Getting from a signal to a mechanism takes further work. A GWAS peak marks a region where many nearby variants are inherited together (linkage disequilibrium), so identifying which is causal requires fine-mapping, narrowing the region to a "credible set" of candidates for functional follow-up - but even a well-fine-mapped result has not yet established a mechanism. [[P29844615 Schaid 2018 Fine-mapping#^p29844615-methods|Fine-mapping]]

Over roughly two decades this design has produced on the order of ten thousand robust variant-trait associations across hundreds of traits, and is one of the main reasons the field now describes most psychiatric conditions as highly polygenic rather than caused by one gene. [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-discovery|10 years of GWAS discovery]] That is a genuine discovery about population-level architecture, not individual causal stories - the distinction this domain keeps returning to.

## Worked example (hypothetical)

This scenario is invented for practice. A fictional GWAS of "sleep irregularity" in 500,000 people reports a significant peak on chromosome 9, and an article writes: "Researchers pinpoint the sleep-irregularity gene." Separate the four steps a claim like this can occupy. Association: the study shows a statistical link between variants in that region and the trait - established, given adequate sample size and replication. Fine-mapping: has the signal been narrowed to a small credible set of variants? If unmentioned, no. Mechanism: has any variant been shown, in cells or tissue, to change expression or function? Almost certainly not this early. Prediction: does the finding predict sleep irregularity in a new person with useful accuracy? No - a single locus explains a tiny fraction of a polygenic trait. The honest headline: "a region on chromosome 9 is associated with sleep irregularity in this sample" - real, just far narrower than "the gene" implies.

## Common confusions

- "A GWAS hit identifies the causal gene." It identifies a region; fine-mapping and functional work are needed to move toward a variant and mechanism.
- "A GWAS result lets you predict who will develop a trait." Individual-level prediction is a separate, much harder claim than population-level association.
- "Replication in one ancestry group is enough." Effect estimates can differ across ancestries, so cross-ancestry replication is part of what makes a finding trustworthy.

## What the sources do not establish

GWAS methodology is mature and its locus lists for psychiatric traits are large and reproducible; the biological interpretation of most loci - what they do, in which cells, at which stage - remains incomplete, and discovery samples are still dominated by European-ancestry participants.

## Check yourself

1. What does a genome-wide-significant signal establish, and what does it not establish by itself?
2. Why does population stratification pose a particular risk for GWAS, and how is it managed?
3. What is the role of fine-mapping, and what does it stop short of showing?

## Answer notes

1. A statistical association between a genomic region and the trait in that sample; not by itself the causal variant, gene, or mechanism.
2. If cases and controls differ in ancestry, a variant more common in one group can look spuriously associated; ancestry matching, statistical adjustment and within-family designs guard against this.
3. Fine-mapping narrows a broad signal to a smaller credible set of candidates; it does not by itself establish the mechanism by which any of them acts.

## Next steps

- Continue to [[Lesson - Polygenic scores and prediction]].
- See also [[Genetic inference and polygenic scores]] for how this design's results feed causal-inference methods such as Mendelian randomisation.
