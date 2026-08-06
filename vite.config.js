// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';
import { projectsData } from './src/data/projectsData';

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://estiguar.vercel.app', // Reemplaza con tu dominio real
      routes: [
        '/',
        ...projectsData.map((p) => `/projects/${p.slug}`),
      ],
    }),
  ],
});