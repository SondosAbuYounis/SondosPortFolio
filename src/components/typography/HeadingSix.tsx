import React from "react";
import { TypographyProps } from "./Utils";

const HeadingSix: React.FC<TypographyProps> = ({ children, className }) => {
  return (
    <h6
      className={`font-mainFontFamily font-boldFont text-[20px] uppercase leading-none ${className}`}
    >
      {children}
    </h6>
  );
};

export default HeadingSix;
