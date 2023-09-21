import Image from "next/image";
import type { ComponentProps, FC } from "react";
import ConfirmDark from "./dark-imgs/confirm.png";
import ConfrimedDark from "./dark-imgs/confirmed.png";
import CustomAmountDark from "./dark-imgs/custom-amount.png";
import CustomRelayerNoResultDark from "./dark-imgs/custom-relayer-no-result-dark.png";
import CustomRelayerDark from "./dark-imgs/custom-relayer.png";
import FixedAmountDark from "./dark-imgs/fixed-amount.png";
import InprogessDark from "./dark-imgs/inprogress.png";
import NoRelayerDark from "./dark-imgs/no-relayer.png";
import RecipientDark from "./dark-imgs/recipient.png";
import RefundDark from "./dark-imgs/refund.png";
import SelectRelayerDark from "./dark-imgs/select-relayer.png";
import SelectShieldedPoolDark from "./dark-imgs/select-shielded-pool.png";
import SelectSourceChainDark from "./dark-imgs/select-source-chain.png";
import SelectTokenDark from "./dark-imgs/select-token.png";
import SuccessLight from "./dark-imgs/success.png";
import WithdrawDark from "./dark-imgs/withdraw.png";
import ConfirmLight from "./light-imgs/confirm.png";
import ConfrimedLight from "./light-imgs/confirmed.png";
import CustomAmountLight from "./light-imgs/custom-amount.png";
import CustomRelayerNoResultLight from "./light-imgs/custom-relayer-no-result-light.png";
import CustomRelayerLight from "./light-imgs/custom-relayer.png";
import FixedAmountLight from "./light-imgs/fixed-amount.png";
import InprogessLight from "./light-imgs/inprogress.png";
import NoRelayerLight from "./light-imgs/no-relayer.png";
import RecipientLight from "./light-imgs/recipient.png";
import RefundLight from "./light-imgs/refund.png";
import SelectRelayerLight from "./light-imgs/select-relayer.png";
import SelectShieldedPoolLight from "./light-imgs/select-shielded-pool.png";
import SelectSourceChainLight from "./light-imgs/select-source-chain.png";
import SelectTokenLight from "./light-imgs/select-token.png";
import SuccessDark from "./light-imgs/success.png";
import WithdrawLight from "./light-imgs/withdraw.png";

const ImageWrapper: FC<{
  lightImageProps: ComponentProps<typeof Image>;
  darkImageProps: ComponentProps<typeof Image>;
}> = ({ darkImageProps, lightImageProps }) => {
  return (
    <>
      <div className="block dark:hidden">
        <Image alt="light img" {...lightImageProps} />
      </div>
      <div className="hidden dark:block">
        <Image alt="dark img" {...darkImageProps} />
      </div>
    </>
  );
};

export const Withdraw = () => {
  return (
    <ImageWrapper
      lightImageProps={{ src: WithdrawLight, alt: "withdraw light" }}
      darkImageProps={{ src: WithdrawDark, alt: "withdraw dark" }}
    />
  );
};

export const SelectSourceChain = () => {
  return (
    <ImageWrapper
      lightImageProps={{
        src: SelectSourceChainLight,
        alt: "select source chain light",
      }}
      darkImageProps={{
        src: SelectSourceChainDark,
        alt: "select source chain dark",
      }}
    />
  );
};

export const SelectShieldedPool = () => {
  return (
    <ImageWrapper
      lightImageProps={{
        src: SelectShieldedPoolLight,
        alt: "select shielded pool light",
      }}
      darkImageProps={{
        src: SelectShieldedPoolDark,
        alt: "select shielded pool dark",
      }}
    />
  );
};

export const FixedAmount = () => {
  return (
    <ImageWrapper
      lightImageProps={{
        src: FixedAmountLight,
        alt: "fixed amount light",
      }}
      darkImageProps={{
        src: FixedAmountDark,
        alt: "fixed amount dark",
      }}
    />
  );
};

export const CustomAmount = () => {
  return (
    <ImageWrapper
      lightImageProps={{
        src: CustomAmountLight,
        alt: "custom amount light",
      }}
      darkImageProps={{
        src: CustomAmountDark,
        alt: "custom amount dark",
      }}
    />
  );
};

export const SelectToken = () => {
  return (
    <ImageWrapper
      lightImageProps={{
        src: SelectTokenLight,
        alt: "select token light",
      }}
      darkImageProps={{
        src: SelectTokenDark,
        alt: "select token dark",
      }}
    />
  );
};

export const SelectRelayer = () => {
  return (
    <ImageWrapper
      lightImageProps={{
        src: SelectRelayerLight,
        alt: "select relayer light",
      }}
      darkImageProps={{
        src: SelectRelayerDark,
        alt: "select relayer dark",
      }}
    />
  );
};

export const CustomRelayer = () => {
  return (
    <div className="flex gap-4">
      <ImageWrapper
        lightImageProps={{
          src: CustomRelayerLight,
          alt: "custom relayer light",
        }}
        darkImageProps={{
          src: CustomRelayerDark,
          alt: "custom relayer dark",
        }}
      />

      <ImageWrapper
        lightImageProps={{
          src: CustomRelayerNoResultLight,
          alt: "custom relayer no result light",
        }}
        darkImageProps={{
          src: CustomRelayerNoResultDark,
          alt: "custom relayer no result dark",
        }}
      />
    </div>
  );
};

export const NoRelayer = () => {
  return (
    <ImageWrapper
      lightImageProps={{
        src: NoRelayerLight,
        alt: "no relayer light",
      }}
      darkImageProps={{
        src: NoRelayerDark,
        alt: "no relayer dark",
      }}
    />
  );
};

export const Recipient = () => {
  return (
    <ImageWrapper
      lightImageProps={{
        src: RecipientLight,
        alt: "recipient light",
      }}
      darkImageProps={{
        src: RecipientDark,
        alt: "recipient dark",
      }}
    />
  );
};

export const Refund = () => {
  return (
    <ImageWrapper
      lightImageProps={{
        src: RefundLight,
        alt: "refund light",
      }}
      darkImageProps={{
        src: RefundDark,
        alt: "refund dark",
      }}
    />
  );
};

export const Confirm = () => {
  return (
    <ImageWrapper
      lightImageProps={{
        src: ConfirmLight,
        alt: "confirm light",
      }}
      darkImageProps={{
        src: ConfirmDark,
        alt: "confirm dark",
      }}
    />
  );
};

export const Confirmed = () => {
  return (
    <ImageWrapper
      lightImageProps={{
        src: ConfrimedLight,
        alt: "confirmed light",
      }}
      darkImageProps={{
        src: ConfrimedDark,
        alt: "confirmed dark",
      }}
    />
  );
};

export const InProgress = () => {
  return (
    <ImageWrapper
      lightImageProps={{
        src: InprogessLight,
        alt: "in progress light",
      }}
      darkImageProps={{
        src: InprogessDark,
        alt: "in progress dark",
      }}
    />
  );
};

export const Success = () => {
  return (
    <ImageWrapper
      lightImageProps={{
        src: SuccessLight,
        alt: "success light",
      }}
      darkImageProps={{
        src: SuccessDark,
        alt: "success dark",
      }}
    />
  );
};
