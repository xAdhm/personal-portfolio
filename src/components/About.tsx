import { about, sections } from "@/content/site";
import SectionBand from "./SectionBand";

export default function About() {
  return (
    <section aria-labelledby="about-title" className="divide-y divide-line">
      <SectionBand id="about-title" title={sections.about} />
      <div className="pad-section bg-surface">
        <p className="type-about max-w-[46ch]">{about}</p>
      </div>
    </section>
  );
}
