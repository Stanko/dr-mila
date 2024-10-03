import tailwindcss from 'tailwindcss';

/** @type {import('vite').UserConfig} */
export default {
  server: {
    port: 1234,
    host: true,
  },
  root: './src',
  base: './',
  build: {
    outDir: '../docs',
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
};
