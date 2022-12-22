import {
  CubeIcon,
  CloudIcon,
  EyeIcon,
  ServerIcon,
  BookOpenIcon,
  BeakerIcon,
} from "@heroicons/react/outline";
import { DetailedFeatureLink } from "./Feature";

export const UseCasesArea = () => {
  return (
    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-10 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: CubeIcon,
          description: `Powers the ability to privately move and transfer assets between blockchains.`,
          name: "Connected Shielded Pool Protocols",
        }}
        href=""
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: EyeIcon,
          description: `Create identities and connect groups between blockchains.`,
          name: "Connected Shielded Identity Protocols",
        }}
        href=""
      />
      <DetailedFeatureLink
        feature={{
          Icon: ServerIcon,
          description: `Capable of enabling public/plaintext cross-chain use cases. Providing efficiency, and security through the use of a TSS MPC that rotates frequently.`,
          name: "General Messaging Passing & Public Bridges",
        }}
        href=""
      />
      <DetailedFeatureLink
        feature={{
          Icon: CloudIcon,
          description: `Leverage the Webb TSS DKG to sign payloads from data feeds for financial, identity, and other applications`,
          name: "Oracle Systems and Data Feeds",
        }}
        href=""
      />
    </div>
  );
};

export const ParticipateArea = () => {
  return (
    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-10 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: CloudIcon,
          description: `Running a relayer helps keep our bridges up to date by relaying the necessary data between both applications and the Tangle Network.`,
          name: "Run a Relayer",
        }}
        href="/docs/relayer/running-relayer/running-docker"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: ServerIcon,
          description: `Running a collator allows you to help secure the network and earn rewards in the process.`,
          name: "Run a Collator",
        }}
        href="/docs/tangle-network/node-operators/quickstart#deploy-quickly"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: BookOpenIcon,
          description: `Through governance, you can create proposals for updating cross-chain applications.`,
          name: "Participate in Governance ",
        }}
        href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftangle1.webb.tools#/democracy"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: BeakerIcon,
          description: `Reach out and build new applications on Webb!`,
          name: "Develop new applications and research",
        }}
        href="mailto:drew@webb.tools"
      ></DetailedFeatureLink>
    </div>
  );
};

export const TestNetworkArea = () => {
  return (
    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-10 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: ServerIcon,
          description: `Standalone AranaAlpha Network runs without a relay chain.`,
          name: "Standalone AranaAlpha TestNet",
        }}
        href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Farana-alpha-1.webb.tools#/explorer"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: ServerIcon,
          description: `Tangle Parachain TestNet runs with a self hosted relay chain.`,
          name: "Tangle Parachain TestNet",
        }}
        href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftangle1.webb.tools#/explorer"
      />
    </div>
  );
};
