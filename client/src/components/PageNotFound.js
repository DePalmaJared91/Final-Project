import React, { Component } from 'react';
import './components.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import logo from '../assets/images/salon-404.svg'
import Footer404 from './Footer404'
import Header404 from './Header404'

class PageNotFound extends Component {

    render() {
        return (
            <div className="page">
                <Header404 />
                    <div className="page-not-found">
                            <Jumbotron fluid className="jumbotron">
                                <div className="vertical-center ">
                                    <img
                                    alt="Salon Icon"
                                    src={logo}
                                    />{' '}
                                    <h1>page not found</h1>
                                </div>
                            </Jumbotron>
                    </div>
                <Footer404 />
            </div>
        );
    }
}

export default PageNotFound;