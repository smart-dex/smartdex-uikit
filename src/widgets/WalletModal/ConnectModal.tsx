import React from "react";
import styled from "styled-components";
import { Link } from "../../components/Link";
import { HelpIcon } from "../../components/Svg";
import { Modal } from "../Modal";
import WalletCard from "./WalletCard";
import config from "./config";
import { Login } from "./types";

interface Props {
  login: Login;
  onDismiss?: () => void;
}

const HelpLink = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 10px;
  color: #0085FF;
  font-size: 14px;
  font-weight: bold;
  margin: auto;
  svg {
    width: 15px;
  }
  ${({ theme }) => theme.mediaQueries.nav} {
    margin-top: 20px;
    font-size: 18px;
    svg {
      width: 18px;
    }
  }
`;

const StyleContent = styled.div`
  display: block;
  width: 410px;
  max-width: 100%;
  max-height: calc(100vh - 130px);
  overflow-y: auto;
`
const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null }) => (
  <Modal title="Connect to a wallet" onDismiss={onDismiss}>
    <StyleContent>
      {config.map((entry, index) => (
        <WalletCard
          key={entry.title}
          login={login}
          walletConfig={entry}
          onDismiss={onDismiss}
          mb={index < config.length - 1 ? "8px" : "0"}
        />
      ))}
      <HelpLink
        href="https://smart-dex29.gitbook.io/smartdex-v2/general-faq#how-do-i-connect-my-wallet-to-smartdex"
        external
      >
        Learn how to connect
        <HelpIcon color="#0085FF" ml="12px" />
      </HelpLink>
    </StyleContent>
  </Modal>
);

export default ConnectModal;
