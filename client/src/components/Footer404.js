import React, { Component } from 'react';
import './components.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';



class Footer404 extends Component {

		render() {
				return (
								<div className="footer text-center footer-404">
										<a
												href="https://github.com/DePalmaJared91/Final-Project/"
												target="_blank"
												rel="noopener noreferrer">
										<FontAwesomeIcon icon={faGithub} />
										</a>
										<h5>&copy; 2020 Salon, Inc. All rights reserved.</h5>
								</div>
										);
		}
}

export default Footer404;