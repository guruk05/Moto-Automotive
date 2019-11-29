import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron, Container} from 'react-bootstrap';
import './style.css'


class Jumbotrons extends Component{

    constructor(props){
        super(props)

}

render(){
    return(
        <Jumbotron fluid className="jumbotron">
<Container>
<h1>Moto Automotive</h1>
<p className="jumbotronText">
  KickStart your day with MoTo, travel with ease and comfort. Get Streamed with live automobile location, availability and fuel updates.  
</p>
</Container>
</Jumbotron>
    )
}
}

export default Jumbotrons;

