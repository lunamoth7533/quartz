---
note_type: topic
title: "Genome-wide association studies"
description: "How GWAS works, what an association peak means, and the inference steps between a signal and a mechanism."
content_layer: reference
concept_kind: method
domain: [genetics-neurodevelopment, research-methods]
secondary_domain: []
condition: []
source_count: 3
reviewed: 2026-09-25
cssclasses: [research-topic]
tags: [research/topic, research/reference, research/domain/genetics, research/domain/methods]
---
# Genome-wide association studies

## Definition

A genome-wide association study tests hundreds of thousands to millions of common variants for statistical association with a trait across a large sample, without pre-selecting candidate genes.

## How it works

**Design.** Researchers genotype many individuals, compare variant frequencies between groups or against a continuous trait, and apply a stringent significance threshold because of the number of tests. [[F67 NHGRI GWAS fact sheet#^f67-design|GWAS fact sheet]]

**Interpretation.** A significant signal marks a genomic region associated with the trait in that population; it does not identify the causal variant, the gene or the mechanism. [[F67 NHGRI GWAS fact sheet#^f67-meaning|GWAS fact sheet]]

**Scale and replication.** Most complex-trait effects are small, so very large samples and replication are required before a signal is credible. [[F67 NHGRI GWAS fact sheet#^f67-scale|GWAS fact sheet]]

**Follow-through.** Fine-mapping constructs credible sets of variants consistent with the data, which can then be prioritised for functional work. [[P29844615 Schaid 2018 Fine-mapping#^p29844615-methods|Fine-mapping]]

## Evidence and status

GWAS methodology is mature; the resulting locus lists for psychiatric traits are substantial and reproducible, while the biological interpretation of most loci remains incomplete.

> [!info]- In depth: the method, its outputs and the steps it does not take
> **The design.** A genome-wide association study compares variants across a large sample to find markers statistically associated with a trait, without assuming which gene is involved. Association identifies a region of the genome associated with a trait in a population; it does not by itself identify the causal variant or show how the variant acts. [[F67 NHGRI GWAS fact sheet#^f67-design|GWAS fact sheet]] [[F67 NHGRI GWAS fact sheet#^f67-meaning|GWAS fact sheet]] [[F67 NHGRI GWAS fact sheet#^f67-limit|GWAS fact sheet]]
>
> **What the enterprise produced.** Roughly ten thousand robust trait-variant associations across hundreds of traits, evidence that complex traits are highly polygenic, and a narrowing of the missing-heritability gap as samples grew - height variants explained more than twenty percent of heritability by 2014. The review covers prediction, causal inference such as Mendelian randomisation, and biological follow-up, so the design feeds several downstream literatures. [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-discovery|10 years of GWAS discovery]] [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-heritability|10 years of GWAS discovery]] [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-translation|10 years of GWAS discovery]]
>
> **The step between association and mechanism.** A genome-wide signal marks a region in linkage disequilibrium, so identifying which variant is causal requires additional statistical and functional work; fine-mapping constructs credible sets of variants consistent with the data and can be combined with functional annotation. Fine-mapping narrows candidates; it does not establish the mechanism by which a variant acts, and results depend on sample size and ancestry. [[P29844615 Schaid 2018 Fine-mapping#^p29844615-problem|Fine-mapping]] [[P29844615 Schaid 2018 Fine-mapping#^p29844615-methods|Fine-mapping]] [[P29844615 Schaid 2018 Fine-mapping#^p29844615-limits|Fine-mapping]]
>
> **Power and portability.** Power depends on the number of loci, their effect sizes, sample size, genotyping panel and trait measurement, and the field's data are dominated by European-ancestry samples, which limits portability of effect estimates elsewhere. A well-powered study in one ancestry group is not automatically informative for another. [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-design|10 years of GWAS discovery]] [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-limit|10 years of GWAS discovery]]
>
> **Reading rule.** Separate four inferential steps - association, fine-mapping, mechanism and prediction - and say which one a claim occupies. Most reporting collapses them, which is how a peak in a Manhattan plot becomes a story about a gene. [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-caution-individual|AI appraisal: 10 years of GWAS discovery]] [[F67 NHGRI GWAS fact sheet#^f67-scale|GWAS fact sheet]]
>
> **What the catalogue of associations is for.** Ten thousand robust associations across hundreds of traits are less valuable as individual findings than as a population map: they establish which traits are polygenic, which loci are shared across traits, and where the biology of unexpected pairs intersects. That map-level reading is what turned GWAS from a gene-hunting tool into an architecture-description tool, and it is the reading the psychiatric-genomics results in this library depend on. [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-discovery|10 years of GWAS discovery]]
>
> **Population stratification is the design's characteristic confound.** If cases and controls differ in ancestry, any variant more common in one ancestry group shows a spurious association; the design's standard defences - ancestry matching, principal-component adjustment, within-family designs - each handle part of the problem, which is why multi-ancestry designs and replication across ancestries are treated as quality markers rather than courtesies. [[F67 NHGRI GWAS fact sheet#^f67-design|GWAS fact sheet]] [[F67 NHGRI GWAS fact sheet#^f67-scale|GWAS fact sheet]]
>
> **Cross-domain connection (curation).** Mendelian randomisation - the methods domain's instrument-based causal design - borrows GWAS's variants as instruments; the validity of those instruments inherits the stratification and pleiotropy issues this design manages, so the two articles are one argument in two parts. [[Causality and counterfactuals]] [[Genetic inference and polygenic scores]]

## Connections

This method produces the data used in [[Polygenic scores and prediction]], and it is the standard example in the methods domain of a design whose inference is statistical rather than mechanistic.

## Uncertainties

- Annotations and pathway analyses of GWAS hits depend on reference datasets with their own coverage gaps.
