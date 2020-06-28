import React, { Component } from 'react';
import './components.css';
import image from '../assets/images/salon-404.svg'
import Footer404 from './Footer404'
import Header404 from './Header404'

class PageNotFound extends Component {

    render() {
        return (
            <div className="page">
                <Header404 />
                    <div className="vertical-center">   
                        <div className="text-center page-not-found">
                            <img
                                className=""
                                alt="page not found"
                                src={image}
                                />{' '}
                                <h1>page not found</h1>
                        </div>
                    </div>
                <Footer404 />
            </div>
        );
    }
}

export default PageNotFound;