import { useState } from "react";
import { experiences, education } from "../constants";
import Reveal from "./Reveal";
import RevealText from "./RevealText";

const Row = ({ exp, n, open, onToggle }) => (
  <div className="border-t border-paper/12">
    <button
      onClick={onToggle}
      data-cursor="hover"
      className="group w-full text-left py-7 sm:py-9"
    >
      <div className="grid sm:grid-cols-[auto_1fr_auto] items-baseline gap-x-6 gap-y-2">
        <span className="label">0{n}</span>
        <div>
          <h3 className="display text-3xl sm:text-5xl font-light text-paper-dim group-hover:text-paper transition-colors duration-300 flex flex-wrap items-baseline gap-x-4">
            {exp.title}
            <span className="text-base sm:text-lg font-sans not-italic text-paper-faint">
              — {exp.company}
            </span>
          </h3>
        </div>
        <span className="label whitespace-nowrap">{exp.date}</span>
      </div>

      <div
        className="grid transition-all duration-500 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0.001 }}
      >
        <div className="overflow-hidden">
          <div className="pt-6 grid lg:grid-cols-[1fr_1.4fr] gap-6 lg:gap-16">
            <p className="text-paper-dim leading-relaxed">{exp.summary}</p>
            <div>
              <ul className="space-y-3">
                {exp.points.map((p, i) => (
                  <li key={i} className="flex gap-3 text-paper-dim leading-relaxed">
                    <span className="text-ember mt-1 shrink-0">→</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {exp.tags.map((t) => (
                  <span key={t} className="label !text-[10px] border border-paper/15 rounded-full px-3 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  </div>
);

const Experience = () => {
  const [open, setOpen] = useState(0);
  return (
    <section id="experience" className="relative py-28 sm:py-40">
      <div className="container-x">
        <div className="flex items-center gap-4 label mb-12">
          <span className="text-ember">03</span>
          <span className="rule max-w-[60px]" />
          <span>Experience</span>
        </div>

        <RevealText
          as="h2"
          className="display font-light text-paper text-[clamp(2rem,6vw,4.6rem)] mb-10"
          lines={[<>Where I&apos;ve <span className="italic">shipped.</span></>]}
        />

        <div className="border-b border-paper/12">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 70}>
              <Row exp={exp} n={i + 1} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="label mt-16 mb-6">Education &amp; certifications</p>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-px bg-paper/12 border border-paper/12">
          {education.map((e, i) => (
            <Reveal key={e.title} delay={i * 70}>
              <div className="bg-ink h-full p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h4 className="display text-xl text-paper">{e.title}</h4>
                  {e.year && <span className="label">{e.year}</span>}
                </div>
                <p className="text-paper-dim mt-1">{e.org}</p>
                {e.note && <p className="text-sm text-paper-faint mt-3">{e.note}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
