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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer",
    location: "Nodlays",
    description:
      "As a Full Stack Developer, I design and implement dynamic web applications, leveraging React, Next.js, Node.js, AI, and .NET technologies for both frontend and backend development.",
    icon: React.createElement(LuGraduationCap),
    date: "Jul 2019 - Apr 2025",
  },
  {
    title: "Junior Web Developer",
    location: "TechLogs",
    description:
      "Worked as a Junior Web Developer, utilizing SQL queries to retrieve, manipulate, and analyze data within React and .NET applications over the span of 1 years.",
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

export const projectsData = [
  {
    title: "Tech Valet",
    description:
      "Tech VALET is platform that links old age clients with highly qualified IT specialists.",
    tags: [
      "React",
      "Bootstrap",
      "Redux-ToolKit",
      ".Net Core",
      "Paypal",
      "Stripe",
      "SignalR",
    ],
    imageUrl: rmtdevImg,
  },
  {
    title: "HRM System",
    description:
      "HR management system, streamlining employee data management and improving HR processes.",
    tags: ["React", "SQL", "Tailwind", "Framer", ".Net", "Signal-R"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Lets Connect",
    description:
      "It was an app to where the user can connect with outside world talk, to find service and so on",
    tags: ["React", "MongoDB", "Bootstrap", "Framer", "Node", "Web Socket"],
    imageUrl: letsConnect,
  },
  {
    title: "E-Commerce Store",
    description: "the shopping web application built using Next.Js and Node.js",
    tags: [
      "NextJs",
      "Mongoose",
      "Tailwind",
      "Framer Motion",
      "NodeJs",
      "NodeMailer",
    ],
    imageUrl: ecommerce,
  },
  {
    title: "Design your Shirt",
    description:
      "The app allows the user to select the randome color for the shirt and the add the logo or can full image on the shirt",
    tags: ["React", "Tailwind", "Framer"],
    imageUrl: designShirt,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJs",
  "Framer Motion",
  "NextJs",
  "Node",
  "Express",
  ".Net",
  "Git",
  "Tailwind/Bootstrap",
  "Redux",
  "Redux-Toolkit",
  "MSSQL",
  "MongoDB",
  "CosmosDB",
  "PostgreSQL",
  "GitLab",
  "Asana",
  "SourceTree",
] as const;
