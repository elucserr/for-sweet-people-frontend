import React, { Component } from "react";
import apiClient from "../../services/apiClient";
import Card from "../../components/Card"

export default class Home extends Component {
  state = {
    options: [],
  }

  componentDidMount = () => {
    apiClient
    .options()
    .then((response) => {
      this.setState({
        options: response.data,
      })
    })

  .catch( (error) => {
    this.setState({
      error: error.name,
    })
  })
}

showOptions = () => {
  const { options } = this.state;
  return options.map((option, index) => {
    return <Card option={option} index={index}/>
  })
}

render(){
  return(
    <div>Options</div>
  )
 }
}

  