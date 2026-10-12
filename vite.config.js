// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createVitePlugin } from '@lzwme/prerender-kit';
import { projectsData } from './src/data/projectsData.js';
import fs from 'fs';

// Detectar el entorno de ejecución
const isVercel = process.env.VERCEL === '1';
const isWindows = process.platform === 'win32';

// Obtener la ruta del ejecutable de Chromium según el entorno
async function getExecutablePath() {
  if (isVercel) {
    // En Vercel (Linux serverless), usar @sparticuz/chromium
    const chromium = await import('@sparticuz/chromium');
    return chromium.default.executablePath();
  }

  if (isWindows) {
    // En Windows local, buscar Chrome instalado en las rutas comunes
    const possiblePaths = [
      'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    ];
    for (const p of possiblePaths) {
      if (fs.existsSync(p)) return p;
    }
    throw new Error(
      'No se encontró Chrome en Windows. Instálalo o especifica la ruta manualmente en vite.config.js.'
    );
  }

  // En otros entornos (Linux local, Mac), dejar que @lzwme/prerender-kit use su configuración por defecto
  return undefined;
}

// Obtener los argumentos de lanzamiento según el entorno
async function getLaunchArgs() {
  if (isVercel) {
    const chromium = await import('@sparticuz/chromium');
    return [...chromium.default.args, '--no-sandbox', '--disable-setuid-sandbox'];
  }
  return [];
}

export default defineConfig(async () => {
  const executablePath = await getExecutablePath();
  const args = await getLaunchArgs();

  return {
    plugins: [
      react(),
      createVitePlugin({
        routes: ['/', ...projectsData.map(p => `/projects/${p.slug}`)],
        concurrency: 5,
        delay: 2000,
        waitUntil: 'networkidle0',
        waitForSelector: 'h1',
        launchOptions: {
          executablePath,
          args,
          headless: true,
        },
      }),
    ],
  };
});