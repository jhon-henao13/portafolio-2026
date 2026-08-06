// src/sitemapGenerator.js
import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { projectsData } from './data/projectsData.js';

const hostname = 'https://estiguar.vercel.app';
const routes = ['/', ...projectsData.map(p => `/projects/${p.slug}`)];

// Agrega este log para verificar
console.log('📋 Generando sitemap con rutas:', routes);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `
  <url>
    <loc>${hostname}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

const outputPath = resolve(process.cwd(), 'public/sitemap.xml');
writeFileSync(outputPath, sitemap);
console.log('✅ Sitemap generado en:', outputPath);