import React from "react";
import { TypographyProps } from "./Utils";

const HeadingTwo: React.FC<TypographyProps> = ({ children }) => {
  return (
    <h2 className="font-mainFontFamily font-boldFont text-6xl uppercase leading-none">
      {children}
    </h2>
  );
};

export default HeadingTwo;
