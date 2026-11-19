# Better Concepcion — Research Brief and Contribution Path

**Research snapshot:** 19 November 2026  
**Scope:** Independent, software-only civic transparency project for Concepcion, Tarlac. This is an initial desk-research brief, not an official LGU proposal or an audit.

## Recommendation

Start with a **Concepcion budget transparency portal** using BetterGov.ph's maintained `transparency-portal` template. Keep it clearly independent and public-information-only. A later, broader BetterConcepcion site can organize links to official records, services, ordinances, procurement notices, and projects.

This is a better first release than trying to build a full e-government system: it has a defined software template and data API, while the municipality's existing site already provides many service and transparency pages. It also avoids implying that an independent project is an official government service.

## Important distinction: Bamban eLGU vs. BetterLGU

The Bamban eLGU site describes online transactions such as business permits, local civil registration, and community tax certificates. That is an **online service-delivery** model. BetterLGU is a **civic information/transparency** model: a public site that helps residents find budgets, projects, officials, ordinances, and government records.

We can borrow Bamban's clear service-oriented presentation, but the first Concepcion project should be described as an independent transparency portal unless the LGU formally partners with us.

## What already exists for Concepcion

The Municipality of Concepcion's website already has sections for municipal officials, departments, barangays, e-services, Citizen's Charter, bidding documents, executive orders, and ordinances. Its 2026 Citizen's Charter is online. The Sangguniang Bayan also has a separate public website focused on local legislation.

These sources make a useful baseline. A first civic portal could make them easier to find and explain, while linking to original files rather than copying official claims without provenance.

Potential starting records:
- Official municipal website and its transparency section
- 2026 Citizen's Charter and service process descriptions
- Sangguniang Bayan ordinances and legislative materials
- DILG Full Disclosure Policy portal postings, where Concepcion records are available
- COA audit reports, verifying municipality and fiscal year before including
- DBM / BetterGov budget data and public project documents
- PhilGEPS bid notices and award documents, labeled by procuring entity and scope

## BetterGov contribution route

There are two related repositories; their workflows differ.

### 1. BetterGov budget portal (recommended first project)

