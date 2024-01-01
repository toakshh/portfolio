import React, {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Fox from "../models/Fox";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const [userInfo, setUserInfo] = useState(null);

  // custom hook
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = useCallback(
    (e) => setForm({ ...form, [e.target.name]: e.target.value }),
    [form]
  );
  const handleFocus = useCallback(() => setCurrentAnimation("walk"), []);
  const handleBlur = useCallback(() => setCurrentAnimation("idle"), []);

  // get location and info of user
  async function getIPAddress() {
    try {
      const response = await fetch(
        `https://ipinfo.io?token=${import.meta.env.VITE_APP_IPINFO_API_KEY}`
      );
      const data = await response.json();
      setUserInfo(data);
    } catch (e) {
      console.log("error while fetching visitor detials ===> ", e);
    }
  }

  useEffect(() => {
    getIPAddress();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");
    const formattedMessage = `SENDER DETAILS:
  - IP: ${userInfo.ip},
  - Location: ${userInfo.loc},
  - City: ${userInfo.city},
  - Organization: ${userInfo.org}

    USER PLATFORM: ${navigator.userAgent}

    SENDER MESSAGE: ${form.message}`;

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Akshat",
          from_email: form.email,
          to_email: import.meta.env.VITE_APP_OWNER_EMAIL_ID,
          message: formattedMessage,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        //show success message
        showAlert({
          show: true,
          text: "Thanks for the message",
          type: "success",
        });

        setTimeout(() => {
          //Hide the alert
          hideAlert(false);
          setForm({ name: "", email: "", message: "" });
          setCurrentAnimation("idle");
        }, [1500]);
      })
      .catch((e) => {
        setIsLoading(false);
        setCurrentAnimation("idle");
        console.log(e);
        // Show error msg
        showAlert({
          show: true,
          text: "Oops! It seems your message wasn't sent successfully. Try again or mail at : toakshh@gmail.com",
          type: "danger",
        });
      });
  };

  return (
    <section className="relative flex md:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}
      {/* Contact form */}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <div>
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
              required
              autoComplete="on"
              onBlur={handleBlur}
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-black-500 font-semibold  ">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="input"
              id="email"
              required
              autoComplete="on"
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-black-500 font-semibold">
              Message
            </label>
            <textarea
              type="text"
              name="message"
              rows={4}
              className="textarea"
              id="message"
              required
              autoComplete="on"
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="Enter your message"
            />
          </div>
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
      {/* 3D model */}
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
