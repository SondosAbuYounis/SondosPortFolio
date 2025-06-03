import React from "react";
import { TypographyProps } from "./Utils";

const Caption: React.FC<TypographyProps> = ({ children, className }) => {
  return (
    <p
      className={`font-mainFontFamily font-regularFont text-[10px] leading-none ${className} `}
    >
      {children}
    </p>
  );
};

export default Caption;
