import {
  BookOpenIcon,
  CloudDownloadIcon,
  CloudUploadIcon,
  LightBulbIcon,
  LightningBoltIcon,
  ChartBarIcon,
  PencilIcon,
  ServerIcon,
  SparklesIcon,
  CubeIcon
} from "@heroicons/react/outline";
import { Discord, Github, Telegram, Twitter } from "./Social";
import { DetailedFeatureLink } from "./Feature";
import Turbo from "./logos/Turbo";

export const QuickStartArea = () => {
  return (
    <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: Github,
          description: `Check out our open source repos on GitHub. Open a pull request or an issue!`,
          name: "Contribute to Webb Ecosystem.",
        }}
        href="https://github.com/webb-tools"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: Discord,
          description: `Interested in the latest announcements? Join our Discord server. `,
          name: "Join our Discord community.",
        }}
        href="https://discord.com/invite/cv8EfJu3Tn"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: Telegram,
          description: `Want to connect with Webb Developers, or have questions? Join our Telegram group.`,
          name: "Join our Telegram group.",
        }}
        href="https://t.me/webbprotocol"
      ></DetailedFeatureLink>
            <DetailedFeatureLink
        feature={{
          Icon: Twitter,
          description: `Looking to keep up with our latest announcements and updates? Follow us on Twitter. `,
          name: "Follow us on Twitter.",
        }}
        href="https://twitter.com/webbprotocol"
      ></DetailedFeatureLink>
    </div>
  );
};

export const MonoreposArea = () => {
  return (
    <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: LightBulbIcon,
          description: `Understand why monorepos don't scale - and why Turborepo is the solution.`,
          name: "Why Turborepo?",
        }}
        href="/webb/docs/core-concepts/monorepos"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: BookOpenIcon,
          description: `Learn the basics of monorepos before you dive in to Turborepo.`,
          name: "Read the Monorepo Handbook",
        }}
        href="/docs/handbook"
      ></DetailedFeatureLink>
       <DetailedFeatureLink
        feature={{
          Icon: LightBulbIcon,
          description: `Understand why monorepos don't scale - and why Turborepo is the solution.`,
          name: "Why Turborepo?",
        }}
        href="/webb/docs/core-concepts/monorepos"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: BookOpenIcon,
          description: `Learn the basics of monorepos before you dive in to Turborepo.`,
          name: "Read the Monorepo Handbook",
        }}
        href="/docs/handbook"
      ></DetailedFeatureLink>
    </div>
  );
};

export const DappsArea = () => {
  return (
    <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          // TODO: update icon to reflect Minerva Bridge logo
          Icon: CubeIcon,
          description: `Private cross-chain bridge. Dedicated UI for moving digital assets cross-chain and privately.`,
          name: "Minerva Bridge",
        }}
        // TODO: update link with deployed bridge instance
        href="https://www.stats-dev.webb.tools/"
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
