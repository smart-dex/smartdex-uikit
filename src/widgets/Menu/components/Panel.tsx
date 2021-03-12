import React from "react";
import styled from "styled-components";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import { MENU_HEIGHT_MOBILE, SIDEBAR_WIDTH_FULL, MENU_HEIGHT } from "../config";
import { PanelProps, PushedProps } from "../types";
import LogoNavLeft from "./LogoNavLeft";

interface Props extends PanelProps, PushedProps {
  showMenu: boolean;
  isMobile: boolean;
  href: string;
}

const StyledPanel = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  position: fixed;
  padding-top: ${({ showMenu }) => (showMenu ? "0" : 0)};
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  background: ${({ theme }) => theme.isDark ? '#030610' : '#f9fcfe'};
  width: ${({ isPushed }) => (isPushed ? `${SIDEBAR_WIDTH_FULL}px` : 0)};
  height: 100vh;
  transition: padding-top 0.2s, width 0.2s;
  border-right: ${({ isPushed }) => (isPushed ? 0 : 0)};
  z-index: 11;
  overflow: ${({ isPushed }) => (isPushed ? "initial" : "hidden")};
  transform: translate3d(0, 0, 0);
  padding-top: ${MENU_HEIGHT_MOBILE}px;

  ${({ theme }) => theme.mediaQueries.nav} {
    width: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_FULL}px`};
    padding-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : '32px')};
  }
`;

const Panel: React.FC<Props> = (props) => {
  const { isPushed, showMenu } = props;
  return (
    <StyledPanel isPushed={isPushed} showMenu={showMenu}>
      <LogoNavLeft {...props} />
      <PanelBody {...props} />
      <PanelFooter {...props} />
    </StyledPanel>
  );
};

export default Panel;
