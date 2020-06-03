import React, { Component } from "react";
import apiClient from "../../services/apiClient";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SquareDiet from "../../components/SquareDiet";
import AddDiet from "./AddDiet";
import "./Diet.css";

class Diet extends Component {
  state = {
    date: "",
    time: "",
    aliment: "",
    diet: [],
  };

  loadRecords = () => {
    apiClient
      .getAllRecordsDiet()
      .then(({ data }) => {
        this.setState({
          diet: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.loadRecords();
  }

  handleDelete = (id) => {
    apiClient
      .deleteRecordDiet(id)
      .then(() => {
        console.log("done");
        this.loadRecords();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { date, time, aliment } = this.state;
    apiClient
      .createRecordDiet({ date, time, aliment })
      .then((res) => {
        const newDiet = this.state.diet;
        newDiet.push(res.data);
        this.setState({
          diet: newDiet,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  renderRecords = () => {
    const { diet } = this.state;

    return (
      <div className="records-container">
        <ul className="ul-container">
          {diet.map((diet, index) => {
            return (
              <li className="li-container">
                <SquareDiet
                  className="text-square"
                  key={index}
                  item={diet}
                  handleDelete={this.handleDelete}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  render() {
    return (
      <div>
        <div className="container-diet">
          <Nav />
          <div>
            <p className="title">D I E T</p>
          </div>
          <AddDiet
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            date={this.state.date}
            time={this.state.time}
            aliment={this.state.aliment}
          />
          {this.renderRecords()}
        </div>

        <Footer />
      </div>
    );
  }
}

export default Diet;
