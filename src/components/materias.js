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

export const Materias = () =>{

  const natureza = [
    {
      titulo: "Meme Revolucionismo",
      descricao: "Design & Development",
      imgUrl: memerev,
    },
    {
      titulo: "Business Startup",
      descricao: "Design & Development",
      imgUrl: circuitos,
    },
    {
      titulo: "Business Startup",
      descricao: "Design & Development",
      imgUrl: organica,
    },
    {
      titulo: "Business Startup",
      descricao: "Design & Development",
      imgUrl: genetica,
    },
  ];

  const matematica = [
    {
      titulo: "Business Startup",
      descricao: "Design & Development",
      imgUrl: trigonometria,
    },
  ];

  const humanas = [
    {
      titulo: "Business Startup",
      descricao: "Design & Development",
      imgUrl: madagascar,
    },
    {
      titulo: "Business Startup",
      descricao: "Design & Development",
      imgUrl: revolucao,
    },
    {
      titulo: "Business Startup",
      descricao: "Design & Development",
      imgUrl: filme1917,
    },
  ];

  const linguagens = [
    {
      titulo: "Business Startup",
      descricao: "Design & Development",
      imgUrl: revista,
    },
    {
      titulo: "Business Startup",
      descricao: "Design & Development",
      imgUrl: past,
    },
    {
      titulo: "Business Startup",
      descricao: "Design & Development",
      imgUrl: modernismo,
    },
  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
              <h2>Projetos das Matérias</h2>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
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
                  <Tab.Content>
                    <Tab.Pane eventKey="natureza">
                      <Row>
                        {
                          natureza.map((natureza, index) => {
                            return (
                              <Cards
                                key={index}
                                {...natureza}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="matematica">
                      <Row>
                        {
                          matematica.map((matematica, index) => {
                            return (
                              <Cards
                                key={index}
                                {...matematica}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="humanas">
                      <Row>
                        {
                          humanas.map((humanas, index) => {
                            return (
                              <Cards
                                key={index}
                                {...humanas}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="linguagens">
                      <Row>
                        {
                          linguagens.map((linguagens, index) => {
                            return (
                              <Cards
                                key={index}
                                {...linguagens}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>     
                    </Tab.Content>               

              </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
