import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { TecnicoCards } from './teccards'
import memerev from '../images/memerev.png'
import circuitos from '../images/circuitos.png'
import diagrama from '../images/diagrama.png'

export const Tecnico = () => {
  const [selectedCategory, setSelectedCategory] = useState("null");

  const desenvolvimento = [
    {
      titulo: "Meme Revolucionismo",
      descricao: "Design & Development",
      imgUrl: memerev,
    },
    {
      titulo: "Circuitos",
      descricao: "Design & Development",
      imgUrl: circuitos,
    },
  ];

  const implantação = [

  ];

  const modelagem = [
    {
      titulo: "Diagrama Casos de Uso",
      descricao: "Design & Development",
      imgUrl: diagrama,
    },
  ];

  return (
    <section className="tecnico" id="tecnico">
      <Container>
        <Row>
          <Col>
            <h2 id="tecnico">Projetos do Técnico</h2>
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
                      desenvolvimento.map((projeto, index) => (
                        <TecnicoCards key={index} {...projeto} />
                      ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="implantação">
                  <Row>
                    {selectedCategory === "implantação" &&
                      implantação.map((projeto, index) => (
                        <TecnicoCards key={index} {...projeto} />
                      ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="modelagem">
                  <Row>
                    {selectedCategory === "modelagem" &&
                      modelagem.map((projeto, index) => (
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
