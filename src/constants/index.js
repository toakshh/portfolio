/*
 * Portfolio content — Akshat Anand
 * Single source of truth for all sections.
 * Tech icons are loaded at runtime from public CDNs (devicon / simpleicons),
 * with a graceful text-chip fallback if a logo fails to load.
 */

const devicon = (path) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;
const simple = (slug, color) =>
  `https://cdn.simpleicons.org/${slug}${color ? `/${color}` : ""}`;

export const profile = {
  name: "Akshat Anand",
  firstName: "Akshat",
  initials: "AA",
  roles: [
    "Software Engineer",
    "Full-Stack Systems",
    "AI Platform Builder",
    "Real-Time Architecture",
    "Three.js & SDK Author",
  ],
  headline: "I build production AI platforms, real-time SDKs, and 3D web experiences.",
  summary:
    "Software engineer with ~3 years of end-to-end ownership across frontend, backend, AI and SDK layers — from tokenizer internals to containerised production deploys. I ship multi-provider LLM systems, real-time streaming architectures, and npm-published TypeScript SDKs.",
  location: "Pune, Maharashtra, India",
  email: "toakshh@gmail.com",
  phone: "+91 9860997478",
  github: "https://github.com/toakshh",
  linkedin: "https://www.linkedin.com/in/toakshh",
  resume: "/Akshat_Anand_Resume.pdf",
  availability: "Open to new opportunities",
};

export const stats = [
  { value: 3, suffix: "+", label: "Years building" },
  { value: 65, suffix: "+", label: "Projects shipped" },
  { value: 27, suffix: "+", label: "AI / LLM apps" },
  { value: 3, suffix: "", label: "npm-published SDKs" },
];

/* Skill categories — used for the interactive constellation / filter grid */
export const skillCategories = [
  "Frontend",
  "Backend & Data",
  "AI & LLM",
  "Real-Time & SDK",
  "DevOps & Platform",
];

export const skills = [
  // Frontend
  { name: "React", category: "Frontend", color: "#61DAFB", icon: devicon("react/react-original.svg") },
  { name: "Next.js", category: "Frontend", color: "#ffffff", icon: simple("nextdotjs", "ffffff") },
  { name: "Three.js", category: "Frontend", color: "#ffffff", icon: simple("threedotjs", "ffffff") },
  { name: "TypeScript", category: "Frontend", color: "#3178C6", icon: devicon("typescript/typescript-original.svg") },
  { name: "JavaScript", category: "Frontend", color: "#F7DF1E", icon: devicon("javascript/javascript-original.svg") },
  { name: "Tailwind CSS", category: "Frontend", color: "#38BDF8", icon: devicon("tailwindcss/tailwindcss-original.svg") },
  { name: "Redux", category: "Frontend", color: "#764ABC", icon: devicon("redux/redux-original.svg") },
  { name: "Zustand", category: "Frontend", color: "#FFB13B", icon: null },
  { name: "Framer Motion", category: "Frontend", color: "#E64BFF", icon: simple("framer", "ffffff") },
  { name: "GSAP", category: "Frontend", color: "#88CE02", icon: simple("greensock", "88CE02") },

  // Backend & Data
  { name: "Node.js", category: "Backend & Data", color: "#539E43", icon: devicon("nodejs/nodejs-original.svg") },
  { name: "Express", category: "Backend & Data", color: "#ffffff", icon: simple("express", "ffffff") },
  { name: "MongoDB", category: "Backend & Data", color: "#47A248", icon: devicon("mongodb/mongodb-original.svg") },
  { name: "PostgreSQL", category: "Backend & Data", color: "#4169E1", icon: devicon("postgresql/postgresql-original.svg") },
  { name: "Prisma", category: "Backend & Data", color: "#ffffff", icon: simple("prisma", "ffffff") },
  { name: "Supabase", category: "Backend & Data", color: "#3ECF8E", icon: simple("supabase", "3ECF8E") },
  { name: "REST / JWT", category: "Backend & Data", color: "#FB015B", icon: simple("jsonwebtokens", "ffffff") },

  // AI & LLM
  { name: "OpenAI GPT-4o", category: "AI & LLM", color: "#ffffff", icon: simple("openai", "ffffff") },
  { name: "Google Gemini", category: "AI & LLM", color: "#8E75F8", icon: simple("googlegemini", "8E75F8") },
  { name: "LangChain", category: "AI & LLM", color: "#ffffff", icon: simple("langchain", "ffffff") },
  { name: "Pinecone", category: "AI & LLM", color: "#3BE0C4", icon: simple("pinecone", "3BE0C4") },
  { name: "RAG Pipelines", category: "AI & LLM", color: "#22D3EE", icon: null },
  { name: "Embeddings / TTS", category: "AI & LLM", color: "#A78BFA", icon: null },

  // Real-Time & SDK
  { name: "Socket.IO", category: "Real-Time & SDK", color: "#ffffff", icon: simple("socketdotio", "ffffff") },
  { name: "WebSocket", category: "Real-Time & SDK", color: "#22D3EE", icon: null },
  { name: "WebAssembly", category: "Real-Time & SDK", color: "#654FF0", icon: simple("webassembly", "654FF0") },
  { name: "Rollup", category: "Real-Time & SDK", color: "#EC4A3F", icon: simple("rollupdotjs", "EC4A3F") },
  { name: "Webpack", category: "Real-Time & SDK", color: "#8DD6F9", icon: devicon("webpack/webpack-original.svg") },
  { name: "Electron", category: "Real-Time & SDK", color: "#47848F", icon: devicon("electron/electron-original.svg") },

  // DevOps & Platform
  { name: "Docker", category: "DevOps & Platform", color: "#2496ED", icon: devicon("docker/docker-original.svg") },
  { name: "GitHub Actions", category: "DevOps & Platform", color: "#2088FF", icon: simple("githubactions", "2088FF") },
  { name: "Git", category: "DevOps & Platform", color: "#F05032", icon: devicon("git/git-original.svg") },
  { name: "React Native", category: "DevOps & Platform", color: "#61DAFB", icon: devicon("react/react-original.svg") },
  { name: "Expo", category: "DevOps & Platform", color: "#ffffff", icon: simple("expo", "ffffff") },
  { name: "Python", category: "DevOps & Platform", color: "#3776AB", icon: devicon("python/python-original.svg") },
];

