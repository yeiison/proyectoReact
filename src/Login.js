import React from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Row, Col, Card, Container, Input} from 'react-bootstrap';

class Login extends React.Component{

    ValidationLogin(e) {
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
            <Container >
                <Row  className="justify-content-md-center">
                    <Col sm={4}>
                        <Card body>
                            <Form >
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Label>Usuario</Form.Label>
                                    <Form.Control type="user" placeholder="Ingrese usuario" />
                                </Form.Group>
                                <Form.Group controlId="formGroupPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Button variant="outline-success" size="lg" type="submit">
                                    Login
                                </Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )    
    }
}

export default Login