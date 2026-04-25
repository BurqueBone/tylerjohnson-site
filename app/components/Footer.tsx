export function Footer() {
  return (
    <footer className="border-t border-hairline py-8">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-6 text-sm text-ink-muted">
        <span>Built with Next.js + Tailwind.</span>
        <a
          href="https://github.com/BurqueBone/tylerjohnson-site"
          className="hover:text-accent"
        >
          View source on GitHub
        </a>
      </div>
    </footer>
  );
}
