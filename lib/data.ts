import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import rmtdevImg from "@/public/it-valet.png";
import wordanalyticsImg from "@/public/react-hrm.png";
import letsConnect from "@/public/lets-connect.jpg";
import designShirt from "@/public/design-your-outfit.jpg";
import ecommerce from "@/public/ecommerce.png";

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
    name: "Writing",
    hash: "#writing",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const personalData = {
  name: "Hassan Faryad",
  tagline: "Senior Software Engineer · .NET | React | AI-Powered Systems",
  location: "Pakistan",
  email: "muhammad.hassan93b@gmail.com",
  github: "https://github.com/HASSANFARYAD",
  linkedin: "https://www.linkedin.com/in/hassan-faryad-0250bb113/",
  medium: "https://medium.com/@Has_San",
  yearsOfExperience: 7,
  bio: "I'm a Senior Software Engineer with 7+ years of experience building enterprise-grade web applications. My core stack is .NET / .NET Core, React/Next.js, and AI-powered backend systems. I specialize in designing scalable architectures, integrating AI agents (Semantic Kernel, LLMs), and shipping production-ready full-stack products. Currently building at HazenTech where I architect multi-agent AI pipelines deployed on Azure.",
};

// Toggle the "Open to Work" banner in the hero here.
export const openToWork = {
  visible: true,
  text: "Open to Work",
  emoji: "\u{1F7E2}",
};

// Hand-maintained snapshot -- nothing fetches these, so they drift silently.
// Re-check against the GitHub profile when you touch this file.
export const githubData = {
  username: "HASSANFARYAD",
  url: "https://github.com/HASSANFARYAD",
  profileUrl: "https://github.com/HASSANFARYAD",
  publicRepos: 26,
  totalContributions: 487,
  streak: { current: 14 },
  topLanguages: ["Python", "TypeScript", "C#"],
  contributionBars: [2, 5, 0, 3, 7, 1, 4, 6, 0, 2, 5, 8, 3, 1],
  lastVerified: "2026-09-10",
} as const;

// Derived from the values above wherever the number already lives somewhere,
// so the hero stats can't disagree with the rest of the page.
export const statsData = [
  {
    label: "Years of Experience",
    value: personalData.yearsOfExperience,
    suffix: "+",
  },
  {
    label: "GitHub Repos",
    value: githubData.publicRepos,
    suffix: "",
  },
  {
    label: "Projects Shipped",
    value: 10,
    suffix: "+",
  },
  {
    label: "AI Agents Built",
    value: 3,
    suffix: "",
  },
] as const;

export const currentlyBuildingData = [
  {
    name: "Metadata Guardian",
    description: "AI Metadata Agent",
    language: "Python",
    url: "https://github.com/HASSANFARYAD/metadata-guardian",
  },
  {
    name: "Fiverr Copilot",
    description: "AI Gig Optimizer",
    language: "TypeScript",
    url: "https://github.com/HASSANFARYAD/fiverr-copilot",
  },
  {
    name: "ChronoGraph",
    description: "Temporal Reasoning Engine",
    language: "Python",
    url: "https://github.com/HASSANFARYAD/ChronoGraph",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Software Engineer",
    location: "HazenTech",
    description:
      "Designed a scalable, modular architecture using .NET 9 with MediatR, integrating Keycloak for secure authentication, Qdrant for vector-based knowledge retrieval, and React (Vite) for real-time AI chat. Deployed on Azure with Docker, CI/CD automation, and multi-agent pipelines for intelligent task execution and adaptive decision support.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2025 - Present",
  },
  {
    title: "Full Stack Developer",
    location: "Nodlays",
    description:
      "Designed and shipped dynamic web applications using React, Next.js, Node.js, and .NET. Led feature development across frontend and backend, and contributed to AI integrations.",
    icon: React.createElement(LuGraduationCap),
    date: "Jul 2019 - Mar 2025",
  },
  {
    title: "Junior Web Developer",
    location: "TechLogs",
    description:
      "Worked as a Junior Web Developer, utilizing SQL queries to retrieve, manipulate, and analyze data within React and .NET applications over the span of 1 year.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2018 - Jan 2019",
  },
  {
    title: "Developer (Intern)",
    location: "Experts Batch",
    description:
      "Completed an internship where I created user interfaces using modern web technologies such as JavaScript frameworks, HTML5, and CSS3.",
    icon: React.createElement(FaReact),
    date: "May 2017 - Dec 2017",
  },
] as const;

export type ProjectCategory = ".NET" | "React/Next.js" | "AI/Python" | "Full-Stack";

export const projectCategories = [
  "All",
  ".NET",
  "React/Next.js",
  "AI/Python",
  "Full-Stack",
] as const;

