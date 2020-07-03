import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import Card from 'react-bootstrap/Card';
import './components.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faHome } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Button from 'react-bootstrap/Button';



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
		})
	}

	render() {
		return (
				<div className="profile-section">
				
                    <div className="section-title">
                        {this.state.user_name}'s Profile
                    </div>

                    <Card
                    className="profile-card">
                        
                        <Card.Img
                            className="profile-image"
                            src="https://thevelvetonion.files.wordpress.com/2012/02/noelfielding_painting.jpg?w=350&h=200&crop=1"
                            alt={this.state.user_name}
                        >
                        </Card.Img>
                        
                        <Card.Body
                        className="profile-card-body"
                        >

                            <h2>{this.state.user_name}</h2>
                            <h3>London</h3>
                            <h4>Studied fine art at Croydon University.  Has exhibited artworks in the Royal Albert Hall, the Saatchi Gallery and The Tate Liverpool, among others. Paintings are visceral and animated, worked on in bursts of energetic vigour, drawing on surrealism, dada and neo-expressionism.</h4>

                            <div className="flex-div">

                            <a
                            className="profile-link-icon"
                            href="/"
                            rel="noopener noreferrer"
                            target="_blank">
                                <FontAwesomeIcon icon={faHome} />
                            </a>
                            <a
                            className="profile-link-icon"
                            href="/"
                            rel="noopener noreferrer"
                            target="_blank">
                                <FontAwesomeIcon icon={faStore} />
                            </a>
                            <a
                            className="profile-link-icon"
                            href="/"
                            rel="noopener noreferrer"
                            target="_blank">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a
                            className="profile-link-icon"
                            href="/"
                            rel="noopener noreferrer"
                            target="_blank">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>

                        </div>

                        <div className="flex-div">

                            
                            <Button className="edit-profile-button"
                            variant="primary">
                            Edit Profile
                            </Button>
                            
                            <Button className="upload-project-button"
                            variant="primary">
                            Upload a Project
                            </Button>
                            


                        </div>

                        
                        </Card.Body>

                    </Card>

				</div>
		)
	}
}

export default Profile