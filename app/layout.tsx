import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tyler Johnson - GTM Operations Leader",
  description:
    "Tyler Johnson is a Go-to-Market Operations leader who designs and builds the systems that turn GTM strategy into measurable pipeline.",
  metadataBase: new URL("https://tylerjohnson-site.vercel.app"),
  openGraph: {
    title: "Tyler Johnson - GTM Operations Leader",
    description:
      "Designing and building the systems that turn GTM strategy into measurable pipeline.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plexSerif.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
