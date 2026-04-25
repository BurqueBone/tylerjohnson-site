const BADGES = [
  "10+ yrs GTM Ops",
  "50+ SFDC flows shipped",
  "Built SFDC from scratch",
  "Led team of 6",
];

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-16 pt-20 sm:pt-28">
      <h1 className="font-serif text-5xl font-medium tracking-tight text-ink sm:text-6xl">
        Tyler Johnson
      </h1>
      <p className="mt-3 text-xl text-ink-muted sm:text-2xl">
        Go-to-Market Operations Leader
      </p>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink">
        I design and build the systems that turn GTM strategy into measurable
        pipeline - from Salesforce architecture to attribution models to the
        scrappy automations in between.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
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
      <ul className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-hairline pt-6 text-sm text-ink-muted">
        {BADGES.map((badge, i) => (
          <li key={badge} className="flex items-center gap-5">
            <span>{badge}</span>
            {i < BADGES.length - 1 ? (
              <span aria-hidden className="text-hairline">
                ·
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
