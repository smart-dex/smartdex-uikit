import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
const resources = {
  en: {
    translation: {
      "Dark": "Dark",
      "Light": "Light",
      "Connect": "Connect",
      "Connect to a wallet": "Connect to a wallet",
      "Learn how to connect": "Learn how to connect",
      "Your wallet": "Your wallet",
      "Logout": "Logout",
      "Copied": "Copied"
  }
  },
  ja: {
    translation: {
      "Dark": "ダークモード",
      "Light": "ライトモード",
      "Connect": "接続する",
      "Connect to a wallet": "ウォレットに接続する",
      "Learn how to connect": "接続する方法を学ぶ",
      "Your wallet": "あなたの財布",
      "Logout": "ログアウト",
      "Copied": "コピー"
  }
  },
  zh_CN: {
    translation: {
      "Dark": "暗模式",
      "Light": "灯光模式",
      "Connect": "连接",
      "Connect to a wallet": "连接到钱包",
      "Learn how to connect": "了解如何连接",
      "Your wallet": "你的钱包",
      "Logout": "登出",
      "Copied": "复制的"
  }
  },
  zh_TW: {
    translation: {
      "Dark": "暗模式",
      "Light": "燈光模式",
      "Connect": "連接",
      "Connect to a wallet": "連接到錢包",
      "Learn how to connect": "了解如何連接",
      "Your wallet": "你的錢包",
      "Logout": "登出",
      "Copied": "複製的"
  }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    fallbackLng: "en", // use en if detected lng is not available
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;