import React, { Component } from "react";
//import axios from 'axios';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import './User.css';
import Button from '../../components/Button';
import apiClient from '../../services/apiClient';

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
              
              <div className="user-intro">
              <div className="user-image">
              <div className="profile"/>
              </div>
              <div className="user-name">
              <p className="user-title">{user.username}</p>
               <div className="buttons">
               <Link to={'/profile/edit'}>
                 <Button onClick={() => {console.log('Clicked')}}
                   type="submit" 
                   buttonStyle="btn--orange--solid"
                   buttonSize="btn--small"
                   value="edit">EDIT PROFILE</Button>
                </Link> 
                <Link to={'/protected'}>
                 <Button onClick={() => {console.log('Clicked')}}
                   type="submit" 
                   buttonStyle="btn--orange--solid"
                   buttonSize="btn--small"
                   value="edit">LOGOUT</Button>
                </Link>
               </div>
              </div>
              </div>
              <div className="user-form">
               <ul className="user-list">
        
               <li className="user-data">
                 <span className="fixed-title">NAME:</span>
                 <span className="non-fixed-title">{user.username}</span>
                </li>
                <li className="user-data">
                 <span className="fixed-title">PASSWORD:</span>
                 <span className="non-fixed-title">{user.password}</span>
                </li>
                <li className="user-data">
                 <span className="fixed-title">TYPE OF DIABETES:</span>
                 <span className="non-fixed-title">{user.typeOfDiabetes}</span>
                </li>
                <li className="user-data">
                 <span className="fixed-title">WEIGHT:</span>
                 <span className="non-fixed-title">{user.weight}</span>
                </li>
                <li className="user-data">
                 <span className="fixed-title">HEIGHT:</span>
                 <span className="non-fixed-title">{user.height}</span>
                </li>
        
               </ul>
               </div>
            
        
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