export default function SectionBand({ id, title }: { id: string; title: string }) {
  return (
    <div className="pad-band">
      <h2 id={id} className="type-band">
        {title}
      </h2>
    </div>
  );
}
