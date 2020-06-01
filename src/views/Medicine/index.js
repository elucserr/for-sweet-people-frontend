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
    type: "",
    medicine: [],
  };

  loadRecords = () => {
    apiClient
      .getAllRecordsMedicine()
      .then(({ data }) => {
        this.setState({
          medicine: data,
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
    const { date, time, type } = this.state;
    apiClient
      .createRecordMedicine({ date, time, type })
      .then((res) => {
        const newMedicine = this.state.medicine;
        newMedicine.push(res.data);
        this.setState({
          medicine: newMedicine,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  renderRecords = () => {
    const { medicine } = this.state;
    return medicine.map((medicine, index) => {
      return (
        <div className="records-container">
          <SquareMedicine
            key={index}
            item={medicine}
            handleDelete={this.handleDelete}
          />
        </div>
      );
    });
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
            type={this.state.type}
          />

          {this.renderRecords()}
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Medicine;