export const projectsData = [
  {
    title: "Tech Valet",
    description:
      "Tech VALET is a platform that links older clients with qualified IT specialists.",
    tags: ["React", "Bootstrap", "Redux-ToolKit", ".Net Core", "PayPal", "Stripe", "SignalR"],
    category: "Full-Stack" as ProjectCategory,
    imageUrl: rmtdevImg,
    githubUrl: undefined,
  },
  {
    title: "HRM System",
    description:
      "HR management system, streamlining employee data management and improving HR processes.",
    tags: ["React", "SQL", "Tailwind", "Framer", ".Net", "SignalR"],
    category: ".NET" as ProjectCategory,
    imageUrl: wordanalyticsImg,
    githubUrl: undefined,
  },
  {
    title: "Lets Connect",
    description:
      "An app where users can connect with the outside world, find services, and more.",
    tags: ["React", "MongoDB", "Bootstrap", "Framer", "Node", "WebSocket"],
    category: "Full-Stack" as ProjectCategory,
    imageUrl: letsConnect,
    githubUrl: undefined,
  },
  {
    title: "E-Commerce Store",
    description:
      "A shopping web application built using Next.js and Node.js.",
    tags: ["NextJs", "Mongoose", "Tailwind", "Framer Motion", "NodeJs", "NodeMailer"],
    category: "React/Next.js" as ProjectCategory,
    imageUrl: ecommerce,
    githubUrl: undefined,
  },
  {
    title: "Design your Shirt",
    description:
      "The app lets users pick shirt colors and place a logo or full image on the shirt — with AI-assisted image/logo placement.",
    tags: ["React", "Tailwind", "Framer"],
    category: "React/Next.js" as ProjectCategory,
    imageUrl: designShirt,
    githubUrl: undefined,
  },
  {
    title: "metadata-guardian",
    description:
      "AI agent that monitors GitHub for schema changes, detects stale DataHub metadata, and automatically updates it with accurate information.",
    tags: ["DataHub", "GitHub Actions", "Autonomous Agent"],
    category: "AI/Python" as ProjectCategory,
    imageUrl: null,
    githubUrl: "https://github.com/HASSANFARYAD/metadata-guardian",
  },
  {
    title: "fiverr-copilot",
    description:
      "Optimizes Fiverr gigs, classifies buyer messages, drafts replies, and tracks 24-hour response deadlines. Full-stack: Next.js + FastAPI + cross-browser extension.",
    tags: ["Browser Extension", "AI Classification", "NLP"],
    category: "AI/Python" as ProjectCategory,
    imageUrl: null,
    githubUrl: "https://github.com/HASSANFARYAD/fiverr-copilot",
  },
  {
    title: "ChronoGraph",
    description:
      "Temporal knowledge graph for root-cause analysis with causal paths, evidence scoring, and a React replay UI.",
    tags: ["Knowledge Graph", "Reasoning Engine", "Root-Cause Analysis"],
    category: "AI/Python" as ProjectCategory,
    imageUrl: null,
    githubUrl: "https://github.com/HASSANFARYAD/ChronoGraph",
  },
  {
    title: "MindMirror",
    description:
      "An AI-powered self-reflection and emotional intelligence tool.",
    tags: ["Python", "AI", "Emotional Intelligence", "LLM"],
    category: "AI/Python" as ProjectCategory,
    imageUrl: null,
    githubUrl: "https://github.com/HASSANFARYAD/MindMirror",
  },
  {
    title: "Human-in-the-Loop AI Opportunity Assistant",
    description:
      "An AI assistant that identifies opportunities and surfaces them to humans for approval before acting — a human-in-the-loop workflow engine.",
    tags: ["Python", "HITL", "AI Workflow", "Agent", "LLM"],
    category: "AI/Python" as ProjectCategory,
    imageUrl: null,
    githubUrl: "https://github.com/HASSANFARYAD/human-in-the-loop-ai-opportunity-assistant",
  },
] as const;

export const skillsByCategory = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind", "Bootstrap", "Framer Motion", "Redux", "Redux-Toolkit"],
  },
  {
    category: "Backend",
    skills: [".NET", ".NET Core", "Node.js", "Express", "FastAPI", "MediatR", "SignalR", "WebSocket"],
  },
  {
    category: "AI & ML",
    skills: ["Semantic Kernel", "LLM Integration", "Multi-Agent Systems", "Qdrant", "Knowledge Graphs"],
  },
  {
    category: "Databases",
    skills: ["MSSQL", "MongoDB", "CosmosDB", "PostgreSQL", "Mongoose"],
  },
  {
    category: "DevOps & Cloud",
    skills: ["Azure", "Docker", "CI/CD", "GitHub Actions", "GitLab", "Keycloak"],
  },
  {
    category: "Tools",
    skills: ["Git", "Asana", "Azure Boards", "Postman"],
  },
] as const;