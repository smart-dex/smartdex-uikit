import React from "react";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
import AccountModal from "./AccountModal";
import { Login } from "./types";

interface ReturnType {
  onPresentConnectModal: () => void;
  onPresentAccountModal: () => void;
}

const useWalletModal = (login: Login, logout: () => void, account?: string, currentLang?: string): ReturnType => {
  const [onPresentConnectModal] = useModal(<ConnectModal login={login} currentLang={currentLang}/>);
  const [onPresentAccountModal] = useModal(<AccountModal account={account || ""} logout={logout} currentLang={currentLang}/>);
  return { onPresentConnectModal, onPresentAccountModal };
};

export default useWalletModal;
