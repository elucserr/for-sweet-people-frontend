import React, { Component } from "react";
import axios from 'axios';

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
      <div>Activity</div>
    )
  }
}

export default Activity;