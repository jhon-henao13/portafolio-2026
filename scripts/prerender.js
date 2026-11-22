// scripts/prerender.js
import fs from 'fs';
import path from 'path';
import { render } from '../src/entry-server.jsx'; // Asegúrate de que Vite pueda procesar JSX; si no, usa .js
import { projectsData } from '../src/data/projectsData.js';

const routes = [
  { path: '/', title: 'Jhon Estiguar Henao | Desarrollador Full-Stack IA & IoT en Cali', description: 'Portafolio de Jhon Estiguar Henao...' }, // Acorta la descripción aquí (máx. 155 chars)
  ...projectsData.map(p => ({
    path: `/projects/${p.slug}`,
    title: `${p.title} | Jhon Estiguar Henao`,
    description: (p.detailedDescription || p.description || '').replace(/<[^>]+>/g, '').slice(0, 155).trim() + '...',
    image: `https://estiguar.dev${p.image}`,
    url: `https://estiguar.dev/projects/${p.slug}`
  }))
];

const template = fs.readFileSync('dist/index.html', 'utf-8');

for (const route of routes) {
  const { html: bodyHtml } = render(route.path);

  // 1. Reemplazar el div root vacío con el HTML renderizado
  let pageHtml = template.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);

  // 2. Limpiar metadatos existentes en el head (título, descripción, canonical, og)
  pageHtml = pageHtml.replace(/<title>.*?<\/title>/gi, '');
  pageHtml = pageHtml.replace(/<meta\s+name=["']description["'][^>]*>/gi, '');
  pageHtml = pageHtml.replace(/<link\s+rel=["']canonical["'][^>]*>/gi, '');
  pageHtml = pageHtml.replace(/<meta\s+property=["']og:title["'][^>]*>/gi, '');
  pageHtml = pageHtml.replace(/<meta\s+property=["']og:description["'][^>]*>/gi, '');
  pageHtml = pageHtml.replace(/<meta\s+property=["']og:url["'][^>]*>/gi, '');

  // 3. Construir el bloque SEO específico para esta ruta
  const seoBlock = `
    <title>${route.title}</title>
    <meta name="description" content="${route.description}" />
    <link rel="canonical" href="https://estiguar.dev${route.path}" />
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.description}" />
    <meta property="og:url" content="https://estiguar.dev${route.path}" />
    ${route.image ? `<meta property="og:image" content="${route.image}" />` : ''}
  `;

  // 4. Insertar el bloque justo antes de cerrar </head>
  pageHtml = pageHtml.replace('</head>', `${seoBlock}\n</head>`);

  // 5. Escribir el archivo en la ruta correspondiente
  const outputPath = route.path === '/'
    ? path.join('dist', 'index.html')
    : path.join('dist', route.path.slice(1), 'index.html');

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, pageHtml);
  console.log(`✅ Prerenderizado: ${route.path}`);
}

console.log('🚀 Prerenderizado completado.');