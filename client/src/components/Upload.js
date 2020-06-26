import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import UploadProjectForm from '../components/UploadProjectForm';


class Upload extends Component {

    render() {
        return (
            <div className="page">
                <Navigation />
                <UploadProjectForm />
                <Footer />
            
            </div>
        );
    }
}

export default Upload;