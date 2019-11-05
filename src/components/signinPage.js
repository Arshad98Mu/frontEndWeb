import React,{Component} from 'react';
import { Container, Row, Col, Card, Button, Form, Image, ButtonToolbar } from 'react-bootstrap';
import Faker from 'faker';
import '../stylesheets/sign.css';
import Google from '../assets/SignInWithGoogle.png';
import Facebook from '../assets/Facebook.png';
import { SigninApiServices } from '../services/SigninApiServices';
import { ToastsStore } from "react-toasts";



class SigninPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };        
    }

    signin = () => {
        let sendObject = {
            email: this.state.email,
            password: this.state.password
        };

        SigninApiServices.signin(sendObject).then(Response => {
            if(Response.success === true) {
                ToastsStore.success("User Created Successfully!");
            }
            else {
                ToastsStore.error("Issue Creating the User!");                
            }
        });
    }

    render() {
        return(
            <div className="background cards mainpage">
                <Container>
                    <Row>
                        
                        <Col sm={ 8, 8, 12 } md={{ span: 8, order: 1 }}>
                            <Card border="warning" className="cardit">
                                <Card.Body className="centercard">
                                    <Card.Title>Sign in with</Card.Title>

                                    <ButtonToolbar>
                                        <Button variant="link" ><Image src={Google} height="50" /></Button>
                                        <Button variant="link" ><Image src={Facebook} height="50" /></Button>
                                    </ButtonToolbar>
                                    
                                    <p>or with your email</p>
                                    
                                    <div>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter email"
                                                onChange = { event => this.setState({ email: event.target.value }) }    
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Control
                                                type="password"
                                                placeholder="Enter password"
                                                onChange = { event => this.setState({ password: event.target.value }) }    
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Remember me" />
                                        </Form.Group>

                                        <Button
                                            variant="outline-warning"
                                            onClick={ () => this.props.setCurrentPage("home") }    
                                        >SIGN IN</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={{ span: 4, order: 2 }}>
                            <Card bg="warning" border="warning" text="white">
                                <Card.Img variant="top" src={Faker.image.image()} />
                                <Card.Body>
                                    <Card.Title>Hello Friend!</Card.Title>
                                    <Card.Text>
                                        Enter your personal details and start journey with us.
                                    </Card.Text>
                                    <Button 
                                        variant="outline-light"
                                        onClick={ () => this.props.setCurrentPage("signup") }    
                                    >SIGN UP</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default SigninPage;