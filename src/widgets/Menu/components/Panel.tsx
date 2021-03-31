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
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  background: ${({ theme }) => theme.isDark ? '#030610' : '#0085FF'};
  width: ${({ isPushed }) => (isPushed ? `253px` : 0)};
  height: calc(100vh - ${MENU_HEIGHT_MOBILE}px);
  transition: padding-top 0.2s, width 0.2s;
  border-right: ${({ isPushed }) => (isPushed ? 0 : 0)};
  z-index: 11;
  overflow: ${({ isPushed }) => (isPushed ? "initial" : "hidden")};
  transform: translate3d(0, 0, 0);
  margin-top: ${MENU_HEIGHT_MOBILE}px;

  ${({ theme }) => theme.mediaQueries.nav} {
    width: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_FULL}px`};
    margin-top: ${MENU_HEIGHT}px;
    border-radius: 0px 30px 30px 0px;
    height: calc(100vh - ${MENU_HEIGHT}px);
    padding-top: 33px;
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
