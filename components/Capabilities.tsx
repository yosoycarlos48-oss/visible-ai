const capabilities = [
  { label: "Creative Concepts", num: "01" },
  { label: "Hero Films", num: "02" },
  { label: "Campaign Toolkits", num: "03" },
  { label: "Fast Turnaround", num: "04" },
];

export default function Capabilities() {
  return (
    <section
      className="px-16 py-24 border-t border-ink/[0.09] grid grid-cols-1 md:grid-cols-2 gap-28 items-start"
      id="capabilities"
    >
      <div>
        <p className="font-serif font-normal text-[clamp(1.75rem,2.6vw,2.3rem)] leading-[1.22] tracking-[-0.015em] text-ink mb-8">
          We develop and produce{" "}
          <em className="italic text-muted">campaign-level creative</em>{" "}
          for brands and agencies.
        </p>
        <p className="text-[0.88rem] text-muted leading-[1.8] max-w-[340px]">
          From concept to final delivery — hero films, campaign toolkits, and brand assets. Built for speed without sacrificing quality.
        </p>
      </div>

      <ul className="list-none">
        {capabilities.map((item, i) => (
          <li
            key={i}
            className={`flex items-center justify-between py-5 border-b border-ink/[0.09] text-[0.9rem] text-ink ${
              i === 0 ? "border-t border-ink/[0.09]" : ""
            }`}
          >
            {item.label}
            <span className="text-[0.67rem] tracking-[0.1em] uppercase text-muted opacity-40">
              {item.num}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
