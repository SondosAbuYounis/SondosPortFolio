import React from "react";
import { TypographyProps } from "./Utils";

const HeadingFour: React.FC<TypographyProps> = ({ children }) => {
  return (
    <h4 className="font-mainFontFamily font-boldFont text-[34px] uppercase leading-none">
      {children}
    </h4>
  );
};

export default HeadingFour;
