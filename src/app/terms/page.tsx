import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the ABD Search website.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-surface pt-24 md:pt-28">
        <article className="container-site section-pad max-w-3xl">
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="font-display text-4xl font-medium tracking-tight text-ink">
            Terms of Use
          </h1>
          <div className="prose-abd mt-8 space-y-5">
            <p>
              This website is provided by ABD Search for general information
              about its specialist rare disease and orphan drug recruitment
              services. Content is shared in good faith and may be updated
              without notice.
            </p>
            <p>
              Nothing on this site constitutes a contractual offer, professional
              advice, or a guarantee of outcomes. Engagement terms for search
              assignments are agreed separately between ABD Search and the
              relevant client organisation.
            </p>
            <p>
              All branding, copy, and design elements on this website are
              protected. Please do not reproduce them without permission.
            </p>
          </div>
          <Link
            href="/"
            className="focus-ring mt-10 inline-flex text-sm font-medium text-brand hover:text-brand-deep"
          >
            ← Back to home
          </Link>
        </article>
      </main>
      <Footer />
    </>
  );
}
