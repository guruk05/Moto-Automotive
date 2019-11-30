import React, { Component } from "react";
import "./App.css";
import Posts from "./Components/Posts/posts";
import About from "./Components/About/about";
import EmployeeForm from "./Components/Form/form";
import Authentication from "./Components/Authentication/auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      isLoggedIn: false
    };
  }

  handleChange = () => {
    this.setState(
      {
        isLoggedIn: !this.state.isLoggedIn
      },
      () => {
        localStorage.setItem("loggedIn", this.state.isLoggedIn);
      }
    );
  };

  showData = e => {};

  receiveDataFromChild = data => {
    socket.emit("send message", data);
    this.setState({ data });
  };

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/Posts" component={Posts} />
            <Route exact path="/About" component={About} />
            <Route
              path="/"
              render={() =>
                localStorage.getItem("loggedIn") ? (
                  <EmployeeForm />
                ) : (
                  <Authentication toggle={this.handleChange} />
                )
              }
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
