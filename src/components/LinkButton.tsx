type LinkButtonProps = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
  tone: "dark" | "blue";
  ariaLabel?: string;
};

export default function LinkButton({ label, href, variant, tone, ariaLabel }: LinkButtonProps) {
  return (
    <a className="btn" href={href} data-variant={variant} data-tone={tone} aria-label={ariaLabel}>
      {label}
    </a>
  );
}
