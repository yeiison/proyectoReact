import React from 'react';
import axios from 'axios';
import { Button, Form, Row, Col, Card, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';

class ManageCelulares extends React.Component{

    saveCelular(e) {
        var celular = {
            fecha: document.getElementById("celularFecha").value,
            marca: document.getElementById("celularMarca").value,
            refernecia: document.getElementById("celularReferencia").value,
            serial: document.getElementById("celularSerial").value,
            imei: document.getElementById("celularImei").value,
            email: document.getElementById("celularEmail").value,
            numero: document.getElementById("celularNumero").value,
            compra: document.getElementById("celularCompra").value,
            empresa: document.getElementById("celularEmpresa").value,
            users: document.getElementById("celularUser").value,
                        
        };

        axios.post ("http://localhost:8000/api/celulares/", celular)
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
                                <Card.Header><h1>Celulares</h1></Card.Header>
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

                            <Form id="form-celular">
                                
                                <Form.Group as={Col} controlId="celularFecha">
                                    <Form.Label>Fecha</Form.Label>
                                    <Form.Control type="celularFecha" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="celularMarca">
                                    <Form.Label>Marca</Form.Label>
                                    <Form.Control type="celularMarca" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="celularReferencia">
                                    <Form.Label>Referencia</Form.Label>
                                    <Form.Control type="celularReferencia" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="celularSerial">
                                    <Form.Label>Serial</Form.Label>
                                    <Form.Control type="celularSerial" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="celularImei">
                                    <Form.Label>Imei</Form.Label>
                                    <Form.Control type="celularImei" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="celularEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="celularEmail" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="celularNumero">
                                    <Form.Label>Numero</Form.Label>
                                    <Form.Control type="celularNumero" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="celularCompra">
                                    <Form.Label>Compra</Form.Label>
                                    <Form.Control type="celularCompra" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="celularEmpresa">
                                    <Form.Label>Empresa</Form.Label>
                                    <Form.Control type="celularEmpresa" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="celularUser">
                                    <Form.Label>Usuario</Form.Label>
                                    <Form.Control type="celularUser" />
                                </Form.Group>
                                
                            </Form>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Button variant="primary" type="submit" form="form-celular" onClick = {this.saveCelular}>Ingresar</Button><br />
                        <Button variant="primary" >Eliminar</Button><br />
                        <Button variant="primary">Actualizar</Button><br />
                    </Col>
                </Row>
            </Container> 
        )    
    }
}

export default ManageCelulares