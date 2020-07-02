import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UploadProjectForm from '../components/UploadProjectForm';


class Upload extends Component {

    render() {
        return (
            <div className="page">
                <Navbar />
                <UploadProjectForm />
                <Footer />
            </div>
        );
    }
}

export default Upload;