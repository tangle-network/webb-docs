import { useRouter } from "next/router";
import { useConfig, useTheme } from "nextra-theme-docs";
import { Footer } from "./components/Footer";
import Navigation from "./components/Navigation";
import HeaderLogo from "./components/HeaderLogo";
import { Discord, Github } from "./components/Social";

const SITE_ROOT = "https://docs.webb.tools";

/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
const theme = {
  docsRepositoryBase: "https://github.com/webb-tools/webb-docs/tree/main",
  useNextSeoProps: function SEO() {
    const router = useRouter();
    const { frontMatter } = useConfig();

    const defaultTitle = frontMatter.overrideTitle;

    return {
      description: frontMatter.description,
      defaultTitle,
      titleTemplate: `%s – Webb`,
    };
  },
  unstable_flexsearch: true,
  unstable_staticImage: true,
  toc: {
    float: true,
  },
  font: false,
  feedback: {
    link: "Question? Give us feedback →",
  },
  logo: HeaderLogo,
  logoLink: false,
  head: function Head() {
    const router = useRouter();
    const { systemTheme = "dark" } = useTheme();
    const { frontMatter } = useConfig();
    const fullUrl =
      router.asPath === "/" ? SITE_ROOT : `${SITE_ROOT}${router.asPath}`;

    const asPath = router.asPath;

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`/images/favicon-${systemTheme}/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/images/favicon-${systemTheme}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/images/favicon-${systemTheme}/favicon-16x16.png`}
        />
        <link
          rel="mask-icon"
          href={`/images/favicon-${systemTheme}/webb.svg`}
          color="#000000"
        />
        <link
          rel="shortcut icon"
          href={`/images/favicon-${systemTheme}/favicon.ico`}
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#1F1D2B" />
        <meta name="twitter:card" content="summary_medium_image" />
        <meta name="twitter:site" content="@webbprotocol" />
        <meta name="twitter:creator" content="@webbprotocol" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={fullUrl} />
        <link rel="canonical" href={fullUrl} />
        <meta
          property="twitter:image"
          content="https://webb-assets.s3.amazonaws.com/WebbLogo.svg"
        />
        <meta
          property="og:image"
          content="https://webb-assets.s3.amazonaws.com/WebbLogo.svg"
        />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:site_name" content="Webb" />
        <link rel="prefetch" href="/" as="document" />
      </>
    );
  },
  editLink: {
    text: "Edit this page on GitHub",
  },
  navbar: {
    component: Navigation,
    extraContent: (
      <>
        <Github />
        <Discord />
      </>
    ),
  },
  footer: {
    component: Footer,
  },
  nextThemes: {
    defaultTheme: "light",
  },
};
export default theme;
