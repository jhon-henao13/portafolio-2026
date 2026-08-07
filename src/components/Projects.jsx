// src/components/Projects.jsx
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaEye, FaLaptopCode } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { projectsData } from "../data/projectsData";

// Estilos CSS de Swiper (importación global en main.jsx o aquí)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const Projects = () => {

  return (
    <section id="proyectos" className="py-24 px-6 relative overflow-hidden bg-transparent">
      {/* Luz ambiental de fondo */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#10D589]/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Encabezado */}
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

        {/* Carrusel Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3.1,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 2.0,
              spaceBetween: 50,
            },
          }}
          className="projects-swiper !pb-16"
        >
          {projectsData.map((project) => {
            const defaultPalette = { primary: "#10D589", secondary: "#0a7049", dark: "#001E1A" };
            const palette = project.colorPalette || defaultPalette;
                    
            return (
              <SwiperSlide key={project.id}>
                <Link to={`/projects/${project.slug}`} className="group block h-full">
                  <div
                    className="relative flex flex-col h-full bg-[#1e2023]/25 backdrop-blur-xl border border-white/[0.04] rounded-2xl overflow-hidden transition-all duration-500 h-[520px]"
                    style={{
                      borderColor: 'rgba(255,255,255,0.04)',
                      boxShadow: '0 24px 60px -15px rgba(0,0,0,0.8)',
                      transition: 'all 0.5s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = palette.primary;
                      e.currentTarget.style.boxShadow = `0 0 50px ${palette.primary}20, 0 24px 60px -15px rgba(0,0,0,0.8)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)';
                      e.currentTarget.style.boxShadow = '0 24px 60px -15px rgba(0,0,0,0.8)';
                    }}
                  >
                    {/* Línea de luz superior con color de paleta */}
                    <div
                      className="absolute top-0 inset-x-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `linear-gradient(90deg, transparent, ${palette.primary}, transparent)` }}
                    ></div>
          
                    {/* Resplandor de fondo */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 30% 20%, ${palette.primary}30, transparent 70%)`,
                      }}
                    ></div>
          
                    {/* Imagen */}
                    <div className="relative h-64 w-full overflow-hidden bg-[#000a08] flex-shrink-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.9] group-hover:brightness-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#01110e] via-[#01110e]/40 to-transparent opacity-90"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#000a08]/50 to-transparent opacity-40"></div>
                    
                      {/* Badge con color de paleta */}
                      <span
                        className="absolute top-4 left-4 bg-black/50 backdrop-blur-md border border-white/10 text-white/60 font-mono text-[10px] px-2.5 py-1 rounded-full uppercase tracking-widest z-10"
                        style={{ backgroundColor: `${palette.primary}30`, borderColor: palette.primary }}
                      >
                        {project.stack.some(s => s.toLowerCase().includes("iot")) ? "⚡ IoT/Hardware" :
                         project.stack.some(s => s.toLowerCase().includes("llama") || s.toLowerCase().includes("openai")) ? "🤖 AI Solution" :
                         "🌐 Full-Stack"}
                      </span>
                        
                      {/* Overlay Hover */}
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] z-10">
                        <span
                          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-[#001E1A] font-extrabold text-sm shadow-[0_0_20px_rgba(16,213,137,0.4)] transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 ease-out"
                          style={{ backgroundColor: palette.primary }}
                        >
                          <FaEye className="text-base" /> Inspeccionar Arquitectura
                        </span>
                      </div>
                    </div>
                        
                    {/* Contenido */}
                    <div className="p-6 flex flex-col flex-grow relative z-10">
                      <h3 className="text-white text-xl font-bold tracking-tight mb-2 line-clamp-1 group-hover:text-[#10D589] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-[#ccc]/70 text-sm leading-relaxed mb-4 line-clamp-2 font-normal">
                        {project.description}
                      </p>
                        
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                        {project.stack.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-white/[0.02] border border-white/5 text-white/50 text-[10px] font-mono px-2.5 py-1 rounded-md tracking-tight group-hover:border-[#10D589]/10 group-hover:text-white/70 transition-colors duration-300"
                          >
                            {tech.trim()}
                          </span>
                        ))}
                        {project.stack.length > 3 && (
                          <span className="text-white/30 text-[10px] font-mono px-1 py-1">
                            +{project.stack.length - 3}
                          </span>
                        )}
                      </div>
                      
                      {/* Enlaces */}
                      <div className="flex gap-3 pt-4 border-t border-white/[0.04]">
                        {project.github && project.github !== "#" ? (
                          <div
                            role="button"
                            tabIndex={0}
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.github, "_blank", "noopener,noreferrer");
                            }}
                            className="flex-1 inline-flex items-center justify-center gap-2 bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 text-white py-2.5 rounded-xl font-medium text-xs transition-all duration-300 cursor-pointer"
                          >
                            <FaGithub className="text-sm opacity-80" /> Source Code
                          </div>
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
                          <div
                            role="button"
                            tabIndex={0}
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.demo, "_blank", "noopener,noreferrer");
                            }}
                            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#10D589] text-[#001E1A] hover:bg-[#15e695] py-2.5 rounded-xl font-bold text-xs shadow-md transition-all duration-300 cursor-pointer"
                          >
                            Live Deployment <FaExternalLinkAlt className="text-[10px]" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Botones de navegación personalizados */}
        <div className="flex justify-center gap-4 mt-6">
          <button className="swiper-button-prev-custom w-12 h-12 rounded-full border border-white/20 hover:border-[#10D589] text-white hover:text-[#10D589] transition-all duration-300 flex items-center justify-center text-xl hover:scale-110">
            ❮
          </button>
          <button className="swiper-button-next-custom w-12 h-12 rounded-full border border-white/20 hover:border-[#10D589] text-white hover:text-[#10D589] transition-all duration-300 flex items-center justify-center text-xl hover:scale-110">
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;