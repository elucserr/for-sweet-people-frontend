import React, { Component } from "react";
import apiClient from '../../services/apiClient';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Square from '../../components/Square';
import AddDiet  from './AddDiet';
import './Diet.css'

class Diet extends Component {
  state = {
    date: "",
    type: "",
    aliment: "",
    diet: [],
  };

  loadRecords = () => {
    apiClient
      .getAllRecords()
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
      .deleteRecord(id)
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
    const { date, type, aliment } = this.state;
    apiClient
      .createRecord({ date, type, aliment })
      .then((res) => {
        const newDiet = this.state.diet
        newDiet.push(res.data)
        this.setState({
          diet: newDiet
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  renderRecords = () => {
    const { diet } = this.state;
    return diet.map((diet, index) => {
      return (
        <Square key={index} item={diet} handleDelete={this.handleDelete} />
      );
    });
  };

  render() {
    return (
    <div>
     <div className="container-aliment">
      <Nav/>
      <div><p className='title'>A L I M E N T S</p></div>
      <AddDiet
        onSubmit={ this.handleSubmit } 
        onChange= {this.handleChange}
        date= {this.state.date}
        time= {this.state.type}
        level= {this.state.aliment}
        />
      
       {this.renderRecords()}
      
      </div>
        
     
       <Footer/>
    </div>
     
    );
  }
}

export default Diet;