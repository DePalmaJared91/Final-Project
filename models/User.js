const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const UserSchema = new Schema({
	first_name: {
		type: String
	},
	last_name: {
		type: String
	},
	user_name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	user_name: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	profile_picture: {
		type: String 
	},
	location: {
		type: String
	},
	bio: {
		type: String
	},
	social_links: {
		type: String
	}
})

module.exports = User = mongoose.model('users', UserSchema)