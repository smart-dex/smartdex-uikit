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
  color: ${({ isPushed, theme }) => (isPushed ? (theme.isDark ? 'rgba(255, 255, 255, 0.77)' : '#5F5E76') : "transparent")};
  transition: color 0.4s;
  flex-grow: 1;
`;

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: ${({ secondary }) => (secondary ? "0 10px 0 56px" : "0 10px 0 16px")};
  font-size: ${({ secondary }) => (secondary ? "14px" : "16px")};
  background-color: ${({ secondary }) => (secondary ? "transparent" : "transparent")};
  color: ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.77)' : '#5F5E76'};
  font-weight: 500;

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    &.active {
      svg {
        fill: ${({ theme }) => theme.isDark ? '#0085FF' : '#0085FF'};
      }
  
      div {
        color:${({ theme }) => theme.isDark ? '#0085FF' : '#0085FF'};
      }
    }
  }

  svg {
    fill: ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.77)' : '#5F5E76'};
  }

  div {
    color: ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.77)' : '#5F5E76'};
  }

  &:hover {
    background-color: ${({ theme }) => theme.isDark ? '#1C2438' : '#E9F4FC'};
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    color: ${({ theme }) => theme.isDark ? '#0085FF' : '#0085FF'};
    background-color: ${({ theme }) => theme.isDark ? '#1C2438' : '#E9F4FC'};
    background-size: 400% 100%;
  }
`;
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
  role: "button",
};

const LinkLabelMemo = React.memo(LinkLabel, (prev, next) => prev.isPushed === next.isPushed);

export { MenuEntry, LinkLabelMemo as LinkLabel };
