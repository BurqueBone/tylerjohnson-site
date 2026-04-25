import { BrandIcon } from "./BrandIcon";

type LogoRef = { slug?: string; src?: string };
type Metric = {
  label: string;
  logo?: LogoRef;
  // For the special Agnostic pill, render two brand icons:
  dualLogos?: [LogoRef, LogoRef];
};

const SFDC: LogoRef = { src: "/logos/salesforce.svg" };

const METRICS: Metric[] = [
  { label: "10+ yrs GTM Ops" },
  { label: "50+ SFDC flows shipped", logo: SFDC },
  { label: "Built SFDC from scratch", logo: SFDC },
  { label: "Led team of 6" },
  { label: "Agnostic across both", dualLogos: [SFDC, { slug: "hubspot" }] },
];

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-12 pt-12 sm:pt-16">
      <h1 className="font-serif text-5xl font-medium tracking-tight text-ink sm:text-6xl">
        Tyler Johnson
      </h1>
      <p className="mt-3 text-xl text-ink-muted sm:text-2xl">
        Go-to-Market Operations Leader
      </p>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink">
        I design and build the systems that turn GTM strategy into measurable
        pipeline - from Salesforce architecture to attribution models to the
        scrappy automations in between.
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
  );
}
