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
import { VscVscode } from "react-icons/vsc";
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { GiDaisy } from "react-icons/gi";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3 /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "GSAP", icon: <SiGsap /> },
      { name: "redux", icon: <SiRedux /> },
      { name: "React Native", icon: <TbBrandReactNative /> },
      { name: "Expo", icon: <SiExpo /> },
      { name: "Framer Motion", icon: <SiFramer /> },
      { name: "daisyUI", icon: <GiDaisy /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "jwt", icon: <SiJsonwebtokens /> },
      { name: "MERN Stack", icon: "🚀" },
      { name: "Authentication", icon: "🔐" },
      { name: "REST API", icon: "🔗" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: <VscVscode /> },
      { name: "vercel", icon: <SiVercel /> },
      { name: "postman", icon: <SiPostman /> },
      { name: "render", icon: <SiRender /> },
      { name: "Chrome DevTools", icon: <MdOutlineLaptopChromebook /> },
      { name: "NPM / Yarn", icon: "📦" },
    ],
  },
  {
    category: "AI Tools", // 🔥 modern touch
    skills: [
      { name: "ChatGPT", icon: <SiOpenai /> },
      { name: "Stitch", icon: <FcGoogle /> },
      { name: "Prompt Engineering", icon: "⚡" },
      { name: "AI Tools Usage", icon: "🤖" },
      { name: "Automation", icon: "⚙️" },
    ],
  },
  {
    category: "Design",
    skills: [
      { name: "Figma", icon: <FaFigma /> },
      { name: "Photoshop", icon: <TbBrandAdobePhotoshop /> },
      { name: "Adobe XD", icon: <TbBrandAdobeXd /> },
      { name: "UI/UX Basics", icon: "🎨" },
    ],
  },
  // {
  //   category: "Learning", // 🔥 smart move (shows growth mindset)
  //   skills: [],
  // },
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
    <section className="w-full max-w-6xl mx-auto py-10 md:py-20">
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
            <div
              key={idx}
              className="glass-card group flex flex-col items-center justify-center p-3 sm:p-5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow hover:border-primary/40 cursor-pointer border border-accent/30 relative"
            >
              <div className=" text-3xl sm:text-4xl text-accent mb-2 group-hover:scale-110 transition-transform">
                {skill.icon || "⚡"}
              </div>
              <span className=" uppercase sm:tracking-widest font-medium sm:font-bold   transition-colors text-center text-sm sm:text-base sm:text-nowrap">
                {skill.name}
              </span>
            </div>
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
