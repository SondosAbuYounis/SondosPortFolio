import React from "react";
import { TypographyProps } from "./Utils";

const HeadingNine: React.FC<TypographyProps> = ({ children }) => {
  return (
    <h6 className="font-mainFontFamily font-semiBoldFont text-[10px] leading-none">
      {children}
    </h6>
  );
};

export default HeadingNine;
