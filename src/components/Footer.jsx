// src/components/Footer.jsx
import { FaGithub, FaLinkedinIn, FaEnvelope, FaChevronUp } from "react-icons/fa";

const Footer = () => {
  // Función suave para volver arriba
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#001311] text-[#ccc] pt-16 pb-8 border-t border-white/5 overflow-hidden">
      {/* Detalle de luz ambiental tenue en el fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-[#10D589]/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Bloque Superior Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center pb-12">
          
          {/* Identidad / Branding (4 Columnas) */}
          <div className="md:col-span-5 text-center md:text-left">
            <h2 className="text-white text-2xl font-extrabold tracking-tight group cursor-default">
              Jhon Estiguar <span className="text-[#10D589] drop-shadow-[0_0_10px_rgba(16,213,137,0.2)]">Henao</span>
            </h2>
            <p className="text-sm font-mono text-[#10D589]/80 mt-1.5">
              Desarrollador Full-Stack · IoT · UI/UX
            </p>
          </div>

          {/* Navegación Interna (4 Columnas) */}
          <div className="md:col-span-4 flex justify-center">
            <nav>
              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium tracking-wide">
                <li>
                  <a href="#inicio" className="text-[#ccc] hover:text-[#10D589] transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#10D589] after:transition-all after:duration-300 pb-0.5">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#sobre-mi" className="text-[#ccc] hover:text-[#10D589] transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#10D589] after:transition-all after:duration-300 pb-0.5">
                    Sobre mí
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-[#ccc] hover:text-[#10D589] transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#10D589] after:transition-all after:duration-300 pb-0.5">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#proyectos" className="text-[#ccc] hover:text-[#10D589] transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#10D589] after:transition-all after:duration-300 pb-0.5">
                    Proyectos
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="text-[#ccc] hover:text-[#10D589] transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#10D589] after:transition-all after:duration-300 pb-0.5">
                    Contacto
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Redes Sociales Usando tu clase Premium (3 Columnas) */}
          <div className="md:col-span-3 flex justify-center md:justify-end gap-3">
            <a 
              href="https://github.com/jhon-henao13" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon !w-11 !h-11 !rounded-xl text-lg"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/estiguarhenao/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon !w-11 !h-11 !rounded-xl text-lg"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a 
              href="mailto:jhonestiwarhenao@gmail.com" 
              className="social-icon !w-11 !h-11 !rounded-xl text-lg"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>

        </div>

        {/* Separador de Sección Inferior */}
        <div className="h-[1px] w-full bg-white/5"></div>

        {/* Bloque de Cierre e Info Legal */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-xs font-mono opacity-50 tracking-wide">
            © 2026 - Jhon Estiguar Henao | Desarrollador de Software en Cali
          </p>
          
          {/* Botón ergonómico para volver arriba */}
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-mono tracking-widest text-[#10D589]/60 hover:text-[#10D589] transition-colors duration-300"
            aria-label="Volver al inicio"
          >
            BACK TO TOP 
            <FaChevronUp className="text-[10px] transform group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;