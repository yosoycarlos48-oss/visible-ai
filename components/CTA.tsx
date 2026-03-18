export default function CTA() {
  return (
    <section
      className="px-16 pt-36 pb-24 text-center border-t border-ink/[0.09]"
      id="contact"
    >
      <p className="text-[0.68rem] font-medium tracking-[0.13em] uppercase text-muted opacity-50 mb-8">
        Get in touch
      </p>
      <h2 className="font-serif font-normal text-[clamp(2.8rem,5.5vw,4.8rem)] leading-[1.04] tracking-[-0.025em] text-ink mb-12">
        Let's build
        <br />
        <em className="italic text-muted">something.</em>
      </h2>
      <div className="flex justify-center items-center gap-8">
        <a
          href="mailto:info@visibleai.ai"
          className="text-[1rem] text-ink no-underline border-b border-violet pb-0.5 hover:text-violet transition-colors duration-200"
        >
          info@visibleai.ai
        </a>
        <span className="text-ink/15">·</span>
        <a
          href="https://www.linkedin.com/in/carlosariasmartinez/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.73rem] font-medium tracking-[0.09em] uppercase text-muted no-underline hover:text-violet transition-colors duration-200"
        >
          LinkedIn ↗
        </a>
      </div>
    </section>
  );
}
