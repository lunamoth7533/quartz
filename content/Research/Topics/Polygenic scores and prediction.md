---
note_type: topic
title: "Polygenic scores and prediction"
description: "What a polygenic score estimates, how it is validated, and the boundary between group-level research use and individual prediction."
content_layer: reference
concept_kind: method
domain: [genetics-neurodevelopment, research-methods]
secondary_domain: []
condition: []
source_count: 6
reviewed: 2026-09-25
cssclasses: [research-topic]
tags: [research/topic, research/reference, research/domain/genetics, research/domain/methods]
---
# Polygenic scores and prediction

## Definition

A polygenic score is a weighted sum of many variant effects, computed for an individual, that summarises genetic liability for a trait as estimated from a discovery sample.

## How it works

**Construction.** Variant weights come from association results; the score's accuracy depends on the discovery sample size, the trait's architecture and how well the discovery and target samples match. [[F68 NHGRI Polygenic risk scores#^f68-definition|Polygenic risk scores]]

**Validation.** Performance is assessed in independent samples by testing whether the score explains variance or improves prediction beyond existing variables. [[F67 NHGRI GWAS fact sheet#^f67-scale|GWAS fact sheet]]

**Transfer limits.** Variant frequencies and linkage patterns differ across ancestries, so a score validated in one population cannot be assumed to transfer. [[F68 NHGRI Polygenic risk scores#^f68-limits|Polygenic risk scores]]

**Use.** Possible uses include research stratification and screening, but these are framed as areas under investigation rather than settled practice. [[F68 NHGRI Polygenic risk scores#^f68-use|Polygenic risk scores]]

## Evidence and status

Scores reliably index genetic liability at the group level for many traits; individual-level prediction of psychiatric outcomes remains weak, and the gap between group and individual inference is the central caveat. [[P26315443 Open Science Collaboration 2015 Reproducibility#^p26315443-scope|Estimating the reproducibility of psychological science]]

> [!info]- In depth: how a score is built and what it can be used for
> **Construction.** A polygenic risk score aggregates many small variant associations into one number intended to summarise genetic liability for a trait, applying discovery-sample variant effects in independent samples; accuracy depends mainly on discovery sample size and on the number of loci, their effect sizes, the genotyping panel and the measurement of the trait. [[F68 NHGRI Polygenic risk scores#^f68-definition|Polygenic risk scores]] [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-prs|10 years of GWAS discovery]] [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-design|10 years of GWAS discovery]]
>
> **Why single-variant effects are tiny.** Complex traits are highly polygenic and individual common-disease odds ratios are often near 1.01, which is why credible signals require very large samples and replication. A score is a way of pooling thousands of near-noise effects; it does not turn any one of them into a marker. [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-polygenic|10 years of GWAS discovery]] [[F67 NHGRI GWAS fact sheet#^f67-scale|GWAS fact sheet]]
>
> **Portability and calibration.** Scores are population statistics built from specific study samples, so their meaning can shift across ancestry groups and study designs; the GWAS literature in this library is dominated by European-ancestry samples, which constrains portability of both effect estimates and scores elsewhere. Stratifying research samples or screening are framed as areas under investigation rather than settled clinical practice. [[F68 NHGRI Polygenic risk scores#^f68-limits|Polygenic risk scores]] [[F68 NHGRI Polygenic risk scores#^f68-use|Polygenic risk scores]] [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-limit|10 years of GWAS discovery]]
>
> **From score to decision.** Turning a score into a statement about one person requires calibration and validation in a comparable population, evidence for decision benefit, and a clinical pathway that does not exist yet for most conditions in this vault. That last requirement is the one most often omitted: a well-calibrated probability is not yet a useful test. [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-caution-individual|AI appraisal: 10 years of GWAS discovery]] [[F68 NHGRI Polygenic risk scores#^f68-limit|Polygenic risk scores]]
>
> **The replication backdrop applies here too.** Published effect sizes are systematically optimistic when power is low, and a multi-team replication project in psychology found replication effect sizes averaging about half the originals. A score built on un-replicated weights inherits that optimism. [[P26315443 Open Science Collaboration 2015 Reproducibility#^p26315443-result|Reproducibility in psychology]] [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-power|Neuroimaging reproducibility]]
>
> **Measurement across groups.** Comparing scores between populations assumes the underlying measurements behave the same way; invariance is a testable precondition rather than a formality, and untested invariance means the comparison carries unknown error. [[P27942093 Putnick 2016 Measurement invariance#^p27942093-levels|Measurement invariance]] [[P27942093 Putnick 2016 Measurement invariance#^p27942093-practice|Measurement invariance]]

> [!info]- Further depth: construction, portability and the decision gap
> Scores apply discovery-sample weights in an independent sample, so accuracy tracks discovery sample size, the number of loci and their effect sizes, the genotyping panel and how the trait was measured. Because scores are population statistics from specific samples, their meaning shifts across ancestry groups and study designs, and the GWAS literature is dominated by European-ancestry samples. Turning a score into a decision additionally requires calibration in a comparable population, evidence of decision benefit and a pathway that can act - requirements the association literature does not supply. [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-prs|10 years of GWAS discovery]] [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-design|10 years of GWAS discovery]] [[F68 NHGRI Polygenic risk scores#^f68-limits|Polygenic risk scores]] [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-caution-individual|AI appraisal: 10 years of GWAS discovery]]

## Connections

This note is the applied end of [[Common and rare variants]] and a recurring example in the methods domain, where [[Association versus individual prediction]] develops the general principle.

## Uncertainties

- Ancestry representation in discovery samples remains a major limitation of current scores.
