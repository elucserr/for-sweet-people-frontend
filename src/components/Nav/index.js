import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import Button from "../Button";

class Nav extends Component {
  state = {
    showing: false,
  };

  render() {
    const { showing } = this.state;
    return (
      <nav className="nav">
        <img
          src="/images/menu.png"
          alt="menu"
          className="menu"
          onClick={() =>
            this.setState({
              showing: !showing,
            })
          }
        />

          <div>
            <div className={`user-container ${showing ? "user-container--visible" : "user-container--disable"}`}>
                write here
            </div>
          </div>

        <Link className="nav-link" to="/options">
          F O R S W E E T P E O P L E
        </Link>
      </nav>
    );
  }
}

export default Nav;
