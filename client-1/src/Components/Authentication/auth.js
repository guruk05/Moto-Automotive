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



    handleInput(evt) {
        let employeeId = evt.target.name;
        let employeePassword = evt.target.name;
        this.setState({ [employeeId]: evt.target.value });
        this.setState({ [employeePassword]: evt.target.value });   
    }


   async handleSubmit(e) {
         e.preventDefault();
       try {
        let response = await axios.post('http://localhost:8000/login', {
            auth: {
              username: this.state.employeeId,
              password: this.state.employeePassword
            },
        })
        this.setState(state => ({
            isLoggedIn: true
          }));
        }
    
    catch(err) {
        this.setState(state => ({
            isLoggedIn: false,
            employeeId:"",
            employeePassword:""
        }));
        console.log(err);
        }
        // console.log(this.state.isLoggedIn);
    }
            

    render(){
        
        }
    }
}



export default Authentication;