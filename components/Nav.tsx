export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-16 py-[1.4rem] bg-bg/92 backdrop-blur-[14px] border-b border-ink/[0.09]">
      <a href="#" className="font-serif text-[1rem] text-ink no-underline tracking-[-0.01em]">
        Visible AI
      </a>
      <a
        href="#contact"
        className="text-[0.7rem] font-medium tracking-[0.1em] uppercase text-muted no-underline hover:text-violet transition-colors duration-200"
      >
        Contact
      </a>
    </nav>
  );
}
