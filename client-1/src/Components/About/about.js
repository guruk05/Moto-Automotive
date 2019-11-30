import React, { Component } from "react";
import Nav from "../Navigation/nav";
import NavbarPage from "../login/login";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Nav></Nav>
        About
        <NavbarPage></NavbarPage>
      </div>
    );
  }
}

export default About;
