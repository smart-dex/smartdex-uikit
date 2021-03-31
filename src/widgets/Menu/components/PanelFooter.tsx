import React from "react";
import styled from "styled-components";
import { CogIcon } from "../../../components/Svg";
import IconButton from "../../../components/Button/IconButton";
import { MENU_ENTRY_HEIGHT } from "../config";
import { PanelProps, PushedProps } from "../types";
import CakePrice from "./CakePrice";
import SocialLinks from "./SocialLinks";
import ThemeSwitcherHeader from "../components/ThemeSwitcherHeader";

interface Props extends PanelProps, PushedProps {}

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
  width: calc(100% - 30px);
  margin: auto;
`

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  border-top: solid 1px;
  border-color: rgba(255, 255, 255, 0.2);
  padding: 0 5px;
`

const StyleThemeSwitcherHeader = styled.div`
  display: block;
  > button {
    padding-left: 0px;
  }
  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`

const PanelFooter: React.FC<Props> = ({ isPushed, pushNav, cakePriceUsd, isDark, toggleTheme }) => {
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon color="#FFFFFF" />
        </IconButton>
      </Container>
    );
  }

  return (
    <Container>
      <StyleThemeSwitcherHeader>
        <ThemeSwitcherHeader isDark={isDark} toggleTheme={toggleTheme} />
      </StyleThemeSwitcherHeader>
      <SocialEntry>
        <CakePrice cakePriceUsd={cakePriceUsd} />
        <SocialLinks />
      </SocialEntry>
    </Container>
  );
};

export default PanelFooter;
