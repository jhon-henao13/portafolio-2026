// src/components/ProjectModal.jsx
import { useEffect } from "react";
import { FaTimes, FaExternalLinkAlt, FaGithub, FaTerminal } from "react-icons/fa";

const ProjectModal = ({ isOpen, project, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl px-4 py-6 overflow-y-auto" 
      onClick={onClose}
    >
      {/* Contenedor del Modal - Premium Terminal Framework Canvas */}
      <div 
        className="relative bg-[#020e0c]/95 border border-white/10 rounded-2xl shadow-[0_0_80px_rgba(16,213,137,0.08)] max-w-6xl w-full mx-auto overflow-hidden animate-modalFade"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Barra superior estilo Consola de Desarrollo */}
        <div className="bg-[#051512] px-4 py-3 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#10D589]/40"></div>
            <span className="text-white/40 font-mono text-xs ml-2 flex items-center gap-1.5 select-none">
              <FaTerminal className="text-[10px] text-[#10D589]" /> core-manifest.json
            </span>
          </div>
          
          {/* Botón de Cierre Integrado */}
          <button 
            onClick={onClose} 
            className="text-white/40 hover:text-[#10D589] p-1 rounded-md transition-colors duration-200"
            aria-label="Cerrar modal"
          >
            <FaTimes className="text-base" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12">
          
          {/* Columna Izquierda: Visual Asset Preview */}
          <div className="md:col-span-5 relative bg-[#000504] h-56 md:h-full min-h-[250px] flex items-center justify-center overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover opacity-90"
            />
            {/* Overlay sutil para fusionar con el fondo oscuro */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-[#020e0c]/10 to-[#020e0c]"></div>
          </div>

          {/* Columna Derecha: Especificaciones e Ingeniería Avanzada */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-b from-transparent to-white/[0.01]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#10D589] bg-[#10D589]/10 px-2.5 py-0.5 rounded-sm uppercase">
                  Production Build
                </span>
                <span className="text-[10px] font-mono text-white/30">
                  ID: 00{project.id} // 2026
                </span>
              </div>
              
              <h2 className="text-white text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 leading-tight">
                {project.title}
              </h2>
              
              <p className="text-[#ccc]/80 text-sm sm:text-[15px] leading-relaxed mb-6 font-normal">
                {project.fullDesc}
              </p>
              
              {/* Stack de Ingeniería Integrado */}
              <div className="mb-6 p-4 bg-black/40 rounded-xl border border-white/5">
                <h4 className="text-white/40 text-[10px] font-mono uppercase tracking-wider mb-2.5 font-bold">
                  System Architecture Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.split(",").map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="bg-[#10D589]/5 border border-[#10D589]/10 text-[#10D589] text-[11px] font-mono px-2.5 py-1 rounded-md"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Acciones de Salida Flexibles e Híbridas */}
            <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row gap-3 justify-end">
              {project.github && project.github !== "#" && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] text-white py-2.5 px-5 rounded-xl font-semibold text-xs transition-all duration-300"
                >
                  <FaGithub className="text-sm" /> Examinar Código
                </a>
              )}
              
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 bg-[#10D589] hover:bg-[#15e695] text-[#001E1A] py-2.5 px-5 rounded-xl font-bold text-xs shadow-lg shadow-[#10D589]/10 transition-all duration-300"
                >
                  Lanzar Aplicación Viva <FaExternalLinkAlt className="text-[10px]" />
                </a>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectModal;