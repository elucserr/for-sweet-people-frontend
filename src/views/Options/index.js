import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card'
import "./options.css"


class Options extends Component {
  render() {
    return (
      <div className="background-options">
       <div className="flex-grid">
        <Card
         className="grid-item"
         children="BLOOD"
         cardStyle="card--red"
         cardSize="card--medium"
        />

        <Card
         className="grid-item"
         children="MEDICINE"
         cardStyle="card--orange"
         cardSize="card--medium"
        />
        
        <Card
         className="grid-item"
         children="ACTIVITY"
         cardStyle="card--grey"
         cardSize="card--medium"
        />
        
        <Card
         className="grid-item"
         children="NUTRITION"
         cardStyle="card--green"
         cardSize="card--medium"
        />
       </div>
      </div>
      
    )
  }
}

        

export default Options;