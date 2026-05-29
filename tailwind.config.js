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

      animation: {
        'scroll-skills': 'scroll 40s linear infinite',
      },
        keyframes: {
          scroll: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' },
          },
        },


      fontFamily: {
        feather: ['"Feather Bold"', "sans-serif"],
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "scroll-skills": "scroll 40s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};