import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
import node from "@astrojs/node";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://landmaze.me',
  integrations: [tailwind(), mdx({}), react()],
  server: {
    port: 3005
  },
  output: "hybrid",
  adapter: node({
    mode: "middleware"
  })
});