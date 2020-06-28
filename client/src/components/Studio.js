import React, { Component } from "react";
import { login } from "./UserFunctions";
import './components.css';
import Navbar from './Navbar';
import StudioProjects from './StudioProjects';
import Profile from './Profile'
import Footer from "./Footer.js";





class Studio extends Component {
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

			<Navbar />
			<Profile />
			<StudioProjects />
			<Footer />
			
			</div>
			
		);
	}
}
export default Studio;
