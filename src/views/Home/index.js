import React, { Component } from "react";
import Button from "../../components/Button";
import "./Home.css";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="background">
        <div className="home">
          <h1 className="name">F O R S W E E T P E O P L E</h1>
          <Link to={"/login"}>
            <Button
              onClick={() => {
                console.log("Clicked");
              }}
              type="submit"
              buttonStyle="btn--orange--solid"
              buttonSize="btn--LINE"
              value="login"
            >
              Start
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
