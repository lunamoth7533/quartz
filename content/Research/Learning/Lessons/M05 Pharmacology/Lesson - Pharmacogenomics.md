---
note_type: lesson
title: "Pharmacogenomics"
module: "m05"
module_title: "Pharmacology"
lesson_order: 9
domain: [pharmacology]
condition: []
prerequisites: ["Receptor adaptation tolerance and dependence"]
sources: ["P37032427", "P38527170", "F12", "P27388693", "P36111494"]
source_count: 5
question_count: 3
word_count: 680
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m05]
---

# Pharmacogenomics

**Module.** M05 Pharmacology · **Topic.** [[Pharmacogenomics]]

## Why this matters

Genetic testing for medication response is marketed as a way to personalise treatment. Reading that promise
well means knowing exactly what pharmacogenomic evidence has shown - inherited variation that changes drug
exposure, and inherited markers that flag a risk of a severe reaction - and what it has not shown, which is
whether a person's condition will respond to a given drug.

## The core model

Pharmacogenomics uses inherited variation to anticipate how a person will handle a drug. Two kinds of markers
carry most of the evidence. Metabolic genes such as CYP2D6, CYP2C19 and CYP2B6 change how certain antidepressants
are broken down, which places them at the metabolism step of pharmacokinetics - what the body does to the drug -
rather than at the drug's target.
[[F12 NIGMS What happens to medicine in your body#^f12-adme|What happens to medicine in your body]];
[[P37032427 Bousman 2023 CPIC guideline for serotonin reuptake inhibitors#^p37032427-metabolism|Bousman 2023]]

CYP2D6 shows how much this can vary: alleles range from no activity to increased activity, so predicted
phenotypes run from poor to ultrarapid metaboliser, and predicted poor metabolisers made up 0.4-5.4% of major
world populations against 1-21% ultrarapid, with frequencies differing considerably between groups.
[[P27388693 Gaedigk 2017 CYP2D6 phenotype prediction across populations#^p27388693-alleles|Gaedigk 2017]];
[[P27388693 Gaedigk 2017 CYP2D6 phenotype prediction across populations#^p27388693-phenotypes|Gaedigk 2017]]
There is no single standard method for turning a pair of alleles into a phenotype, and a predicted category is a
genotype-based estimate that other medicines and physiology can still shift.
[[P27388693 Gaedigk 2017 CYP2D6 phenotype prediction across populations#^p27388693-translation|Gaedigk 2017]]

HLA genes supply a different marker, tied to the risk of a severe reaction rather than to exposure. HLA-B*15:02
is strongly associated with Stevens-Johnson syndrome and toxic epidermal necrolysis - severe skin reactions - on
carbamazepine and oxcarbazepine, more weakly on lamotrigine and phenytoin, and the reviewing authors suggest
screening could reduce these reactions.
[[P38527170 Tham 2024 HLA-B and antiseizure drug skin reactions#^p38527170-association|Tham 2024]] A strong
association is still not a strong individual prediction: allele frequency varies by ancestry, and a negative
result does not remove the risk.

What does testing achieve in an actual trial, rather than in principle? In depression, a meta-analysis of 13
trials found test-guided treatment raised remission compared with usual care - a modest gain the authors trace
largely to differences in which genes, alleles and advice each trial covered.
[[P36111494 Brown 2022 Pharmacogenomic testing and depression remission#^p36111494-remission|Brown 2022]]

One caveat applies throughout: clinicians in the guided arms saw the report, so part of any benefit may reflect
closer medication review rather than the genotype itself, and a small average gain changes the outcome for only
a minority of those tested.
[[P36111494 Brown 2022 Pharmacogenomic testing and depression remission#^p36111494-caution-blinding|Appraisal: Brown 2022]]
A metabolic genotype speaks to exposure and an HLA allele to the risk of one reaction; neither says whether a
condition will respond to the drug at all.
[[P37032427 Bousman 2023 CPIC guideline for serotonin reuptake inhibitors#^p37032427-caution-question|Appraisal: Bousman 2023]]

## Worked example (hypothetical)

This scenario is invented for practice. A testing company's website states: "Our genetic panel tells you which
antidepressant will work best for you." Break the claim into its pieces. A metabolic result, such as a CYP2D6
phenotype, speaks to exposure - how fast a drug is likely to be cleared - not to response. An HLA result speaks
to the risk of one specific severe reaction to one specific drug, not to whether the drug will help at all. Even
the trial evidence for testing and depression remission shows only a modest average gain, and clinicians could
not be blinded to the result, so part of that gain may come from closer review rather than the genotype itself.
"Tells you which drug will work best" is a response-prediction claim, and the evidence here supports exposure and
reaction-risk claims far better than it supports that one.

## Common confusions

- "A genetic test can predict whether a drug will help me." Current evidence speaks to exposure and to specific
  reaction risks, not to whether a condition will respond.
- "A strong gene-reaction association means a person with the gene will definitely react." Frequency and
  individual risk vary by ancestry, and a negative result does not remove the risk.
- "If testing helps on average, it works for everyone tested." A modest average gain in a trial can still mean
  the outcome changed for only a small share of participants.

## What the sources do not establish

These sources do not show that pharmacogenomic testing predicts individual treatment response outside the
specific gene-drug pairs studied, and the guided-care trials could not separate the effect of the genetic result
from the effect of closer clinical review that came with it. This library reproduces no dosing or prescribing
tables built from these results.

## Check yourself

1. What is the difference between what a metabolic gene marker tells you and what an HLA marker tells you?
2. Why does a "modest" average gain in a guided-testing trial not mean every tested person benefited?
3. Name one reason a benefit seen in a guided-care trial might not come from the genetic result alone.

## Answer notes

1. A metabolic gene marker (such as CYP2D6) speaks to drug exposure - how the body handles the drug; an HLA
   marker speaks to the risk of a specific severe reaction to a specific drug.
2. Because an average across a group can rise even when the outcome only changed for a minority of the people in
   it; the rest may have had no change either way.
3. Clinicians in the guided arm saw the test report, so closer medication review prompted by that report - not
   only the genetic information - may account for part of the benefit.

## Next steps

- Continue to [[Lesson - Trial endpoints, benefit and harms]] for how to read the trial evidence behind claims
  like these more generally.
- See [[Selective serotonin reuptake inhibitors]] for the antidepressant class whose metabolism CYP2D6 and
  CYP2C19 variants most directly affect.
