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
            "I trained as a Site Reliability Engineer with She Code Africa for 3 months. I gained knowledge of DevOps culture and virtualization and containerizatin of applications.",
        icon: React.createElement(LuGraduationCap),
        date: "2021",
    },
    {
        title: "Full-stack Developer Intern",
        company: "Integrify",
        location: "Helsinki, Finland",
        description:
            "I worked as a full-stack developer trainee for 8 months. ",
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