import { FadeIn } from "./FadeIn";

const POINTS = [
  {
    title: "Exclusive focus",
    text: "Rare disease and orphan drug programmes only — not a broad life sciences desk with a niche claim.",
  },
  {
    title: "Lean teams, precise hires",
    text: "In environments where every seat carries outsized weight, availability is never a substitute for fit.",
  },
  {
    title: "Founder-led accountability",
    text: "Direct delivery, clear judgement, and a partnership model built on trust rather than process theatre.",
  },
];

export function Positioning() {
  return (
    <section id="why" className="section-pad bg-surface-alt">
      <div className="container-site grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <FadeIn>
          <p className="eyebrow mb-4">Why ABD Search</p>
          <h2 className="font-display max-w-md text-3xl leading-tight font-medium tracking-tight text-ink sm:text-4xl">
            Rare Disease Recruitment, Done With Precision.
          </h2>
        </FadeIn>

        <div>
          <FadeIn delay={0.08}>
            <p className="prose-abd max-w-xl">
              Rare and orphan drug development is some of the most important
              work in medicine — and some of the hardest to staff well. ABD
              Search focuses on it exclusively, because specialist markets
              reward depth over breadth.
            </p>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="prose-abd mt-5 max-w-xl">
              Lean rare disease teams cannot absorb misfires. The right hire
              accelerates programmes; the wrong one costs time, capital, and
              momentum. That is why focus, judgement, and accountable delivery
              matter more than volume.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {POINTS.map((point, i) => (
              <FadeIn key={point.title} delay={0.1 + i * 0.06}>
                <div className="border-t border-brand/30 pt-4">
                  <h3 className="text-sm font-semibold tracking-wide text-ink">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {point.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
