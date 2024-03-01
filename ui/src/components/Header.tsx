import logo from '../static/logo.svg';
import React from 'react';


const Header: React.FC = () => {
    return (
        <header>
            <div className="logo-wrapper">
                <img src={logo} className="logo" alt="logo" />
                <h1>Mood Tracker</h1>
            </div>
            <div className="user-action">
                <p>Login</p>
                <p>Register</p>
            </div>
        </header>
    )
}

export default Header;
