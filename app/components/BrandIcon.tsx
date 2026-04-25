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
  label,
  className = "h-3.5 w-3.5",
  brandColor = false,
}: {
  slug?: string;
  label: string;
  className?: string;
  brandColor?: boolean;
}) {
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

  // Fallback: letter badge with the new dusty-blue accent
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
