import { STACK } from "../content/stack";

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
            <dd className="flex flex-wrap items-center gap-x-2 gap-y-3 text-ink">
              {row.groups.map((group, gi) => (
                <span key={gi} className="flex flex-wrap items-center gap-x-2 gap-y-3">
                  {group.map((item, i) => (
                    <span key={item} className="flex items-center gap-2">
                      <span className="rounded-full bg-shell-alt px-3 py-1 text-sm">
                        {item}
                      </span>
                      {i < group.length - 1 ? (
                        <span aria-hidden className="text-ink-muted">
                          ·
                        </span>
                      ) : null}
                    </span>
                  ))}
                  {gi < row.groups.length - 1 ? (
                    <span aria-hidden className="mx-1 text-ink-muted">
                      |
                    </span>
                  ) : null}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