export const experiences = [
  {
    title: "Web Developer",
    company: "Metabrix Lab",
    date: "Aug 2025 — Present",
    location: "Full-time",
    accent: "#22D3EE",
    summary:
      "Owning system design and the AI/real-time layer across production analytics dashboards.",
    points: [
      "Cut dashboard load time 40% by replacing a monolithic polling architecture with event-driven Node.js microservices containerised in Docker, across 3 production dashboards.",
      "Shipped zero-downtime deploys over 10+ releases via GitHub Actions CI/CD with automated test gates and Docker image versioning.",
      "Drove a 30% sprint-throughput increase in two Agile cycles by leading system-design decisions and rolling out modular frontend standards adopted team-wide.",
      "Reduced analyst review time 25% with a multi-provider LLM + TTS system (OpenAI, Gemini) — real-time streaming and latency metrics integrated via LangChain, no page reloads.",
    ],
    tags: ["Node.js", "Docker", "LangChain", "OpenAI", "Gemini", "CI/CD"],
  },
  {
    title: "Freelance Software Engineer",
    company: "Independent",
    date: "Mar 2025 — Jul 2025",
    location: "Contract",
    accent: "#A78BFA",
    summary:
      "Delivered full-stack and AI products solo for paying clients, end to end.",
    points: [
      "Built an AI document assistant (OpenAI + PostgreSQL + React) handling 100+ daily queries — cut client manual processing by 3 hrs/day, delivered solo in 6 weeks.",
      "Containerised and deployed 3 client APIs on DigitalOcean with Docker, JWT-secured auth and MongoDB/PostgreSQL — zero reported auth failures.",
      "Shipped 4 full-stack systems across web and mobile in 5 months, each on time, using reusable component libraries that cut setup time 35%.",
    ],
    tags: ["React", "PostgreSQL", "OpenAI", "Docker", "JWT"],
  },
  {
    title: "Frontend Developer",
    company: "Zimension 3D Technologies",
    date: "Mar 2024 — Dec 2024",
    location: "Full-time",
    accent: "#F472B6",
    summary:
      "Optimised browser-based 3D rendering and hardened a production React app.",
    points: [
      "Improved 3D scene FPS 45% by redesigning the Three.js rendering pipeline with geometry instancing, level-of-detail switching and texture atlasing (verified in Chrome DevTools).",
      "Reduced CVEs from 3 to 0 by overhauling access control and input sanitisation, verified via internal security audit.",
      "Cut React re-renders 60% by refactoring state to Redux with memoised selectors (measured via React Profiler).",
      "Shipped 3 production releases with zero rollbacks over 9 months in a 5-person Agile team using JIRA.",
    ],
    tags: ["Three.js", "React", "Redux", "WebGL", "JIRA"],
  },
];

