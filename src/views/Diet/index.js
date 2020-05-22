import React, { Component } from "react";
import axios from 'axios';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import './Diet.css'
import Button from '../../components/Button';

class Diet extends Component {

  constructor(){
    super()
    this.state = {
      date: '',
      time: '',
      aliment: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    axios
    .post("https://api-forsweetpeople.herokuapp.com/diet", this.state)
    .then(response => {
    })
    .catch((error) => {
      this.setState({
        error: error,
      })
    })

    this.setState({
      date: '',
      time: '',
      aliment: ''
    });
  }

  render() {
    const { date, type, aliment } = this.state;
    return (
      <div className="container-diet">
      <Nav/>
      <div><p className='title'>N U T R I T I O N</p></div>
      <form className="login-form" onSubmit={this.handleSubmit}>
          <input className="input-options"
            //inputStyle="input--white--outline"
            //inputSize="input--medium"
            type="date"
            name="date"
            id="date"
            placeholder="DATE"
            value={date}
            onChange={this.handleChange}
          />
          <input className="input-options"
            //inputStyle="input--white--outline"
            //inputSize="input--medium"
            type="text"
            name="type"
            id="type"
            placeholder="TIME OF DAY"
            value={type}
            onChange={this.handleChange}
          />
          <input className="input-options"
            //inputStyle="input--white--outline"
            //inputSize="input--medium"
            type="text"
            name="aliment"
            id="aliment"
            placeholder="WHAT DID YOU EAT?"
            value={aliment}
            onChange={this.handleChange}
          />
          <Button onClick={() => {console.log('Clicked')}}
          type="add"
          buttonStyle="btn--white--solid--4"
          buttonSize="btn--options"
          value="login">ADD</Button>
        </form>
      <Footer/>
      </div>
    )
  }
}

export default Diet;