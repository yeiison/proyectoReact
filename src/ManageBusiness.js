import React from 'react';
import axios from 'axios';
import { Button, Form, Row, Col, Card, Container} from 'react-bootstrap';

class ManageBusiness extends React.Component{

    saveBusiness(e) {
        var business = {
            nomEmpresa: document.getElementById("empresaNombre").value,
            nomCiudad: document.getElementById("empresaCiudad").value,
            nomSubdivision: document.getElementById("empresaSucursal").value,
        };

        axios.post ("http://localhost:8000/api/empresas/", business)
       
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
                        <Card.Header>EMPRESAS</Card.Header>
                            <Form id="form-business">

                                <Form.Group controlId="empresaNombre">
                                    <Form.Label>Nombre Empresa</Form.Label>
                                    <Form.Control placeholder="" />
                                </Form.Group>

                                <Form.Group controlId="empresaCiudad">
                                    <Form.Label>Ciudad</Form.Label>
                                    <Form.Control placeholder="" />
                                </Form.Group>

                                <Form.Group controlId="empresaSucursal">
                                    <Form.Label>Nombre Sucursal</Form.Label>
                                    <Form.Control placeholder="" />
                                </Form.Group>

                            </Form>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Button variant="primary" type="submit" form="form-business" onClick = {this.saveBusiness}>Ingresar</Button><br />
                        <Button variant="primary" >Eliminar</Button><br />
                        <Button variant="primary">Actualizar</Button><br />
                    </Col>
                </Row>
            </Container> 
        )    
    }
}

export default ManageBusiness