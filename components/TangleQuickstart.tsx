import { ServerIcon } from "@heroicons/react/outline";
import {
  DiscordIcon,
  TelegramIcon,
  DockerIcon,
  PrometheusIcon,
  GrafanaIcon,
} from "./Icons";
import { DetailedFeatureLink } from "./Feature";

export const QuickDeployArea = () => {
  return (
    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-10 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: ServerIcon,
          description: `Deploy a Tangle node in two steps`,
          name: "Quick Deployment",
        }}
        href="/docs/ecosystem-roles/validator/systemd/quick-node/"
      ></DetailedFeatureLink>
    </div>
  );
};

export const DeployArea = () => {
  return (
    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-10 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: DockerIcon,
          description: `Deploy a Tangle node in minutes using Docker.`,
          name: "Deploy with Docker",
        }}
        href="/docs/ecosystem-roles/validator/deploy-with-docker/full-node/"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: ServerIcon,
          description: `Run a Tangle node using Systemd.`,
          name: "Run with Systemd",
        }}
        href="/docs/ecosystem-roles/validator/systemd/full-node/"
      />
    </div>
  );
};

export const SupportArea = () => {
  return (
    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-10 lg:gap-x-8 lg:gap-y-12">
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
    </div>
  );
};

export const MonitoringArea = () => {
  return (
    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-10 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: PrometheusIcon,
          description: `Power your metrics and alerting with the leading open-source monitoring solution.`,
          name: "Prometheus Setup",
        }}
        href="docs/ecosystem-roles/validator/monitoring/prometheus/"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: PrometheusIcon,
          description: `Handle alerts sent by client applications such as the Prometheus server`,
          name: "AlertManager Setup",
        }}
        href="/docs/ecosystem-roles/validator/monitoring/alert-manager/"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: GrafanaIcon,
          description: `Visualize results from multiple data sources simultaneously.`,
          name: "Grafana Dashboards",
        }}
        href="/docs/ecosystem-roles/validator/monitoring/grafana/"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: GrafanaIcon,
          description: `Horizontally scalable, highly available, multi-tenant log aggregation system.`,
          name: "Loki Log Management",
        }}
        href="/docs/ecosystem-roles/validator/monitoring/loki/"
      ></DetailedFeatureLink>
    </div>
  );
};
