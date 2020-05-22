import React, { Component } from "react";
import { withAuth } from "../../context/authContext";
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
//import Input from '../../components/Input';
import "./Login.css"


class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const { onLogin } = this.props;
    if (username !== "" && password !== "") {
      onLogin({ username, password });
    }
  };

  cleanForm = () => {
    this.setState({
      username: "",
      password: "",
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className="background">
      <div className="login-container">
      <h1 className="app-name">F O R S W E E T P E O P L E</h1>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <input className="input-auth"
            //inputStyle="input--white--outline"
            //inputSize="input--medium"
            type="text"
            name="username"
            id="username"
            placeholder="USERNAME"
            value={username}
            onChange={this.handleChange}
          />
          <input className="input-auth"
            //inputStyle="input--white--outline"
            //inputSize="input--medium"
            type="password"
            name="password"
            id="password"
            placeholder="PASSWORD"
            value={password}
            onChange={this.handleChange}
          />
          <Button onClick={() => {console.log('Clicked')}}
          type="submit"
          buttonStyle="btn--orange--solid"
          buttonSize="btn--small"
          value="login">LOGIN</Button>
        </form>
    
        <Link to={'/signup'}>
        <Button onClick={() => {console.log('Clicked')}}
        type="submit"
        buttonStyle="btn--transparent"
        buttonSize="btn--line"
        value="login">Don't have an account?</Button>
        </Link>
      </div>
      </div>
    );
  }
}

export default withAuth(Login);
