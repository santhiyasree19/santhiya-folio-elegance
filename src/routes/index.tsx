import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { EducationTimeline } from "@/components/portfolio/EducationTimeline";
import { Skills } from "@/components/portfolio/Skills";
import { InternshipTimeline } from "@/components/portfolio/InternshipTimeline";
import { Projects } from "@/components/portfolio/Projects";
import { AchievementCard } from "@/components/portfolio/AchievementCard";
import { CertificationSection } from "@/components/portfolio/CertificationSection";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const title = "Santhiya Sree S — MCA Student & Aspiring IT Professional";
const description =
  "Portfolio of Santhiya Sree S, MCA student skilled in C, Java, C#, SQL, .NET, Linux and data visualization. Projects, internships and certifications.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <EducationTimeline />
        <Skills />
        <InternshipTimeline />
        <Projects />
        <AchievementCard />
        <CertificationSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
