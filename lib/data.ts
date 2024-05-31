import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/zuptu.png";
import rmtdevImg from "@/public/it-valet.png";
import wordanalyticsImg from "@/public/react-hrm.png";

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
    title: "Full Stack Developer",
    location: "Lahore, PK",
    description:
      "As a Full Stack Developer, I design and implement dynamic web applications, leveraging React and .NET technologies for both frontend and backend development.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - present",
  },
  {
    title: "Junior Web Developer",
    location: "Lahore, PK",
    description:
      "Worked as a Junior Web Developer, utilizing SQL queries to retrieve, manipulate, and analyze data within React and .NET applications over the span of 1 years.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2018",
  },
  {
    title: "Developer (Intern)",
    location: "Lahore, PK",
    description:
      "Completed an internship where I created user interfaces using modern web technologies such as JavaScript frameworks, HTML5, and CSS3.",
    icon: React.createElement(FaReact),
    date: "2017",
  },
] as const;

export const projectsData = [
  {
    title: "Zuptu",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. "+
      "Zuptu is a powerful and simple-to-use project management tool designed to improve project coordination.",
    tags: ["MsSQL", "Bootstrap", ".Net Core"],
    imageUrl: corpcommentImg,
  },
  {
    title: "IT Valet",
    description:
      "Main goal in creating IT VALET was to revolutionize the industry for IT freelancing by creating a comprehensive platform that links clients with highly qualified IT specialists.",
    tags: ["React", "Tailwind", "Redux", ".Net Core", "Paypal", "Stripe"],
    imageUrl: rmtdevImg,
  },
  {
    title: "HR Management System",
    description:
      "Developed a comprehensive HR management system within 1 year, streamlining employee data management and improving HR processes.",
    tags: ["React", "SQL", "Tailwind", "Framer", ".Net", "Signal-R"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  ".Net",
  "Git",
  "Tailwind",
  "MSSQL",
  "MongoDB",
  "Redux",
  "CosmosDB",
  "Express",
  "PostgreSQL",
  "Redux-Toolkit",
  "GitLab",
  "Framer Motion",
  "Asana",
  "SourceTree",
] as const;
