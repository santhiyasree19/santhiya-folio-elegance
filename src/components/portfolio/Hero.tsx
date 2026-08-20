import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile, techBadges } from "@/data/portfolio";
import profileImage from "@/assets/profile-placeholder.jpg";

const badgePositions = [
  "left-[-6%] top-[8%]",
  "right-[-4%] top-[4%]",
  "left-[-12%] top-[34%]",
  "right-[-12%] top-[26%]",
  "left-[-8%] bottom-[26%]",
  "right-[-10%] bottom-[32%]",
  "left-[2%] bottom-[4%]",
  "right-[0%] bottom-[8%]",
  "left-[26%] top-[-6%]",
  "right-[24%] bottom-[-6%]",
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden hero-gradient pt-32 pb-20 md:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[var(--sky)] opacity-60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-[var(--lavender)] opacity-60 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Hello, I'm
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-base font-medium gradient-text sm:text-lg">{profile.role}</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="group rounded-full">
              <a href="#projects">
                View My Work
                <ArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full bg-card">
              <a href="#contact">Contact Me</a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="rounded-full">
              <a href={profile.resumeUrl} download>
                <Download aria-hidden="true" />
                Resume
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              { href: profile.github, label: "GitHub profile", Icon: Github, external: true },
              { href: profile.linkedin, label: "LinkedIn profile", Icon: Linkedin, external: true },
              { href: `mailto:${profile.email}`, label: "Send an email", Icon: Mail, external: false },
            ].map(({ href, label, Icon, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:text-primary"
              >
                <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[42%_58%_46%_54%/48%_42%_58%_52%] border border-border bg-card shadow-[var(--shadow-lift)]">
            <img
              src={profileImage}
              alt="Portrait placeholder for Santhiya Sree S"
              width={900}
              height={1100}
              className="h-full w-full object-cover"
            />
          </div>

          {techBadges.map((badge, i) => (
            <span
              key={badge}
              className={`float-soft absolute ${badgePositions[i]} rounded-full border border-border bg-card/90 px-3 py-1.5 text-xs font-semibold text-secondary-foreground shadow-[var(--shadow-soft)] backdrop-blur`}
              style={{ animationDelay: `${i * 0.45}s` }}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
