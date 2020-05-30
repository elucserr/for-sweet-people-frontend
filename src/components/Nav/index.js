    import React, { Component } from 'react';
    import './Nav.css';
    import { Link } from 'react-router-dom'; 
    import Button from '../Button';


    class Nav extends Component {
        state = { 
            showing: false,
            user: {} };

        render() {
            const { showing, user } = this.state;
            return(
                <nav className="nav">
                    <img 
                    src="/images/menu.png" 
                    alt="menu" 
                    className="menu" 
                    onClick={() => this.setState({ 
                    showing: !showing })} 
                    />
                    
                    { showing
                    ? <div>
                    <div className="user-container">
                
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
                    </div>
                    : null
                    }
                    <Link className='nav-link' to='/options'>F O R S W E E T P E O P L E</Link>
                </nav>
            )
        }
    }

    export default Nav;



