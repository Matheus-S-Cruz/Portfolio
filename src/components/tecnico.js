import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { TecnicoCards } from './teccards'
import calculadora from '../images/calculadora.png'
import livro from '../images/livro.png'
import diagrama from '../images/diagrama.png'
import implantacao from '../images/implantacao.png'

export const Tecnico = () => {
  const [selectedCategory, setSelectedCategory] = useState("null");
  const [selectedTrimestre, setSelectedTrimestre] = useState("primeiro");

  const desenvolvimento = [
    {
      titulo: "Calculadora de Horas",
      descricao: "Calculadora de Horas programada. ",
      mais:"Clique para ver mais sobre a atividade",
      imgUrl: calculadora,
      trimestre: "primeiro",
      link:"https://github.com/Matheus-S-Cruz/Calculadora-De-Horas",
    },
    {
      titulo: "Cadastro de Livros",
      descricao: "API com SpringBoot. ",
      mais:"Clique para ver mais sobre a atividade",
      imgUrl: livro,
      trimestre: "primeiro",
      link:"https://docs.google.com/document/d/1kNYXvBqI5UG5ESheDR-8i--RrXXFbfvZ6WpvuiZ96l8/edit?usp=sharing",
    },
  ];

  const implantação = [
    {
      titulo: "Implantação de Sistemas",
      descricao: "Projeto de Implantação de Software com Wrike. ",
      mais:"Clique para ver mais sobre a atividade",
      imgUrl: implantacao,
      trimestre: "primeiro",
      link:"https://docs.google.com/spreadsheets/d/1s7CjzyajRil_DIJ7Vb_pDFbP7tmqHyI91xOadTypNW8/edit?usp=sharing",
    },
  ];

  const modelagem = [
    {
      titulo: "Diagrama Casos de Uso",
      descricao: "Diagrama de Casos de Uso da SA. ",
      mais:"Clique para ver mais sobre a atividade",
      imgUrl: diagrama,
      trimestre: "primeiro",
      link:"https://docs.google.com/document/d/1tpwqw4gZqRbBlWCwBww9a8dNlh7ycf5K-P-KOqtE_D0/edit?usp=sharing"
    },
  ];

  return (
    <section className="tecnico" id="tecnico">
      <Container>
        <Row>
          <Col>
            <h2 id="tecnico">Projetos do Técnico</h2>
            <button className="trimestre" onClick={() => setSelectedTrimestre("primeiro")}>
            <span>1º Trimestre</span>
            <div class="border full-rounded"></div></button>
            <button className="trimestre" onClick={() => setSelectedTrimestre("segundo")}>
            <span>2º Trimestre</span>
            <div class="border full-rounded"></div></button>
            <button className="trimestre" onClick={() => setSelectedTrimestre("terceiro")}>
            <span>3º Trimestre</span>
            <div class="border full-rounded"></div></button>
            <Tab.Container id="tecnicos-tabs" activeKey={selectedCategory} onSelect={(key) => setSelectedCategory(key)}>
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="desenvolvimento">Desenvolvimento De Sistemas</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="implantação">Implantação de Software</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="modelagem">Modelagem de Sistemas</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="desenvolvimento">
                  <Row>
                    {selectedCategory === "desenvolvimento" &&
                      desenvolvimento.filter(projeto => projeto.trimestre === selectedTrimestre).map((projeto, index) => (
                        <TecnicoCards key={index} {...projeto} />
                      ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="implantação">
                  <Row>
                    {selectedCategory === "implantação" &&
                      implantação.filter(projeto => projeto.trimestre === selectedTrimestre).map((projeto, index) => (
                        <TecnicoCards key={index} {...projeto} />
                      ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="modelagem">
                  <Row>
                    {selectedCategory === "modelagem" &&
                      modelagem.filter(projeto => projeto.trimestre === selectedTrimestre).map((projeto, index) => (
                        <TecnicoCards key={index} {...projeto} />
                      ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
