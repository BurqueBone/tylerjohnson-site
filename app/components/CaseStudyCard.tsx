"use client";

import { useState } from "react";
import type { CaseStudy } from "../content/case-studies";
import { BrandIcon } from "./BrandIcon";

// Map tool names to simple-icons slugs where available
const TOOL_LOGOS: Record<string, string> = {
  "HubSpot Forms": "hubspot",
  "Salesforce Flows": "salesforce",
  Salesforce: "salesforce",
  Slack: "slack",
  ZoomInfo: "zoominfo",
  Coefficient: "coefficient",
};

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      id={study.id}
      className="group border-t border-hairline transition-colors first:border-t-0 hover:bg-shell-alt/40"
    >
      <button
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded((v) => !v)}
        className="block w-full cursor-pointer px-2 py-8 text-left sm:px-4 sm:py-12"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
          <h3 className="font-serif text-3xl font-medium leading-tight text-accent sm:text-4xl md:text-5xl">
            {study.title}
          </h3>
          <span
            aria-hidden
            className={`text-sm text-ink-muted transition-transform duration-300 ${
              expanded ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </div>
        {study.tagline ? (
          <p className="mt-3 text-base text-ink-muted sm:text-lg">{study.tagline}</p>
        ) : null}

        <div
          className={`grid transition-[grid-template-rows] duration-500 ease-out ${
            expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="mt-6 max-w-3xl space-y-4 text-ink">
              {study.body.map((paragraph, i) => (
                <p key={i} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        <ul
          className="mt-6 flex flex-wrap gap-2"
          aria-label="Tools used"
        >
          {study.tools.map((tool) => {
            const logoSlug = TOOL_LOGOS[tool];
            return (
              <li
                key={tool}
                className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-shell-alt px-3 py-1 text-xs text-ink-muted"
              >
                <BrandIcon slug={logoSlug} label={tool} className="h-3 w-3" />
                <span>{tool}</span>
              </li>
            );
          })}
        </ul>
      </button>
    </article>
  );
}
