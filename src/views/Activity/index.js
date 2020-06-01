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
      .getAllRecordsAcitivity()
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
    const { type, km, time } = this.state;
    apiClient
      .createRecordActivity({ type, km, time })
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
    return activity.map((activity, index) => {
      return (
        <div className="records-container">
          <SquareActivity
            key={index}
            item={activity}
            handleDelete={this.handleDelete}
          />
        </div>
      );
    });
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
            km={this.state.km}
            time={this.state.time}
          />

          {this.renderRecords()}
        </div>

        <Footer />
      </div>
    );
  }
}

export default Activity;
