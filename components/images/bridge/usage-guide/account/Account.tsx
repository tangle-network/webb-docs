import Image from "next/image";
import ConnectWalletDark from "./connect-wallet-dark.png";
import ConnectWalletLight from "./connect-wallet-light.png";
import ConnectedWalletDark from "./connected-wallet-dark.png";
import ConnectedWalletLight from "./connected-wallet-light.png";
import SourceChainLight from "./select-source-chain-light.png";
import SourceChainDark from "./select-source-chain-dark.png";
import WalletComponentLight from "./wallet-component-light.png";
import WalletComponentDark from "./wallet-component-dark.png";
import CreateAccountLight from "./create-note-account-light.png";
import CreateAccountDark from "./create-note-account-dark2.png";
import CreateAccountPromptLight from "./create-account-prompt-light.png";
import CreateAccountPromptDark from "./create-account-prompt-dark.png";
import SignatureRequestLight from "./signature-request-light.png";
import SignatureRequestDark from "./signature-request-dark.png";
import CompletedAccountLight from "./account-congrats-light.png";
import CompletedAccountDark from "./account-congrats-dark.png";

export const ConnectWallet = (props) => {
  return (
    <>
      <div className="block dark:hidden">
        <Image
          src={ConnectWalletLight}
          height={props.height}
          alt="connect wallet light"
        />
      </div>
      <div className="hidden dark:block">
        <Image
          src={ConnectWalletDark}
          height={props.height}
          alt="connect wallet dark"
        />
      </div>
    </>
  );
};

export const ConnectedWallet = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={ConnectedWalletLight} alt="connected wallet light" />
      </div>
      <div className="hidden dark:block">
        <Image src={ConnectedWalletDark} alt="connected wallet dark" />
      </div>
    </>
  );
};

export const SelectSourceChain = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={SourceChainLight} alt="connected wallet light" />
      </div>
      <div className="hidden dark:block">
        <Image src={SourceChainDark} alt="connected wallet dark" />
      </div>
    </>
  );
};

export const WalletComponent = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={WalletComponentLight} alt="wallet light" />
      </div>
      <div className="hidden dark:block">
        <Image src={WalletComponentDark} alt="wallet dark" />
      </div>
    </>
  );
};

export const CreateNoteAccount = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={CreateAccountLight} alt="create account light" />
      </div>
      <div className="hidden dark:block">
        <Image src={CreateAccountDark} alt="create account dark" />
      </div>
    </>
  );
};

export const CreateNoteAccountPrompt = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image
          src={CreateAccountPromptLight}
          alt="create account prompt light"
        />
      </div>
      <div className="hidden dark:block">
        <Image src={CreateAccountPromptDark} alt="create account prompt dark" />
      </div>
    </>
  );
};

export const SignatureRequestPrompt = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={SignatureRequestLight} alt="create account prompt light" />
      </div>
      <div className="hidden dark:block">
        <Image src={SignatureRequestDark} alt="create account prompt dark" />
      </div>
    </>
  );
};

export const AccountCongrats = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={CompletedAccountLight} alt="created note account light" />
      </div>
      <div className="hidden dark:block">
        <Image src={CompletedAccountDark} alt="created note account dark" />
      </div>
    </>
  );
};
