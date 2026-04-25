import * as icons from "simple-icons";

type SimpleIcon = { path: string; title: string; hex: string; slug: string };

function pascalize(slug: string): string {
  // "salesforce" -> "Salesforce"; "google-cloud" -> "Googlecloud" (simple-icons drops dashes)
  return slug
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("");
}

export function BrandIcon({
  slug,
  className = "h-3.5 w-3.5",
  brandColor = false,
}: {
  slug: string;
  className?: string;
  brandColor?: boolean;
}) {
  const key = `si${pascalize(slug)}` as keyof typeof icons;
  const icon = icons[key] as SimpleIcon | undefined;
  if (!icon || !icon.path) return null;
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
