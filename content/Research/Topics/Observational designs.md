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
cssclasses: [research-topic]
tags: [research/topic, research/reference, research/domain/methods]
---
# Observational designs

## Definition

Observational designs measure exposures and outcomes without assigning them. Cohort studies follow groups forward, case-control studies sample by outcome and look backward at exposure, and cross-sectional studies measure both at one time.

## How it works

**Cohort.** Following people over time allows incidence and temporal ordering to be estimated, at the cost of attrition and long follow-up. [[F09 Noba Research designs#^f09-designs|Research designs]]

**Case-control.** Efficient for rare outcomes, but selection of controls determines what the comparison means and recall of exposure can be biased.

**Cross-sectional.** Cheap and useful for prevalence and association; it cannot establish order of events, so it cannot distinguish cause from consequence. [[F09 Noba Research designs#^f09-correlation|Research designs]]

**Reporting.** STROBE specifies items for these designs so that selection, measurement and analysis are visible to readers. [[P17941715 Vandenbroucke 2007 STROBE#^p17941715-purpose|STROBE]] [[P17941715 Vandenbroucke 2007 STROBE#^p17941715-elaboration|STROBE]]

**Design-level limits.** A well-conducted observational study can support strong causal arguments if confounders are measured and the design constrains alternatives, but the burden of argument is higher than in a randomised trial. [[F09 Noba Research designs#^f09-confounds|Research designs]]

## Evidence and status

Observational designs carry most of the evidence on long-term outcomes, risk factors and rare events; their inference depends on assumptions that should be stated rather than assumed. [[P30097390 Cortese 2018 ADHD medication efficacy and tolerability#^p30097390-longterm|ADHD medication efficacy and tolerability]]

> [!info]- In depth: what cohort, case-control and cross-sectional studies can establish
> **The family and its reporting standard.** STROBE provides reporting guidance for observational studies - cohort, case-control and cross-sectional - so that design, selection and analysis are transparent, and its explanation and elaboration paper documents why each item matters, often with examples of adequate and inadequate reporting. Reporting quality is not the same as study quality: a fully reported study can still be biased, which is why checklists are not risk-of-bias tools. [[P17941715 Vandenbroucke 2007 STROBE#^p17941715-purpose|STROBE]] [[P17941715 Vandenbroucke 2007 STROBE#^p17941715-elaboration|STROBE]] [[P17941715 Vandenbroucke 2007 STROBE#^p17941715-limits|STROBE]]
>
> **The design's basic logic.** Observational designs describe what co-occurs: a cohort follows people forward and records outcomes, a case-control design samples by outcome and looks backwards at exposures, and a cross-sectional design measures exposure and outcome together. Each answers a different question, and the cross-sectional version is the weakest for anything about order or cause because both variables are measured at one time. [[F09 Noba Research designs#^f09-designs|Research Designs]] [[F09 Noba Research designs#^f09-correlation|Research Designs]]
>
> **Why causal language needs care.** Correlation between two variables does not establish that one causes the other, because a third variable or reverse direction can explain it. Confounding and selection effects distort comparisons - selection because who enters a study is itself a consequence of exposure and outcome. The observable consequences in the clinical literature include spurious associations from differential healthcare access and the well-documented tendency of observational estimates to overstate effects that later randomised studies find smaller. [[F09 Noba Research designs#^f09-correlation|Research Designs]] [[F09 Noba Research designs#^f09-confounds|Research Designs]] [[P16060722 Ioannidis 2005 Why most findings are false#^p16060722-probability|Why most published research findings are false]]
>
> **What observational designs are actually for.** They are the only available design for questions that cannot be randomised - age of onset, natural course, long-term outcome, exposure to harm - and they generate the hypotheses that trials later test. When the observational literature is large and consistent, it can constrain causal claims even without randomisation; the STROBE guidance exists precisely so that readers can judge whether a given study supports the inference being drawn. [[P17941715 Vandenbroucke 2007 STROBE#^p17941715-limit|STROBE]]
>
> **Reading rule.** Identify the design, the sampling frame and the comparison group before reading a coefficient. The number of confounding paths that remain open is usually more informative than the size of an unadjusted difference. [[P30097390 Cortese 2018 ADHD medication efficacy and tolerability#^p30097390-longterm|ADHD medication efficacy and tolerability]] [[F09 Noba Research designs#^f09-limit|Research Designs]]

> [!info]- Further depth: what cohorts, case-control and cross-sectional studies can carry
> Observational designs describe what co-occurs: a cohort follows people forward, a case-control design samples by outcome and looks backwards, and a cross-sectional design measures exposure and outcome together, which is the weakest basis for order or cause. STROBE exists so that design, selection and analysis are transparent, but its own commentary notes that reporting quality is not study quality and the checklists are not risk-of-bias tools. These designs remain the only route for questions that cannot be randomised, which is why consistency across them constrains causal claims even without randomisation. [[F09 Noba Research designs#^f09-designs|Research Designs]] [[P17941715 Vandenbroucke 2007 STROBE#^p17941715-purpose|STROBE]] [[P17941715 Vandenbroucke 2007 STROBE#^p17941715-limits|STROBE]]
>
> **The design family earns its keep where randomisation cannot go.** Exposures that are harmful, fixed or long-running - smoking, temperament, social adversity - cannot be randomised, so cohorts, case-control studies and natural experiments are the available routes to exposure-outcome questions. Their inferential cost is confounding; their assets are realism, long horizons and exposure variety that trials cannot ethically or practically touch. [[F09 Noba Research designs#^f09-correlation|Research Designs]] [[Observational designs]]
>
> **Case-control logic inverts the timeline and borrows its risks.** Sampling on outcome and looking back at exposure is efficient for rare outcomes but depends on recall and records, and selection of controls becomes part of the estimate. The classic biases - recall, selection, survivorship - are design properties to be managed at design time, which is why source population and control selection receive as much methodological attention as exposure measurement. [[Bias and confounding]] [[Reading a study and matching populations]]
>
> **Cross-domain connection (curation).** The cytokines and microbiome articles in the neuroendocrine domain are observational literatures whose conclusions are bounded by this design family's limits, and the causal-inference article supplies the framework their authors appeal to. [[Cytokines and inflammation in psychiatric conditions]] [[Causality and counterfactuals]]

## Connections

Pairs with [[Causality and counterfactuals]] and [[Observational designs]], and underpins the long-term material in the condition domains.

## Uncertainties

- Unmeasured confounding cannot be excluded by analysis, only argued about.
