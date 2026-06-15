/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0b0a0d",
          900: "#0b0a0d",
          800: "#121116",
          700: "#1a1820",
          600: "#26232d",
        },
        paper: {
          DEFAULT: "#ece7dd",
          dim: "#b8b2a6",
          faint: "#7c7669",
        },
        ember: {
          DEFAULT: "#ff5436",
          soft: "#ff7a52",
        },
      },
      // extra steps so slash-opacity utilities like border-paper/12 resolve
      opacity: {
        12: "0.12",
        15: "0.15",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      keyframes: {
        marquee: { to: { transform: "translateX(-50%)" } },
      },
      animation: {
        marquee: "marquee 36s linear infinite",
      },
    },
  },
  plugins: [],
};
