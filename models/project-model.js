const mongoose = require('mongoose');
const { isInteger } = require('lodash');
const { ObjectId } = mongoose.Schema;

// mongoose create schema method
const projectSchema = new mongoose.Schema ({
    projectTitle: {
        type: String,
        required: true,
    },
    projectImage: {
        type: String,
    },
    projectCategory: {
        type: String,
        required: true
    },
    projectDescription: {
        type: String,
        required: true
    },
    projectMedium: {
        type: String,
        required: true
    },
    projectTags: {
        contentType: String
    },
    projectYear: {
        contentType: Number,
        type: isInteger,
    },
    projectLink: {
        contentType: String
    },
    projectWIP: {
        contentType: Boolean,
        default: false
    },
    // build relationship between the post schema and the user schema
    postedBy: {
        type: ObjectId,
        ref: "User"
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('projects', projectSchema)