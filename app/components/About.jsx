import React from "react";
import Container from "./Container";
import { FaCode, FaServer, FaLayerGroup } from "react-icons/fa6";
import Header from "./Header";

const About = () => {
  const skills = [
    {
      title: "Frontend Engineering",
      desc: "building fast, scalable and modern web applications with React, Next.js and Node.js",
      icon: <FaCode />,
    },
    {
      title: "Backend Development",
      desc: "Developing secure and efficient APIs using Node.js, Express and MongoDB for full-stack applications.",
      icon: <FaServer />,
    },
    {
      title: "Full Stack Projects",
      desc: "Creating complete MERN stack applications from UI to backend with real-world performance and scalability.",
      icon: <FaLayerGroup />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-primary-dark">
      <Container>
        <Header text="About Me" />
        <main>
          <section className="flex flex-col gap-12">
            <div className="flex flex-col lg:flex-row gap-5 md:gap-12  items-center justify-between">
              <div className="xl:w-7/12 2xl:w-8/12 flex flex-col gap-5 md:gap-8">
                <span className="text-accent uppercase tracking-widest">
                  Introduction
                </span>

                <h1 className="text-5xl sm:text-7xl md:text-8xl xl:text-[120px] 2xl:text-9xl font-semibold leading-none">
                  Hossainur <br /> Rashid Nadil
                  <span className="text-accent">_</span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl font-medium  max-w-2xl leading-snug">
                  I'm a{" "}
                  <span className=" text-accent font-semibold">
                    Full Stack MERN Developer
                  </span>{" "}
                  from Dhaka, building fast, scalable and modern web
                  applications with React, Next.js and Node.js.
                </p>
              </div>

              <div className="w-4/12 xl:w-3/12 relative hidden lg:flex items-center justify-center dark:brightness-75 ">
                <div className="aspect-4/5 rounded-xl overflow-hidden group relative">
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />

                  <img
                    src="/image/image.jpg"
                    alt="Nadil"
                    className="w-full h-full object-cover transition duration-700 scale-105 group-hover:scale-100"
                  />

                  <div className="absolute bottom-5 right-5 z-20">
                    <div className=" backdrop-blur-md bg-black/5 px-4 py-3 rounded-lg border border-white/10 text-white">
                      <p className="text-[10px] uppercase tracking-widest text-primary">
                        Available for
                      </p>
                      <p className="text-sm font-semibold ">
                        Freelance Projects
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-8 -left-8 w-32 h-32 border-l border-b border-primary/30 hidden xl:block" />
              </div>
            </div>

            <div>
              <h2 className=" uppercase tracking-widest text-accent mb-5">
                What I Do
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {skills.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-6 rounded-xl border border-black/10 dark:border-white/10  dark:bg-white/10  hover:bg-white/10 transition group hover:bg-linear-to-br hover:from-accent/20 hover:via-accent/0 hover:border-accent/70 "
                  >
                    {/* ICON */}
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-2xl  text-accent transition">
                        {item.icon}
                      </div>
                      {/* TITLE */}
                      <h3 className="font-semibold text-lg  ">{item.title}</h3>
                    </div>

                    {/* DESC */}
                    <p className="text-sm text-secondary leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </Container>
    </section>
  );
};

export default About;
