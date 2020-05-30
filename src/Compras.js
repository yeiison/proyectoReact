import React from 'react';
import axios from 'axios';
import { Button, Form, Row, Col, Card, Container} from 'react-bootstrap';

class Compras extends React.Component{

    saveCompra(e) {
        var compra = {
            fecha: document.getElementById("compraFecha").value,
            tipo: document.getElementById("compraTipo").value,
            ordenCompra: document.getElementById("compraOrden").value,
            estado: document.getElementById("compraEstado").value,
            
        };

        axios.post ("http://localhost:8000/api/compras/", compra)
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
                        <Card.Header>Compras</Card.Header>
                            <Form id="form-compra">
                                <Form.Group controlId="compraFecha">
                                    <Form.Label>fecha</Form.Label>
                                    <Form.Control type="compraFecha" />
                                </Form.Group>

                                <Form.Group controlId="compraTipo">
                                    <Form.Label>tipo</Form.Label>
                                    <Form.Control type="compraTipo" />
                                   </Form.Group>
                               
                                <Form.Group controlId="compraOrden">
                                    <Form.Label>Orden de Compra</Form.Label>
                                    <Form.Control type="compraOrden"/>
                                </Form.Group>

                                <Form.Group controlId="compraEstado">
                                    <Form.Label>Estado</Form.Label>
                                    <Form.Control type="compraEstado" />
                                </Form.Group>
                            </Form>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Button variant="primary" type="submit" form="form-compra" onClick = {this.saveCompra}>Ingresar</Button><br />
                        <Button variant="primary" >Eliminar</Button><br />
                        <Button variant="primary">Actualizar</Button><br />
                    </Col>
                </Row>
            </Container> 
        )    
    }
}

export default Compras