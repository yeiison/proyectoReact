import React from 'react';
import axios from 'axios';
import { Button, Form, Row, Col, Card, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';

class ManageActivos extends React.Component{

    saveActivo(e) {
        var activo = {
            fecha: document.getElementById("activoFecha").value,
            tipo: document.getElementById("activoTipo").value,
            marca: document.getElementById("activoMarca").value,
            referencia: document.getElementById("activoReferencia").value,
            estado: document.getElementById("activoEstado").value,
            serial: document.getElementById("activoSerial").value,
            valor: document.getElementById("activoValor").value,
            placa: document.getElementById("activoPlaca").value,
            codigo: document.getElementById("activoCodigo").value,
            caracteristicas: document.getElementById("activoCaracteristicas").value,
            compra: document.getElementById("activoCompra").value,
            empresa: document.getElementById("activoEmpresa").value,
            parte: document.getElementById("activoParte").value,
            user: document.getElementById("activoUser").value,

            
        };

        axios.post ("http://localhost:8000/api/activos/", activo, {timeout:1000})
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
                            <Card.Header><h1>Activos</h1></Card.Header>
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
                
                            <Form id="form-activo">
                                
                                <Form.Group as={Col} controlId="activoFecha">
                                    <Form.Label>Fecha</Form.Label>
                                    <Form.Control type="activoFecha" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="activoTipo">
                                    <Form.Label>Tipo</Form.Label>
                                    <Form.Control type="activoTipo" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="activoMarca">
                                    <Form.Label>Marca</Form.Label>
                                    <Form.Control type="activoMarca" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="activoReferencia">
                                    <Form.Label>Referencia</Form.Label>
                                    <Form.Control type="activoReferencia" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="activoEstado">
                                    <Form.Label>Estado</Form.Label>
                                    <Form.Control type="activoEstado" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="activoSerial">
                                    <Form.Label>Serial</Form.Label>
                                    <Form.Control type="activoSerial" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="activoValor">
                                    <Form.Label>Valor</Form.Label>
                                    <Form.Control type="activoValor" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="activoPlaca">
                                    <Form.Label>Placa</Form.Label>
                                    <Form.Control type="activoPlaca" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="activoCodigo">
                                    <Form.Label>Codigo</Form.Label>
                                    <Form.Control type="activoCodigo" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="activoCaracteristicas">
                                    <Form.Label>Caracteristicas</Form.Label>
                                    <Form.Control type="activoCaracteristicas" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="activoCompra">
                                    <Form.Label>Compra</Form.Label>
                                    <Form.Control type="activoCompra" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="activoEmpresa">
                                    <Form.Label>Empresa</Form.Label>
                                    <Form.Control type="activoEmpresa" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="activoParte">
                                    <Form.Label>Parte</Form.Label>
                                    <Form.Control type="activoParte" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="activoUser">
                                    <Form.Label>Usuario</Form.Label>
                                    <Form.Control type="activoUser" />
                                </Form.Group>
                                
                            </Form>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Button variant="primary" type="submit" form="form-activo" onClick = {this.saveActivo}>Ingresar</Button><br />
                        <Button variant="primary" >Eliminar</Button><br />
                        <Button variant="primary">Actualizar</Button><br />
                    </Col>
                </Row>
            </Container> 
        )    
    }
}

export default ManageActivos