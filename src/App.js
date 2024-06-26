import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from './components/home.js';
import {NavBar} from './components/NavBar.js';
import {Materias} from './components/materias.js';
import {Cards} from './components/materiasCard.js'
import {Tecnico} from './components/tecnico.js'
import {Skills} from './components/skills.js'
import {TecnicoCards} from './components/teccards.js'
import {Portfolios} from './components/portfolios.js'
import {PPE} from './components/ppe.js'
import {Curriculo} from './components/curriculo.js'
import './App.css'


function App() {

  useEffect(() => {
    document.title = 'Portfolio';

  }, []);

  return (
    <div>
      <NavBar/>
      <Home/>
      <br/>
      <Skills/>
      <br/>
      <Curriculo/>
      <br/>
      <Materias/>
      <Cards/>
      <Tecnico/>
      <TecnicoCards/>
      <PPE/>
      <br/>
      <Portfolios/>
    </div>
  );
}

export default App;
