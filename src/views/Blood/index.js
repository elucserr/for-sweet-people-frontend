import React, { Component } from "react";
//import axios from 'axios';
import apiClient from '../../services/apiClient';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Square from '../../components/Square';
import './Blood.css'
import Button from '../../components/Button';

class Blood extends Component {

  state = {
    date: "",
    time: "",
    level: "",
    blood: [],
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
      .createBloodRecord({ date, time, level })
      .then((res) => {
        history.push("/blood");
      })
      .catch((error) => {
        console.log(error);
      });
    };
      
  loadRecords = () => {
        apiClient
          .getBloodRecords()
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
          .deleteBloodRecord(id)
          .then(() => {
            console.log("done");
            this.loadRecords();
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
              {blood.date}
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
    const { date, time, level } = this.state;
    return (
      <div className="container-blood">
      <Nav/>
      <div><p className='title'>B L O O D</p></div>
      <form className="login-form" onSubmit={this.handleSubmit}>
          <input className="input-options"
            //inputStyle="input--white--outline"
            //inputSize="input--medium"
            type="date"
            name="date"
            id="date"
            placeholder="DATE"
            value={date}
            onChange={this.handleChange}
          />
          <input className="input-options"
            //inputStyle="input--white--outline"
            //inputSize="input--medium"
            type="time"
            name="time"
            id="time"
            placeholder="TIME"
            value={time}
            onChange={this.handleChange}
          />
          <input className="input-options"
            //inputStyle="input--white--outline"
            //inputSize="input--medium"
            type="number"
            name="level"
            id="level"
            placeholder="LEVEL OF GLUCOSE"
            value={level}
            onChange={this.handleChange}
          />
          <Button onClick={() => {console.log('Clicked')}}
          type="add"
          buttonStyle="btn--white--solid--1"
          buttonSize="btn--options"
          value="login">ADD</Button>
        </form>
        <div>
        <h1>Listado de Record</h1>
        <ul>
        <Square>{this.renderRecords()}</Square>
        </ul>
      </div>
        <Footer/>
      </div>
      
    )
  }
}

export default Blood;