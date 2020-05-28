import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Button from '../../components/Button'

import { withAuth } from "../../context/authContext";


class Protected extends Component {
  render() {
    const { onLogout } = this.props;
    return (
      <div>
        <h1>Are you sure you want to logout?</h1>
        
        <Button onClick={onLogout}
           type="submit" 
           buttonStyle="btn--transparent"
           buttonSize="btn--LINE"
           value="logout">Yes</Button>

        <Link to={'/options'}>
         <Button onClick={() => {console.log('Clicked')}}
           type="submit" 
           buttonStyle="btn--transparent"
           buttonSize="btn--LINE"
           value="login">Oh no!</Button>
        </Link> 
       
      </div>
    );
  }
}

export default withAuth(Protected);