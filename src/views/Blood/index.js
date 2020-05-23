import React, { Component } from "react";
import axios from 'axios';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import './Blood.css'
import Button from '../../components/Button';

class Blood extends Component {

  constructor(){
    super()
    this.state = {
      date: '',
      time: '',
      level: ''
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
    .post("https://api-forsweetpeople.herokuapp.com/blood", this.state)
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
      level: ''
    });
  }

  render() {
    const { date, time, level } = this.state;
    return (
      <div className="container-blood">
      <Nav/>
      <div><p className='title'>B L O O D</p></div>
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
            type="number"
            name="level"
            id="level"
            placeholder="LEVEL OF GLUCOSE"
            value={level}
            onChange={this.handleChange}
          />
          <Button onClick={() => {console.log('Clicked')}}
          type="add"
          buttonStyle="btn--white--solid--1"
          buttonSize="btn--options"
          value="login">ADD</Button>
        </form>
        <Footer/>
      </div>
      
    )
  }
}

export default Blood;