export const featuredProjects = [
  {
    name: "Ultron AI Ecosystem",
    tagline: "Real-time AI vision SDK + multi-surface clients",
    description:
      "Official JS/TS SDK (Rollup-bundled, npm-published) for real-time AI vision, screen commentary, session management and TTS. WebSocket / Socket.IO transport, JWT auth and streaming interfaces across React and Electron — fully containerised with Docker and shipped via GitHub Actions CI/CD.",
    tags: ["TypeScript", "Socket.IO", "Electron", "OpenAI", "Rollup", "Docker"],
    accent: "#22D3EE",
    link: "https://github.com/toakshh",
    highlight: "npm-published SDK",
  },
  {
    name: "AI RAG & Data Pipeline",
    tagline: "Context-aware retrieval backend",
    description:
      "Context-aware AI chatbot backend with a Pinecone vector store, LangChain RAG orchestration and OpenAI embeddings. JWT-secured Express API on MongoDB, delivering 50% faster semantic retrieval versus keyword baselines.",
    tags: ["LangChain", "Pinecone", "OpenAI", "Express", "MongoDB"],
    accent: "#A78BFA",
    link: "https://github.com/toakshh",
    highlight: "50% faster retrieval",
  },
  {
    name: "Video Frame Analyzer SDK",
    tagline: "WASM perceptual hashing & SSIM",
    description:
      "Real-time video-frame analysis SDK built on WebAssembly for perceptual hashing and SSIM comparison. TypeScript-first with a full build pipeline (build:wasm, build:all) and a browser-compatible demo harness.",
    tags: ["WebAssembly", "TypeScript", "Rollup", "Computer Vision"],
    accent: "#F472B6",
    link: "https://github.com/toakshh",
    highlight: "WASM-powered",
  },
];

export const projects = [
  {
    name: "Network Interceptor Suite",
    description:
      "Microservices traffic-interception & replay platform (@nis/* gateway, proxy, CA, scan, replay services) for inspecting and rewriting network traffic.",
    tags: ["Node.js", "Microservices", "TypeScript"],
    accent: "#22D3EE",
    link: "https://github.com/toakshh",
  },
  {
    name: "Apple Landing (3D)",
    description:
      "Immersive product landing page with an interactive Three.js scene, GSAP scroll choreography and Zustand state — a showcase of WebGL motion design.",
    tags: ["React", "Three.js", "GSAP", "Zustand"],
    accent: "#A78BFA",
    link: "https://github.com/toakshh",
  },
  {
    name: "Car Commerce",
    description:
      "Next.js car marketplace with Prisma data layer and Gemini-powered listing assistance, server-rendered for SEO and speed.",
    tags: ["Next.js", "Prisma", "Gemini"],
    accent: "#3ECF8E",
    link: "https://github.com/toakshh",
  },
  {
    name: "Parkbnb",
    description:
      "React Native + Expo parking-spot marketplace with real-time availability over Socket.IO and Zustand-managed booking flow.",
    tags: ["React Native", "Expo", "Socket.IO"],
    accent: "#F472B6",
    link: "https://github.com/toakshh",
  },
  {
    name: "RAG Explorer",
    description:
      "Interactive front-end for visualising retrieval-augmented generation — inspect chunks, embeddings and similarity scoring as queries run.",
    tags: ["React", "Vite", "RAG"],
    accent: "#FBBF24",
    link: "https://github.com/toakshh",
  },
  {
    name: "Personal Tokenizer",
    description:
      "A tokenizer built from scratch to understand LLM internals — encoding/decoding, vocab building and byte-pair merges, written in TypeScript.",
    tags: ["TypeScript", "Node.js", "LLM internals"],
    accent: "#60A5FA",
    link: "https://github.com/toakshh",
  },
];

export const education = [
  {
    title: "GenAI Cohort",
    org: "Chai aur Code",
    year: "2025",
    note: "Applied LLMs, RAG, agents & tokenizer internals.",
  },
  {
    title: "Full Stack Fellowship",
    org: "Crio.do",
    year: "2023",
    note: "Project-based MERN engineering fellowship.",
  },
  {
    title: "BA, English Literature",
    org: "L.N.M University",
    year: "",
    note: "",
  },
];

export const socialLinks = [
  { name: "GitHub", link: profile.github },
  { name: "LinkedIn", link: profile.linkedin },
  { name: "Email", link: `mailto:${profile.email}` },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
