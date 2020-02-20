import React,{Component} from 'react';
import { SignupApiServices } from '../services/SignupApiServices';
import { Form, Button, Card, Container, Row, Col, Image, ButtonToolbar } from "react-bootstrap";
import { ToastsContainer, ToastsStore } from "react-toasts";
import Facebook from '../assets/Facebook.png';
import Google from '../assets/SignInWithGoogle.png';
import Faker from 'faker';

import '../stylesheets/sign.css';

class SignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: ""
        };
    }

    signup = () => {
        let sendObject = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password
        };

        SignupApiServices.signup(sendObject).then(Response => {
            if(Response.success === true) {
                ToastsStore.success("User Created Successfully!");
            }
            else {
                ToastsStore.error("Issue Creating the User!");                
            }
        });

        this.props.setCurrentPage("home");
    }

    render() {
        return(
            <div className="background cards">
                <Container>
                    <Row>
                        <Col md={{ span: 8, order: 1 }}>
                            <Card border="warning" className="cardit">
                                <Card.Body className="centercard">
                                    <Card.Title>Sign up with</Card.Title>
                                    <ButtonToolbar>
                                        <Button variant="link" ><Image src={Google} height="50" /></Button>
                                        <Button variant="link" ><Image src={Facebook} height="50" /></Button>
                                    </ButtonToolbar>

                                    <p>or use your email account</p>

                                    <div>
                                        <Form.Group>
                                            <Form.Control
                                                placeholder="Enter firstname"
                                                onChange = { event => this.setState({ firstname: event.target.value }) }
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Control
                                                placeholder="Enter lastname"
                                                onChange = { event => this.setState({ lastname: event.target.value }) }
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Control
                                                placeholder="Enter email"
                                                type="email"
                                                onChange = { event => this.setState({ email: event.target.value }) }
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Control
                                                placeholder="Enter password"
                                                type="password"
                                                onChange = { event => this.setState({ password: event.target.value }) }
                                            />
                                        </Form.Group>

                                        <Button
                                            variant="outline-warning"
                                            onClick={this.signup}    
                                        >SIGN UP</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={{ span: 4, order: 2 }}>
                            <Card bg="warning" border="warning" text="white">
                                <Card.Img variant="top" src={Faker.image.image()} />
                                <Card.Body>
                                    <Card.Title>Welcome Back!!</Card.Title>
                                    <Card.Text>
                                        To keep connected with us please login with your personal info.
                                    </Card.Text>
                                    <Button
                                        variant="outline-light"
                                        onClick={ () => {this.props.setCurrentPage("signin")} }    
                                    >SIGN IN</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <ToastsContainer store={ToastsStore} />
            </div>
        );
    }
}

export default SignupPage;