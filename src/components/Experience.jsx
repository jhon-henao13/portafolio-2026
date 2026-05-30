// src/components/Experience.jsx
import { useEffect } from "react";
import AOS from "aos";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section id="experiencia" className="container mx-auto px-6 py-16 max-w-6xl" data-aos="fade-up">
      
      {/* Encabezado de Sección */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white flex items-center justify-center gap-3 tracking-tight">
          <FaBriefcase className="text-[#10D589] text-3xl md:text-4xl" /> 
          Experiencia <span className="text-[#10D589] drop-shadow-[0_0_15px_rgba(16,213,137,0.2)]">Profesional</span>
        </h2>
        <div className="h-1 w-20 bg-[#10D589] mx-auto mt-4 rounded-full"></div>
        <p className="text-[#ccc] text-lg md:text-xl mt-4 max-w-2xl mx-auto opacity-80 font-normal">
          Trayectoria técnica de alto rendimiento y aportes de valor estratégico.
        </p>
      </div>

      {/* Contenedor Maestro del Timeline */}
      <div className="relative mx-auto mt-12 pl-8 md:pl-0">
        
        {/* Línea Guía de Fondo - Responsive (Izquierda en mobile, Centro en Desktop) */}
        <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#10D589]/40 via-[#0a7049]/20 to-transparent md:-translate-x-1/2"></div>

        {/* Bloque de Experiencia 1 (Derecha en Desktop) */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-start" data-aos="fade-right">
          {/* Espacio vacío izquierdo en Desktop */}
          <div className="hidden md:block"></div>
          
          {/* Contenido Derecho */}
          <div className="relative">
            {/* Nodo indicador */}
            <div className="absolute -left-[38px] md:-left-[43px] top-6 w-5 h-5 rounded-full bg-[#001E1A] border-4 border-[#10D589] shadow-[0_0_10px_rgba(16,213,137,0.8)] z-10"></div>
            
            {/* Tarjeta de Contenido */}
            <div className="bg-[#1e2023]/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/5 border-l-4 border-l-[#10D589] shadow-2xl hover:border-white/10 transition-all duration-300 group">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="text-white text-xl font-bold tracking-wide group-hover:text-[#10D589] transition-colors">
                  Desarrollador Full-Stack IoT
                </h3>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-bold rounded-full bg-[#10D589]/10 text-[#10D589] border border-[#10D589]/20 self-start sm:self-auto">
                  <FaCalendarAlt /> Feb 2024 - 2025
                </span>
              </div>
              <h4 className="text-[#10D589] text-md font-semibold tracking-wider uppercase mb-4 opacity-90">
                AMBIQUA
              </h4>
              <ul className="text-[#ccc] text-sm sm:text-base space-y-3 text-justify list-none pl-0">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#10D589] mt-1.5 text-xs">◆</span>
                  <span>Lideré el desarrollo de una PWA para monitoreo agrícola integrando hardware ESP32 mediante protocolo MQTT en tiempo real.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#10D589] mt-1.5 text-xs">◆</span>
                  <span>Diseñé dashboards interactivos con Chart.js para la toma de decisiones estratégicas y control de riego automatizado.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#10D589] mt-1.5 text-xs">◆</span>
                  <span>Desarrollé la landing page corporativa global, optimizando el rendimiento SEO técnico para maximizar la captación de clientes.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bloque de Experiencia 2 (Izquierda en Desktop) */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-start" data-aos="fade-left">
          {/* Contenido Izquierdo */}
          <div className="relative order-2 md:order-1">
            {/* Nodo indicador */}
            <div className="absolute -left-[38px] md:left-auto md:-right-[39px] top-6 w-5 h-5 rounded-full bg-[#001E1A] border-4 border-[#10D589] shadow-[0_0_10px_rgba(16,213,137,0.8)] z-10"></div>
            
            {/* Tarjeta de Contenido */}
            <div className="bg-[#1e2023]/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/5 border-l-4 border-l-[#10D589] md:border-l-4 md:border-r-4 md:border-l-white/5 md:border-r-[#10D589] shadow-2xl hover:border-white/10 transition-all duration-300 group">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="text-white text-xl font-bold tracking-wide group-hover:text-[#10D589] transition-colors">
                  Desarrollador Web & Especialista SEO
                </h3>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-bold rounded-full bg-[#10D589]/10 text-[#10D589] border border-[#10D589]/20 self-start sm:self-auto">
                  <FaCalendarAlt /> Ene 2023 - 2024
                </span>
              </div>
              <h4 className="text-[#10D589] text-md font-semibold tracking-wider uppercase mb-4 opacity-90 md:text-right">
                AGENCIA DE MARKETING SPAIN
              </h4>
              <ul className="text-[#ccc] text-sm sm:text-base space-y-3 text-justify list-none pl-0">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#10D589] mt-1.5 text-xs">◆</span>
                  <span>Optimicé la velocidad de carga (WPO) de sitios corporativos complejos en un 80%, mejorando el posicionamiento orgánico en SERPs.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#10D589] mt-1.5 text-xs">◆</span>
                  <span>Desarrollé landing pages de alta conversión utilizando arquitecturas limpias y CMS para clientes corporativos internacionales.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#10D589] mt-1.5 text-xs">◆</span>
                  <span>Automaticé flujos avanzados de soporte técnico y mantenimiento predictivo mediante integraciones de IA, reduciendo tiempos operativos.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Espacio vacío derecho en Desktop */}
          <div className="hidden md:block order-1 md:order-2"></div>
        </div>

      </div>
    </section>
  );
};

export default Experience;