import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { SUMMARY, EXPERIENCE, SKILLS, EDUCATION } from "../content/resume";
import { PrintButton } from "./PrintButton";

export const metadata: Metadata = {
  title: "Tyler Johnson - Resume",
  description:
    "GTM Operations Leader. Salesforce-deep, AI-first in practice, climate-tech native.",
};

export default function ResumePage() {
  return (
    <>
      <div className="print:hidden">
        <Nav />
      </div>
      <main className="mx-auto max-w-4xl px-6 py-10 print:max-w-none print:px-0 print:py-0">
        <div className="mb-6 flex items-center justify-between gap-4 print:hidden">
          <p className="text-sm text-ink-muted">
            Use Print / Save as PDF for a clean export.
          </p>
          <PrintButton />
        </div>

        <article className="resume rounded-lg border border-hairline bg-shell p-10 shadow-sm print:rounded-none print:border-0 print:p-0 print:shadow-none">
          {/* Header */}
          <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-hairline pb-4">
            <div>
              <h1 className="font-serif text-3xl font-medium tracking-tight text-ink">
                Tyler Johnson
              </h1>
              <p className="mt-0.5 text-sm font-medium text-navy">
                GTM Operations Leader · Denver, CO
              </p>
            </div>
            <div className="text-right text-xs leading-relaxed text-ink-muted">
              <p>(505) 681-6406</p>
              <p>johnson.d.tyler@gmail.com</p>
              <p>linkedin.com/in/johnsondtyler</p>
              <p>tylerjohnson-site.vercel.app</p>
            </div>
          </header>

          {/* Summary */}
          <section className="mt-4">
            <p className="text-sm leading-relaxed text-ink">{SUMMARY}</p>
          </section>

          {/* Skills */}
          <section className="mt-5">
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-navy">
              Skills
            </h2>
            <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
              {SKILLS.map((cat) => (
                <div key={cat.label}>
                  <h3 className="text-xs font-semibold text-ink">{cat.label}</h3>
                  <p className="text-xs leading-snug text-ink-muted">
                    {cat.items.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="mt-5">
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-navy">
              Experience
            </h2>
            <div className="mt-3 space-y-4">
              {EXPERIENCE.map((job) => (
                <article key={`${job.company}-${job.dates}`}>
                  <header className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                    <h3 className="text-sm font-semibold text-ink">
                      {job.title}{" "}
                      <span className="font-normal text-ink-muted">·</span>{" "}
                      <span className="font-medium text-ink">{job.company}</span>
                    </h3>
                    <span className="text-xs text-ink-muted">{job.dates}</span>
                  </header>
                  <p className="text-[11px] italic text-ink-muted">{job.location}</p>
                  <ul className="mt-1.5 space-y-1 text-xs leading-relaxed text-ink">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2">
                        <span aria-hidden className="text-ink-muted">·</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mt-5">
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-navy">
              Education
            </h2>
            <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {EDUCATION.map((d) => (
                <div key={d.degree}>
                  <h3 className="text-xs font-semibold text-ink">{d.degree}</h3>
                  <p className="text-xs text-ink-muted">
                    {d.school} · {d.location} · {d.year}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </article>
      </main>
      <div className="print:hidden">
        <Footer />
      </div>
    </>
  );
}
