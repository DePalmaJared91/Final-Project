import React, { Component } from 'react';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import './components.css';
import logo from '../assets/images/salon-wordmark-white.svg';

class Header extends Component {

    render() {
        return (

        <div className="header">    
            <Navbar collapseOnSelect className="navbar" expand="lg">
            <Navbar.Brand href="/">
                <img src={logo}
                alt="Salon logo"></img>
            </Navbar.Brand>
            </Navbar>
        </div>
        );
    }
}

export default Header;