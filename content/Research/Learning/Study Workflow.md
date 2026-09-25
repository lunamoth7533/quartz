---
note_type: learning-aid
title: "Study Workflow"
cssclasses: [research-hub]
tags: [research/learning, research/workflow]
---

# Study Workflow

This is the study routine for the learning layer. It uses retrieval practice (recalling from memory) and
distributed practice (spacing sessions out) because a systematic review of 56 studies and 63 experiments in
health professions education found that both approaches were usually better than rereading, massed study or no
intervention for academic grades. [[P37615780 Trumble 2024 Distributed and retrieval practice review#^p37615780-results|Trumble 2024, distributed and retrieval practice]]

That evidence has clear limits and they are worth stating before the routine: the studies were heterogeneous,
no meta-analysis was possible, quality scoring was done by a single reviewer, and the outcome was grades in
health professions education rather than understanding of this vault's material. Time on task and assessment
stakes are both confounders the authors flag. [[P37615780 Trumble 2024 Distributed and retrieval practice review#^p37615780-limits|Trumble 2024, limitations]]

## The session loop

1. **Retrieve first.** Before reading the lesson, write everything you can recall about the topic in two minutes.
   Getting it wrong is useful; the effort is part of the effect.
2. **Read with questions open.** Read the lesson once, then close it and answer its *Check yourself* questions
   from memory. Write the answers, do not just recognise them.
3. **Check against the words.** Compare your answer with the answer notes, then with the claim in the topic note
   and the source block it cites. Note precisely which part you missed.
4. **Do one worked example yourself.** The lessons use hypothetical scenarios. Invent a small variant (change the
   population, the endpoint or the design) and redo the reasoning.
5. **Log the gap.** In [[Study session template]], record the missed idea, not the whole topic. That log drives
   the next session.

## Spacing

- First review: later the same day, from memory only.
- Second review: two to three days later, using the missed items from the log.
- Third review: about a week later, by re-answering the module assessment in the module guide.
- Maintenance review: roughly monthly for the modules you rely on; make it a retrieval session, not a reread.

The intervals above are a workable default, not a finding about optimal spacing. The review evidence supports
spacing over massing; it does not identify the best schedule, and it does not test this vault's material.
[[P37615780 Trumble 2024 Distributed and retrieval practice review#^p37615780-caution-transfer|AI synthesis: Trumble 2024]]

## Working with the evidence layer

- A lesson is teaching text; a topic note holds the atomic claim; a source block decides. When they disagree,
  the source block wins and the lesson is wrong and should be fixed ([[Learning Maintenance]]).
- Keep `reading_status` honest. This layer does not mark a source read because a lesson cites it; the user's
  reading state stays `queued` until they read it.
- Treat every group statistic as a group statistic. Write "in the studied sample" before you write a sentence
  about people.
- Separate mechanism from outcome. A plausible mechanism is a hypothesis about *how*; it is not evidence that an
  intervention changes what matters.

## A worked study week

| Day | Session | Output |
| --- | --- | --- |
| Monday | Lesson 1 of a module, retrieval-first | Missed-item log entry |
| Tuesday | Recall the same lesson cold; then lesson 2 | Updated log, one worked example |
| Thursday | Re-answer lesson 1 and 2 questions; start lesson 3 | Module progress note |
| Sunday | Module assessment from memory | List of claims you cannot yet source |

That last list is the most valuable output: bring it back to the *Sources* folder and trace it, or leave it as a
named open question rather than a vague memory.
