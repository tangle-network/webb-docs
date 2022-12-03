const { withSentryConfig } = require("@sentry/nextjs");
const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_flexsearch: true,
  unstable_staticImage: true,
});

const sentryWebpackPluginOptions = {
  silent: true,
};

const nextConfig = withNextra({
  sentry: {
    hideSourceMaps: true,
  },
  reactStrictMode: true,
  experimental: {
    legacyBrowsers: false,
  },
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        __SENTRY_DEBUG__: false,
        __SENTRY_TRACING__: false,
      })
    );

    // return the modified config
    return config;
  },
  rewrites() {
    return {
      // beforeFiles: [
      //   {
      //     source: "/sitemap.xml",
      //     destination:
      //     //TODO: SUBMIT SITE MAP
      //       "",
      //   },
      // ],
    };
  },
  async redirects() {
    return [
      {
        source: "/webb/docs",
        destination: "/docs",
        permanent: true,
      },
      {
        source: "/",
        destination: "/docs",
        permanent: true,
      },
    ];
  },
});

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
