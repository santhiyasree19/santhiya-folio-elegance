import { Code2, Layers, Wrench } from "lucide-react";
import { Section, Reveal } from "./Section";
import { skillGroups } from "@/data/portfolio";

const iconMap = { code: Code2, layers: Layers, wrench: Wrench };

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Capabilities"
      title="Technical Skills"
      description="Skills built through coursework, internships, certifications, and personal projects."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = iconMap[group.icon as keyof typeof iconMap];
          return (
            <Reveal key={group.title} delay={i * 100}>
              <div className="surface-card h-full p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
