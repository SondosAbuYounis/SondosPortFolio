import React from "react";
import { TypographyProps } from "./Utils";

const SmallOverLineRegular: React.FC<TypographyProps> = ({
  children,
  className,
}) => {
  return (
    <p
      className={`font-mainFontFamily font-regularFont text-[6px] leading-none ${className}`}
    >
      {children}
    </p>
  );
};

export default SmallOverLineRegular;
