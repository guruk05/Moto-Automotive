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
        if (this.state.isLoggedIn === null) {
            return(
                <MDBContainer className="login">
          <MDBRow  className="d-flex justify-content-center">
            <MDBCol md="6">
              <MDBCard>
                <div className="header pt-3 grey lighten-2">
                  <MDBRow className="d-flex justify-content-start">
                    <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                      MoTo WorkSpace Login
                    </h3>
                  </MDBRow>
                </div>
                <form onSubmit = {this.handleSubmit}>
                <MDBCardBody className="mx-4 mt-4" >
                  <MDBInput label="Your employee ID" group type="text" validate onChange = {this.handleInput} />
                  <MDBInput
                    label="Your employee Password"
                    group
                    type="password"
                    validate
                    containerClass="mb-0"
                    onChange = {this.handleInput}
                  />
                  <p className="font-small grey-text d-flex justify-content-end">
                    Forgot
                    <span
                      
                      className="dark-grey-text font-weight-bold ml-1"
                    >
                      Password? 
                      <span> Check </span> 
                      <span className="dark-grey-text font-weight-bold ml-1">
                      Email !
                          </span>
                    </span>
                  </p>
                  <div className="text-center mb-4 mt-5">
                    <MDBBtn
                      color="danger"
                      type="button"
                      className="btn-block z-depth-2"
                      onClick={() => this.props.toggle()}
                    >
                      Log in
                    </MDBBtn>
                  </div>
                  <p className="font-small grey-text d-flex justify-content-center">
                    Welcome To WorkSpace
                  </p>
                </MDBCardBody>
                </form>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
            )
        }
        else if (this.state.isLoggedIn===true) {
            return(
                <div>
                    <Router>
                    <Route to = '/home' component = {EmployeeForm}/>
                    </Router>
            </div>
            )
        
            )
        }
    }
}



export default Authentication;