"use client";
import React from "react";
import Container from "./Container";
import Header from "./Header";
import {
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaFigma,
} from "react-icons/fa6";

import {
  SiExpress,
  SiFirebase,
  SiFramer,
  SiGsap,
  SiMongodb,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiPostman,
  SiVercel,
  SiOpenai,
} from "react-icons/si";

import {
  TbBrandAdobePhotoshop,
  TbBrandAdobeXd,
  TbApi,
  TbShieldLock,
} from "react-icons/tb";

import {
  MdOutlineLaptopChromebook,
  MdOutlineDesignServices,
  MdCode,
  MdStorage,
  MdOutlineSmartToy,
  MdOutlineBrush,
} from "react-icons/md";

export const skills = [
  {
    title: "Frontend",
    icon: <MdCode />,
    items: [
      {
        name: "HTML",
        icon: <FaHtml5 />,
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS",
        icon: <FaCss3 />,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "JavaScript",
        icon: <FaJs />,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "React",
        icon: <FaReact />,
        link: "https://react.dev/",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        link: "https://nextjs.org/",
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss />,
        link: "https://tailwindcss.com/",
      },
      {
        name: "GSAP",
        icon: <SiGsap />,
        link: "https://gsap.com/",
      },
      {
        name: "Framer Motion",
        icon: <SiFramer />,
        link: "https://www.framer.com/motion/",
      },
      {
        name: "Redux",
        icon: <SiRedux />,
        link: "https://redux.js.org/",
      },
    ],
  },

  {
    title: "Backend",
    icon: <MdStorage />,
    items: [
      {
        name: "Node.js",
        icon: <FaNodeJs />,
        link: "https://nodejs.org/",
      },
      {
        name: "Express",
        icon: <SiExpress />,
        link: "https://expressjs.com/",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        link: "https://www.mongodb.com/",
      },
      {
        name: "Firebase",
        icon: <SiFirebase />,
        link: "https://firebase.google.com/",
      },
      {
        name: "REST API",
        icon: <TbApi />,
        link: "https://restfulapi.net/",
      },
      {
        name: "Auth",
        icon: <TbShieldLock />,
        link: "https://jwt.io/",
      },
    ],
  },

  {
    title: "Tools",
    icon: <MdOutlineLaptopChromebook />,
    items: [
      {
        name: "Git",
        icon: <FaGitAlt />,
        link: "https://git-scm.com/",
      },
      {
        name: "GitHub",
        icon: <FaGithub />,
        link: "https://github.com/",
      },
      {
        name: "VS Code",
        icon: <MdOutlineLaptopChromebook />,
        link: "https://code.visualstudio.com/",
      },
      {
        name: "Postman",
        icon: <SiPostman />,
        link: "https://www.postman.com/",
      },
      {
        name: "Vercel",
        icon: <SiVercel />,
        link: "https://vercel.com/",
      },
    ],
  },

  {
    title: "AI & Productivity",
    icon: <MdOutlineSmartToy />,
    items: [
      {
        name: "ChatGPT",
        icon: <SiOpenai />,
        link: "https://chat.openai.com/",
      },
      {
        name: "Automation",
        icon: <SiOpenai />,
        link: "https://www.n8n.io/",
      },
    ],
  },

  {
    title: "Design",
    icon: <MdOutlineBrush />,
    items: [
      {
        name: "Figma",
        icon: <FaFigma />,
        link: "https://www.figma.com/",
      },
      {
        name: "Photoshop",
        icon: <TbBrandAdobePhotoshop />,
        link: "https://www.adobe.com/products/photoshop.html",
      },
      {
        name: "Adobe XD",
        icon: <TbBrandAdobeXd />,
        link: "https://www.adobe.com/products/xd.html",
      },
    ],
  },
];

// ✅ total skill count
const totalSkills = skills.reduce((acc, g) => acc + g.items.length, 0);

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24">
      <Container>
        <Header text="Skills & Tools" />

        {/* subtitle + total count */}
        <div className=" text-center mb-12">
          <p className="text-sm text-secondary/70 max-w-xl mx-auto">
            Technologies I use to build modern, scalable and high-performance
            applications.
          </p>
          <p className="mt-2 text-xs text-accent font-semibold tracking-widest uppercase">
            {totalSkills} technologies & tools
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <div
              key={i}
              className="group sm:first:col-span-2 relative p-5 sm:p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white/5 hover:border-accent/50 hover:bg-linear-to-br hover:from-accent/10 hover:via-transparent
                transition-all duration-300 overflow-hidden border-l-4  border-l-accent"
            >
              {/* subtle bg glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
                bg-linear-br from-accent/10 dark:from-accent via-transparent to-transparent"
              />

              {/* CARD HEADER */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl text-accent">{group.icon}</span>
                  <h3 className="text-xl font-bold text-accent">
                    {group.title}
                  </h3>
                </div>
                {/* item count badge */}
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                  {group.items.length}
                </span>
              </div>

              {/* ITEMS */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full
                      bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10
                      hover:border-accent/50 hover:text-accent hover:bg-accent/5
                      transition-all duration-200 cursor-default"
                  >
                    <span className="text-sm text-accent">{item.icon}</span>
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
