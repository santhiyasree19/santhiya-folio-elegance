import { Code2, GraduationCap, MapPin, Sprout } from "lucide-react";
import { Section, Reveal } from "./Section";
import { highlights, profile } from "@/data/portfolio";

const iconMap = {
  graduation: GraduationCap,
  code: Code2,
  pin: MapPin,
  sprout: Sprout,
};

export function About() {
  return (
    <Section id="about" eyebrow="About" title="About Me">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <Reveal className="space-y-5">
          {profile.about.map((p) => (
            <p key={p} className="text-base leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <div className="surface-card p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Quick Profile
            </h3>
            <ul className="mt-5 space-y-4">
              {highlights.map((item) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap];
                return (
                  <li key={item.label} className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
                      <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
