import spacetagramImg from "@/public/spacetagram.png";
import type { Project } from "./types";

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
    date: "2021",
  },
  {
    title: "Full-stack Developer Intern",
    company: "Integrify",
    location: "Helsinki, Finland",
    date: "2021 - 2022",
  },
  {
    title: "Full-Stack Developer",
    company: "Firmhouse BV",
    location: "Rotterdam, The Netherlands",
    date: "Apr 2022 - Oct 2023",
  },
  {
    title: "Frontend Developer",
    company: "TravPro Mobile",
    location: "Nijmegen, The Netherlands",
    date: "Jan 2024 - present",
  },
] as const;

export const projectsData: Project[] = [
  {
    title: "Expense Tracker + AI Agent",
    description:
      "A personal expense tracker with an AI agent layer — categorizes transactions and answers natural-language questions about spending. Built to deepen React/TypeScript fundamentals while learning agent design from scratch.",
    status: "building",
    flagship: true,
    tags: ["React", "TypeScript", "AI Agents"],
  },
  {
    title: "Spacetagram",
    description:
      "A web app built with React that displays random images from space obtained from the NASA API.",
    status: "shipped",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: spacetagramImg,
  },
  {
    title: "Location App",
    description:
      "A map-based location app — currently being rebuilt. More soon.",
    status: "redesigning",
  },
];

export const skillsData = [
  "React",
  "TypeScript",
  "Next.js",
  "JavaScript",
  "Tailwind",
  "Node.js",
  "Ruby on Rails",
  "PostgreSQL",
  "MongoDB",
  "Git",
  "AI Agents",
] as const;
