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
      concurrency: 2, // Reducir concurrencia en Vercel para evitar sobrecarga de RAM
      renderEngine: 'puppeteer',
      puppeteerOptions: {
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      }
    }),
  ],
});