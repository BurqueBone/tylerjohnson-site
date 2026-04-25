# tylerjohnson-site

Personal resume / portfolio site for Tyler Johnson.

Live: https://tylerjohnson-site.vercel.app

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Vercel Web Analytics.

Fonts via `next/font/google`: Inter (body) + IBM Plex Serif (display).

## Editing content

- **Case studies:** `app/content/case-studies.ts` — typed array, edit copy here without touching components
- **Stack rows:** `app/content/stack.ts`
- **Hero badges:** `app/components/Hero.tsx` (`BADGES` array)
- **About copy:** `app/components/About.tsx`
- **Testimonial quote:** `app/components/Testimonial.tsx`
- **Contact links:** `app/components/Contact.tsx` (`LINKS` array)

## Updating the resume

Drop a new `resume.pdf` into `public/`. Commit. Done.

## Theme tokens

Defined in `app/globals.css` under `@theme`:

- `--color-shell` (warm off-white background)
- `--color-shell-alt` (slightly darker section pause)
- `--color-ink` / `--color-ink-muted` (text)
- `--color-accent` (terracotta)
- `--color-hairline` (rules + borders)

Use as Tailwind classes: `bg-shell`, `text-ink`, `text-accent`, `border-hairline`, etc.

## Local dev

```
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy

Auto-deploys to production on push to `main` via Vercel GitHub integration.
