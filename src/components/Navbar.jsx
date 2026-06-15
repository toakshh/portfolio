import { useEffect, useState } from "react";
import { navLinks, profile } from "../constants";
import Magnetic from "./Magnetic";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 140 && y > last);
      last = y;
    };
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-transform duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="container-x flex items-center justify-between py-5">
        <button onClick={() => go("home")} className="display text-2xl italic" aria-label="Home">
          akshat<span className="text-ember">.</span>
        </button>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.slice(1).map((l, i) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`label !text-[11px] ul-link transition-colors ${
                active === l.id ? "!text-paper" : "hover:!text-paper"
              }`}
            >
              <span className="text-ember/80 mr-1">0{i + 1}</span>
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Magnetic strength={0.5}>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="hidden sm:inline-flex label !text-[11px] ember-link"
            >
              Résumé ↗
            </a>
          </Magnetic>
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Menu"
          >
            <span className={`h-px w-6 bg-paper transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-paper transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden container-x pb-6">
          <div className="bg-ink-800 rounded-2xl border border-paper/10 p-2">
            {navLinks.slice(1).map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="block w-full text-left px-4 py-3 display text-2xl"
              >
                {l.label}
              </button>
            ))}
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="block px-4 py-3 label !text-ember"
            >
              Résumé ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
