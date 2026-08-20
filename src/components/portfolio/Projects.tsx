import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Section, Reveal } from "./Section";
import { projects, type Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}) {
  const reversed = index % 2 === 1;
  return (
    <Reveal delay={index * 80}>
      <article
        className={cn(
          "surface-card group grid gap-8 overflow-hidden p-6 md:grid-cols-2 md:p-8",
          reversed && "md:[&>*:first-child]:order-2",
        )}
      >
        <div
          aria-hidden="true"
          className="relative flex min-h-[190px] items-center justify-center overflow-hidden rounded-2xl border border-border hero-gradient"
        >
          <span className="absolute -left-6 -top-8 h-40 w-40 rounded-full bg-[var(--sky)] opacity-70 blur-2xl transition-transform duration-500 group-hover:scale-110" />
          <span className="absolute -bottom-10 -right-4 h-40 w-40 rounded-full bg-[var(--lavender)] opacity-70 blur-2xl transition-transform duration-500 group-hover:scale-110" />
          <span className="relative font-display text-6xl font-semibold text-primary/25 transition-transform duration-500 group-hover:scale-105">
            {project.number}
          </span>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Project {project.number}
          </p>
          <h3 className="mt-3 text-xl font-semibold text-foreground md:text-2xl">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button className="group/btn rounded-full" onClick={() => onOpen(project)}>
              View Details
              <ArrowUpRight
                className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                aria-hidden="true"
              />
            </Button>
            {project.github && (
              <Button asChild variant="outline" className="rounded-full">
                <a href={project.github} target="_blank" rel="noreferrer noopener">
                  <Github aria-hidden="true" />
                  GitHub
                </a>
              </Button>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <Section
      id="projects"
      eyebrow="Work"
      title="Featured Projects"
      description="Academic and personal projects exploring web development, data, and human-computer interaction."
    >
      <div className="space-y-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} onOpen={setSelected} />
        ))}
      </div>

      <Dialog open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-lg">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl">{selected.title}</DialogTitle>
                <DialogDescription>{selected.description}</DialogDescription>
              </DialogHeader>
              <div className="space-y-5">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Technologies
                  </h4>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {selected.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Key Highlights
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {selected.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm text-muted-foreground">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
