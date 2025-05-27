import React from "react";
import { TypographyProps } from "./Utils";

const SmallAllCapsOverLine: React.FC<TypographyProps> = ({ children }) => {
  return (
    <p className="font-mainFontFamily font-semiBoldFont text-[6px] uppercase leading-none">
      {children}
    </p>
  );
};

export default SmallAllCapsOverLine;
