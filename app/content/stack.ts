export type StackItem = { label: string; logo?: string; logoSrc?: string };
export type StackRow = { label: string; groups: StackItem[][] };

export const STACK: StackRow[] = [
  {
    label: "CRM",
    groups: [
      [
        { label: "Salesforce Sales Cloud", logoSrc: "/logos/salesforce.svg" },
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
        { label: "Outreach", logoSrc: "/logos/outreach.png" },
        { label: "Salesloft", logoSrc: "/logos/salesloft.png" },
        { label: "Lemlist", logoSrc: "/logos/lemlist.png" },
        { label: "Chili Piper", logoSrc: "/logos/chilipiper.png" },
        { label: "ZoomInfo", logoSrc: "/logos/zoominfo.png" },
        { label: "RingLead", logo: "ringlead" },
        { label: "Chorus", logoSrc: "/logos/chorus.png" },
      ],
    ],
  },
  {
    label: "Finance & Legal",
    groups: [
      [
        { label: "QuickBooks", logo: "quickbooks" },
        { label: "Ironclad", logoSrc: "/logos/ironclad.webp" },
        { label: "Celigo", logoSrc: "/logos/celigo.svg" },
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
        { label: "Coefficient", logoSrc: "/logos/coefficient.png" },
      ],
    ],
  },
];
