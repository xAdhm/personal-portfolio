import Image from "next/image";
import type { Project } from "@/content/projects";
import LinkButton from "./LinkButton";

const backgrounds: Record<Project["background"], string> = {
  ground: "bg-ground",
  surface: "bg-surface",
  accent: "bg-accent text-white [--bar:var(--white)]",
};

export default function ProjectBlock({ project }: { project: Project }) {
  const { slug, title, qualifier, hook, stack, body, bullets, links, screenshot, footnote, background } =
    project;
  const onBlue = background === "accent";
  // On the blue block, secondary text stays white: no grey or tint clears 4.5:1 on the accent.
  const quiet = onBlue ? "text-white" : "text-muted";
  const hasStack = stack !== undefined && stack.length > 0;

  return (
    <article aria-labelledby={`${slug}-title`} className={`pad-section ${backgrounds[background]}`}>
      <h3 id={`${slug}-title`} className="type-project-title">
        {title}
        {qualifier && " "}
        {qualifier && (
          <span className={`type-body ml-1.5 inline-block align-baseline font-normal tracking-normal ${quiet}`}>
            {qualifier}
          </span>
        )}
      </h3>
      <p className={`type-hook mt-3 max-w-[48ch] ${quiet}`}>{hook}</p>

      {screenshot && (
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          sizes="(min-width: 1240px) 1128px, 100vw"
          className="mt-[clamp(28px,4vw,48px)] block h-auto w-full border border-line"
        />
      )}

      <div
        className={`mt-[clamp(28px,4vw,48px)] grid gap-7 ${
          hasStack ? "md:grid-cols-[30%_1fr] md:gap-[clamp(24px,4vw,56px)]" : ""
        }`}
      >
        {hasStack && (
          <ul aria-label={`${title} stack`} className="flex flex-wrap content-start gap-1.5">
            {stack.map((tech) => (
              <li
                key={tech}
                className={`type-chip rounded-[3px] border px-2.5 py-[7px] ${
                  onBlue ? "border-white-50" : "border-line-hi text-text"
                }`}
              >
                {tech}
              </li>
            ))}
          </ul>
        )}

        <div className="type-body max-w-[65ch]">
          <p>{body}</p>

          {bullets && bullets.length > 0 && (
            <ul className="bar-list mt-5 space-y-3">
              {bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          )}

          {links && links.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2.5">
              {links.map((link) => (
                <LinkButton
                  key={link.label}
                  {...link}
                  tone={onBlue ? "blue" : "dark"}
                  ariaLabel={`${link.label}, ${title}`}
                />
              ))}
            </div>
          )}

          {footnote && <p className={`mt-5 text-[0.92rem] ${quiet}`}>{footnote}</p>}
        </div>
      </div>
    </article>
  );
}
