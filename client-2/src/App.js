import React, { Component } from 'react';
import Home from './Components/Home/home'
// import logo from './logo.svg';
import './App.css';
// import { subscribeToTimer } from './test';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import socketIOClient from "socket.io-client";
// import {Card, Form, InputGroup , CardDeck , Button, Toast} from 'react-bootstrap';
// import openSocket from 'socket.io-client';
// const  socket = openSocket('http://localhost:8000');
// import axios from 'axios';
import Nav from './Components/Navigation/nav';
// import Login from './Components/Login/login';
// import SimpleSlider from './Components/Slider/slider';
// import Jumbotrons from './Components/Jumbotron/jumbotron';
// import DisplayCard from './Components/Card/card';
import About from './Components/About/about';
import Faq from './Components/Faq/faq';
import Pricing from './Components/Pricing/pricing';
// import SimpleExpansionPanel from './Components/Faq/faq';
import Contact from './Components/Contact/contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {

	constructor(props) {
    super(props);
            
	}
	
		
	render() {
    return(
     <Router>
       <Nav/>
       <Switch>
        {/* <Route path="/" exact component={Login}/> */}
        <Route path="/" exact component={Home}/>
        <Route path="/pricing" component={Pricing}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/faq" component={Faq}/>
        </Switch>
       </Router>
    )
	}
}

export default App;





  
        


