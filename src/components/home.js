import choso from "../images/choso.png";

export const Home = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-xl">Eu sou Matheus Cruz 3ºA,</h1>
        <div
          id="home"
          className="overflow-hidden whitespace-nowrap border-r-4 border-green-600 font-mono text-2xl w-[27ch] animate-[typing_2s_steps(30)_forwards,blink_.5s_step-end_infinite_alternate]"
        >
          <h2>Desenvolvedor em andamento!</h2>
          {/* <div id='home' className='typewriter'><h2>Desenvolvedor em andamento!</h2> */}
          {/* Da pra deixar o typewriter em css msm se n der pra transformar em tailwind */}
        </div>

        <br />
        <br />
        <div className="flex justify-between mr-12">
          <div id="sobre" className="w-1/2 text-left p-5 mt-36">
            <h3>Sobre Mim:</h3>
            <p>
              Estudante de Desenvolvimento de Sistemas no SENAI, no terceiro ano
              do Ensino Médio, com previsão de conclusão em dezembro de 2024. Me
              interessei muito pela programação em 2022, quando fiz um curso
              FullStack do programa FuturoDev. Atualmente, estou explorando mais
              na área de Desenvolvimento de Sistemas, e pretendo me aprofundar
              mais em React, Node.js e Java. Meu objetivo é me tornar um
              desenvolvedor FullStack e conseguir um estágio em uma empresa de
              tecnologia.
            </p>
            <a className="text-green-600 hover:text-green-700" href="https://docs.google.com/document/d/1aXWJkpDHYkB9ixQOlVPil4nN9J-Ccd5hnwL2ofaINQs/edit?usp=sharing">
              Saiba Mais!
            </a>
          </div>
          <div className="w-auto">
            <img src={choso} alt="choso" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};
