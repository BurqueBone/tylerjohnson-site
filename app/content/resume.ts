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
  "GTM Operations Leader with 10+ years architecting the systems that turn strategy into measurable pipeline. Salesforce-deep (50+ flows, built instances from scratch), AI-first in practice (Claude, Cursor, Clay daily), agnostic across Salesforce + HubSpot. Climate-tech native via Pachama.";

export const EXPERIENCE: Job[] = [
  {
    title: "Senior Revenue Operations Engineer",
    company: "Chief",
    location: "Remote, Denver CO (contractor, full-time since Jun 2026)",
    dates: "Oct 2025 - Present",
    bullets: [
      "Architected a signal-based qualification framework that replaced single-event MQLs with timestamped buying signals across B2B and B2C funnels.",
      "Built full-funnel stage tracking, capturing when records enter each stage and why they recycle or close lost, giving leadership pipeline history it never had.",
      "Led data quality improvements across hundreds of thousands of records, making CRM data reliable for reps, routing, and reporting.",
      "Designed scalable lead routing and deduplication that matches leads to existing accounts and contacts, so leads reach the right owner faster.",
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
