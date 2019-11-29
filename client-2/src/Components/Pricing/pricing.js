import React, { Component } from 'react';
import './pricing.css';
import Nav from '../Navigation/nav'
import {Card, Jumbotron, Container, CardGroup, Form, InputGroup , CardDeck , Button, Toast} from 'react-bootstrap';


class Pricing extends Component {
    render(){
        return (
           <Jumbotron fluid className="pricing">
  <Container>
    <h1>Fluid jumbotrons</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>
}
