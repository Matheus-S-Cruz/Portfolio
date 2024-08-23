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
      <Link to="/"><button className="p-3 w-32 h-14 border border-#04AA6D text-l uppercase rounded-lg outline-none shadow-lg hover:shadow-xl hover:rounded-3xl duration-200">Voltar</button></Link>
    </div>
  );
}

export default Ppe;
