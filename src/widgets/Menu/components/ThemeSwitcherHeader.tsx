import React from "react";
import styled from "styled-components";
import Text from "../../../components/Text/Text";
import Flex from "../../../components/Box/Flex";
import Toggle from "../../../components/Toggle/Toggle";
import Button from "../../../components/Button/Button";

interface Props {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
}

const StyleText = styled(Text)`
  color: ${({ theme }) => theme.isDark ? '#FFFFFF' : '#FFFFFF'};
  font-size: 13px;
  letter-spacing: -0.03em;
  ${({ theme }) => theme.mediaQueries.nav} {
    font-size: 16px;
    color: ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.87)' : '#6F6C99'};
  }
`

const ThemeSwitcherHeader: React.FC<Props> = ({ isDark, toggleTheme }) => (
  <>
    <Button variant="text">
      {/* alignItems center is a Safari fix */}
      <Flex alignItems="center">
        <StyleText color="text" mx="4px" style={{ marginRight: "13px" }}>
          Dark
        </StyleText>
        <Toggle defaultChecked={!isDark} onChange={() => toggleTheme(!isDark)} scale="sm" />
        <StyleText color="text" mx="4px" style={{ marginLeft: "13px" }}>
          Light
        </StyleText>
      </Flex>
    </Button>
  </>
);

export default React.memo(ThemeSwitcherHeader, (prev, next) => prev.isDark === next.isDark);
