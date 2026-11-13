import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For GitHub Pages project sites set base to '/<repo-name>/' (see README).
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/',
  build: {
    target: 'es2019',
    minify: 'esbuild',       // minifies JS
    cssMinify: true,         // minifies CSS
    sourcemap: false,
    rollupOptions: {
      output: { manualChunks: { react: ['react', 'react-dom'] } }
    }
  }
});
