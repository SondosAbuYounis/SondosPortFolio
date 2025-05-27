import React from "react";
import { TypographyProps } from "./Utils";

const HeadingSix: React.FC<TypographyProps> = ({ children }) => {
  return (
    <h6 className="font-mainFontFamily font-boldFont text-[20px] uppercase leading-none">
      {children}
    </h6>
  );
};

export default HeadingSix;
