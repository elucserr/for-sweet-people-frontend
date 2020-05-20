import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom'; 


class Nav extends Component {
    render() {
        return(
            <nav className="nav">
                <img src="../../../public/images/menu.png" alt="menu" className="menu"/>
                <Link className='nav-link' to='/'>F O R S W E E T P E O P L E</Link>
            </nav>
        )
    }
}

export default Nav;