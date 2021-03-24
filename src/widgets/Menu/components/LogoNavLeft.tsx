import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Flex from "../../../components/Box/Flex";

interface Props {
  href: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 22px;
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.isDark ? "#FFFFFF" : "#FFFFFF"};
  letter-spacing: -0.04em;
  height: 61px;
  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;

const LogoNavLeft: React.FC<Props> = ({ href }) => {
  const isAbsoluteUrl = href.startsWith("http");

  return (
    <Flex>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="SmartDEX home page">
          SmartDEX
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="SmartDEX home page">
          SmartDEX
        </StyledLink>
      )}
    </Flex>
  );
};

export default LogoNavLeft;
