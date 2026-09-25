---
note_type: hub
title: Visualizations
cssclasses: [research-hub]
tags: [research/visualizations]
---

# Visualizations

This page is the dashboard layer for the research library. It uses properties that already exist in the source and topic notes, so the views update when notes change.

Two distinctions matter:

- **Verification** says what was checked: `abstract_checked`, `full_text_checked`, `educational_checked`, or an official page, document or article-page check.
- **Reading status** says whether you have read the source. Everything currently remains `queued`; a downloaded PDF is not a read source.

## Visual index

Each view answers one question. Graph views live under **Bookmarks → Graph views**; opening one switches the graph to that filter, colouring and layout.

| Question | Where to look |
| --- | --- |
| How is the library organised? | Graph view *Domain hierarchy* · the domain canvases below · [[Knowledge Explorer.base]] (*Subdomain cards*) |
| How does everything connect? | Graph views *Knowledge map* and *Concept skeleton* |
| Which domains lean on each other? | *Domain connections* diagram below · the family graph views |
| How well checked is the evidence? | *Evidence checking by domain* chart · graph view *Evidence quality* · [[Library.base]] (*Access and verification*) |
| Which sources carry the most weight? | *Evidence reach* chart · [[Knowledge Explorer.base]] (*Evidence reach*) |
| How old is the evidence? | *Evidence age* chart · [[Knowledge Explorer.base]] (*Evidence age*) |
| What kind of knowledge does each domain hold? | *Concept kinds* chart · graph view *Concept kinds* |
| Which topics bridge domains? | [[Knowledge Explorer.base]] (*Bridge topics*) |
| What should I read next? | [[Reading Queue Map.canvas]] · [[Library.base]] (*Reading Queue Board*) · the tables further down |
| What does the course teach, and in what order? | Graph view *Learning layer* · [[Learning Library.base]] · the learning maps |
| Where are the open arguments? | Graph view *Arguments* · the argument maps beside each argument note |
| Where am I? | The Breadcrumbs trail at the top of every note · the local graph · ExcaliBrain |

## Graph views

Colour says where a note belongs; with Extended Graph on (the default), shape says what it is.

- **Colour:** blue - neuroscience foundations · green - psychology · orange - clinical psychiatry, neurology, pharmacology · red - bipolar I, ADHD, autism, CPTSD · yellow - research methods · lavender - subdomain notes · white - hubs and domain maps · grey - sources (darker for articles, lighter for pages) · teal - learning layer · magenta - arguments.
- **Shape:** hexagon - domain map · diamond - subdomain · circle - topic · square - source · triangle - argument · pentagon - lesson · octagon - module · star - hub.
- **Views:** *Knowledge map* (everything) · *Concept skeleton* (sources hidden) · *Domain hierarchy* (atlas, maps, subdomains, topics; arrows point up the hierarchy) · *Evidence quality* (sources coloured by how they were checked: green full text, amber abstract, blue educational page, white official; topics dimmed) · *Concept kinds* (topics by structure, process, mechanism, theory, method, condition, framework) · one close-up per family, with the psychology and methods views coloured by subdomain · *Learning layer* · *Arguments*.
- **Local graph:** the global colour groups are copied into every local graph, so a note's neighbourhood uses the same legend.

## Charts

The charts are computed from note properties and links each time the page renders.

### Library shape: topics and filed sources per domain

```dataviewjs
const order = ["Neurobiology","Neurochemistry","Neuroanatomy and Systems Neuroscience","Genetics and Neurodevelopment","Neuroendocrinology and Neuroimmunology","Psychology","Computational Neuroscience and Brain Theories","Pharmacology","Neurology","Clinical Psychiatry and Psychopathology","Bipolar I","ADHD","Autism","CPTSD","Research Methods and Measurement"];
const pages = dv.pages('"Research/Domains"');
const n = (d, f) => pages.where(p => p.file.path.split("/")[2] === d && f(p)).length;
window.renderChart({type: "bar", data: {labels: order, datasets: [
  {label: "Topics", data: order.map(d => n(d, p => p.note_type === "topic")), backgroundColor: "#4F9BF0"},
  {label: "Articles filed here", data: order.map(d => n(d, p => p.note_type === "source" && p.file.folder.endsWith("/Articles"))), backgroundColor: "#6E7787"},
  {label: "Pages filed here", data: order.map(d => n(d, p => p.note_type === "source" && p.file.folder.endsWith("/Pages"))), backgroundColor: "#9AA3B2"}]},
  options: {indexAxis: "y", scales: {x: {stacked: true}, y: {stacked: true}}}}, this.container);
```

