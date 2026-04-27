export type Job = {
  title: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
};

export type SkillCategory = {
  label: string;
  items: string[];
};

export type Degree = {
  degree: string;
  school: string;
  location: string;
  year: string;
};

export const SUMMARY =
  "GTM Operations Leader with 10+ years architecting the systems that turn strategy into measurable pipeline. Salesforce-deep (50+ flows, built instances from scratch), AI-first in practice (Claude, Cursor, Clay daily), agnostic across Salesforce + HubSpot. Climate-tech native via Pachama. Currently RevOps Contractor for Chief.";

export const EXPERIENCE: Job[] = [
  {
    title: "RevOps Contractor",
    company: "Chief",
    location: "Remote, Denver CO",
    dates: "2025 - Present",
    bullets: [
      "Designed dual-funnel measurement system replacing single-event MQL with timestamped Qualification Signals (QS) across B2B/B2C buyer paths; architected supporting Salesforce custom objects and Screen Flows.",
      "Built native Lead deduplication, routing, and Convert flows replacing Traction Complete; deployed Email Address Record object for cross-record dedup.",
      "Shipped Lead Review Queue Screen Flow for human-in-the-loop review of AI-qualified Pending Leads.",
    ],
  },
  {
    title: "Manager, GTM Strategy & Operations",
    company: "Pachama",
    location: "Remote, Denver CO",
    dates: "Aug 2021 - Jul 2025",
    bullets: [
      "Designed Salesforce instance and sales funnel from scratch; built and maintained 50+ Flows integrating 12+ external tools (HubSpot, Ironclad, Apollo, ZoomInfo).",
      "Designed Outreach Actions system: cut 30-day average response time to 40 hours and lifted outbound acceptance rate to 80% via Screen Flows, dashboards, and Slack alerts.",
      "Built A/B/C/D/U ICP scoring model combining ZoomInfo firmographics with MSCI ESG and CDP climate disclosure data to align Sales + Marketing on territory and channel investment.",
    ],
  },
  {
    title: "Director, Revenue Operations",
    company: "CB Insights",
    location: "New York, NY",
    dates: "2017 - 2021",
    bullets: [
      "Designed dual-credit attribution model (Source Credit + Funnel Credit, 90-day window) revealing 75% of \"outbound\" SQOs were marketing-sourced; ended the Sales vs Marketing budget tug-of-war.",
      "Built funnel metric analysis with cohort conversions, sales performance analysis (quota attainment), and financial analysis (deferred revenue, ARR).",
      "Coached and mentored junior staff; led a team of 6 after a VP departure to ensure seamless departmental continuity.",
    ],
  },
  {
    title: "Operations Manager",
    company: "LogCheck",
    location: "New York, NY",
    dates: "2014 - 2017",
    bullets: [
      "Integral in growing the company from $12K to $90K+ MRR, 8 to 20 employees, and 80 to 460+ accounts.",
      "Built financial and performance analytic models supporting managerial decisions and board meetings.",
    ],
  },
];

export const SKILLS: SkillCategory[] = [
  {
    label: "CRM & GTM",
    items: [
      "Salesforce (Flow, Apex, data model)",
      "HubSpot (Marketing + Sales Hub)",
      "ZoomInfo",
      "RingLead",
      "Apollo.io",
      "Outreach.io",
      "Salesloft",
      "Lemlist",
      "Chili Piper",
      "Chorus.ai",
      "Gong.io",
    ],
  },
  {
    label: "Data & BI",
    items: ["SQL", "SOQL", "Coefficient", "Looker"],
  },
  {
    label: "AI & Code",
    items: ["Claude", "Cursor", "n8n", "Clay"],
  },
  {
    label: "Finance & Legal",
    items: ["Celigo", "Ironclad", "QuickBooks"],
  },
];

export const EDUCATION: Degree[] = [
  {
    degree: "MS, Sustainability Management",
    school: "Columbia University",
    location: "New York, NY",
    year: "2012",
  },
  {
    degree: "BA, Media Arts",
    school: "University of New Mexico",
    location: "Albuquerque, NM",
    year: "2006",
  },
];
