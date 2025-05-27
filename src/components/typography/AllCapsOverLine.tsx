import React from "react";
import { TypographyProps } from "./Utils";

const AllCapsOverLine: React.FC<TypographyProps> = ({ children }) => {
  return (
    <p className="font-mainFontFamily font-semiBoldFont text-[8px] uppercase leading-none">
      {children}
    </p>
  );
};

export default AllCapsOverLine;
