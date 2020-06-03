import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import "./options.css";

class Options extends Component {
  render() {
    return (
      <div className="background-options">
        <Nav />
        <div className="flex-grid">
          <Link className="link" to="/blood">
            <Card
              className="grid-item"
              children="BLOOD"
              cardStyle="card--red"
              cardSize="card--medium"
            />
          </Link>
          <Link className="link" to="/medicine">
            <Card
              className="grid-item"
              children="MEDICINE"
              cardStyle="card--orange"
              cardSize="card--medium"
            />
          </Link>
          <Link className="link" to="/activity">
            <Card
              className="grid-item"
              children="ACTIVITY"
              cardStyle="card--grey"
              cardSize="card--medium"
            />
          </Link>
          <Link className="link" to="/diet">
            <Card
              className="grid-item"
              children="NUTRITION"
              cardStyle="card--green"
              cardSize="card--medium"
            />
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Options;
