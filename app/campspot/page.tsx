import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { CaseStudies } from "../components/CaseStudies";
import { About } from "../components/About";
import { Stack } from "../components/Stack";
import { Testimonial } from "../components/Testimonial";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { FadeInOnScroll } from "../components/FadeInOnScroll";
import { BrandIcon } from "../components/BrandIcon";

export const metadata: Metadata = {
  title: "Tyler Johnson for Campspot — Sr. Manager, Revenue Operations",
  description:
    "First ops hire DNA. Two-sided marketplace operator. HubSpot-fluent, Salesforce-deep, AI-first in practice.",
  robots: { index: false, follow: false },
};

type LogoRef = { slug?: string; src?: string };
type Metric = {
  label: string;
  logo?: LogoRef;
  dualLogos?: [LogoRef, LogoRef];
};

const SFDC: LogoRef = { src: "/logos/salesforce.svg" };
const HUBSPOT: LogoRef = { slug: "hubspot" };

const METRICS: Metric[] = [
  { label: "10+ yrs Rev Ops" },
  { label: "First ops hire at Pachama" },
  { label: "Built two-sided GTM stack" },
  { label: "Marketing automation depth", logo: HUBSPOT },
  { label: "Agnostic across both", dualLogos: [SFDC, HUBSPOT] },
];

const WHY_THIS_FITS = [
  {
    title: "First-ops-hire DNA, not a layered-org operator",
    body:
      "I came into Pachama as the first ops hire and built the GTM layer from scratch: Salesforce instance, HubSpot marketing automation, forecasting cadence, the works. Sole RevOps operator across my full tenure. That's the muscle this role needs day one.",
  },
  {
    title: "Two-sided marketplace experience, structurally",
    body:
      "Pachama ran a broker model with separate supply and demand funnels feeding an inventory system I built in Salesforce. Campspot's software-plus-marketplace flywheel is the same structural problem: operationalize both sides, design the data model that ties them together, then build reporting that makes the flywheel visible to leadership.",
  },
  {
    title: "HubSpot from the marketing automation side",
    body:
      "Led marketing ops in HubSpot at Pachama alongside RevOps - lifecycle stages, lead scoring, workflows, nurture, attribution. Lifecycle automation is one of the largest scopes in this role and I'm not starting from scratch. Salesforce admin remains my deepest CRM skill set, and the data-model thinking transfers cleanly.",
  },
  {
    title: "Ships hard things end-to-end, scrappy by default",
    body:
      "Each case study below is one of these: saw the problem, designed the system, built it, measured the outcome. No buffer team, no four-quarter rollout. This page itself was built with Claude Code and Cursor over a weekend.",
  },
];

export default function CampspotPage() {
  return (
    <>
      <Nav />
      <main id="top">
        <section className="mx-auto max-w-5xl px-6 pb-12 pt-12 sm:pt-16">
          <p className="text-sm font-medium uppercase tracking-wider text-navy">
            For Campspot · Sr. Manager, Revenue Operations
          </p>
          <h1 className="mt-3 font-serif text-5xl font-medium tracking-tight text-ink sm:text-6xl">
            Tyler Johnson
          </h1>
          <p className="mt-3 text-xl text-ink-muted sm:text-2xl">
            Revenue Operations Leader
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink">
            Senior Manager seat reporting to a brand-new CRO, sole RevOps day
            one, building the function from scratch - this is exactly the
            shape of role I&apos;m built for. First ops hire at Pachama,
            HubSpot-fluent, two-sided marketplace operator, Denver-local, no
            relocation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/johnsondtyler/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-shell hover:bg-accent"
            >
              View LinkedIn
            </a>
            <a
              href="#contact"
              className="rounded-full border border-ink px-6 py-3 text-sm font-medium text-ink hover:border-accent hover:text-accent"
            >
              Get in Touch
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-2 border-t border-hairline pt-6">
            {METRICS.map((metric) => (
              <li
                key={metric.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-shell-alt px-3 py-1 text-sm text-ink-muted"
              >
                {metric.dualLogos ? (
                  <span className="flex items-center gap-0.5">
                    <BrandIcon
                      slug={metric.dualLogos[0].slug}
                      logoSrc={metric.dualLogos[0].src}
                      label={metric.label}
                      className="h-3.5 w-3.5"
                      brandColor
                      noFallback
                    />
                    <BrandIcon
                      slug={metric.dualLogos[1].slug}
                      logoSrc={metric.dualLogos[1].src}
                      label={metric.label}
                      className="h-3.5 w-3.5"
                      brandColor
                      noFallback
                    />
                  </span>
                ) : (
                  <BrandIcon
                    slug={metric.logo?.slug}
                    logoSrc={metric.logo?.src}
                    label={metric.label}
                    className="h-3.5 w-3.5 text-ink-muted"
                    noFallback
                  />
                )}
                <span>{metric.label}</span>
              </li>
            ))}
          </ul>
        </section>

        <FadeInOnScroll>
          <section className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              Why this fits
            </h2>
            <ul className="mt-6 grid gap-6 sm:grid-cols-2">
              {WHY_THIS_FITS.map((item) => (
                <li
                  key={item.title}
                  className="rounded-lg border border-hairline bg-shell-alt/40 p-6"
                >
                  <h3 className="font-serif text-xl font-medium text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink">{item.body}</p>
                </li>
              ))}
            </ul>
          </section>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <CaseStudies
            ids={[
              "two-sided-inventory",
              "icp-lead-scoring",
              "outreach-actions",
              "retire-the-mql",
            ]}
          />
        </FadeInOnScroll>
        <FadeInOnScroll>
          <About />
        </FadeInOnScroll>
        <FadeInOnScroll>
          <Stack />
        </FadeInOnScroll>
        <FadeInOnScroll>
          <Testimonial />
        </FadeInOnScroll>
        <FadeInOnScroll>
          <Contact positioningLine="Best for the Sr. Manager, Revenue Operations role at Campspot. Denver-local, no relocation, hybrid-ready from day one." />
        </FadeInOnScroll>
      </main>
      <Footer />
    </>
  );
}
