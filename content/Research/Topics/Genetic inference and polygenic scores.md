---
note_type: topic
title: "Genetic inference and polygenic scores"
domain: [research-literacy]
condition: []
source_count: 6
cssclasses: [research-topic]
tags: [research/topic, research/domain/research-literacy]
content_layer: reference
concept_kind: method
description: "How polygenic scores are built and validated, why transfer across populations is limited, and what individual-level inference they cannot support."
secondary_domain: [research-methods]
reviewed: 2026-09-25
---

# Genetic inference and polygenic scores

**Definition.** Genetic inference moves from heritability to associated variants to polygenic scores, and each step answers a population question rather than a personal one. [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-discovery|10 Years of GWAS Discovery]]

## Supported claims

- Genome-wide association studies have produced roughly ten thousand robust trait-variant associations, showing that complex traits are highly polygenic with individually small effects. [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-discovery|P28686856]]; [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-polygenic|P28686856]]
- Heritability estimates describe variation within a studied population and its environment, not the degree to which one person's traits are determined. [[F07 OpenStax Human genetics#^f07-heritability|OpenStax Human genetics]]
- Polygenic scores are built by estimating variant effects in a discovery sample and applying them in independent samples, with prediction accuracy driven mainly by discovery sample size. [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-prs|P28686856]]
- Association power depends on the number of loci, their effect sizes, sample size, genotyping coverage and how precisely the trait is measured. [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-design|P28686856]]
- Bipolar genomics illustrates the limits: 298 loci and 36 credible genes were identified in a very large multi-ancestry study, and the authors describe the architecture as statistical rather than personally predictive. [[P39843750 O'Connell 2025 Genomics of bipolar disorder#^p39843750-loci|O'Connell 2025 Genomics of bipolar disorder]]; [[P39843750 O'Connell 2025 Genomics of bipolar disorder#^p39843750-caution-prediction|AI synthesis: O'Connell 2025 Genomics of bipolar disorder]]
- A polygenic score is a distributional statement about a sample; using it for one person requires calibration and decision evidence that does not yet exist for most conditions here. [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-caution-individual|AI synthesis: P28686856]]

> [!info]- In depth: from association to causal claim, and where each step breaks
> **Four inferential steps.** Association (a variant correlates with a trait), fine-mapping (which variants are credible), mechanism (what the variant does), and prediction (how well it classifies). Each requires different evidence, and most reporting collapses them. [[P29844615 Schaid 2018 Fine-mapping#^p29844615-problem|Fine-mapping]] [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-translation|10 years of GWAS discovery]]
>
> **Causal claims need instruments.** Mendelian randomisation uses variants as instruments for an exposure, which licenses causal inference only if the instrument is valid (associated with the exposure, independent of confounders, and affecting the outcome only through the exposure) - assumptions that are argued, not measured. [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-translation|10 years of GWAS discovery]] [[Causality and counterfactuals]]
>
> **Correlation between traits is not mechanism.** Genetic correlation indicates shared architecture, which can arise through pleiotropy, assortative mating or mediation; it does not identify a pathway. [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-limit|10 years of GWAS discovery]]
>
> **Reading rule.** Say which of the four steps the evidence supports before drawing any conclusion about individuals. [[Association versus individual prediction]]

> [!info]- Reference: what a score can and cannot support
> **Construction.** A polygenic score is built by weighting many variant associations from a discovery sample and summing them in a target sample. Its performance depends on discovery sample size, the genetic architecture of the trait and the similarity between samples. [[F68 NHGRI Polygenic risk scores#^f68-definition|Polygenic risk scores]]
>
> **Transfer.** Because variant frequencies and linkage patterns differ across ancestries, a score validated in one population cannot be assumed to work in another. The official guidance states this limitation explicitly. [[F68 NHGRI Polygenic risk scores#^f68-limits|Polygenic risk scores]]
>
> **Individual prediction.** A score that separates group means may still be uninformative for one person, because most complex traits are influenced by many factors and the score explains a limited share of variance. [[F67 NHGRI GWAS fact sheet#^f67-meaning|GWAS fact sheet]]
>
> **Variant to gene.** Even a well-mapped association does not identify the causal gene or mechanism; that requires fine-mapping, annotation and functional experiments. [[P29844615 Schaid 2018 Fine-mapping#^p29844615-methods|Fine-mapping]]
>
> **Practical conclusion.** Genetic information can support research stratification and, in specific validated cases, clinical risk assessment - but it does not diagnose a psychiatric condition or predict an individual's outcome on its own. [[F07 OpenStax Human genetics#^f07-expression|Human genetics]]
>
> **A score is a weighted sum with a birthplace.** Variant weights are estimated in a discovery sample; the score applied to a new person imports those weights, the discovery sample's ancestry, and its ascertainment. Portability degrades when any of the three shift, which is why score performance drops across ancestry groups and why calibration in the target population is part of responsible use rather than an optional refinement. [[F68 NHGRI Polygenic risk scores#^f68-definition|Polygenic risk scores]] [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-prs|10 years of GWAS discovery]]
>
> **The inference ladder from variant to use.** Association marks a region; fine-mapping narrows candidates; functional work identifies mechanism; scores aggregate variants for prediction; and uses such as risk stratification are framed by guideline bodies as areas under investigation. Each rung needs its own evidence, and the common error is citing a rung-two finding in rung-four language - prediction language attached to association evidence. [[P29844615 Schaid 2018 Fine-mapping#^p29844615-problem|Fine-mapping]] [[F68 NHGRI Polygenic risk scores#^f68-use|Polygenic risk scores]]
>
> **Cross-domain connection (curation).** The condition-domain genetics articles - bipolar's 298-loci result, autism's exome genes - are rung-one-and-two findings by this ladder, and their interpretation boundaries are exactly what this article generalises. [[Bipolar genetics and polygenic risk]] [[Autism genetics and rare variants]]

## Limitation or common misconception

Most GWAS data are still from a narrow set of ancestries, and scores lose accuracy when moved across populations, environments or definitions of a condition.

## Related notes

- [[Genes, environment and polygenic risk]]
- [[Bipolar genetics and polygenic risk]]
- [[Autism genetics and rare variants]]
- [[Association versus individual prediction]]

## Study question

What evidence would a polygenic score need before it could change a screening decision for one person, and why is a group association insufficient?
