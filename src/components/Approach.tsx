import { FadeIn } from "./FadeIn";

const PILLARS = [
  {
    title: "Technical alignment",
    text: "Depth in the science, modality, and functional expertise the programme actually requires — not adjacent experience dressed as relevance.",
  },
  {
    title: "Stage-specific relevance",
    text: "People who have operated at the right point in the lifecycle, with judgement shaped by similar constraints and decision pressure.",
  },
  {
    title: "Team & delivery fit",
    text: "The capacity to perform in lean, high-pressure rare disease environments where collaboration and ownership are non-negotiable.",
  },
];

export function Approach() {
  return (
    <section id="approach" className="section-pad bg-surface-alt">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <FadeIn>
            <p className="eyebrow mb-4">The ABD approach</p>
            <h2 className="font-display max-w-md text-3xl leading-tight font-medium tracking-tight text-ink sm:text-4xl">
              Not Just Who Fits on Paper
            </h2>
            <p className="prose-abd mt-5 max-w-md">
              ABD Search understands the difference between a candidate who
              looks right on paper and one who can truly deliver in a lean,
              high-pressure rare disease environment.
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
                <p className="text-xs font-medium tracking-[0.14em] text-ink-faint uppercase">
                  Surface fit
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-muted">
                  <li>Impressive titles and transferable keywords</li>
                  <li>Broad life sciences experience without niche depth</li>
                  <li>Credentials that read well, but may not travel</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-brand/25 bg-brand-soft/60 p-6 sm:p-7">
                <p className="text-xs font-medium tracking-[0.14em] text-brand uppercase">
                  True fit
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-muted">
                  <li>Proven judgement in rare disease constraints</li>
                  <li>Stage-aware experience that reduces learning drag</li>
                  <li>Delivery under pressure in lean specialist teams</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-6 border-t border-border pt-12 md:grid-cols-3 md:gap-8">
          {PILLARS.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={0.08 + i * 0.06}>
              <div>
                <p className="font-display text-4xl text-brand/25 italic">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {pillar.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
