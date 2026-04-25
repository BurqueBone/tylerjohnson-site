export type StackItem = { label: string; logo?: string };
export type StackRow = { label: string; groups: StackItem[][] };

export const STACK: StackRow[] = [
  {
    label: "CRM",
    groups: [
      [
        { label: "Salesforce Sales Cloud", logo: "salesforce" },
        { label: "Automation" },
        { label: "Reporting" },
        { label: "Architecture" },
      ],
      [
        { label: "HubSpot Marketing & Sales Hub", logo: "hubspot" },
        { label: "Reporting" },
        { label: "Automation" },
        { label: "Architecture" },
      ],
    ],
  },
  {
    label: "GTM",
    groups: [
      [
        { label: "Apollo" },
        { label: "Outreach", logo: "outreach" },
        { label: "Salesloft", logo: "salesloft" },
        { label: "Lemlist", logo: "lemlist" },
        { label: "Chili Piper", logo: "chilipiper" },
        { label: "ZoomInfo", logo: "zoominfo" },
        { label: "RingLead", logo: "ringlead" },
        { label: "Chorus", logo: "chorus" },
      ],
    ],
  },
  {
    label: "Finance & Legal",
    groups: [
      [
        { label: "QuickBooks", logo: "quickbooks" },
        { label: "Ironclad", logo: "ironclad" },
        { label: "Celigo", logo: "celigo" },
      ],
    ],
  },
  {
    label: "AI & BI",
    groups: [
      [
        { label: "Claude", logo: "anthropic" },
        { label: "Gemini", logo: "googlegemini" },
        { label: "n8n", logo: "n8n" },
        { label: "SQL" },
        { label: "SOQL" },
        { label: "Looker", logo: "looker" },
        { label: "Coefficient" },
      ],
    ],
  },
];