### Evidence checking by domain: how the sources each domain's topics cite were checked

```dataviewjs
const order = ["Neurobiology","Neurochemistry","Neuroanatomy and Systems Neuroscience","Genetics and Neurodevelopment","Neuroendocrinology and Neuroimmunology","Psychology","Computational Neuroscience and Brain Theories","Pharmacology","Neurology","Clinical Psychiatry and Psychopathology","Bipolar I","ADHD","Autism","CPTSD","Research Methods and Measurement"];
const kinds = {"Full text": "#4CC38A", "Abstract or article page": "#F5B93B", "Educational page": "#7FA7D9", "Official page or document": "#F2F2F7"};
const cls = v => v === "full_text_checked" ? "Full text" : (v === "abstract_checked" || v === "article_page_checked") ? "Abstract or article page" : v === "educational_checked" ? "Educational page" : "Official page or document";
const seen = Object.fromEntries(order.map(d => [d, Object.fromEntries(Object.keys(kinds).map(k => [k, new Set()]))]));
for (const t of dv.pages('"Research/Domains"').where(p => p.note_type === "topic")) {
  const d = t.file.path.split("/")[2];
  for (const l of t.file.outlinks) { const s = dv.page(l.path); if (s && s.note_type === "source" && seen[d]) seen[d][cls(s.verification)].add(s.file.path); }
}
window.renderChart({type: "bar", data: {labels: order, datasets: Object.entries(kinds).map(([k, c]) => ({label: k, backgroundColor: c, data: order.map(d => seen[d][k].size)}))},
  options: {indexAxis: "y", scales: {x: {stacked: true, title: {display: true, text: "distinct sources cited by the domain's topics"}}, y: {stacked: true}}}}, this.container);
```

### Evidence age: sources by publication year

```dataviewjs
const src = dv.pages('"Research/Domains"').where(p => p.note_type === "source" && Number(p.year) > 1900);
const years = src.map(p => Number(p.year)).array();
const lo = Math.floor(Math.min(...years) / 5) * 5, hi = Math.floor(Math.max(...years) / 5) * 5;
const bins = []; for (let b = lo; b <= hi; b += 5) bins.push(b);
const n = (b, f) => src.where(p => Number(p.year) >= b && Number(p.year) < b + 5 && f(p)).length;
window.renderChart({type: "bar", data: {labels: bins.map(b => b + "-" + String(b + 4).slice(2)), datasets: [
  {label: "Articles", data: bins.map(b => n(b, p => p.file.folder.endsWith("/Articles"))), backgroundColor: "#6E7787"},
  {label: "Pages", data: bins.map(b => n(b, p => p.file.folder.endsWith("/Pages"))), backgroundColor: "#9AA3B2"}]},
  options: {scales: {x: {stacked: true}, y: {stacked: true, title: {display: true, text: "sources"}}}}}, this.container);
```

### Concept kinds: what sort of knowledge each domain holds

```dataviewjs
const order = ["Neurobiology","Neurochemistry","Neuroanatomy and Systems Neuroscience","Genetics and Neurodevelopment","Neuroendocrinology and Neuroimmunology","Psychology","Computational Neuroscience and Brain Theories","Pharmacology","Neurology","Clinical Psychiatry and Psychopathology","Bipolar I","ADHD","Autism","CPTSD","Research Methods and Measurement"];
const kinds = {structure: "#4F9BF0", process: "#43C6D6", mechanism: "#4CC38A", theory: "#B07CF0", method: "#E9D44D", condition: "#F0506E", framework: "#F59E3B"};
const topics = dv.pages('"Research/Domains"').where(p => p.note_type === "topic");
window.renderChart({type: "bar", data: {labels: order, datasets: Object.entries(kinds).map(([k, c]) => ({label: k, backgroundColor: c,
  data: order.map(d => topics.where(p => p.file.path.split("/")[2] === d && p.concept_kind === k).length)}))},
  options: {indexAxis: "y", scales: {x: {stacked: true}, y: {stacked: true}}}}, this.container);
```

