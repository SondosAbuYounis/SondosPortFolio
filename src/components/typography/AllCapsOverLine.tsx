import React from "react";
import { TypographyProps } from "./Utils";

const AllCapsOverLine: React.FC<TypographyProps> = ({
  children,
  className,
}) => {
  return (
    <p
      className={`font-mainFontFamily font-semiBoldFont text-[8px] uppercase leading-none ${className}`}
    >
      {children}
    </p>
  );
};

export default AllCapsOverLine;
