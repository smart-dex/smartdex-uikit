import React from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import LinkExternal from "../../components/Link/LinkExternal";
import Flex from "../../components/Box/Flex";
import { Modal } from "../Modal";
import CopyToClipboard from "./CopyToClipboard";
import { connectorLocalStorageKey } from "./config";

interface Props {
  account: string;
  logout: () => void;
  onDismiss?: () => void;
}

const BoxText = styled.div`
  background: ${({ theme }) => theme.isDark ? '#151C31' : '#E9F4FC'};
  width: 468px;
  max-width: 100%;
  height: 70px;
  border-radius: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 20px;
  margin-bottom: 20px;
  > div {
    margin-bottom: 0px !important;
    color: ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.87)' : '#5F5E76'} !important;
    font-weight: 600;
    font-size: 14px !important;
    line-height: 17px;
  }
`;

const StyledButtonLogout = styled(Button)`
  background: #FF6970;
  box-shadow: 0px 4px 10px rgba(222, 222, 222, 0.24);
  border-radius: 10px;
  height: 56px;
  min-widht: 143px;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  border: none;
  color: #FFFFFF;
`;

const AccountModal: React.FC<Props> = ({ account, logout, onDismiss = () => null }) => (
  <Modal title="Your wallet" onDismiss={onDismiss}>
    <BoxText>
      <Text
        fontSize="20px"
        bold
        style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" }}
      >
        {account}
      </Text>
    </BoxText>
    <Flex mb="23px" justifyContent="center">
      <CopyToClipboard toCopy={account}></CopyToClipboard>
      <LinkExternal small href={`https://testnet.bscscan.com/address/${account}`} mr="16px"></LinkExternal>
    </Flex>
    <Flex justifyContent="center">
      <StyledButtonLogout
        scale="sm"
        variant="secondary"
        onClick={() => {
          logout();
          window.localStorage.removeItem(connectorLocalStorageKey);
          onDismiss();
        }}
      >
        Logout
      </StyledButtonLogout>
    </Flex>
  </Modal>
);

export default AccountModal;
