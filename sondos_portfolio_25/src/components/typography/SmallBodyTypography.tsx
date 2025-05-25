import React from "react";
import { TypographyProps } from "./Utils";

const SmallBodyTypography: React.FC<TypographyProps> = ({ children }) => {
  return (
    <p className="font-mainFontFamily font-regularFont text-[14px] leading-none">
      {children}
    </p>
  );
};

export default SmallBodyTypography;
