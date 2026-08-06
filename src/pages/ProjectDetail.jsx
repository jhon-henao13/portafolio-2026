// src/pages/ProjectDetail.jsx
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCalendarAlt, FaTag } from "react-icons/fa";
import { projectsData } from "../data/projectsData";
import { useEffect, useRef } from "react";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);
  const containerRef = useRef(null);

  useEffect(() => {
    // Efecto de parallax sutil al mover el mouse
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      containerRef.current.style.setProperty('--x', x);
      containerRef.current.style.setProperty('--y', y);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h2 className="text-2xl">Proyecto no encontrado</h2>
      </div>
    );
  }

  const { title, detailedDescription, challenge, solution, results, stack, image, github, demo } = project;

  return (
    <>
      <Helmet>
        <title>{title} | Jhon Estiguar Henao</title>
        <meta name="description" content={detailedDescription.slice(0, 160)} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={detailedDescription.slice(0, 160)} />
        <meta property="og:image" content={`https://estiguar.vercel.app${image}`} />
        <meta property="og:url" content={`https://estiguar.vercel.app/projects/${slug}`} />
        <link rel="canonical" href={`https://estiguar.vercel.app/projects/${slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": title,
            "description": detailedDescription,
            "author": {
              "@type": "Person",
              "name": "Jhon Estiguar Henao"
            },
            "url": `https://estiguar.vercel.app/projects/${slug}`,
            "image": `https://estiguar.vercel.app${image}`
          })}
        </script>
      </Helmet>

      <section
        ref={containerRef}
        className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-darkBg"
        style={{
          background: `
            radial-gradient(ellipse at calc(50% + calc(var(--x, 0) * 40px)) calc(40% + calc(var(--y, 0) * 40px)), rgba(16, 213, 137, 0.08), transparent 60%),
            radial-gradient(ellipse at calc(50% - calc(var(--x, 0) * 30px)) calc(60% + calc(var(--y, 0) * 30px)), rgba(0, 102, 94, 0.06), transparent 50%),
            #001E1A
          `,
          transition: 'background 0.1s ease-out'
        }}
      >
        {/* Luces dinámicas flotantes */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#10D589]/10 rounded-full blur-[100px] animate-pulse-slow pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00665e]/15 rounded-full blur-[120px] animate-orb-drift pointer-events-none"></div>
        <div className="absolute top-3/4 left-1/2 w-80 h-80 bg-[#10D589]/5 rounded-full blur-[80px] animate-orb-drift pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Enlace de vuelta */}
          <Link to="/#proyectos" className="inline-flex items-center gap-2 text-accent hover:text-white transition-all duration-300 mb-8 group">
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Volver a proyectos
          </Link>

          {/* Título y metadatos */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              {title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
              <span className="flex items-center gap-1.5">
                <FaCalendarAlt /> 2026
              </span>
              <span className="flex items-center gap-1.5">
                <FaTag /> {stack.slice(0, 3).join(' · ')}
              </span>
            </div>
          </div>

          {/* Imagen principal con efecto glassmorphism */}
          <div className="rounded-2xl overflow-hidden mb-10 shadow-2xl border border-white/5">
            <img src={image} alt={title} className="w-full h-auto object-cover max-h-[500px] transition-transform duration-700 hover:scale-105" />
          </div>

          {/* Contenido con diseño de columnas */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Columna principal (2/3) */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
                <h3 className="text-xl font-bold text-white mb-3">Descripción</h3>
                <p className="text-textLight leading-relaxed">{detailedDescription}</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
                <h3 className="text-xl font-bold text-white mb-3">Desafío Técnico</h3>
                <p className="text-textLight leading-relaxed">{challenge}</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
                <h3 className="text-xl font-bold text-white mb-3">Solución Implementada</h3>
                <p className="text-textLight leading-relaxed">{solution}</p>
              </div>

              <div className="bg-gradient-to-r from-[#10D589]/10 to-transparent rounded-2xl p-6 border border-[#10D589]/20">
                <h3 className="text-xl font-bold text-accent mb-3">📈 Resultados</h3>
                <p className="text-textLight leading-relaxed">{results}</p>
              </div>
            </div>

            {/* Barra lateral (1/3) */}
            <div className="space-y-6">
              {/* Tecnologías */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
                <h3 className="text-lg font-bold text-white mb-4">🛠️ Stack Tecnológico</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <span key={tech} className="bg-accent/10 border border-accent/20 text-accent px-3 py-1 rounded-full text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Enlaces de acción */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5 space-y-3">
                {github && github !== "#" && (
                  <a href={github} target="_blank" rel="noopener" className="btn-primary w-full flex items-center justify-center gap-2 text-sm">
                    <FaGithub /> Ver Código Fuente
                  </a>
                )}
                {demo && (
                  <a href={demo} target="_blank" rel="noopener" className="btn-primary bg-white text-darkBg hover:bg-gray-200 w-full flex items-center justify-center gap-2 text-sm">
                    <FaExternalLinkAlt /> Visitar Demo en Vivo
                  </a>
                )}
              </div>

              {/* CTA adicional */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5 text-center">
                <p className="text-white/60 text-sm">¿Te gusta lo que ves?</p>
                <Link to="/#contacto" className="text-accent hover:text-white font-semibold transition-colors">
                  Hablemos de tu próximo proyecto →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetail;