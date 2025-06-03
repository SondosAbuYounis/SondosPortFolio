import React from "react";
import { TypographyProps } from "./Utils";

const HeadingFive: React.FC<TypographyProps> = ({ children, className }) => {
  return (
    <h5
      className={`font-mainFontFamily font-boldFont text-2xl uppercase leading-none ${className}`}
    >
      {children}
    </h5>
  );
};

export default HeadingFive;
