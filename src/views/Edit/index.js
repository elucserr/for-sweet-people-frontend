import React, { Component } from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export default class Edit extends Component{

  render(){
    return(
      <div className="user-container">
      <Nav/>
      <h1>Edit</h1>
      <Footer />
      </div>
    )
  }
}