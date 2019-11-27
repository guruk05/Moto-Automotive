import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Form, InputGroup , CardDeck , Button} from 'react-bootstrap';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from '../Navigation/nav';
import '../../App.css';
import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');




class EmployeeForm extends React.Component{
    constructor(props){
        super(props)

        
    }

    


      


    render() {
        return(
          
    }
}


export default EmployeeForm;