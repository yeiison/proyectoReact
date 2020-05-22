import React from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Row, Col, Card, Container, Input, Nav} from 'react-bootstrap';

class HomePage extends React.Component{
    render() {
        return (
            <Container>
                <Card>
                    <Row>
                        <Col sm={12}>
                            <Card.Body>
                               <div class="card text-center p-3  ">
                                   <h2>GESTION DE EQUIPOS</h2>
                                   <h2>BIENVENIDOS</h2>
                                </div>
                            </Card.Body>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm>
                            <Card.Body>
                                <Card.Link href = "/users">
                                    <div class="card text-center p-3  ">
                                        <Card.Title>ICONO</Card.Title>
                                        <Card.Text>
                                            <h3>USUARIOS</h3>
                                        </Card.Text>
                                    </div>
                                </Card.Link>
                            </Card.Body>
                        </Col>

                        <Col sm>
                            <Card.Body>
                                <div class="card text-center p-3  ">
                                    <Card.Title>ICONO</Card.Title>
                                    <Card.Text>
                                        <h3>PORTATILES</h3>
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm>
                            <Card.Body>
                                <div class="card text-center  p-3  ">
                                    <Card.Title>ICONO</Card.Title>
                                   <Card.Text>
                                        <h3>CELULARES</h3>
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Col>

                        <Col sm>
                            <Card.Body >
                                <div class="card text-center p-3  ">
                                    <Card.Title>ICONO</Card.Title>
                                    <Card.Text>
                                        <h3>CONSULTAS</h3>
                                    </Card.Text>
                                </div> 
                            </Card.Body>
                        </Col>
                    </Row>
                    <Nav className="justify-content-center" activeKey="/home">
                        <Nav.Item>
                        <Nav.Link href="/compras">COMPRAS</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link href="business">EMPRESAS</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link href="caracteristicas">CARACTERISTICAS</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link href="partes">PARTES </Nav.Link>
                        </Nav.Item>
                    </Nav>


                    <Row>
                        <Col sm={12}>
                            <Card.Body>
                                <Card.Link href = "/login">
                                    <div class="card text-center">
                                    <h3>Salir</h3>
                                    </div>
                                </Card.Link>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Container>
        )    
    }
}

export default HomePage