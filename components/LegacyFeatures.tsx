// Remove when docs is refactored to use the new icons (see ./features.ts)
import React from "react";
import { IconType } from "./Icons";

export type Feature = {
  name: string;
  description: React.ReactNode;
  Icon: IconType;
  page: "all" | "home" | "docs";
};

export type Features = Array<Feature>;

const LEGACY_REPO_FEATURES: Features = [];

export const LEGACY_REPO_DOCS_FEATURES = LEGACY_REPO_FEATURES.filter(
  (f) => f.page === "docs" || f.page === "all",
);

export const LEGACY_REPO_HOME_FEATURES = LEGACY_REPO_FEATURES.filter(
  (f) => f.page === "home" || f.page === "all",
);

export default LEGACY_REPO_FEATURES;
