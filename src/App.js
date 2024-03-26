import React, { useEffect } from 'react';
import {Home} from './components/home.js';
import {NavBar} from './components/NavBar.js';
import {Materias} from './components/materias.js';
import {Tecnico} from './components/tecnico.js'
import {Skills} from './components/skills.js'
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
      <Tecnico/>
      <Skills/> 
    </div>
  );
}

export default App;
