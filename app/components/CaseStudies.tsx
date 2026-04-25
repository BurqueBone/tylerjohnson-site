import { CASE_STUDIES } from "../content/case-studies";
import { CaseStudyCard } from "./CaseStudyCard";

export function CaseStudies({ ids }: { ids?: string[] } = {}) {
  const studies = ids
    ? ids
        .map((id) => CASE_STUDIES.find((s) => s.id === id))
        .filter((s): s is NonNullable<typeof s> => Boolean(s))
    : CASE_STUDIES;

  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <h2 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
        Selected Work
      </h2>
      <div className="mt-6">
        {studies.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </div>
    </section>
  );
}
