---
note_type: hub
title: Attachments
cssclasses: [research-hub]
tags: [research/support]
---

# Attachments

Local files here are kept with their download provenance. A local copy is not a reading status: the source record still says what was verified.

| File | Provenance | Verified |
| --- | --- | --- |
| `NIMH - Autism Spectrum Disorder.pdf` | Official NIMH public education PDF: https://www.nimh.nih.gov/sites/default/files/documents/health/publications/autism-spectrum-disorder/autism-spectrum-disorder.pdf | 8 pages; sha256 `64bfe90e4a0c8c1c632e3abfcef5c13f83d1f6c44ab5731ed80b550d932aa2b3` |
| `attachments-receipt.json` | Machine-readable copy of the download receipts | Generated 2026-09-24 |


## Failed downloads (link-only sources)

These endpoints returned HTTP 403 on 2026-09-24, so the vault keeps the official online link and claims no local copy:

- NINDS Brain Basics: Understanding Sleep - https://www.ninds.nih.gov/sites/default/files/2025-05/understanding-sleep.pdf (page link: [[F14 NINDS Brain basics understanding sleep]])
- Europe PMC render for the 2026 phase-based therapy meta-analysis - https://europepmc.org/articles/PMC13063326?pdf=render (source: [[P41949043 Lee 2026 Phase-based versus non-phase-based trauma therapy]])
- King's College London author manuscript for the 2020 autism primer - https://kclpure.kcl.ac.uk/ws/files/122611358/LOrd_et_al_2020_NRDP_Nealry_final_version_Autism_spectrum_disorder.pdf (source: [[P31949163 Lord 2020 Autism spectrum disorder primer]])

The failed manuscript attempt is recorded in the parent workspace receipt `manuscript-download-receipt.json`; no retry loop was run.
