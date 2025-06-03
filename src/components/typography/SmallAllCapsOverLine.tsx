import React from "react";
import { TypographyProps } from "./Utils";

const SmallAllCapsOverLine: React.FC<TypographyProps> = ({
  children,
  className,
}) => {
  return (
    <p
      className={`font-mainFontFamily font-semiBoldFont text-[6px] uppercase leading-none ${className}`}
    >
      {children}
    </p>
  );
};

export default SmallAllCapsOverLine;
