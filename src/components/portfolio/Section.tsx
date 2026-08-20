import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </div>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  muted = false,
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  muted?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-20 md:py-28",
        muted && "bg-[var(--surface)]",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {(eyebrow || title) && (
          <Reveal className="mb-12 max-w-2xl">
            {eyebrow && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold text-foreground md:text-4xl">{title}</h2>
            )}
            {description && (
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {description}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
