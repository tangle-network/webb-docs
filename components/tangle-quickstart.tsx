import {
  ServerIcon,
} from "@heroicons/react/outline";
import { DiscordIcon, TelegramIcon, DockerIcon, PrometheusIcon, GrafanaIcon } from "./Icons";
import { DetailedFeatureLink } from "./Feature";

export const DeployArea = () => {
  return (
    <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:gap-x-8 lg:gap-y-12">
    <DetailedFeatureLink
      feature={{
        Icon: DockerIcon,
        description: `Deploy a Tangle node in minutes using Docker.`,
        name: "Deploy with Docker",
      }}
      href=""
    ></DetailedFeatureLink>
    <DetailedFeatureLink
        feature={{
          Icon: ServerIcon,
          description: `Run a Tangle node using Systemd.`,
          name: "Run with Systemd",
        }}
        href=""
      />
  </div>
  );
};

export const SupportArea = () => {
  return (
    <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:gap-x-8 lg:gap-y-12">
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
    <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: PrometheusIcon,
          description: `Power your metrics and alerting with the leading open-source monitoring solution.`,
          name: "Prometheus Setup",
        }}
        href="/docs/tangle-network/node-operators/monitoring/prometheus"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: PrometheusIcon,
          description: `Handle alerts sent by client applications such as the Prometheus server`,
          name: "AlertManager Setup",
        }}
        href="/docs/tangle-network/node-operators/monitoring/alert-manager"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: GrafanaIcon,
          description: `Visualize results from multiple data sources simultaneously.`,
          name: "Grafana Dashboards",
        }}
        href="/docs/tangle-network/node-operators/monitoring/grafana"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: GrafanaIcon,
          description: `Horizontally scalable, highly available, multi-tenant log aggregation system.`,
          name: "Loki Log Management",
        }}
        href="/docs/tangle-network/node-operators/monitoring/loki"
      ></DetailedFeatureLink>
    </div>
  );
};