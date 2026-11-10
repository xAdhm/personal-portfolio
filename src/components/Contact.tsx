import { contact } from "@/content/site";
import LinkButton from "./LinkButton";

export default function Contact() {
  return (
    <footer aria-labelledby="contact-title" className="pad-contact bg-accent text-white">
      <h2 id="contact-title" className="type-contact">
        {contact.heading}
      </h2>
      <div className="mt-[clamp(28px,4vw,44px)] flex flex-wrap gap-2.5">
        {contact.links.map((link) => (
          <LinkButton key={link.label} {...link} tone="blue" />
        ))}
      </div>
    </footer>
  );
}
