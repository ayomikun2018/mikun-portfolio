import {
  Project,
  Experience,
  Stat,
  SoftSkill,
  Education,
  NavLink,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const stats: Stat[] = [
  { value: "4+", label: "Years Experience" },
  { value: "10+", label: "Projects Shipped" },
  { value: "6", label: "Industries" },
  { value: "100%", label: "Remote Ready" },
];

export const projects: Project[] = [
  {
    title: "Docsure AI",
    year: "2026",
    description:
      "Reimagined how clinics handle appointments — an AI platform that automates patient calls, schedules doctors in real time, and gives staff full visibility into every interaction.",
    longDescription:
      "Led the frontend for an AI-powered healthcare platform that eliminates manual appointment scheduling. Designed intuitive workflows for real-time doctor availability, automated call confirmations, and structured post-call feedback. Role-based dashboards for admins and medical staff, plus audit trails for complete traceability.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
      "Shadcn UI",
      "GraphQL",
    ],
    image: "/projects/docsure.png",
    link: "https://www.docsure.ai/",
    featured: true,
  },
  {
    title: "Advance Store Portal",
    year: "2025",
    description:
      "A web portal that keeps store owners in sync with their mobile app — products, orders, deliveries, and shipping labels from one dashboard.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    image: "/projects/advance-store.svg",
    link: "#",
  },
  {
    title: "Super Admin Portal",
    year: "2025",
    description:
      "The command centre for platform-wide operations — role-based access, activity monitoring, and exportable reports that power business decisions.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    image: "/projects/super-admin.svg",
    link: "#",
  },
  {
    title: "Eso-E MFB",
    year: "2024",
    description:
      "Core banking platform handling end-to-end loan processing — from client onboarding and applications to approval workflows and office management.",
    techStack: [
      "React.js",
      "Redux Toolkit",
      "RTK Query",
      "Formik",
      "MUI",
      "Tailwind CSS",
    ],
    image: "/projects/eso-e.svg",
    link: "#",
  },
];

export const experiences: Experience[] = [
  {
    company: "CrowdCargo",
    role: "Front-End Developer",
    dateRange: "July 2024 — Present",
    responsibilities: [
      "Leading the development of web application interfaces and frontend pipeline.",
      "Optimizing frontend code for improved performance and scalability.",
      "Collaborating on robust testing strategies with QA and design teams.",
    ],
  },
  {
    company: "SimplifyTechnologies",
    role: "Front-End Developer",
    dateRange: "June 2023 — June 2024",
    responsibilities: [
      "Built reusable component libraries and refined technical specifications from UX designs.",
      "Designed high-volume, low-latency applications for mission-critical systems.",
      "Collaborated with backend developers and designers to improve usability.",
    ],
  },
  {
    company: "Stutern Graduate Accelerator",
    role: "Front-End Developer",
    dateRange: "February 2023 — May 2023",
    responsibilities: [
      "Worked with UI/UX and backend teams to implement and improve features.",
      "Contributed to projects within Scrum project management.",
      "Optimized code for reusability, maximum speed, and scalability.",
    ],
  },
];

export const technicalSkills: string[] = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "HTML/CSS",
  "Tailwind CSS",
  "Redux Toolkit",
  "RTK Query",
  "Shadcn UI",
  "Formik",
  "Firebase",
  "Git",
  "Bootstrap",
  "MUI",
];

export const softSkills: SoftSkill[] = [
  { name: "Creativity" },
  { name: "Communication" },
  { name: "Adaptability" },
  { name: "Team Player" },
  { name: "Critical Thinking" },
  { name: "Problem Solving" },
  { name: "Time Management" },
];

export const education: Education[] = [
  {
    institution: "Bowen University",
    degree: "B.Sc Food Science & Technology",
    year: "2014 — 2019",
  },
  {
    institution: "Stutern Graduate Accelerator",
    degree: "Front-End Development",
    year: "2022 — 2023",
  },
  {
    institution: "Udemy",
    degree: "React — Complete Guide (Hooks, Router, Redux)",
    year: "2022",
  },
];

export const aboutText =
  "I'm a Front-End Engineer who made a bold pivot from Food Science into tech — and never looked back. With over four years of experience building responsive, scalable web applications, I specialise in turning complex problems into clean, intuitive products. I thrive in collaborative, remote-first environments and I'm passionate about craft, performance, and thoughtful design.";
