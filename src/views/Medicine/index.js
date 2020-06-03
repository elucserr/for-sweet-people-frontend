import React, { Component } from "react";
import apiClient from "../../services/apiClient";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SquareMedicine from "../../components/SquareMedicine";
import AddMedicine from "./AddMedicine";
import "./Medicine.css";

class Medicine extends Component {
  state = {
    date: "",
    time: "",
    medicine: "",
    med: [],
  };

  loadRecords = () => {
    apiClient
      .getAllRecordsMedicine()
      .then(({ data }) => {
        this.setState({
          med: data,
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
      .deleteRecordMedicine(id)
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
    const { date, time, medicine } = this.state;
    apiClient
      .createRecordMedicine({ date, time, medicine })
      .then((res) => {
        const newMedicine = this.state.med;
        newMedicine.push(res.data);
        this.setState({
          med: newMedicine,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  renderRecords = () => {
    const { med } = this.state;

    return (
      <div className="records-container">
        <ul className="ul-container">
          {med.map((med, index) => {
            return (
              <li className="li-container">
                <SquareMedicine
                  className="text-square"
                  key={index}
                  item={med}
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
        <div className="container-medicine">
          <Nav />
          <div>
            <p className="title">M E D I C I N E</p>
          </div>
          <AddMedicine
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            date={this.state.date}
            time={this.state.time}
            medicine={this.state.medicine}
          />
          {this.renderRecords()}
        </div>

        <Footer />
      </div>
    );
  }
}

export default Medicine;
