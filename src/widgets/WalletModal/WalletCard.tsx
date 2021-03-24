import React from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import { connectorLocalStorageKey } from "./config";
import { Login, Config } from "./types";

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
  mb: string;
}

const ButtonStyle = styled(Button)`
  background: ${({ theme }) => theme.isDark ? '#151C31' : '#E9F4FC'};
  height: 70px;
  justify-content: flex-start;
  margin-bottom: 15px;
  width: 410px;
  max-width: 100%;
`;
const TextStyle = styled(Text)`
  color: ${({ theme }) => theme.isDark? 'rgba(255, 255, 255, 0.87)' : '#5F5E76'};
`;

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss, mb }) => {
  const { title, icon: Icon } = walletConfig;
  return (
    <ButtonStyle
      variant="tertiary"
      onClick={() => {
        login(walletConfig.connectorId);
        window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
        onDismiss();
      }}
      mb={mb}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
    >
      <Icon width="32px" style={{marginRight: 46}} />
      <TextStyle bold color="primary" mr="16px">
        {title}
      </TextStyle>
    </ButtonStyle>
  );
};

export default WalletCard;
