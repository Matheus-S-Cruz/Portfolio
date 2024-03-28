export const Home = () =>{

  return (
    <div>

      <div className='pagina'>
        <h1>Eu sou Matheus Cruz,</h1>
        <div id='home' className='typewriter'><h2>Desenvolvedor em andamento</h2>
    </div>


        <br /><br />

        <div id='sobre' className='sobre'>
          <h3>Sobre Mim:</h3>
          <p>Estudante de Desenvolvimento de Sistemas no SENAI, no terceiro ano do ensino médio, com previsão de formatura em 2024.<br></br>
            Me interessei muito pela programação em 2022, quando fiz um curso FullStack do programa FuturoDev.<br></br>
            Atualmente, estou explorando mais na área de Desenvolvimento de Sistemas, e pretendo me aprofundar mais<br></br>
            em React, Node.js e Java. Meu objetivo é me tornar um desenvolvedor FullStack. E conseguir um estágio em uma empresa de tecnologia<br></br>
          </p>
        </div>
        <div className="portfolios">
          <h3>Portfólios anteriores:</h3>
          <a href="https://www.canva.com/design/DAE9G9WvBpQ/i3tcIBCqk2oaM_BLxiuNXQ/edit?utm_content=DAE9G9WvBpQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"><button className="portfolio">Portfólio 2022</button></a>    
          <a href="https://www.canva.com/design/DAFxtkB93nA/iUg8nZJwq4JvNgzCZOQsWw/edit?utm_content=DAFxtkB93nA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"><button className="portfolio">Porfólio 2023</button></a>
        </div>
      </div>
    </div>
  );
}