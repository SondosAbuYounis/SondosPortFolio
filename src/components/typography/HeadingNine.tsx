import React from "react";
import { TypographyProps } from "./Utils";

const HeadingNine: React.FC<TypographyProps> = ({ children, className }) => {
  return (
    <h6
      className={`font-mainFontFamily font-semiBoldFont text-[10px] leading-none ${className}}`}
    >
      {children}
    </h6>
  );
};

export default HeadingNine;
