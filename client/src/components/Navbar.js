import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Logo from '../assets/images/salon-wordmark-white.svg'

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
						Register
					</Link>
				</li>
			</ul>

		)

		const userLink = (
			<ul className="navbar-nav">

				<li className="nav-item">
					<Link to="/studio" className="nav-link">
						Your Studio
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/gallery" className="nav-link">
						Browse Gallery
					</Link>
				</li>
				<li className="nav-item">
					<a href="/" onClick={this.logOut.bind(this)} className="nav-link">
						Logout
					</a>
				</li>
			</ul>
		)

		return (

			<div>

			
			<nav className="navbar navbar-expand-lg navbar-dark">
			<img className=""
			src={Logo}
				alt="Salon logo"></img>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarsExample10"
					aria-controls="navbarsExample10"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div
					className="collapse navbar-collapse"
					id="navbarsExample10"
				>
					{/* <ul className="navbar-nav">
						<li className="nav-item">
							<Link to="/" className="nav-link">
								Home
							</Link>
						</li>
					</ul> */}
					{localStorage.usertoken ? userLink : loginRegLink}
				</div>
			</nav>
			</div>
		)
	}
}

export default withRouter(Navbar)