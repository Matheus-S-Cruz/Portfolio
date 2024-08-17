import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./components/home.js";
import { NavBar } from "./components/NavBar.js";
import { Materias } from "./components/materias.js";
import { Tecnico } from "./components/tecnico.js";
import { Skills } from "./components/skills.js";
import { Portfolios } from "./components/portfolios.js";
import { PPE } from "./components/ppe.js";
import { Curriculo } from "./components/curriculo.js";
 import "./App.css";
import './styles/global.css';
import Ppe from "./Ppe";

function App() {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  return (
    <div className="bg-gray-900 text-white text-center">
      <Routes>
      <Route path="/" element={
          <>
            <NavBar />
            <Home />
            <br />
            <Skills />
            <br />
            <Curriculo />
            <br />
            <Materias />
            <Tecnico />
            <PPE />
            <br />
            <Portfolios />
          </>
        } />
        <Route path="ppe" element={<Ppe />} />
      </Routes>
    </div>
  );
}

export default App;
