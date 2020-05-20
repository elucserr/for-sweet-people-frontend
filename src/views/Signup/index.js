import React, { Component } from 'react';
import { withAuth } from "../context/authContext";
import { Link } from 'react-router-dom';
import Background from '../../components/Background';
import Button from '../../components/Button';
import Input from '../../components/Input';

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
    if ( username !== '' && password !== ''){
      onSignup({username, password})
    }
    
	}
	render() {
    const { username, password } = this.state;

    return (
      <div>
      <div className="signup-container">

      </div>
        <h1 className="app-name">F O R S W E E T P E O P L E</h1>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            value={username}
            onChange={this.handleChange}
          />
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={this.handleChange}
          />
          <Button onClick={() => {console.log('Clicked')}}
            type="submit" 
            buttonStyle="btn--primary--solid"
            buttonSize="btn--small"
            value="signup" />
        </form>
        <p>Already have an account?</p><Link to={'/login'}><button>Log In</button></Link> 
        <Background/>
      </div>
    );
  }
}
export default withAuth(Signup);