Repository: [bettergovph/transparency-portal](https://github.com/bettergovph/transparency-portal)  
Guide: [How to Start Your Budget Transparency Portal](https://github.com/jmacj/better-lgu-directory/blob/main/BUDGET_GUIDE.md)

The guide says to check the budget portal directory first, fork the template, install dependencies, run `npm run setup` to select the LGU, then run `npm run check` and preview with `npm run dev`. The setup writes `portal.config.ts`. Review name-only project matches carefully; a municipality may be missed if the project title does not name it. Disclose exclusions and their reasons. Deploy as a static site, run checks in CI, then submit a directory PR after it is live.

The template uses BetterGov's public Budget API and is designed to avoid a server/database. Its published amounts are budget appropriations, **not actual spending**. NEP and House Bill figures are versions of the same proposed budget and must be compared, never summed. A project listed in only one version is a candidate for review, not proof of an irregularity. Municipality-level attribution is incomplete; namesakes and title-based matching need manual review and transparent exclusions.

Directory status was checked during this research: I found no Concepcion, Tarlac or Bamban entry in the BetterLGU directory snapshot. Recheck before starting because the directory can change. The budget guide says to add a budget portal to its directory only after it is live; for an integrated portal, the BetterLGU site must already be listed and its maintainers must agree to host it.

### 2. Broader BetterLGU civic portal (later expansion)

Repository: [jmacj/better-lgu-directory](https://github.com/jmacj/better-lgu-directory)  
Guide: [BetterLGU contribution guide](https://github.com/jmacj/better-lgu-directory/blob/main/GUIDE.md)

The guide describes independent, volunteer-built portals based on public records. It recommends checking the directory, registering a planned LGU portal when applicable, choosing a template, using official public sources, deploying on static hosting, and keeping the directory entry current. Its README and guide should be reread at implementation time for current requirements.

BetterGov's general contribution docs are at [docs.bettergov.ph/docs/contributing](https://docs.bettergov.ph/docs/contributing). Its main project contribution workflow uses a fork, feature branch, and pull request. A contribution to BetterGov's general platform is different from publishing an independent LGU portal using its template.

## Scope proposal

### Phase 0 — Verify and prepare
1. Recheck the BetterLGU and budget directories.
2. Inspect the current template, API documentation, and `portal.config.ts` setup.
3. Confirm that Concepcion appears in the API and measure exact and name-only matches.
4. Create a source register: source URL, publisher, date retrieved, fiscal year, geographic scope, file type, and known caveats.
5. Choose an independent project name and hosting arrangement. Check domain availability only when ready; no domain was checked as part of this research.

### Phase 1 — Minimum useful release
Build a static budget portal with:
- Municipality selector/clear Concepcion scope and fiscal-year labels
- Project list, amount, source document/page, and NEP/House comparison
- Links to source pages and BetterGov API documentation
- About/data-method page listing match rules and every exclusion with reason
- Visible caveat: appropriations are not actual expenditures; municipality matching may be incomplete
- Accessible, mobile-friendly interface and export if supported by the template

### Phase 2 — Local transparency index
Add a searchable index of links to official Concepcion documents: Citizen's Charter, ordinances, executive orders, bidding documents, official service pages, and available FDP/COA records. Preserve original publishers and dates. Do not rehost files unless license/permission and update practices are clear.

### Phase 3 — Evidence and update workflow
Add documented periodic checks for broken links, changed API results, new fiscal years, and source updates. Consider citizen-submitted corrections only after an explicit moderation and privacy design; a report is a lead to check, not a verified finding.

## Biggest hurdles

1. **Geographic attribution:** National budget and DPWH projects are not consistently tagged to municipalities. Title matching can miss local projects and include namesakes.
2. **Source quality and freshness:** PDFs may be incomplete, replaced, scanned, or posted late. Each record needs source date/version and a link to the original.
3. **Budget vs. execution:** An appropriation does not prove an obligation, disbursement, completed project, or service outcome.
4. **Interpretation risk:** Additions, omissions, and unusual amounts can be misread as wrongdoing. Present them as items to verify, not conclusions.
5. **Maintenance:** API shape, fiscal years, official links, and BetterGov templates change. A portal needs an owner and a documented refresh cadence.
6. **Trust and identity:** An independent portal must not look like an official municipal site. Clearly identify maintainers, methods, corrections, and non-affiliation.
7. **Local participation:** Better coverage may depend on residents and municipal staff identifying missing records. The project can be useful without official cooperation, but cooperation could improve completeness.

## Research gap and defensible research angle

A portal by itself is a civic software deliverable, not automatically a research contribution. A research study could evaluate **how accurately and maintainably public budget records can be localized to a municipality using an open, software-only pipeline**.

Possible research questions:
- What proportion of candidate records can be reliably attributed to Concepcion using exact identifiers, place-name matching, and manual verification?
- What kinds of false positives and false negatives arise from name matching?
- Can provenance metadata, explicit exclusions, and source links make uncertainty legible to users?
- How often do official/API sources change, and what maintenance effort is needed to keep the portal current?
- Does a structured transparency index reduce the time needed to locate a selected public document in a small usability study?

A feasible study would define a bounded dataset and fiscal year; independently label a sample against original source documents; compare automated matching with manual adjudication; report precision, recall, unmatched records, update effort, and reviewer disagreements. Avoid treating the portal's figures as evidence of corruption or assuming formal verification guarantees data correctness.

## What to do next in this project

1. Inspect the transparency-portal repository and its setup requirements.
2. Run a read-only feasibility check for Concepcion against the live API and report candidate counts and matching caveats.
3. Draft the data/source register and a first portal outline.
4. Only then decide whether to fork, deploy, and submit a BetterGov directory PR.

## Source links

- [BetterGov contribution documentation](https://docs.bettergov.ph/docs/contributing)
- [BetterGov transparency-portal repository](https://github.com/bettergovph/transparency-portal)
- [BetterLGU directory](https://lgu.bettergov.ph/)
- [BetterLGU contributor guide](https://github.com/jmacj/better-lgu-directory/blob/main/GUIDE.md)
- [BetterLGU budget portal guide](https://github.com/jmacj/better-lgu-directory/blob/main/BUDGET_GUIDE.md)
- [Budget portal directory](https://lgu.bettergov.ph/BUDGET)
- [Bamban eLGU services](https://elgu-bamban-tarlac.e.gov.ph/)
- [Municipality of Concepcion official website](https://concepciontarlac.org/)
- [Concepcion departments](https://concepciontarlac.org/departments/)
- [Concepcion Citizen's Charter 2026 PDF](https://concepciontarlac.org/wp-content/uploads/2026/03/LGU-Concepcion-Tarlac_CC_03312026.pdf)
- [Concepcion General Services Office service process](https://concepciontarlac.org/general-services-office-internal/)
- [Sangguniang Bayan of Concepcion](https://sbo-contar.com/)
- [DILG Full Disclosure Policy portal](https://fdpp.dilg.gov.ph/)
- [DBM COMPASS](https://compass.dbm.gov.ph/)
- [PhilGEPS](https://notices.philgeps.gov.ph/)
- [COA audit reports](https://www.coa.gov.ph/reports/)
