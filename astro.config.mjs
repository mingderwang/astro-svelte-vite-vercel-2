import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import svelte from '@astrojs/svelte';
// import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  output: 'server',
  integrations: [svelte()]
});