import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
//import axios from 'axios';
import apiClient from "../../services/apiClient";

export default class Edit extends Component {
  state = {
    username: "",
    dateOfBirth: "",
    typeOfDiabetes: "",
    email: "",
    weight: "",
    height: "",
    user: [],
  };

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
  render() {
    const {
      username,
      dateOfBirth,
      typeOfDiabetes,
      email,
      weight,
      height,
    } = this.state;
    return (
      <div className="user-container">
        <Nav />
        <section className="section-container">
          <div className="user-data">
            <div className="image-info">
              <img src="/images/user.png" alt="user" className="user" />
            </div>
            <div className="buttons-info">
              <div className="user-name">{username}</div>
            </div>
          </div>
          <form onSubmit={this.handleSubmit}>
            <ul className="pr-1 pl-1 pb-1 flex-row">
              <li className="flex-row col-12 bb-white pb-1">
                <label for="name" className="user-font flex-row col-4">
                  NAME:
                </label>
                <input
                  type="text"
                  className="user-font flex-row col-8"
                  name="name"
                  value={username}
                  onChange={this.handleChange}
                />
              </li>

              <li className="flex-row col-12 bb-white pb-1">
                <label for="email" className="user-font flex-row col-4">
                  EMAIL:
                </label>
                <input
                  type="text"
                  className="user-font flex-row col-8"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </li>

              <li className="flex-row col-12 bb-white pb-1">
                <label for="type" className="user-font flex-row col-4">
                  TYPE :
                </label>
                <input
                  type="text"
                  className="user-font flex-row col-8"
                  name="type"
                  value={typeOfDiabetes}
                  onChange={this.handleChange}
                />
              </li>
              <li className="flex-row col-12 bb-white pb-1">
                <label for="birth" className="user-font flex-row col-4">
                  BIRTH:
                </label>
                <input
                  type="date"
                  className="user-font flex-row col-8"
                  name="date"
                  value={dateOfBirth}
                  onChange={this.handleChange}
                />
              </li>
              <li className="flex-row col-12 bb-white pb-1">
                <label for="weight" className="user-font flex-row col-4">
                  WEIGHT:
                </label>
                <input
                  type="number"
                  className="user-font flex-row col-8"
                  name="weight"
                  value={weight}
                  onChange={this.handleChange}
                />
              </li>
              <li className="flex-row col-12 bb-white pb-1">
                <label for="height" className="user-font flex-row col-4">
                  HEIGHT:
                </label>
                <input
                  type="number"
                  className="user-font flex-row col-8"
                  name="height"
                  value={height}
                  onChange={this.handleChange}
                />
              </li>
            </ul>
            <div className="buttons">
              <Link to={"/options"}>
                <Button
                  onClick={() => {
                    console.log("Clicked");
                  }}
                  type="submit"
                  buttonStyle="btn--orange--solid"
                  buttonSize="-btn--super--small"
                  value="save"
                >
                  SAVE
                </Button>
              </Link>
            </div>
          </form>
        </section>

        <Footer />
      </div>
    );
  }
}
