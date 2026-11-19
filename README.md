# Better Concepcion

An independent civic technology demo that helps residents find public information about Concepcion, Tarlac.

> **This is a prototype, not an official government website or service.** It is not endorsed by the Municipality of Concepcion or BetterGov.ph. It links to public sources and does not process applications, payments, or reports.

## What this demo does

- Search a curated set of public municipal information links.
- Filter sources by topic.
- See the source publisher and when the link was last checked.
- Open the original source rather than treating this site as the record owner.

The initial records are intentionally limited to source pages we have checked. The list is not a complete archive of Concepcion records.

## Run locally

Requirements: Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To create a static production build:

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
  App.tsx             # Search, filters, source list, and page layout
  data/records.ts     # Curated source records and provenance
  index.css           # Responsive styles and accessibility states
docs/                 # Research, concept, coordination, and data plan
```

## Data and limitations

Every listing should point to a primary public source and include a publisher, date checked, and scope. A source link does not imply the linked information is complete or current beyond the source's own publication. Budget/project records are not included yet: they need matching and interpretation checks first. An appropriation is not proof of spending or delivery.

## BetterGov and starter alignment

The interface uses React + TypeScript + Vite, based on the community-listed [Better Local Gov starter](https://github.com/iyanski/betterlocalgov). We replaced the starter's sample municipality content with checked Concepcion source links and a narrower informational demo. The starter repository is available under its [CC0 license](https://github.com/iyanski/betterlocalgov/blob/main/LICENSE).

BetterGov's [BetterLGU guide](https://lgu.bettergov.ph/guide) recommends checking for an existing portal, selecting a community template, using public sources, registering planned work where appropriate, and maintaining it. Its [official budget transparency template](https://github.com/bettergovph/transparency-portal) is a distinct next-phase option if Concepcion's budget/project records can be localized accurately.

## Project documents

- [Research brief](docs/RESEARCH_BRIEF.md)
- [Concept note](docs/CONCEPT_NOTE.md)
- [Information checklist](docs/INFORMATION_CHECKLIST.md)
- [Coordination plan](docs/COORDINATION_PLAN.md)
- [Prototype outline](docs/PROTOTYPE_OUTLINE.md)
- [Data source register](docs/DATA_SOURCES.md)
- [Contributing](CONTRIBUTING.md)

## Before public launch

- Verify each source link and its owning office again.
- Confirm no Concepcion BetterLGU portal or budget portal has since been registered.
- Ask relevant municipal staff to review the demo and suggest corrections.
- Confirm maintenance ownership, source update cadence, accessibility, hosting, and correction routing.
- Use official seals, branding, hosting, or transaction integrations only with appropriate authorization.

## Naming

“Better Concepcion” is a working title. The repository name is `bettergovtarlacph`; it does not establish a registered domain or government affiliation.
