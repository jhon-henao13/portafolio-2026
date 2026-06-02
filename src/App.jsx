// src/App.jsx
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen"; // <-- Importamos tu nuevo loader
import { tsParticles } from "tsparticles-engine"; 
import { loadSlim } from "tsparticles-slim";
import AOS from "aos";

function App() {
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });
  const [isLoading, setIsLoading] = useState(true); // <-- Estado para controlar la pantalla de carga

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });

    const initParticles = async () => {
      await loadSlim(tsParticles);
      
      const container = document.getElementById("tsparticles");
      if (container) {
        await tsParticles.load("tsparticles", {
          fullScreen: { enable: false },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: { 
                enable: true, 
                mode: "grab" 
              },
              onClick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              push: { quantity: 3 },
              grab: {
                distance: 180,
                links: { opacity: 0.3 }
              }
            },
          },
          particles: {
            color: { value: "#10D589" },
            links: {
              color: "#10D589",
              distance: 125,
              enable: true,
              opacity: 0.12, 
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "out" },
              random: true,
              speed: 0.5, 
              straight: false,
            },
            number: {
              value: 70, 
              density: { enable: true, area: 800 },
            },
            opacity: {
              value: { min: 0.1, max: 0.4 }
            },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2.5 } },
          },
          detectRetina: true,
        });
      }
    };

    initParticles();
  }, []);

  return (
    <>
      {/* Si está cargando, muestra el Splash Screen */}
      {isLoading && <SplashScreen onComplete={() => setIsLoading(false)} />}

      <div className="relative min-h-screen bg-[#031411] text-slate-100 overflow-hidden">
        
        {/* LUZ TENUE DINÁMICA PREMIUM */}
        <div 
          className="hidden md:block fixed inset-0 pointer-events-none z-30 transition-opacity duration-300 mix-blend-screen"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 213, 137, 0.06), transparent 80%)`,
          }}
        ></div>

        {/* Contenedor de Partículas Interactivas */}
        <div 
          id="tsparticles" 
          className="fixed inset-0 z-0 pointer-events-auto block"
        ></div>

        {/* CAPA DE LUCES AMBIENTALES DINÁMICAS */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] bg-[#10D589]/5 rounded-full blur-[140px] pointer-events-none animate-orb-drift"></div>
        <div className="absolute top-[30%] right-[-5%] w-[40vw] h-[40vw] max-w-[500px] bg-[#00665e]/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] left-[-5%] w-[45vw] h-[45vw] max-w-[550px] bg-[#10D589]/4 rounded-full blur-[150px] pointer-events-none animate-orb-drift"></div>

        {/* Componentes de la Aplicación */}
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <Skills />
          <Experience />
          <Projects />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;