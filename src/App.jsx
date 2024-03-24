import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import Materias from './pages/materias.jsx';
import './App.css'

function App() {
  // Retorna a estrutura de roteamento usando o BrowserRouter
  return (
    <Router>
      {/* Define as rotas usando o componente Routes */}
      <Routes>
        {/* Rota para a página Home com o componente associado */}
        <Route path="/" element={<Home />} />        
       {/* Rota para a página About com o componente associado */}
        <Route path="/materias" element={<Materias />} />
      </Routes>
    </Router>
  );
}
// Exporta o componente App como padrão
export default App;
