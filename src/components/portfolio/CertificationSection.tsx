import { useState } from "react";
import { BadgeCheck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Section, Reveal } from "./Section";
import { certifications } from "@/data/portfolio";

export function CertificationSection() {
  const [expandAll, setExpandAll] = useState(false);

  return (
    <Section
      id="certifications"
      eyebrow="Credentials"
      title="Certifications & Participations"
      muted
    >
      <Reveal>
        <div className="surface-card p-2 sm:p-4">
          <Accordion
            type="multiple"
            value={expandAll ? certifications.map((c) => c.id) : undefined}
            defaultValue={["conferences"]}
            className="w-full"
          >
            {certifications.map((group) => (
              <AccordionItem key={group.id} value={group.id}>
                <AccordionTrigger className="px-4 text-left text-base font-semibold">
                  {group.title}
                </AccordionTrigger>
                <AccordionContent className="px-4">
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                        <BadgeCheck
                          className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Reveal>

      <div className="mt-6">
        <Button
          variant="outline"
          className="rounded-full bg-card"
          onClick={() => setExpandAll((v) => !v)}
        >
          {expandAll ? "Collapse Certifications" : "View All Certifications"}
        </Button>
      </div>
    </Section>
  );
}