### Evidence reach: the sources cited by the most topics

```dataviewjs
const top = dv.pages('"Research/Domains"').where(p => p.note_type === "source")
  .map(p => ({name: p.file.name, n: dv.array(p.file.inlinks).where(l => (dv.page(l.path) || {}).note_type === "topic").length}))
  .sort(x => x.n, "desc").limit(15);
window.renderChart({type: "bar", data: {labels: top.map(x => x.name).array(), datasets: [{label: "topics citing it", data: top.map(x => x.n).array(), backgroundColor: "#9AA3B2"}]},
  options: {indexAxis: "y"}}, this.container);
```

### Domain connections: links between topics in different domains

Each line joins two domains; its number counts topic-to-topic links across them. The strongest pairs are shown.

```dataviewjs
const order = ["Neurobiology","Neurochemistry","Neuroanatomy and Systems Neuroscience","Genetics and Neurodevelopment","Neuroendocrinology and Neuroimmunology","Psychology","Computational Neuroscience and Brain Theories","Pharmacology","Neurology","Clinical Psychiatry and Psychopathology","Bipolar I","ADHD","Autism","CPTSD","Research Methods and Measurement"];
const fam = d => ["Psychology"].includes(d) ? "psy" : ["Pharmacology", "Neurology", "Clinical Psychiatry and Psychopathology"].includes(d) ? "clin" : ["Bipolar I", "ADHD", "Autism", "CPTSD"].includes(d) ? "cond" : d === "Research Methods and Measurement" ? "meth" : "found";
const short = {"Neuroanatomy and Systems Neuroscience": "Neuroanatomy", "Genetics and Neurodevelopment": "Genetics and development", "Neuroendocrinology and Neuroimmunology": "Neuroendocrine and immune", "Computational Neuroscience and Brain Theories": "Computational", "Clinical Psychiatry and Psychopathology": "Clinical psychiatry", "Research Methods and Measurement": "Research methods"};
const dom = p => p.file.path.split("/")[2], id = d => "D" + order.indexOf(d), pair = {};
for (const t of dv.pages('"Research/Domains"').where(p => p.note_type === "topic"))
  for (const l of t.file.outlinks) { const o = dv.page(l.path); if (!o || o.note_type !== "topic" || dom(o) === dom(t)) continue;
    const k = [dom(t), dom(o)].sort().join("|"); pair[k] = (pair[k] || 0) + 1; }
let m = "graph LR\n";
order.forEach(d => m += `  ${id(d)}["${short[d] || d}"]:::${fam(d)}\n`);
Object.entries(pair).sort((a, b) => b[1] - a[1]).slice(0, 28).forEach(([k, n]) => { const [a, b] = k.split("|"); m += `  ${id(a)} ---|${n}| ${id(b)}\n`; });
m += "  classDef found fill:#4F9BF0,color:#111,stroke:none\n  classDef psy fill:#4CC38A,color:#111,stroke:none\n  classDef clin fill:#F59E3B,color:#111,stroke:none\n  classDef cond fill:#F0506E,color:#111,stroke:none\n  classDef meth fill:#E9D44D,color:#111,stroke:none\n";
dv.paragraph("```mermaid\n" + m + "```");
```

## Hierarchy and navigation

