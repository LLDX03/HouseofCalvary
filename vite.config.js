import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        portfolio: resolve(__dirname, 'portfolio.html'),
        artists: resolve(__dirname, 'artists.html'),
        contact: resolve(__dirname, 'contact.html'),
        pricing: resolve(__dirname, 'pricing.html'),
        merch: resolve(__dirname, 'merch.html'),
        recruitment: resolve(__dirname, 'recruitment.html'),
      },
    },
  },
});
