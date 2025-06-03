import React from "react";
import { TypographyProps } from "./Utils";

const HeadingFiveAsTyped: React.FC<TypographyProps> = ({
  children,
  className,
}) => {
  return (
    <h4
      className={`font-mainFontFamily font-boldFont text-2xl  leading-none ${className}`}
    >
      {children}
    </h4>
  );
};

export default HeadingFiveAsTyped;
