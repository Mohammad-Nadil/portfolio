import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import BlankSpace from "./components/BlankSpace";
import Skills from "./components/Skills";
import Faq from "./components/Faq";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";

const page = () => {
  return (
    <div className="relative ">
      <Hero />
      <About />
      <Skills />
      <Faq />
      <Projects />
      {/* <Timeline /> */}
      <BlankSpace />
    </div>
  );
};

export default page;
