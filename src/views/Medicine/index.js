import React, { Component } from "react";
import axios from 'axios';
import Layout from '../Layout'

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
      <Layout>Medicine</Layout>
    )
  }
}

export default Medicine;