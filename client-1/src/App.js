import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import EmployeeForm from './Form.js';
import Posts from './Components/Posts/posts';
import About from './Components/About/about';
import Home from './Components/Home/home';
import Nav from './Nav';
import EmployeeForm from './Components/Form/form'
import Authentication from './Components/Authentication/auth'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Card from './Card.js'
// import socketIOClient from "socket.io-client";
// import openSocket from 'socket.io-client';
// import { subscribeToTimer } from './test';
// import {Card, Form, InputGroup , CardDeck , Button} from 'react-bootstrap';


class App extends Component {

	constructor(props) {
	  super(props);
	  this.state = {
      data:"",
      isLoggedIn:false
    }
  }
  
    handleChange = () =>{
      this.setState({
        isLoggedIn: !this.state.isLoggedIn
      },()=>{
        localStorage.setItem("loggedIn",this.state.isLoggedIn)
      })
    }
	  
    showData = (e) => {

    }
    
  
	
	render() {
    

export default App;