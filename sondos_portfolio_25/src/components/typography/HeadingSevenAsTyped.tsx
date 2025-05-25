import React from "react";
import { TypographyProps } from "./Utils";

const HeadingSevenAsTyped: React.FC<TypographyProps> = ({ children }) => {
  return (
    <h6 className="font-mainFontFamily font-boldFont text-[16px]  leading-none">
      {children}
    </h6>
  );
};

export default HeadingSevenAsTyped;
