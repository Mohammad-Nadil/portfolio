import React from "react";
import dynamic from "next/dynamic";

import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const Skills = dynamic(() => import("./components/Skills"));
const Projects = dynamic(() => import("./components/Projects"));
const Faq = dynamic(() => import("./components/Faq"));
const Contact = dynamic(() => import("./components/Contact"));

// import Timeline from "./components/Timeline";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="relative ">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Faq />
        <Contact />
        {/* <Timeline /> */}
      </div>
      <Footer />
    </>
  );
};

export default page;
