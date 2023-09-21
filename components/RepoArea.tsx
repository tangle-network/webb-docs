import { DetailedFeatureLink } from "./Feature";
import { GitHubIcon } from "./Icons";
import { ChartBarIcon, CodeIcon, BookOpenIcon } from "@heroicons/react/outline";

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

export const StatsdApp = () => {
  return (
    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-10 lg:gap-x-8 lg:gap-y-12">
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
          Icon: ChartBarIcon,
          description: `The Stats dApp provides insights into the DKG protocol running on the Tangle Network.`,
          name: "Stats dApp",
        }}
        href="https://stats.tangle.tools"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: CodeIcon,
          description: `The GraphQL Playground provides a way to query the SubQuery API`,
          name: "GraphQL Playground",
        }}
        href="https://standalone-subql.tangle.tools/graphql"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: GitHubIcon,
          description: "SubQuery implementation for DKG and Webb Networks",
          name: "webb-subql",
        }}
        href="https://github.com/webb-tools/webb-subql"
      ></DetailedFeatureLink>
    </div>
  );
};

export const RelayerImpl = () => {
  return (
    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-10 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: GitHubIcon,
          description: "The Webb Relayer Network.",
          name: "relayer",
        }}
        href="https://github.com/webb-tools/relayer"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: BookOpenIcon,
          description: `Source code documentation for Webb Relayer.`,
          name: "Source Code Documentation",
        }}
        href="https://webb-tools.github.io/relayer/"
      ></DetailedFeatureLink>
    </div>
  );
};

export const DKGImpl = () => {
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
          Icon: BookOpenIcon,
          description: `Source code documentation for Webb DKG Protocol.`,
          name: "Source Code Documentation",
        }}
        href="https://webb-tools.github.io/dkg-substrate/"
      ></DetailedFeatureLink>
    </div>
  );
};
