import React from "react";
import { TypographyProps } from "./Utils";

const ExtraSmallBodyTypography: React.FC<TypographyProps> = ({ children }) => {
  return (
    <p className="font-mainFontFamily font-regularFont text-[12px] leading-none">
      {children}
    </p>
  );
};

export default ExtraSmallBodyTypography;
