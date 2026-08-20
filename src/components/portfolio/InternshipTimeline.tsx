import { Briefcase, CalendarDays } from "lucide-react";
import { Section, Reveal } from "./Section";
import { internships } from "@/data/portfolio";

export function InternshipTimeline() {
  return (
    <Section id="experience" eyebrow="Experience" title="Internship Experience" muted>
      <div className="grid gap-6 sm:grid-cols-2">
        {internships.map((item, i) => (
          <Reveal key={item.company} delay={i * 90}>
            <article className="surface-card group h-full p-6">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary transition-transform group-hover:scale-105">
                  <Briefcase className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-semibold uppercase tracking-wide text-foreground">
                    {item.company}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.domain}</p>
                  <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                    {item.date}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
