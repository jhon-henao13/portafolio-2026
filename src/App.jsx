// src/App.jsx
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProjectDetail from "./pages/ProjectDetail";
import SplashScreen from "./components/SplashScreen";
import { tsParticles } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import AOS from "aos";

function App() {
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });
  const [isLoading, setIsLoading] = useState(true);

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
          // ... tu configuración actual
        });
      }
    };
    initParticles();
  }, []);

  return (
    <>
      {isLoading && <SplashScreen onComplete={() => setIsLoading(false)} />}
      <div className="relative min-h-screen bg-[#031411] text-slate-100 overflow-hidden">
        {/* Luz dinámica, partículas, etc. (igual que antes) */}
        <div
          className="hidden md:block fixed inset-0 pointer-events-none z-30 transition-opacity duration-300 mix-blend-screen"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 213, 137, 0.06), transparent 80%)`,
          }}
        ></div>
        <div id="tsparticles" className="fixed inset-0 z-0 pointer-events-auto block"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] bg-[#10D589]/5 rounded-full blur-[140px] pointer-events-none animate-orb-drift"></div>
        <div className="absolute top-[30%] right-[-5%] w-[40vw] h-[40vw] max-w-[500px] bg-[#00665e]/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] left-[-5%] w-[45vw] h-[45vw] max-w-[550px] bg-[#10D589]/4 rounded-full blur-[150px] pointer-events-none animate-orb-drift"></div>

        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;