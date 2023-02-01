import Image from "next/image";
import WithdrawDark from "./withdraw-dark.png";
import WithdrawLight from "./withdraw-light.png";
import WithdrawTokenLight from "./withdraw-token-light.png";
import WithdrawTokenDark from "./withdraw-token-dark.png";
import WithdrawConfirmLight from "./confirm-withdraw-light.png";
import WithdrawConfirmDark from "./confirm-withdraw-dark.png";
import WithdrawCustomLight from "./custom-amount-light.png";
import WithdrawCustomDark from "./custom-amount-dark.png";
import RecipientLight from "./recipient-light.png";
import RecipientDark from "./recipient-dark.png";
import RelayerDark from "./relayer-dark.png";
import RelayerLight from "./relayer-light.png";
import UnwrapLight from "./unwrap-light.png";
import UnwrapDark from "./unwrap-dark.png";
import UnwrapTokenLight from "./unwrap-token-light.png";
import UnwrapTokenDark from "./unwrap-token-dark.png";
import UnwrapWithdrawLight from "./unwrap-withdraw-light.png";
import UnwrapWithdrawDark from "./unwrap-withdraw-dark.png";
import WithdrawAmountLight from "./withdraw-amount-light.png";
import WithdrawAmountDark from "./withdraw-amount-dark.png";
import WithdrawInprogessLight from "./withdraw-inprogress-light.png";
import WithdrawInprogessDark from "./withdraw-inprogress-dark.png";
import FixedAmountLight from "./fixed-amount-light.png";
import FixedAmountDark from "./fixed-amount-dark.png";

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
