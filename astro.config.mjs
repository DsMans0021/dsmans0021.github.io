import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dsmans0021.com',
  output: 'static',
  build: {
    format: 'file'
  },
  compressHTML: false
});