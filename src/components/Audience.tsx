import { FadeIn } from "./FadeIn";

const ORGS = [
  "Biotech companies advancing rare disease assets",
  "Orphan drug developers across the pipeline",
  "Specialist life sciences organisations",
  "Lean growth-stage teams where every hire counts",
  "Programmes hiring from development through commercial",
  "Organisations that need specialist search, not generalist volume",
];

export function Audience() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
        <FadeIn>
          <p className="eyebrow mb-4">Who we work with</p>
          <h2 className="font-display max-w-md text-3xl leading-tight font-medium tracking-tight text-ink sm:text-4xl">
            Built for Lean, High-Impact Organisations
          </h2>
        </FadeIn>
        <FadeIn delay={0.08}>
          <p className="prose-abd max-w-xl">
            ABD Search partners with organisations where rare disease ambition
            meets operational reality — teams that need specialists who can
            contribute immediately, not profiles that merely approximate the
            brief.
          </p>
        </FadeIn>
      </div>

      <div className="container-site mt-12">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ORGS.map((item, i) => (
            <FadeIn key={item} delay={0.05 * i}>
              <li className="flex h-full items-start gap-3 rounded-xl border border-border bg-surface-alt/80 px-5 py-5">
                <span
                  className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand"
                  aria-hidden="true"
                />
                <span className="text-sm leading-relaxed text-ink-muted">
                  {item}
                </span>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
