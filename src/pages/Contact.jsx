import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  // const { service_id, template_id, public_key } = import.meta.env
  //   .VITE_APP_EMAILJS;

  // console.log(service_id);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFocus = () => {};
  const handleBlur = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Akshat",
          from_email: form.email,
          to_email: "toakshh@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        // TODO: show success message
        // TODO: Hide the alert

        setForm({ name: "", email: "", message: "" });
      })
      .catch((e) => {
        setIsLoading(false);
        console.log(e);
        // TODO: Show error msg
      });
  };
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name" className="text-black-500 font-semibold">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="input"
            id="name"
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Enter your name"
          />
          <label htmlFor="email" className="text-black-500 font-semibold">
            email
          </label>
          <input
            type="text"
            name="email"
            className="input"
            id="email"
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Enter your email"
          />
          <label htmlFor="message" className="text-black-500 font-semibold">
            message
          </label>
          <textarea
            type="text"
            name="message"
            rows={4}
            className="textarea"
            id="message"
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Enter your message"
          />
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
