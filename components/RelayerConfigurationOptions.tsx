import Link from "next/link";
import React from "react";
export type AvailableBranches = "main" | "develop" | "staging";
export type RelayerConfigurationOptionsProps = {
  branch: AvailableBranches;
};
/**
 * Component to render a link to the relayer configuration options
 * @param branch - The branch of the relayer to link to
 * @returns A link to the relayer configuration options
 */
export default function ConfigurationOptions({ branch }: RelayerConfigurationOptionsProps) {
  return (
    <Link
      href={`https://github.com/webb-tools/relayer/blob/${branch}/config/README.md`}
      className="underline text-blue-400 visited:text-purple-500"
    >
      Configuration Options
    </Link>
  );
}
