import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import spacetagramImg from "@/public/spacetagram.png";
import spacefinityImg from "@/public/spacefinity.png"
import guessnumbergameImg from "@/public/guessnumbergame.png";

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
        title: "SRE trainee",
        company: "She Code Africa",
        location: "Nigeria (Remote)",
        description:
            "During my time as a Site Reliability Engineer Trainee at She Code Africa, I acquired valuable knowledge and skills in DevOps practices. I gained proficiency in using basic Linux commands for implementing Linux administration tasks, virtualization, dockerization, and containerization of applications using tools such as Vagrant, Docker, and Cloud Build. I also gained hands-on experience in implementing Infrastructure as Code and Pipeline as Code concepts through the utilization of CI / CD and infrastructure tools like Jenkins CI, Terraform, and Circle CI.These experiences allowed me to develop a good foundation in the automation and management of infrastructure and deployment pipelines",
        icon: React.createElement(LuGraduationCap),
        date: "2021",
    },
    {
        title: "Full-stack Developer Intern",
        company: "Integrify",
        location: "Helsinki, Finland",
        description:
            "As a Full Stack Developer Trainee at Integrify, Finland (Remote) from August 2021 to April 2022, I gained valuable experience in building websites and applications. Working closely with the design team, I successfully translated designs into pixel-perfect websites using HTML, CSS (SCSS), JavaScript, and TypeScript. Collaborating with the development team, I contributed to the creation of highly responsive and accessible applications to deliver an exceptional user experience. On the frontend, I worked with modern technologies such as React, Redux, and Redux Toolkit. Additionally, I had the opportunity to work on server-side applications using Node.js and MongoDB databases. Overall, my experience at Integrify allowed me to develop a comprehensive skill set in full-stack development, encompassing both frontend and backend technologies.",
        icon: React.createElement(CgWorkAlt),
        date: "2021 - 2022 ",
    },
    {
        title: "Full-Stack Developer",
        company: "Firmhouse BV",
        location: "Nijmegen, The Netherlands",
        description:
            "I'm now a full-stack developer working at Firmhouse BV. My stack includes Ruby, Ruby on Rails, React, Next.js, TypeScript and Tailwind. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2022 - present",
    },
] as const;

export const projectsData = [
    {
        title: "Spacetagram",
        description:
            "A web app built with React that displays random images from space obtained from the NASA API.",
        tags: ["React", "Next.js", "Tailwind"],
        imageUrl: spacetagramImg,
    },
    {
        title: "Guess My Number",
        description:
            "A web app built with JavaScript where you guess intuitively the hidden number within a specified range. With each guess, you receive insightful hints that guides you closer to elusive target.",
        tags: ["HTML", "CSS", "JavaScript"],
        imageUrl: guessnumbergameImg,
    },
    {
        title: "Spacetagram",
        description:
            "A web app built with React that displays random images from space obtained from the NASA API.",
        tags: ["React", "Next.js", "Tailwind"],
        imageUrl: spacefinityImg,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Express",
    "PostgreSQL",
    "Python",
    "Framer Motion",
] as const;