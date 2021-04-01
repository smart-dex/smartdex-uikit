import React from "react";
import styled, { keyframes, DefaultTheme } from "styled-components";
import { MENU_ENTRY_HEIGHT } from "../config";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const LinkLabel = styled.div<{ isPushed: boolean }>`
  color: ${({ isPushed, theme }) => (isPushed ? (theme.isDark ? 'rgba(255, 255, 255, 0.77)' : 'rgba(255, 255, 255, 0.6)') : "transparent")};
  transition: color 0.4s;
  flex-grow: 1;
`;

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: ${({ secondary }) => (secondary ? "0 10px 0 56px" : "0 10px 0 16px")};
  font-size: 14px;
  background-color: ${({ secondary }) => (secondary ? "transparent" : "transparent")};
  color: ${({ isActive, theme }) => (isActive ? '#FFFFFF' : (theme.isDark ? 'rgba(255, 255, 255, 0.77)' : 'rgba(255, 255, 255, 0.6)'))};
  font-weight: bold;

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => (theme.isDark ? 'rgba(255, 255, 255, 0.77)' : 'rgba(255, 255, 255, 0.6)')};

    &.active.is_active {
      color: ${({ theme }) => theme.isDark ? '#0085FF' : '#FFFFFF'};
      svg {
        fill: ${({ theme }) => theme.isDark ? '#0085FF' : '#FFFFFF'};
      }

      div {
        color: ${({ theme }) => theme.isDark ? '#0085FF' : '#FFFFFF'};
      }
    }
  }

  svg {
    fill: ${({ isActive, theme }) => (isActive ? 'rgba(255, 255, 255, 0.6)' : (theme.isDark ? 'rgba(255, 255, 255, 0.77)' : 'rgba(255, 255, 255, 0.6)'))};
  }

  div {
    color: ${({ isActive, theme }) => (isActive ? 'rgba(255, 255, 255, 0.6)' : (theme.isDark ? 'rgba(255, 255, 255, 0.77)' : 'rgba(255, 255, 255, 0.6)'))};
  }

  &:hover {
    background-color: ${({ theme }) => theme.isDark ? '#1C2438' : 'rgba(255, 255, 255, 0.3)'};
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    color: ${({ theme }) => theme.isDark ? '#0085FF' : '#0085FF'};
    background-color: ${({ theme }) => theme.isDark ? '#1C2438' : 'rgba(255, 255, 255, 0.3)'};
    background-size: 400% 100%;
  },
`;
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
  role: "button",
};

const LinkLabelMemo = React.memo(LinkLabel, (prev, next) => prev.isPushed === next.isPushed);

export { MenuEntry, LinkLabelMemo as LinkLabel };
