import { Suspense, lazy, useEffect, useState } from "react";
import { profile } from "../constants";
import Magnetic from "./Magnetic";

const HeroScene = lazy(() => import("./HeroScene"));

const RoleTicker = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % profile.roles.length), 2800);
    return () => clearInterval(t);
  }, []);
  return (
    <span key={i} className="inline-block animate-[fade_.6s_ease]">
      {profile.roles[i]}
    </span>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100svh] w-full flex flex-col">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute right-0 top-0 h-full w-full lg:w-full">
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-transparent lg:to-ink/0" />
      </div>

      <div className="container-x relative z-10 pt-28 sm:pt-32 flex justify-between label">
        <span>Software Engineer</span>
        {/* <span className="hidden sm:block">Pune · 18.52°N, 73.85°E</span>
        <span>©{new Date().getFullYear()}</span> */}
      </div>

      <div className="container-x relative z-10 flex-1 flex flex-col justify-center py-10">
        <h1 className="display font-light text-paper text-[clamp(3.2rem,13vw,11rem)]">
          <span className="block overflow-hidden">
            <span className="block hero-rise" style={{ animationDelay: "0.05s" }}>Akshat</span>
          </span>
          <span className="block overflow-hidden">
            <span className="block italic hero-rise" style={{ animationDelay: "0.16s" }}>
              Anand<span className="text-ember">.</span>
            </span>
          </span>
        </h1>

        <div className="mt-8 max-w-xl">
          <p className="text-lg sm:text-xl text-paper-dim leading-relaxed">
            I engineer <span className="text-paper">production AI platforms</span>, real-time
            SDKs and <span className="text-paper">3D web experiences</span> — end to end, from
            tokenizer internals to containerised deploys.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Magnetic strength={0.35}>
              <a href="#projects" data-cursor="hover" className="btn-solid">
                Selected work
              </a>
            </Magnetic>
            <Magnetic strength={0.35}>
              <a href="#contact" data-cursor="hover" className="btn-outline">
                Get in touch
              </a>
            </Magnetic>
          </div>
        </div>
      </div>

      <div className="container-x relative z-10 pb-8 flex items-end justify-between">
        <div className="hidden sm:flex items-center gap-3 label">
          {/* <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> */}
          <span className="text-paper-dim normal-case tracking-normal font-mono text-lg">
            <RoleTicker />
          </span>
        </div>
        {/* <div className="flex items-center gap-5 label">
          <a href={profile.github} target="_blank" rel="noreferrer" data-cursor="hover" className="ul-link">GH</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" data-cursor="hover" className="ul-link">LI</a>
        </div> */}
      </div>

      <a href="#about" data-cursor="hover" className="label ember-link flex items-center gap-2 mx-auto">
          <span className="inline-block animate-bounce">↓</span> Scroll
        </a>
    </section>
  );
};

export default Hero;
