import type { CaseStudy } from "../content/case-studies";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article
      id={study.id}
      className="border-t border-hairline py-16 first:border-t-0 sm:py-20"
    >
      <h3 className="font-serif text-3xl font-medium leading-tight text-accent sm:text-4xl md:text-5xl">
        {study.headline}
      </h3>
      <p className="mt-4 text-sm text-ink-muted">{study.employer}</p>
      <p className="mt-2 text-lg font-medium text-ink">{study.title}</p>
      <div className="mt-6 max-w-3xl space-y-4 text-ink">
        {study.body.map((paragraph, i) => (
          <p key={i} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
      <ul className="mt-8 flex flex-wrap gap-2" aria-label="Tools used">
        {study.tools.map((tool) => (
          <li
            key={tool}
            className="rounded-full border border-hairline bg-shell-alt px-3 py-1 text-xs text-ink-muted"
          >
            {tool}
          </li>
        ))}
      </ul>
    </article>
  );
}
