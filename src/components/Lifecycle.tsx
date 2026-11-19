"use client";

import { useState } from "react";
import { LIFECYCLE_STAGES } from "@/lib/constants";
import { FadeIn } from "./FadeIn";

export function Lifecycle() {
  const [active, setActive] = useState(0);
  const current = LIFECYCLE_STAGES[active];

  return (
    <section id="lifecycle" className="section-pad bg-surface">
      <div className="container-site">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4 justify-center">
            Development to commercial
          </p>
          <h2 className="font-display text-3xl leading-tight font-medium tracking-tight text-ink sm:text-4xl">
            One Specialism, Across the Full Lifecycle.
          </h2>
          <p className="prose-abd mx-auto mt-5 max-w-xl">
            From early science to market, ABD Search understands the talent
            needs that define each stage of rare disease development — and the
            continuity between them.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-12 md:mt-16">
          <div className="rounded-2xl border border-border bg-brand-mist/60 p-5 sm:p-8">
            <ol className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
              {LIFECYCLE_STAGES.map((stage, index) => {
                const isActive = index === active;
                return (
                  <li key={stage.id}>
                    <button
                      type="button"
                      onClick={() => setActive(index)}
                      onMouseEnter={() => setActive(index)}
                      className={`focus-ring group flex h-full w-full flex-col items-start rounded-xl border px-3 py-3 text-left transition-all duration-300 sm:px-3.5 sm:py-4 ${
                        isActive
                          ? "border-brand bg-surface shadow-[0_8px_30px_rgba(13,59,38,0.08)]"
                          : "border-transparent bg-transparent hover:border-border hover:bg-surface/70"
                      }`}
                      aria-pressed={isActive}
                    >
                      <span
                        className={`text-[0.65rem] font-medium tracking-[0.14em] uppercase ${
                          isActive ? "text-brand" : "text-ink-faint"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`mt-2 text-sm leading-snug font-medium ${
                          isActive ? "text-ink" : "text-ink-muted"
                        }`}
                      >
                        {stage.label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>

            <div className="mt-6 border-t border-border pt-6 sm:mt-8 sm:pt-8">
              <div className="grid gap-4 md:grid-cols-[180px_1fr] md:items-start md:gap-10">
                <p className="font-display text-2xl text-brand-deep italic">
                  {current.label}
                </p>
                <p className="prose-abd max-w-2xl text-[1.02rem]">
                  {current.support}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
