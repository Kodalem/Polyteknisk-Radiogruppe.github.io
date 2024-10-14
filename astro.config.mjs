// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import mdxRenderer from "@astrojs/mdx/server.js";
import rehypeKatex from 'rehype-katex';
import remarkMdx from "remark-mdx";
//import remarkGithub from "remark-github"; THIS BORKS THE BUILD
import remarkImages from "remark-images";
import codeImport from 'remark-code-import';

import vue from '@astrojs/vue';


import node from '@astrojs/node';


// https://astro.build/config
export default defineConfig({
  integrations: [mdx(
      {
        remarkPlugins: [rehypeKatex, remarkMdx, remarkImages, codeImport],
      }
  ), vue({jsx: true, devtools: {launchEditor: "webstorm"}}),],

  markdown: {
    shikiConfig: {
      themes:{
        light: 'catppuccin-latte',
        dark: 'catppuccin-mocha',
      },
    },
  },
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
});