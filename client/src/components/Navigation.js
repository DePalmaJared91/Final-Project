import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import './components.css';
import logo from '../assets/images/salon-wordmark-white.svg';
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
    
    render() {
        return (

            <div className="functional-navigation">    
            <Navbar collapseOnSelect className="navbar" expand="lg">
            <Navbar.Brand href="/">
                <img src={logo}
                alt="Salon logo"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto navigation-links">
                
                <NavLink to="/" className="navigation-links"
                activeClassName="active">
                    <h6><span>Your Studio</span></h6>
                </NavLink>
                <NavLink to="/gallery" className="navigation-links"
                activeClassName="active">
                    <h6><span>Gallery</span></h6>
                </NavLink>
                
                {/* <Nav.Link className="active" href="/studio"><span>Your Studio</span></Nav.Link>
                <Nav.Link href="/gallery"><span>Browse Gallery</span></Nav.Link> */}
                
                {/* LEAVING THIS FOR DROPDOWN LINKS IF NEEDED
                ===================================================
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}

            </Nav>
            
                {/* LEAVING THIS FOR RIGHT ALIGNED LINKS IF NEEDED
                    ===================================================
                    <Nav>
                    
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                    </Nav.Link>
                    </Nav>

                    */}
            
            </Navbar.Collapse>
            </Navbar>
        </div>
        );
    }
}

export default Navigation;