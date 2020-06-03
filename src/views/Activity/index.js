import React, { Component } from "react";
import apiClient from "../../services/apiClient";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SquareActivity from "../../components/SquareActivity";
import AddActivity from "./AddActivity";
import "./Activity.css";

class Activity extends Component {
  state = {
    type: "",
    km: "",
    time: "",
    activity: [],
  };

  loadRecords = () => {
    apiClient
      .getAllRecordsActivity()
      .then(({ data }) => {
        this.setState({
          activity: data,
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
      .deleteRecordActivity(id)
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
    const { type, time, km } = this.state;
    apiClient
      .createRecordActivity({ type, time, km })
      .then((res) => {
        const newActivity = this.state.activity;
        newActivity.push(res.data);
        this.setState({
          activity: newActivity,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  renderRecords = () => {
    const { activity } = this.state;

    return (
      <div className="records-container">
        <ul className="ul-container">
          {activity.map((activity, index) => {
            return (
              <li className="li-container">
                <SquareActivity
                  className="text-square"
                  key={index}
                  item={activity}
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
        <div className="container-activity">
          <Nav />
          <div>
            <p className="title">A C T I V I T Y</p>
          </div>
          <AddActivity
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            type={this.state.type}
            time={this.state.time}
            km={this.state.km}
          />
          {this.renderRecords()}
        </div>

        <Footer />
      </div>
    );
  }
}

export default Activity;
