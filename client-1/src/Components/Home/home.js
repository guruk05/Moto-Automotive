import React, { Component } from "react";
import EmployeeForm from "../Form/form";

import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:8000");

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  receiveDataFromChild = data => {
    console.log(data);
    // socket.emit('send message', data);
    this.setState({ data });
    // console.log(this.state.data);
  };

  render() {
    return (
      <div>
        <EmployeeForm sendDataToParent={this.receiveDataFromChild} />
        {/* <Authentication/> */}
      </div>
    );
  }
}

export default Home;
