// src/components/ProjectModal.jsx
import { useEffect } from "react";
import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg px-4 py-6 overflow-y-auto transition-opacity duration-300" 
      onClick={onClose}
    >
      {/* Contenedor del Modal - Premium Two-Column Layout */}
      <div 
        className="relative bg-[#001E1A] border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(16,213,137,0.15)] max-w-5xl w-full mx-auto overflow-hidden animate-modalFade"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de Cierre Flotante Flawless */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-40 bg-[#001E1A]/80 backdrop-blur-md border border-white/10 text-white/70 hover:text-[#10D589] hover:border-[#10D589]/40 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
          aria-label="Cerrar modal"
        >
          <FaTimes className="text-lg" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          
          {/* Columna Izquierda: Visual Asset Hero Preview */}
          <div className="md:col-span-5 relative bg-[#001311] h-48 md:h-full min-h-[220px] flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-white/5">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#001311]/20 to-[#001E1A]/90 mix-blend-multiply"></div>
          </div>

          {/* Columna Derecha: Especificaciones e Ingeniería */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="inline-block text-xs font-mono font-bold tracking-widest text-[#10D589] uppercase mb-2">
                Project Blueprint
              </span>
              <h2 className="text-white text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 leading-tight">
                {project.title}
              </h2>
              
              <p className="text-[#ccc] text-sm sm:text-base leading-relaxed mb-6 text-justify opacity-90">
                {project.fullDesc}
              </p>
              
              {/* Stack de Ingeniería */}
              <div className="mb-8 p-4 bg-[#1e2023]/40 rounded-xl border border-white/5">
                <h4 className="text-white text-xs font-mono uppercase tracking-wider mb-2 font-bold opacity-60">
                  Core Stack & Technologies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.split(",").map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="bg-[#10D589]/10 border border-[#10D589]/20 text-[#10D589] text-[11px] font-mono px-2.5 py-1 rounded-md"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Acción de salida principal */}
            {project.demo && (
              <div className="pt-4 border-t border-white/5 flex justify-end">
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#10D589] hover:bg-[#10D589]/90 text-[#001E1A] py-3 px-6 rounded-xl font-bold text-sm shadow-lg hover:shadow-[0_0_20px_rgba(16,213,137,0.4)] transition-all duration-300"
                >
                  Probar Aplicación <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectModal;