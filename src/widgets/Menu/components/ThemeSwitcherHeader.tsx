import React from "react";
import Text from "../../../components/Text/Text";
import Flex from "../../../components/Box/Flex";
import Toggle from "../../../components/Toggle/Toggle";
import Button from "../../../components/Button/Button";

interface Props {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
}

const ThemeSwitcherHeader: React.FC<Props> = ({ isDark, toggleTheme }) => (
  <>
    <Button variant="text" onClick={() => toggleTheme(!isDark)}>
      {/* alignItems center is a Safari fix */}
      <Flex alignItems="center">
        <Text color="text" mx="4px" style={{ marginRight: "13px" }}>
          Dark
        </Text>
        <Toggle defaultChecked={isDark} scale="sm" />
        <Text color="text" mx="4px" style={{ marginLeft: "13px" }}>
          Light
        </Text>
      </Flex>
    </Button>
  </>
);

export default React.memo(ThemeSwitcherHeader, (prev, next) => prev.isDark === next.isDark);
