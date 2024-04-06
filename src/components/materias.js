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
      titulo: "Meme Sobre Evolucionismo",
      descricao: "Nesta atividade nós tivemos como objetivo aprender sobre a evolução das espécies e sobre os principais cientistas que contribuiram para esse estudo. ",
      mais:"Clique para ver mais sobre a atividade",
      imgUrl: memerev,
      link: "https://docs.google.com/document/d/1ZAgosWZWtJuDwlkKT5hyofby8jV0Mt6GlLvWxPH-cm4/edit?usp=sharing",
      trimestre: "primeiro"
    },
    {
      titulo: "Atividade Tai",
      descricao: "Relatório Circuitos. ",
      mais:"Clique para ver mais sobre a atividade",
      imgUrl: circuitos,
      link:"https://docs.google.com/document/d/1sjghxCmo8yJ6Sbr6HtbTwanUJxYyZX_3rUkHxwr8lLw/edit?usp=sharing",
      trimestre: "primeiro"
    },
    {
      titulo: "Atividade Marga",
      descricao: "Apresentação Revisão de Orgânica. ",
      mais:"Clique para ver mais sobre a atividade",
      imgUrl: organica,
      link:"https://docs.google.com/document/d/1JV9LMG3lZmch0DwXH83e1sh2056OdOTn3N6FAAUE9W4/edit?usp=sharing",
      trimestre: "primeiro"
    },
    {
      titulo: "Atividade de Autoria",
      descricao: "Pesquisa Genética. ",
      mais:"Clique para ver mais sobre a atividade",
      imgUrl: genetica,
      link:"https://docs.google.com/document/d/1X57RT53pPuh1N_ciGeJIDRwTD5tjagHC90G9Ju9PZVA/edit?usp=sharing",  
      trimestre: "primeiro"
    },
  ];

  const matematica = [
    {
      titulo: "Arcos e Ângulos",
      descricao: "Vídeo de Trigonometria. ",
      mais:"Clique para ver mais sobre a atividade",
      imgUrl: trigonometria,
      link:"https://docs.google.com/document/d/1MSwtlMJp0ExTo8IkjVD7DXWbe0Nl75uTLelr6tSaGMQ/edit?usp=sharing",
      trimestre: "primeiro"
    },
  ];

  const humanas = [
    {
      titulo: "Seminário de Geopolítica",
      descricao: "Magascar Geopolítica. ",
      mais:"Clique para ver mais sobre a atividade",
      imgUrl: madagascar,
      link:"https://docs.google.com/document/d/1QF3lG7gZgbUNqcHCDSPF1ugaCy0tksOqWx0Kjz-sKNs/edit?usp=sharing",
      trimestre: "primeiro"
    },
    {
      titulo: "Tecnologias da 2º Revolução Industrial",
      descricao: "Alemanha durante a 2ª Revolução Industrial. ",
      mais:"Clique para ver mais sobre a atividade",
      imgUrl: revolucao,
      link:"https://docs.google.com/document/d/1UBPWDiXnfxgsGL2eAsj7Q9aUmWPbp7_t7EGW--0WwNM/edit?usp=sharing",
      trimestre: "primeiro"
    },
    {
      titulo: "Filme 1917",
      descricao: "Filme 1917 - Análise. ",
      mais:"Clique para ver mais sobre a atividade",
      imgUrl: filme1917,
      link:"https://docs.google.com/document/d/13MQW4uVOygzYk50WGQmpHJT48-hzjmLC-WZvjx3lsuk/edit?usp=sharing",
      trimestre: "primeiro",
    },
  ];

  const linguagens = [
    {
      titulo: "Revista Literária",
      descricao: "Projeto de Revista Literária. ",
      mais:"Clique para ver mais sobre a atividade",
      imgUrl: revista,
      link:"https://docs.google.com/document/d/1tWFwEhayxTxanb8vQWTysAUnqCDVH3lj11aNxayKjgQ/edit?usp=sharing",
      trimestre: "primeiro"
    },
    {
      titulo: "Trabalho Past Simple",
      descricao: "Post miniconto em inglês. ",
      mais:"Clique para ver mais sobre a atividade",
      imgUrl: past,
      link:"https://docs.google.com/document/d/1DeyK8tUtdaoCqo6MRo6vI-hY-lbHzRyi6Sv5sbkNCvc/edit?usp=sharing",
      trimestre: "primeiro"
    },
    {
      titulo: "Atividade Pré-modernismo",
      descricao: "Pré Modernismo. ",
      mais:"Clique para ver mais sobre a atividade",
      imgUrl: modernismo,
      link:"https://docs.google.com/document/d/1NbeOnRcU_mfCalkyviW4PC0aAwUjiRA7ya89RW2Q0OY/edit?usp=sharing",
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
