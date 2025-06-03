import React from "react";
import { TypographyProps } from "./Utils";

const HeadingFourAsTyped: React.FC<TypographyProps> = ({
  children,
  className,
}) => {
  return (
    <h4
      className={`font-mainFontFamily font-boldFont text-[34px]  leading-none ${className}`}
    >
      {children}
    </h4>
  );
};

export default HeadingFourAsTyped;
