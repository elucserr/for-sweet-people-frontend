import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import apiClient from "../../services/apiClient";
import Card from '../../components/Card';
import Layout from '../../views/Layout';
import Blood from '../Blood';
import Diet from '../Diet';
import Medicine from '../Medicine';
import Activity from '../Activity';

const STATUS = {
  LOADING: 'LOADING',
  LOADED: 'LOADED',
  ERROR: 'ERROR'
}

class Home extends Component {
  constructor() {
    super()
    this.state = {
    options: [],
    status: '',
  }
}

  componentDidMount = () => {
    apiClient
    .options()
    .then((response) => {
      this.setState({
        options: response.data,
        status: STATUS.LOADED
      })
    })

  .catch((error) => {
    this.setState({
      error: error,
      status: STATUS.ERROR
    })
  })
}

render() {

  const {options, error, status} = this.state;

  switch (status) {

    case STATUS.LOADING:
      return <div>
       <h1>LOADING</h1>
      </div>;

    case STATUS.LOADED:
      return <div className='container'>

      <div className='' component={Card}>
        <Link to='/blood' className='link'>Blood</Link>
        <Route exact path='/blood' component={Blood}></Route>
      </div>

      <div className=''>
        <Link to='/activity' className='link'>Activity</Link>
        <Route exact path='/activity' component={Activity}></Route>
      </div>

      <div className=''>
        <Link to='/diet' className='link'>Diet</Link>
        <Route exact path='/diet' component={Diet}></Route>
      </div>

      <div className=''>
        <Link to='/medicine' className='medicine'>Blood</Link>
        <Route exact path='/medicine' component={Medicine}></Route>
      </div>
     
  </div>

    case STATUS.ERROR:
      return <div>
        {error}
      </div>

      default: break;
  }

  return (
    <div>
     {this.status}
    </div>
  )
 }
}

export default Home;