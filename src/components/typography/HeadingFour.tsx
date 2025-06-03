import React from "react";
import { TypographyProps } from "./Utils";

const HeadingFour: React.FC<TypographyProps> = ({ children, className }) => {
  return (
    <h4
      className={`font-mainFontFamily font-boldFont text-[34px] uppercase leading-none ${className}`}
    >
      {children}
    </h4>
  );
};

export default HeadingFour;
