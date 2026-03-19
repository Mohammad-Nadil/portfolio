import React from "react";

const Container = ({ className, children }) => {
  return (
    <div className={` max-w-331.5 mx-auto px-2 xs:px-3 ${className}`}>{children}</div>
  );
};

export default Container;
