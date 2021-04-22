import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Flex from "../../../components/Box/Flex";
import { HamburgerIcon, HamburgerCloseIcon, LogoText } from "../icons";
import MenuButton from "./MenuButton";
import { SIDEBAR_WIDTH_FULL } from "./../config";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 156px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
  .desktop-icon-text {
    color: ${({ theme }) => theme.isDark ? "#FFFFFF" : "#5F5E76"};
    display: none;
    padding: 0 22px;
    font-weight: 800;
    font-size: 32px;
    letter-spacing: -0.04em;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: flex;
    }
  }
`;


const StyleFlex = styled(Flex)`
  margin-right: auto;
  height: 100%;
  align-items: center;
  ${({ theme }) => theme.mediaQueries.nav} {
    width: ${SIDEBAR_WIDTH_FULL}px;
    margin-left: -8px;
  }
  .btn-toggle-menu {
    display: block;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
`;


const Logo: React.FC<Props> = ({ isPushed, togglePush, href, isDark }) => {

  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <span className="desktop-icon-text">
        <LogoText width="166" color={isDark ? '#FFFFFF' : '#605E77'} />
      </span>
    </>
  );

  return (
    <StyleFlex>
      <MenuButton className="btn-toggle-menu" aria-label="Toggle menu" onClick={togglePush} mr="24px">
        {isPushed ? (
          <HamburgerCloseIcon width="24px" color="#5F5E76" />
        ) : (
          <HamburgerIcon width="24px" color="#0085FF" />
        )}
      </MenuButton>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      )}
    </StyleFlex>
  );
};

export default React.memo(Logo, (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark);
