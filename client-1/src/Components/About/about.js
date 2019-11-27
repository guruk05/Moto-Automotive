import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from '../Navigation/nav';
// import FormPage from '../login/login';
import NavbarPage from '../login/login'

class About extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div>
                <Nav></Nav>
                {/* <h1> */}
                    About
                  {/* <FormPage></FormPage> */}
                  <NavbarPage></NavbarPage>
                {/* </h1> */}
            </div>
        )
    }
}

export default About;