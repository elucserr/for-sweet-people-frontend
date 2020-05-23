import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import './User.css'
import Button from '../../components/Button';
import apiClient from "../../services/apiClient";
//import apiClient from '../../services/apiClient';

const STATUS = {
  LOADING: 'LOADING',
  LOADED: 'LOADED',
  ERROR: 'ERROR'
}


class User extends Component {
  constructor() {
      super()
      this.state = {
          user: {},
          status: '',
      }
  }

  componentDidMount() {
      this.setState({ status: STATUS.LOADING })
      // axios.get('https://api-forsweetpeople.herokuapp.com/whoami')
      apiClient.whoami()
          .then((response) => {
              this.setState({
                  user: response.data,
                  status: STATUS.LOADED
              })
          })
          .catch((error) => {
              console.log('error', error)
              this.setState({
                  error: error.message,
                  status: STATUS.ERROR
              })
          })
  }


  render() {

      const { user, error, status } = this.state;

      switch (status) {
          case STATUS.LOADING:
              return <div className="loading-container">
                  <Nav />
                  <h1>LOADING</h1>
                  <Footer/>
                
              </div>;
          case STATUS.LOADED:
              return <div className="user-container">
              <Nav/>
              <div className="user-intro">
               <p className="user-title">{user.username}</p>
               <Link to={'/profile/edit'}>
                 <Button onClick={() => {console.log('Clicked')}}
                   type="submit" 
                   buttonStyle="btn--orange--solid"
                   buttonSize="btn--small"
                   value="edit">EDIT PROFILE</Button>
                </Link> 
              </div>
              <div className="user-form">
               <ul className="user-list">
        
               <li className="user-data">
                 <span className="">NAME:</span>
                 <span className="">{user.username}</span>
                </li>
                <li className="user-data">
                 <span className="">PASSWORD:</span>
                 <span className="">{user.password}</span>
                </li>
                <li className="user-data">
                 <span className="">EMAIL:</span>
                 <span className="">{user.email}</span>
                </li>
                <li className="user-data">
                 <span className="">TYPE OF DIABETES:</span>
                 <span className="">{user.typeOfDiabetes}</span>
                </li>
                <li className="user-data">
                 <span className="">WEIGHT:</span>
                 <span className="">{user.weight}</span>
                </li>
                <li className="user-data">
                 <span className="">HEIGHT:</span>
                 <span className="">{user.height}</span>
                </li>
        
               </ul>
               </div>
             <Footer/>
        
              </div>
          case STATUS.ERROR:
              return <div className="error-container">
                  <Nav />
                  <h1>ERROR</h1>
                  <Footer/>
                  </div>

          default:
              break;
      }

      return (
          <div>
              {this.status}
          </div>
      )
  }
}

export default User;