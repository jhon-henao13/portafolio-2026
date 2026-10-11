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
      concurrency: 5,
      delay: 2000, // Espera 2 segundos después de la carga para que Helmet actualice el <head>
      waitUntil: 'networkidle0', // Espera a que no haya conexiones de red activas
      waitForSelector: 'h1', // Espera a que el <h1> del proyecto aparezca en el DOM
    }),
  ],
});