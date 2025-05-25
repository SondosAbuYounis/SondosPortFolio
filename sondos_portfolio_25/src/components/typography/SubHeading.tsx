import React from "react";
import { TrackingCalc, TypographyProps } from "./Utils";

const SubHeading: React.FC<TypographyProps> = ({ children }) => {
  return (
    <h6
      className={`font-mainFontFamily font-semiBoldFont text-[8px]  tracking-wide uppercase leading-none`}
      style={{ letterSpacing: TrackingCalc(8, 50) }}
    >
      {children}
    </h6>
  );
};

export default SubHeading;
