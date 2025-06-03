import React from "react";
import { TypographyProps } from "./Utils";

const SmallBodyTypography: React.FC<TypographyProps> = ({
  children,
  className,
}) => {
  return (
    <p
      className={`font-mainFontFamily font-regularFont text-[14px] leading-none ${className}`}
    >
      {children}
    </p>
  );
};

export default SmallBodyTypography;
