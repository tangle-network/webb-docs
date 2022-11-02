import Head from "next/head";

export function LandingPageGlobalStyles() {
  return (
    <Head>
      <style>
        {`
          .dark footer,
          .dark body {
            background-color: #1F1D2B !important;
          }

          .dark .nextra-nav-container .nextra-nav-container-blur  {
            background-color: #1F1D2B !important;
          }
    `}
      </style>
    </Head>
  );
}
