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
  height: 60px;
  justify-content: flex-start;
  margin-bottom: 15px;
  width: 410px;
  max-width: 100%;
  svg {
    width: 34px;
    margin-right: 23px;
  }
  ${({ theme }) => theme.mediaQueries.nav} {
    height: 70px;
    svg {
      width: 40px;
      margin-right: 43px;
    }
  }
`;
const TextStyle = styled(Text)`
  color: ${({ theme }) => theme.isDark? 'rgba(255, 255, 255, 0.87)' : '#5F5E76'};
  font-size: 14px;
  font-weight: 600;
  ${({ theme }) => theme.mediaQueries.nav} {
    font-size: 18px;
  }
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
      <Icon />
      <TextStyle bold color="primary">
        {title}
      </TextStyle>
    </ButtonStyle>
  );
};

export default WalletCard;
