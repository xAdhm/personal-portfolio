import { hero } from "@/content/site";
import LinkButton from "./LinkButton";

export default function Hero() {
  const [first, last] = hero.nameLines;

  return (
    <section className="grid md:min-h-[84vh] md:grid-cols-[1.12fr_0.88fr]">
      <div className="pad-section flex items-end pt-[clamp(64px,14vw,100px)] md:border-r md:border-line md:pt-[clamp(44px,6vw,80px)]">
        <h1 className="type-hero-name">
          <span className="block">{first}</span> <span className="block">{last}</span>
        </h1>
      </div>

      <div className="pad-section flex min-h-[52vh] flex-col justify-end gap-8 bg-accent text-white md:min-h-0">
        <p className="type-hero-pitch max-w-[22ch]">{hero.pitch}</p>
        <div className="flex flex-wrap gap-2.5">
          {hero.links.map((link) => (
            <LinkButton key={link.label} {...link} tone="blue" />
          ))}
        </div>
      </div>
    </section>
  );
}
