# Prototype Outline

## Purpose

Demonstrate how a resident can find public records, see where they came from, and understand their limits. The prototype is informational only and should not collect accounts, applications, payments, or sensitive reports.

## Initial screens

### Home

- Working project name and independent-project notice
- Search box for services, ordinances, offices, budget/project records
- Recently checked source links and a “how this works” link
- Clear link to the official Municipality of Concepcion website

### Browse records

- Categories: services, ordinances/resolutions, executive orders, procurement, plans/budgets, projects, audits/disclosure
- Search and filters by category, office, year, barangay/geography where known
- Each result shows title, publisher/office, date/year, source link, last checked, and confidence/coverage note

### Record detail

- Plain-language description
- Original source and direct document link
- Publisher, date, fiscal year, geographic scope
- What the record does and does not establish
- Link issue / correction instructions that do not require public personal information

### Budget/project view (only after validation)

- Year and stage selector
- Amount labels with definitions
- Original source document/page links
- Match explanation and uncertainty marker
- Exclusions with reason
- Methodology and API/source freshness date

### About and methodology

- Independent status and maintainers
- Data sources and update cadence
- Matching and inclusion rules
- Known limitations, exclusions, correction workflow
- Privacy and accessibility notes

## Content record model (draft)

```text
id
title
category
publisher
owning_office
source_url
document_url
published_at
checked_at
fiscal_year
geographic_scope
amount_value (optional)
amount_type (optional)
match_method
confidence_or_review_status
limitations
```

Avoid storing document copies or resident data in the first demo. A hand-curated JSON dataset is sufficient for a few public records; a static site can render it without a backend.

## Suggested demo dataset

Start with a small set of records already confirmed on public official pages: municipal home page, departments page, 2026 Citizen's Charter, one bidding-documents page, one ordinance/EO source, and one existing e-service link. Add budget/project entries only after checking exact source records and the BetterGov API matching behavior.

## Nonfunctional requirements

- Usable on low-bandwidth mobile connections
- Keyboard navigable; clear headings, focus states, text alternatives, and readable contrast
- No login, analytics tracker, or personal-data form in the pilot
- Search engine indexing for public records, without implying official status
- Visible “last checked” date and a way to identify stale/broken sources
- Static hosting and documented local build/deploy steps

## Demo acceptance criteria

- A first-time user can find a selected official record in under two minutes in a small usability walkthrough.
- Every demo item opens a primary source or is clearly marked unavailable.
- Every item states publisher and date checked; budget values also state fiscal year and amount type.
- Uncertain or missing data is explicitly labeled.
- The independent/non-official status is visible on every page.
- No transaction, payment, account creation, or sensitive-data collection is enabled.