- **Breadcrumbs** shows the trail *Research Atlas > domain map > subdomain > topic* at the top of every note, built from each note's `up` property; its tree and matrix views list children and siblings.
- **ExcaliBrain** (command palette: *ExcaliBrain: Start*) draws the open note with its parents above, children below and linked notes beside it; it reads the same `up` links.
- **Mindmap NextGen** (command palette: *Mindmap: Open as mindmap*) turns the open note's headings into a mind map.
- **Strange New Worlds** counts, beside each link and block anchor, how many notes reference it, so a source anchor shows how many topics rely on it.
- **Domain canvases** give each domain's subdomains, topics and most-cited evidence on one board: [[Neurobiology Canvas.canvas|Neurobiology]] · [[Neurochemistry Canvas.canvas|Neurochemistry]] · [[Neuroanatomy and Systems Neuroscience Canvas.canvas|Neuroanatomy]] · [[Genetics and Neurodevelopment Canvas.canvas|Genetics and neurodevelopment]] · [[Neuroendocrinology and Neuroimmunology Canvas.canvas|Neuroendocrinology]] · [[Psychology Canvas.canvas|Psychology]] · [[Computational Neuroscience and Brain Theories Canvas.canvas|Computational]] · [[Pharmacology Canvas.canvas|Pharmacology]] · [[Neurology Canvas.canvas|Neurology]] · [[Clinical Psychiatry and Psychopathology Canvas.canvas|Clinical psychiatry]] · [[Bipolar I Canvas.canvas|Bipolar I]] · [[ADHD Canvas.canvas|ADHD]] · [[Autism Canvas.canvas|Autism]] · [[CPTSD Canvas.canvas|CPTSD]] · [[Research Methods and Measurement Canvas.canvas|Research methods]]. They are snapshots of 2026-09-25; each map's *In this folder* section is the live view.

## Native Bases

Open [[Library.base]] for the operational views:

- **Source Table** - all source records with bibliographic and verification fields.
- **Reading Queue Board** - card view grouped by `queue_tier`.
- **Condition Cards** - source cards grouped by condition.
- **Condition coverage** and **Domain coverage** - grouped summaries.
- **Source kind summary** - papers versus educational or official sources.
- **Access and verification** - access level grouped with verification labels.
- Condition views for **Bipolar I**, **ADHD**, **Autism** and **CPTSD**.

## Reading rules

1. Use `queue_tier` to choose the order; do not let an interesting abstract jump the queue.
2. Read `access_level` before trusting scope: abstract-only evidence cannot support a full-text claim.
3. Keep reported findings, scope limits and analyst cautions in separate source blocks.
4. Update `reading_status` only after reading the source.
5. Move a claim to an argument map only when its source links and limits are explicit.

## Reading queue

```dataview
TABLE WITHOUT ID file.link AS Source, year AS Year, source_kind AS Kind, condition AS Condition, domain AS Domain, access_level AS Access, verification AS Verified, queue_tier AS Queue
FROM #research/source AND -"Research/Templates"
WHERE reading_status = "queued"
SORT queue_tier ASC, year DESC, file.name ASC
```

### Core queue

```dataview
TABLE WITHOUT ID file.link AS Source, year AS Year, condition AS Condition, domain AS Domain, access_level AS Access, verification AS Verified
FROM #research/source AND -"Research/Templates"
WHERE reading_status = "queued" AND queue_tier = "core"
SORT year DESC, file.name ASC
```

### Advanced queue

```dataview
TABLE WITHOUT ID file.link AS Source, year AS Year, condition AS Condition, domain AS Domain, access_level AS Access, verification AS Verified
FROM #research/source AND -"Research/Templates"
WHERE reading_status = "queued" AND queue_tier = "advanced"
SORT year DESC, file.name ASC
```

## Access and verification

### Sources not checked from a downloaded full text

```dataview
TABLE WITHOUT ID file.link AS Source, source_kind AS Kind, access_level AS Access, verification AS Verified, source_url AS URL
FROM #research/source AND -"Research/Templates"
WHERE access_level = "abstract-only" OR access_level = "public-page"
SORT access_level ASC, source_kind ASC, file.name ASC
```

### Access-level coverage

```dataview
TABLE length(rows) AS Sources, rows.file.link AS Records
FROM #research/source AND -"Research/Templates"
GROUP BY access_level
SORT access_level ASC
```

### Verification coverage

```dataview
TABLE length(rows) AS Sources, rows.file.link AS Records
FROM #research/source AND -"Research/Templates"
GROUP BY verification
SORT verification ASC
```

## Source-kind coverage

### Papers

```dataview
TABLE WITHOUT ID file.link AS Paper, year AS Year, condition AS Condition, domain AS Domain, study_type AS Design, access_level AS Access, verification AS Verified
FROM #research/source AND -"Research/Templates"
WHERE source_kind = "paper"
SORT year DESC, file.name ASC
```

### Educational and official sources

