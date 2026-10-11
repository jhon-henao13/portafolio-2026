// src/pages/HomePage.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <div id="inicio">
        <Hero />
      </div>
      <div id="sobre-mi">
        <Skills />
      </div>
      <div id="experiencia">
        <Experience />
      </div>
      <div id="proyectos">
        <Projects />
      </div>
    </>
  );
};

export default HomePage;