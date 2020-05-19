import React, { Component } from "react";
import apiClient from "../services/apiClient";
import { Link } from 'react-router-dom';

export default class Signup extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { data } = this.props;
    const { username, password } = this.state;
    apiClient
    .signup( { username , password })
    .then((res) => {
      data.push("/signup")
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <h1>Signup</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            value={username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={this.handleChange}
          />
          <input type="submit" value="submit" />
        </form>
        <p>Have an account?</p>
        <Link to={'/login'}>
         <button>Log In</button>
        </Link>
      </div>
    );
  }
}
