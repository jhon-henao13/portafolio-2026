/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: "#001E1A",
        accent: "#10D589",
        darkAccent: "#0a7049",
        cardBg: "#1e2023",
        textLight: "#ccc",
      },

      // UNIFICADO: Un solo bloque de animaciones
      animation: {
        float: "float 4s ease-in-out infinite",
        'scroll-skills': 'scroll 40s linear infinite',
        shine: 'shine 5s linear infinite',
        'pulse-slow': 'pulseSlow 8s ease-in-out infinite alternate',
        'orb-drift': 'orbDrift 20s ease-in-out infinite alternate',
      },

      // UNIFICADO: Un solo bloque de keyframes
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shine: {
          '0%': { 'background-position': '0% center' },
          '100%': { 'background-position': '200% center' },
        },
        pulseSlow: {
          '0%': { opacity: 0.2, transform: 'scale(1)' },
          '100%': { opacity: 0.4, transform: 'scale(1.15)' },
        },
        orbDrift: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(40px, -60px) scale(1.1)' },
          '100%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        }
      },

      fontFamily: {
        feather: ['"Feather Bold"', "sans-serif"],
      },
    },
  },
  plugins: [],
};