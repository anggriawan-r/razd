import blogin from "@/public/blogin.jpg";

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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "blogin",
    description:
      'A blog web app. Users can post blogs here and share them across the world. This blog is What You See Is What You Get kind of blogs. You can visit the  <a href="https://github.com/anggriawan-r/blogin" className="font-semibold underline" target="_blank">repository</a> or the <a href="https://blogin-razd.vercel.app" className="font-semibold underline" target="_blank">production page</a>.',
    tags: [
      "TypeScript",
      "Tailwind",
      "Next.js",
      "MongoDB",
      "Firebase",
      "Prisma",
    ],
    url: "https://blogin-razd.vercel.app",
    imageUrl: blogin,
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
  "Prisma",
  "MongoDB",
  "Express",
  "Python",
  "Framer Motion",
  "Figma",
] as const;
