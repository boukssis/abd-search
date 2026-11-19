import type { Metadata } from "next";
import { Newsreader, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abd-search.vercel.app"),
  title: {
    default: "ABD Search | Specialists in Rare Disease Talent",
    template: "%s | ABD Search",
  },
  description:
    "ABD Search specialises exclusively in rare disease and orphan drug recruitment — founder-led search across discovery, clinical development, regulatory, CMC, launch, market access and commercial.",
  keywords: [
    "rare disease recruitment",
    "orphan drug talent",
    "life sciences executive search",
    "biotech recruitment",
    "ABD Search",
    "Lewis Nutley",
  ],
  authors: [{ name: "Lewis Nutley" }],
  creator: "ABD Search",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://abd-search.vercel.app",
    siteName: "ABD Search",
    title: "ABD Search | Specialists in Rare Disease Talent",
    description:
      "Focused talent for rare disease and orphan drug organisations — one specialism, across the full development lifecycle.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ABD Search | Specialists in Rare Disease Talent",
    description:
      "Founder-led rare disease & orphan drug recruitment across the full development lifecycle.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/abd-logo.jpg",
    apple: "/abd-logo.jpg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${outfit.variable} ${newsreader.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-surface-alt font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
