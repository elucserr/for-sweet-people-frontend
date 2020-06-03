import React, { Component } from "react";
import apiClient from "../../services/apiClient";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SquareBlood from "../../components/SquareBlood";
import AddBlood from "./AddBlood";
import "./Blood.css";

class Blood extends Component {
  state = {
    date: "",
    time: "",
    level: "",
    blood: [],
  };

  loadRecords = () => {
    apiClient
      .getAllRecordsBlood()
      .then(({ data }) => {
        this.setState({
          blood: data,
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
      .deleteRecordBlood(id)
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
    const { date, time, level } = this.state;
    apiClient
      .createRecordBlood({ date, time, level })
      .then((res) => {
        const newBlood = this.state.blood;
        newBlood.push(res.data);
        this.setState({
          blood: newBlood,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  renderRecords = () => {
    const { blood } = this.state;

    return (
      <div className="records-container">
        <ul className="ul-container">
          {blood.map((blood, index) => {
            return (
              <li className="li-container">
                <SquareBlood
                  className="text-square"
                  key={index}
                  item={blood}
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
        <div className="container-blood">
          <Nav />
          <div>
            <p className="title">B L O O D</p>
          </div>
          <AddBlood
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            date={this.state.date}
            time={this.state.time}
            level={this.state.level}
          />
          {this.renderRecords()}
        </div>

        <Footer />
      </div>
    );
  }
}

export default Blood;
