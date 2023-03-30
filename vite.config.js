import { defineConfig } from 'vite';
import postcssImportSync from 'postcss-import-sync';

export default defineConfig({
  css: {
    modules: {
      auto: true,
      localsConvention: 'camelCaseOnly',
    }
  },
  postcss: {
    plugins: [
      postcssImportSync(),
    ],
    include: [
      './styles/root.css',
      './styles/reset.css',
      './styles/main-phones.css',
      './styles/animations.css',
      './styles/modal.css',
      './tablets.css',
      './laptops.css',
      './desktops.css'
    ]
  }
});