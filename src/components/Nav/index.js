import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom'; 


class Nav extends Component {
    render() {
        return(
            <nav className="nav">
                <Link className='nav-link' to='/'>F O R S W E E T P E O P L E</Link>
            </nav>
        )
    }
}

export default Nav;