import { featuredProjects, projects, profile } from "../constants";
import Reveal from "./Reveal";
import RevealText from "./RevealText";

const Featured = ({ p, n }) => (
  <a
    href={p.link}
    target="_blank"
    rel="noreferrer"
    data-cursor="view"
    data-cursor-label="GitHub"
    className="group block border-t border-paper/12 py-9 sm:py-11"
  >
    <div className="grid sm:grid-cols-[auto_1fr_auto] gap-x-8 gap-y-4 items-start">
      <span className="label pt-2">({n})</span>

      <div className="transition-transform duration-500 ease-out group-hover:translate-x-2">
        <h3 className="display text-4xl sm:text-6xl font-light text-paper-dim group-hover:text-paper transition-colors duration-300">
          {p.name}
        </h3>
        <p className="mt-2 italic display text-xl text-ember/90">{p.tagline}</p>
        <p className="mt-4 max-w-2xl text-paper-dim leading-relaxed">{p.description}</p>
        <div className="mt-5 flex flex-wrap gap-2.5">
          {p.tags.map((t) => (
            <span key={t} className="label !text-[10px] border border-paper/15 rounded-full px-3 py-1">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex sm:flex-col items-center sm:items-end justify-between gap-3 sm:text-right">
        <span className="label">{p.highlight}</span>
        <span className="text-3xl text-paper-dim group-hover:text-ember transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
          ↗
        </span>
      </div>
    </div>
  </a>
);

const Projects = () => {
  return (
    <section id="projects" className="relative py-28 sm:py-40 bg-ink-800/40">
      <div className="container-x">
        <div className="flex items-center gap-4 label mb-12">
          <span className="text-ember">04</span>
          <span className="rule max-w-[60px]" />
          <span>Selected Work</span>
        </div>

        <RevealText
          as="h2"
          className="display font-light text-paper text-[clamp(2rem,6vw,4.6rem)] mb-10"
          lines={[<>Built &amp; <span className="italic">shipped.</span></>]}
        />

        <div className="border-b border-paper/12">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.name} delay={i * 70}>
              <Featured p={p} n={i + 1} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="label mt-16 mb-2">More work</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-x-12">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 60}>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                data-cursor="view"
                data-cursor-label="GitHub"
                className="group flex items-baseline justify-between gap-4 py-5 border-b border-paper/12"
              >
                <span className="display text-2xl text-paper-dim group-hover:text-paper transition-colors group-hover:translate-x-1 duration-300">
                  {p.name}
                </span>
                <span className="label text-right hidden sm:block max-w-[200px] truncate">
                  {p.tags.join(" · ")}
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="btn-outline"
            >
              Everything on GitHub ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
