const { number } = require("joi");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const delivery = new Schema({

    orderID: {
        type: String,
        maxlength: 100,
        required: true,
    },

    street: {
        type: String,
        maxlength: 100,
        required: true,
    },
    city: {
        type: String,
        maxlength: 100,
        required: true,
    },
    province: {
        type: String,
        maxlength: 100,
        required: true,
    },
    postalCode: {
        type: String,
        maxlength: 100,
        required: true,
    },
    country: {
        type: String,
        maxlength: 100,
        required: true,
    },
    phone: {
        type: String,
        maxlength: 20,
        required: true,
    },
    email: {
        type: String,
        maxlength: 100,
        required: true,
    }





})

const Delivery = mongoose.model("Delivery", delivery);
module.exports = Delivery;