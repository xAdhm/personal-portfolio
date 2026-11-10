import type { Experience } from "@/content/experience";

export default function ExperienceRow({ item }: { item: Experience }) {
  return (
    <article className="grid md:grid-cols-[30%_1fr]">
      <div className="pad-section pb-0 md:border-r md:border-line md:pb-[clamp(44px,6vw,80px)]">
        <h3 className="type-role">{item.role}</h3>
        <p className="type-body mt-2 text-muted">
          {item.organization}
          <br />
          {item.dates}
        </p>
      </div>
      <div className="pad-section pt-4 md:pt-[clamp(44px,6vw,80px)]">
        <p className="type-body max-w-[65ch]">{item.description}</p>
      </div>
    </article>
  );
}
