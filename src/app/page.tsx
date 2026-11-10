import About from "@/components/About";
import Contact from "@/components/Contact";
import ExperienceRow from "@/components/ExperienceRow";
import Frame from "@/components/Frame";
import Hero from "@/components/Hero";
import ProjectBlock from "@/components/ProjectBlock";
import SectionBand from "@/components/SectionBand";
import { experience } from "@/content/experience";
import { projects } from "@/content/projects";
import { sections } from "@/content/site";

export default function Home() {
  return (
    <Frame>
      <main className="divide-y divide-line">
        <Hero />
        <section aria-labelledby="projects-title" className="divide-y divide-line">
          <SectionBand id="projects-title" title={sections.projects} />
          {projects.map((project) => (
            <ProjectBlock key={project.slug} project={project} />
          ))}
        </section>
        <section aria-labelledby="experience-title" className="divide-y divide-line">
          <SectionBand id="experience-title" title={sections.experience} />
          {experience.map((item) => (
            <ExperienceRow key={item.role} item={item} />
          ))}
        </section>
        <About />
      </main>
      <Contact />
    </Frame>
  );
}
