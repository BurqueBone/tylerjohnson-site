export function Nav() {
  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-50 border-b border-transparent bg-shell/90 backdrop-blur supports-[backdrop-filter]:bg-shell/75"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-serif text-lg font-medium tracking-tight text-ink"
        >
          Tyler Johnson
        </a>
        <div className="flex items-center gap-4 text-sm sm:gap-6">
          <a href="#work" className="hidden hover:text-accent sm:inline">
            Work
          </a>
          <a href="#about" className="hidden hover:text-accent sm:inline">
            About
          </a>
          <a href="#contact" className="hidden hover:text-accent sm:inline">
            Contact
          </a>
          <a
            href="/resume.pdf"
            download="TylerJohnson-Resume.pdf"
            className="rounded-full border border-ink px-4 py-1.5 text-sm hover:border-accent hover:text-accent"
          >
            <span className="sm:hidden">Resume</span>
            <span className="hidden sm:inline">Download Resume</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
