import React, { Component } from "react";
import apiClient from '../../services/apiClient';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Square from '../../components/Square';
import AddActivity  from './AddActivity';
import './Activity.css'

class Activity extends Component {
  state = {
    type: "",
    km: "",
    time: "",
    activity: [],
  };

  loadRecords = () => {
    apiClient
      .getAllRecords()
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
    const { type, km, time } = this.state;
    apiClient
      .createRecord({ type, km, time })
      .then((res) => {
        const newActivity = this.state.activity
        newActivity.push(res.data)
        this.setState({
          activity: newActivity
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  renderRecords = () => {
    const { activity } = this.state;
    return activity.map((activity, index) => {
      return (
        <Square key={index} item={activity} handleDelete={this.handleDelete} />
      );
    });
  };

  render() {
    return (
    <div>
     <div className="container-activity">
      <Nav/>
      <div><p className='title'>A C T I V I T Y</p></div>
      <AddActivity
        onSubmit={ this.handleSubmit } 
        onChange= {this.handleChange}
        date= {this.state.type}
        time= {this.state.km}
        level= {this.state.time}
        />
      
       {this.renderRecords()}
      
      </div>
        
     
       <Footer/>
    </div>
     
    );
  }
}

export default Activity;