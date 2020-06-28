import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import Button from 'react-bootstrap/Button';


class StudioProjects extends Component {
	constructor() {
		super()
		this.state = {
			first_name: '',
			last_name: '',
			user_name: '',
			email: '',
			errors: {}
		}
	}

	componentDidMount() {
		const token = localStorage.usertoken
		const decoded = jwt_decode(token)
		this.setState({
			first_name: decoded.first_name,
			last_name: decoded.last_name,
			user_name: decoded.user_name,
			email: decoded.email
		})
	}

	render() {
		return (
			<div>
				<div className="section-title">
				Your Gallery
				</div>

				<div className="text-center">
				<h1  className="mt-5 mb-5 text-center">display user<br></br>projects here</h1>
				
				</div>
			</div>
		)
	}
}

export default StudioProjects