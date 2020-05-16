import React, { Component } from "react";
import axios from 'axios';

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
      <div>blood</div>
    )
  }
}

export default Blood;