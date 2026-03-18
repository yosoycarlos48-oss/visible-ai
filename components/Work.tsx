const projects = [
  {
    id: "NUKO2uRD60A",
    title: "Campaign — 01",
    meta: "Visible AI · 2024",
  },
  {
    id: "k1dLnzUhP2w",
    title: "Campaign — 02",
    meta: "Visible AI · 2024",
  },
  {
    id: "N_NiEmc3YaE",
    title: "Campaign — 03",
    meta: "Visible AI · 2024",
  },
  {
    id: "tX_l61OGAsg",
    title: "Campaign — 04",
    meta: "Visible AI · 2024",
  },
];

export default function Work() {
  return (
    <section className="px-16 pb-24" id="work">
      <div className="flex justify-between items-baseline pb-5 mb-12 border-b border-ink/[0.09]">
        <span className="text-[0.68rem] font-medium tracking-[0.13em] uppercase text-muted">
          Selected work
        </span>
        <span className="text-[0.68rem] text-muted opacity-45">04</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id}>
            <div className="relative w-full pb-[56.25%] rounded-[4px] overflow-hidden mb-4 bg-[#16121f]">
              <iframe
                className="absolute inset-0 w-full h-full border-none"
                src={`https://www.youtube.com/embed/${project.id}?controls=1&rel=0&modestbranding=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-[0.9rem] font-normal text-ink mb-1">{project.title}</p>
            <p className="text-[0.73rem] text-muted">{project.meta}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
