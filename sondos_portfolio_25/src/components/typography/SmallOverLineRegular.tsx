import React from "react";
import { TypographyProps } from "./Utils";

const SmallOverLineRegular: React.FC<TypographyProps> = ({ children }) => {
  return (
    <p className="font-mainFontFamily font-regularFont text-[6px] leading-none">
      {children}
    </p>
  );
};

export default SmallOverLineRegular;
