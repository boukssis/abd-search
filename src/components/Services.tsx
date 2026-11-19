import { ArrowUpRight } from "lucide-react";
import { SERVICES, SITE } from "@/lib/constants";
import { FadeIn } from "./FadeIn";

export function Services() {
  return (
    <section id="services" className="section-pad bg-brand-deep text-white">
      <div className="container-site">
        <FadeIn className="max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] text-white/70 uppercase">
            <span className="inline-block h-px w-5 bg-white/50" />
            Services
          </p>
          <h2 className="font-display text-3xl leading-tight font-medium tracking-tight sm:text-4xl">
            How We Support Growth
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Four tightly defined ways to secure, map, and build rare disease
            talent capability — delivered with focus rather than catalogue
            breadth.
          </p>
        </FadeIn>

        <div className="mt-12 divide-y divide-white/10 border-y border-white/10 md:mt-16">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.id} delay={0.06 * index}>
              <article className="group grid gap-4 py-8 transition-colors md:grid-cols-[5rem_1fr_1.2fr] md:items-start md:gap-8 md:py-10">
                <p className="font-display text-2xl text-white/35 italic">
                  {service.number}
                </p>
                <div>
                  <h3 className="text-xl font-medium tracking-tight text-white sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium tracking-wide text-white/65">
                    {service.proposition}
                  </p>
                </div>
                <p className="text-base leading-relaxed text-white/70">
                  {service.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.15} className="mt-10">
          <a
            href={SITE.linkedInFounder}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/5"
          >
            Discuss a brief
            <ArrowUpRight size={16} />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
