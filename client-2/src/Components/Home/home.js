import React, { Component } from 'react';
// import logo from './logo.svg';
import './home.css';
// import { subscribeToTimer } from './test';
import 'bootstrap/dist/css/bootstrap.min.css';
import socketIOClient from "socket.io-client";
import {Card, Form, InputGroup , CardDeck , Button, Toast} from 'react-bootstrap';
// import openSocket from 'socket.io-client';
// const  socket = openSocket('http://localhost:8000');
import axios from 'axios';
import Nav from '../Navigation/nav';
import SimpleSlider from '../Slider/slider';
import Jumbotrons from '../Jumbotron/jumbotron';
import DisplayCard from '../Card/card';
import About from '../About/about';
import Pricing from '../Pricing/pricing';
import SimpleExpansionPanel from '../Faq/faq';
import Contact from '../Contact/contact'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class Home extends Component {
   
	constructor(props) {
        super(props);
    
          this.state = {
          data:[
            {
              commentToUser: ''
            }
          ],
          
          endpoint:'http://localhost:8000',
          
        }
}
