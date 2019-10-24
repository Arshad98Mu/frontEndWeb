import React from "react";
import "../App.css";
import { APIServices } from "../Services/APIServices";
import {
  Form,
  Button,
  Card,
  Container,
  Row,
  Col,
  Image,
  FormGroup
} from "react-bootstrap";
import { ToastsContainer, ToastsStore } from "react-toasts";

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    };
  }
  signUp = () => {
    let sendObject = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password
    };

    APIServices.signup(sendObject).then(Response => {
      if (Response.success === true) {
        ToastsStore.success("User Created Successfully");
      } else {
        ToastsStore.error("Issue Creating The User");
      }
    });
  };

  render() {
    return (
      <div>
        <div className="mainpage">
          <div>
            <Container className="logincard">
              <Row>
                <Col xs={8} md={4}>
                  <Card
                    bg="warning"
                    text="white"
                    style={{ width: "18rem" }}
                    className="text-center"
                    style={{ height: 500 }}
                  >
                    <Card.Body>
                      <Card.Title>Welcome Back!!</Card.Title>
                      <Card.Text>
                        To keep connected with us please login with your
                        personal info
                      </Card.Text>
                      <Button
                        variant="outline-light"
                        onClick={() => {
                          
                          this.props.setInitialPage("login");
                        }}
                      >
                        SIGN IN
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col xs={8} md={8}>
                  <Card
                    border="secondary"
                    className="text-center"
                    style={{ height: 500 }}
                  >
                    <Card.Body>
                      <br />
                      <Card.Title>Create Account</Card.Title>
                      <br />
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
                      <br /> <br />
                      <Form.Row>
                        <Form.Group as={Col} controlId="forfirstname">
                          <Form.Control
                            placeholder="First Name"
                            onChange={event =>
                              this.setState({ firstname: event.target.value })
                            }
                          />
                        </Form.Group>
                        <Form.Group as={Col} controlId="forlastname">
                          <Form.Control
                            placeholder="Last Name"
                            onChange={event =>
                              this.setState({ lastname: event.target.value })
                            }
                          />
                        </Form.Group>
                      </Form.Row>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          onChange={event =>
                            this.setState({ email: event.target.value })
                          }
                        />
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          onChange={event =>
                            this.setState({ password: event.target.value })
                          }
                        />
                      </Form.Group>
                      <br />
                      <Button
                        variant="warning"
                        type="submit"
                        onClick={this.signUp}
                      >
                        Sign up
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <ToastsContainer store={ToastsStore} />
      </div>
    );
  }
}

export default SignupPage;
