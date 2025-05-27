import React from "react";
import { TypographyProps } from "./Utils";

const HeadingThree: React.FC<TypographyProps> = ({ children }) => {
  return (
    <h3 className="font-mainFontFamily font-boldFont text-5xl uppercase leading-none">
      {children}
    </h3>
  );
};

export default HeadingThree;
