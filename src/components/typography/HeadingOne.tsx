import React from "react";
import { TypographyProps } from "./Utils";

const HeadingOne: React.FC<TypographyProps> = ({ children, className }) => {
  return (
    <h1
      className={`font-mainFontFamily font-boldFont text-8xl uppercase leading-none ${className}`}
    >
      {children}
    </h1>
  );
};

export default HeadingOne;
