export function Testimonial() {
  return (
    <section className="bg-shell-alt py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div aria-hidden className="mx-auto h-px w-16 bg-hairline" />
        <blockquote className="mt-8">
          <p className="font-serif text-2xl italic leading-relaxed text-ink sm:text-3xl">
            &ldquo;Tyler is the go-to architect and problem-solver for our most
            complex system overhauls, process redesigns, and scenario-based
            models... he&apos;s set the bar for what is possible while helping
            everyone on the team step up their game...&rdquo;
          </p>
          <footer className="mt-8 text-sm text-ink-muted">
            &mdash; Former manager, CB Insights
          </footer>
        </blockquote>
        <div aria-hidden className="mx-auto mt-8 h-px w-16 bg-hairline" />
      </div>
    </section>
  );
}
