# Concept Note: Better Concepcion Public Information Portal

**For discussion with:** Municipality of Concepcion, Tarlac and BetterGov.ph  
**Prepared as:** Independent civic technology project concept  
**Status:** Draft for feedback; not an official LGU proposal or endorsement

## The idea

Create a small, accessible website that helps residents find public information about local government in one place. The first version would link to original municipal and national sources, explain what each record means, and show a carefully scoped view of public budget/project data where the underlying source supports it.

The project would complement the municipality’s existing website and e-services. It would not replace official channels, process applications, accept payments, or claim to be the official eLGU system.

## Why discuss it now

Concepcion already publishes useful material, including departments, services, the Citizen’s Charter, bidding documents, executive orders, and ordinances. A civic portal could make these easier to discover, connect them to relevant budget/project records, and show when information was last checked. The existing pages are a foundation, not a claim that the LGU has failed to publish information.

## Proposed pilot

### Pilot A — Public records directory (lowest-risk starting point)

- Search and browse links to official services, Citizen’s Charter, ordinances, executive orders, bidding documents, and relevant disclosure pages.
- Show source owner, source link, date checked, document date/year, and a short plain-language description.
- Flag stale or broken links for review; do not silently replace official source documents.

### Pilot B — Budget and project view (subject to data validation)

- Use the BetterGov transparency portal template/API if Concepcion data can be matched reliably.
- Show fiscal year, amount type, source document/page, matching method, and exclusions.
- Explain that an appropriation is not proof of spending, delivery, or irregularity.
- Label uncertain place-name matches and do not present incomplete coverage as a complete municipal inventory.

Recommended sequence: build Pilot A demo first, then add Pilot B only after validating records and discussing methodology with BetterGov and relevant municipal staff.

## What residents could do with it

- Find the official page or document for a service or local policy.
- See what budget/project records are available and where they came from.
- Understand whether a number represents a proposed budget, enacted appropriation, procurement amount, or actual expenditure.
- Report a broken link or point to a missing public record for review.

## What it would not do in the pilot

- Process permits, taxes, civil registry applications, payments, or complaints.
- Publish personal, confidential, or non-public information.
- Automatically conclude that an item is wasteful, anomalous, or corrupt.
- Claim that a document set is complete when records are missing or matching is uncertain.
- Use municipal logos or official-looking branding without approval.

## Proposed delivery and governance

- Independent, open-source static website; no resident account or personal-data collection in the first release.
- Public source register and documented inclusion/exclusion rules.
- Named volunteer maintainers and a correction channel with a review process.
- LGU staff invited to advise on source ownership, terminology, and correction routing; they retain control of official records and services.
- BetterGov invited to advise on template/API use and directory contribution requirements.
- Any future official integration, hosting, branding, form, or transaction flow requires a written agreement and clear operational owner.

## What we are asking for in an introductory discussion

1. Which existing public information pages or records are hardest for residents to locate?
2. Which office owns each source and how often is it updated?
3. Is there a suitable public point of contact for corrections to records or broken links?
4. Which datasets can be safely indexed and which require restrictions or context?
5. Would the LGU be willing to review a non-transactional demo and provide corrections?
6. Who would maintain any official links or information if the site is useful?

This is a request for guidance and feedback, not a request to transfer custody of government data or approve a software deployment during the first meeting.

## Success measures for a pilot

- Proportion of listed items with a working primary-source link and date checked.
- Number of broken/stale sources found and corrected or flagged.
- Coverage of the agreed document categories and clear count of missing categories.
- Ability of a small set of residents to locate selected documents in a short usability session.
- Time required to review and refresh the source list.
- For budget/project data: precision and recall against a manually reviewed sample, plus unresolved matches.

## Suggested 8-week discovery-to-demo plan

| Weeks | Work | Output |
|---|---|---|
| 1–2 | Review public pages and identify source owners/categories | Source inventory and open questions |
| 3 | Hold introductory feedback meeting, if arranged | Confirmed pilot boundary and terminology |
| 4–5 | Build public-record directory with provenance | Clickable local demo |
| 6 | Validate links and sampled data with source documents | Review log and corrections |
| 7 | Usability feedback and accessibility pass | Findings and revised demo |
| 8 | Present options and maintenance requirements | Go/no-go and owner decision |

The timeline assumes volunteer time and timely feedback; it is not an implementation commitment by the LGU or BetterGov.
