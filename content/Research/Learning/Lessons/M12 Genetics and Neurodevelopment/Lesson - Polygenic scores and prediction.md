---
note_type: lesson
title: "Polygenic scores and prediction"
module: "m12"
module_title: "Genetics and Neurodevelopment"
lesson_order: 6
domain: [genetics-neurodevelopment, research-methods]
condition: []
prerequisites: ["Genome-wide association studies"]
sources: ["F68", "P28686856", "P37198491"]
source_count: 3
question_count: 3
word_count: 768
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m12]
---
# Polygenic scores and prediction

**Module.** M12 Genetics and Neurodevelopment · **Topic.** [[Polygenic scores and prediction]]

## Why this matters

Polygenic scores are discussed as a future tool for psychiatry, and are also one of the most over-claimed objects in popular genetics writing. Knowing what a score is - and why it does not travel well across ancestry - is essential to reading any claim built on one.

## The core model

A polygenic score aggregates the small effects of many variants into a single number summarising a person's genetic liability for a trait. Weights come from association results in one large "discovery" sample, then are applied to each person's genotypes in an independent sample to compute their score. [[F68 NHGRI Polygenic risk scores#^f68-definition|Polygenic risk scores]]

Why aggregate at all? Individual common variants typically have tiny effects - odds ratios often near 1.01 - so a single variant is nearly useless alone. A score pools thousands of these near-noise effects into something with more signal, without making any one contributing variant more meaningful by itself. [[P28686856 Visscher 2017 10 years of GWAS discovery#^p28686856-polygenic|10 years of GWAS discovery]]

Accuracy depends heavily on the discovery sample - its size, how well the trait was measured, and, critically, how well its ancestry matches the sample the score is later applied to. Variant frequencies and linkage patterns differ across ancestry groups, so a score built from one population does not automatically transfer to another. [[F68 NHGRI Polygenic risk scores#^f68-limits|Polygenic risk scores]]

That transfer problem is finer-grained than a between-group divide. A large biobank analysis tracked score accuracy across 84 traits and found it fell gradually with genetic distance from the training sample, even within one labelled ancestry - the most distant tenth of European-ancestry participants had accuracy about 14% lower than the closest tenth. [[P37198491 Ding 2023 Polygenic score accuracy across ancestry#^p37198491-continuum|Ding 2023]] "Matched ancestry" is not a clean switch; it behaves more like a continuous dial.

Turning a score into a statement useful for one person needs more than the association literature supplies: calibration and validation in a comparable population, evidence that acting on it improves an outcome, and an actual clinical pathway. A well-calibrated probability is not yet a useful test, and for most conditions here that pathway does not exist. [[F68 NHGRI Polygenic risk scores#^f68-limit|Polygenic risk scores]]

## Worked example (hypothetical)

This scenario is invented for practice. A fictional polygenic score for "attentional variability" is built from 400,000 people of primarily one ancestry, and a company offers to compute it for any customer from a testing kit. A customer whose ancestry differs substantially asks whether the result is trustworthy. Was the score validated in a sample matching this customer's ancestry, or only one resembling the discovery group? If only the latter, its accuracy is unknown and, given the pattern above, likely lower than advertised. Even for someone who matches well, does a high or low score come with any demonstrated action, and evidence that acting on it helps? If neither exists, the responsible statement is: this number describes group-level genetic liability under specific assumptions, grows less trustworthy the further the customer's ancestry sits from the discovery sample, and does not currently translate into individual guidance.

## Common confusions

- "A polygenic score predicts what will happen to a person." Scores are validated at the group level; individual-level prediction for psychiatric outcomes remains weak.
- "Matching broad ancestry categories solves the portability problem." Accuracy can vary continuously with genetic distance even within a labelled ancestry group.
- "A score with a solid discovery sample is ready to use clinically." Calibration, demonstrated benefit and a care pathway are separate requirements.

## What the sources do not establish

These sources establish how scores are built and validated, and document measured accuracy loss across and within ancestry groups; they do not establish clinically validated individual-level psychiatric prediction, which does not yet exist for the conditions covered here.

## Check yourself

1. Why does a polygenic score aggregate many variants rather than relying on the strongest single one?
2. Why can a score's accuracy differ even between two people both labelled the same broad ancestry?
3. What three things, beyond a good discovery sample, does turning a score into individual guidance require?

## Answer notes

1. Individual common variants typically have very small effects; pooling many produces a more informative summary than any one variant alone.
2. Portability tracks genetic distance from the discovery sample on something closer to a continuum than a strict category boundary.
3. Calibration and validation in a matching population, evidence that acting on the score improves an outcome, and an existing clinical pathway.

## Next steps

- Continue to [[Lesson - Gene-environment interplay and epigenetics]].
- See also [[Association versus individual prediction]] for the general principle behind the group-versus-individual distinction used throughout this lesson.
