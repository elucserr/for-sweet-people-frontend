import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import AnonRoute from "./views/AnonRoute";
import PrivateRoute from "./views/PrivateRoute";

import Protected from "./views/Protected";
import LoginWithAuth from "./views/Login";
import SignupWithAuth from './views/Signup';

import AuthProvider from "./context/authContext";

import Home from "./views/Home";
import Options from "./views/Options";
import User from "./views/User";
import Blood from "./views/Blood";
import Activity from "./views/Activity";
import Medicine from "./views/Medicine";
import Diet from "./views/Diet";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div>
          <div className="App">
            <Switch>
              <Route exact path={"/"} component={Home}/>
              <AnonRoute exact path={"/login"} component={LoginWithAuth} />
              <AnonRoute exact path={"/signup"} component={SignupWithAuth} />
              <Route exact path={"/options"} component={Options} />
              <Route exact path={"/users/:id"} component={User} />
              <Route exact path={"/blood"} component={Blood} />
              <Route exact path={"/activity"} component={Activity} />
              <Route exact path={"/medicine"} component={Medicine} />
              <Route exact path={"/diet"} component={Diet} />
              <PrivateRoute exact path={"/protected"} component={Protected} />
            </Switch>
          </div>
        </div>
      </AuthProvider>
    );
  }
}

export default App;