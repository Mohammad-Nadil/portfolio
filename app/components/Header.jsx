import React from "react";

const Header = ({ text, className }) => {
  return (
    <h1
      className={`text-4xl sm:text-6xl font-bold tracking-wide capitalize py-3 sm:py-5 text-center mx-auto relative isolate ${className}`}
    >
      {/* background text */}
      <span className="absolute inset-0 flex items-center justify-center 
      scale-150 font-bold text-accent/10 dark:text-accent/30 
      z-0 pointer-events-none select-none whitespace-nowrap bottom-1/2">
        {text}
      </span>

      {/* main text */}
      <span className="relative z-10">
        {text}
      </span>

      <span className="text-accent relative z-10">_</span>
    </h1>
  );
};

export default Header;
