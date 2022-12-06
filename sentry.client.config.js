// This file configures the initialization of Sentry on the browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  
  dsn: process.env.SENTRY_DSN,
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0,
  ignoreUrls: [
    // Chrome extensions
    /extensions\//i,
    /^chrome:\/\//i,
  ],
});
