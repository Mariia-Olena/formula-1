import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ui: `${path.resolve(__dirname, './src/ui/')}`,
      pages: `${path.resolve(__dirname, './src/pages/')}`,
      services: `${path.resolve(__dirname, './src/services/')}`,
      features: `${path.resolve(__dirname, './src/features/')}`,
      utils: `${path.resolve(__dirname, './src/utils/')}`,
    },
  },
});
