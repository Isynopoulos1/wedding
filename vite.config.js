
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/wedding/',
  plugins: [
    react(), viteStaticCopy({
      targets: [
        {
          src: 'src/fonts/*',
          dest: 'fonts'
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, './src/utils'),
    }
  },
  server: {
    port: 3000,
  }
});
