import Image from 'next/image'
import TokenSelectionLight from './select-token-light.png';
import TokenSelectionDark from './select-token-dark.png';
import DepositLight from './deposit-light.png';
import DepositDark from './deposit-dark.png';
import WrapDepositDark from './wrap-deposit-dark.png';
import SourceChainLight from '../account/select-source-chain-light.png';
import SourceChainDark from '../account/select-source-chain-dark.png';

export const Deposit = () => {
  return (
    <>
    <div className="block dark:hidden">
      <Image src={DepositLight} alt="deposit light" />
    </div>
    <div className="hidden dark:block">
      <Image src={DepositDark}alt="deposit dark" />
    </div>
    </>
  )
};

export const TokenSelection = (props) => {
  return (
    <>
    <div className="block dark:hidden">
      <Image src={TokenSelectionLight} height={props.height} alt="token selection light" />
    </div>
    <div className="hidden dark:block">
      <Image src={TokenSelectionDark} height={props.height} alt="token selection dark" />
    </div>
    </>
  )
};

export const WrapDeposit = () => {
    return (
      <>
      <div className="block dark:hidden">
        <Image src={WrapDepositDark} alt="connected wallet light" />
      </div>
      <div className="hidden dark:block">
        <Image src={WrapDepositDark}alt="wrap and deposit dark" />
      </div>
      </>
    )
};

export const SelectSourceChain = () => {
    return (
      <>
      <div className="block dark:hidden">
        <Image src={SourceChainLight} alt="connected wallet light" />
      </div>
      <div className="hidden dark:block">
        <Image src={SourceChainDark}alt="connected wallet dark" />
      </div>
      </>
    )
};