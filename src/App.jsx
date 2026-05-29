// src/App.jsx
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { tsParticles } from "tsparticles-engine"; // Importación corregida
import { loadSlim } from "tsparticles-slim";
import AOS from "aos";

function App() {
  useEffect(() => {
    // Inicializar AOS
    AOS.init({ duration: 1000, once: false });

    // Inicializar tsParticles de forma correcta y segura
    const initParticles = async () => {
      await loadSlim(tsParticles);
      await tsParticles.load("tsparticles", {
        fullScreen: { enable: true, zIndex: -1 },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            push: { quantity: 3 },
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#10D589" },
          links: {
            color: "#10D589",
            distance: 120,
            enable: true,
            opacity: 0.3,
            width: 1.5,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            value: 80,
            density: { enable: true, area: 800 },
          },
          opacity: { value: 0.4 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 4 } },
        },
        detectRetina: true,
      });
    };

    initParticles();
  }, []);

  return (
    <div className="relative min-h-screen">
      <div id="tsparticles" className="fixed inset-0 -z-10 pointer-events-none"></div>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;