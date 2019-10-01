import React from "react";
import "../App.css";
import {
  Form,
  Button,
  Card,
  Container,
  Row,
  Col,
  Image
} from "react-bootstrap";

class SigninPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="mainpage">
          <div>
            <Container className="logincard">
              <Row>
                <Col xs={8} md={8}>
                  <Card
                    border="secondary"
                    className="text-center"
                    style={{ height: 500 }}
                  >
                    <Card.Body>
                      <br />
                      <Card.Title>Sign in to De-Stress</Card.Title>
                      <br />
                      <Form>
                        <Row className="cardIcons">
                          <Col md={2}>
                            <Image
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBGdC9kD9oRFav5TUfBzSCYQTO3idlagblJMCXAABf5b4O3iU"
                              roundedCircle
                              width={50}
                              height={50}
                            />
                          </Col>
                          <Col md={2}>
                            <Image
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMRJ2-j_mmb6GDj-m6U5OClSLYZ2CipXSAASRIgrrtFxTM0y3M"
                              roundedCircle
                              width={50}
                              height={50}
                            />
                          </Col>
                          <Col md={2}>
                            <Image
                              src="https://www.dignitydreams.com/wp-content/uploads/2017/08/twitter-icon-basic-round-social-iconset-s-icons-0.png"
                              roundedCircle
                              width={50}
                              height={50}
                            />
                          </Col>
                        </Row>
                        <br />
                        or use your email account
                        <br />
                        <Form.Group controlId="formBasicEmail">
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                          />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                          <Form.Control
                            type="password"
                            placeholder="Password"
                          />
                        </Form.Group>
                        <a href="#">
                          {" "}
                          <font color="#ffc107">
                            Forgot your password?
                          </font>{" "}
                        </a>
                        <br /> <br />
                        <Button variant="warning" type="submit">
                          Log in
                        </Button>
                      </Form>
                    </Card.Body>
                  </Card>
                </Col>

                <Col xs={8} md={4}>
                  <Card
                    bg="warning"
                    text="white"
                    style={{ width: "18rem" }}
                    className="text-center"
                    style={{ height: 500 }}
                  >
                    <Card.Body>
                      <Card.Title>Hello Friend!</Card.Title>
                      <Card.Text>
                        Enter your personal details and start journey with us
                      </Card.Text>
                      <Button
                        variant="outline-light"
                        onClick={() => this.props.setInitialPage("signup")}
                      >
                        SIGN UP
                      </Button>
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
}

export default SigninPage;
