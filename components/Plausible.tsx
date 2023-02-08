import Script from "next/script";

export const Plausible = () => {
  return (
    <>
      <Script
        defer
        data-domain="docs.webb.tools"
        src="https://plausible.io/js/script.js"
        strategy="beforeInteractive"
      />
    </>
  );
};
