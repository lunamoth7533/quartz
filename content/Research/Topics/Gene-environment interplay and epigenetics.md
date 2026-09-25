---
note_type: topic
title: "Gene-environment interplay and epigenetics"
description: "Interaction, correlation and epigenetic marks: how environmental and genetic influences combine, and what the evidence does and does not show."
content_layer: reference
concept_kind: framework
domain: [genetics-neurodevelopment]
secondary_domain: []
condition: []
source_count: 7
reviewed: 2026-09-25
cssclasses: [research-topic]
tags: [research/topic, research/reference, research/domain/genetics]
---
# Gene-environment interplay and epigenetics

## Definition

Gene-environment interplay covers several distinct phenomena: interaction (the effect of an environment depends on genotype), correlation (genotype and environment are associated) and epigenetics (marks that change how DNA is used without changing sequence).

## How it works

**Interaction.** A variant may only matter under particular conditions, which is why main-effect association results can miss important relationships. [[F07 OpenStax Human genetics#^f07-expression|Human genetics]]

**Correlation (rGE).** Genotype and environment are associated through three distinguishable routes: passive correlation (parents provide both genes and rearing environment), evocative correlation (heritable traits elicit different responses from others) and active correlation (individuals select and shape environments partly on heritable tendencies). The consequence for design is that an environment-outcome association can reflect genetic influence on the environment rather than a causal effect of the environment, so the design has to say which route it can rule out. Twin designs compare relatives who differ in genetic relatedness and rearing similarity, so their partition assumes the two can be separated - for instance that identical and fraternal twins share environments to comparable degrees - and an rGE route that makes environments track genotype biases that partition. Adoption designs separate genetic and rearing parents, breaking passive correlation directly, under assumptions about representativeness and placement. Sibling comparisons difference out shared family factors, which limits passive correlation and shared-environment confounding under assumptions about how similar siblings' exposures really are; they do not by themselves eliminate genetic differences between siblings or identify every rGE route. Mendelian randomisation is a different argument again: it uses genetic variants as instruments for an exposure, and its assumptions - no confounding of the variant, no alternative pathways - can be probed with sensitivity analyses but not all verified from observed data. [[P39232197 Zhou 2024 Gene-environment correlation family environment academic development#^p39232197-finding|Gene-environment correlation: family environment in academic development]] [[P30002074 Davies 2018 Reading Mendelian randomisation studies#^p30002074-assumptions|Reading Mendelian randomisation studies]] [[F07 OpenStax Human genetics#^f07-expression|Human genetics]]

**Epigenetic marks.** DNA methylation and chromatin features change how cells use DNA and are part of normal differentiation; mapping projects describe the marks and their tissue-specificity, and disease applications are presented as ongoing rather than established. Because the marks differ by tissue by design, a peripheral measurement is not a stand-in for the brain: cross-tissue validity has to be demonstrated for the specific mark, tissue pair and purpose rather than assumed. [[F69 NHGRI Epigenomics fact sheet#^f69-definition|Epigenomics fact sheet]] [[F69 NHGRI Epigenomics fact sheet#^f69-methods|Epigenomics fact sheet]] [[F69 NHGRI Epigenomics fact sheet#^f69-disease|Epigenomics fact sheet]]

**Animal evidence.** Early experience changes developmental trajectories in animal models, which is how the biological plausibility of these mechanisms is tested. [[P21042938 Stiles 2010 Basics of brain development#^p21042938-experience|The basics of brain development]]

## Evidence and status

Interaction and correlation are well established conceptually and in some quantitative-genetic designs; specific epigenetic mechanisms in human psychiatric conditions are mostly correlational and often measured in accessible tissues such as blood.

> [!info]- In depth: interaction, correlation and marks, kept separate
> **Interaction is a statistical statement about effects.** Gene-environment interaction means the effect of an exposure differs across genotypes, or the reverse. It is a claim about an effect estimate, so reading it means reading the estimate, its confidence interval and the design behind it: how many people sat in each genotype-by-exposure cell, how the exposure was measured, whether the interaction was pre-specified, and how many were tested in the sample. The cells of an interaction are smaller than the margins, so a sample that establishes a main effect can be far too small to establish a difference in that effect - and the interval is what says whether the study could have detected one of the size at issue. Neither a wide interval nor a tight interval around zero licenses a story about why the number came out as it did. [[F07 OpenStax Human genetics#^f07-expression|Human genetics]] [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-design|10 years of GWAS discovery]] [[Bias and confounding]]
>
> **Correlation is about inheritance of environments.** Heritability estimates describe how much of the variation in a population is associated with genetic differences, not how heritable an individual's trait is, and the same logic explains why environments are partly 'heritable' in this technical sense. The three routes can be told apart empirically. A twin study of academic development separated them by asking whether mediation of polygenic-score effects by the family environment held between families or within families: mediation appeared nearly exclusively between families and was more robust for noncognitive than cognitive polygenic effects, which the authors read as consistent with passive correlation or genetic nurture - parents shaping environments partly on their own genetic disposition rather than responding to each child's genotype. [[P39232197 Zhou 2024 Gene-environment correlation family environment academic development#^p39232197-passive|Gene-environment correlation: family environment in academic development]] [[P39232197 Zhou 2024 Gene-environment correlation family environment academic development#^p39232197-twin|Gene-environment correlation: family environment in academic development]]
>
> **What the design comparison buys.** Each of the three designs answers a different question and assumes something different: twins and adoptees partition variation by relatedness, siblings difference out shared family factors under assumptions about exposure similarity, and instrumental-variable designs estimate a causal effect whose assumptions are probed with sensitivity analyses rather than fully verified from observed data. Conclusions should name which of these was used, because 'genetic and environmental influences interact' can be supported by one and not another. [[P30002074 Davies 2018 Reading Mendelian randomisation studies#^p30002074-checks|Reading Mendelian randomisation studies]] [[P30002074 Davies 2018 Reading Mendelian randomisation studies#^p30002074-limit|Reading Mendelian randomisation studies]] [[F07 OpenStax Human genetics#^f07-heritability|Human genetics]] [[F07 OpenStax Human genetics#^f07-limit|Human genetics]]
>
> **What epigenetics does and does not add.** Epigenetic marks are the mechanism by which one genome produces many cell types, and they respond to experience; that responsiveness is why they are studied as a route from environment to stable phenotype. The NHGRI material defines the marks and their methods and does not quantify exposure effects. [[F69 NHGRI Epigenomics fact sheet#^f69-definition|Epigenomics fact sheet]] [[F69 NHGRI Epigenomics fact sheet#^f69-methods|Epigenomics fact sheet]] [[F69 NHGRI Epigenomics fact sheet#^f69-limit|Epigenomics fact sheet]]
>
> **Cross-tissue inference is a measured question.** Because methylation patterns differ between tissues by design, a blood measure stands in for the brain only where that has been shown for the specific site. A study that searched methylation databases for sites whose levels correlate between blood and brain selected 18,293 candidate sites; comparing patients with neurodegenerative conditions against controls, 64 of them differed in blood, and the nine Alzheimer's sites also differed in brain tissue. That supports a specific research inference for those sites in those comparisons - candidates worth following, not a validated surrogate set or a clinical biomarker. The lesson transfers: a peripheral mark without such cross-tissue evidence for the tissue pair and question at issue is a peripheral measurement. [[P39060467 Mendonca 2024 Cross-tissue DNA methylation blood-brain CpGs#^p39060467-bbcpg|Cross-tissue DNA methylation patterns]] [[P39060467 Mendonca 2024 Cross-tissue DNA methylation blood-brain CpGs#^p39060467-confirm|Cross-tissue DNA methylation patterns]] [[P39060467 Mendonca 2024 Cross-tissue DNA methylation blood-brain CpGs#^p39060467-limit|Cross-tissue DNA methylation patterns]]
>
> **Animal evidence carries a specific burden.** Early experience changes developmental trajectories in animal models, which is where the plausibility of these mechanisms is tested most directly. Translating that to humans requires assuming the relevant processes are conserved, and it cannot establish the population-level effect sizes that human policy questions ask about. [[P21042938 Stiles 2010 Basics of brain development#^p21042938-experience|The basics of brain development]] [[P21042938 Stiles 2010 Basics of brain development#^p21042938-limit|The basics of brain development]]
>
> **What this note does not claim.** It does not claim demonstrated human transgenerational inheritance of trauma-related marks; the studies that would support it are rare, small and contested in design. It does not claim that a peripheral mark indexes a brain state. And it does not claim that heritability estimates settle the nature-nurture question: they decompose variation within a population at a time, not the development of an individual. [[F07 OpenStax Human genetics#^f07-heritability|Human genetics]] [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-limit|10 years of GWAS discovery]]

## Connections

This note qualifies [[Inheritance and variation]] and connects to [[Sensitive periods]] and to the stress material in [[Allostasis and chronic stress]].

## Uncertainties

- Cross-tissue inference needs validation for the specific mark and purpose; where it has not been validated, a blood-based measure is a peripheral signal rather than a brain measurement. Reverse causation and confounding remain difficult to exclude in observational designs.
