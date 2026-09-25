---
note_type: topic
title: "Observational designs"
description: "Cohort, case-control and cross-sectional designs, their characteristic biases, and the reporting standards built for them."
content_layer: reference
concept_kind: method
domain: [research-methods]
secondary_domain: []
condition: []
source_count: 4
reviewed: 2026-09-25
up: "[[Research Methods and Measurement - Designs]]"
cssclasses: [research-topic]
tags: [research/topic, research/reference, research/domain/methods]
---
# Observational designs

## Definition

Observational designs measure exposures and outcomes without assigning them. Cohort studies follow groups forward, case-control studies sample by outcome and look backward at exposure, and cross-sectional studies measure both at one time.

## How it works

**Three designs, three questions.** Observational designs measure what co-occurs, and each design answers a different question. A cohort follows people forward and records outcomes, which allows incidence and temporal ordering to be estimated, at the cost of attrition and long follow-up. [[F09 Noba Research designs#^f09-designs|Research designs]]

**Case-control logic inverts the timeline and borrows its risks.** A case-control design samples by outcome and looks backwards at exposure. That is efficient for rare outcomes but depends on recall and records, and the selection of controls becomes part of the estimate: it determines what the comparison means. The classic biases - recall, selection, survivorship - are design properties to be managed at design time, which is why source population and control selection receive as much methodological attention as exposure measurement. [[Bias and confounding]] [[Reading a study and matching populations]]

**Cross-sectional.** A cross-sectional design measures exposure and outcome together. It is cheap and useful for prevalence and association, but because both variables are measured at one time it cannot establish the order of events, so it cannot distinguish cause from consequence and is the weakest basis of the three for anything about order or cause. [[F09 Noba Research designs#^f09-correlation|Research designs]]

**Why causal language needs care.** Correlation between two variables does not establish that one causes the other, because a third variable or reverse direction can explain it. Confounding and selection effects distort comparisons - selection because who enters a study is itself a consequence of exposure and outcome. The observable consequences in the clinical literature include spurious associations from differential healthcare access and the well-documented tendency of observational estimates to overstate effects that later randomised studies find smaller. [[F09 Noba Research designs#^f09-correlation|Research Designs]] [[F09 Noba Research designs#^f09-confounds|Research Designs]] [[P16060722 Ioannidis 2005 Why most findings are false#^p16060722-probability|Why most published research findings are false]]

**Where randomisation cannot go.** Observational designs are the only available route for questions that cannot be randomised - age of onset, natural course, long-term outcome, exposure to harm - and they generate the hypotheses that trials later test. Exposures that are harmful, fixed or long-running - smoking, temperament, social adversity - cannot be randomised, so cohorts, case-control studies and natural experiments are the available routes to exposure-outcome questions. Their inferential cost is confounding; their assets are realism, long horizons and exposure variety that trials cannot ethically or practically touch. [[F09 Noba Research designs#^f09-correlation|Research Designs]] [[Observational designs]]

**Reporting.** STROBE provides reporting guidance for cohort, case-control and cross-sectional studies, specifying items so that design, selection, measurement and analysis are transparent to readers, and its explanation and elaboration paper documents why each item matters, often with examples of adequate and inadequate reporting. Its own commentary notes that reporting quality is not the same as study quality: a fully reported study can still be biased, which is why the checklists are not risk-of-bias tools. [[P17941715 Vandenbroucke 2007 STROBE#^p17941715-purpose|STROBE]] [[P17941715 Vandenbroucke 2007 STROBE#^p17941715-elaboration|STROBE]] [[P17941715 Vandenbroucke 2007 STROBE#^p17941715-limits|STROBE]]

**Reading rule.** Identify the design, the sampling frame and the comparison group before reading a coefficient. The number of confounding paths that remain open is usually more informative than the size of an unadjusted difference. [[P30097390 Cortese 2018 ADHD medication efficacy and tolerability#^p30097390-longterm|ADHD medication efficacy and tolerability]] [[F09 Noba Research designs#^f09-limit|Research Designs]]

## Evidence and status

Observational designs carry most of the evidence on long-term outcomes, risk factors and rare events; their inference depends on assumptions that should be stated rather than assumed. [[P30097390 Cortese 2018 ADHD medication efficacy and tolerability#^p30097390-longterm|ADHD medication efficacy and tolerability]] A well-conducted observational study can support strong causal arguments if confounders are measured and the design constrains alternatives, but the burden of argument is higher than in a randomised trial. [[F09 Noba Research designs#^f09-confounds|Research designs]] When the observational literature is large and consistent across designs, it can constrain causal claims even without randomisation; the STROBE guidance exists precisely so that readers can judge whether a given study supports the inference being drawn. [[P17941715 Vandenbroucke 2007 STROBE#^p17941715-limit|STROBE]]

## Connections

Pairs with [[Causality and counterfactuals]] and [[Observational designs]], and underpins the long-term material in the condition domains.

**Cross-domain connection (curation).** The cytokines and microbiome articles in the neuroendocrine domain are observational literatures whose conclusions are bounded by this design family's limits, and the causal-inference article supplies the framework their authors appeal to. [[Cytokines and inflammation in psychiatric conditions]] [[Causality and counterfactuals]]

## Uncertainties

- Unmeasured confounding cannot be excluded by analysis, only argued about.
