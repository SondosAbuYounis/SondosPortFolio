import React from "react";
import { TrackingCalc, TypographyProps } from "./Utils";

const SubHeadingOne: React.FC<TypographyProps> = ({ children, className }) => {
  return (
    <h6
      className={`font-mainFontFamily font-boldFont text-[10px]  tracking-wide uppercase leading-none ${className}`}
      style={{ letterSpacing: TrackingCalc(10, 50) }}
    >
      {children}
    </h6>
  );
};

export default SubHeadingOne;
