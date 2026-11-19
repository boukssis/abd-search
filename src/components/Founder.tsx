import Image from "next/image";
import { SITE } from "@/lib/constants";
import { FadeIn } from "./FadeIn";

export function Founder() {
  return (
    <section id="founder" className="section-pad bg-surface">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <FadeIn>
          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            <div
              className="absolute -inset-3 rounded-[1.5rem] border border-border"
              aria-hidden="true"
            />
            <div className="overflow-hidden rounded-[1.25rem] bg-brand-mist">
              <Image
                src="/lewis-nutley.jpg"
                alt="Lewis Nutley, Founder of ABD Search"
                width={640}
                height={640}
                className="aspect-square h-auto w-full object-cover object-top"
                priority
              />
            </div>
            <div className="absolute right-4 bottom-4 left-4 rounded-xl border border-white/60 bg-surface/95 px-4 py-3 backdrop-blur-sm sm:right-auto sm:left-6 sm:w-auto">
              <p className="text-sm font-semibold text-ink">{SITE.founder}</p>
              <p className="text-xs tracking-wide text-ink-muted">
                Founder, ABD Search
              </p>
            </div>
          </div>
        </FadeIn>

        <div>
          <FadeIn delay={0.06}>
            <p className="eyebrow mb-4">Founder-led model</p>
            <h2 className="font-display max-w-lg text-3xl leading-tight font-medium tracking-tight text-ink sm:text-4xl">
              Founder-Led, Specialist by Design
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="prose-abd mt-6 max-w-xl">
              ABD Search is led by {SITE.founder} — a boutique rare disease and
              orphan drug recruitment partner focused on organisations where
              every hire matters.
            </p>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="prose-abd mt-4 max-w-xl">
              From early development to commercial, the model is deliberately
              hands-on: specialist market understanding, direct accountability,
              and long-term partnership rather than transactional placement.
            </p>
          </FadeIn>
          <FadeIn delay={0.18}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Direct accountability on every brief",
                "Specialist rare disease market fluency",
                "Hands-on delivery, not diluted layers",
                "Partnership mindset across programmes",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-ink-muted"
                >
                  <span
                    className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.22}>
            <a
              href={SITE.linkedInFounder}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-9 inline-flex items-center justify-center rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand"
            >
              Connect on LinkedIn
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
