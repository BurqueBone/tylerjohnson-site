export function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h2 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
        About
      </h2>
      <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink">
        <p>
          I&apos;ve spent 10+ years building the operations layer under GTM teams:
          LogCheck (B2B SaaS ops), CB Insights (RevOps director), Pachama
          (climate-tech GTM strategy), and now RevOps Contractor for Chief. The
          throughline: turn messy inputs into systems that leadership can
          actually trust.
        </p>
        <p>
          I lead with Flow before Apex, pure-path cohorts before blended
          averages, and &quot;what decision does this enable?&quot; before
          &quot;what does the dashboard show?&quot; I&apos;d rather ship a
          working v1 and iterate than over-design v0.
        </p>
        <p>
          Based in Denver. Climate-tech excites me but doing good work with good
          people is what drives me. I build small things on the side (a Mahjong
          scorer, a personal finance dashboard, affiliate website) to keep my
          hands dirty with projects.
        </p>
      </div>
      <p className="mt-8 border-t border-hairline pt-6 text-sm text-ink-muted">
        <span className="font-medium text-ink">Education.</span>{" "}
        Columbia University: MS Sustainability Management. University of New
        Mexico: BA Media Arts.
      </p>
    </section>
  );
}
