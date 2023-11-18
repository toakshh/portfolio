import { crio } from "../assets/images";
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
    typescript
} from "../assets/icons";

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
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
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
    }
];

export const experiences = [
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
    // {
    //     title: "React Native Developer",
    //     company_name: "Tesla",
    //     icon: tesla,
    //     iconBg: "#fbc3bc",
    //     date: "Jan 2021 - Feb 2022",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },

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