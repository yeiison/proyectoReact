import React from 'react';
import axios from 'axios';
import { Button, Form, Row, Col, Card, Container,  } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';

class Caracteristicas extends React.Component{

    saveCaracteristica(e) {
        var caracteristica = {
            procesador: document.getElementById("caracteristicaProcesador").value,
            generacion: document.getElementById("caracteristicaGeneracion").value,
            ram: document.getElementById("caracteristicaRam").value,
            discoDuro: document.getElementById("caracteristicaDiscoDuro").value,
            estadoDD: document.getElementById("caracteristicaEstadoDD").value,
               
        };

        axios.post ("http://localhost:8000/api/caracteristicas/", caracteristica)
        .then((response) => {
            console.log(response);
            }, (error) => {
                console.log(error)
            });        
        
    }

    render() {
        return (        
            <Container maxWidth="sm">
                <Row>
                    <Col sm={8}>
                        <Card body>
                            <Card.Header>Caracteristicas
                                
                                <image href="/homePage" style ={{fontSize:'1cm'}}>
                                        <FontAwesomeIcon icon= {faHome}/>
                                </image>
                               
                            </Card.Header>

                            <Form id="form-caracteristica">
                                
                                <Form.Group as={Col} controlId="caracteristicaProcesador">
                                    <Form.Label>Procesador</Form.Label>
                                    <Form.Control type="caracteristicaProcesador" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="caracteristicaGeneracion">
                                    <Form.Label>Generacion</Form.Label>
                                    <Form.Control type="caracteristicaGeneracion" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="caracteristicaRam">
                                    <Form.Label>Ram</Form.Label>
                                    <Form.Control type="caracteristicaRam" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="caracteristicaDiscoDuro">
                                    <Form.Label>Disco Duro</Form.Label>
                                    <Form.Control type="caracteristicaDiscoDuro" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="caracteristicaEstadoDD">
                                    <Form.Label>Estado DD</Form.Label>
                                    <Form.Control type="caracteristicaEstadoDD" />
                                </Form.Group>
                                
                            </Form>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Button variant="primary" type="submit" form="form-caracteristica" onClick = {this.saveCaracteristica}>Ingresar</Button><br />
                        <Button variant="primary" >Eliminar</Button><br />
                        <Button variant="primary">Actualizar</Button><br />
                    </Col>
                </Row>
            </Container> 
        )    
    }
}

export default Caracteristicas