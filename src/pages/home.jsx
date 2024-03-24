import { useNavigate } from 'react-router-dom';
import linkedin from '../images/linkedin.png';
import email from '../images/email.png';
import github from '../images/github.png';
import instagram from '../images/instagram.png';
import '../App.css';

function Home() {
  const irPara = useNavigate();

  const handleClick = () => {
    irPara('/materias');
  };

  return (
    <div>
      <div className="topnav">
        <a className="active" href="#home">Home</a>
        <a href="#contato">Contato</a>
        <a href="#sobre">Sobre</a>
        <a href="#materias">Matérias</a>
      </div>

      <div className='pagina'>
        <h1>Eu sou Matheus Cruz,</h1>
        <div id='home' className='typewriter'><h2>Desenvolvedor Full Stack em andamento</h2>
    </div>

        <h3>Contato:</h3>
        <div id='contato' className="contato">
          <a href="mailto:matheus_silva-cruz@estudante.sesisenai.org.br"><img className='logo' src={email}/></a>
          <a href="https://www.linkedin.com/in/matheus-cruz-12ab9a248/"><img className='logo' src={linkedin}/></a>
          <a href='https://github.com/Matheus-S-Cruz'><img className='logo' src={github}/></a>
          <a href='https://www.instagram.com/matheussdacruz/'><img className='logo' src={instagram}/></a>
        </div>
        <br /><br />

        <div id='sobre' className='sobre'>
          <h3>Sobre Mim:</h3>
          <p>Estudante de Desenvolvimento de Sistemas no SENAI, no terceiro ano do ensino médio, com previsão de formatura em 2024.<br></br>
            Me interessei muito pela programação em 2022, quando fiz um curso FullStack do programa FuturoDev.<br></br>
            Atualmente, estou explorando mais na área de Desenvolvimento de Sistemas, e pretendo me aprofundar mais<br></br>
            em React, Node.js e Java. Meu objetivo é me tornar um desenvolvedor FullStack. E conseguir um estágio em uma empresa de tecnologia<br></br>
          </p>
          <button onClick={handleClick}>Ir para as Matérias</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
