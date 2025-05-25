import React from "react";
import { TypographyProps } from "./Utils";

const HeadingTen: React.FC<TypographyProps> = ({ children }) => {
  return (
    <h6 className="font-mainFontFamily font-boldFont text-[8px]  leading-none">
      {children}
    </h6>
  );
};

export default HeadingTen;
