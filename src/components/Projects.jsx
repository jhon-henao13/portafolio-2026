// src/components/Projects.jsx
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { FaGithub, FaExternalLinkAlt, FaEye, FaLaptopCode } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "WeProm MX | Sede LATAM",
    description: "Plataforma corporativa de alta fidelidad UI/UX para una de las agencias de marketing líderes en México. Desarrollo Pixel-Perfect basado en físicas y animaciones complejas.",
    fullDesc: "Ecosistema web corporativo premium de 9 secciones especializado para WeProm LATAM. Desarrollo Pixel-Perfect que traduce diseños complejos de Figma en código interactivo de alto rendimiento. Implementa animaciones avanzadas y micro-interacciones basadas en cálculos matemáticos y físicas fluidas, logrando una experiencia inmersiva sin sacrificar la optimización SEO ni los tiempos de carga.",
    stack: "React.js, Tailwind CSS, Framer Motion, Figma UI/UX, Vercel, Vite, Canva Design, npm",
    image: "/images/hero-wepromx.png",
    github: null,
    demo: "https://weprom-ventura-figma-dising.vercel.app",
    aosDelay: 150,
  },
  {
    id: 2,
    title: "WeProm | Artículos Promocionales",
    description: "E-commerce corporativo y CMS administrativo a medida. Arquitectura Full-Stack con control de inventario y transiciones premium.",
    fullDesc: "Plataforma web comercial y administrativa para la división internacional de artículos promocionales de WeProm LATAM. Integra una landing page interactiva de alta conversión con un Dashboard Administrativo privado (CRUD) para la gestión autónoma de catálogos y proyectos. Incluye formularios de contacto con validación en tiempo real, transiciones de estado fluidas y persistencia de datos segura mediante una arquitectura en la nube.",
    stack: "React.js, Tailwind CSS, Node.js, Supabase, Vercel, Canva Design, Vite, npm",
    image: "/images/hero-promocionales.png",
    github: null,
    demo: "https://promocionales.weprom.mx/",
    aosDelay: 50,
  },
  {
    id: 3,
    title: "WeProm Europe | París",
    description: "Corporate Hub internacional y CMS autogestionable para el corredor comercial Europa-América Latina. Optimización de infraestructura empresarial.",
    fullDesc: "Sitio institucional premium desarrollado para la sede europea en París de un grupo con más de 35 años de trayectoria intercontinental. El proyecto unifica el diseño corporativo de Canva con un sistema de gestión de contenidos (CMS) headless mediante Sanity Studio, permitiendo la publicación dinámica de insights globales. Cuenta con una arquitectura de red optimizada específicamente para servidores WPX, garantizando máxima disponibilidad y velocidad en mercados internacionales.",
    stack: "React.js, Tailwind, Sanity CMS, WPX Net, Canva Design, Vite, npm",
    image: "/images/hero-wepromeurope.png",
    github: null,
    demo: "https://wepromeurope.com/",
    aosDelay: 100,
  },
  {
    id: 4,
    title: "Ambiqua Landing",
    description: "Landing page corporativa de alta conversión para tecnología agrotech. Enfoque estricto en UX/UI interactivo y accesibilidad.",
    fullDesc: "Interfaz web de presentación para Ambiqua, una solución de ingeniería enfocada en el riego inteligente. Desarrollada bajo metodologías ágiles utilizando estándares modernos de diseño web nativo, priorizando la accesibilidad universal, semántica HTML5 limpia y una experiencia de usuario (UX) fluida y adaptativa en cualquier resolución de pantalla móvil o de escritorio.",
    stack: "HTML, CSS, JavaScript, Responsive, Vercel",
    image: "/images/hero-ambiqua.png",
    github: "https://github.com/jhon-henao13/Ambiqua-Landing",
    demo: "https://henao-ambiqua.vercel.app",
    aosDelay: 100,
  },
  {
    id: 5,
    title: "Ambiqua App IoT",
    description: "Ecosistema Full-Stack IoT para telemetría agrícola. Telecontrol de hardware y procesamiento de datos en tiempo real.",
    fullDesc: "Aplicación Web Progresiva (PWA) de nivel industrial para el monitoreo y automatización de cultivos a gran escala. Conecta hardware embebido (ESP32) mediante el protocolo de mensajería liviana MQTT para la activación de actuadores hidráulicos en tiempo real. Dispone de un panel analítico interactivo que procesa flujos de datos asíncronos y los renderiza en gráficas reactivas del lado del cliente.",
    stack: "Flask, Python, MySQL, Chart.js, MQTT, PWA",
    image: "/images/hero-ambiqua-app.png",
    github: "https://github.com/jhon-henao13/Ambiqua",
    demo: "https://henao-ambiqua.vercel.app",
    aosDelay: 100,
  },
  {
    id: 6,
    title: "Grupo Élite SaaS (AI EdTech)",
    description: "Plataforma de software educativo integrado con Modelos de Lenguaje Avanzados (LLM) para analítica de aprendizaje personalizado.",
    fullDesc: "SaaS arquitectónicamente diseñado para la optimización académica en pruebas de estado nacionales (ICFES). Implementa un motor de Inteligencia Artificial mediante Llama 3 (Groq API) configurado como un mentor cognitivo personalizado. La plataforma procesa estadísticas de simulacros masivos, predice áreas de mejora mediante algoritmos de ciencia de datos y genera planes de contingencia interactivos con retroalimentación inmediata.",
    stack: "Python, Flask, MySQL, Llama 3 (Groq), Chart.js, Tailwind, PWA",
    image: "/images/mockup-dashboard2.webp",
    github: "#",
    demo: "https://grupoelite.pythonanywhere.com",
    aosDelay: 200,
  },

  {
    id: 7,
    title: "Clipzy Media PWA",
    description: "Aplicación Web Progresiva multimedia de alta velocidad orientada al procesamiento en la nube y descargas asíncronas.",
    fullDesc: "Herramienta de software en la nube optimizada como PWA (Progressive Web App) para la extracción y transcodificación de archivos multimedia en alta definición de forma concurrente. Diseñada con una interfaz minimalista hiperrápida, consume procesos de servidor asíncronos para entregar descargas procesadas sin pérdida de calidad y con nula latencia para el usuario.",
    stack: "Flask, Python, yt-dlp, Tailwind, PWA, Koyeb",
    image: "/images/hero-clipzy.png",
    github: "https://github.com/jhon-henao13/Clipzy",
    demo: "https://clipzy.koyeb.app",
    aosDelay: 100,
  },

  {
    id: 8,
    title: "Socialize Network",
    description: "Plataforma social monolítica con mensajería privada, control de sesiones seguro y sistemas de interacción asíncrona.",
    fullDesc: "Aplicación web social que implementa los fundamentos de ingeniería de software para plataformas comunitarias. Cuenta con pasarelas de autenticación cifrada, control de perfiles dinámicos, hilos de discusión interactivos, algoritmos para contadores de interacciones (likes/comentarios) y un núcleo de mensajería privada entre usuarios, todo construido bajo una arquitectura relacional limpia.",
    stack: "PHP, MySQL, HTML, CSS, JS, Bootstrap, XAMPP",
    image: "/images/hero-socialize.jpeg",
    github: "https://github.com/jhon-henao13/Socialize",
    demo: null,
    aosDelay: 400,
  },

  {
    id: 9,
    title: "Syslity Tech",
    description: "Landing page empresarial de servicios TI. Diseño enfocado en la conversión corporativa y la confianza de marca.",
    fullDesc: "Portal corporativo diseñado para una firma especializada en soporte de infraestructura, mantenimiento preventivo y distribución tecnológica. La interfaz equilibra la solidez institucional con elementos dinámicos interactivos de partículas fluidas, estructurando los servicios TI en un embudo visual claro que impulsa la captación de clientes potenciales B2B.",
    stack: "HTML, CSS, JS, tsParticles.js, AOS.js, Vercel, Font Awesome",
    image: "/images/hero-syslity.png",
    github: "https://github.com/jhon-henao13/Syslity-Landing",
    demo: "https://syslity.vercel.app",
    aosDelay: 200,
  },
  {
    id: 10,
    title: "Pionix Events",
    description: "Plataforma institucional híbrida con segmentación visual avanzada de modelos de negocio cruzados.",
    fullDesc: "Desarrollo web corporativo para una empresa líder en gestión de eventos masivos y soporte de ingeniería técnica. El reto técnico consistió en unificar dos unidades de negocio de naturalezas distintas bajo una misma identidad visual coherente y unificada, utilizando layouts asimétricos, optimización de recursos estáticos y animaciones controladas al hacer scroll.",
    stack: "HTML, CSS, JS, tsParticles.js, AOS.js, Vercel, Font Awesome",
    image: "/images/hero-pionix.jpg",
    github: "https://github.com/jhon-henao13/Pionix",
    demo: "https://jhon-henao13.github.io/Pionix-Landing",
    aosDelay: 300,
  },
  
  {
    id: 11,
    title: "Socialis Forums",
    description: "Comunidad y foro de discusión digital de alto rendimiento con taxonomías dinámicas y login seguro.",
    fullDesc: "Plataforma Web Full-Stack concebida para la creación y debate de blogs técnicos y comunidades online. Estructurada mediante un backend robusto que administra sesiones de usuario, gestiona de forma segura el almacenamiento en bases de datos relacionales, y despliega foros clasificados por categorías jerárquicas con capacidades de moderación y feed personalizado.",
    stack: "Flask, Python, MySQL, HTML, CSS, JavaScript, Auth Login",
    image: "/images/hero-socialis.png",
    github: "https://github.com/jhon-henao13/Foro_Socialis_2",
    demo: "https://estiguar15.pythonanywhere.com/",
    aosDelay: 300,
  },
  {
    id: 12,
    title: "Vitalis Telemedicina",
    description: "Plataforma de e-Health para el monitoreo clínico remoto. Dashboards reactivos con analítica de constantes vitales.",
    fullDesc: "Software de salud digital (Telemedicina) enfocado en la comunicación médico-paciente y el seguimiento preventivo. Dispone de un panel clínico inteligente donde el usuario registra métricas corporales, las cuales se analizan en tiempo real mediante un motor gráfico interactivo que genera alertas automáticas ante anomalías críticas, priorizando la privacidad y la experiencia UX intuitiva.",
    stack: "Flask, Python, MySQL, Chart.js, HTML, CSS, JS",
    image: "/images/hero-vitalis.png",
    github: "https://github.com/jhon-henao13/vitalis",
    demo: "https://estiguar16.pythonanywhere.com",
    aosDelay: 400,
  },


  {
    id: 13,
    title: "AI Politics Chatbot",
    description: "Asistente cognitivo inteligente entrenado para el procesamiento de lenguaje natural y análisis político de datos contextuales.",
    fullDesc: "Agente conversacional especializado desarrollado para la interpretación contextualizada de datos analíticos del entorno político. Integra APIs avanzadas de OpenAI configuradas mediante ingeniería de prompts específica para evitar alucinaciones, mitigando riesgos informativos mediante capas de moderación automatizada y control de estados persistentes durante la sesión.",
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
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
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
              <div className="relative h-54 w-full overflow-hidden bg-[#000a08]">
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