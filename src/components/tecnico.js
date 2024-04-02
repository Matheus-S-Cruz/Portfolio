import { Container, Row, Col, Nav, Tab, Card} from "react-bootstrap";
import { TecnicoCards } from "./teccards";


export const Tecnico = () => { /* Parte Natureza*/
    const natureza = [
        {
            title: "Atividade Biologia",
            description: "Meme sobre evolucionismo.",
        },
        {
            title: "Atividade 2",
            description: "Apresentação de uma revisão sobre química orgânica.",
        },
        {
            title: "Atividade 3",
            description: "Atividade prática de circuitos e resistores.",
        },
        {
            title: "Atividade 4",
            description: "Uma 'autoria' a partir da explicação \n durante a aula de Evolução e Teorias Evolucionistas.",
        },
    ];
    const humanas = [
        {
            title: "Review Filme 1917",
            description: "Neste dia, assistimos o filme 1917 pois o \n mesmo retrata de uma época a qual estamos \n estudando e depois respondemos um questionário sobre o filme.",
        },
        {
            title:  "Introdução à Geopolítica",
            description: "Escolhemos um país do qual deveríamos fazer uma apresentação \n falando sobre a situação atual do país.",
        },
        {
            title: "O Imperialismo na América",
            description: "Esta atividade requereu que nós fizessémos a análise de uma determinada imagem dada durante a aula para refletirmos em sala.  ",
        },
       
    ];
    const linguagens = [
    
        {
            title:"Atividade Simple Past - Miniconto em Inglês",
            description:"Nessa atividade nós criamos um cartaz em formato de post do Instagram contando em forma de mini conto a história por trás da imagem que recebemos. ",
        },
        {
            title: "Pré-Modernismo",
            description: "Escolhemos uma obra do período pré-modernista e fizemos uma apresentação sobre ela.",
            
        }
    ];


return(
    <section className="project" id="project">
        <Container>
        <Row>
            <Col>
          
          <h2>Projetos</h2>
          <p>Jazem aqui as principais atividades ocorridas ao longo do ano</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center alignt-items-center" id="pills-tab">
                <Nav.Item>
                    <Nav.Link   eventKey="natureza">Natureza</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="matematica"> Matemática </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="linguagens" > Linguagens</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="humanas" > Humanas </Nav.Link>
                </Nav.Item>
              
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="natureza">
                   <Row>
                    {
                         natureza.map((natureza, index) => {
                            return(
                               <TecnicoCards
                                key={index}
                                {...natureza} />
                            )
                        })
                    }
                   </Row>
                </Tab.Pane>
                   <Tab.Pane eventKey="humanas">
                   <Row>
                    {
                         humanas.map((humanas, index) => {
                            return(
                               <TecnicoCards
                                key={index}
                                {...humanas} />
                            )
                        })
                    }
                   </Row>
                   </Tab.Pane>

                   <Tab.Pane eventKey="linguagens">
                    <Row>
                        {
                            linguagens.map((linguagens, index) => {
                                return(
                                    <TecnicoCards 
                                    key={index}
                                    {...linguagens} />
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
)}
