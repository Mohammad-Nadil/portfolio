import React from "react";
import Container from "./Container";
import imgPlace from "@/public/image/image.jpg";
import Image from "next/image";

const Hero = () => {
  const name = "nadil";
  const profession = [
    "front-end developer",
    "back-end developer",
    "full stack developer",
    "MERN stack developer",
  ];
  const professionMobile = ["frontend ", "backend ", "MERN stack "];
  
  return (
    <section id="hero" className=" py-10 sm:py-20 lg:py-30 relative">
      <div className={` relative py-26 xs:py-30 md:py-20 xl:py-8 2xl:py-10  `}>
        <div className="absolute aspect-4/6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:-translate-y-[60%] z-20 w-[65vw] sm:w-80 lg:w-100 ">
          <Image
            src={imgPlace}
            priority
            placeholder="blur"
            alt="placeholder"
            className=" dark:brightness-75 duration-300  h-full object-cover rounded sm:rounded-xl dark:grayscale-100 transition-opacity "
          />
        </div>
        <h1
          data-heading={name}
          className={`relative uppercase sm:font-bold tracking-widest sm:tracking-wide text-[27vw] 2xl:text-[350px] text-center mx-auto w-fit after:content-[attr(data-heading)] after:absolute after:inset-0 after:z-30 after:text-transparent after:[-webkit-text-stroke:2px_white] xl:after:[-webkit-text-stroke:1px_white] font-black font-oxanium italic xl:font-audiowide   select-none `}
        >
          {name}
        </h1>
      </div>
      <Container className={`p-5 sm:p-0 font-audiowide`}>
        <div className="flex lg:hidden items-center justify-between  ">
          {professionMobile.map((p, i) => (
            <div key={i} className="flex items-center gap-1 sm:gap-2 xl:gap-3">
              <span className="text-xs hidden sm:block tracking-widest text-accent">
                0{i + 1}.
              </span>
              <span className="text-xs sm:hidden tracking-widest text-accent font-bold">
                /
              </span>
              <span className="font-bold text-xs xs:text-sm sm:text-lg uppercase tracking-tight">
                {p}
              </span>
            </div>
          ))}
        </div>
        <div className="hidden lg:flex flex-wrap items-center justify-between  ">
          {profession.map((p, i) => (
            <div key={i} className="flex  items-center gap-2 xl:gap-3">
              <span className="text-xs tracking-widest text-accent">
                0{i + 1}.
              </span>

              <span className="font-bold xl:text-lg uppercase tracking-tight">
                {p}
              </span>
            </div>
          ))}
        </div>
        <div className="flex gap-3 mt-5 xs:mt-10 justify-center font-figtree">
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-full bg-accent text-white text-sm font-semibold hover:shadow-lg hover:shadow-accent/30  hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full border border-black/10 dark:border-white/10
              text-sm font-semibold hover:scale-105 hover:shadow-lg hover:shadow-accent/30
              hover:border-accent hover:text-accent transition"
          >
            Contact Me
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
