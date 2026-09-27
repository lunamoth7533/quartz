---
note_type: lesson
title: "Target binding and dose-response"
module: "m05"
module_title: "Pharmacology"
lesson_order: 7
domain: [pharmacology]
condition: []
prerequisites: ["Pharmacodynamics and receptors", "Drug classes and mechanisms overview"]
sources: ["F13", "F04", "P31299229", "P25566076", "P23789008", "P28153641"]
source_count: 6
question_count: 3
word_count: 720
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m05]
---

# Target binding and dose-response

**Module.** M05 Pharmacology · **Topic.** [[Target binding and dose-response]]

## Why this matters

News stories about a new compound often lead with a binding number: "binds the receptor with high affinity."
That number alone promises very little. This lesson separates three properties that get run together - how
tightly a drug binds, what happens once it binds, and how much is needed - and shows why the same target can
produce both a treatment's benefit and its side effects.

## The core model

Pharmacodynamics acts through receptors, enzymes, transporters or ion channels. Agonists mimic or enhance a
signal, antagonists block it, and the same target usually appears in more than one tissue, which is one reason a
drug's effects are rarely single.
[[F13 NIGMS How do medicines work#^f13-targets|How do medicines work]];
[[F13 NIGMS How do medicines work#^f13-agonism|How do medicines work]]

Binding is not effect. A binding assay measures affinity, often reported as a dissociation constant, and
selectivity compares that affinity across different targets - but affinity and efficacy vary independently, so
a molecule that binds tightly can still produce a small functional response.
[[F13 NIGMS How do medicines work#^f13-targets|How do medicines work]];
[[F13 NIGMS How do medicines work#^f13-agonism|How do medicines work]] Part of the reason is that receptor
families carry different machinery downstream of binding: ionotropic receptors open a channel directly and
quickly, while metabotropic receptors work through second messengers that can modify channels and gene
transcription on a slower timescale.
[[F04 OpenStax Communication between neurons#^f04-receptor|Communication Between Neurons]];
[[F04 OpenStax Communication between neurons#^f04-metabotropic|Communication Between Neurons]]

Put concentration on one axis and response on the other and you get a dose-response curve: response rises with
concentration up to a plateau, and the curve's shape depends on the drug's efficacy and on how much the system
amplifies the signal. A drug with high affinity but low efficacy can even act as an antagonist when a stronger
agonist is also present, simply by occupying the receptor without activating it fully. Partial agonists take
this further - they produce less than a full response even at full occupancy, which lets one molecule act as an
agonist when the body's own signalling is low and as an antagonist when it is high. That dual behaviour
stabilises signalling rather than maximally driving it, and it is used deliberately in some psychotropic drugs.
[[F13 NIGMS How do medicines work#^f13-agonism|How do medicines work]];
[[P31299229 Kaar 2020 Antipsychotics mechanisms#^p31299229-d2|Antipsychotics mechanisms]]

The clinical stakes of this become clear with antipsychotics: striatal D2 blockade produces both the intended
antipsychotic response and the endocrine and motor side effects that bound how much drug can usefully be given -
one mechanism, two consequences, and the "usable range" is the space between them. The same shape recurs in the
adaptation literature for opioids and benzodiazepines, where tolerance and withdrawal narrow the usable range
over time and tolerance does not develop evenly across a drug's different effects.
[[P31299229 Kaar 2020 Antipsychotics mechanisms#^p31299229-d2|Antipsychotics mechanisms]];
[[P25566076 Allouche 2014 Opioid receptor desensitization and tolerance#^p25566076-tolerance|Opioid receptor desensitization and tolerance]];
[[P23789008 Griffin 2013 Benzodiazepine pharmacology#^p23789008-risks|Benzodiazepine pharmacology]]

Time matters as much as concentration. Antidepressants change monoamine levels within hours of the first dose,
yet mood change typically takes weeks - a gap that dose-response reasoning about the acute target does not
predict, which is why the field looks to downstream processing and plasticity changes to explain the delay.
[[P28153641 Harmer 2017 How do antidepressants work#^p28153641-monoamine|How do antidepressants work]]

## Worked example (hypothetical)

This scenario is invented for practice. A laboratory report states: "Compound Q binds receptor Y with very high
affinity in a test tube." Before treating that as good news, separate the questions it leaves open. Does binding
activate the receptor, partially activate it, or block it - agonist, partial agonist or antagonist? If it
activates the receptor, how does the response scale with concentration, and does it plateau? Is receptor Y found
only in the tissue of interest, or elsewhere too, so that binding there also produces unrelated effects? None of
these questions is answered by the affinity number alone, and none of them is answered by a test-tube assay at
all - they require a functional assay in a living system, then a clinical trial with a named outcome, before
"binds with high affinity" becomes a claim about benefit.

## Common confusions

- "High affinity means a strong effect." Affinity and efficacy are independent properties; tight binding can
  still produce a small response.
- "A partial agonist is just a weak drug." It behaves as agonist or antagonist depending on how much endogenous
  signalling is already present, which is a stabilising role rather than a weaker version of a full agonist.
- "More drug always means more effect." Dose-response curves plateau, and a high-affinity, low-efficacy compound
  can act as an antagonist once a stronger agonist is around.

## What the sources do not establish

These sources explain target classes, the agonist/antagonist/partial-agonist framework and one clinical example
of a shared-target therapeutic window; they do not give receptor kinetics or occupancy calculations for a named
drug, and this library reproduces no dosing, titration or monitoring guidance from them.

## Check yourself

1. Name the three separate properties this lesson distinguishes in "how a drug binds and acts."
2. Why can a high-affinity, low-efficacy compound behave like an antagonist?
3. What does the antipsychotic D2 example show about benefit and harm sharing a target?

## Answer notes

1. Affinity (how tightly it binds), efficacy (the response produced once bound) and potency (how much is
   needed for a given effect).
2. Because it occupies the receptor without producing much activation, so in the presence of a stronger agonist
   it blocks that agonist's fuller effect.
3. That the same D2 receptor blockade produces both the antipsychotic response and the motor and hormonal side
   effects that bound the usable dose range - one mechanism generating both outcomes.

## Next steps

- Continue to [[Lesson - Receptor adaptation tolerance and dependence]] for what repeated exposure does to this
  picture.
- See [[Pharmacodynamics and receptors]] for the target categories this lesson builds on.