```dataview
TABLE WITHOUT ID file.link AS Source, publisher AS Publisher, year AS Year, condition AS Condition, domain AS Domain, access_level AS Access, verification AS Verified
FROM #research/source AND -"Research/Templates"
WHERE source_kind = "educational"
SORT publisher ASC, file.name ASC
```

### Counts by source kind

```dataview
TABLE length(rows) AS Sources, rows.file.link AS Records
FROM #research/source AND -"Research/Templates"
GROUP BY source_kind
SORT source_kind ASC
```

## Condition and domain coverage

### Sources per condition

```dataview
TABLE length(rows) AS Sources, rows.file.link AS Records
FROM #research/source AND -"Research/Templates"
FLATTEN condition AS Condition
WHERE Condition
GROUP BY Condition
SORT Condition ASC
```

### Sources per domain

```dataview
TABLE length(rows) AS Sources, rows.file.link AS Records
FROM #research/source AND -"Research/Templates"
FLATTEN domain AS Domain
WHERE Domain
GROUP BY Domain
SORT Domain ASC
```

### Bipolar I sources

```dataview
TABLE WITHOUT ID file.link AS Source, year AS Year, domain AS Domain, study_type AS Design, access_level AS Access, verification AS Verified
FROM #research/source AND -"Research/Templates"
WHERE contains(condition, "bipolar-i")
SORT year DESC, file.name ASC
```

### ADHD sources

```dataview
TABLE WITHOUT ID file.link AS Source, year AS Year, domain AS Domain, study_type AS Design, access_level AS Access, verification AS Verified
FROM #research/source AND -"Research/Templates"
WHERE contains(condition, "adhd")
SORT year DESC, file.name ASC
```

### Autism sources

```dataview
TABLE WITHOUT ID file.link AS Source, year AS Year, domain AS Domain, study_type AS Design, access_level AS Access, verification AS Verified
FROM #research/source AND -"Research/Templates"
WHERE contains(condition, "autism")
SORT year DESC, file.name ASC
```

### CPTSD sources

```dataview
TABLE WITHOUT ID file.link AS Source, year AS Year, domain AS Domain, study_type AS Design, access_level AS Access, verification AS Verified
FROM #research/source AND -"Research/Templates"
WHERE contains(condition, "cptsd")
SORT year DESC, file.name ASC
```

## Topic coverage

### Topics by evidence count

```dataview
TABLE WITHOUT ID file.link AS Topic, source_count AS Sources, condition AS Condition, domain AS Domain
FROM #research/topic AND -"Research/Templates"
SORT source_count DESC, file.name ASC
```

### Topics needing more source coverage

```dataview
TABLE WITHOUT ID file.link AS Topic, source_count AS Sources, condition AS Condition, domain AS Domain
FROM #research/topic AND -"Research/Templates"
WHERE source_count <= 1
SORT source_count ASC, file.name ASC
```

## Argument dashboard

```dataview
TABLE WITHOUT ID file.link AS Argument, status AS Status, confidence AS Confidence, condition AS Condition, domain AS Domain
FROM "Research/Arguments"
SORT file.name ASC
```

## Canvas synthesis maps

- [[Evidence Map Template.canvas]] - claim, evidence standard, objections, uncertainty and next check.
- [[Argument Map Template.canvas]] - competing explanations, deciding evidence and overreach guard.
- [[Topic System Template.canvas]] - one topic connected to the five foundation domains.
- [[Reading Queue Map.canvas]] - strategic reading queue and access rules.
- [[Research Synthesis Map.canvas]] - the full condition, foundation and argument landscape.

## Reading rules

1. Use `queue_tier` to choose the order; do not let an interesting abstract jump the queue.
2. Read `access_level` before trusting scope: abstract-only evidence cannot support a full-text claim.
3. Keep reported findings, scope limits and analyst cautions in separate source blocks.
4. Update `reading_status` only after reading the source.
5. Move a claim to an argument map only when its source links and limits are explicit.

## Learning views

- [[Learning Dashboard]] - Dataview tables for lessons by module, prerequisites, question coverage and new sources.
- [[Learning Library.base]] - native Base cards and tables for lessons, modules and assessment coverage.

These views read the `Learning/` folder; the source and topic views above stay the evidence layer.