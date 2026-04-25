import { CASE_STUDIES } from "../content/case-studies";
import { CaseStudyCard } from "./CaseStudyCard";

export function CaseStudies() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <h2 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
        Selected Work
      </h2>
      <div className="mt-8">
        {CASE_STUDIES.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </div>
    </section>
  );
}
