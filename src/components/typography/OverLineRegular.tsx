import React from "react";
import { TypographyProps } from "./Utils";

const OverLineRegular: React.FC<TypographyProps> = ({ children }) => {
  return (
    <p className="font-mainFontFamily font-regularFont text-[10px] leading-none">
      {children}
    </p>
  );
};

export default OverLineRegular;
