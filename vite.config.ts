/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import path from 'node:path';
import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
});
