import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
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

export const Materias = () => {
  const [selectedCategory, setSelectedCategory] = useState("natureza");
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
      titulo: "Revista Eletrônica",
      descricao: ".",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: ecologia,
      link: "https://docs.google.com/document/d/1e-JP8UYoA_Ab2_mtc3143ejoo9txk9fHjUvMHDYNFNQ/edit?usp=sharing",
      trimestre: "segundo",
    },
    {
      titulo: "Circuitos Elétricos",
      descricao: ".",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: mapamentalcircuito,
      link: "https://docs.google.com/document/d/1lVfmCjL84-tMiMRYvMR9pTNrU0PRPKfr6IQq5Iz4Zrs/edit?usp=sharing",
      trimestre: "segundo",
    },
    {
      titulo: "Uso de Plástico",
      descricao:
        "Nesta atividade relembramos o conhecimento de conteúdos de química orgânica através de uma apresentação sobre o tema. ",
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
        "Nesta atividade nosso objetivo foi produzir uma trilha dentro do ambiente da escola utilizando os conceitos de Arcos e Ângulos com todas as instruções e demais elementos necessários. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: trigonometria,
      link: "https://docs.google.com/document/d/1HyQAysPajJ-0Yjk71QgKzRuT-nL5_uMeM8kc2uxpuqc/edit?usp=sharing",
      trimestre: "segundo",
    },
    {
      titulo: "Arcos e Ângulos",
      descricao:
        "Nesta atividade nosso objetivo foi produzir uma trilha dentro do ambiente da escola utilizando os conceitos de Arcos e Ângulos com todas as instruções e demais elementos necessários. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: trigonometria,
      link: "https://docs.google.com/document/d/1PpHyNXU31IR4bwBE2LGAHMYCuIiyaqHRzIFGSzXR5zA/edit?usp=sharing",
      trimestre: "segundo",
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
      descricao: "Atividade ainda não finalizada. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: trigonometria,
      link: "https://docs.google.com/document/d/1_sFCShpvb78ykG-yXjZmwAnd17pUHvDdx-Jc5YxSu0E/edit?usp=sharing",
      trimestre: "segundo",
    },
    {
      titulo: "Poema",
      descricao: "Atividade ainda não finalizada. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: trigonometria,
      link: "https://docs.google.com/document/d/11u3G1ak0wSJTcsru_prE350xCFaUkG5-emqC045eVnw/edit?usp=sharing",
      trimestre: "segundo",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2 id="materias">Projetos das Matérias</h2>
            <button
              className="trimestre"
              onClick={() => setSelectedTrimestre("primeiro")}
            >
              <span>1º Trimestre</span>
              <div class="border full-rounded"></div>
            </button>
            <button
              className="trimestre"
              onClick={() => setSelectedTrimestre("segundo")}
            >
              <span>2º Trimestre</span>
              <div class="border full-rounded"></div>
            </button>
            <button
              className="trimestre"
              onClick={() => setSelectedTrimestre("terceiro")}
            >
              <span>3º Trimestre</span>
              <div class="border full-rounded"></div>
            </button>
            <Tab.Container
              id="projects-tabs"
              activeKey={selectedCategory}
              onSelect={(key) => setSelectedCategory(key)}
            >
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="natureza">Natureza</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="matematica">Matemática</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="humanas">Humanas</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="linguagens">Linguagens</Nav.Link>
                </Nav.Item>
              </Nav>
              <br />
              <Tab.Content className="materias-content">
                <Tab.Pane eventKey="natureza">
                <div className="materias-wrapper">
                  <Row>
                    {selectedCategory === "natureza" &&
                      natureza
                        .filter(
                          (projeto) => projeto.trimestre === selectedTrimestre
                        )
                        .map((projeto, index) => (
                          <Cards key={index} {...projeto} />
                        ))}
                  </Row>
                </div>
                </Tab.Pane>
                <Tab.Pane eventKey="matematica">
                <div className="materias-wrapper">
                  <Row>
                    {selectedCategory === "matematica" &&
                      matematica
                        .filter(
                          (projeto) => projeto.trimestre === selectedTrimestre
                        )
                        .map((projeto, index) => (
                          <Cards key={index} {...projeto} />
                        ))}
                  </Row>
                </div>
                </Tab.Pane>
                <Tab.Pane eventKey="humanas">
                <div className="materias-wrapper">
                  <Row>
                    {selectedCategory === "humanas" &&
                      humanas
                        .filter(
                          (projeto) => projeto.trimestre === selectedTrimestre
                        )
                        .map((projeto, index) => (
                          <Cards key={index} {...projeto} />
                        ))}
                  </Row>
                </div>
                </Tab.Pane>
                <Tab.Pane eventKey="linguagens">
                <div className="materias-wrapper">
                  <Row>
                    {selectedCategory === "linguagens" &&
                      linguagens
                        .filter(
                          (projeto) => projeto.trimestre === selectedTrimestre
                        )
                        .map((projeto, index) => (
                          <Cards key={index} {...projeto} />
                        ))}
                  </Row>
                </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
