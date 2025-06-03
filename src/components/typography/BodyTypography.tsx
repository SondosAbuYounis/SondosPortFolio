import React from "react";
import { TypographyProps } from "./Utils";

const BodyTypography: React.FC<TypographyProps> = ({ children, className }) => {
  return (
    <p
      className={`font-mainFontFamily font-regularFont text-[16px]  leading-none ${className}`}
    >
      {children}
    </p>
  );
};

export default BodyTypography;
