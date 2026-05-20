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
  title: "Tyler Johnson for Chestnut Carbon — Revenue Operations",
  description:
    "Climate-tech operator who built Pachama's GTM layer from scratch. Salesforce-deep, AI-first in practice, fluent in the carbon-credit buyer journey.",
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
  { label: "10+ yrs GTM Ops" },
  { label: "First ops hire at Pachama" },
  { label: "Carbon-credit buyer journey" },
  { label: "50+ SFDC flows shipped", logo: SFDC },
  { label: "Agnostic across both", dualLogos: [SFDC, HUBSPOT] },
];

const WHY_THIS_FITS = [
  {
    title: "Carbon-market native, not adjacent",
    body:
      "Built Pachama's go-to-market layer from scratch (2021-2025), the first ops hire. Sat next to MRV, science, and origination every day. I know how an offtake gets to signature, what disclosure data buyers actually care about, and why CDR credibility is the gating asset for enterprise demand. The Chestnut Carbon thesis (US southeast afforestation, durable removals, named offtakes) is the conversation I have been in.",
  },
  {
    title: "First-ops-hire DNA, scrappy by default",
    body:
      "Sole RevOps operator across my Pachama tenure. Stood up Salesforce, HubSpot marketing automation, forecasting cadence, ICP scoring, the works. No buffer team, no four-quarter rollouts. If Chestnut needs the GTM layer built or rebuilt around its commercial motion, that is the muscle I bring on day one.",
  },
  {
    title: "Salesforce-deep, data-model first",
    body:
      "50+ Salesforce flows shipped, full data-model designs, complex validation, dedupe, and lead-to-account matching. For a credit business the data model is the product: project, vintage, registry, offtake, delivery schedule. I build that layer carefully because it is what makes downstream revenue reporting and audit defensible.",
  },
  {
    title: "AI-first in practice, not theory",
    body:
      "Claude Code daily, this page itself built with Claude in Cursor over a weekend. At Chief I run an AI-augmented RevOps function. For a fast-growing carbon developer that means ops leverage without ops headcount bloat, and a teammate who can ship internal tooling instead of waiting on a roadmap.",
  },
];

export default function ChestnutCarbonPage() {
  return (
    <>
      <Nav />
      <main id="top">
        <section className="mx-auto max-w-5xl px-6 pb-12 pt-12 sm:pt-16">
          <p className="text-sm font-medium uppercase tracking-wider text-navy">
            For Chestnut Carbon · Revenue Operations
          </p>
          <h1 className="mt-3 font-serif text-5xl font-medium tracking-tight text-ink sm:text-6xl">
            Tyler Johnson
          </h1>
          <p className="mt-3 text-xl text-ink-muted sm:text-2xl">
            Revenue Operations Leader
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink">
            I&apos;ve spent the last decade building this layer for
            climate-tech companies, including four years as the first ops hire
            at Pachama. Salesforce-deep (50+ flows shipped, instance built from
            scratch), fluent in the carbon-credit buyer journey, and AI-first
            in practice. This page was built with Claude Code in Cursor.
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
              "icp-lead-scoring",
              "outreach-actions",
              "retire-the-mql",
              "two-touch-attribution",
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
          <Contact positioningLine="Best for Revenue Operations leadership at Chestnut Carbon. Climate-tech native, Denver-based, comfortable in remote and hybrid setups." />
        </FadeInOnScroll>
      </main>
      <Footer />
    </>
  );
}
