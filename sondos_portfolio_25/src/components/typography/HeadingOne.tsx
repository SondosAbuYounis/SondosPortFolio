import React from "react";
import { TypographyProps } from "./Types";

const HeadingOne: React.FC<TypographyProps> = ({ children }) => {
  return (
    <h1 className="font-mainFontFamily font-boldFont text-8xl uppercase leading-none">
      {children}
    </h1>
  );
};

export default HeadingOne;
