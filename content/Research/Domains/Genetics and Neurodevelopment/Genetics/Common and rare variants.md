---
note_type: topic
title: "Common and rare variants"
description: "Two regimes of genetic architecture and why the distinction changes study design and interpretation."
content_layer: reference
concept_kind: framework
domain: [genetics-neurodevelopment]
secondary_domain: []
condition: []
source_count: 5
reviewed: 2026-09-25
up: "[[Genetics and Neurodevelopment - Genetics]]"
cssclasses: [research-topic]
tags: [research/topic, research/reference, research/domain/genetics]
---
# Common and rare variants

## Definition

Common variants are present in a substantial fraction of a population and typically have small effects. Rare variants are uncommon, may be recent or de novo, and can have larger effects on risk.

## How it works

**Common variants.** Common variants have individually small effects and are detected by association studies in large samples: complex traits are highly polygenic, with individual common-disease odds ratios often near 1.01, so millions of variants must be tested and credible signals require very large samples and replication. Aggregated into polygenic scores, they explain a substantial share of population-level variation in many traits and very little about any one person. [[F67 NHGRI GWAS fact sheet#^f67-design|GWAS fact sheet]] [[F67 NHGRI GWAS fact sheet#^f67-scale|GWAS fact sheet]] [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-polygenic|10 years of GWAS discovery]] [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-prs|10 years of GWAS discovery]]

**Rare variants.** Rare variants have larger effects and are detected by sequencing, often in families or case-parent designs; they are often de novo, enriched in constrained genes and enriched for coding changes with clearer functional interpretation. In autism exome work the identified risk genes clustered in gene regulation and neuronal communication and were expressed early in development, with 102 risk genes meeting the study's threshold. [[P31981491 Satterstrom 2020 Autism exome sequencing#^p31981491-model|Autism exome sequencing]] [[P31981491 Satterstrom 2020 Autism exome sequencing#^p31981491-genes|Autism exome sequencing]]

**Frequency and effect size trade off in what can be detected.** A variant's detectability by a given design depends on both its frequency and its effect: association studies need enough carriers to beat multiple-testing thresholds, so they find common, small-effect variants; sequencing can analyse rare variants directly but needs family or large case-control structures to connect them to phenotypes. The two designs therefore sample two ends of a frequency-effect distribution, and neither samples the whole of it. [[F67 NHGRI GWAS fact sheet#^f67-design|GWAS fact sheet]] [[P31981491 Satterstrom 2020 Autism exome sequencing#^p31981491-model|Autism exome sequencing]]

**Constrained genes sharpen rare-variant interpretation.** Sequencing studies prioritise variants in genes intolerant of loss-of-function change, because a severe mutation in a gene that tolerates none is likelier to matter; that constraint filter, combined with clustering of findings in regulatory and communication genes, is what turns a variant list into a pathway story. It remains a population-level story - constraint raises prior probability of relevance, not individual prediction. [[P31981491 Satterstrom 2020 Autism exome sequencing#^p31981491-genes|Autism exome sequencing]] [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-prs|10 years of GWAS discovery]]

**Why the two are not alternatives.** A condition can be influenced by both regimes at once, which is why association results and sequencing results are complementary rather than competing. [[F67 NHGRI GWAS fact sheet#^f67-meaning|GWAS fact sheet]] Both contribute to the same conditions, and ascertainment determines which architecture a particular sample reveals - the autism exome analysis identified partly different gene sets depending on how participants were ascertained (severe developmental delay versus autism). [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-polygenic|10 years of GWAS discovery]] [[P31981491 Satterstrom 2020 Autism exome sequencing#^p31981491-subgroups|Autism exome sequencing]]

**Convergence.** Cell-type analyses in bipolar disorder implicate GABAergic interneurons and medium spiny neurons, with common and rare variant signals converging on the same genes - evidence that the two architectures can meet at the level of biology even when they are detected differently. [[P39843750 O'Connell 2025 Genomics of bipolar disorder#^p39843750-cells|Genomics of bipolar disorder]] [[P29844615 Schaid 2018 Fine-mapping#^p29844615-methods|Fine-mapping]]

**Interpretation.** Penetrance, pleiotropy and background risk all complicate the move from variant to individual outcome; the same variant may be present in people with markedly different presentations. [[P29844615 Schaid 2018 Fine-mapping#^p29844615-limits|Fine-mapping]]

**Reading rule.** Ask which variants the study could detect and in whom; a null common-variant finding says nothing about rare variation, and a rare-variant finding does not estimate population risk. [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-design|10 years of GWAS discovery]] [[P31981491 Satterstrom 2020 Autism exome sequencing#^p31981491-limit|Autism exome sequencing]]

## Evidence and status

Detection methods are well established; the architecture of most psychiatric conditions is characterised in general terms but not in detail, and effect-size estimates keep moving as samples grow.

## Connections

This note pairs with [[Genome-wide association studies]] and [[Polygenic scores and prediction]], and it provides the vocabulary for condition-specific genetics articles.

**Cross-domain connection (curation).** The condition domains use this note's split as their evidence-architecture map - bipolar's 298-loci result and autism's 102-gene result are one common-variant and one rare-variant exemplar - and the fine-mapping article supplies the step between either result and a mechanism claim. [[Bipolar genetics and polygenic risk]] [[Autism genetics and rare variants]]

## Uncertainties

- Rare-variant interpretation depends on frequency databases that are unevenly representative across populations.
