import { useNavigate } from 'react-router-dom';

function Materias() {
  const irPara= useNavigate();
  const handleClick = () => {
    irPara('/');
  };

  return (
    <div>
      <h1>Página das Matérias</h1>      
      <button onClick={handleClick}>Ir para Home</button>
    </div>
  );
}

export default Materias;
