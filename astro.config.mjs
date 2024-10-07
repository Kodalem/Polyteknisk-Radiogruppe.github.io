// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import mdxRenderer from "@astrojs/mdx/server.js";
import rehypeKatex from 'rehype-katex';
import remarkMdx from "remark-mdx";
//import remarkGithub from "remark-github"; THIS BORKS THE BUILD
import remarkImages from "remark-images";
import codeImport from 'remark-code-import';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(
      {
        remarkPlugins: [rehypeKatex, remarkMdx, remarkImages, codeImport],
      }
  ), react()],
  markdown: {
    shikiConfig: {
      themes:{
        light: 'catppuccin-latte',
        dark: 'catppuccin-mocha',
      },
    },
  },
});