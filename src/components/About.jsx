import { useEffect, useRef, useState } from "react";
import { profile, stats } from "../constants";
import Reveal from "./Reveal";
import RevealText from "./RevealText";
import useReveal from "../hooks/useReveal";

const Counter = ({ value, suffix }) => {
  const [n, setN] = useState(0);
  const [ref, inView] = useReveal({ threshold: 0.4 });
  const done = useRef(false);
  useEffect(() => {
    if (!inView || done.current) return;
    done.current = true;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / 1300, 1);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * value));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);
  return (
    <span ref={ref} className="display text-5xl sm:text-6xl text-paper">
      {n}
      <span className="text-ember">{suffix}</span>
    </span>
  );
};

const About = () => {
  return (
    <section id="about" className="relative py-28 sm:py-40">
      <div className="container-x">
        <div className="flex items-center gap-4 label mb-12">
          <span className="text-ember">01</span>
          <span className="rule max-w-[60px]" />
          <span>About</span>
        </div>

        <RevealText
          as="h2"
          className="display font-light text-paper text-[clamp(1.9rem,4.6vw,3.6rem)] max-w-5xl"
          lines={[
            "I build systems that are fast,",
            "observable and a pleasure to",
            <>
              extend — <span className="italic text-paper-dim">across the whole stack.</span>
            </>,
          ]}
        />

        <div className="mt-16 grid lg:grid-cols-[1.3fr_1fr] gap-14 lg:gap-24">
          <Reveal>
            <div className="space-y-6 text-paper-dim text-lg leading-relaxed">
              <p>{profile.summary}</p>
              <p>
                My focus is event-driven microservices, streaming LLM pipelines, and SDKs other
                developers actually enjoy using. A background in real-time 3D means I sweat the
                details of performance and motion on the frontend too.
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-3 pt-4 label">
                <span>Currently — Metabrix Lab</span>
                <span className="text-emerald-400">● {profile.availability}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="border-t border-paper/12">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex items-baseline justify-between gap-6 py-6 border-b border-paper/12"
                >
                  <Counter value={s.value} suffix={s.suffix} />
                  <span className="label text-right max-w-[150px]">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
