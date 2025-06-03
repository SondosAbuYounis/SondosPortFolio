import React from "react";
import { TypographyProps } from "./Utils";

const HeadingSevenAsTyped: React.FC<TypographyProps> = ({
  children,
  className,
}) => {
  return (
    <h6
      className={`font-mainFontFamily font-boldFont text-[16px]  leading-none ${className}`}
    >
      {children}
    </h6>
  );
};

export default HeadingSevenAsTyped;
