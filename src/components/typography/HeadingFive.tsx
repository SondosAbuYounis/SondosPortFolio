import React from "react";
import { TypographyProps } from "./Utils";

const HeadingFive: React.FC<TypographyProps> = ({ children }) => {
  return (
    <h5 className="font-mainFontFamily font-boldFont text-2xl uppercase leading-none">
      {children}
    </h5>
  );
};

export default HeadingFive;
