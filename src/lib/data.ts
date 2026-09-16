// Edit everything in this file to update your portfolio content.

export const profile = {
  name: "Muneeb Ahmed",
  role: "Full Stack Web Developer",
  location: "Lahore, Pakistan",
  whatsapp: "923254306247", // country code + number, no + or spaces
  email: "your-email@example.com", // replace with your real email
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
  tagline:
    "I build fast, reliable web products end to end — from database and API to the pixels people actually touch.",
  bio: "I'm a full stack developer working across the whole stack: React and Next.js on the front end, Node.js and Express on the back end. I care about clean architecture, performance, and interfaces that feel considered rather than assembled. Based in Lahore, working with clients and teams anywhere.",
};

export const stats = [
  { label: "Based in", value: "Lahore, PK" },
  { label: "Focus", value: "Full Stack" },
  { label: "Stack depth", value: "6 core tools" },
  { label: "Available for", value: "Freelance & Full-time" },
];

export const services = [
  {
    icon: "layout",
    title: "Frontend Development",
    description:
      "Interfaces built with React and Next.js — responsive, accessible, and fast by default, not as an afterthought.",
  },
  {
    icon: "server",
    title: "Backend Development",
    description:
      "APIs and services with Node.js and Express — clean routes, proper error handling, and data that's structured to last.",
  },
  {
    icon: "layers",
    title: "Full Stack Delivery",
    description:
      "One person owning the whole slice — from database schema to the interface someone actually clicks through.",
  },
];

export const highlights = [
  "Writes code meant to be read again in six months, not just shipped once",
  "Comfortable owning a feature end to end — API, data, and UI",
  "Treats performance and accessibility as requirements, not polish",
  "Communicates in plain terms — progress, blockers, and trade-offs, clearly",
];

export const process = [
  {
    step: "01",
    title: "Understand",
    description: "Scope the problem, the users, and what success actually looks like before writing a line of code.",
  },
  {
    step: "02",
    title: "Plan",
    description: "Sketch the architecture and data flow — the boring decisions made early so the fun ones go faster later.",
  },
  {
    step: "03",
    title: "Build",
    description: "Ship in small, working increments. Frontend and backend grow together, not in isolation.",
  },
  {
    step: "04",
    title: "Refine",
    description: "Test, tighten, and polish — performance, edge cases, and the small details that make it feel finished.",
  },
];

export const skillGroups = [
  {
    category: "Languages",
    items: ["JavaScript", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js"],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  featured?: boolean;
};

// Add or edit your projects here. Set link to "" if you don't have one yet.
export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "Replace this with a real, specific description: what the project does, who it's for, and the problem it solves. This is your flagship piece, so give it a couple of sentences.",
    tags: ["Next.js", "React", "Node.js", "Express"],
    link: "https://client-project-beryl.vercel.app/",
    featured: true,
  },
  {
    title: "Project Two",
    description:
      "Replace this with a short, specific description of what the project does and the problem it solves.",
    tags: ["Express", "MongoDB", "React"],
    link: "https://sql-centrix-website.vercel.app/",
  },
  {
    title: "Project Three",
    description:
      "Replace this with a short, specific description of what the project does and the problem it solves.",
    tags: ["Next.js", "Tailwind CSS"],
    link: "https://navttc-rm7e2u1nc-muneebrashiddevelpor1859-sketchs-projects.vercel.app/",
  },
  {
    title: "Project Four",
    description:
      "Replace this with a short, specific description of what the project does and the problem it solves.",
    tags: ["React", "Node.js"],
    link: "https://ar-production.vercel.app/",
  },
   {
    title: "Project Five",
    description:
      "Replace this with a short, specific description of what the project does and the problem it solves.",
    tags: ["React", "Node.js"],
    link: "https://leads-management-system-next.vercel.app/",
  },
    {
    title: "Project SIX",
    description:
      "Replace this with a short, specific description of what the project does and the problem it solves.",
    tags: ["React", "Node.js"],
    link: "https://ezone.com.pk/",
  },
    {
    title: "Project SEVEN",
    description:
      "Replace this with a short, specific description of what the project does and the problem it solves.",
    tags: ["React", "Node.js"],
    link: "https://data-management-system-next.vercel.app/login",
  },
];

