import React from "react";
import { TypographyProps } from "./Utils";

const ExtraSmallBodyTypography: React.FC<TypographyProps> = ({
  children,
  className,
}) => {
  return (
    <p
      className={`font-mainFontFamily font-regularFont text-[12px] leading-none ${className}`}
    >
      {children}
    </p>
  );
};

export default ExtraSmallBodyTypography;
