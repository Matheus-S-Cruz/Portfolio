import { Link } from "react-router-dom";
import React from "react";

export const PPE = () => {
  return (
    <div className="PPE text-center py-8" id="PPE">
      <h3 className="text-2xl font-bold mb-4">PPE</h3>
      <p className="text-lg mb-6">
        Clique aqui para ser redirecionado para o PPE.
      </p>
      <Link to="/ppe">
        <button class="p-3 w-32 h-14 border border-#04AA6D text-l uppercase rounded-lg outline-none shadow-lg hover:shadow-xl hover:rounded-3xl duration-200">
          PPE
        </button>
      </Link>
    </div>
  );
};