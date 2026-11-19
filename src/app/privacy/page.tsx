import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for ABD Search.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-surface pt-24 md:pt-28">
        <article className="container-site section-pad max-w-3xl">
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="font-display text-4xl font-medium tracking-tight text-ink">
            Privacy
          </h1>
          <div className="prose-abd mt-8 space-y-5">
            <p>
              ABD Search respects the confidentiality of candidates, clients,
              and website visitors. Information shared in the course of a search
              engagement is handled with professional care and used only for the
              purposes of talent partnership and related communication.
            </p>
            <p>
              This website itself collects minimal information. If you contact
              ABD Search via LinkedIn or other channels, your details will be
              used to respond to your enquiry and, where relevant, to support a
              recruitment process.
            </p>
            <p>
              For privacy-related questions, please reach out directly via{" "}
              <a
                href="https://www.linkedin.com/in/lewis-nutley-97559b107/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand underline-offset-2 hover:underline"
              >
                Lewis Nutley on LinkedIn
              </a>
              .
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
