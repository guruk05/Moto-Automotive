import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Container } from "react-bootstrap";

import "./about.css";

class About extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid className="pricing">
          <Container>
            <h1 className="title">About us</h1>
          </Container>
        </Jumbotron>
        <h5 className="bodyText">
          If you want to travel, you can take cabs or scooters and travel on
          your own. But to avail a scooter or bike you have to walk to nearby
          Automobile Station, if your nearest Automobile station doesn't have
          any bikes even if they have bikes will you know if the available bikes
          are in rideable condition and whether the bike has sufficient fuel
          required for your travel.
          <p>
            <br />
            Ok lets not make that much complicated, you choose a random bike and
            kickstart to ride , unfortunately displayed fuel point is not
            sufficient to travel ..... Dont worry ..... Welcome to MoTo ..... we
            keep you updated on Automobile stations 24/7 with Realtime datas and
            live updates. We value your time.
          </p>
          Make decisions without visiting stations and travel with ease and
          comfort.
          <br />
          <br />
        </h5>
      </div>
    );
  }
}

export default About;
