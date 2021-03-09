import React from "react";
import Text from "../../../components/Text/Text";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Button from "../../../components/Button/Button";
import { LangType } from "../types";
import MenuButton from "./MenuButton";
import { ChevronDownIcon } from "../../../components/Svg";
import styled from "styled-components";

interface Props {
  currentLang: string;
  langs: LangType[];
  setLang: (lang: LangType) => void;
  isDark: boolean;
}

const StyleButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 50px;
  margin-right: 20px;
  height: 56px;
  min-width: 150px;
`;

const LangSelectorHeader: React.FC<Props> = ({ currentLang, langs, setLang, isDark }) => (
  <Dropdown
    position="bottom"
    target={
      <StyleButton variant="text" endIcon={<ChevronDownIcon color="textSubtle" width="24px" />}>
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
