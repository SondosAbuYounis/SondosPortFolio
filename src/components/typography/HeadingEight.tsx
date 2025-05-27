import React from "react";
import { TypographyProps } from "./Utils";

const HeadingEight: React.FC<TypographyProps> = ({ children }) => {
  return (
    <h6 className="font-mainFontFamily font-boldFont text-[14px] uppercase leading-none">
      {children}
    </h6>
  );
};

export default HeadingEight;
