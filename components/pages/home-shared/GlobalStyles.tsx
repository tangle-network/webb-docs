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
    `}
      </style>
    </Head>
  );
}
