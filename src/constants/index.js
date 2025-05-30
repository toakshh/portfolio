import { crio, zimension } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    python
} from "../assets/icons";

export const assestsCloudinaryLinks = {
    plane: "https://res.cloudinary.com/dnhe1k7hk/image/upload/v1704182222/portfolio%20assets/assets/3d/ycxstfu3b5lcy8hf5lnp.glb",
    sky: "https://res.cloudinary.com/dnhe1k7hk/image/upload/v1704182221/portfolio%20assets/assets/3d/ataabip1dwcqwqxvgyuw.glb",
    bird: "https://res.cloudinary.com/dnhe1k7hk/image/upload/v1704182232/portfolio%20assets/assets/3d/oq7ujgfdihqkhqsgdhco.glb",
    fox: "https://res.cloudinary.com/dnhe1k7hk/image/upload/v1704182221/portfolio%20assets/assets/3d/aihxq2poegnzjsephvdh.glb",
    island: "https://res.cloudinary.com/dnhe1k7hk/image/upload/v1704182225/portfolio%20assets/assets/3d/m8vhixa1jgtwk6tjqg0s.glb",
}

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React Native",
        type: "Mobile Apps",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Framer Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "language",
    }
];

export const experiences = [
    {
        title: "Frontend Developer",
        company_name: "Zimension 3D Technologies",
        icon: zimension,
        iconBg: "#fbc3bc",
        date: "Oct 2023 - Feb 2024",
        points: [
            "Led the development of 5+ projects using React and Next.js, focusing on performance optimization, responsive design, and cross-browser compatibility.",
            "Improved user experience by implementing UI enhancements, fixing bugs, and ensuring seamless functionality across devices.",
            "Enhanced website accessibility by adhering to modern web standards and optimizing code for better performance.",
            "Collaborated with cross-functional teams to deliver high-quality, scalable, and maintainable web applications."
        ],
    },
    {
        title: "Fullstack Developer",
        company_name: "Crio (intern)",
        icon: crio,
        iconBg: "#accbe1",
        date: "November 2022 - present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Freelancer",
        icon: crio,
        iconBg: "#fbc3bc",
        date: "Currently Working",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/toakshh',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/toakshh',
    }
];

export const projects = [
    {
        iconUrl: summiz,
        theme: 'btn-back-black',
        name: 'MovieMania',
        description: 'Developed a React native app using expo and appwrite. More details on Github and resume.',
        link: 'https://github.com/toakshh/movieApp',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Qkart',
        description: 'Developed an e-commerce web application that offers a variety of products for customers. More details on Github and resume.',
        link: 'https://qkart-frontend-akshat.netlify.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Ahead clone',
        description: 'Created a frontend replica of the popular Ahead app from dribble design. More details on Github and resume.',
        link: 'https://density-ahead-akshat.vercel.app/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'News',
        description: 'Created news website using React, Redux, Firebase and much more. More details on Github and resume.',
        link: 'https://news-akshat.netlify.app',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-blue',
        name: 'Qtify',
        description: 'Frontend web app based on React. More details on Github and resume.',
        link: 'https://qtify-akshat.netlify.app/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-pink',
        name: 'Qtrip',
        description: 'Travel e-commerce website for travellers. More details on Github and resume.',
        link: 'https://qtripdynamic-akshat.netlify.app/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-black',
        name: 'Admin UI',
        description: "An admin portal to manage list of users. More details on Github and resume.",
        link: 'https://admin-ui-akshat.netlify.app/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-yellow',
        name: 'XBoard',
        description: 'Basic app to show newsfeed to users',
        link: 'https://xboard-akshat.netlify.app/',
    }
];