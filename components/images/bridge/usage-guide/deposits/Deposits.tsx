import Image from "next/image";
import TokenSelectionLight from "./light-imgs/select-token-light.png";
import TokenSelectionDark from "./dark-imgs/select-token-dark.png";
import DepositViewDark from "./dark-imgs/deposit-dark-view.png";
import SourceChainLight from "./light-imgs/select-source-light.png";
import SourceChainDark from "./dark-imgs/select-source-chain-dark.png";
import DestinationChainLight from "./light-imgs/select-destination-light.png";
import DestinationChainDark from "./dark-imgs/select-destination-dark.png";
import DepositAmountLight from "./light-imgs/deposit-amount-light.png";
import DepositAmountDark from "./dark-imgs/deposit-amount-dark.png";
import ConfirmDepositDark from "./dark-imgs/confirm-deposit-dark.png";
import ConfirmDepositLight from "./light-imgs/confirm-deposit-light.png";
import CopiedNoteLight from "./light-imgs/copied-deposit-note-light.png";
import CopiedNoteDark from "./dark-imgs/copied-deposit-note-dark.png";
import DepositInprogressDark from "./dark-imgs/deposit-inprogress-dark.png";
import DepositInprogressLight from "./light-imgs/deposit-inprogress-light.png";
import SuccessDepositLight from "./light-imgs/success-deposit-light.png";
import SuccessDepositDark from "./dark-imgs/success-deposit-dark.png";
import DepositViewLight from "./light-imgs/deposit-light-view.png";

export const Deposit = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={DepositViewLight} alt="deposit light" />
      </div>
      <div className="hidden dark:block">
        <Image src={DepositViewDark} alt="deposit dark" />
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
        <Image src={DepositViewLight} alt="wrap and deposit light" />
      </div>
      <div className="hidden dark:block">
        <Image src={DepositViewDark} alt="wrap and deposit dark" />
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

export const SelectDestinationChain = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={DestinationChainLight} alt="select source chain light" />
      </div>
      <div className="hidden dark:block">
        <Image src={DestinationChainDark} alt="select source chain dark" />
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
