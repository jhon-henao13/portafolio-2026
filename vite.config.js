// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createVitePlugin } from '@lzwme/prerender-kit';
import { projectsData } from './src/data/projectsData.js';

export default defineConfig({
  plugins: [
    react(),
    createVitePlugin({
      routes: ['/', ...projectsData.map(p => `/projects/${p.slug}`)],
      concurrency: 5, // Renderiza 5 páginas en paralelo
    }),
  ],
});