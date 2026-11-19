export type RecordCategory =
  | 'Services'
  | 'Local policies'
  | 'Offices'
  | 'Procurement';

export type PublicRecord = {
  id: string;
  title: string;
  category: RecordCategory;
  description: string;
  publisher: string;
  sourceUrl: string;
  sourceDate?: string;
  scope: string;
  note?: string;
};

export const checkedAt = '19 November 2026';

export const records: PublicRecord[] = [
  {
    id: 'citizens-charter-2026',
    title: "Citizen's Charter 2026",
    category: 'Services',
    description:
      'A guide to municipal services, requirements, fees, and processing steps.',
    publisher: 'Municipality of Concepcion',
    sourceUrl:
      'https://concepciontarlac.org/wp-content/uploads/2026/03/LGU-Concepcion-Tarlac_CC_03312026.pdf',
    sourceDate: '31 March 2026',
    scope: 'Municipal services',
    note: 'Confirm with the LGU whether a newer edition is available.',
  },
  {
    id: 'municipal-services',
    title: 'Municipal services and departments',
    category: 'Services',
    description:
      'Browse municipal offices and their published public-facing service information.',
    publisher: 'Municipality of Concepcion',
    sourceUrl: 'https://concepciontarlac.org/departments/',
    scope: 'Municipal offices and services',
  },
  {
    id: 'egov-services',
    title: 'e-Government services',
    category: 'Services',
    description:
      'Open the e-Government link published on the municipal website for online services.',
    publisher: 'eGovPH, linked by the Municipality of Concepcion',
    sourceUrl: 'https://e.gov.ph/',
    scope: 'National e-government service portal',
    note: 'This demo links out; it does not handle applications or payments.',
  },
  {
    id: 'ordinances',
    title: 'Municipal ordinances',
    category: 'Local policies',
    description:
      'Open the municipal ordinances page and review the records published there.',
    publisher: 'Municipality of Concepcion',
    sourceUrl: 'https://concepciontarlac.org/ordinances/',
    scope: 'Municipal legislation',
    note: 'The demo does not claim this archive is complete.',
  },
  {
    id: 'executive-orders',
    title: 'Executive orders',
    category: 'Local policies',
    description:
      'Browse the municipal executive orders page by year and open the original documents.',
    publisher: 'Municipality of Concepcion',
    sourceUrl: 'https://concepciontarlac.org/executive-orders/',
    scope: 'Municipal executive issuances',
  },
  {
    id: 'sangguniang-bayan',
    title: 'Sangguniang Bayan of Concepcion',
    category: 'Offices',
    description:
      'Visit the separate public website for the municipal legislative body.',
    publisher: 'Sangguniang Bayan of Concepcion',
    sourceUrl: 'https://sbo-contar.com/',
    scope: 'Municipal legislative information',
    note: 'Ask the SB Secretariat which archive is the canonical source for each record type.',
  },
  {
    id: 'bidding-documents',
    title: 'Bidding documents and other records',
    category: 'Procurement',
    description:
      'Open the municipal page linked under Transparency → Other Documents → Bidding Documents.',
    publisher: 'Municipality of Concepcion',
    sourceUrl: 'https://concepciontarlac.org/other-documents/',
    scope: 'Municipal public documents',
    note: 'Individual file coverage and update cadence have not yet been reviewed.',
  },
];

export const categories: Array<'All records' | RecordCategory> = [
  'All records',
  'Services',
  'Local policies',
  'Offices',
  'Procurement',
];
