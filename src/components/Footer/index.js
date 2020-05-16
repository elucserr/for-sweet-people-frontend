import React, { Component } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'; 


class Footer extends Component {
    render() {
        return(
            <footer className="footer">
                <Link className='footer-link' to={'/blood'}>BLOOD</Link>
                <Link className='footer-link' to={'/medicine'}>MEDICINE</Link>
                <Link className='footer-link' to={'/activity'}>ACTIVITY</Link>
                <Link className='footer-link' to={'/diet'}>NUTRITION</Link>
            </footer>
        )
    }
}

export default Footer;