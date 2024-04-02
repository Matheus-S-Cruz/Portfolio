import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Cards } from "./materiasCard";
import memerev from '../images/memerev.png'
import circuitos from '../images/circuitos.png'
import organica from '../images/organica.png'
import genetica from '../images/genetica.png'
import trigonometria from '../images/trigonometria.png'
import madagascar from '../images/madagascar.png'
import revolucao from '../images/revolucao.png'
import filme1917 from '../images/filme1917.png'
import revista from '../images/revista.png'
import past from '../images/past.png'
import modernismo from '../images/modernismo.png'

export const Materias = () => {
  const [selectedCategory, setSelectedCategory] = useState("natureza");

  const natureza = [
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
    {
      titulo: "Bagulho lá de Orgânica",
      descricao: "Design & Development",
      imgUrl: organica,
    },
    {
      titulo: "Pesquisa Genética",
      descricao: "Design & Development",
      imgUrl: genetica,
    },
  ];

  const matematica = [
    {
      titulo: "Vídeo de Trigonometria",
      descricao: "Design & Development",
      imgUrl: trigonometria,
    },
  ];

  const humanas = [
    {
      titulo: "Estudo de Madagascar",
      descricao: "Design & Development",
      imgUrl: madagascar,
    },
    {
      titulo: "Alemanha durante a 2ª Revolução Industrial",
      descricao: "Design & Development",
      imgUrl: revolucao,
    },
    {
      titulo: "Reflexão sobre o filme 1917",
      descricao: "Design & Development",
      imgUrl: filme1917,
    },
  ];

  const linguagens = [
    {
      titulo: "Revista Literária",
      descricao: "Design & Development",
      imgUrl: revista,
    },
    {
      titulo: "Trabalho Past Simple",
      descricao: "Design & Development",
      imgUrl: past,
    },
    {
      titulo: "Projeto Modernismo",
      descricao: "Design & Development",
      imgUrl: modernismo,
    },
  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2 id="materias">Projetos das Matérias</h2>
            <Tab.Container id="projects-tabs" activeKey={selectedCategory} onSelect={(key) => setSelectedCategory(key)}>
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
              <Tab.Content>
                <Tab.Pane eventKey="natureza">
                  <Row>
                    {selectedCategory === "natureza" &&
                      natureza.map((projeto, index) => (
                        <Cards key={index} {...projeto} />
                      ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="matematica">
                  <Row>
                    {selectedCategory === "matematica" &&
                      matematica.map((projeto, index) => (
                        <Cards key={index} {...projeto} />
                      ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="humanas">
                  <Row>
                    {selectedCategory === "humanas" &&
                      humanas.map((projeto, index) => (
                        <Cards key={index} {...projeto} />
                      ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="linguagens">
                  <Row>
                    {selectedCategory === "linguagens" &&
                      linguagens.map((projeto, index) => (
                        <Cards key={index} {...projeto} />
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
