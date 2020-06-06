import React from 'react';
import axios from 'axios';
import { Button, Form, Row, Col, Card, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';

class Partes extends React.Component{

    saveParte(e) {
        var parte = {
            fecha: document.getElementById("parteFecha").value,
            tipo: document.getElementById("parteTipo").value,
            marca: document.getElementById("parteMarca").value,
            caracteristicas: document.getElementById("parteCaracteristica").value,
            cantidad: document.getElementById("parteCantidad").value,
            compra: document.getElementById("parteCompra").value,
        };

        axios.post ("http://localhost:8000/api/partes/", parte)
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
                            <Row>
                                <Col sm={10}>
                                <Card.Header><h1>Partes</h1></Card.Header>
                                </Col>
            
                                <Col sm={2}>
                                    <Card.Link sm={4} href = "/homePage">
                                        <div class="card text-center p-3">
                                            <image style ={{fontSize:'1cm'}}>
                                                <FontAwesomeIcon icon= {faHome}/>
                                            </image>
                                        </div>
                                    </Card.Link>
                                </Col>
                            </Row>
                       
                            <Form id="form-parte">
                                <Form.Group controlId="compraFecha">
                                    <Form.Label>fecha</Form.Label>
                                    <Form.Control type="compraFecha" />
                                </Form.Group>

                                <Form.Group controlId="compraTipo">
                                    <Form.Label>tipo</Form.Label>
                                    <Form.Control type="compraTipo" />
                                   </Form.Group>
                               
                                <Form.Group controlId="parteMarca">
                                    <Form.Label>Marca</Form.Label>
                                    <Form.Control type="parteMarca"/>
                                </Form.Group>

                                <Form.Group controlId="parteCaracteristica">
                                    <Form.Label>Carcateristica</Form.Label>
                                    <Form.Control type="parteCaracteristica" />
                                </Form.Group>

                                <Form.Group controlId="parteCantidad">
                                    <Form.Label>Cantidad</Form.Label>
                                    <Form.Control type="parteCantidad" />
                                </Form.Group>

                                <Form.Group controlId="parteCompra">
                                    <Form.Label>Compra</Form.Label>
                                    <Form.Control type="parteCompra" />
                                </Form.Group>
                            </Form>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Button variant="primary" type="submit" form="form-parte" onClick = {this.saveParte}>Ingresar</Button><br />
                        <Button variant="primary" >Eliminar</Button><br />
                        <Button variant="primary">Actualizar</Button><br />
                    </Col>
                </Row>
            </Container> 
        )    
    }
}

export default Partes