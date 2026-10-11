// scripts/fix-seo.js
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve } from 'path';
import { projectsData } from '../src/data/projectsData.js';

console.log('\n🔧 Inyectando SEO definitivo en los HTML pre-renderizados...');

const hostname = 'https://estiguar.vercel.app';

projectsData.forEach(project => {
  const filePath = resolve(process.cwd(), `dist/projects/${project.slug}/index.html`);

  if (existsSync(filePath)) {
    let html = readFileSync(filePath, 'utf-8');

    // Extraer descripción limpia y truncarla para SEO (max 155 chars)
    const rawDescription = project.detailedDescription || project.description || '';
    const description = rawDescription.replace(/<[^>]+>/g, '').slice(0, 155).trim() + '...';
    
    const title = `${project.title} | Jhon Estiguar Henao`;
    const url = `${hostname}/projects/${project.slug}`;

    // 1. ELIMINAR cualquier title, description o canonical existente (limpieza profunda)
    html = html.replace(/<title\b[^>]*>.*?<\/title>/gi, '');
    html = html.replace(/<meta\b[^>]*name=["']description["'][^>]*>/gi, '');
    html = html.replace(/<meta\b[^>]*property=["']og:title["'][^>]*>/gi, '');
    html = html.replace(/<meta\b[^>]*property=["']og:description["'][^>]*>/gi, '');
    html = html.replace(/<meta\b[^>]*property=["']og:url["'][^>]*>/gi, '');
    html = html.replace(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi, '');

    // 2. CREAR el bloque SEO perfecto
    const seoBlock = `
    <!-- SEO Inyectado para Proyecto -->
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${url}" />
    <link rel="canonical" href="${url}" />
    `;

    // 3. INYECTAR justo antes de cerrar el head
    html = html.replace('</head>', `${seoBlock}\n</head>`);

    writeFileSync(filePath, html);
    console.log(`✅ SEO perfecto inyectado: ${project.slug}`);
  } else {
    console.warn(`⚠️ No se encontró el HTML para: ${project.slug}`);
  }
});

console.log('🚀 ¡Todo el SEO ha sido inyectado correctamente en dist/!');