import { Trophy } from "lucide-react";
import { Section, Reveal } from "./Section";
import { achievement } from "@/data/portfolio";

export function AchievementCard() {
  return (
    <Section id="achievements" eyebrow="Recognition" title="Achievement">
      <Reveal>
        <article className="relative overflow-hidden rounded-3xl border border-border p-8 shadow-[var(--shadow-lift)] hero-gradient md:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full bg-[var(--lavender)] opacity-70 blur-3xl"
          />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center">
            <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-card text-primary shadow-[var(--shadow-soft)]">
              <Trophy className="h-7 w-7" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                International Conference
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-foreground md:text-3xl">
                {achievement.title}
              </h3>
              <p className="mt-3 text-base text-muted-foreground">
                Paper topic:{" "}
                <span className="font-semibold text-foreground">{achievement.topic}</span>
              </p>
            </div>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}
