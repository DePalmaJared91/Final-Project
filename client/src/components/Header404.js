import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './components.css';
import logo from '../assets/images/salon-wordmark-white.svg';

class Header404 extends Component {

    render() {
        return (

            <div className="header">    
            <Navbar collapseOnSelect className="navbar header-404" expand="lg">
            <Navbar.Brand href="/">
                <img src={logo}
                alt="Salon logo"></img>
            </Navbar.Brand>
            </Navbar>
        </div>
        );
    }
}

export default Header404;