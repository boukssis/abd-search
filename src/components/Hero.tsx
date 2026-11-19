import { SITE } from "@/lib/constants";
import { FadeIn } from "./FadeIn";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface pt-24 md:pt-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(212,224,217,0.45) 1px, transparent 1px), linear-gradient(to bottom, rgba(212,224,217,0.45) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 20%, black 20%, transparent 75%)",
        }}
      />
      <div className="container-site relative grid items-center gap-12 pb-16 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24 lg:pt-16">
        <div>
          <FadeIn>
            <p className="eyebrow mb-5">Rare disease & orphan drug search</p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h1 className="font-display max-w-xl text-[2.35rem] leading-[1.12] font-medium tracking-tight text-ink sm:text-5xl lg:text-[3.35rem]">
              Specialists in Rare Disease Talent
            </h1>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="prose-abd mt-6 max-w-lg">
              ABD Search works exclusively with rare disease and orphan drug
              organisations, helping them secure the specialist talent needed
              across the full development and commercial lifecycle.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={SITE.linkedInFounder}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-brand px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-deep"
              >
                Start a Conversation
              </a>
              <a
                href="#services"
                className="focus-ring inline-flex items-center justify-center rounded-full border border-border-strong bg-surface px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand"
              >
                Explore Our Services
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.26}>
            <p className="mt-8 text-sm text-ink-faint">
              One specialism. Full lifecycle. Founder-led delivery.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.18} y={24} className="lg:pl-4">
          <HeroVisual />
        </FadeIn>
      </div>
    </section>
  );
}
