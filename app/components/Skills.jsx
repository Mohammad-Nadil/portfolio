"use client";
import React, { useState } from "react";
import Container from "./Container";
import Header from "./Header";
import {
  FaCss3,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa6";
import {
  SiExpo,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiGsap,
  SiJsonwebtokens,
  SiMongodb,
  SiNextdotjs,
  SiOpenai,
  SiPostman,
  SiRedux,
  SiRender,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import {
  TbBrandAdobePhotoshop,
  TbBrandAdobeXd,
  TbBrandReactNative,
} from "react-icons/tb";

import { MdOutlineLaptopChromebook } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { GiDaisy } from "react-icons/gi";

export const skillsData = [
  {
    category: "Frontend",
    skills: [
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
      { name: "React", 
        icon: <FaReact />, 
        link: "https://reactjs.org/" },
      { name: "Next.js", 
        icon: <SiNextdotjs />, 
        link: "https://nextjs.org/" },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        link: "https://tailwindcss.com/",
      },
      { name: "GSAP", 
        icon: <SiGsap />, 
        link: "https://greensock.com/gsap/" },
      { name: "Redux", 
        icon: <SiRedux />, 
        link: "https://redux.js.org/" },
      {
        name: "React Native",
        icon: <TbBrandReactNative />,
        link: "https://reactnative.dev/",
      },
      { name: "Expo", 
        icon: <SiExpo />, 
        link: "https://expo.dev/" },
      {
        name: "Framer Motion",
        icon: <SiFramer />,
        link: "https://www.framer.com/motion/",
      },
      { name: "daisyUI", 
        icon: <GiDaisy />, 
        link: "https://daisyui.com/" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", 
        icon: <FaNodeJs />, 
        link: "https://nodejs.org/" },
      {
        name: "Express.js",
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
      { name: "JWT", 
        icon: <SiJsonwebtokens />, 
        link: "https://jwt.io/" },
      {
        name: "MERN Stack",
        icon: "🚀",
        link: "https://www.mongodb.com/mern-stack",
      },
      {
        name: "Authentication",
        icon: "🔐",
        link: "https://developer.mozilla.org/en-US/docs/Web/Security",
      },
      { name: "REST API", 
        icon: "🔗", 
        link: "https://restfulapi.net/" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", 
        icon: <FaGitAlt />, 
        link: "https://git-scm.com/" },
      { name: "GitHub", 
        icon: <FaGithub />, 
        link: "https://github.com/" },
      {
        name: "VS Code",
        icon: <MdOutlineLaptopChromebook />,
        link: "https://code.visualstudio.com/",
      },
      { name: "Vercel", icon: <SiVercel />, link: "https://vercel.com/" },
      {
        name: "Postman",
        icon: <SiPostman />,
        link: "https://www.postman.com/",
      },
      { name: "Render", icon: <SiRender />, link: "https://render.com/" },
      {
        name: "DevTools",
        icon: <MdOutlineLaptopChromebook />,
        link: "https://developer.chrome.com/docs/devtools/",
      },
      { name: "NPM / Yarn", icon: "📦", link: "https://www.npmjs.com/" },
    ],
  },
  {
    category: "AI Tools",
    skills: [
      { name: "ChatGPT", icon: <SiOpenai />, link: "https://chat.openai.com/" },
      { name: "Stitch", icon: <FcGoogle />, link: "https://stitch.withgoogle.com/" },
    ],
  },
  {
    category: "Design",
    skills: [
      { name: "Figma", icon: <FaFigma />, link: "https://www.figma.com/" },
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
      { name: "UI/UX Basics", icon: "🎨", link: "https://uxdesign.cc/" },
    ],
  },
];

const Skills = () => {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const allSkills = skillsData.flatMap((cat) => cat.skills);

  const filteredSkills =
    filter === "All"
      ? showAll
        ? allSkills
        : allSkills.slice(0, 12)
      : skillsData.find((cat) => cat.category === filter)?.skills || [];

  const handleFilter = (cat) => {
    setFilter(cat);
    setShowAll(false); // 🔥 reset
  };

  return (
    <section id="skills" className="w-full max-w-6xl mx-auto py-10 md:py-20">
      <Container>
        <Header text="Technical Skills" />
        {/* short description */}
        <p className="text-center max-w-3xl mx-auto text-sm xs:text-base text-secondary mb-10 ">
          The technologies I rely on to craft performant, scalable and
          user-focused digital experiences — from frontend interfaces to backend
          systems.
        </p>
        <hr className="border-accent my-10" />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 font-semibold">
          {["All", ...new Set(skillsData.map((cat) => cat.category))].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                  filter === cat
                    ? " text-white border border-accent/50 bg-accent "
                    : "border border-outline-accent/30  hover:text-white hover:border-accent/50 hover:bg-accent/50"
                }`}
              >
                {cat}
              </button>
            ),
          )}
        </div>
        {/* Skills Grid */}
        <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2 sm:gap-4">
          {filteredSkills.map((skill, idx) => (
            <a
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              className="glass-card group flex flex-col items-center justify-center p-3 sm:p-5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow hover:border-primary/40 cursor-pointer border border-accent/30 relative"
            >
              <div className=" text-3xl sm:text-4xl text-accent mb-2 group-hover:scale-110 transition-transform">
                {skill.icon || "⚡"}
              </div>
              <span className=" uppercase  font-medium sm:font-bold   transition-colors text-center text-sm sm:text-base sm:text-nowrap">
                {skill.name}
              </span>
            </a>
          ))}
        </div>
        {filter === "All" && allSkills.length > 12 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 border border-accent rounded-full hover:bg-accent hover:text-white transition"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Skills;
