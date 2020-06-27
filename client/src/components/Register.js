import React, { Component } from 'react';
import { register } from './UserFunctions';
import './components.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Header from './Header';
import Footer from './Footer';
import logo from '../assets/images/salon-icon-red.svg';

class Register extends Component {
	constructor() {
		super()
		this.state = {
			first_name: '',
			last_name: '',
			user_name: '',
			email: '',
			password: '',
			errors: {}
		}

		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}
	onSubmit(e) {
		e.preventDefault()

		const newUser = {
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			user_name: this.state.user_name, 
			email: this.state.email,
			password: this.state.password
		}

		register(newUser).then(res => {
			this.props.history.push(`/login`)
		})

		.catch(error => console.error ('new user register error', error));
	}

	render() {
		return (

			<div className="page">

				<Header />

				<Jumbotron fluid className="jumbotron" >
                        
					<div className="vertical-center">
						<img
						alt="Salon Icon"
						src={logo}
						/>{' '}
						<h1>bonjour</h1>

						<form noValidate onSubmit={this.onSubmit}>
							
							<div className="form-group">
								<input
									type="text"
									className="form-control"
									name="first_name"
									placeholder="first name"
									value={this.state.first_name}
									onChange={this.onChange}
								/>
							</div>
							
							<div className="form-group">
								<input
									type="text"
									className="form-control"
									name="last_name"
									placeholder="last name"
									value={this.state.last_name}
									onChange={this.onChange}
								/>
							</div>

							<div className="form-group">
								<input
									type="text"
									className="form-control"
									name="user_name"
									placeholder="username"
									value={this.state.user_name}
									onChange={this.onChange}
								/>
							</div>
							
							<div className="form-group">
								<input
									type="email"
									className="form-control"
									name="email"
									placeholder="email"
									value={this.state.email}
									onChange={this.onChange}
								/>
							</div>
							
							<div className="form-group">
								<input
									type="password"
									className="form-control"
									name="password"
									placeholder="password"
									value={this.state.password}
									onChange={this.onChange}
								/>
							</div>

							<button
								id="sign-up-button"
								type="submit"
								className="btn btn-lg btn-primary btn-block"
							>
								Sign Up
							</button>

						</form>

						<div className="text-links">
                            <a href="/">
                                <p>return to log in page</p>
                            </a>
                        </div>

					</div>

				</Jumbotron>

				<Footer />

			</div>

		)
	}
}

export default Register