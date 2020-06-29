// require dependencies
var express = require('express')
const path = require('path');
var cors = require('cors')
require('colors-cli/toxic')
var bodyParser = require('body-parser')
var app = express()
const mongoose = require('mongoose')
var PORT = process.env.PORT || 5000
// invoke config method for dotenv
require('dotenv').config();

app.use(bodyParser.json());
app.use(cors());
app.use(
	bodyParser.urlencoded({
		extended: false
	})
	)

// use mongoose to connect to the Mongo database
const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-ge9yd.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
mongoose
	.connect(
		mongoURI,
		{ useNewUrlParser: true, useUnifiedTopology: true } 
	)
	.then(() => console.log(`Successfully connected to MongoDB.`.x206 + 
	`\n-----------------------------------------------------`.x255))
	.catch(err => console.log(err))

// set static directory to build folder
app.use(express.static(path.join(__dirname, 'client/build')));

// use routes from /routes
var Users = require('./routes/Users')
app.use('/users', Users)

// listen on the port
app.listen(PORT, () => {
    console.log(`\nApp listening on `.x81 + `http://localhost:${PORT}`.x226);
});