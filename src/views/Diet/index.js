import React, { Component } from "react";
import axios from 'axios';
import Layout from '../Layout'

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
    const { date, time, aliment } = this.state;
    return (
      <Layout>Diet</Layout>
    )
  }
}

export default Diet;