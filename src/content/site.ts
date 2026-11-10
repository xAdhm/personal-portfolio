import type { ProjectLink } from "./projects";

export const hero: {
  nameLines: [string, string];
  pitch: string;
  links: ProjectLink[];
} = {
  nameLines: ["Adham", "Mustafa"],
  pitch: "Software engineer. I build things end to end, from the database to the screen.",
  links: [
    { label: "GitHub", href: "https://github.com/xAdhm", variant: "secondary" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/adham-mustafa-/", variant: "secondary" },
  ],
};

export const sections = {
  projects: "Projects",
  experience: "Experience",
  about: "About",
};

export const about =
  "I’m a Computer Science student at Queens College in New York City. I like building whole systems, from the database and API to the screen, and I care about getting the security details right. Outside of coursework I run the budget for Queens College’s Muslim Student Association.";

export const contact: { heading: string; links: ProjectLink[] } = {
  heading: "Contact",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/adham-mustafa-/", variant: "primary" },
    { label: "GitHub", href: "https://github.com/xAdhm", variant: "secondary" },
  ],
};
