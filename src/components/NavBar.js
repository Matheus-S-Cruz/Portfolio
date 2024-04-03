import linkedin from '../images/linkedin.png';
import email from '../images/email.png';
import github from '../images/github.png';
import instagram from '../images/instagram.png';

export const NavBar = () =>{

    return (
      <div>
        <div className="topnav">
        <a className="active" href="#home">Home</a>
        <a href="#sobre">Sobre</a>
        <a href="#materias">Matérias</a>
        <a href="#tecnico">Técnico</a>
        <a href='#PPE'>PPE</a>
      
        <div id='contato' className="contato">
        <a href="https://www.linkedin.com/in/matheus-cruz-12ab9a248/"><img className='logo' src={linkedin}/></a>
        <a href='https://github.com/Matheus-S-Cruz'><img className='logo' src={github}/></a>
        <a href='https://www.instagram.com/matheussdacruz/'><img className='logo' src={instagram}/></a>
        <a href="mailto:matheus_silva-cruz@estudante.sesisenai.org.br"><img className='logo' src={email}/></a>
      </div>
      </div>
      </div>
    );
  }
  