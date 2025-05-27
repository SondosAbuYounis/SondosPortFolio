import React from "react";
import { TypographyProps } from "./Utils";

const HeadingFiveAsTyped: React.FC<TypographyProps> = ({ children }) => {
  return (
    <h4 className="font-mainFontFamily font-boldFont text-2xl  leading-none">
      {children}
    </h4>
  );
};

export default HeadingFiveAsTyped;
