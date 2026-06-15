import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { profile, socialLinks } from "../constants";
import Reveal from "./Reveal";
import RevealText from "./RevealText";

const Field = ({ label, name, type = "text", value, onChange, textarea }) => {
  const common =
    "w-full bg-transparent border-b border-paper/20 py-3 text-paper text-lg placeholder-paper-faint/60 outline-none focus:border-ember transition-colors";
  return (
    <label className="block">
      <span className="label">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          required
          rows={3}
          value={value}
          onChange={onChange}
          placeholder="Tell me what you're building…"
          className={`${common} resize-none mt-2`}
        />
      ) : (
        <input
          type={type}
          name={name}
          required
          value={value}
          onChange={onChange}
          placeholder={name === "name" ? "Your name" : "you@company.com"}
          className={`${common} mt-2`}
        />
      )}
    </label>
  );
};

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const token = import.meta.env.VITE_APP_IPINFO_API_KEY;
    if (!token) return;
    fetch(`https://ipinfo.io?token=${token}`)
      .then((r) => r.json())
      .then(setUserInfo)
      .catch(() => {});
  }, []);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const meta = userInfo
      ? `\n\nSENDER: ${userInfo.ip || ""} · ${userInfo.city || ""} ${userInfo.loc || ""} · ${userInfo.org || ""}\nUA: ${navigator.userAgent}`
      : `\n\nUA: ${navigator.userAgent}`;
    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: profile.firstName,
          from_email: form.email,
          to_email: import.meta.env.VITE_APP_OWNER_EMAIL_ID || profile.email,
          message: form.message + meta,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      setToast({ ok: true, text: "Sent — I'll reply soon." });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setToast({ ok: false, text: `Couldn't send. Email me at ${profile.email}.` });
    } finally {
      setLoading(false);
      setTimeout(() => setToast(null), 6000);
    }
  };

  return (
    <section id="contact" className="relative py-28 sm:py-40">
      <div className="container-x">
        <div className="flex items-center gap-4 label mb-12">
          <span className="text-ember">05</span>
          <span className="rule max-w-[60px]" />
          <span>Contact</span>
        </div>

        <RevealText
          as="h2"
          className="display font-light text-paper text-[clamp(2.4rem,8vw,6.5rem)]"
          lines={["Let's build", <>something <span className="italic">good.</span></>]}
        />

        <div className="mt-16 grid lg:grid-cols-[1fr_1fr] gap-14 lg:gap-24 items-start">
          <Reveal>
            <div>
              <a
                href={`mailto:${profile.email}`}
                data-cursor="hover"
                className="ul-link display italic text-2xl sm:text-4xl text-paper break-all"
              >
                {profile.email}
              </a>
              <div className="mt-10 grid grid-cols-2 gap-y-6 label">
                <div>
                  <p className="text-paper-faint">Based in</p>
                  <p className="text-paper mt-1 normal-case tracking-normal font-sans">{profile.location}</p>
                </div>
                <div>
                  <p className="text-paper-faint">Status</p>
                  <p className="text-emerald-400 mt-1 normal-case tracking-normal font-sans">● {profile.availability}</p>
                </div>
                <div className="col-span-2 flex gap-6 pt-2">
                  {socialLinks.map((s) => (
                    <a
                      key={s.name}
                      href={s.link}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="hover"
                      className="ul-link text-paper hover:text-ember transition-colors"
                    >
                      {s.name} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form ref={formRef} onSubmit={onSubmit} className="space-y-8">
              <Field label="Name" name="name" value={form.name} onChange={onChange} />
              <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} />
              <Field label="Message" name="message" textarea value={form.message} onChange={onChange} />
              <div className="flex items-center gap-5">
                <button type="submit" disabled={loading} data-cursor="hover" className="btn-solid disabled:opacity-60">
                  {loading ? "Sending…" : "Send message →"}
                </button>
                {toast && (
                  <span className={`text-sm ${toast.ok ? "text-emerald-400" : "text-ember"}`}>
                    {toast.text}
                  </span>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
