import { Github, Linkedin, Mail } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--surface)]">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_auto]">
          <div>
            <p className="font-display text-lg font-semibold">{profile.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              MCA Student | Aspiring IT Professional
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-start gap-3">
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
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-primary"
              >
                <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          © 2026 {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
