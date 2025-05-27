import React from "react";
import { TypographyProps } from "./Utils";

const HeadingEightAsTyped: React.FC<TypographyProps> = ({ children }) => {
  return (
    <h6 className="font-mainFontFamily font-boldFont text-[14px]  leading-none">
      {children}
    </h6>
  );
};

export default HeadingEightAsTyped;
