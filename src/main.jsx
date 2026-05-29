import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AOS from "aos";

AOS.init({ duration: 1000, once: false });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);