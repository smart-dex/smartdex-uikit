import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Flex from "../../../components/Box/Flex";
import { MENU_HEIGHT } from "./../config";

interface Props {
  href: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  height: ${MENU_HEIGHT}px;
  margin-bottom: 32px;
  width: 100%;
  padding: 0 22px;
  font-weight: 800;
  font-size: 32px;
  line-height: 39px;
  color: ${({ theme }) => theme.isDark ? "#FFFFFF" : "#5F5E76"};
  border-bottom: 1px solid ${({ theme }) => theme.isDark ? "#2F344B" : "#E2E2E8"};
  letter-spacing: -0.04em;
`;

const LogoNavLeft: React.FC<Props> = ({ href }) => {
  const isAbsoluteUrl = href.startsWith("http");

  return (
    <Flex>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Pancake home page">
          Pancake
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Pancake home page">
          Pancake
        </StyledLink>
      )}
    </Flex>
  );
};

export default LogoNavLeft;
