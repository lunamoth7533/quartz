---
note_type: topic
title: "Computational psychiatry"
description: "What computational psychiatry does, how theory-driven and data-driven approaches differ, worked examples in bipolar disorder, ADHD, autism and PTSD, and the reliability problems that keep its parameters from individual use."
content_layer: reference
concept_kind: framework
domain: [computational-brain-theories]
secondary_domain: [clinical-psychiatry, research-methods]
condition: [bipolar-i, adhd, autism, cptsd]
source_count: 9
reviewed: 2026-09-27
up: "[[Computational Neuroscience and Brain Theories Map]]"
cssclasses: [research-topic]
tags: [research/topic, research/reference, research/domain/computational, research/condition/bipolar-i, research/condition/adhd, research/condition/autism, research/condition/cptsd]
---
# Computational psychiatry

## Definition

Computational psychiatry joins computation at several levels with several kinds of data, aiming to improve how mental illness is understood, predicted and treated. [[P26906507 Huys 2016 Computational psychiatry as a bridge#^p26906507-definition|Huys 2016]] It has two complementary wings: data-driven work that applies machine learning to high-dimensional data without committing to a mechanism, and theory-driven work that fits models encoding explicit hypotheses about mechanisms. [[P26906507 Huys 2016 Computational psychiatry as a bridge#^p26906507-approaches|Huys 2016]] Its central practical question is whether the parameters those models produce are reliable enough to measure individuals. [[P36940888 Karvelis 2023 Individual differences in computational psychiatry#^p36940888-psychometrics|Karvelis 2023]]

## How it works

**Theory-driven: models as measuring instruments.** A computational assay pairs a cognitive task with a model to infer hidden, person-specific processes, such as how fast someone learns from reward or how sensitive they are to punishment. [[P36940888 Karvelis 2023 Individual differences in computational psychiatry#^p36940888-assays|Karvelis 2023]] [[P38774643 Mkrtchian 2023 Reliability of reinforcement learning parameters#^p38774643-reliability|Mkrtchian 2023]] Because different models can produce similar behaviour, a good fit is not evidence that the hypothesised mechanism is the true one. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Wilson 2019]]

**Data-driven: prediction without mechanism.** Machine-learning approaches aim to classify disorders, predict outcomes or guide treatment choice directly from data, and a 2016 review of the field argues that the two wings work best in combination. [[P26906507 Huys 2016 Computational psychiatry as a bridge#^p26906507-approaches|Huys 2016]] [[P26906507 Huys 2016 Computational psychiatry as a bridge#^p26906507-combine|Huys 2016]] That review sets out a programme; its clinical payoff depends on reliability and external validation that later work found lacking. [[P26906507 Huys 2016 Computational psychiatry as a bridge#^p26906507-caution-promise|Appraisal: Huys 2016]]

**Bipolar disorder.** On a task separating reward seeking from punishment avoidance, people with bipolar I and bipolar II both learned less from rewards than controls, which the model captured as lower reward relative to punishment sensitivity; bipolar II showed more choice randomness. [[P37591352 Pouchon 2023 Reward and punishment learning in bipolar subtypes#^p37591352-reward|Pouchon 2023]] [[P37591352 Pouchon 2023 Reward and punishment learning in bipolar subtypes#^p37591352-subtypes|Pouchon 2023]] A combined reinforcement-learning and working-memory model linked more severe current manic symptoms to faster working-memory decay, and anhedonia and mood-disorder diagnoses to lower reward learning rates. [[P37839471 Cheng 2024 Reinforcement learning and working memory in mood disorders#^p37839471-wm|Cheng 2024]] [[P37839471 Cheng 2024 Reinforcement learning and working memory in mood disorders#^p37839471-reward|Cheng 2024]] Both are single samples on treatment or at mixed mood states, so illness, medication and current symptoms are not separated. [[P37591352 Pouchon 2023 Reward and punishment learning in bipolar subtypes#^p37591352-caution-medication|Appraisal: Pouchon 2023]] [[P37839471 Cheng 2024 Reinforcement learning and working memory in mood disorders#^p37839471-caution-state|Appraisal: Cheng 2024]]

**ADHD.** Diffusion-model studies agree on a lower drift rate in ADHD, and the few reinforcement-learning studies point to lower choice sensitivity with no change in learning rate. [[P27608958 Ziegler 2016 Modelling ADHD decision-making and learning#^p27608958-drift|Ziegler 2016]] [[P27608958 Ziegler 2016 Modelling ADHD decision-making and learning#^p27608958-rl|Ziegler 2016]] Several competing theories predict the same lower drift rate, so the finding does not choose between them. [[P27608958 Ziegler 2016 Modelling ADHD decision-making and learning#^p27608958-caution-specificity|Appraisal: Ziegler 2016]]

**Autism.** Pooled across 23 studies, autistic participants showed a small-to-moderate difference in the direction a simple Bayesian model predicts, but heterogeneity was large and unexplained, giving only limited support to a universal version of that model. [[P40576893 Cui 2026 Simple Bayesian model of autism meta-analysis#^p40576893-effect|Cui 2026]] [[P40576893 Cui 2026 Simple Bayesian model of autism meta-analysis#^p40576893-heterogeneity|Cui 2026]] Broader priors and sharper sensory precision make overlapping predictions, so the average supports a direction of difference, not a mechanism. [[P40576893 Cui 2026 Simple Bayesian model of autism meta-analysis#^p40576893-caution-identifiability|Appraisal: Cui 2026]]

**PTSD.** A recent review recasts excessive fear of trauma reminders as difficulty learning and updating abstract representations of situations, cites evidence of biased latent-state and model-based learning in PTSD, and suggests these processes may be a shared target of common therapies. [[P38212163 Cisler 2024 Latent-state learning in PTSD#^p38212163-reframe|Cisler 2024]] [[P38212163 Cisler 2024 Latent-state learning in PTSD#^p38212163-evidence|Cisler 2024]] The treatment link is a proposal awaiting trials that measure the process before and after therapy. [[P38212163 Cisler 2024 Latent-state learning in PTSD#^p38212163-caution-hypothesis|Appraisal: Cisler 2024]]

**The reliability problem.** Many computational measures show poor reliability and construct validity, which puts earlier findings on individual and even group differences at risk. [[P36940888 Karvelis 2023 Individual differences in computational psychiatry#^p36940888-psychometrics|Karvelis 2023]] Where reliability has been tested directly, in healthy volunteers over two weeks, reinforcement-learning rates were good and sensitivities only fair, and a person's own parameters predicted their later choices better than other people's did. [[P38774643 Mkrtchian 2023 Reliability of reinforcement learning parameters#^p38774643-reliability|Mkrtchian 2023]] [[P38774643 Mkrtchian 2023 Reliability of reinforcement learning parameters#^p38774643-prediction|Mkrtchian 2023]] That does not establish reliability in clinical groups, other tasks or longer intervals. [[P38774643 Mkrtchian 2023 Reliability of reinforcement learning parameters#^p38774643-caution-generalise|Appraisal: Mkrtchian 2023]]

**Reading rule.** For any computational finding, ask which wing it comes from, whether the model was compared with rivals, whether the parameter's test-retest reliability is known in the population studied, and whether medication and current mood state were accounted for. [[P31769410 Wilson 2019 Computational modelling rules#^p31769410-identifiability|Wilson 2019]] [[P36940888 Karvelis 2023 Individual differences in computational psychiatry#^p36940888-caution-scope|Appraisal: Karvelis 2023]] [[P37591352 Pouchon 2023 Reward and punishment learning in bipolar subtypes#^p37591352-caution-medication|Appraisal: Pouchon 2023]]

## Evidence and status

The field is rich in programmes and thin in replication: the condition findings sourced here are single case-control or cross-sectional samples in bipolar disorder, narrative reviews for ADHD and PTSD, and one meta-analysis with large unexplained heterogeneity in autism. [[P37591352 Pouchon 2023 Reward and punishment learning in bipolar subtypes#^p37591352-limit|Pouchon 2023]] [[P37839471 Cheng 2024 Reinforcement learning and working memory in mood disorders#^p37839471-limit|Cheng 2024]] [[P27608958 Ziegler 2016 Modelling ADHD decision-making and learning#^p27608958-limit|Ziegler 2016]] [[P38212163 Cisler 2024 Latent-state learning in PTSD#^p38212163-limit|Cisler 2024]] [[P40576893 Cui 2026 Simple Bayesian model of autism meta-analysis#^p40576893-heterogeneity|Cui 2026]] The measurement foundation is still being laid: some parameters are reliable in healthy adults over short intervals, many measures are not, and the remedies proposed are framed as steps still needed before clinical use. [[P38774643 Mkrtchian 2023 Reliability of reinforcement learning parameters#^p38774643-reliability|Mkrtchian 2023]] [[P36940888 Karvelis 2023 Individual differences in computational psychiatry#^p36940888-recommendations|Karvelis 2023]]

## Uncertainties

- Whether theory-driven parameters are stable traits or shift with mood state, a live question in bipolar disorder. [[P37839471 Cheng 2024 Reinforcement learning and working memory in mood disorders#^p37839471-caution-state|Appraisal: Cheng 2024]]
- Whether reliability shown in healthy volunteers holds in clinical groups, on other tasks and over longer intervals. [[P38774643 Mkrtchian 2023 Reliability of reinforcement learning parameters#^p38774643-caution-generalise|Appraisal: Mkrtchian 2023]]
- Whether latent-state learning in PTSD changes with successful therapy and tracks symptom change. [[P38212163 Cisler 2024 Latent-state learning in PTSD#^p38212163-caution-hypothesis|Appraisal: Cisler 2024]]
- Which parameter differs in autism, broader priors or sharper sensory precision, which pooled effects cannot settle. [[P40576893 Cui 2026 Simple Bayesian model of autism meta-analysis#^p40576893-caution-identifiability|Appraisal: Cui 2026]]
- No data-driven prediction study is sourced in this library yet, so that wing is described here only in outline.

## Recent research

- **2026 · Systematic review and meta-analysis (Neuropsychology review).** The first meta-analysis of the simple Bayesian model of autism found a small-to-moderate effect in the predicted direction with large unexplained heterogeneity. [[P40576893 Cui 2026 Simple Bayesian model of autism meta-analysis#^p40576893-effect|Cui 2026]] [[P40576893 Cui 2026 Simple Bayesian model of autism meta-analysis#^p40576893-heterogeneity|Cui 2026]]
- **2024 · Narrative review (Trends in neurosciences).** Proposed latent-state and model-based learning as a computational account of PTSD and a possible common target of its therapies. [[P38212163 Cisler 2024 Latent-state learning in PTSD#^p38212163-reframe|Cisler 2024]]
- **2023 · Narrative review (Neuroscience and biobehavioral reviews).** Found poor psychometric properties across many computational measures, the field's main obstacle to individual use. [[P36940888 Karvelis 2023 Individual differences in computational psychiatry#^p36940888-psychometrics|Karvelis 2023]]
- **2023 · Test-retest reliability study (Computational psychiatry (Cambridge, Mass.)).** Showed good two-week reliability for reinforcement-learning rates in healthy volunteers, with fair reliability for sensitivities. [[P38774643 Mkrtchian 2023 Reliability of reinforcement learning parameters#^p38774643-reliability|Mkrtchian 2023]]

## Connections

- [[Levels of analysis]] - theory-driven models make claims at the algorithmic level; tying a parameter to neurons or to symptoms crosses levels and needs its own evidence.
- [[Model comparison and identifiability]] - the method discipline every computational finding depends on: rival models, parameter recovery and out-of-sample checks.
- [[Reinforcement learning]] - supplies the learning-rate and sensitivity parameters used in the bipolar and ADHD applications described here.
- [[Drift diffusion models]] - the evidence-accumulation model behind the ADHD drift-rate finding, and a worked example of turning behaviour into parameters.
- [[Bayesian inference and predictive processing]] - the inference framework behind the autism and PTSD applications, where priors, precision and latent states are the quantities estimated.
- [[Reinforcement learning accounts of ADHD]] - the condition-level account against which computational predictions about ADHD are tested.
- [[Predictive processing accounts of autism]] - where the simple Bayesian model's mixed meta-analytic record is weighed against other autism accounts.
- [[Fear learning and extinction]] - the stimulus-specific fear-learning account that the latent-state proposal for PTSD seeks to extend.

**Cross-domain connection (curation).** Computational psychiatry is the computational domain's route into the condition domains: it turns reinforcement-learning, diffusion and Bayesian formalisms into parameters measured in bipolar disorder, ADHD, autism and PTSD, and the research-methods domain's reliability and validity standards decide whether those parameters are measurements or model artefacts. [[Reinforcement learning]] [[Measurement validity and reliability]] [[Association versus individual prediction]]
