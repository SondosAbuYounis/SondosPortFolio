import React from "react";
import { TypographyProps } from "./Types";

const HeadingTwo: React.FC<TypographyProps> = ({ children }) => {
  return (
    <h1 className="font-mainFontFamily font-boldFont text-6xl uppercase leading-none">
      {children}
    </h1>
  );
};

export default HeadingTwo;
