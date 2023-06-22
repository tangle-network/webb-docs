const { withSentryConfig } = require("@sentry/nextjs");
const remarkMath = require("remark-math");
const rehypeKatex = require("rehype-katex");

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_flexsearch: true,
  unstable_staticImage: true,
  latex: true,
  mdxOptions: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});

const sentryWebpackPluginOptions = {
  dryRun: process.env.NETLIFY_ENV !== "production",
  silent: true,
};

const nextConfig = withNextra({
  i18n: {
    locales: ['en', 'zh', 'ar', 'es', 'ru'],
    defaultLocale: 'en',
  },
  sentry: {
    hideSourceMaps: true,
  },
  reactStrictMode: true,
  experimental: {
    legacyBrowsers: false,
  },
  trailingSlash: true,
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        __SENTRY_DEBUG__: false,
        __SENTRY_TRACING__: false,
      })
    );
    return config;
  },
  rewrites() {
    return {};
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/docs",
        permanent: true,
      },
    ];
  },
});

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
