const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const buyer = new Schema({

    BuyerName: {
        type: String,
        maxlength: 150,
        required: true,
    },

    DOB: {
        type: String,
        required: true,
    },

    Gender: {
        type: String,
        maxlength: 10,
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

    Password: {
        type: String,
        required:true,
    },

    Province: {
        type: String,
        maxlength: 40,
        required: true,
    },

    City: {
        type: String,
        maxlength: 30,
        required: true,
    },

    Area: {
        type: String,
        maxlength: 30,
        required: true,
    },

    Address: {
        type: String,
        maxlength: 150,
        required: true,
    },

    PostalCode: {
        type: String,
        required: true,
    },

})

const Buyer = mongoose.model("Buyer", buyer);
module.exports = Buyer;