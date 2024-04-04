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
  const [selectedCategory, setSelectedCategory] = useState("null");
  const [selectedTrimestre, setSelectedTrimestre] = useState("primeiro");

  const natureza = [
    {
      titulo: "Meme Evolucionismo",
      descricao: "Design & Development",
      imgUrl: memerev,
      link: "https://www.canva.com/design/DAGBcsFb6xQ/MGrunB_UMZN4ImdhJzXvEg/edit?utm_content=DAGBcsFb6xQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      trimestre: "primeiro"
    },
    {
      titulo: "Relatório Circuitos",
      descricao: "Design & Development",
      imgUrl: circuitos,
      link:"https://docs.google.com/document/d/1sjghxCmo8yJ6Sbr6HtbTwanUJxYyZX_3rUkHxwr8lLw/edit?usp=sharing",
      trimestre: "primeiro"
    },
    {
      titulo: "Bagulho lá de Orgânica",
      descricao: "Design & Development",
      imgUrl: organica,
      link:"https://www.canva.com/design/DAF9amqy1uM/OesdO4bOvoUixhsVtgE3zg/edit?utm_content=DAF9amqy1uM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      trimestre: "primeiro"
    },
    {
      titulo: "Pesquisa Genética",
      descricao: "Design & Development",
      imgUrl: genetica,
      link:"https://docs.google.com/document/d/179xiU96jbA58T24E3e_xVC18_JYpR0wqVXnSDNoal_s/edit?usp=sharing",  
      trimestre: "primeiro"
    },
  ];

  const matematica = [
    {
      titulo: "Arcos e Ângulos",
      descricao: "Vídeo de Trigonometria",
      imgUrl: trigonometria,
      link:"https://docs.google.com/document/d/1MSwtlMJp0ExTo8IkjVD7DXWbe0Nl75uTLelr6tSaGMQ/edit?usp=sharing",
      trimestre: "primeiro"
    },
  ];

  const humanas = [
    {
      titulo: "Seminário de Geopolítica",
      descricao: "Design & Development",
      imgUrl: madagascar,
      link:"https://docs.google.com/presentation/d/1THzH8tVVm1UkpQdk84tm7omSe5Z90mRWKukesMZCB5M/edit?usp=sharing",
      trimestre: "primeiro"
    },
    {
      titulo: "Alemanha durante a 2ª Revolução Industrial",
      descricao: "Design & Development",
      imgUrl: revolucao,
      link:"https://docs.google.com/document/d/1y1sZmj3dg7PHWBiSUa3IHYmbugh0LvlfVPI5kr9ZEq4/edit?usp=sharing",
      trimestre: "primeiro"
    },
    {
      titulo: "Reflexão sobre o filme 1917",
      descricao: "Design & Development",
      imgUrl: filme1917,
      link:"https://docs.google.com/document/d/1rwCawYgAyCTfkZZ_Wf49aXpAkJo6ImmbpUcvSPVUOWo/edit?usp=sharing",
      trimestre: "primeiro"
    },
  ];

  const linguagens = [
    {
      titulo: "Revista Literária",
      descricao: "Design & Development",
      imgUrl: revista,
      trimestre: "primeiro"
    },
    {
      titulo: "Trabalho Past Simple",
      descricao: "Design & Development",
      imgUrl: past,
      link:"https://www.canva.com/design/DAGBc6Vi5g4/rxsviAFfcENucNnjdR3WGQ/edit?utm_content=DAGBc6Vi5g4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      trimestre: "primeiro"
    },
    {
      titulo: "Projeto Modernismo",
      descricao: "Design & Development",
      imgUrl: modernismo,
      link:"https://www.canva.com/design/DAF-EkmY-c4/OW1eq109kQYn2kBYeSLZlg/edit?utm_content=DAF-EkmY-c4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      trimestre: "primeiro"
    },
  ]

  
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2 id="materias">Projetos das Matérias</h2>            
            <button className="trimestre" onClick={() => setSelectedTrimestre("primeiro")}>
            <span>1º Trimestre</span>
            <div class="border full-rounded"></div></button>
            <button className="trimestre" onClick={() => setSelectedTrimestre("segundo")}>
            <span>2º Trimestre</span>
            <div class="border full-rounded"></div></button>
            <button className="trimestre" onClick={() => setSelectedTrimestre("terceiro")}>
            <span>3º Trimestre</span>
            <div class="border full-rounded"></div></button>
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
                      natureza.filter(projeto => projeto.trimestre === selectedTrimestre).map((projeto, index) => (
                        <Cards key={index} {...projeto} />
                      ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="matematica">
                  <Row>
                    {selectedCategory === "matematica" &&
                      matematica.filter(projeto => projeto.trimestre === selectedTrimestre).map((projeto, index) => (
                        <Cards key={index} {...projeto} />
                      ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="humanas">
                  <Row>
                    {selectedCategory === "humanas" &&
                      humanas.filter(projeto => projeto.trimestre === selectedTrimestre).map((projeto, index) => (
                        <Cards key={index} {...projeto} />
                      ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="linguagens">
                  <Row>
                    {selectedCategory === "linguagens" &&
                      linguagens.filter(projeto => projeto.trimestre === selectedTrimestre).map((projeto, index) => (
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
