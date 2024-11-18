import React, { useState } from "react";
import { Cards } from "./materiasCard";
import memerev from "../images/memerev.png";
import circuitos from "../images/circuitos.png";
import organica from "../images/organica.png";
import genetica from "../images/genetica.png";
import trigonometria from "../images/trigonometria.png";
import madagascar from "../images/madagascar.png";
import revolucao from "../images/revolucao.png";
import filme1917 from "../images/filme1917.png";
import revista from "../images/revista.png";
import past from "../images/past.png";
import modernismo from "../images/modernismo.png";
import redacao from "../images/redacao.png";
import ecologia from "../images/ecologia.png";
import mapamentalcircuito from "../images/mapamentalcircuito.png";
import plastico from "../images/plastico.png";
import magnetismo from "../images/magnetismo.png";
import regime from "../images/regime.png";
import urbanismo from "../images/urbanismo.png";
import banca from "../images/banca.jpg";
import banco from "../images/banco.png";
import maquete from "../images/maquete.jpg";
import solitaria from "../images/solitaria.jpg";
import platao from "../images/platao.png";
import mr8 from "../images/mr8.png";
import guerrafria from "../images/guerrafria.png";

export const Materias = () => {
  const [selectedCategory, setSelectedCategory] = useState("null");
  const [selectedTrimestre, setSelectedTrimestre] = useState("primeiro");

  const natureza = [
    {
      titulo: "Meme Sobre Evolucionismo",
      descricao:
        "Nesta atividade nós tivemos como objetivo aprender sobre a evolução das espécies e sobre os principais cientistas que contribuiram para esse estudo. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: memerev,
      link: "https://docs.google.com/document/d/1ZAgosWZWtJuDwlkKT5hyofby8jV0Mt6GlLvWxPH-cm4/edit?usp=sharing",
      trimestre: "primeiro",
    },
    {
      titulo: "Relatório Circuitos",
      descricao:
        "O objetivo desta atividade prática é permitir que os alunos compreendam e experimentem as diferenças entre circuitos de resistores em série e em paralelo, explorando como a resistência total é afetada em cada configuração. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: circuitos,
      link: "https://docs.google.com/document/d/1sjghxCmo8yJ6Sbr6HtbTwanUJxYyZX_3rUkHxwr8lLw/edit?usp=sharing",
      trimestre: "primeiro",
    },
    {
      titulo: "Apresentação Revisão de Orgânica",
      descricao:
        "Nesta atividade relembramos o conhecimento de conteúdos de química orgânica através de uma apresentação sobre o tema. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: organica,
      link: "https://docs.google.com/document/d/1JV9LMG3lZmch0DwXH83e1sh2056OdOTn3N6FAAUE9W4/edit?usp=sharing",
      trimestre: "primeiro",
    },
    {
      titulo: "Atividade de Autoria",
      descricao: "Pesquisa Genética. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: genetica,
      link: "https://docs.google.com/document/d/1X57RT53pPuh1N_ciGeJIDRwTD5tjagHC90G9Ju9PZVA/edit?usp=sharing",
      trimestre: "primeiro",
    },
    {
      titulo: "Relações Ecológicas",
      descricao:
        "Nesta atividade nós tivemos como objetivo aprender sobre as relações ecológicas entre os seres vivos. Nós fizemos uma revista sobre o tema. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: ecologia,
      link: "https://docs.google.com/document/d/1e-JP8UYoA_Ab2_mtc3143ejoo9txk9fHjUvMHDYNFNQ/edit?usp=sharing",
      trimestre: "segundo",
    },
    {
      titulo: "Circuitos Elétricos",
      descricao:
        "Nesta atividade nós tivemos como objetivo aprender sobre circuitos elétricos e suas características. A atividade foi realizar um mapa mental pelo Canva. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: mapamentalcircuito,
      link: "https://docs.google.com/document/d/1lVfmCjL84-tMiMRYvMR9pTNrU0PRPKfr6IQq5Iz4Zrs/edit?usp=sharing",
      trimestre: "segundo",
    },
    {
      titulo: "Uso de Plástico",
      descricao:
        "Nesta atividade nós estudamos sobre o uso do plástico e suas consequências para o meio ambiente. Os alunos criaram cartazes para espalhar pela escola e promover a conscientização sobre o tema. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: plastico,
      link: "https://docs.google.com/document/d/1cO36r-K9R8h61_5Cmc4FvTqFh-ZX-dEfoKPCYftiqhw/edit?usp=sharing",
      trimestre: "segundo",
    },
    {
      titulo: "Atividade de Autoria",
      descricao: "Linha do Tempo Magnetismo. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: magnetismo,
      link: "https://docs.google.com/document/d/1UyLcm6HxdrbEFv00-UuG1w4y7KO6OnPU_WJHm-ySmoM/edit?usp=sharing",
      trimestre: "segundo",
    },
    {
      titulo: "Desequilíbrio Ambiental",
      descricao:
        "Nesta atividade nós tivemos como objetivo aprender sobre as relações ecológicas entre os seres vivos. Nós fizemos uma revista sobre o tema. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: ecologia,
      link: "https://docs.google.com/document/d/1e-JP8UYoA_Ab2_mtc3143ejoo9txk9fHjUvMHDYNFNQ/edit?usp=sharing",
      trimestre: "terceiro",
    },
    {
      titulo: "Atividade Tai",
      descricao:
        "Nesta atividade nós tivemos como objetivo aprender sobre circuitos elétricos e suas características. A atividade foi realizar um mapa mental pelo Canva. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: mapamentalcircuito,
      link: "https://docs.google.com/document/d/1lVfmCjL84-tMiMRYvMR9pTNrU0PRPKfr6IQq5Iz4Zrs/edit?usp=sharing",
      trimestre: "terceiro",
    },
    {
      titulo: "Emissões Radioativas",
      descricao:
        "Nesta atividade nós estudamos sobre o uso do plástico e suas consequências para o meio ambiente. Os alunos criaram cartazes para espalhar pela escola e promover a conscientização sobre o tema. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: plastico,
      link: "https://docs.google.com/document/d/1cO36r-K9R8h61_5Cmc4FvTqFh-ZX-dEfoKPCYftiqhw/edit?usp=sharing",
      trimestre: "terceiro",
    },
    {
      titulo: "Atividade de Autoria",
      descricao: "Linha do Tempo Magnetismo. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: magnetismo,
      link: "https://docs.google.com/document/d/1UyLcm6HxdrbEFv00-UuG1w4y7KO6OnPU_WJHm-ySmoM/edit?usp=sharing",
      trimestre: "terceiro",
    },
  ];

  const matematica = [
    {
      titulo: "Arcos e Ângulos",
      descricao:
        "Nesta atividade nosso objetivo foi produzir uma trilha dentro do ambiente da escola utilizando os conceitos de Arcos e Ângulos com todas as instruções e demais elementos necessários. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: trigonometria,
      link: "https://docs.google.com/document/d/1MSwtlMJp0ExTo8IkjVD7DXWbe0Nl75uTLelr6tSaGMQ/edit?usp=sharing",
      trimestre: "primeiro",
    },
    {
      titulo: "Filme Quebrando a Banca",
      descricao:
        "Nesta atividade nós assistimos o filme Quebrando a Banca e fizemos uma análise sobre o mesmo, respondendo um questionário. Foi uma atividade muito interessante e que nos proporcionou uma visão diferente sobre a matemática. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: banca,
      link: "https://docs.google.com/document/d/1odjK65Bjz_prmHpTKqfG9A2gAXM3IOvUGYyvFqBS-x0/edit?usp=sharing",
      trimestre: "segundo",
    },
    {
      titulo: "Banco Imobiliário",
      descricao:
        "Nesta atividade o objetivo dos alunos era criar um jogo de tabuleiro com o tema de matemática, inspirado no Banco Imobiliário. O jogo que eu e meu grupo criamos foi o Banco do Mané, onde o objetivo era comprar e vender propriedades, e o jogador que tivesse mais tainhas no final do jogo vencia. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: banco,
      link: "https://docs.google.com/document/d/1uBjHk4FKRfZOBx-CJaVBtDCNBpCy_D37J9Dbg-v115A/edit?usp=sharing",
      trimestre: "segundo",
    },
    {
      titulo: "Poliedros de Platão",
      descricao:
        "Durante essa atividade nós estudamos sobre os poliedros de Platão e fizemos uma apresentação sobre o tema. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: platao,
      link: "https://docs.google.com/document/d/1HBnDbBH4ALe8Wo4xvHOut2avb3xFtTqqV4sx40oYi40/edit?usp=sharing",
      trimestre: "terceiro",
    },
  ];

  const humanas = [
    {
      titulo: "Seminário de Geopolítica",
      descricao:
        "O intuito do projeto foi iniciar os estudos de geopolítica de uma forma descontraída, com o objetivo de apresentar um país e suas características. O nosso país escolhido foi Madagascar.",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: madagascar,
      link: "https://docs.google.com/document/d/1QF3lG7gZgbUNqcHCDSPF1ugaCy0tksOqWx0Kjz-sKNs/edit?usp=sharing",
      trimestre: "primeiro",
    },
    {
      titulo: "Tecnologias da 2º Revolução Industrial",
      descricao:
        "Nessa atividade era necessário realizar a busca de informações em como as tecnologias da 2º Revolução Industrial impactaram a sociedade da época em um determinado país e como essas tecnologias são utilizadas atualmente. O país escolhido foi a Alemanha.",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: revolucao,
      link: "https://docs.google.com/document/d/1UBPWDiXnfxgsGL2eAsj7Q9aUmWPbp7_t7EGW--0WwNM/edit?usp=sharing",
      trimestre: "primeiro",
    },
    {
      titulo: "Filme 1917",
      descricao:
        "Nessa aula nós assistimos o filme 1917 e fizemos uma análise sobre o mesmo. Foi uma atividade muito interessante e que nos proporcionou uma visão diferente sobre a Primeira Guerra Mundial.",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: filme1917,
      link: "https://docs.google.com/document/d/13MQW4uVOygzYk50WGQmpHJT48-hzjmLC-WZvjx3lsuk/edit?usp=sharing",
      trimestre: "primeiro",
    },
    {
      titulo: "Regimes totalitaristas",
      descricao:
        "Nessa atividade os alunos pesquisaram sobre filmes que retratam regimes totalitaristas e fizeram uma análise sobre o mesmo, utilizamos a plataforma canva para criar a apresentação. O filme que meu grupo escolheu foi Coraline. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: regime,
      link: "https://docs.google.com/document/d/1i36CtHiluWNJX1e4bquS0M7ODytFLrgjNJW46_3t3sk/edit?usp=sharing",
      trimestre: "segundo",
    },
    {
      titulo: "Urbanismo e cultura no começo do século XX",
      descricao:
        "Nessa atividade nós precisamos entrar no site Brasiliana Fotográfica e montar uma história com as fotos disponíveis, a história deveria ser sobre a cultura e o urbanismo no começo do século XX. Eu escolhi falar sobre Anna Amélia, uma das primeiras fotógrafas do Brasil. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: urbanismo,
      link: "https://docs.google.com/document/d/16a9CXw6nxBK0RVn-6LddArFtENXskjh6DzqV8bTnvhM/edit?usp=sharing",
      trimestre: "segundo",
    },
    {
      titulo: "Ditadura no Brasil",
      descricao:
        "Durante essa aula nós estudamos sobre a ditadura no Brasil e fizemos uma apresentação sobre algo relacionado ao tema. Meu grupo escolheu falar sobre o Movimento Revolucionário 8 de Outubro. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: mr8,
      link: "https://docs.google.com/document/d/1t-LC47hpodm5TsbNucTHmFfHk7w28fP0TBq2n_TdDjc/edit?usp=sharing",
      trimestre: "terceiro",
    },
    {
      titulo: "Guerra Fria",
      descricao:
        "Nessa atividade nós estudamos sobre a Guerra Fria e fizemos uma apresentação sobre o tema para entender mais a fundo sobre as relaões ocorridas durante o tempo e como o mundo se movia durante o período. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: guerrafria,
      link: "https://docs.google.com/document/d/1hFGJRg1_Vgk0vpx88imyyK5ffuLqKtZv9mT-bsaEodI/edit?usp=sharing",
      trimestre: "terceiro",
    },
  ];

  const linguagens = [
    {
      titulo: "Revista Literária",
      descricao:
        "O Projeto de Revista Literária está sendo realizado durante o ano, nós estamos construindo um site onde fazemos uma revista sobre alguns livros abordados em vestibulares, como a UFSC. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: revista,
      link: "https://docs.google.com/document/d/1tWFwEhayxTxanb8vQWTysAUnqCDVH3lj11aNxayKjgQ/edit?usp=sharing",
      trimestre: "primeiro",
    },
    {
      titulo: "Trabalho Past Simple",
      descricao:
        "Nessa atividade precisavamos fazer uma simulação de um Post miniconto em inglês baseado na foto que recebos. Nós fizemos o trabalho sobre o nosso personagem FreedomRider, um homem em cadeira de rodas que viajou o mundo para encontrar uma paisagem linda.",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: past,
      link: "https://docs.google.com/document/d/1DeyK8tUtdaoCqo6MRo6vI-hY-lbHzRyi6Sv5sbkNCvc/edit?usp=sharing",
      trimestre: "primeiro",
    },
    {
      titulo: "Atividade Pré-modernismo",
      descricao:
        "Nesta atividade nós tivemos como objetivo aprender sobre o Pré-modernismo e suas características, então escolhemos um conto de Euclide da Cunha, OS Sertões, para analisar e entender melhor o movimento literário e como era a época que ele passava. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: modernismo,
      link: "https://docs.google.com/document/d/1NbeOnRcU_mfCalkyviW4PC0aAwUjiRA7ya89RW2Q0OY/edit?usp=sharing",
      trimestre: "primeiro",
    },
    {
      titulo: "Redação Online",
      descricao:
        "Durante esse dia, fizemos uma redação baseada no modelo ENEM, para realizar avaliações da capacidade dos alunos, possibilitando uma revisão mais fácil para a professora, que pode focar em ensinar os pontos fracos dos estudantes. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: redacao,
      link: "https://docs.google.com/document/d/1OIKyoUxgrMYb-HqZmZMOhMcY_-rFrf9U7wpa3_3qzsI/edit?usp=sharing",
      trimestre: "segundo",
    },
    {
      titulo: "Maquete Quartinho",
      descricao: "Nessa atividade nós estudamos o livro Solitária e fizemos uma maquete sobre um dos eventos do livro, com o objetivo de nos aproximarmos com a leitura dos vestibulares. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: maquete,
      link: "https://docs.google.com/document/d/1_sFCShpvb78ykG-yXjZmwAnd17pUHvDdx-Jc5YxSu0E/edit?usp=sharing",
      trimestre: "segundo",
    },
    {
      titulo: "Poema: Soneto de Pertencimento",
      descricao: "Ainda sobre o estudo do livro Solitária, nós fizemos um poema com estrutura de soneto sobre algum dos temas abordados no livro. Meu poema foi sobre a relação entre empregada e patroa e o sentimento de pertencimento que aprisona a trabalhadora. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: solitaria,
      link: "https://docs.google.com/document/d/11u3G1ak0wSJTcsru_prE350xCFaUkG5-emqC045eVnw/edit?usp=sharing",
      trimestre: "segundo",
    },
  ];

  return (
    <section className="py-16" id="project">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 id="materias" className="text-4xl font-semibold">
            Projetos das Matérias
          </h2>
          <p className="text-base p-3">Escolha a matéria desejada e depois o trimestre</p>
        </div>
        
        <div className="flex justify-center space-x-4 mb-8">
          <button
            className={`px-4 py-2 rounded-full ${
              selectedTrimestre === "primeiro"
                ? "bg-gray-800 text-white"
                : "bg-gray-900"
            }`}
            onClick={() => setSelectedTrimestre("primeiro")}
          >
            <span>1º Trimestre</span>
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              selectedTrimestre === "segundo"
                ? "bg-gray-800 text-white"
                : "bg-gray-900"
            }`}
            onClick={() => setSelectedTrimestre("segundo")}
          >
            <span>2º Trimestre</span>
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              selectedTrimestre === "terceiro"
                ? "bg-gray-800 text-white"
                : "bg-gray-900"
            }`}
            onClick={() => setSelectedTrimestre("terceiro")}
          >
            <span>3º Trimestre</span>
          </button>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          <button
            className={`px-4 py-2 rounded-full ${
              selectedCategory === "natureza"
                ? "bg-gray-800 text-white"
                : "bg-gray-900"
            }`}
            onClick={() => setSelectedCategory("natureza")}
          >
            Natureza
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              selectedCategory === "matematica"
                ? "bg-gray-800 text-white"
                : "bg-gray-900"
            }`}
            onClick={() => setSelectedCategory("matematica")}
          >
            Matemática
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              selectedCategory === "humanas"
                ? "bg-gray-800 text-white"
                : "bg-gray-900"
            }`}
            onClick={() => setSelectedCategory("humanas")}
          >
            Humanas
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              selectedCategory === "linguagens"
                ? "bg-gray-800 text-white"
                : "bg-gray-900"
            }`}
            onClick={() => setSelectedCategory("linguagens")}
          >
            Linguagens
          </button>
        </div>
        <div className="materias-content">
          {selectedCategory === "natureza" && (
            <div className="flex flex-wrap">
              {natureza
                .filter((projeto) => projeto.trimestre === selectedTrimestre)
                .map((projeto, index) => (
                  <Cards key={index} {...projeto} />
                ))}
            </div>
          )}
          {selectedCategory === "matematica" && (
            <div className="flex flex-wrap">
              {matematica
                .filter((projeto) => projeto.trimestre === selectedTrimestre)
                .map((projeto, index) => (
                  <Cards key={index} {...projeto} />
                ))}
            </div>
          )}
          {selectedCategory === "humanas" && (
            <div className="flex flex-wrap">
              {humanas
                .filter((projeto) => projeto.trimestre === selectedTrimestre)
                .map((projeto, index) => (
                  <Cards key={index} {...projeto} />
                ))}
            </div>
          )}
          {selectedCategory === "linguagens" && (
            <div className="flex flex-wrap">
              {linguagens
                .filter((projeto) => projeto.trimestre === selectedTrimestre)
                .map((projeto, index) => (
                  <Cards key={index} {...projeto} />
                ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
