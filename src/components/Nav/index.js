import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom'; 


class Nav extends Component {
    render() {
        return(
            <nav className="nav">
                <Link className='nav-link' to='/profile'>
                 <img src="/images/menu.png" alt="menu" className="menu"/>
                </Link>
                <Link className='nav-link' to='/options'>F O R S W E E T P E O P L E</Link>
            </nav>
        )
    }
}

export default Nav;
