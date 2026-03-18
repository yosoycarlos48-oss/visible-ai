export default function Hero() {
  return (
    <section className="pt-40 pb-24 px-16 max-w-[840px]">
      <p className="flex items-center gap-3 text-[0.68rem] font-medium tracking-[0.14em] uppercase text-violet mb-6 before:content-[''] before:inline-block before:w-[18px] before:h-px before:bg-violet">
        AI Campaign Production
      </p>
      <h1 className="font-serif font-normal text-[clamp(3.2rem,7vw,5.8rem)] leading-[1.04] tracking-[-0.025em] text-ink mb-7">
        Campaign-level
        <br />
        creative,{" "}
        <em className="italic text-muted">
          delivered
          <br />
          in days.
        </em>
      </h1>
      <p className="text-[1.05rem] font-light text-muted leading-[1.7] max-w-[420px]">
        We produce high-end film and campaign toolkits for brands and agencies — at a fraction of the time.
      </p>
    </section>
  );
}
