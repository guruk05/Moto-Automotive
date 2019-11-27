import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeForm from '../Form/form';
// import Posts from './Posts.js';




import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');

class Home extends Component {

	constructor(props) {
	  super(props);
	  this.state = {
      data:""
    }
	}
	  

  
    receiveDataFromChild = (data) => {
      console.log(data);
      // socket.emit('send message', data);
      this.setState({data});
      // console.log(this.state.data);
      // let formData = this.state;
      // console.log(formData);
      // console.log(formData.data.commentToUser);
    }
	
	render() {
	  return (
      <div>
      <EmployeeForm sendDataToParent={this.receiveDataFromChild}/>
      {/* <Authentication/> */}
      </div>
    )
	}
}

export default Home;