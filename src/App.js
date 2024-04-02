import React, { useEffect } from 'react';
import {Home} from './components/home.js';
import {NavBar} from './components/NavBar.js';
import {Materias} from './components/materias.js';
import {Cards} from './components/materiasCard.js'
import {Tecnico} from './components/tecnico.js'
import {Skills} from './components/skills.js'
import {TecnicoCards} from './components/teccards.js'

import './App.css'


function App() {

  useEffect(() => {
    document.title = 'Portfolio';

  }, []);

  return (
    <div>
      <NavBar/>
      <Home/>
      <Materias/>
      <Cards/>
      <Tecnico/>
      <TecnicoCards/>
      <Skills/> 
    </div>
  );
}

export default App;
