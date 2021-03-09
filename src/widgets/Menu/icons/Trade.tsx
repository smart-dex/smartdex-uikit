import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        clipRule="evenodd"
        d="M11 21.5C5.20085 21.5 0.5 16.7991 0.5 11C0.5 5.20085 5.20085 0.5 11 0.5C16.7991 0.5 21.5 5.20085 21.5 11C21.5 16.7991 16.7991 21.5 11 21.5ZM11 7.85H6.8V9.95H16.25L11 4.7V7.85ZM5.75 12.05L11 17.3V14.15H15.2V12.05H5.75Z"
      />
    </Svg>
  );
};

export default Icon;
