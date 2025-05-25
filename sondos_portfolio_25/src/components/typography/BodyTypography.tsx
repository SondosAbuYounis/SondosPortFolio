import React from "react";
import { TypographyProps } from "./Utils";

const BodyTypography: React.FC<TypographyProps> = ({ children }) => {
  return (
    <p className="font-mainFontFamily font-regularFont text-[16px]  leading-none">
      {children}
    </p>
  );
};

export default BodyTypography;
