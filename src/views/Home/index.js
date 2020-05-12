import React, { Component } from "react";
import apiClient from "../../services/apiClient";

export default class Home extends Component {
  state = {
    options: [],
  };

  loadOptions = () => {
    apiClient
    .getOptions()
    .then(({ data }) => {
      this.setState({
        options: data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };
  componentDidMount(){
    this.loadOptions();
  };

  renderOptions = () => {

  };

  render(){
    return(
      <div></div>
    );
  }
}
