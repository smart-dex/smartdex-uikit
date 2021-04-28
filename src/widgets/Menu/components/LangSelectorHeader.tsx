import React from "react";
import styled from "styled-components";
import Text from "../../../components/Text/Text";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Button from "../../../components/Button/Button";
import { LangType } from "../types";
import MenuButton from "./MenuButton";
import { ChevronDownIcon } from "../../../components/Svg";

interface Props {
  currentLang: string;
  langs: LangType[];
  setLang: (lang: LangType) => void;
  isDark: boolean;
}

const StyleButton = styled(Button)`
  border: 1px solid  ${({ theme }) => theme.isDark ? '#2F344B' : '#E2E2E8'};
  border-radius: 50px;
  margin-right: 20px;
  height: 37px;
  padding-left: 16px;
  padding-right: 16px;
  > div {
    font-size: 13px;
    color: ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.87)' : '#6F6C99'};
  }
  ${({ theme }) => theme.mediaQueries.nav} {
    min-width: 150px;
    height: 56px;
    > div {
      font-size: 16px;
    }
  }
`;

const StyleChevronDownIcon = styled(ChevronDownIcon)`
  color: ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.87)' : '#6F6C99'};
`;

const LangSelectorHeader: React.FC<Props> = ({ currentLang, langs, setLang }) => (
  <Dropdown
    position="bottom"
    target={
      <StyleButton variant="text" endIcon={<StyleChevronDownIcon width="24px" />}>
        <Text color="textSubtle">{currentLang?.toUpperCase()}</Text>
      </StyleButton>
    }
  >
    {langs.map((lang) => (
      <MenuButton
        key={lang.code}
        fullWidth
        onClick={() => setLang(lang)}
        // Safari fix
        style={{ minHeight: "32px", height: "auto", minWidth: 118 }}
      >
        {lang.language}
      </MenuButton>
    ))}
  </Dropdown>
);

export default React.memo(LangSelectorHeader, (prev, next) => prev.currentLang === next.currentLang);
