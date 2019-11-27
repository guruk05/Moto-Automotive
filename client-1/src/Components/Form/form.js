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

        this.state = {
            employeeName: "",
            bikesAllocated:"",
            bikeTypes: "",
            availableBikes: "",
            petrolLessThan10L: "",
            petrolGreaterThan10L:"",
            petrolGreaterThan20L: "",
            airPressure: "",
            puncturedBikes: "",
            commentToUser: "I am Billionaire"
        }  
    }

    


      


    render() {
        return(
          <div>
               <Nav />
             <form className = "cards">
        <CardDeck style={{ width: '60rem' }}>
          <Card >
            <Card.Img
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3RDtrFQr0oTiERtxPxnMeX6lwVIjJV4jXX4wz2TNZGLP10DtH&s"
            />
            <Card.Body>
              <Card.Title>HSR LAYOUT - East station</Card.Title>
              <Card.Text>
                HSR Layout, Parangipalaya, Opp to Overview appartments , 644/23,
                Ground Floor, Sagar towers
              </Card.Text>
            </Card.Body>
            <Form onSubmit = {this.sendDataToParent}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Watcher</Form.Label>
                <Form.Control
                  type="email"
                  defaultValue="Watcher Mohan"
                  disabled
                  name = "employeeName"
                  onChange={this.handleChange}
                 />
              </Form.Group>

              {/* Allocated Bike: */}
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Allocated Bikes</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon3">
                      Bikes Allocated
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control placeholder="100" 
                  disabled 
                  name = "bikesAllocated"
                  onChange={this.handleChange} />
                </InputGroup>
              </Form.Group>

              {/* Bike Types */}
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Bike Types</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon3">
                      Bike Type
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control placeholder="Honda Activa" 
                  disabled 
                  name = "bikeTypes"
                  onChange={this.handleChange}>
                    {/* <option>0</option> */}
                  </Form.Control>
                </InputGroup>
              </Form.Group>

              {/* Available Bikes */}
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Available Bikes</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon3">
                      Bikes Available
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control as="select"
                  name = "availableBikes"
                  defaultValue = {this.state.availableBikes}
                  onChange={this.handleChange}>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                  </Form.Control>
                </InputGroup>

                {/* {bikes with petrol} */}
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Bikes with petrol less than 10 L</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon3">10L</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control placeholder="Honda Activa" 
                    as="select" 
                    name = "petrolLessThan10L"
                    defaultValue = {this.state.petrolLessThan10L}
                    onChange={this.handleChange}>
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </Form.Control>
                  </InputGroup>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Bikes with petrol greater than 10 L</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon3">>10L</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control placeholder="Honda Activa" 
                    as="select" 
                    name = "petrolGreaterThan10L"
                    defaultValue = {this.state.petrolGreaterThan10L}
                    onChange={this.handleChange}>
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </Form.Control>
                  </InputGroup>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Bikes with petrol > 20 L</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon3">>10L</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control placeholder="Honda Activa" 
                    as="select" 
                    defaultValue = {this.state.petrolGreaterThan20L}
                    name = "petrolGreaterThan20L"
                    onChange={this.handleChange}>
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </Form.Control>
                  </InputGroup>
                </Form.Group>

                {/* Bikes with Air Pressure */}

                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Bikes with Sufficient Air Pressure</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon3">22psi</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control placeholder="Honda Activa" 
                    as="select" 
                    name = "airPressure"
                    defaultValue = {this.state.airPressure}
                    onChange={this.handleChange}>
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </Form.Control>
                  </InputGroup>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Punctured Bikes</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon3">
                        Punctured Bikes
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control placeholder="Honda Activa" 
                    as="select" 
                    name = "puncturedBikes"
                    defaultValue = {this.state.puncturedBikes}
                    onChange={this.handleChange}>
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </Form.Control>
                  </InputGroup>
                </Form.Group>

                {/* Comments to Users */}
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Comments to users</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    placeholder="Comments Are to be mentioned only on emergency purposes"
                    name = "commentToUser"
                    onChange={this.handleChange}
                    defaultValue = {this.state.commentToUser}
                    />
                </Form.Group>

                {/* Button */}

                <Button type="submit">Submit</Button>
              </Form.Group>
            </Form>
          </Card>
          {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
        </CardDeck>
        {/* <App></App> */}
      </form>  
      </div>
        )
    }
}


export default EmployeeForm;