import choso from '../images/choso.png';

export const Home = () =>{

  return (
    <div>

      <div className='pagina'>
        <h1>Eu sou Matheus Cruz 3ºA,</h1>
        <div id='home' className='typewriter'><h2>Desenvolvedor em andamento!</h2>
    </div>


        <br /><br />
        <div className="container">
          <div id="sobre" className="sobre">
            <h3>Sobre Mim:</h3>
            <p>Estudante de Desenvolvimento de Sistemas no SENAI, no terceiro ano do Ensino Médio, com previsão de conclusão em dezembro de 2024.
              Me interessei muito pela programação em 2022, quando fiz um curso FullStack do programa FuturoDev.
              Atualmente, estou explorando mais na área de Desenvolvimento de Sistemas, e pretendo me aprofundar mais
              em React, Node.js e Java. Meu objetivo é me tornar um desenvolvedor FullStack e conseguir um estágio em uma empresa de tecnologia.
            </p>
            <a className='carta' href='https://docs.google.com/document/d/1aXWJkpDHYkB9ixQOlVPil4nN9J-Ccd5hnwL2ofaINQs/edit?usp=sharing'>Saiba Mais!</a>
          </div>
          <div className="fotoperfil">
            <img src={choso} alt="choso"/>
          </div>
       </div>
       </div>
      </div>
  );
}