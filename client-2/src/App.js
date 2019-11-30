import React, { Component } from "react";
import Home from "./Components/Home/home";
import "./App.css";
import Nav from "./Components/Navigation/nav";
import About from "./Components/About/about";
import Faq from "./Components/Faq/faq";
import Pricing from "./Components/Pricing/pricing";
import Contact from "./Components/Contact/contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/faq" component={Faq} />
        </Switch>
      </Router>
    );
  }
}

export default App;
