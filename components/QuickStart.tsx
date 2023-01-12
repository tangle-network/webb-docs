import {
  ChartBarIcon,
  CubeIcon,
  CloudIcon,
  EyeIcon,
  ServerIcon,
} from "@heroicons/react/outline";
import { GitHubIcon, TwitterIcon, DiscordIcon, TelegramIcon } from "./Icons";
import { DetailedFeatureLink } from "./Feature";

export const QuickStartArea = () => {
  return (
    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-10 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: GitHubIcon,
          description: `Check out our open source repos on GitHub. Open a pull request or an issue!`,
          name: "Contribute to Webb Ecosystem.",
        }}
        href="https://github.com/webb-tools"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: DiscordIcon,
          description: `Interested in the latest announcements? Join our Discord server. `,
          name: "Join our Discord community.",
        }}
        href="https://discord.com/invite/cv8EfJu3Tn"
      />
      <DetailedFeatureLink
        feature={{
          Icon: TelegramIcon,
          description: `Want to connect with Webb Developers, or have questions? Join our Telegram group.`,
          name: "Join our Telegram group.",
        }}
        href="https://t.me/webbprotocol"
      />
      <DetailedFeatureLink
        feature={{
          Icon: TwitterIcon,
          description: `Looking to keep up with our latest announcements and updates? Follow us on Twitter. `,
          name: "Follow us on Twitter.",
        }}
        href="https://twitter.com/webbprotocol"
      />
    </div>
  );
};

export const DeployArea = () => {
  return (
    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-10 lg:gap-x-8 lg:gap-y-12">
      {/* <DetailedFeatureLink
        feature={{
          Icon: CubeIcon,
          description: `Interested in deploying a bridge? Webb makes it incredibly fast and easy!`,
          name: "Deploy a bridge in 15 mins.",
        }}
        href=""
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: EyeIcon,
          description: `Interested in Webb's identity system? Deploy in quickly to check it out!`,
          name: "Deploy identity system in 15 min.",
        }}
        href=""
      ></DetailedFeatureLink> */}
      <DetailedFeatureLink
        feature={{
          Icon: ServerIcon,
          description: `Want to spin up a full node on the Tangle Network? We've made it easier than ever!`,
          name: "Deploy a Tangle Node!",
        }}
        href="./docs/tangle-network/node-operators/quickstart#deploy-quickly"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: CloudIcon,
          description: `Help support the Webb ecosystem. Run a relayer and earn!`,
          name: "Deploy a relayer!",
        }}
        href="./docs/relayer/running-relayer/running-docker"
      ></DetailedFeatureLink>
    </div>
  );
};

export const DappsArea = () => {
  return (
    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-10 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: CubeIcon,
          description: `Private cross-chain bridge. Dedicated UI for moving digital assets cross-chain and privately.`,
          name: "Hubble Bridge",
        }}
        href="https://development-hubble-bridge.netlify.app/"
      />
      <DetailedFeatureLink
        feature={{
          Icon: ChartBarIcon,
          description: `The Stats dApp provides insights into the DKG protocol running on the Tangle Network.`,
          name: "Stats dApp",
        }}
        href="https://www.stats-dev.webb.tools/"
      ></DetailedFeatureLink>
    </div>
  );
};

export const DappsAreaBridge = () => {
  return (
    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-10 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: CubeIcon,
          description: `Private cross-chain bridge. Dedicated UI for moving digital assets cross-chain and privately.`,
          name: "Hubble Bridge",
        }}
        href="https://development-hubble-bridge.netlify.app/"
      />
      <DetailedFeatureLink
        feature={{
          Icon: GitHubIcon,
          description: "Monorepo for Webb dApps",
          name: "webb-dapp",
        }}
        href="https://github.com/webb-tools/webb-dapp"
      ></DetailedFeatureLink>
    </div>
  );
};
