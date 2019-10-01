import React from 'react';
import '../App.css';
import { Form, Button, Card, Container, Row, Col, Image, FormGroup } from 'react-bootstrap';

function SignupPage() {
    return(
        <div>
            <div className="mainpage">
                <div>
                    <Container className="logincard">
                        <Row>
                            <Col xs={8} md={4}>
                                <Card bg="warning" text="white" style={{ width: '18rem' }} className="text-center" style={{ height: 500 }}>
                                    <Card.Body>
                                        <Card.Title>Welcome Back!!</Card.Title>
                                        <Card.Text>
                                            To keep connected with us please login with your personal info
                                        </Card.Text>
                                        <Button variant="outline-light">SIGN IN</Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col xs={8} md={8}>
                                <Card border="secondary" className="text-center" style={{ height: 500 }}>
                                    <Card.Body>
                                        <br />
                                        <Card.Title>Create Account</Card.Title>
                                        <br />
                                        <Form>
                                            <Row className="cardIcons">
                                                <Col md={2}>
                                                    <Image
                                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBGdC9kD9oRFav5TUfBzSCYQTO3idlagblJMCXAABf5b4O3iU"
                                                        roundedCircle
                                                        width={50} height={50}
                                                    />
                                                </Col>
                                                <Col md={2}>
                                                    <Image
                                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMRJ2-j_mmb6GDj-m6U5OClSLYZ2CipXSAASRIgrrtFxTM0y3M"
                                                        roundedCircle
                                                        width={50} height={50}
                                                    />
                                                </Col>
                                                <Col md={2}>
                                                    <Image
                                                        src="https://www.dignitydreams.com/wp-content/uploads/2017/08/twitter-icon-basic-round-social-iconset-s-icons-0.png"
                                                        roundedCircle
                                                        width={50} height={50}
                                                    />
                                                </Col>
                                            </Row>
                                            <br />

                                            or use your email account
                                            <br /> <br/>

                                            <Form.Row>
                                                <Form.Group as={Col} controlId="forfirstname">
                                                    <Form.Control placeholder="First Name" />
                                                </Form.Group>
                                                <Form.Group as={Col} controlId="forlastname">
                                                    <Form.Control placeholder="Last Name" />
                                                </Form.Group>
                                            </Form.Row>
                                            
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Control type="email" placeholder="Enter email" />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Control type="password" placeholder="Password" />
                                            </Form.Group>

                                            <br />

                                            <Button variant="warning" type="submit">
                                                Submit
                                            </Button>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;