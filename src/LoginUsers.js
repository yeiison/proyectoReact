import React from 'react';
import axios from 'axios';
import { Button, Form, Row, Col, Card, Container} from 'react-bootstrap';


class LoginUsers extends React.Component{

    saveLoginUsers(e) {
        var loginUsers = {
            names: document.getElementById("nombres").value,
            lastNames: document.getElementById("apellidos").value,
            userName: document.getElementById("usuario").value,
            password: document.getElementById("password").value,
            
             
        };

        axios.post ("http://localhost:8000/api/login/", loginUsers)
       
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
                        <Card.Header>Registro</Card.Header>
                            <Form id="form-loginUsers">

                                <Form.Group controlId="nombres">
                                    <Form.Label>Nombres </Form.Label>
                                    <Form.Control placeholder="" />
                                </Form.Group>

                                <Form.Group controlId="apellidos">
                                    <Form.Label>Apellidos</Form.Label>
                                    <Form.Control placeholder="" />
                                </Form.Group>

                                <Form.Group controlId="usuario">
                                    <Form.Label>Usuario</Form.Label>
                                    <Form.Control placeholder="" />
                                </Form.Group>

                                <Form.Group controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control placeholder="" />
                                </Form.Group>
                                <Button variant="primary" type="submit" form="form-loginUsers" onClick = {this.saveLoginUsers}>Registrarse</Button><br />

                            </Form>
                        </Card>
                    </Col>
                   
                </Row>
            </Container> 
        )    
    }
}

export default LoginUsers