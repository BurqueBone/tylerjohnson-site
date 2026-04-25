export type CaseStudy = {
  id: string;
  headline: string;
  employer: string;
  title: string;
  body: string[]; // paragraphs
  tools: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "outreach-actions",
    headline: "30-day response avg -> 40 hours",
    employer: "at Pachama",
    title: "Outreach Actions",
    body: [
      "Pachama's outbound SDRs were working stale leads with no visibility into who'd been touched, by whom, when, or whether the last touch got a response. Average time-to-first-response was over 30 days.",
      "The system didn't need more reminders. It needed a single source of truth for \"what's next on this account\" plus automated nudges when things went cold.",
      "Screen Flow-driven outreach actions on Lead and Contact. Dashboard showing owner-level activity. Slack alerts when an action was skipped or went stale.",
      "Response average dropped from 30 days to 40 hours. Acceptance rate on outbound climbed to 80%.",
    ],
    tools: [
      "HubSpot Forms",
      "Salesforce Flows",
      "Slack",
      "Salesforce Dashboard",
    ],
  },
  {
    id: "icp-lead-scoring",
    headline: "A/B/C/D/U ICP model grounded in climate-credible data",
    employer: "at Pachama",
    title: "ICP Analysis & Lead Scoring",
    body: [
      "\"ICP fit\" was vibes. SDRs chased logos that looked interesting. Marketing spent on channels no one had measured against close rate. Nobody could say what an A-tier account actually looked like.",
      "For a climate-tech company, the ICP couldn't be \"any mid-market SaaS company with 200+ employees.\" It had to bake in credibility signals: CDP disclosure, MSCI ESG data, sector-specific carbon maturity.",
      "A/B/C/D/U tiered scoring model combining ZoomInfo firmographics with MSCI + CDP climate data. Auto-tagged every Lead, Account, and Opp. Fed back into territory design and channel investment decisions.",
      "Sales and Marketing finally worked from the same ICP definition. Close rates on A-tier accounts were visible, defendable, and trended up quarter over quarter.",
    ],
    tools: [
      "Salesforce",
      "ZoomInfo",
      "MSCI ESG data",
      "CDP disclosure data",
      "Coefficient",
    ],
  },
  {
    id: "two-touch-attribution",
    headline: "75% of \"outbound\" SQOs were actually marketing-sourced",
    employer: "at CB Insights",
    title: "Two-Touch Attribution",
    body: [
      "CBI's attribution model was Sales vs Marketing tug-of-war. Every SQO got claimed as \"outbound\" because the SDR was the last human touch. Marketing had no defense and no way to prove what their spend was actually doing.",
      "Attribution needed two dimensions, not one. Source Credit answers \"who created the interest?\" Funnel Credit answers \"who advanced it?\" A 90-day counter between the two catches the common case where marketing warmed a lead and outbound closed the deal.",
      "Dual-credit attribution model in Salesforce. 90-day trailing window from first marketing touch. Dashboard showing Source vs Funnel credit for every closed deal.",
      "75% of SQOs labeled \"outbound\" turned out to be marketing-sourced. Budget conversations stopped being political and started being data-driven.",
    ],
    tools: [
      "HubSpot Forms",
      "Salesforce Flows",
      "Coefficient",
      "Salesforce Dashboard",
    ],
  },
  {
    id: "retire-the-mql",
    headline: "Retire the MQL. Track the signals.",
    employer: "at an executive network with a split B2B / B2C membership model",
    title: "Qualification Signals, not MQL",
    body: [
      "Same sourcing channels fed two distinct buyer journeys: enterprise accounts buying memberships for their executives, and individuals buying their own. Lead Status conflated outreach engagement with funnel position. No way to track which path a lead was on, measure path-specific conversion rates, or account for records that switched paths mid-journey. Leadership got a blended number that hid both the real B2B close rates and the B2C volume dynamics.",
      "MQL, as most teams use it, is a single stage gate fired once, and the funnel loses resolution the moment a qualified lead re-engages, gets re-enriched, or gets re-qualified by an AI program. The fix: retire MQL-as-singular-event and replace it with Qualification Signals (QS) - timestamped, typed events that can fire multiple times without regressing a record's lifecycle stage. Separating lifecycle stage from qualification, and stamping the buyer path at each transition, unlocked honest path-specific reporting that survived re-qualification and path switches.",
      "The build: Lifecycle Stage and Outreach Status separated into two dimensions. Path_at_First_[Stage] stamp fields, set once and never overwritten, so conversion rates stay honest when buyers switch paths. Stage_Transition_History custom object logs every stage change AND every Qualification Signal, giving a complete audit trail queryable in the chosen BI tool. 5 Qualification Signal triggers tracked as first-class categories: inbound action, outbound prospecting, enrichment refresh, AI program, re-qualification. Pure-path cohorts (zero switches) as the forecasting baseline; switchers tracked as an adjustment layer. Path switch Screen Flow + Path_Switch_History object for the crossover cohort.",
      "Two-Touch Attribution (previous role) treated MQL as a single threshold event. This work generalizes that idea: qualification is a stream of typed, timestamped signals, not a one-time gate. The funnel stops lying about which motion is actually working.",
    ],
    tools: [
      "Salesforce Flows",
      "Coefficient",
      "Salesforce Dashboard",
    ],
  },
];
