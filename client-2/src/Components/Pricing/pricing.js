import React, { Component } from 'react';
import './pricing.css';
import Nav from '../Navigation/nav'
import {Card, Jumbotron, Container, CardGroup, Form, InputGroup , CardDeck , Button, Toast} from 'react-bootstrap';


class Pricing extends Component {

    render(){
        return (
          <div>
           <Jumbotron fluid className="pricing">
  <Container>
    <h1 className="title">Pricing</h1>
  </Container>
</Jumbotron>
<h5 className="bodyText">MoTo workSpace pricing differs with respective to the assets which are to be monitored and 
  streamed live. 
  To ensure ease of monitoring and the best possible customer experience, we mandate you to join our premium platinum membership via MoTo partners and avail all the feature updates at zero cost.
  Become a premium member and have access to all MoTo features which are available in our platform.
  <br/>
  <br/>
  For further queries contact 1800 00 9000
</h5>
</div>
        )
        
    }
}


export default Pricing;