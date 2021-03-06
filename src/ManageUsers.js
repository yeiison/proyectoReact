import React from 'react';
import axios from 'axios';
import { Button, Form, Row, Col, Card, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';

class ManageUsers extends React.Component{

    saveUser(e) {
        var user = {
            names: document.getElementById("userName").value,
            lastNames: document.getElementById("userLastName").value,
            document: document.getElementById("userDocument").value,
            costeCenter: document.getElementById("userCenterCoste").value,
            
        };

        axios.post ("http://localhost:8000/api/users/", user)
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
                                <Card.Header><h1>Administrador de Usuarios</h1></Card.Header>
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

                            <Form id="form-user">
                                <Form.Row>
                                    <Form.Group as={Col} controlId="userName">
                                    <Form.Label>Nombres</Form.Label>
                                    <Form.Control type="userName" />
                                    </Form.Group>
        
                                    <Form.Group as={Col} controlId="userLastName">
                                    <Form.Label>Apellidos</Form.Label>
                                    <Form.Control type="userLastName" />
                                    </Form.Group>
                                </Form.Row>
        
                                <Form.Group controlId="userDocument">
                                    <Form.Label>Cedula</Form.Label>
                                    <Form.Control placeholder=" "/>
                                    </Form.Group>
        
                                <Form.Group controlId="userCenterCoste">
                                    <Form.Label>Centro Coste</Form.Label>
                                    <Form.Control placeholder="" />
                                </Form.Group>
                            </Form>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Button style = {{margin: "1cm"}} variant="primary" type="submit" form="form-user" onClick = {this.saveUser}>Ingresar</Button><br />
                        <Button style = {{margin: "1cm"}} variant="primary" >Eliminar</Button><br />
                        <Button margin="5cm" size ="lg" variant="primary">Actualizar</Button><br />
                    </Col>
                </Row>
            </Container> 
        )    
    }
}

export default ManageUsers