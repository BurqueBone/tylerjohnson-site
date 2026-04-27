"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-full bg-ink px-5 py-2 text-sm font-medium text-shell hover:bg-accent print:hidden"
    >
      Print / Save as PDF
    </button>
  );
}
