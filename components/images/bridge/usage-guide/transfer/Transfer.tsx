import ThemedImage from "../../../../ThemedImage";
import AmountDark from "./dark-imgs/amount.png";
import ConfirmDark from "./dark-imgs/confirm.png";
import InProgressDark from "./dark-imgs/in-progress.png";
import NoRelayerDark from "./dark-imgs/no-relayer.png";
import PublicKeyDark from "./dark-imgs/public-key.png";
import RecipientDark from "./dark-imgs/recipient.png";
import RefundDark from "./dark-imgs/refund.png";
import SelectDestinationChainDark from "./dark-imgs/select-destination-chain.png";
import SelectRelayerDark from "./dark-imgs/select-relayer.png";
import SelectShieldedPoolDark from "./dark-imgs/select-shielded-pool.png";
import SelectSourceChainDark from "./dark-imgs/select-source-chain.png";
import SuccessDark from "./dark-imgs/success.png";
import TransferDark from "./dark-imgs/transfer.png";
import AmountLight from "./light-imgs/amount.png";
import ConfirmLight from "./light-imgs/confirm.png";
import InProgressLight from "./light-imgs/in-progress.png";
import NoRelayerLight from "./light-imgs/no-relayer.png";
import PublicKeyLight from "./light-imgs/public-key.png";
import RecipientLight from "./light-imgs/recipient.png";
import RefundLight from "./light-imgs/refund.png";
import SelectDestinationChainLight from "./light-imgs/select-destination-chain.png";
import SelectRelayerLight from "./light-imgs/select-relayer.png";
import SelectShieldedPoolLight from "./light-imgs/select-shielded-pool.png";
import SelectSourceChainLight from "./light-imgs/select-source-chain.png";
import SuccessLight from "./light-imgs/success.png";
import TransferLight from "./light-imgs/transfer.png";

export const Transfer = () => {
  return (
    <ThemedImage
      lightImageProps={{ src: TransferLight, alt: "transfer light" }}
      darkImageProps={{ src: TransferDark, alt: "transfer dark" }}
    />
  );
};

export const SelectSourceChain = () => {
  return (
    <ThemedImage
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
    <ThemedImage
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

export const Amount = () => {
  return (
    <ThemedImage
      lightImageProps={{ src: AmountLight, alt: "amount light" }}
      darkImageProps={{ src: AmountDark, alt: "amount dark" }}
    />
  );
};

export const SelectDestinationChain = () => {
  return (
    <ThemedImage
      lightImageProps={{
        src: SelectDestinationChainLight,
        alt: "select destination chain light",
      }}
      darkImageProps={{
        src: SelectDestinationChainDark,
        alt: "select destination chain dark",
      }}
    />
  );
};

export const SelectRelayer = () => {
  return (
    <ThemedImage
      lightImageProps={{ src: SelectRelayerLight, alt: "select relayer light" }}
      darkImageProps={{ src: SelectRelayerDark, alt: "select relayer dark" }}
    />
  );
};

export const NoRelayer = () => {
  return (
    <ThemedImage
      lightImageProps={{ src: NoRelayerLight, alt: "no relayer light" }}
      darkImageProps={{ src: NoRelayerDark, alt: "no relayer dark" }}
    />
  );
};

export const PublicKey = () => {
  return (
    <ThemedImage
      lightImageProps={{ src: PublicKeyLight, alt: "public key light" }}
      darkImageProps={{ src: PublicKeyDark, alt: "public key dark" }}
    />
  );
};

export const Recipient = () => {
  return (
    <ThemedImage
      lightImageProps={{ src: RecipientLight, alt: "recipient light" }}
      darkImageProps={{ src: RecipientDark, alt: "recipient dark" }}
    />
  );
};

export const Refund = () => {
  return (
    <ThemedImage
      lightImageProps={{ src: RefundLight, alt: "refund light" }}
      darkImageProps={{ src: RefundDark, alt: "refund dark" }}
    />
  );
};

export const Confirm = () => {
  return (
    <ThemedImage
      lightImageProps={{ src: ConfirmLight, alt: "confirm light" }}
      darkImageProps={{ src: ConfirmDark, alt: "confirm dark" }}
    />
  );
};

export const InProgress = () => {
  return (
    <ThemedImage
      lightImageProps={{ src: InProgressLight, alt: "in progress light" }}
      darkImageProps={{ src: InProgressDark, alt: "in progress dark" }}
    />
  );
};

export const Success = () => {
  return (
    <ThemedImage
      lightImageProps={{ src: SuccessLight, alt: "success light" }}
      darkImageProps={{ src: SuccessDark, alt: "success dark" }}
    />
  );
};
