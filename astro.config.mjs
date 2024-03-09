import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://landmaze.me',
  integrations: [tailwind(), mdx({})],
  server: {
    port: 3005
  },
  output: "server",
  adapter: node({
    mode: "middleware"
  })
});