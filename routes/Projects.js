// upload route (POST) that adds data to MongoDB based on  Schema of the /upload page  
//This could be done by a single route that takes in a parameter as a filter so it know what projects to return or it can habe multiple routes. Like a GET Gallery route
// that returns all projects or a GET Studio route 
//that takes in some kind of user identifier so it know what use3r ti is returning the project for. 

const express = require('express');
const projects = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');

const User = require('../models/User')
projects.use(cors())

process.env.SECRET_KEY = 'secret'

projects.post('/studio', (req, res) => {
	console.log(req.body)
	
	// var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
	const projectData = {
		projectTitle: req.body.projectTitle,
		projectImage: req.body.projectImage,
		projectCategory: req.body.projectCategory,
		projectDescription: req.body.projectDescription,
		projectMedium: req.body.projectMedium,
		projectTags: req.body.projectTags,
		projectLink: req.body.projectLink,
		projectWIP: req.body.projectWIP,
		//created: today

	}
})

// projects.get('/studio', (req, res) => {
// 	var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

// 	User.findOne({
// 		_id: decoded._id
// 	})
// 		.then(user => {
// 			if (user) {
// 				res.json(user)
// 			} else {
// 				res.send('User does not exist')
// 			}
// 		})
// 		.catch(err => {
// 			res.send('error: ' + err)
// 		})
// })
module.exports = projects