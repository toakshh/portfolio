import { profile, navLinks, socialLinks } from "../constants";

const Footer = () => {
  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer className="relative border-t border-paper/12">
      <div className="container-x py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:items-end lg:justify-between">
          <div>
            <p className="label mb-4">Akshat Anand — {new Date().getFullYear()}</p>
            <button onClick={() => go("home")} className="display italic text-[clamp(2.5rem,7vw,5rem)] font-light text-paper leading-none">
              Let&apos;s talk<span className="text-ember">.</span>
            </button>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-3">
            <div className="flex flex-col gap-2">
              {navLinks.slice(1).map((l) => (
                <button key={l.id} onClick={() => go(l.id)} data-cursor="hover" className="label ul-link text-left hover:!text-paper">
                  {l.label}
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {socialLinks.map((s) => (
                <a key={s.name} href={s.link} target="_blank" rel="noreferrer" data-cursor="hover" className="label ul-link hover:!text-paper">
                  {s.name} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between label">
          <span>Built with React · Three.js · custom GLSL · Tailwind</span>
          <span>{profile.location}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
