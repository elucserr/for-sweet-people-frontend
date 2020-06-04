import React, { Component } from "react";
import "./Nav.css";
import "../../views/User/User.css";
import { Link } from "react-router-dom";
import Button from "../Button";
import apiClient from "../../services/apiClient";
import Edit from "../../views/Edit";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      status: "",
      username: "",
      dateOfBirth: "",
      typeOfDiabetes: "",
      email: "",
      weight: "",
      height: "",
    };
  }
  state = {
    showing: false,
    update: false,
  };

  componentDidMount() {
    this.setState();
    // axios.get('https://api-forsweetpeople.herokuapp.com/whoami')
    apiClient
      .whoami()
      .then((response) => {
        this.setState({
          user: response.data,
        });
      })
      .catch((error) => {
        console.log("error", error);
        this.setState({
          error: error.message,
        });
      });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      username,
      dateOfBirth,
      typeOfDiabetes,
      email,
      weight,
      height,
    } = this.state;
    apiClient
      .createRecord({
        username,
        dateOfBirth,
        typeOfDiabetes,
        email,
        weight,
        height,
      })
      .then((res) => {
        const newUser = this.state.user;
        newUser.push(res.data);
        this.setState({
          user: newUser,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

 

  handleUpdate = () => {
    this.setState({
      update: !this.state.update,
    });
  };

  render() {
    const {
      showing,
      update,
      user,
      username,
      dateOfBirth,
      typeOfDiabetes,
      email,
      weight,
      height,
    } = this.state;

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
          <div
            className={`user-container ${
              showing ? "user-container--visible" : "user-container--disable"
            }`}
          >
            {" "}
            {update && (
              <Edit
                username={username}
                dateOfBirth={dateOfBirth}
                typeOfDiabetes={typeOfDiabetes}
                email={email}
                weight={weight}
                height={height}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                handleUpdate={this.handleUpdate}
              />
            )}
            {!update && (
              <section className="section-container">
                <div className="user-data">
                  <div className="image-info">
                    <img src="/images/user.png" alt="user" className="user" />
                  </div>
                  <div className="buttons-info">
                    <div className="user-name">{user.username}</div>
                  </div>
                </div>

                <ul className="pr-1 pl-1 flex-row">
                  <li className="flex-row col-12 bb-white pb-1">
                    <span className="user-font flex-row col-4">NAME:</span>
                    <span className="user-font flex-row col-8">
                      {user.username}
                    </span>
                  </li>

                  <li className="flex-row col-12 bb-white pb-1">
                    <span className="user-font flex-row col-4">EMAIL:</span>
                    <span className="user-font flex-row col-8">
                      {user.email}
                    </span>
                  </li>

                  <li className="flex-row col-12 bb-white pb-1">
                    <span className="user-font flex-row col-4">TYPE :</span>
                    <span className="user-font flex-row col-8">
                      {user.typeOfDiabetes}
                    </span>
                  </li>
                  <li className="flex-row col-12 bb-white pb-1">
                    <span className="user-font flex-row col-4">BIRTH:</span>
                    <span className="user-font flex-row col-8">
                      {user.dateOfBirth}
                    </span>
                  </li>
                  <li className="flex-row col-12 bb-white pb-1">
                    <span className="user-font flex-row col-4">WEIGHT:</span>
                    <span className="user-font flex-row col-8">
                      {user.weight}
                    </span>
                  </li>
                  <li className="flex-row col-12 bb-white pb-1">
                    <span className="user-font flex-row col-4">HEIGHT:</span>
                    <span className="user-font flex-row col-8">
                      {user.height}
                    </span>
                  </li>
                </ul>
                <div className="buttons">
                  <Button
                    onClick={this.handleUpdate}
                    type="submit"
                    buttonStyle="btn--orange--solid"
                    buttonSize="-btn--super--small"
                    value="edit"
                  >
                    EDIT
                  </Button>

                  <Link to={"/protected"}>
                    <Button
                      onClick={() => {
                        console.log("Clicked");
                      }}
                      type="submit"
                      buttonStyle="btn--orange--solid"
                      buttonSize="-btn--super--small"
                      value="edit"
                    >
                      LOGOUT
                    </Button>
                  </Link>
                </div>
              </section>
            )}
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
