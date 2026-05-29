import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaHome, FaUser, FaBriefcase, FaCode } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para cambiar el diseño del Navbar a flotante fijo
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio", icon: FaHome },
    { name: "Sobre mí", href: "#sobre-mi", icon: FaUser },
    { name: "Experiencia", href: "#experiencia", icon: FaBriefcase },
    { name: "Proyectos", href: "#proyectos", icon: FaCode },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "py-4 bg-[#001E1A]/80 backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.4)] border-b border-[#10D589]/10" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo de Marca */}
        <div className="text-white text-2xl font-bold tracking-tight select-none cursor-pointer group">
          estiguar
          <span className="text-[#10D589] inline-block transition-transform duration-300 group-hover:translate-x-1">
            .dev
          </span>
        </div>

        {/* Hamburguesa Móvil */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none z-50 p-2 transition-colors duration-300 hover:text-[#10D589]"
          aria-label="Menú de Navegación"
        >
          {menuOpen ? <FaTimes className="text-3xl text-[#10D589]" /> : <FaBars className="text-3xl" />}
        </button>

        {/* Menú de Enlaces (Desktop & Mobile) */}
        <div
          className={`fixed inset-0 h-screen w-full bg-[#001E1A]/98 backdrop-blur-xl md:backdrop-blur-none md:bg-transparent md:static md:h-auto md:w-auto 
                      flex flex-col md:flex-row items-center justify-center 
                      transition-all duration-300 ease-in-out z-40
                      ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto"}`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-8 md:gap-10 text-white text-xl md:text-base font-semibold tracking-wide">
            {navLinks.map((link) => (
              <li key={link.name} className="relative overflow-hidden py-1">
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2.5 opacity-80 hover:opacity-100 text-white hover:text-[#10D589] transition-all duration-300 relative group"
                >
                  <link.icon className="text-[#10D589]/70 group-hover:text-[#10D589] transition-colors" />
                  <span>{link.name}</span>
                  {/* Línea animada Premium inferior */}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#10D589] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
            <li className="mt-4 md:mt-0">
              <a 
                href="https://wa.me/+573185168709" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary text-sm tracking-wider uppercase font-bold px-6 py-3"
                onClick={() => setMenuOpen(false)}
              >
                Contactar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;