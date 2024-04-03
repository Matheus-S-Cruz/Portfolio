import choso from '../images/choso.png';

export const Home = () =>{

  return (
    <div>

      <div className='pagina'>
        <h1>Eu sou Matheus Cruz,</h1>
        <div id='home' className='typewriter'><h2>Desenvolvedor em andamento!</h2>
    </div>


        <br /><br />
        <div className="container">
          <div id="sobre" className="sobre">
            <h3>Sobre Mim:</h3>
            <p>Estudante de Desenvolvimento de Sistemas no SENAI, no terceiro ano do Ensino Médio, com previsão de formatura em 2024.
              Me interessei muito pela programação em 2022, quando fiz um curso FullStack do programa FuturoDev.
              Atualmente, estou explorando mais na área de Desenvolvimento de Sistemas, e pretendo me aprofundar mais
              em React, Node.js e Java. Meu objetivo é me tornar um desenvolvedor FullStack e conseguir um estágio em uma empresa de tecnologia.
            </p>
          </div>
          <div className="fotoperfil">
            <img src={choso} alt="choso"/>
          </div>
       </div>
       </div>
      </div>
  );
}