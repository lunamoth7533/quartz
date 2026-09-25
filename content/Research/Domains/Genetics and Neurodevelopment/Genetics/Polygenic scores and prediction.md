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
up: "[[Genetics and Neurodevelopment - Genetics]]"
cssclasses: [research-topic]
tags: [research/topic, research/reference, research/domain/genetics, research/domain/methods]
---
# Polygenic scores and prediction

## Definition

A polygenic score is a weighted sum of many variant effects, computed for an individual, that summarises genetic liability for a trait as estimated from a discovery sample.

## How it works

**Construction.** A polygenic score aggregates many small variant associations into one number intended to summarise genetic liability for a trait: variant weights come from association results in a discovery sample and are applied in independent samples. Accuracy depends mainly on discovery sample size and on the trait's architecture - the number of loci and their effect sizes - together with the genotyping panel, the measurement of the trait and how well the discovery and target samples match. [[F68 NHGRI Polygenic risk scores#^f68-definition|Polygenic risk scores]] [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-prs|10 years of GWAS discovery]] [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-design|10 years of GWAS discovery]]

**Why single-variant effects are tiny.** Complex traits are highly polygenic and individual common-disease odds ratios are often near 1.01, which is why credible signals require very large samples and replication. A score is a way of pooling thousands of near-noise effects; it does not turn any one of them into a marker. [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-polygenic|10 years of GWAS discovery]] [[F67 NHGRI GWAS fact sheet#^f67-scale|GWAS fact sheet]]

**Validation.** Performance is assessed in independent samples by testing whether the score explains variance or improves prediction beyond existing variables. [[F67 NHGRI GWAS fact sheet#^f67-scale|GWAS fact sheet]]

**Transfer limits and portability.** Scores are population statistics built from specific study samples, so their meaning can shift across ancestry groups and study designs: variant frequencies and linkage patterns differ across ancestries, so a score validated in one population cannot be assumed to transfer. The GWAS literature in this library is dominated by European-ancestry samples, which constrains portability of both effect estimates and scores elsewhere. [[F68 NHGRI Polygenic risk scores#^f68-limits|Polygenic risk scores]] [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-limit|10 years of GWAS discovery]]

**Measurement across groups.** Comparing scores between populations assumes the underlying measurements behave the same way; invariance is a testable precondition rather than a formality, and untested invariance means the comparison carries unknown error. [[P27942093 Putnick 2016 Measurement invariance#^p27942093-levels|Measurement invariance]] [[P27942093 Putnick 2016 Measurement invariance#^p27942093-practice|Measurement invariance]]

**Use.** Possible uses include stratifying research samples and screening, but these are framed as areas under investigation rather than settled clinical practice. [[F68 NHGRI Polygenic risk scores#^f68-use|Polygenic risk scores]]

**From score to decision.** Turning a score into a statement about one person requires calibration and validation in a comparable population, evidence for decision benefit, and a clinical pathway that can act - requirements the association literature does not supply, and a pathway that does not exist yet for most conditions in this vault. That last requirement is the one most often omitted: a well-calibrated probability is not yet a useful test. [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-caution-individual|AI appraisal: 10 years of GWAS discovery]] [[F68 NHGRI Polygenic risk scores#^f68-limit|Polygenic risk scores]]

## Evidence and status

Scores reliably index genetic liability at the group level for many traits; individual-level prediction of psychiatric outcomes remains weak, and the gap between group and individual inference is the central caveat. [[P26315443 Open Science Collaboration 2015 Reproducibility#^p26315443-scope|Estimating the reproducibility of psychological science]] The replication backdrop applies here too: published effect sizes are systematically optimistic when power is low, and a multi-team replication project in psychology found replication effect sizes averaging about half the originals, so a score built on un-replicated weights inherits that optimism. [[P26315443 Open Science Collaboration 2015 Reproducibility#^p26315443-result|Reproducibility in psychology]] [[P28053326 Poldrack 2017 Neuroimaging reproducibility#^p28053326-power|Neuroimaging reproducibility]]

## Connections

This note is the applied end of [[Common and rare variants]] and a recurring example in the methods domain, where [[Association versus individual prediction]] develops the general principle.

## Uncertainties

- Ancestry representation in discovery samples remains a major limitation of current scores.
