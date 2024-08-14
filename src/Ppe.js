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
      <Link to="/">Voltar</Link>
    </div>
  );
}

export default Ppe;
