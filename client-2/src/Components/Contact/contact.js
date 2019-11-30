import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  Form,
  Jumbotron,
  Container,
  Button,
} from "react-bootstrap";
import axios from "axios";
import "./contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      comment: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  };

  handleSubmit = async e => {
    e.preventDefault();
    console.log(this.state.name);
    try {
      let response = await axios.post("http://localhost:8000/login", {
        name: this.state.name,
        email: this.state.email,
        comment: this.state.comment
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <div>
          <Jumbotron fluid className="pricing">
            <Container>
              <h1 className="title">Contact</h1>
            </Container>
          </Jumbotron>
          <h5 className="bodyText">
            <br />
            <br />
          </h5>
        </div>
        <div className="contactCard">
          <Card style={{ width: "41rem" }}>
            <Card.Body>
              <Card.Title>Contact Form</Card.Title>
              <Card.Text className="contactText">
                <h5>
                  Please use this form to leave a message for the MoTo
                  Automotive Team. We respond to queries or feedback within
                  three weeks. We DO NOT respond to customer support queries of
                  other partnering companies involved with MoTo. For issues
                  related to MoTo WorkSpaces, please contact the MoTo Help
                  Centre or MoTo Customer Care at 1900 308 9899
                </h5>
              </Card.Text>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="name"
                    name="name"
                    placeholder="Enter name"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Comment</Form.Label>
                  <Form.Control
                    type="comment"
                    name="comment"
                    placeholder="comment"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Contact;
