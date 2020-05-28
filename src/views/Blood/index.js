import React, { Component } from "react";
import apiClient from '../../services/apiClient';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Square from '../../components/Square';
import AddBlood  from './AddBlood';
import './Blood.css'

class Blood extends Component {
  state = {
    date: "",
    time: "",
    level: "",
    blood: [],
  };

  loadRecords = () => {
    apiClient
      .getAllRecords()
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
    const { history } = this.props;
    const { date, time, level } = this.state;
    apiClient
      .createRecord({ date, time, level })
      .then((res) => {
        history.push("/blood");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  renderRecords = () => {
    const { blood } = this.state;
    return blood.map((blood, index) => {
      return (
        <li key={index}>
          {blood.name}
          <button
            onClick={(e) => {
              this.handleDelete(blood._id);
            }}
          >
            delete
          </button>
        </li>
      );
    });
  };

  render() {
    return (
    <div>
     <div className="container-blood">
      <Nav/>
      <div><p className='title'>B L O O D</p></div>
      <AddBlood 
        onSubmit={ this.handleSubmit } 
        onChange= {this.handleChange}
        date= {this.state.date}
        time= {this.state.time}
        level= {this.state.level}
        />
      
      <Square>{this.renderRecords()}</Square>
      </div>
        
     
       <Footer/>
    </div>
     
    );
  }
}

export default Blood;