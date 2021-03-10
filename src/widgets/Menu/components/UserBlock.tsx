import React from "react";
import Button from "../../../components/Button/Button";
import { useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";
import styled from "styled-components";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
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

const UserBlock: React.FC<Props> = ({ account, login, logout }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
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
          Connect
        </StyleButton>
      )}
    </div>
  );
};

export default React.memo(UserBlock, (prevProps, nextProps) => prevProps.account === nextProps.account);
