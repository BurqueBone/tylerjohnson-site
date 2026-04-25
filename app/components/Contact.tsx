const LINKS = [
  { label: "Email", href: "mailto:johnson.d.tyler@gmail.com", external: false },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/johnsondtyler/", external: true },
  { label: "GitHub", href: "https://github.com/BurqueBone", external: true },
  { label: "Download Resume", href: "/resume.pdf", external: true },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-28">
      <h2 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
        Let&apos;s talk
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-lg text-ink-muted">
        Best for GTM Ops leadership roles at mid-stage companies, especially
        climate-tech and sustainability.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            {...(link.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="rounded-full border border-ink px-5 py-2.5 text-sm font-medium text-ink hover:border-accent hover:text-accent"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
