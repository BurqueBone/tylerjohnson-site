const LINKS = [
  { label: "Email", href: "mailto:johnson.d.tyler@gmail.com", external: false },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/johnsondtyler/", external: true },
  { label: "GitHub", href: "https://github.com/BurqueBone", external: true },
  { label: "View Resume", href: "/resume", external: false },
];

const DEFAULT_POSITIONING =
  "Best for GTM Ops leadership roles at mid-stage companies, especially climate-tech and sustainability.";

export function Contact({ positioningLine }: { positioningLine?: string } = {}) {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-14 text-center sm:py-20">
      <h2 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
        Let&apos;s talk
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-lg text-ink-muted">
        {positioningLine ?? DEFAULT_POSITIONING}
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            {...(link.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            {...(link.download ? { download: link.download } : {})}
            className="rounded-full border border-ink px-5 py-2.5 text-sm font-medium text-ink hover:border-accent hover:text-accent"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
