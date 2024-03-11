import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
import node from "@astrojs/node";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.landmaze.me',
  integrations: [tailwind(), react({
    include: ['src/**/*.jsx', 'src/**/*.tsx'],
  })],
  server: {
    port: 3005
  },
  output: "static",
  
});