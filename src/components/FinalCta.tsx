import { SITE } from "@/lib/constants";
import { FadeIn } from "./FadeIn";

export function FinalCta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-y border-border bg-brand-mist"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 10% 50%, rgba(27,94,60,0.08), transparent 60%), radial-gradient(ellipse 50% 70% at 90% 40%, rgba(13,59,38,0.06), transparent 55%)",
        }}
      />
      <div className="container-site relative section-pad text-center">
        <FadeIn>
          <p className="eyebrow mb-4 justify-center">Next step</p>
          <h2 className="font-display mx-auto max-w-2xl text-3xl leading-tight font-medium tracking-tight text-ink sm:text-5xl">
            Every Hire Matters.
          </h2>
          <p className="prose-abd mx-auto mt-6 max-w-xl">
            For rare disease programmes where time, capital, and expertise are
            critical, ABD Search provides specialist search support with focus
            and precision.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={SITE.linkedInFounder}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center justify-center rounded-full bg-brand px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-deep"
            >
              Speak With Lewis
            </a>
            <a
              href={SITE.linkedInCompany}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center justify-center rounded-full border border-border-strong bg-surface px-8 py-3.5 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand"
            >
              Follow ABD Search
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
