import React from "react";
import styled from "styled-components";
import { Trans } from "react-i18next";
import Text from "../../../components/Text/Text";
import Flex from "../../../components/Box/Flex";
import Toggle from "../../../components/Toggle/Toggle";
import Button from "../../../components/Button/Button";
import i18n from "../../../i18n";

interface Props {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
  currentLang?: string;
}

const StyleText = styled(Text)`
  color: ${({ theme }) => (theme.isDark ? "#FFFFFF" : "#FFFFFF")};
  font-size: 13px;
  letter-spacing: -0.03em;
  ${({ theme }) => theme.mediaQueries.nav} {
    font-size: 16px;
    color: ${({ theme }) => (theme.isDark ? "rgba(255, 255, 255, 0.87)" : "#6F6C99")};
  }
`;

const ThemeSwitcherHeader: React.FC<Props> = ({ isDark, toggleTheme, currentLang }) => {
  if (currentLang === "zh-CN") {
    i18n.changeLanguage("zh_CN");
  } else if (currentLang === "zh-TW") {
    i18n.changeLanguage("zh_TW");
  } else i18n.changeLanguage(currentLang);

  return (
    <Button variant="text">
      {/* alignItems center is a Safari fix */}
      <Flex alignItems="center">
        <StyleText color="text" mx="4px" style={{ marginRight: "13px" }}>
          <Trans>Dark</Trans>
        </StyleText>
        <Toggle defaultChecked={!isDark} onChange={() => toggleTheme(!isDark)} scale="sm" />
        <StyleText color="text" mx="4px" style={{ marginLeft: "13px" }}>
          <Trans>Light</Trans>
        </StyleText>
      </Flex>
    </Button>
  );
};

export default React.memo(ThemeSwitcherHeader, (prev, next) => prev.isDark === next.isDark);
