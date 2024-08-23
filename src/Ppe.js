import React from "react";
import { Linguagens } from "./components/linguagens.js";
import { Humanas } from "./components/humanas.js";
import { Natureza } from "./components/natureza.js";
import { Matematica } from "./components/matematica.js";
import { Link } from "react-router-dom";

function Ppe() {
  return (
    <div>
      <Linguagens />
      <br />
      <Humanas />
      <br />
      <Natureza />
      <br />
      <Matematica />
      <br />
      <Link to="/"><button className="ppe">Voltar</button></Link>
    </div>
  );
}

export default Ppe;
