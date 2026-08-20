import { Section, Reveal } from "./Section";
import { education } from "@/data/portfolio";

export function EducationTimeline() {
  return (
    <Section id="education" eyebrow="Academics" title="Education" muted>
      <div className="relative pl-6 sm:pl-8">
        <div
          aria-hidden="true"
          className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary/50 via-border to-transparent sm:left-[11px]"
        />
        <ol className="space-y-6">
          {education.map((item, i) => (
            <li key={item.degree} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-6 top-7 h-[15px] w-[15px] rounded-full border-2 border-primary bg-background sm:-left-8"
              />
              <Reveal delay={i * 90}>
                <article className="surface-card p-6">
                  <h3 className="text-lg font-semibold text-foreground">{item.degree}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.school}</p>
                  <p className="mt-3 inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                    {item.score}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
