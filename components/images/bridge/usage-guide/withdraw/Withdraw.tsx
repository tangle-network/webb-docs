import Image from "next/image";
import WithdrawDark from "./dark-imgs/withdraw-dark.png";
import WithdrawLight from "./light-imgs/withdraw-light.png";
import WithdrawTokenLight from "./light-imgs/withdraw-token-light.png";
import WithdrawTokenDark from "./dark-imgs/withdraw-token-dark.png";
import WithdrawConfirmLight from "./light-imgs/confirm-withdraw-light.png";
import WithdrawConfirmDark from "./dark-imgs/confirm-withdraw-dark.png";
import WithdrawCustomLight from "./light-imgs/custom-amount-light.png";
import WithdrawCustomDark from "./dark-imgs/custom-amount-dark.png";
import RecipientLight from "./light-imgs/recipient-light.png";
import RecipientDark from "./dark-imgs/recipient-dark.png";
import RelayerDark from "./dark-imgs/relayer-dark.png";
import RelayerLight from "./light-imgs/relayer-light.png";
import UnwrapLight from "./light-imgs/unwrap-light.png";
import UnwrapDark from "./dark-imgs/unwrap-asset-dark.png";
import UnwrapTokenLight from "./light-imgs/unwrap-token-light.png";
import UnwrapTokenDark from "./dark-imgs/unwrap-token-dark.png";
import UnwrapWithdrawLight from "./light-imgs/unwrap-withdraw-light.png";
import UnwrapWithdrawDark from "./dark-imgs/unwrap-withdraw-dark.png";
import WithdrawAmountLight from "./light-imgs/withdraw-amount-light.png";
import WithdrawAmountDark from "./dark-imgs/withdraw-amount-dark.png";
import WithdrawInprogessLight from "./light-imgs/withdraw-inprogress-light.png";
import WithdrawInprogessDark from "./dark-imgs/withdraw-inprogress-dark.png";
import FixedAmountLight from "./light-imgs/fixed-amount-light.png";
import FixedAmountDark from "./dark-imgs/fixed-amount-dark.png";
// import WithdrawSuccessLight from "./light-imgs/withdraw-success-light.png";
import WithdrawSuccessDark from "./dark-imgs/withdraw-success-dark.png";
import WithdrawConfirmedNote from './dark-imgs/withdraw-confirmed-note-dark.png';

export const Withdraw = (props) => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={WithdrawLight} height={props.height} alt="withdraw light" />
      </div>
      <div className="hidden dark:block">
        <Image src={WithdrawDark} height={props.height} alt="withdraw dark" />
      </div>
    </>
  );
};

export const WithdrawToken = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={WithdrawTokenLight} alt="withdraw token light" />
      </div>
      <div className="hidden dark:block">
        <Image src={WithdrawTokenDark} alt="withdraw token dark" />
      </div>
    </>
  );
};

export const ConfirmWithdraw = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={WithdrawConfirmLight} alt="confirm withdraw light" />
      </div>
      <div className="hidden dark:block">
        <Image src={WithdrawConfirmDark} alt="confirm withdraw dark" />
      </div>
    </>
  );
};

export const WithdrawCustomAmount = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={WithdrawCustomLight} alt="withdraw custom amount" />
      </div>
      <div className="hidden dark:block">
        <Image src={WithdrawCustomDark} alt="withdraw custom amount" />
      </div>
    </>
  );
};

export const WithdrawRecipient = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={RecipientLight} alt="withdraw recipient" />
      </div>
      <div className="hidden dark:block">
        <Image src={RecipientDark} alt="withdraw recipient" />
      </div>
    </>
  );
};

export const RelayerSelection = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={RelayerLight} alt="relayer selection" />
      </div>
      <div className="hidden dark:block">
        <Image src={RelayerDark} alt="relayer selection" />
      </div>
    </>
  );
};

export const UnwrapWithdraw = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={UnwrapLight} alt="withdraw and unwrap" />
      </div>
      <div className="hidden dark:block">
        <Image src={UnwrapDark} alt="withdraw and unwrap" />
      </div>
    </>
  );
};

export const UnwrapWithdrawToken = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={UnwrapTokenLight} alt="withdraw and unwrap" />
      </div>
      <div className="hidden dark:block">
        <Image src={UnwrapTokenDark} alt="withdraw and unwrap" />
      </div>
    </>
  );
};

export const UnwrapWithdrawStart = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={UnwrapWithdrawLight} alt="withdraw and unwrap" />
      </div>
      <div className="hidden dark:block">
        <Image src={UnwrapWithdrawDark} alt="withdraw and unwrap" />
      </div>
    </>
  );
};

export const WithdrawInputAmount = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={WithdrawAmountLight} alt="withdraw amount" />
      </div>
      <div className="hidden dark:block">
        <Image src={WithdrawAmountDark} alt="withdraw amount" />
      </div>
    </>
  );
};

export const WithdrawFixedAmount = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={FixedAmountLight} alt="withdraw amount" />
      </div>
      <div className="hidden dark:block">
        <Image src={FixedAmountDark} alt="withdraw amount" />
      </div>
    </>
  );
};

export const WithdrawInProgress = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={WithdrawInprogessLight} alt="withdraw inprogress" />
      </div>
      <div className="hidden dark:block">
        <Image src={WithdrawInprogessDark} alt="withdraw inprogress" />
      </div>
    </>
  );
};

export const WithdrawSuccess = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={WithdrawSuccessDark} alt="withdraw success" />
      </div>
      <div className="hidden dark:block">
        <Image src={WithdrawSuccessDark} alt="withdraw success" />
      </div>
    </>
  );
};

export const ChangeNoteCopied = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={WithdrawConfirmedNote} alt="withdraw change note copied" />
      </div>
      <div className="hidden dark:block">
        <Image src={WithdrawConfirmedNote} alt="withdraw change note copied" />
      </div>
    </>
  );
};
