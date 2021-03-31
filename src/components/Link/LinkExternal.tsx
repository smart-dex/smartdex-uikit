import React from "react";
import styled from "styled-components";
import Link from "./Link";
import { LinkProps } from "./types";
import OpenNewIcon from "../Svg/Icons/OpenNew";


const BoxLink = styled(Link)`
  background: ${({ theme }) => theme.isDark ? '#151C31' : '#E9F4FC'};
  width: 37px;
  height: 37px;
  border-radius: 50%;
  line-height: 37px;
  display: flex;
  justify-content: center;
  margin-left: 6px;
  margin-right: 0px;
`;

const LinkExternal: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <BoxLink external {...props}>
      {children}
      <OpenNewIcon width="20px" color="#0085FF" />
    </BoxLink>
  );
};

export default LinkExternal;
