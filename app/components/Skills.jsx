import React from "react";
import Container from "./Container";
import Header from "./Header";
import { skills } from "@/temp/temp";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-white/60 dark:bg-primary-dark/60  "
    >
      <Container>
        <Header text="Skills & Tools" />
        <div className=" text-center mb-12">
          <p className="text-sm text-secondary/70 max-w-xl mx-auto">
            Technologies I use to build modern, scalable and high-performance
            applications.
          </p>
          <p className="mt-2 text-xs text-accent font-semibold tracking-widest uppercase">
            20+ technologies
          </p>
        </div>

        <div className="grid gap-3.5 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3 backdrop-blur-sm">
          {skills.map((group, i) => (
            <div
              key={i}
              className="group sm:first:col-span-2 relative p-3 sm:p-4 2xl:p-6 rounded-xl border border-black/10 dark:border-white/10 bg-white/10 hover:border-accent/50 hover:bg-linear-to-br hover:from-accent/10 hover:via-transparent  transition-all duration-300 overflow-hidden border-l-8  hover:-translate-y-1 border-l-accent!"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none  bg-linear-br from-accent/10 dark:from-accent via-transparent to-transparent" />

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl text-accent">{group.icon}</span>
                  <h3 className="text-xl font-bold text-accent">
                    {group.title}
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {group.items.map((item, idx) => (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={idx}
                    className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 text-sm  sm:text-base font-medium rounded  bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10  hover:border-accent/50 hover:text-accent hover:bg-accent/5 hover:-translate-y-1 transition-all duration-200 "
                  >
                    <span className=" text-xl text-accent">{item.icon}</span>
                    {item.name}
                  </a>
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
