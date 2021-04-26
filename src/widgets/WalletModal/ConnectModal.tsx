import React from "react";
import styled from "styled-components";
import { useTranslation, Trans } from "react-i18next";
import { Link } from "../../components/Link";
import { HelpIcon } from "../../components/Svg";
import { Modal } from "../Modal";
import WalletCard from "./WalletCard";
import config from "./config";
import { Login } from "./types";
import i18n from "../../i18n";

interface Props {
  login: Login;
  onDismiss?: () => void;
  currentLang?: string;
}

const HelpLink = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 10px;
  color: #0085ff;
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
`;

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null, currentLang }) => {
  if (currentLang === "zh-CN") {
    i18n.changeLanguage("zh_CN");
  } else if (currentLang === "zh-TW") {
    i18n.changeLanguage("zh_TW");
  } else i18n.changeLanguage(currentLang);

  const { t } = useTranslation();

  return (
    <Modal title={t("Connect to a wallet")} onDismiss={onDismiss}>
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
          <Trans>
            Learn how to connect
          </Trans>
          <HelpIcon color="#0085FF" ml="12px" />
        </HelpLink>
      </StyleContent>
    </Modal>
  );
};

export default ConnectModal;
