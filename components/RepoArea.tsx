import { DetailedFeatureLink } from "./Feature";
import { GitHubIcon } from "./Icons";

export const RepoArea = () => {
  return (
    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-10 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: GitHubIcon,
          description: `Multy-party threshold ECDSA (GG20) Substrate node`,
          name: "dkg-substrate",
        }}
        href="https://github.com/webb-tools/dkg-substrate"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: GitHubIcon,
          description:
            "Zero-knowledge gadgets for Webb's cross-chain blockchain applications.",
          name: "zero-knowledge-gadgets",
        }}
        href="https://github.com/webb-tools/zero-knowledge-gadgets"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: GitHubIcon,
          description: "Webb Protocol implementation in Solidity.",
          name: "protocol-solidity",
        }}
        href="https://github.com/webb-tools/protocol-solidity"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: GitHubIcon,
          description: "Webb protocol implementation in Substrate.",
          name: "protocol-substrate",
        }}
        href="https://github.com/webb-tools/protocol-substrate"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: GitHubIcon,
          description: "Monorepo for Webb dApps",
          name: "webb-dapp",
        }}
        href="https://github.com/webb-tools/webb-dapp"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: GitHubIcon,
          description: "The Webb Relayer Network.",
          name: "relayer",
        }}
        href="https://github.com/webb-tools/relayer"
      ></DetailedFeatureLink>
    </div>
  );
};

export const ProtocolImpl = () => {
  return (
    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-10 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: GitHubIcon,
          description: "Webb Protocol implementation in Solidity.",
          name: "protocol-solidity",
        }}
        href="https://github.com/webb-tools/protocol-solidity"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: GitHubIcon,
          description: "Webb protocol implementation in Substrate.",
          name: "protocol-substrate",
        }}
        href="https://github.com/webb-tools/protocol-substrate"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: GitHubIcon,
          description: "Webb Protocol implementation in Ink!",
          name: "protocol-ink",
        }}
        href="https://github.com/webb-tools/protocol-ink"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: GitHubIcon,
          description: "Webb Protocol Implementation in CosmWasm.",
          name: "protocol-cosmwasm",
        }}
        href="https://github.com/webb-tools/protocol-cosmwasm"
      ></DetailedFeatureLink>
    </div>
  );
};
