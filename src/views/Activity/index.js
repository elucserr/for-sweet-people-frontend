import React, { Component } from "react";
import axios from 'axios';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import './Activity.css'
import Button from '../../components/Button';

class Activity extends Component {

  constructor(){
    super()
    this.state = {
      type: '',
      km: '',
      time: ''
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
    .post("https://api-forsweetpeople.herokuapp.com/activity", this.state)
    .then(response => {
    })
    .catch((error) => {
      this.setState({
        error: error,
      })
    })

    this.setState({
      type: '',
      km: '',
      time: ''
    });
  }

  render() {
    const { type, km, time } = this.state;
    return (
      <div className="container-activity">
      <Nav/>
      <div><p className='title'>A C T I V I T Y</p></div>
      <form className="login-form" onSubmit={this.handleSubmit}>
          <input className="input-options"
            //inputStyle="input--white--outline"
            //inputSize="input--medium"
            type="text"
            name="type"
            id="type"
            placeholder="WRITE YOUR ACTIVITY"
            value={type}
            onChange={this.handleChange}
          />
          <input className="input-options"
            //inputStyle="input--white--outline"
            //inputSize="input--medium"
            type="number"
            name="km"
            id="km"
            placeholder="KM"
            value={km}
            onChange={this.handleChange}
          />
          <input className="input-options"
            //inputStyle="input--white--outline"
            //inputSize="input--medium"
            type="time"
            name="time"
            id="time"
            placeholder="LEVEL OF GLUCOSE"
            value={time}
            onChange={this.handleChange}
          />
          <Button onClick={() => {console.log('Clicked')}}
          type="add"
          buttonStyle="btn--white--solid--3"
          buttonSize="btn--options"
          value="login">ADD</Button>
        </form>
      <Footer/>
      </div>
    )
  }
}

export default Activity;