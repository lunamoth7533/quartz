---
note_type: lesson
title: "Computational psychiatry"
module: "m14"
module_title: "Computational Neuroscience and Brain Theories"
lesson_order: 14
domain: [computational-brain-theories]
condition: [bipolar-i, adhd, autism, cptsd]
prerequisites: ["Reinforcement learning", "Model comparison and identifiability"]
sources: ["P26906507", "P36940888", "P31769410", "P37591352", "P27608958", "P40576893", "P38212163", "P38774643"]
source_count: 8
question_count: 3
word_count: 798
cssclasses: [research-lesson]
tags: [research/lesson, research/module/m14]
---

# Computational psychiatry

**Module.** M14 Computational Neuroscience and Brain Theories · **Topic.** [[Computational psychiatry]]

## Why this matters

This is the module's capstone: it shows what happens when the formalisms taught earlier - reinforcement learning, drift diffusion, Bayesian inference - meet the conditions this vault is about, ending on the field's central open problem: whether these models measure anything reliable enough to say something about one person.

## The core model

Two wings, one field: computational psychiatry combines computation at several levels with clinical data to improve how mental illness is understood, predicted and treated. [[P26906507 Huys 2016 Computational psychiatry as a bridge#^p26906507-definition|Huys 2016]] Data-driven work applies machine learning without a mechanism; theory-driven work fits models encoding a hypothesis, pairing a task with a model to infer a hidden quantity such as reward learning speed. A review argues the two work best combined, not as rivals; because different models can produce similar behaviour, a good fit is never by itself evidence a mechanism is true. [[P26906507 Huys 2016 Computational psychiatry as a bridge#^p26906507-approaches|Huys 2016]] [[P36940888 Karvelis 2023 Individual differences in computational psychiatry#^p36940888-assays|Karvelis 2023]]

Four condition-level examples, read with the same caution each time. In bipolar disorder, people with bipolar I or II learned less from rewards than controls, modelled as lower reward sensitivity, though the sample was on treatment with mixed mood states, so illness, medication and symptoms are not separated. [[P37591352 Pouchon 2023 Reward and punishment learning in bipolar subtypes#^p37591352-reward|Pouchon 2023]] In ADHD, diffusion-model studies agree on a lower drift rate, but several competing theories predict that finding. [[P27608958 Ziegler 2016 Modelling ADHD decision-making and learning#^p27608958-drift|Ziegler 2016]] In autism, pooling 23 studies found a small-to-moderate effect matching a simple Bayesian model, but heterogeneity was large and unexplained. [[P40576893 Cui 2026 Simple Bayesian model of autism meta-analysis#^p40576893-effect|Cui 2026]] In PTSD, a review recasts excessive fear of trauma reminders as difficulty updating abstract representations of situations, still awaiting trials measuring the process before and after therapy. [[P38212163 Cisler 2024 Latent-state learning in PTSD#^p38212163-reframe|Cisler 2024]]

The reliability problem qualifies every example above: many computational measures show poor test-retest reliability, putting earlier reports of group and individual differences at risk of not replicating. [[P36940888 Karvelis 2023 Individual differences in computational psychiatry#^p36940888-psychometrics|Karvelis 2023]] Where reliability has been tested, in healthy volunteers over two weeks, reinforcement-learning rates held up well and sensitivity parameters only fairly - encouraging, but not yet shown in clinical groups. [[P38774643 Mkrtchian 2023 Reliability of reinforcement learning parameters#^p38774643-reliability|Mkrtchian 2023]]

**Reading rule.** For any finding, ask which wing it comes from, whether the model was compared against genuine rivals, whether the parameter's reliability is known in the population studied, and whether medication and mood state were accounted for. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Wilson 2019]]

## Worked example (hypothetical)

A headline reads: "New brain model can diagnose ADHD from a 10-minute computer task." Apply the reading rule. Which wing is this - theory-driven, like drift rate, or data-driven classification? Was the parameter compared against rival models, or just reported alone? Is its reliability established in the population meant - people already diagnosed, not healthy volunteers - over a realistic gap? Were medication and state accounted for? Absent affirmative answers, the defensible rewrite is: "a model fitted a group difference; whether it is reliable and specific enough to identify one person is unanswered."

## Common confusions

- "A computational model can diagnose a condition from task performance." Fitted parameters here are candidate research measures, not diagnostic tools.
- "One condition's finding rules out the same finding meaning something different elsewhere." Competing theories often predict the same single-parameter pattern.
- "Poor reliability means these models are useless." Some parameters showed good short-term reliability in healthy volunteers; the honest position is measured, not dismissal.

## What the sources do not establish

Most findings here come from single case-control or cross-sectional samples, narrative reviews, or one meta-analysis with large unexplained heterogeneity, not large, replicated studies; no source shows these parameters are ready to diagnose or guide treatment for an individual.

## Check yourself

1. What is the difference between the "data-driven" and "theory-driven" wings?
2. Why doesn't a lower drift rate in ADHD identify the correct theory?
3. What did the two-week reliability study find, and not establish?

## Answer notes

1. Data-driven work applies machine learning without a mechanism; theory-driven work fits a model encoding one.
2. Several competing theories independently predict the same lower drift rate, so the finding cannot distinguish them.
3. Good reliability for learning rates, fair for sensitivity, in healthy volunteers over two weeks; not yet shown in clinical groups.

## Next steps

- Revisit [[Lesson - Levels of analysis]] to see how this capstone lesson's cautions connect back to where the module began.
- See also [[Computational Neuroscience and Brain Theories Map]] for the domain's full concept register.
