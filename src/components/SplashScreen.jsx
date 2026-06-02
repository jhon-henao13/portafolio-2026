// src/components/SplashScreen.jsx
import { useEffect, useState } from "react";

const SplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Contador premium de alta velocidad para simular carga de módulos IA/Sistemas
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Retardo sutil al llegar a 100% antes de iniciar la animación de salida
          setTimeout(() => setFadeOut(true), 400);
          // Tiempo total para desmontar el componente después del fade-out
          setTimeout(onComplete, 1000);
          return 1000;
        }
        // Incrementos variables para simular telemetría real
        const increment = Math.floor(Math.random() * 12) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#031411] transition-all duration-700 ease-in-out ${
        fadeOut ? "opacity-0 backdrop-blur-2xl pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Rejilla de fondo ultra-tenue idéntica a tu body para mantener consistencia */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,213,137,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,213,137,0.015)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

      {/* Brillo ambiental de fondo */}
      <div className="absolute w-[300px] h-[300px] bg-[#10D589]/5 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>

      <div className="relative flex flex-col items-center space-y-6 z-10 px-6 text-center">
        {/* Isotipo/Logo animado de carga */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Círculo externo con trazo interactivo */}
          <svg className="absolute inset-0 w-full h-full transform -rotate-90">
            <circle
              cx="48"
              cy="48"
              r="40"
              className="stroke-[#001E1A]"
              strokeWidth="3"
              fill="transparent"
            />
            <circle
              cx="48"
              cy="48"
              r="40"
              className="stroke-[#10D589] transition-all duration-150 ease-out"
              strokeWidth="3"
              fill="transparent"
              strokeDasharray={2 * Math.PI * 40}
              strokeDashoffset={2 * Math.PI * 40 * (1 - progress / 100)}
            />
          </svg>
          {/* Núcleo del logo con tu acrónimo o tag técnico */}
          <span className="font-mono text-xl font-bold text-[#10D589] drop-shadow-[0_0_10px_rgba(16,213,137,0.5)]">
            &lt;/&gt;
          </span>
        </div>

        {/* Textos con animaciones fluidas */}
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-wider uppercase font-feather">
            S y s t e m . i n i t ( )
          </h2>
          <p className="font-mono text-sm text-[#10D589]/80 tracking-widest animate-pulse h-5">
            {progress < 40 && "Cargando módulos de IA..."}
            {progress >= 40 && progress < 80 && "Iniciando protocolos IoT..."}
            {progress >= 80 && progress < 100 && "Desplegando UI Premium..."}
            {progress === 100 && "¡Acceso Concedido!"}
          </p>
        </div>

        {/* Porcentaje numérico minimalista */}
        <div className="font-mono text-5xl font-black text-white/90 tabular-nums">
          {progress}<span className="text-[#10D589] text-2xl">%</span>
        </div>
      </div>

      {/* Barra de progreso horizontal inferior minimalista */}
      <div className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#00665e] via-[#10D589] to-[#26ffb0] shadow-[0_0_15px_rgba(16,213,137,0.7)] transition-all duration-150 ease-out" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default SplashScreen;