import React, { Component } from 'react';
import './components.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class UploadProjectForm extends Component {
    
    constructor() {
        super()
        // initial state
        this.state = {
            projectTitle: "",
            projectImage: "",
            projectYear: "",
            projectCategory: "",
            projectDescription: "",
            projectMedium: "",
            projectTags: "",
            projectWorkInProgress: false,
            projectLink: "",
            error: ""
        }
    };

    // record values of input fields
    handleChange = (name) => (event) => {
        // array syntax -- will dynamically pick up values for all fields
        this.setState({ [name]: event.target.value })
    };

    // grab data when upload up button is pressed to send to backend
    uploadProject = event => {
        event.preventDefault();
        const { projectTitle, projectImage, projectCategory, projectDescription, projectMedium, projectTags, projectYear, projectLink, projectWIP } = this.state
        const project = {
            projectTitle: projectTitle,
            projectImage: projectImage,
            projectCategory: projectCategory,
            projectDescription: projectDescription,
            projectMedium: projectMedium,
            projectTags: projectTags,
            projectYear: projectYear,
            projectLink: projectLink,
            projectWIP: projectWIP,

        };
        console.log(project);
        fetch("/upload", {
            method: "POST",
            headers: {
                // "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(project)
        })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err));
    };

    render() {
        return (

            <div className="component">
                <Jumbotron fluid className="jumbotron" >
                    <div className="vertical-center">
                    <div className="page-title">add to your gallery</div>
                        <Form.Group>

                            <Form.Control
                                onChange={this.handleChange("projectTitle")}
                                // value={this.state.firstName}
                                id="project-title-input" type="text" placeholder="title" />
                            
                                <Form>
                                    <Form.File 
                                    onChange={this.handleChange("projectImage")}
                                    id="custom-file"
                                    label="upload image"
                                    custom
                                    />
                                </Form>

                                <Form.Control className="" as="select" placeholder="status">
                                onChange={this.handleChange("projectCategory")}
                                    <option hidden>category</option>
                                    <option>visual arts</option>
                                    <option>literary arts</option>
                                    <option>performance arts</option>
                                </Form.Control>
                            
                            <Form.Group>
                                <Form.Control 
                                onChange={this.handleChange("projectDescription")}
                                // value={this.state.username})}
                                id="project-description-input" type="text" as="textarea" rows="3" placeholder="project description">
                                </Form.Control>  
                            </Form.Group>

                            <Form.Control
                                onChange={this.handleChange("projectMedium")}
                                // value={this.state.password}
                                id="project-medium-input" type="text" placeholder="medium" />
                            <Form.Control
                                onChange={this.handleChange("projectLink")}
                                // value={this.state.email}
                                id="project-link-input" type="text" placeholder="project URL" />
                            <Form.Control
                                onChange={this.handleChange("projectTags")}
                                // value={this.state.username}
                                id="project-tags-input" type="text" placeholder="tags (separate by commas)" />
                            
                            <div className="flex-div">
                                
                                <Form.Control className="date-select" as="select">
                                    <option hidden>year</option>
                                </Form.Control>
                            
                                <Form.Control className="status-select" as="select" placeholder="status">
                                    <option hidden>status</option>
                                    <option>completed</option>
                                    <option>work in progress</option>
                                </Form.Control>
  
                            </div>

                            <div className="buttons">
                            
                                <Button 
                                    onClick={this.uploadProject}
                                    id="upload-project-button">Upload Project</Button>{' '}
                                </div>
                                
                            <div className="text-links">
                                <Link to="/studio">
                                    <p>return to your studio</p>
                                </Link>
                            </div>
                        </Form.Group>
                        </div>                    
                </Jumbotron>
            </div>
        );
    }
}

export default UploadProjectForm;