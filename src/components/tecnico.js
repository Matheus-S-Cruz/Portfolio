import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { TecnicoCards } from "./teccards";
import calculadora from "../images/calculadora.png";
import livro from "../images/livro.png";
import diagrama from "../images/diagrama.png";
import implantacao from "../images/implantacao.png";
import sa from "../images/sa.png";
import regras from "../images/regras.png";
import kanban from "../images/kanban.png";
import logico from "../images/logico.png";
import medico from "../images/medico.png";
import normalização from "../images/normalização.png";
import api from "../images/api.png";
import apigithub from "../images/apigithub.png";
import biblio from "../images/biblio.png";
import joomla from "../images/joomla.png";

export const Tecnico = () => {
  const [selectedCategory, setSelectedCategory] = useState("desenvolvimento");
  const [selectedTrimestre, setSelectedTrimestre] = useState("primeiro");

  const desenvolvimento = [
    {
      titulo: "Calculadora de Horas",
      descricao:
        "Nessa atividade foi desenvolvida uma calculadora de horas em ReactJS, foi o meu primeiro contato com a linguagem, onde pude aprender sobre componentes, props, states e hooks. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: calculadora,
      trimestre: "primeiro",
      link: "https://github.com/Matheus-S-Cruz/CalcHorasReact/",
    },
    {
      titulo: "Cadastro de Livros",
      descricao:
        "Nessa atividade utilizamos uma API com SpringBoot para fazer um sistema de cadastro de livros, onde aprendi sobre o uso de métodos HTTP, REST, e o uso de um banco de dados. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: livro,
      trimestre: "primeiro",
      link: "https://docs.google.com/document/d/1kNYXvBqI5UG5ESheDR-8i--RrXXFbfvZ6WpvuiZ96l8/edit?usp=sharing",
    },
    {
      titulo: "API Github",
      descricao:
        "Nessa atividade fizemos um projeto que utiliza uma API do github para buscar algum usuário da plataforma. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: apigithub,
      trimestre: "primeiro",
      link: "https://docs.google.com/document/d/1fkAOeQYp9Z8HD26QfHf2hNH3QQw0L0teq8TRDYZQ_nY/edit?usp=sharing",
    },
    {
      titulo: "Trabalho API",
      descricao:
        "Nessa atividade fizemos um trabalho sobre as APIs, usando canva. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: api,
      trimestre: "primeiro",
      link: "https://docs.google.com/document/d/1Gmwithv0Z1mweWYEW7oErSUrx7-A3l5sgDctOSB3dlU/edit?usp=sharing",
    },
    {
      titulo: "Projeto Biblioteca",
      descricao:
        "Nesse projeto nós fizemos um sistema de biblioteca com SpringBoot, onde aprendi sobre o uso de métodos HTTP, REST, e o uso de um banco de dados. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: biblio,
      trimestre: "segundo",
      link: "https://drive.google.com/drive/folders/1Ve9QU9DxRJiJUWMmGCIGWYnIAmOpoqVr?usp=sharing",
    },
  ];

  const implantação = [
    {
      titulo: "Implantação de Sistemas",
      descricao:
        "Nessa aula nós fizemos um projeto de Implantação de Software com Wrike. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: implantacao,
      trimestre: "primeiro",
      link: "https://docs.google.com/spreadsheets/d/1s7CjzyajRil_DIJ7Vb_pDFbP7tmqHyI91xOadTypNW8/edit?usp=sharing",
    },
    {
      titulo: "Cenario 1 Atividade 1",
      descricao:
        "Nessa atividade nós fizemos um documento com o objetivo de propor um modelo de instalação para a empresa Veículos Brasil, este sistema seria gerenciado pela Joomla. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: joomla,
      trimestre: "primeiro",
      link: "https://docs.google.com/document/d/1aAl0wvX8bZFa3VQgdwSJ4vRkb1k41HXRXE888Opl7d4/edit?usp=sharing",
    },
  ];

  const modelagem = [
    {
      titulo: "Diagrama Casos de Uso",
      descricao:
        "Nessa atividade fizemos um Diagrama de Casos de Uso para a SA. O diagrama foi feito no Lucidchart. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: diagrama,
      trimestre: "primeiro",
      link: "https://docs.google.com/document/d/1tpwqw4gZqRbBlWCwBww9a8dNlh7ycf5K-P-KOqtE_D0/edit?usp=sharing",
    },
    {
      titulo: "Wireframe Alta Fidelidade",
      descricao:
        "Nessa atividade fizemos um Wireframe de Alta Fidelidade para a SA. O wireframe foi feito no Figma. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: sa,
      trimestre: "primeiro",
      link: "https://docs.google.com/document/d/1N2i-uzx4hYPsXLOOdPYMeHanwy9UN7gOrYU0-ZTiuRc/edit?usp=sharing",
    },
    {
      titulo: "Regras de Negócio",
      descricao:
        "Nessa atividade fizemos um documento de Regras de Negócio para a SA. O documento foi feito no Google Planilhas. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: regras,
      trimestre: "primeiro",
      link: "https://docs.google.com/document/d/1gniDpJ0b2ax_Tg4h9W8UJxGyENCdBr3stuTlN0i-Jq8/edit?usp=sharing",
    },
    {
      titulo: "Metodologias de Desenvolvimento",
      descricao:
        "Nessa atividade nós fizemos uma sala de aula invertida sobre Metodologias de Desenvolvimento. Nosso grupo ficou responsável por falar sobre a Kanban. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: kanban,
      trimestre: "segundo",
      link: "https://docs.google.com/document/d/1s5LtI3lKPssqYusBlYKqM7a_2-fiHmsiojZPwy9sy7Y/edit?usp=sharing",
    },
  ];

  const dados = [
    {
      titulo: "Modelo Lógico",
      descricao:
        "Nessa atividade fizemos uma lista de exercícios sobre Modelo Lógico. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: logico,
      trimestre: "segundo",
      link: "https://docs.google.com/document/d/1O3WwylraSk6qFRZmluvgDSv3MNvD6E_hhAj7EDA1jFk/edit?usp=sharing",
    },
    {
      titulo: "Sistema Gestão de Consultório",
      descricao:
        "Nessa atividade fizemos, em grupos, a modelagem de um Sistema de Gestão de Consultório Médico. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: medico,
      trimestre: "segundo",
      link: "https://docs.google.com/document/d/1_xw_R3wRNFDWlrlLcQDz8A_EIipWBREVDehX4gOHUHQ/edit?usp=sharing",
    },
    {
      titulo: "Normalização de Dados",
      descricao:
        "Nessa atividade fizemos uma pesquisa sobre Normalização de Dados, em duplas. ",
      mais: "Clique para ver mais sobre a atividade",
      imgUrl: normalização,
      trimestre: "segundo",
      link: "https://docs.google.com/document/d/1hPZuR3fVPiPjw_oi6a5PW1ElQZbwLq8HluYiD3fRpaA/edit?usp=sharing",
    },
  ];

  return (
    <section className="tecnico" id="tecnico">
      <Container>
        <Row>
          <Col>
            <h2 id="tecnico">Projetos do Técnico</h2>
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
              id="tecnicos-tabs"
              activeKey={selectedCategory}
              onSelect={(key) => setSelectedCategory(key)}
            >
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="desenvolvimento">Desenvolvimento De Sistemas</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="implantação">Implantação de Software</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="modelagem">Modelagem de Sistemas</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="dados">Banco de Dados</Nav.Link>
                </Nav.Item>
              </Nav> 
              <br />           
              <Tab.Content className="tecnico-content">
                <Tab.Pane eventKey="desenvolvimento">
                  <div className="tecnico-wrapper">
                  <Row>
                    {selectedCategory === "desenvolvimento" &&
                      desenvolvimento
                        .filter(
                          (projeto) => projeto.trimestre === selectedTrimestre
                        )
                        .map((projeto, index) => (
                          <TecnicoCards key={index} {...projeto} />
                        ))}
                  </Row>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="implantação">
                  <div className="tecnico-wrapper">
                  <Row>
                    {selectedCategory === "implantação" &&
                      implantação
                        .filter(
                          (projeto) => projeto.trimestre === selectedTrimestre
                        )
                        .map((projeto, index) => (
                          <TecnicoCards key={index} {...projeto} />
                        ))}
                  </Row>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="modelagem">
                <div className="tecnico-wrapper">
                  <Row>
                    {selectedCategory === "modelagem" &&
                      modelagem
                        .filter(
                          (projeto) => projeto.trimestre === selectedTrimestre
                        )
                        .map((projeto, index) => (
                          <TecnicoCards key={index} {...projeto} />
                        ))}
                  </Row>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="dados">
                <div className="tecnico-wrapper">
                  <Row>
                    {selectedCategory === "dados" &&
                      dados
                        .filter(
                          (projeto) => projeto.trimestre === selectedTrimestre
                        )
                        .map((projeto, index) => (
                          <TecnicoCards key={index} {...projeto} />
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
