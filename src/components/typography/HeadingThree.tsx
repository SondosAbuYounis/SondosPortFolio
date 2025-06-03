import React from "react";
import { TypographyProps } from "./Utils";

const HeadingThree: React.FC<TypographyProps> = ({ children, className }) => {
  return (
    <h3
      className={`font-mainFontFamily font-boldFont text-5xl uppercase leading-none ${className}`}
    >
      {children}
    </h3>
  );
};

export default HeadingThree;
