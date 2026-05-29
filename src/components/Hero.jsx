import { useEffect } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaArrowDown } from "react-icons/fa";
import AOS from "aos";

const Hero = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      
      {/* Efectos de Iluminación de Fondo (Neon Aurora Effects) */}
      <div className="absolute top-1/4 left-1/12 w-80 h-80 bg-[#10D589]/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/12 w-96 h-96 bg-[#00665e]/20 rounded-full blur-[50px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div data-aos="fade-up" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Columna Principal de Contenido */}
          <div className="lg:col-span-8 text-center md:text-left space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#10D589]/10 border border-[#10D589]/20 text-[#10D589] font-mono text-sm tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(16,213,137,0.05)]">
              <span className="w-2 h-2 rounded-full bg-[#10D589] animate-ping"></span>
              Disponible para proyectos de alto impacto
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.15] tracking-tight">
              Hola, soy <span className="text-[#10D589] drop-shadow-[0_0_15px_rgba(16,213,137,0.3)]">Estiguar</span>
              <span className="block mt-2 text-2xl sm:text-3xl md:text-5xl font-mono text-white/90">
                &gt; <span className="typing-text inline-block border-r-4 border-[#10D589] pr-2 animate-pulse"></span>
              </span>
            </h1>

            {/* Texto de sobre mí completamente justificado en mobile y estilizado */}
            <p id="sobre-mi" className="text-[#ccc] text-lg sm:text-2xl md:text-xl font-normal leading-relaxed text-justify md:text-left max-w-4xl opacity-95 pt-2">
              Soy un desarrollador Full Stack con más de 5 años de experiencia autodidacta, apasionado por la innovación tecnológica y la integración de inteligencia artificial en soluciones digitales. Desde los 12 años, comencé creando videojuegos simples y rápidamente me sumergí en el desarrollo web, evolucionando hasta construir arquitecturas robustas y automatizar procesos manuales, transformándolos en sistemas escalables y eficientes. Mi enfoque, desde Cali, Colombia, combina lo mejor del desarrollo web moderno con IA avanzada, optimizando procesos para maximizar la productividad y generar resultados tangibles. Cada proyecto refleja mi disciplina, mi constante aprendizaje y mi compromiso por ofrecer soluciones creativas que impulsen el crecimiento y la competitividad de las empresas.
            </p>

            {/* Acciones principales */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5">
              <a href="/images/CV/CVHARD3.pdf" download className="btn-primary w-full sm:w-auto text-center">
                Descargar CV
              </a>
              <a 
                href="#proyectos" 
                className="group flex items-center gap-2 text-white font-semibold hover:text-[#10D589] transition-colors py-3 duration-300 tracking-wide"
              >
                Ver Proyectos 
                <FaArrowDown className="text-sm transition-transform duration-300 group-hover:translate-y-1.5 text-[#10D589]" />
              </a>
            </div>

            {/* Redes Sociales Integradas de Forma Premium */}
            <div className="pt-8 flex justify-center md:justify-start gap-5">
              <a href="https://www.linkedin.com/in/estiguarhenao/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/jhon-henao13" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <FaGithub size={24} />
              </a>
              <a href="https://x.com/estiguar_dev" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X (Twitter)">
                <FaTwitter size={24} />
              </a>
            </div>

          </div>

          {/* Columna Derecha Decorativa de la Rejilla Asimétrica (Añade Balance Visual en Desktop) */}
          <div className="hidden lg:col-span-4 lg:flex justify-center items-center relative">
            <div className="w-72 h-72 border border-[#10D589]/20 rounded-3xl rotate-12 absolute opacity-40 animate-[spin_60s_linear_infinite] pointer-events-none"></div>
            <div className="w-64 h-64 border-2 border-dashed border-[#10D589]/10 rounded-3xl -rotate-6 absolute opacity-30 animate-[spin_40s_linear_infinite] pointer-events-none"></div>
            <div className="w-48 h-48 bg-[#001E1A] border-4 border-[#10D589]/20 shadow-[0_0_50px_rgba(16,213,137,0.1)] rounded-2xl flex items-center justify-center transform hover:scale-105 hover:rotate-3 transition-transform duration-500 cursor-default">
              <span className="text-7xl font-mono text-[#10D589]/80 font-bold">&lt;/&gt;</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;