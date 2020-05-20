import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import AnonRoute from "./views/AnonRoute";
import PrivateRoute from "./views/PrivateRoute";

import Protected from "./views/Protected";
import LoginWithAuth from "./views/Login";
import SignupWithAuth from './views/Signup';

import AuthProvider from "./context/authContext";

import Nav from "./components/Nav"

import Home from "./views/Home"

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div>
          <div className="App">
            <Nav/>
            <Switch>
              <Route exact path={"/"} component={Home}/>
              <AnonRoute exact path={"/login"} component={LoginWithAuth} />
              <AnonRoute exact path={"/signup"} component={SignupWithAuth} />
              <PrivateRoute exact path={"/protected"} component={Protected} />
            </Switch>
          </div>
        </div>
      </AuthProvider>
    );
  }
}

export default App;