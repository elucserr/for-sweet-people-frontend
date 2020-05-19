import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import AnonRoute from "../src/views/AnonRoute";
import PrivateRoute from "../src/views/PrivateRoute";

import apiClient from "../src/services/apiClient";
import Login from "../src/views/Login";
import Signup from "../src/views/Signup";
import Home from "../src/views/Home";
import Activity from "../src/views/Activity";
import Blood from "../src/views/Blood";
import Diet from "../src/views/Diet";
import Medicine from "../src/views/Medicine";
import Profile from "../src/viewsProfile";


class App extends Component {
  state = {
    isLoggedIn: false,
    user: null,
    isLoading: true,
  };

  componentDidMount() {
    apiClient
      .whoami()
      .then((user) => {
        this.setState({
          isLoading: false,
          isLoggedIn: true,
          user,
        });
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
          isLoggedIn: false,
          user: null,
        });
      });
  }

  handleLogin = ({ username, password }) => {
    apiClient
      .login({ username, password })
      .then(({ data: user }) => {
        this.setState({
          isLoggedIn: true,
          user,
        });
      })
      .catch((error) => {
        this.setState({
          isLoggedIn: false,
          user: null,
        });
      });
  };

  render() {
    const { isLoggedIn, isLoading } = this.state;
    return (
      <div>
        {isLoading && <div> Loading.......</div>}
        {!isLoading && (
          <div className="App">
            <Switch>
              <Route exact path={"/"} component={Home} />
              <AnonRoute exact path={"/login"} isLoggedIn={isLoggedIn}>
                <Login onLogin={this.handleLogin} />
              </AnonRoute>
              <PrivateRoute exact path={"/protected"} isLoggedIn={isLoggedIn}>
                <Protected />
              </PrivateRoute>
            </Switch>
          </div>
        )}
      </div>
    );
  }
}

export default App;
