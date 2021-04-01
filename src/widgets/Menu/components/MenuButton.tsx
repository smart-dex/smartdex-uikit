import styled from "styled-components";
import Button from "../../../components/Button/Button";

const MenuButton = styled(Button)`
  color: rgba(255,255,255,0.87);
  padding: 0 8px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 12px;
  line-height: 25px;
`;
MenuButton.defaultProps = {
  variant: "text",
  size: "sm",
};

export default MenuButton;
