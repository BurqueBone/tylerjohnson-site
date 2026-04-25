import { STACK } from "../content/stack";
import { BrandIcon } from "./BrandIcon";

export function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <h2 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
        Stack
      </h2>
      <dl className="mt-8 space-y-6">
        {STACK.map((row) => (
          <div
            key={row.label}
            className="grid gap-3 border-t border-hairline pt-6 sm:grid-cols-[160px_1fr]"
          >
            <dt className="text-sm font-medium uppercase tracking-wider text-ink-muted">
              {row.label}
            </dt>
            <dd className="flex flex-wrap items-center gap-2 text-ink">
              {row.groups.map((group, gi) => (
                <span
                  key={gi}
                  className={`flex flex-wrap items-center gap-2 ${
                    gi > 0 ? "sm:ml-4" : ""
                  }`}
                >
                  {group.map((item) => (
                    <span
                      key={item.label}
                      className="inline-flex items-center gap-1.5 rounded-full bg-shell-alt px-3 py-1 text-sm"
                    >
                      <BrandIcon
                        slug={item.logo}
                        label={item.label}
                        className="h-3.5 w-3.5 text-ink-muted"
                      />
                      <span>{item.label}</span>
                    </span>
                  ))}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
