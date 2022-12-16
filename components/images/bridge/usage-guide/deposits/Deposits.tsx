import Image from "next/image";
import TokenSelectionLight from "./select-token-light.png";
import TokenSelectionDark from "./select-token-dark.png";
import DepositLight from "./deposit-light.png";
import DepositDark from "./deposit-dark.png";
import WrapDepositDark from "./wrap-deposit-dark.png";
import WrapDepositLight from "./wrap-deposit-light.png";
import SourceChainLight from "../account/select-source-chain-light.png";
import SourceChainDark from "../account/select-source-chain-dark.png";
import DepositAmountLight from "./deposit-amount-light.png";
import DepositAmountDark from "./deposit-amount-dark.png";
import ConfirmDepositDark from "./confirm-deposit-dark.png";
import ConfirmDepositLight from "./confirm-deposit-light2.png";
import CopiedNoteLight from "./copied-deposit-note-light2.png";
import CopiedNoteDark from "./copied-deposit-note-dark.png";
import DepositInprogressDark from "./deposit-inprogress-dark.png";
import DepositInprogressLight from "./deposit-inprogress-light2.png";
import SuccessDepositLight from "./success-deposit-light.png";
import SuccessDepositDark from "./success-deposit-dark.png";

export const Deposit = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={DepositLight} alt="deposit light" />
      </div>
      <div className="hidden dark:block">
        <Image src={DepositDark} alt="deposit dark" />
      </div>
    </>
  );
};

export const TokenSelection = (props) => {
  return (
    <>
      <div className="block dark:hidden">
        <Image
          src={TokenSelectionLight}
          height={props.height}
          alt="token selection light"
        />
      </div>
      <div className="hidden dark:block">
        <Image
          src={TokenSelectionDark}
          height={props.height}
          alt="token selection dark"
        />
      </div>
    </>
  );
};

export const WrapDeposit = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={WrapDepositLight} alt="wrap and deposit light" />
      </div>
      <div className="hidden dark:block">
        <Image src={WrapDepositDark} alt="wrap and deposit dark" />
      </div>
    </>
  );
};

export const SelectSourceChain = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={SourceChainLight} alt="select source chain light" />
      </div>
      <div className="hidden dark:block">
        <Image src={SourceChainDark} alt="select source chain dark" />
      </div>
    </>
  );
};

export const DepositAmount = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={DepositAmountLight} alt="deposit amount light" />
      </div>
      <div className="hidden dark:block">
        <Image src={DepositAmountDark} alt="deposit amount dark" />
      </div>
    </>
  );
};

export const ConfirmDeposit = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={ConfirmDepositLight} alt="confirm deposit light" />
      </div>
      <div className="hidden dark:block">
        <Image src={ConfirmDepositDark} alt="confirm deposit dark" />
      </div>
    </>
  );
};

export const InprogessDeposit = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={DepositInprogressLight} alt="deposit in-progress light" />
      </div>
      <div className="hidden dark:block">
        <Image src={DepositInprogressDark} alt="deposit in-progress  dark" />
      </div>
    </>
  );
};

export const CopiedNote = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={CopiedNoteLight} alt="copied deposit note light" />
      </div>
      <div className="hidden dark:block">
        <Image src={CopiedNoteDark} alt="copied deposit note dark" />
      </div>
    </>
  );
};

export const SuccessDeposit = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={SuccessDepositLight} alt="successful deposit light" />
      </div>
      <div className="hidden dark:block">
        <Image src={SuccessDepositDark} alt="successful deposit dark" />
      </div>
    </>
  );
};
