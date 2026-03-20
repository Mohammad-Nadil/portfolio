import React from "react";

const Header = ({ text, className }) => {
  return (
    <h1
      className={`text-4xl sm:text-6xl font-bold tracking-wide capitalize py-5 md:py-10 text-center mx-auto relative  ${className}`}
    >
      {text} <span className="absolute bottom-1/2 left-1/2 -translate-x-1/2  scale-150  font-bold text-accent/10 text-nowrap  " >{text}</span> <span className="text-accent">_</span>
    </h1>
  );
};

export default Header;
