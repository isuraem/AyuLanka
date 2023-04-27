const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedback = new Schema({

    FeedbackType: {
        type: String,
        maxlength: 15,
        required: true,
    },

    Category: {
        type: String,
        maxlength:40,
        required: true,
    },

    Name: {
        type: String,
        maxlength: 150,
        required: true,
    },

    Address: {
        type: String,
        maxlength: 150,
        required: true,
    },

    Email: {
        type: String,
        maxlength: 50,
        required: true,
    },

    MobileNumber: {
        type: String,
        maxlength: 10,
        required: true,
    },

    Message: {
        type: String,
        required: true,
    },

})

const Feedback = mongoose.model("Feedback",feedback);
module.exports = Feedback;