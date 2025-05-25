import React from "react";
import { TypographyProps } from "./Utils";

const HeadingSixAsTyped: React.FC<TypographyProps> = ({ children }) => {
  return (
    <h6 className="font-mainFontFamily font-boldFont text-[20px]  leading-none">
      {children}
    </h6>
  );
};

export default HeadingSixAsTyped;
