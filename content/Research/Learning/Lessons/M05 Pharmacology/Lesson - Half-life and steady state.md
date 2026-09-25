---
note_type: lesson
title: "Half-life and steady state"
module: "m05"
module_title: "Pharmacology"
lesson_order: 3
domain: [pharmacology]
condition: []
prerequisites: ["Pharmacokinetics and ADME"]
sources: ["F21", "P25566076"]
source_count: 2
question_count: 3
word_count: 702
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m05]
---

# Half-life and steady state

**Module.** M05 Pharmacology · **Topic.** [[Half-life and steady state]]

## Why this matters

Half-life is the concept that converts "when do I notice it" into "how does exposure accumulate", and it is
regularly confused with effect. This lesson teaches the model and its main limitation: concentration is a
proxy, and the response can lag or lead it.

## The core model

Elimination half-life is the time for the amount of drug in the body to fall by half; repeated dosing moves
concentration toward steady state.
[[F21 OpenStax Pharmacokinetics and pharmacodynamics#^f21-halflife|Pharmacokinetics and Pharmacodynamics]]

Steady state is reached when intake and elimination balance, so the concentration stops climbing and fluctuates
around a level.
[[F21 OpenStax Pharmacokinetics and pharmacodynamics#^f21-halflife|Pharmacokinetics and Pharmacodynamics]]

Half-life is useful for reasoning about timing inside the model: when elimination follows first-order kinetics
and the aim is to hold concentration between doses, a shorter half-life calls for more frequent input, while a
long half-life accumulates over days before steady state.
[[F21 OpenStax Pharmacokinetics and pharmacodynamics#^f21-interval|Pharmacokinetics and Pharmacodynamics]]
That is a property of the simplified exposure model, not a universal dosing rule: frequency in practice also
depends on the formulation, the safety margin, the effect being measured and how the medicine is actually used.
And the model describes exposure, not response — concentration, half-life and steady state are not dosing
instructions.
[[F21 OpenStax Pharmacokinetics and pharmacodynamics#^f21-model|Pharmacokinetics and Pharmacodynamics]]

Clinical response can lag exposure because it depends on the system the drug acts on, not only on how much drug
is present: tolerance and receptor regulation evolve on their own timescales.
[[F21 OpenStax Pharmacokinetics and pharmacodynamics#^f21-tolerance|Pharmacokinetics and Pharmacodynamics]];
[[P25566076 Allouche 2014 Opioid receptor desensitization and tolerance#^p25566076-desensitization|Opioid receptor desensitization]]
That is why some effects build over weeks while concentration stabilises earlier, and why some effects appear
quickly and then fade. The timing of a clinical effect is read from the studies that measured it, never
extrapolated from half-life alone.

## Worked example (hypothetical)

This scenario is invented for practice. A medicine reaches steady-state concentration in about five days, but
the clinical effect the studies describe takes four to six weeks, and the person notices nothing in the first
week.

Explain the lag without invoking impatience. The exposure model describes when the amount of drug stops
accumulating. The effect model depends on what the drug changes downstream, and those changes evolve on their
own timescale. A person whose concentration is at steady state can still be days or weeks away from the
maximum response the trials measured.

The correct statement: "steady state describes exposure; the trial's outcome was assessed at four to six weeks,
so early absence of effect is not evidence of eventual failure." Note what this lesson does not do: it does not
tell anyone what to expect from a real medicine, which belongs to their clinician and the product information.

## Common confusions

- "Steady state means full effect." It means exposure has plateaued, not that adaptation is complete.
- "Half-life predicts how long a drug lasts." It predicts the time course of the amount in the body under
  assumptions that include elimination kinetics staying constant.
- "A short half-life means weaker effect." It means the exposure model needs more frequent input to hold
  concentration between doses.

## What the sources do not establish

The OpenStax material is an educational model and does not cover non-linear kinetics, active metabolites,
loading strategies or interactions. This vault contains no source that would support calculating exposure for
any individual.

## Check yourself

1. Define elimination half-life in one sentence.
2. What does steady state mean, and why is it not the same as maximum effect?
3. Why can a clinical effect appear before or after the concentration peaks?

## Answer notes

1. The time for the amount of drug in the body to fall by half.
2. The balance point where intake and elimination match; it describes exposure, while effect depends on
   downstream adaptation.
3. Because effect follows downstream changes in the system the drug acts on, which have their own time course.

## Next steps

- Continue to [[Lesson - Efficacy versus tolerability]].
- See [[Therapeutic index, monitoring and interactions]] for how exposure variability becomes clinically
  relevant for some drugs.
