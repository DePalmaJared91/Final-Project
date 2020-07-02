const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const UserSchema = new Schema({
	first_name: {
		type: String,
		required: true
	},
	last_name: {
		type: String,
		required: true
	},
	user_name: {
		type: String,
		required: true,
		min: 4,
		max: 20
	},
	email: {
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
	website_URL: {
		type: String
	},
	twitter_username: {
		type: String
	},
	instagram_username: {
		type: String
	},
	shop_URL: {
		type: String
	}
})

module.exports = User = mongoose.model('users', UserSchema)