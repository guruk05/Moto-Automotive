import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron, Container} from 'react-bootstrap';

import './about.css';


class About extends Component{

    render(){
        return(
        <Jumbotron fluid className="about">
  <Container>
    <h1>Fluid jumbotron</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>
        )
    }

}