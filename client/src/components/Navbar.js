import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Logo from '../assets/images/salon-wordmark-white.svg';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';




class Navbar extends Component {
	
	logOut(e) {
		e.preventDefault()
		localStorage.removeItem('usertoken')
		this.props.history.push(`/`)
	}

	render() {
		
		const loginRegLink = (

			<ul className="navbar-nav">
				<li className="nav-item">
					<Link to="/login" className="nav-link">
						Login
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/register" className="nav-link">
						Sign Up
					</Link>
				</li>
			</ul>

		)

		const userLink = (
			

													
							<ul className="navbar-nav">
							
								<li className="nav-item">
									<NavLink to="/studio"
									className="nav-link"
									activeClassName="navbar-active">
										Studio
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink to="/gallery"
									className="nav-link"
									activeClassName="navbar-active">
										Gallery
									</NavLink>
								</li>
								<li className="nav-item">
									<a href="/"
									onClick={this.logOut.bind(this)} className="nav-link">
										Logout
									</a>
								</li>
								
								<li className="nav-item search-nav-item">
									<Form inline className="search-form">
									<FormControl type="text" placeholder="Search" className="search-input-field" />
									<div className="search-button">
									<FontAwesomeIcon icon={faSearch} /></div>
									</Form>
								</li>

							</ul>
											

		)

		return (

			<div className="header">

			<nav className="navbar navbar-expand-lg navbar-dark">
			
			<img className=""
			src={Logo}
			alt="Salon logo"></img>
				
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#salon-navbar"
					aria-controls="salon-navbar"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div
					className="collapse navbar-collapse"
					id="salon-navbar"
				>

					{localStorage.usertoken ? userLink : loginRegLink}
				
				</div>
			</nav>

			
			</div>
		)
	}
}

export default withRouter(Navbar)