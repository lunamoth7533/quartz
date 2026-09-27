---
note_type: config
description: "File-explorer order read by the Custom File Explorer sorting plugin: hubs first, domains in atlas order, each map before its theme folders, sources last."
sorting-spec: |
  target-folder: Research
  /: Home
  / Hubs
  / Domains
  / Visualizations
  / Learning
  / Arguments
  / Templates
  / Support
  ...
  target-folder: Research/Hubs
  /: How to use this vault
  /: Reference Index
  /: Library
  ...
  target-folder: Research/Learning
  /: Learning Path
  /: Study Workflow
  / Modules
  / Lessons
  / Maps
  ...
  target-folder: Research/Visualizations
  /: Visualizations
  ...
  target-folder: Research/Domains
  / Neurobiology
  / Neurochemistry
  / Neuroanatomy and Systems Neuroscience
  / Genetics and Neurodevelopment
  / Neuroendocrinology and Neuroimmunology
  / Psychology
  / Computational Neuroscience and Brain Theories
  / Pharmacology
  / Neurology
  / Clinical Psychiatry and Psychopathology
  / Bipolar Disorders
  / ADHD
  / Autism
  / CPTSD
  / Research Methods and Measurement
  ...
  target-folder: Research/Domains/Neurobiology
  /: Neurobiology Map
  /:. Neurobiology Canvas.canvas
  / Structures
  / Processes and mechanisms
  / Frameworks and contested ideas
  ...
  / Articles
  / Pages
  target-folder: Research/Domains/Neurochemistry
  /: Neurochemistry Map
  /:. Neurochemistry Canvas.canvas
  / Structures
  / Mechanisms
  / Contested framing
  ...
  / Articles
  / Pages
  target-folder: Research/Domains/Neuroanatomy and Systems Neuroscience
  /: Neuroanatomy and Systems Neuroscience Map
  /:. Neuroanatomy and Systems Neuroscience Canvas.canvas
  / Foundations
  / Regions
  / Systems
  ...
  / Articles
  / Pages
  target-folder: Research/Domains/Genetics and Neurodevelopment
  /: Genetics and Neurodevelopment Map
  /:. Genetics and Neurodevelopment Canvas.canvas
  / Genetics
  / Development
  ...
  / Articles
  / Pages
  target-folder: Research/Domains/Neuroendocrinology and Neuroimmunology
  /: Neuroendocrinology and Neuroimmunology Map
  /:. Neuroendocrinology and Neuroimmunology Canvas.canvas
  / Axes and physiology
  / Autonomic
  / Timing
  / Immune and barrier
  ...
  / Articles
  / Pages
  target-folder: Research/Domains/Psychology
  /: Psychology Map
  /:. Psychology Canvas.canvas
  / Perception and attention
  / Learning and memory
  / Emotion and social
  / Development and therapy
  ...
  / Articles
  / Pages
  target-folder: Research/Domains/Computational Neuroscience and Brain Theories
  /: Computational Neuroscience and Brain Theories Map
  /:. Computational Neuroscience and Brain Theories Canvas.canvas
  / Foundations
  / Learning and inference
  / Networks and theories
  ...
  / Articles
  / Pages
  target-folder: Research/Domains/Pharmacology
  /: Pharmacology Map
  /:. Pharmacology Canvas.canvas
  / Exposure
  / Action
  / Classes
  / Safety and evidence
  ...
  / Articles
  / Pages
  target-folder: Research/Domains/Neurology
  /: Neurology Map
  /:. Neurology Canvas.canvas
  / Method
  / Measurement
  / Conditions
  ...
  / Articles
  / Pages
  target-folder: Research/Domains/Clinical Psychiatry and Psychopathology
  /: Clinical Psychiatry and Psychopathology Map
  /:. Clinical Psychiatry and Psychopathology Canvas.canvas
  / Description and classification
  / Construct families
  / Formulation and context
  ...
  / Articles
  / Pages
  target-folder: Research/Domains/Bipolar I
  /: Bipolar Disorders Map
  /:. Bipolar Disorders Canvas.canvas
  / Bipolar I
  / Bipolar II
  / Course and features
  / Hypotheses
  / Evidence and treatment
  ...
  / Articles
  / Pages
  target-folder: Research/Domains/ADHD
  /: ADHD Map
  /:. ADHD Canvas.canvas
  / Constructs and assessment
  / Accounts
  / Evidence
  ...
  / Articles
  / Pages
  target-folder: Research/Domains/Autism
  /: Autism Map
  /:. Autism Canvas.canvas
  / Description
  / Biology
  / Assessment and support
  ...
  / Articles
  / Pages
  target-folder: Research/Domains/CPTSD
  /: CPTSD Map
  /:. CPTSD Canvas.canvas
  / Constructs
  / Mechanisms and models
  / Assessment and treatment
  ...
  / Articles
  / Pages
  target-folder: Research/Domains/Research Methods and Measurement
  /: Research Methods and Measurement Map
  /:. Research Methods and Measurement Canvas.canvas
  / Designs
  / Measurement
  / Inference
  / Integrity
  ...
  / Articles
  / Pages
---
# Explorer order

The `sorting-spec` property above is read by the Custom File Explorer sorting plugin. Each `target-folder:` line starts a folder's order; names are listed first-to-last and `...` stands for everything not named. Domains follow [[Home]]; inside a domain the map comes first, then its theme folders in concept-register order, then `Articles` and `Pages`.
