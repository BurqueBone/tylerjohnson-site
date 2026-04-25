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
  title: "Tyler Johnson for Watershed — GTM Operations, Customer",
  description:
    "Climate-tech operator, Salesforce-deep, AI-first in practice. Built Pachama's GTM layer from scratch.",
  robots: { index: false, follow: false },
};

type Metric = {
  label: string;
  logo?: string;
  dualLogos?: [string, string];
};

const METRICS: Metric[] = [
  { label: "10+ yrs GTM Ops" },
  { label: "50+ SFDC flows shipped", logo: "salesforce" },
  { label: "Built SFDC from scratch", logo: "salesforce" },
  { label: "Led team of 6" },
  { label: "Agnostic across both", dualLogos: ["salesforce", "hubspot"] },
];

const WHY_THIS_FITS = [
  {
    title: "Climate-tech operator, not just GTM operator",
    body:
      "Built Pachama's go-to-market layer from scratch (2021-2025). The ICP scoring model used MSCI ESG and CDP disclosure data alongside firmographics. I understand how climate credibility shapes who buys.",
  },
  {
    title: "AI-first in practice, not theory",
    body:
      "Claude Code daily, Cursor for editing - this page was built with both. AI program is a first-class qualification signal in my current QS work.",
  },
  {
    title: "Salesforce + customer-lifecycle native",
    body:
      "50+ SFDC flows shipped, full data model designs, complex validation. The Outreach Actions case study below is exactly customer-engagement ops.",
  },
  {
    title: "Ships hard things end-to-end",
    body:
      "Each case study below is one of these: saw the problem, designed the system, built it, measured the outcome. Under deadlines. Without a buffer team to lean on.",
  },
];

export default function WatershedPage() {
  return (
    <>
      <Nav />
      <main id="top">
        <section className="mx-auto max-w-5xl px-6 pb-12 pt-12 sm:pt-16">
          <p className="text-sm font-medium uppercase tracking-wider text-navy">
            For Watershed · GTM Operations, Customer
          </p>
          <h1 className="mt-3 font-serif text-5xl font-medium tracking-tight text-ink sm:text-6xl">
            Tyler Johnson
          </h1>
          <p className="mt-3 text-xl text-ink-muted sm:text-2xl">
            Go-to-Market Operations Leader
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink">
            I&apos;ve spent the last 10 years building exactly this layer.
            Climate-tech native at Pachama, Salesforce-deep (50+ flows shipped,
            built the instance from scratch), and AI-first in practice — this
            page was built with Claude Code in Cursor.
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
                      slug={metric.dualLogos[0]}
                      label={metric.dualLogos[0]}
                      className="h-3.5 w-3.5"
                      brandColor
                      noFallback
                    />
                    <BrandIcon
                      slug={metric.dualLogos[1]}
                      label={metric.dualLogos[1]}
                      className="h-3.5 w-3.5"
                      brandColor
                      noFallback
                    />
                  </span>
                ) : (
                  <BrandIcon
                    slug={metric.logo}
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
          <Contact positioningLine="Best for the GTM Operations, Customer role at Watershed (req ee822cb3). Based in Denver — the Denver satellite makes this work without relocation." />
        </FadeInOnScroll>
      </main>
      <Footer />
    </>
  );
}
