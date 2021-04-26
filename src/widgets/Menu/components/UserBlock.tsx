import React from "react";
import { Trans } from "react-i18next";
import styled from "styled-components";
import Button from "../../../components/Button/Button";
import { useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";
import i18n from "../../../i18n";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  currentLang?: string;
}
const StyleButton = styled(Button)`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  height: 37px;
  font-size: 13px;
  ${({ theme }) => theme.mediaQueries.nav} {
    min-width: 150px;
    height: 56px;
    font-size: 16px;
  }
  &.btn-onPresentAccountModal {
    background: #EFF4F5;
    color: #6F6C99;
    box-shadow: none;
    width: 90px;
  }
  
  &.btn-onPresentConnectModal {
    background: #0085FF;
    box-shadow: 0px 4px 10px rgba(83, 185, 234, 0.24);
    width: 90px;
  }
`;

const UserBlock: React.FC<Props> = ({ account, login, logout, currentLang }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account, currentLang);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;

  if (currentLang === "zh-CN") {
    i18n.changeLanguage("zh_CN");
  } else if (currentLang === "zh-TW") {
    i18n.changeLanguage("zh_TW");
  } else i18n.changeLanguage(currentLang);

  return (
    <div>
      {account ? (
        <StyleButton
          className="btn-onPresentAccountModal"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </StyleButton>
      ) : (
        <StyleButton
          className="btn-onPresentConnectModal"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          <Trans>Connect</Trans>
        </StyleButton>
      )}
    </div>
  );
};

export default React.memo(UserBlock, (prevProps, nextProps) => prevProps.account === nextProps.account);
