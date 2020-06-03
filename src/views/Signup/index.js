import React, { Component } from "react";
import { withAuth } from "../../context/authContext";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
//import Input from '../../components/Input';
import "./Signup.css";

class Signup extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { history } = this.props;
    const { username, password } = this.state;
    const { onSignup } = this.props;
    if (username !== "" && password !== "") {
      onSignup({ username, password });
    }
  };
  render() {
    const { username, password } = this.state;

    return (
      <div className="background">
        <div className="signup-container">
          <h1 className="app-name">F O R S W E E T P E O P L E</h1>
          <form className="signup-form" onSubmit={this.handleSubmit}>
            <input
              className="input-signup"
              //inputStyle="input--white--outline"
              //inputSize="input--medium"
              type="text"
              name="username"
              id="username"
              placeholder="USERNAME"
              value={username}
              onChange={this.handleChange}
            />
            <input
              className="input-signup"
              //inputStyle="input--white--outline"
              //inputSize="input--medium"
              type="password"
              name="password"
              id="password"
              placeholder="PASSWORD"
              value={password}
              onChange={this.handleChange}
            />

            <Button
              onClick={() => {
                console.log("Clicked");
              }}
              type="submit"
              buttonStyle="btn--green--solid"
              buttonSize="btn--small"
              value="signup"
            >
              SIGNUP
            </Button>
          </form>

          <Link to={"/login"}>
            <Button
              onClick={() => {
                console.log("Clicked");
              }}
              type="submit"
              buttonStyle="btn--transparent"
              buttonSize="btn--LINE"
              value="login"
            >
              Already have an account?
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
export default withAuth(Signup);
