// src/components/Skills.jsx
import { useState } from "react";

const skillsData = [
  { name: "HTML5", img: "/images/html.png", category: "frontend", tooltip: "Lenguaje de marcado" },
  { name: "CSS3", img: "/images/css.png", category: "frontend", tooltip: "Estilos modernos y responsivos" },
  { name: "JavaScript", img: "/images/javascript.png", category: "frontend", tooltip: "Interactividad en cliente" },
  { name: "React", img: "/images/react.png", category: "frontend", tooltip: "Librería frontend" },
  { name: "Vue.js", img: "/images/vue.png", category: "frontend", tooltip: "Framework progresivo" },
  { name: "Flutter", img: "/images/flutter.png", category: "iot", tooltip: "Apps móviles nativas híbridas" },
  { name: "Chart.js", img: "/images/chartjs.png", category: "iot", tooltip: "Gráficas y visualizaciones" },
  { name: "Bootstrap", img: "/images/bootstrap.png", category: "frontend", tooltip: "Framework CSS tradicional" },
  { name: "Tailwind", img: "/images/tailwind.png", category: "frontend", tooltip: "Framework utility-first" },
  { name: "Figma", img: "/images/figma.png", category: "iot", tooltip: "Diseño de interfaces UI/UX" },
  { name: "Python", img: "/images/python.png", category: "backend", tooltip: "Lenguaje multipropósito & IA" },
  { name: "FastAPI", img: "/images/fastapi.png", category: "backend", tooltip: "Framework minimalista para APIs" },
  { name: "Flask", img: "/images/flask.png", category: "backend", tooltip: "Microframework web modular" },
  { name: "PHP", img: "/images/php.png", category: "backend", tooltip: "Desarrollo backend del lado del servidor" },
  { name: "Socket.IO", img: "/images/socketio.png", category: "iot", tooltip: "Comunicación bidireccional real-time" },
  { name: "MySQL", img: "/images/mysql.png", category: "iot", tooltip: "Base de datos relacional SQL" },
  { name: "MQTT", img: "/images/mqtt.png", category: "iot", tooltip: "Mensajería ligera para IoT" },
  { name: "Vercel", img: "/images/vercel.png", category: "iot", tooltip: "Despliegue y hosting rápido en la nube" },
  { name: "Docker", img: "/images/docker.png", category: "iot", tooltip: "Contenedores y microservicios" },
  { name: "Anaconda", img: "/images/anaconda.png", category: "backend", tooltip: "Gestión de entornos científicos de Python" },
  { name: "Git", img: "/images/git.png", category: "iot", tooltip: "Control de versiones distribuido" },
  { name: "NPM", img: "/images/npm.png", category: "iot", tooltip: "Gestión de dependencias de Node" },
  { name: "Apache", img: "/images/apache.png", category: "iot", tooltip: "Servidor HTTP estable" },
  { name: "Bash", img: "/images/bash.png", category: "iot", tooltip: "Automatización y scripting Linux" },
  { name: "WordPress", img: "/images/wordpress.png", category: "iot", tooltip: "Ecosistema CMS monolítico" },
  { name: "Kali Linux", img: "/images/kali.png", category: "iot", tooltip: "Suite para auditorías de seguridad" },
  { name: "Canva", img: "/images/canva.png", category: "iot", tooltip: "Composición gráfica rápida" },
  { name: "Lenguaje C", img: "/images/c.png", category: "iot", tooltip: "Programación de bajo nivel y microcontroladores" },
  { name: "Terminal", img: "/images/terminal.png", category: "iot", tooltip: "Línea de comandos avanzada" },
  { name: "BurpSuite", img: "/images/burpsuite.png", category: "iot", tooltip: "Análisis y pentesting de aplicaciones web" },
];

const Skills = () => {
  const [filter, setFilter] = useState("all");

  // Filtrar primero los elementos individuales
  const baseFiltered = filter === "all" 
    ? skillsData 
    : skillsData.filter(item => item.category === filter);

  // Duplicar el resultado del filtro para asegurar que el loop infinito siempre funcione sin huecos
  const displayItems = [...baseFiltered, ...baseFiltered, ...baseFiltered];

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden" data-aos="fade-up">
      {/* Luces decorativas ambientales */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#10D589]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Tecnologías & <span className="text-[#10D589] drop-shadow-[0_0_15px_rgba(16,213,137,0.2)]">Herramientas</span>
          </h2>
          <div className="h-1 w-20 bg-[#10D589] mx-auto mt-4 rounded-full"></div>
          <p className="text-[#ccc] text-lg md:text-xl mt-4 max-w-2xl mx-auto font-normal opacity-80">
            Especialización técnica dividida por capas arquitectónicas.
          </p>
        </div>

        {/* Filtros Premium */}
        <div className="flex justify-center gap-3 mb-16 flex-wrap">
          {[
            { id: "all", label: "Todas" },
            { id: "frontend", label: "Frontend" },
            { id: "backend", label: "Backend & IA" },
            { id: "iot", label: "IoT & Tools" }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold tracking-wide border transition-all duration-300 ${
                filter === cat.id 
                  ? "bg-[#10D589] text-[#001E1A] border-[#10D589] shadow-[0_0_20px_rgba(16,213,137,0.3)] scale-105" 
                  : "bg-[#001E1A]/60 text-white border-[#10D589]/20 backdrop-blur-md hover:border-[#10D589]/60 hover:bg-[#10D589]/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Slider Infinito Premium */}
      <div className="w-full overflow-hidden py-6 relative before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 sm:before:w-40 before:bg-gradient-to-r before:from-[#001E1A] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 sm:after:w-40 after:bg-gradient-to-l after:from-[#001E1A] after:to-transparent">
        <div className="flex gap-6 w-max animate-scroll-skills hover:animation-pause py-4">
          {displayItems.map((skill, idx) => (
            <div 
              key={idx} 
              className="w-36 h-40 bg-[#1e2023]/40 backdrop-blur-md border border-white/5 rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-xl transition-all duration-300 hover:border-[#10D589]/40 hover:shadow-[0_0_25px_rgba(16,213,137,0.15)] hover:-translate-y-2 relative group cursor-default select-none"
            >
              <div className="w-14 h-14 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                <img src={skill.img} alt={skill.name} className="max-w-full max-h-full object-contain filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]" />
              </div>
              <p className="font-semibold text-sm text-white/90 tracking-wide">{skill.name}</p>
              
              {/* Tooltip flotante Premium corregido */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#001E1A] border border-[#10D589]/30 text-white text-xs px-3 py-2 rounded-xl shadow-2xl opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 whitespace-nowrap pointer-events-none z-30">
                <span className="text-[#10D589] font-bold">●</span> {skill.tooltip}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;