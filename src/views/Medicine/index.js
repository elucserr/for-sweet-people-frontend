import React, { Component } from "react";
import axios from 'axios';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import './Medicine.css'
import Button from '../../components/Button';

class Medicine extends Component {

  constructor(){
    super()
    this.state = {
      date: '',
      time: '',
      type: ''
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
    .post("https://api-forsweetpeople.herokuapp.com/medicine", this.state)
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
      type: ''
    });
  }

  render() {
    const { date, time, type } = this.state;
    return (
      <div className="container-medicine">
      <Nav/>
      <div><p className='title'>M E D I C I N E</p></div>
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
            type="time"
            name="time"
            id="time"
            placeholder="TIME"
            value={time}
            onChange={this.handleChange}
          />
          <input className="input-options"
            //inputStyle="input--white--outline"
            //inputSize="input--medium"
            type="text"
            name="type"
            id="type"
            placeholder="WRITE YOUR MEDICINE"
            value={type}
            onChange={this.handleChange}
          />
          <Button onClick={() => {console.log('Clicked')}}
          type="add"
          buttonStyle="btn--white--solid--2"
          buttonSize="btn--options"
          value="login">ADD</Button>
        </form>
      <Footer/>
      </div>
    )
  }
}

export default Medicine;