import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import Card from 'react-bootstrap/Card';
import './components.css';
import ProfilePhoto from '../assets/images/salon-default-profile-pic.png'


class Profile extends Component {
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
            email: decoded.email,
            profile_photo: '../assets/images/salon-default-profile-pic.png'
		})
	}

	render() {
		return (
				<div className="profile-section">
				
                    <div className="section-title">
                        Your Profile
                    </div>

                    <Card
                    className="profile-card">
                        <Card.Img
                            class="profile-image"
                            src={ProfilePhoto}
                            alt={this.state.user_name}
                        >
                        </Card.Img>
                        
                        <Card.Body>

                        <h2>{this.state.user_name}</h2>

                        </Card.Body>

                        </Card>

				</div>
		)
	}
}

export default Profile