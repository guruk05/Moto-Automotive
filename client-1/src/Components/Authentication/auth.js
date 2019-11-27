import React, { Component } from 'react';
import axios from 'axios';
import EmployeeForm from '../Form/form';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';
import './auth.css';

class Authentication extends Component {
    constructor(props){
        super(props)
        this.state = {
            employeeId:"",
            employeePassword:"",
            isLoggedIn: null
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    
            

    render(){
        
        }
    }
}



export default Authentication;