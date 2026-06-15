import { useMemo } from "react";
import { skills, skillCategories } from "../constants";
import TechIcon from "./TechIcon";
import Reveal from "./Reveal";
import RevealText from "./RevealText";

const Skills = () => {
  const grouped = useMemo(
    () =>
      skillCategories.map((cat) => ({
        cat,
        items: skills.filter((s) => s.category === cat),
      })),
    []
  );
  const marquee = useMemo(() => skills.filter((s) => s.icon), []);

  return (
    <section id="skills" className="relative py-28 sm:py-40 bg-ink-800/40">
      <div className="container-x">
        <div className="flex items-center gap-4 label mb-12">
          <span className="text-ember">02</span>
          <span className="rule max-w-[60px]" />
          <span>Stack</span>
        </div>

        <RevealText
          as="h2"
          className="display font-light text-paper text-[clamp(2rem,6vw,4.6rem)]"
          lines={[<>The tools I <span className="italic">reach for.</span></>]}
        />
      </div>

      <Reveal>
        <div className="marquee-mask mt-14 overflow-hidden border-y border-paper/10 py-6">
          <div className="flex w-max animate-marquee gap-14 px-7">
            {[...marquee, ...marquee].map((s, i) => (
              <span key={s.name + i} className="flex items-center gap-3 shrink-0">
                <span className="grayscale opacity-70">
                  <TechIcon icon={s.icon} name={s.name} color={s.color} size={22} />
                </span>
                <span className="display italic text-2xl text-paper-dim whitespace-nowrap">
                  {s.name}
                </span>
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="container-x mt-6">
        {grouped.map(({ cat, items }, gi) => (
          <Reveal key={cat} delay={gi * 60}>
            <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-10 py-8 border-b border-paper/12">
              <div className="label pt-1.5 flex md:block items-center gap-3">
                <span className="text-ember">0{gi + 1}</span>
                <span className="md:block md:mt-2 text-paper">{cat}</span>
              </div>
              <div className="flex flex-wrap gap-x-7 gap-y-4">
                {items.map((s) => (
                  <span
                    key={s.name}
                    data-cursor="hover"
                    className="group inline-flex items-center gap-2.5 text-paper-dim hover:text-paper transition-colors"
                  >
                    <span className="grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                      <TechIcon icon={s.icon} name={s.name} color={s.color} size={20} />
                    </span>
                    <span className="text-base sm:text-lg">{s.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Skills;
