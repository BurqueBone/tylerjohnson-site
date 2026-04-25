import * as icons from "simple-icons";

type SimpleIcon = { path: string; title: string; hex: string; slug: string };

function pascalize(slug: string): string {
  return slug
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("");
}

export function BrandIcon({
  slug,
  logoSrc,
  label,
  className = "h-3.5 w-3.5",
  brandColor = false,
  noFallback = false,
}: {
  slug?: string;
  logoSrc?: string;
  label: string;
  className?: string;
  brandColor?: boolean;
  noFallback?: boolean;
}) {
  // 1. Local image source (PNG/SVG) takes precedence
  if (logoSrc) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={logoSrc}
        alt={label}
        className={`${className} object-contain`}
      />
    );
  }

  // 2. simple-icons match by slug
  const key = slug ? (`si${pascalize(slug)}` as keyof typeof icons) : null;
  const icon = key ? (icons[key] as SimpleIcon | undefined) : undefined;

  if (icon && icon.path) {
    return (
      <svg
        role="img"
        aria-label={icon.title}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill={brandColor ? `#${icon.hex}` : "currentColor"}
      >
        <path d={icon.path} />
      </svg>
    );
  }

  // 3. No icon found
  if (noFallback) return null;

  // 4. Letter badge fallback
  const initial = label.trim().charAt(0).toUpperCase() || "•";
  return (
    <span
      aria-hidden
      className={`inline-flex items-center justify-center rounded-full bg-blue-soft text-[9px] font-semibold leading-none text-blue ${className}`}
    >
      {initial}
    </span>
  );
}
