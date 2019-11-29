import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Form, Jumbotron,Container, InputGroup , CardDeck , Button, Toast} from 'react-bootstrap';
import axios from 'axios';
import './contact.css';


class Contact extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:"",
            email:"",
            comment:""
        }

    }

    handleChange = () => {

    }

    handleSubmit = () => {

    }

    render() {
        return(
            <div>
            <Jumbotron fluid className="contact">
<Container>
<h1>Fluid jumbotron</h1>
<p>
  This is a modified jumbotron that occupies the entire horizontal space of
  its parent.
</p>
</Container>
</Jumbotron>
<div className="contactCard">
    <Card  style={{ width: '32rem' }}>
        <Card.Body>
        <Card.Title>Contact Form</Card.Title>
        <Card.Text>
        <h6>
Please use this form to leave a message for the MoTo Automotive Team.
We respond to queries or feedback within three weeks. 
We DO NOT respond to customer support queries of other partnering companies involved with MoTo. 
For issues related to MoTo WorkSpaces, 
please contact the MoTo Help Centre or MoTo Customer Care at 1900 308 9899</h6>
</Card.Text>
            <Form>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" name="name" placeholder="Enter name" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" name= "email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Comment</Form.Label>
                <Form.Control type="comment" name = "comment" placeholder="comment" />
            </Form.Group>
        </Form>
</Card.Body>
</Card>
</div>
</div>
        )
    }
}

