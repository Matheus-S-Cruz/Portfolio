import { Link } from "react-router-dom";
import React from "react";

export const PPE = () => {
  return (
    <div className="PPE" id="PPE">
      <h3>PPE</h3>
      <p>Clique aqui para ser redirecionado para o PPE.</p>
      <Link to="/ppe"><button className="ppe">PPE</button></Link>
    </div>
  );
}