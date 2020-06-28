import React, { Component } from "react";
import { login } from "./UserFunctions";
import Button from "react-bootstrap/Button";
import logo from '../assets/images/salon-icon-red.svg'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Header from './Header';
import Footer from "./Footer.js";





class LoginForm extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			errors: {},
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	onSubmit(e) {
		e.preventDefault();

		const user = {
			email: this.state.email,
			password: this.state.password,
		};

		login(user).then((res) => {
			if (res) {
				this.props.history.push(`/studio`);
			}
		});
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
									
									{/* add function to recover password */}
									<div className="text-links">
											<a href="/">
											<p>forgot password?</p>
											</a>
									</div>

									<div className="flex-div">
									
										{/* this button signs into account */}
										<button
											type="submit"
											className="btn btn-primary"
											id="log-in-button"
										>
											Log In
										</button>
										{/* this button takes user to sign in page */}
										<Button
											href="/register"
											id="sign-up-link-button">
											Sign Up
										</Button>
									</div>
								</form>
							</div>
					</Jumbotron>
				<Footer />
			</div>
		);
	}
}
export default LoginForm;
