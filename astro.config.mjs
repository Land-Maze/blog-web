import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.landmaze.me",
  integrations: [
    tailwind(),
    react({
      include: ["src/**/*.jsx", "src/**/*.tsx"],
    }),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          uk: "uk",
        },
      },
    }),
  ],
  server: {
    port: 3005,
  },
  output: "static",
  redirects: {
    "/": {
      status: 308,
      destination: "/en/",
    },
  },
});

