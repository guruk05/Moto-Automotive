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

        async componentDidMount() {
            try {
              const response = await axios.get('http://localhost:8000/posts')
              let datas = await response.data;
              this.setState({data:datas});
              const { endpoint } = this.state;
              const socket = socketIOClient(endpoint);
              socket.on('new message', data => { 
              //   // this.setState(currentState => ({
                  console.log(data);
              //   //   'data': [...currentState.data, data.data]
              //   // }));
                let datas = data.result;
                this.setState({data:datas});
            })   
          }   
         catch(err) {
           console.log(err);
         }
          
        }
    }

        render() {
            return(
              <div>
                <DisplayCard></DisplayCard>
                <Jumbotrons></Jumbotrons>
            {this.state.data.map(i => {
              return (
                <p style={{flex: 1}} className="message">
                <Toast className = "toast" style={{display: 'flex', flexDirection: 'row'}} style={{height:"28rem"}}>
            <Toast.Header>
              <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
              <strong className="mr-auto"><h6><br/>{i.motoStation}</h6></strong>
              {i.time}
            </Toast.Header>
            <div>
            <Toast.Body>{i.availableBikes} Bikes Availabe! </Toast.Body>
            <hr/>
              <Toast.Body>
              For Longer Travel : {i.petrolGreaterThan20L} Bikes</Toast.Body>
              <hr/>
              <Toast.Body>
              For Short Travel : {i.petrolGreaterThan10L} Bikes</Toast.Body>
              <hr/>
              <Toast.Body>
              With Sufficient Air Pressure : {i.airPressure} Bikes</Toast.Body>
              <Toast.Body>
              <hr/>
              Watcher : {i.employeeName}</Toast.Body>
              </div>
          </Toast>
                </p>
              )
            })}
                <SimpleSlider></SimpleSlider>       
          </div>
            )
            }
        }

        export default Home;
