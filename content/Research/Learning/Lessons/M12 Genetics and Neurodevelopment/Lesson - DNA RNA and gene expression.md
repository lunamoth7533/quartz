---
note_type: lesson
title: "DNA RNA and gene expression"
module: "m12"
module_title: "Genetics and Neurodevelopment"
lesson_order: 1
domain: [genetics-neurodevelopment]
condition: []
prerequisites: []
sources: ["F71", "F07", "F69", "P29844615"]
source_count: 4
question_count: 3
word_count: 753
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m12]
---
# DNA RNA and gene expression

**Module.** M12 Genetics and Neurodevelopment · **Topic.** [[DNA RNA and gene expression]]

## Why this matters

Every genetic claim elsewhere in this library - a heritability figure, a risk locus, a polygenic score - ultimately has to be a claim about this molecular layer: a stretch of DNA doing something inside a cell. A working picture of how DNA becomes protein, and how that process is controlled, stops "a gene for X" headlines from being read as more mechanistic than the biology supports.

## The core model

DNA stores hereditary information as a sequence of nucleotides. That sequence is transcribed into RNA and read three bases at a time - each triplet a codon - to build a protein, with start and stop codons marking where reading begins and ends. Because more than one codon can specify the same amino acid, the code is degenerate: many single-base changes leave the resulting protein unchanged. [[F71 OpenStax The genetic code#^f71-dogma|The Genetic Code]] A DNA difference is therefore not automatically a protein difference. The first filter on any variant claim is which level - sequence, transcript, protein - it has actually been shown to affect.

The more consequential layer is regulation. A skin cell and a cortical neuron carry the same genome, yet build almost entirely different proteins, because of which genes get transcribed, in which cell, and when - controlled by promoters, enhancers and the packaging state ("chromatin") of the DNA around them. [[F07 OpenStax Human genetics#^f07-expression|Human genetics]] This is also why epigenetic marks - tags such as DNA methylation that sit on top of the sequence - matter separately from the sequence itself: they help keep a neuron acting like a neuron across cell divisions, without changing a single letter of DNA. [[F69 NHGRI Epigenomics fact sheet#^f69-definition|Epigenomics fact sheet]]

Put the two facts together - degeneracy blunts many sequence changes, and most consequential changes act through regulation - and you get the reason gene-hunting studies spend so much effort on regulatory annotation. Most variants that survive a genome-wide search sit outside protein-coding sequence, so the live question is usually which gene's activity a variant shifts, in which tissue, rather than which protein it breaks. [[P29844615 Schaid 2018 Fine-mapping#^p29844615-problem|Fine-mapping]]

## Worked example (hypothetical)

This scenario is invented for practice. A press release announces: "Scientists find the gene for restlessness - Gene ABC1." First, is the reported variant inside ABC1's coding sequence, or nearby but outside it? Say it sits in a non-coding region upstream of ABC1. Second, does that region change the protein ABC1 makes, or how much of it a cell makes? Given the location, a change in expression level is the plausible mechanism, not protein structure. Third, has that expression change actually been measured, or only inferred from location? If only inferred, the accurate summary is: "a variant near ABC1 is associated with the trait, and its location suggests it may affect how much ABC1 is made" - narrower and more honest than "the gene for restlessness."

## Common confusions

- "A gene 'for' a trait." Most traits here run through many genes and through regulation, not one dedicated gene.
- "A DNA change always changes the protein." Degeneracy means many sequence changes are silent at the protein level.
- "A methylation mark in blood tells you about the brain." Marks are tissue-specific; a peripheral measurement needs its own evidence before standing in for brain tissue.

## What the sources do not establish

The genetic code and the transcription-translation pathway are established, quantitative biology. Structure-function claims linking a specific gene to a specific behaviour are far weaker, and the epigenomics sources describe mapping projects and disease associations as an active research programme, not settled mechanisms for any named condition.

## Check yourself

1. Why does the degeneracy of the genetic code matter when reading a variant report?
2. What is the main reason a liver cell and a neuron, with identical DNA, build different proteins?
3. If a study reports a variant "near" a gene rather than inside its coding sequence, what kind of effect is most plausible?

## Answer notes

1. It means many DNA sequence changes leave the protein unchanged, so a sequence difference is not automatically a functional difference.
2. Regulation - which genes are transcribed, controlled by promoters, enhancers and chromatin state - not a difference in DNA sequence itself.
3. A regulatory effect on expression (how much of the gene's product is made, in which tissue), rather than a change to the protein's structure.

## Next steps

- Continue to [[Lesson - Inheritance and variation]].
- See also [[Gene-environment interplay and epigenetics]] for how these same marks are studied as a route from experience to biology.
