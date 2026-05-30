// src/components/Projects.jsx
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { FaGithub, FaExternalLinkAlt, FaEye, FaLaptopCode } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "WeProm MX | Marketing y Publicidad Digital",
    description: "Marketing Digital Estratégico. Desarrollo de alta fidelidad basado en Figma.",
    fullDesc: "Ecosistema digital principal para marketing y publicidad estratégica. Diseño complejo basado en Figma con alta fidelidad y animaciones fluidas.",
    stack: "React.js, Tailwind CSS, Framer Motion, Figma UI/UX, Vercel, npm",
    image: "/images/hero-wepromx.png",
    github: null,
    demo: "https://weprom-ventura-figma-dising.vercel.app",
    aosDelay: 150,
  },
  {
    id: 2,
    title: "WeProm | División de Artículos Promocionales",
    description: "E-commerce & Dashboard Administrativo. Gestión internacional de artículos promocionales.",
    fullDesc: "Plataforma profesional con Dashboard administrativo para la gestión de artículos promocionales en México. Incluye panel de control moderno y transiciones premium.",
    stack: "React.js, Tailwind CSS, Node.js, Supabase, Vercel",
    image: "/images/hero-promocionales.png",
    github: null,
    demo: "https://promocionales.weprom.mx/",
    aosDelay: 50,
  },
  {
    id: 3,
    title: "WeProm Europe",
    description: "Corporate Site & CMS Autogestionable para el mercado en París.",
    fullDesc: "Sitio institucional para el mercado europeo (París). Blog autogestionable con Sanity Studio, arquitectura elegante y optimización de hosting en WPX.",
    stack: "React.js, Tailwind, Sanity CMS, WPX Net, Canva Design",
    image: "/images/hero-wepromeurope.png",
    github: null,
    demo: "https://wepromeurope.com/",
    aosDelay: 100,
  },
  {
    id: 4,
    title: "Ambiqua Landing",
    description: "Landing page moderna y responsive para Ambiqua, solución de riego inteligente.",
    fullDesc: "Landing page moderna y responsive para Ambiqua, solución de riego inteligente. Desarrollada con HTML, CSS y JS, enfocada en accesibilidad y UX.",
    stack: "HTML, CSS, JavaScript, Responsive, Vercel",
    image: "/images/hero-ambiqua.png",
    github: "https://github.com/jhon-henao13/Ambiqua-Landing",
    demo: "https://henao-ambiqua.vercel.app",
    aosDelay: 100,
  },
  {
    id: 5,
    title: "Ambiqua App IoT",
    description: "Aplicación web progresiva Full-Stack para monitorear y gestionar cultivos en tiempo real.",
    fullDesc: "Aplicación web progresiva Full-Stack para monitorear y gestionar cultivos en tiempo real. Integra sensores IoT (ESP32), gráficas con Chart.js, dashboard administrativo y control de riego vía MQTT.",
    stack: "Flask, Python, MySQL, Chart.js, MQTT, PWA",
    image: "/images/hero-ambiqua-app.png",
    github: "https://github.com/jhon-henao13/Ambiqua",
    demo: "https://henao-ambiqua.vercel.app",
    aosDelay: 100,
  },
  {
    id: 6,
    title: "Grupo Élite SaaS (AI EdTech)",
    description: "Plataforma SaaS avanzada para preparación ICFES con Mentor IA (Llama 3).",
    fullDesc: "Plataforma SaaS avanzada para la preparación de pruebas de estado de Colombia (ICFES). Integra un Mentor IA (Llama 3) para análisis de métricas, estrategias de estudio personalizadas y simulacros interactivos con retroalimentación en tiempo real.",
    stack: "Python / Flask, MySQL, Llama 3 (Groq), Chart.js, Tailwind CSS, PWA",
    image: "/images/mockup-dashboard2.webp",
    github: "#",
    demo: "https://grupoelite.pythonanywhere.com",
    aosDelay: 200,
  },
  {
    id: 7,
    title: "Syslity",
    description: "Landing page corporativa para soporte técnico y venta de equipos.",
    fullDesc: "Landing page corporativa para empresa de soporte técnico, mantenimiento y comercialización de equipos de cómputo. Diseño enfocado en claridad, confianza y estructura profesional.",
    stack: "HTML, CSS, JS, tsParticles.js, AOS.js, Vercel, Font Awesome",
    image: "/images/hero-syslity.png",
    github: "https://github.com/jhon-henao13/Syslity-Landing",
    demo: "https://syslity.vercel.app",
    aosDelay: 200,
  },
  {
    id: 8,
    title: "Pionix",
    description: "Landing page institucional para gestión de eventos y servicios técnicos.",
    fullDesc: "Landing page institucional para empresa de gestión de eventos y servicios técnicos. Unifica dos líneas de negocio en una presentación visual coherente, moderna y adaptable.",
    stack: "HTML, CSS, JS, tsParticles.js, AOS.js, Vercel, Font Awesome",
    image: "/images/hero-pionix.jpg",
    github: "https://github.com/jhon-henao13/Pionix",
    demo: "https://jhon-henao13.github.io/Pionix-Landing",
    aosDelay: 300,
  },
  {
    id: 9,
    title: "Socialize",
    description: "Red social con registro, publicaciones, likes, comentarios, seguidores y mensajería.",
    fullDesc: "Red social desarrollada con PHP y MySQL que permite registro de usuarios, creación de perfiles, publicaciones, likes, comentarios, sistema de seguidores y mensajería privada. Implementa seguridad básica, diseño responsive y subida de imágenes.",
    stack: "PHP, MySQL, HTML, CSS, JS, Bootstrap, XAMPP",
    image: "/images/hero-socialize.jpeg",
    github: "https://github.com/jhon-henao13/Socialize",
    demo: null,
    aosDelay: 400,
  },
  {
    id: 10,
    title: "Socialis",
    description: "Plataforma de foros y comunidad online con autenticación y blogs.",
    fullDesc: "Plataforma de foros y comunidad online con sistema de autenticación, publicaciones tipo blog, categorías, comentarios y perfiles de usuario. Construida con Flask, MySQL, HTML, CSS y JavaScript.",
    stack: "Flask, Python, MySQL, HTML, CSS, JavaScript, Auth Login",
    image: "/images/hero-socialis.png",
    github: "https://github.com/jhon-henao13/Foro_Socialis_2",
    demo: "https://estiguar15.pythonanywhere.com/",
    aosDelay: 300,
  },
  {
    id: 11,
    title: "Vitalis",
    description: "Plataforma de telemedicina y monitoreo de salud con gráficas y alertas.",
    fullDesc: "Plataforma de telemedicina y monitoreo de salud con panel de usuario para registro de métricas, alertas personalizadas y gráficas profesionales con Chart.js. Incluye login seguro, formularios inteligentes y dashboard médico-paciente.",
    stack: "Flask, Python, MySQL, Chart.js, HTML, CSS, JS",
    image: "/images/hero-vitalis.png",
    github: "https://github.com/jhon-henao13/vitalis",
    demo: "https://estiguar16.pythonanywhere.com",
    aosDelay: 400,
  },
  {
    id: 12,
    title: "Clipzy",
    description: "Aplicación PWA para descargar videos y audio de múltiples plataformas.",
    fullDesc: "Aplicación web progresiva (PWA) para descargar videos y audio de múltiples plataformas utilizando yt-dlp. Permite descargas con solo un enlace, sin marca de agua y en la máxima calidad disponible.",
    stack: "Flask, Python, yt-dlp, Tailwind, PWA, Koyeb",
    image: "/images/hero-clipzy.png",
    github: "https://github.com/jhon-henao13/Clipzy",
    demo: "https://clipzy.koyeb.app",
    aosDelay: 100,
  },
  {
    id: 13,
    title: "Chatbot Política",
    description: "Chatbot conversacional con OpenAI para análisis político.",
    fullDesc: "Chatbot conversacional especializado en análisis político, integrando la API de OpenAI para generar respuestas contextualizadas. Incluye interfaz simple, manejo de sesiones y moderación básica de contenido.",
    stack: "Python, OpenAI API, Flask, Frontend",
    image: "/images/vector.png",
    github: "https://github.com/jhon-henao13/chatbot-politica",
    demo: null,
    aosDelay: 500,
  },
];

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="proyectos" className="py-24 px-6 relative overflow-hidden bg-transparent">
      {/* Luz ambiental de fondo */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#10D589]/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Encabezado Principal */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white flex items-center justify-center gap-3 tracking-tight">
            <FaLaptopCode className="text-[#10D589] text-3xl md:text-4xl" />
            Proyectos <span className="text-[#10D589] drop-shadow-[0_0_15px_rgba(16,213,137,0.2)]">Destacados</span>
          </h2>
          <div className="h-1 w-20 bg-[#10D589] mx-auto mt-4 rounded-full"></div>
          <p className="text-[#ccc] text-lg md:text-xl mt-4 max-w-3xl mx-auto font-normal opacity-80">
            Una selección de desarrollos reales, profesionales y funcionales. <span className="text-[#10D589] font-mono text-sm block sm:inline sm:ml-2">[ Full-Stack · IoT · UI/UX ]</span>
          </p>
        </div>

        {/* Grid de Tarjetas de Proyectos */}
        {/* Grid de Tarjetas de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className="group relative flex flex-col h-full bg-[#1e2023]/25 backdrop-blur-xl border border-white/[0.04] rounded-2xl overflow-hidden shadow-[0_24px_60px_-15px_rgba(0,0,0,0.8)] hover:border-[#10D589]/40 hover:shadow-[0_0_40px_rgba(16,213,137,0.12)] transition-all duration-500 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={project.aosDelay}
            >
              {/* Línea de iluminación sutil superior tipo Cyberpunk */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#10D589]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Contenedor de Imagen con Escala Cinemática */}
              <div className="relative h-52 w-full overflow-hidden bg-[#000a08]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.9] group-hover:brightness-[1.05]" 
                />
                
                {/* Capas de Degradados de profundidad técnica */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#01110e] via-[#01110e]/40 to-transparent opacity-90"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#000a08]/50 to-transparent opacity-40"></div>
                
                {/* Indicador de Tipo de Proyecto - badge dinámico premium */}
                <span className="absolute top-4 left-4 bg-black/50 backdrop-blur-md border border-white/10 text-white/60 font-mono text-[10px] px-2.5 py-1 rounded-full uppercase tracking-widest">
                  {project.stack.includes("IoT") ? "⚡ IoT/Hardware" : project.stack.includes("Llama 3") || project.stack.includes("OpenAI") ? "🤖 AI Solution" : "🌐 Full-Stack"}
                </span>

                {/* Capa de acción hover refinada */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                  <span className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#10D589] text-[#001E1A] font-extrabold text-sm shadow-[0_0_20px_rgba(16,213,137,0.4)] transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 ease-out">
                    <FaEye className="text-base" /> Inspeccionar Arquitectura
                  </span>
                </div>
              </div>

              {/* Contenido Técnico de la Tarjeta */}
              <div className="p-6 flex flex-col flex-grow relative z-10">
                <h3 className="text-white text-xl font-bold tracking-tight mb-2 line-clamp-1 group-hover:text-[#10D589] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[#ccc]/70 text-sm leading-relaxed mb-6 line-clamp-2 font-normal">
                  {project.description}
                </p>

                {/* Tags de Tecnologías Estilo Consola */}
                <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                  {project.stack.split(",").slice(0, 4).map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="bg-white/[0.02] border border-white/5 text-white/50 text-[10px] font-mono px-2.5 py-1 rounded-md tracking-tight group-hover:border-[#10D589]/10 group-hover:text-white/70 transition-colors duration-300"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                  {project.stack.split(",").length > 4 && (
                    <span className="text-white/30 text-[10px] font-mono px-1 py-1">
                      +{project.stack.split(",").length - 4}
                    </span>
                  )}
                </div>

                {/* Enlaces de Acción Inferiores */}
                <div className="flex gap-3 pt-4 border-t border-white/[0.04]">
                  {project.github && project.github !== "#" ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 text-white py-2.5 rounded-xl font-medium text-xs transition-all duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub className="text-sm opacity-80" /> Source Code
                    </a>
                  ) : project.github === "#" ? (
                    <span
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-white/[0.01] border border-white/[0.02] text-white/20 py-2.5 rounded-xl font-medium text-xs cursor-not-allowed select-none"
                      onClick={(e) => e.stopPropagation()}
                      title="Repositorio Privado"
                    >
                      <FaGithub className="text-sm opacity-30" /> Enterprise Code
                    </span>
                  ) : null}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-[#10D589] text-[#001E1A] hover:bg-[#15e695] py-2.5 rounded-xl font-bold text-xs shadow-md transition-all duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Deployment <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>

      {/* Modal Desplegable */}
      <ProjectModal isOpen={modalOpen} project={selectedProject} onClose={closeModal} />
    </section>
  );
};

export default Projects;