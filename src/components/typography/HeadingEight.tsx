import React from "react";
import { TypographyProps } from "./Utils";

const HeadingEight: React.FC<TypographyProps> = ({ children, className }) => {
  return (
    <h6
      className={`font-mainFontFamily font-boldFont text-[14px] uppercase leading-none ${className}`}
    >
      {children}
    </h6>
  );
};

export default HeadingEight;
