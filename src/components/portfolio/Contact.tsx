import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, Reveal } from "./Section";
import { ContactForm } from "./ContactForm";
import { profile } from "@/data/portfolio";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's Connect"
      description="I am open to learning opportunities, internships, and entry-level opportunities where I can apply my knowledge and continue growing as an IT professional."
    >
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <div className="surface-card h-full p-6 md:p-8">
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Phone
                  </span>
                  <a href={`tel:${profile.phone}`} className="text-sm font-medium hover:text-primary">
                    {profile.phone}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Email
                  </span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="break-all text-sm font-medium hover:text-primary"
                  >
                    {profile.email}
                  </a>
                </span>
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3">
              <Button asChild variant="outline" className="justify-start rounded-full">
                <a href={profile.github} target="_blank" rel="noreferrer noopener">
                  <Github aria-hidden="true" />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="outline" className="justify-start rounded-full">
                <a href={profile.linkedin} target="_blank" rel="noreferrer noopener">
                  <Linkedin aria-hidden="true" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild className="justify-start rounded-full">
                <a href={`mailto:${profile.email}`}>
                  <Mail aria-hidden="true" />
                  Email Me
                </a>
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
