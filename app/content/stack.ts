export type StackRow = {
  label: string;
  // Render helper: segments joined by `·`; groups separated by ` | `
  groups: string[][];
};

export const STACK: StackRow[] = [
  {
    label: "CRM",
    groups: [
      [
        "Salesforce Sales Cloud (Automation · Reporting · Architecture)",
      ],
      [
        "HubSpot Marketing and Sales Hub (Reporting · Automation · Architecture)",
      ],
    ],
  },
  {
    label: "GTM",
    groups: [
      [
        "Apollo",
        "Outreach",
        "Salesloft",
        "Lemlist",
        "Chili Piper",
        "ZoomInfo",
        "RingLead",
        "Chorus",
      ],
    ],
  },
  {
    label: "Finance & Legal",
    groups: [["QuickBooks", "Ironclad", "Celigo"]],
  },
  {
    label: "AI & BI",
    groups: [
      ["Claude", "Gemini", "n8n", "SQL", "SOQL", "Looker", "Coefficient"],
    ],
  },
];
