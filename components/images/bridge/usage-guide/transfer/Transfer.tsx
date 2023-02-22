import Image from "next/image";
import TransferLight from "./light-imgs/transfer-light.png";
import TransferDark from "./dark-imgs/transfer-dark.png";
import TransferTokenDark from "./dark-imgs/transfer-token-dark.png";
import TransferTokenLight from "./light-imgs/transfer-token-light.png";
import TransferDestinationDark from "./dark-imgs/transfer-destination-dark.png";
import TransferDestinationLight from "./light-imgs/transfer-destination-light.png";
import TransferAmountDark from "./dark-imgs/transfer-amount-dark.png";
import TransferAmountLight from "./light-imgs/transfer-amount-light.png";
import TransferRelayerDark from "./dark-imgs/transfer-relayer-dark.png";
import TransferRelayerLight from "./light-imgs/transfer-relayer-light.png";
import TransferRecipientDark from "./dark-imgs/transfer-recipient-dark.png";
import TransferRecipientLight from "./light-imgs/transfer-recipient-light.png";
import TransferConfirmDark from "./dark-imgs/transfer-confirm-dark.png";
import TransferConfirmLight from "./light-imgs/transfer-confirm-light.png";
import TransferCopiedNoteDark from "./dark-imgs/transfer-copied-note-dark.png";
import TransferCopiedNoteLight from "./light-imgs/transfer-copied-note-light.png";
import TransferInprogressDark from "./dark-imgs/transfer-inprogress-dark.png";
import TransferInprogressLight from "./light-imgs/transfer-inprogress-light.png";
import TransferSuccessDark from "./dark-imgs/transfer-success-dark.png";
import TransferSuccessLight from "./light-imgs/transfer-success-light.png";
import ShieldedAddressLight from "./light-imgs/shielded-address-light.png";
import ShieldedAddressDark from "./dark-imgs/shielded-address-dark.png";

export const Transfer = (props) => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={TransferLight} alt="transfer light" />
      </div>
      <div className="hidden dark:block">
        <Image src={TransferDark} alt="transfer dark" />
      </div>
    </>
  );
};

export const TransferToken = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={TransferTokenLight} alt="withdraw token light" />
      </div>
      <div className="hidden dark:block">
        <Image src={TransferTokenDark} alt="withdraw token dark" />
      </div>
    </>
  );
};

export const TransferDestination = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={TransferDestinationLight} alt="transfer destination" />
      </div>
      <div className="hidden dark:block">
        <Image src={TransferDestinationDark} alt="transfer destination" />
      </div>
    </>
  );
};

export const TransferAmount = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={TransferAmountLight} alt="transfer amount" />
      </div>
      <div className="hidden dark:block">
        <Image src={TransferAmountDark} alt="transfer amount" />
      </div>
    </>
  );
};

export const TransferRelayer = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={TransferRelayerLight} alt="transfer amount" />
      </div>
      <div className="hidden dark:block">
        <Image src={TransferRelayerDark} alt="transfer amount" />
      </div>
    </>
  );
};

export const TransferRecipient = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={TransferRecipientLight} alt="transfer amount" />
      </div>
      <div className="hidden dark:block">
        <Image src={TransferRecipientDark} alt="transfer amount" />
      </div>
    </>
  );
};

export const TransferConfirm = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={TransferConfirmLight} alt="transfer amount" />
      </div>
      <div className="hidden dark:block">
        <Image src={TransferConfirmDark} alt="transfer amount" />
      </div>
    </>
  );
};

export const TransferChangeNoteCopied = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={TransferCopiedNoteLight} alt="transfer amount" />
      </div>
      <div className="hidden dark:block">
        <Image src={TransferCopiedNoteDark} alt="transfer amount" />
      </div>
    </>
  );
};

export const TransferInprogress = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={TransferInprogressLight} alt="transfer amount" />
      </div>
      <div className="hidden dark:block">
        <Image src={TransferInprogressDark} alt="transfer amount" />
      </div>
    </>
  );
};

export const TransferSuccess = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={TransferSuccessLight} alt="transfer amount" />
      </div>
      <div className="hidden dark:block">
        <Image src={TransferSuccessDark} alt="transfer amount" />
      </div>
    </>
  );
};

export const TransferAddress = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={ShieldedAddressLight} alt="transfer amount" />
      </div>
      <div className="hidden dark:block">
        <Image src={ShieldedAddressDark} alt="transfer amount" />
      </div>
    </>
  );
};
