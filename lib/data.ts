import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ebonow from '@/public/ebonow.png'
import blogger from '@/public/blogger.png'
import airbnb from '@/public/airbnb-clone.png'
import chaton from '@/public/chaton.png'


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
  title: "Full Stack Developer-Angular & Nest.js (Plusone Technologies)",
  location: "Jaipur, Rajasthan (Remote)",
  description:
    "In this role, I developed and maintained enterprise-grade web applications using Angular for the frontend and Nest.js with Node.js and MySQL for the backend. I implemented modular and scalable architectures, built RESTful APIs, and integrated complex business logic. I also handled cloud deployments on AWS EC2 and managed file storage via S3 buckets, ensuring high availability, security, and performance across environments.",
  icon: React.createElement(CgWorkAlt),
  date: "2024 - Present",
},
  {
  title: "Full Stack Developer-PERN (Ascend Capital)",
  location: "Jaipur, Rajasthan",
  description:
    "As a Full Stack Developer, I worked extensively with the PERN stack (PostgreSQL, Express.js, React, Node.js) to build and maintain scalable web applications. I focused on developing RESTful APIs, implementing secure user authentication, and managing complex data interactions. Additionally, I deployed applications on AWS EC2 and managed static assets using S3, ensuring performance, reliability, and cloud scalability in a collaborative agile environment.",
  icon: React.createElement(CgWorkAlt),
  date: "2024 - 2024",
},
  {
    title: "Jr. Mern Stack Developer (JK Tech Solution)",
    location: "Jaipur, Rajasthan (Remote)",
    description:
      "As a Junior MERN and Vue.js Developer, I actively contributed to the development of dynamic web applications. Employing React, Next.js, Vue.js, TypeScript, and Express.js, I focused on creating seamless user experiences. My responsibilities encompassed both front-end and back-end development, emphasizing collaboration, performance optimization, and robust security measures within an agile team environment.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Full-Stack Developer(Ebo Solution Private Limited)",
    location: "Mumbai, Maharashtra (Remote)",
    description:
      "I developed front-end and back-end solutions for a dynamic web app, utilizing React, HTML, CSS, JavaScript, Node.js, and Express. Agile teamwork, performance optimization, and security measures were key aspects.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Front-End Developer (Scrimba)",
    location: "Oslo, Norway (Remote)",
    description:
      "I acquired expertise in React and frontend technologies, mastering HTML, CSS, and JavaScript. Developed responsive web interfaces, ensuring a seamless and visually appealing user experience.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Algoexpert",
    location: "USA, (Remote)",
    description:
      "I learned algorithms to optimize processes, enhancing efficiency and problem-solving. Employed data structures and logical sequences for improved decision-making, streamlining complex tasks.",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2021",
  },
] as const;

export const projectsData = [
  {
    title: "Ebonow",
    description:
      "I worked as a full-stack developer on this startup project for 6 months. Users can book decoration service for their precious moments.",
    tags: ["React", "Javascript","Express.js", "MongoDB","Tailwind"],
    imageUrl: ebonow,
    link : "https://www.ebonow.com/",
    srcCode : ""
  },
  {
    title: "Air-bnb Clone",
    description:
      "air-bnb clone where user can book and list room by their own preferance.",
    tags: ["React", "Next.js", "Mongodb", "Tailwind", "Framer"],
    imageUrl: airbnb,
    link:"https://rental-model.vercel.app",
    srcCode:"https://github.com/RAWS1N/airbnb-clone"
  },
  {
    title: "Blogger",
    description:
      "A blog application featuring real-time live comments and likes, enhancing user engagement and interaction, creating a dynamic and engaging blogging experience.",
    tags: ["React+Vite", "TypeScript", "Tailwind","React-Query"],
    imageUrl:blogger,
    link : "https://blog-frontend-eta-neon.vercel.app",
    srcCode:"https://github.com/RAWS1N/blog-frontend"
  },
  {
    title: "Chat application",
    description:
      "A real-time MERN (MongoDB, Express, React, Node.js) app with Socket.io integration for instant data updates and communication, ideal for interactive web applications and collaborative features.",
    tags: ["React","Express.js","Mongodb", "Socket.io","Tailwind","ChakraUI"],
    imageUrl: chaton,
    link:"https://chaton-frontend.vercel.app",
    srcCode:"https://github.com/RAWS1N/chaton-frontend"
  },
] as const;

export const skillsData = [
  "Next.js",
  "React",
  "Vue.js",
  "JavaScript",
  "TypeScript",
  "Tailwind",
  "HTML",
  "CSS",
  "Node.js",
  "GraphQL",
  "Git",
  "Github",
  "MongoDB",
  "Prisma",
  "Mongoose",
  "Redux",
  "Express",
  "Python",
  "React-Query",
  "Framer Motion",
] as const;
