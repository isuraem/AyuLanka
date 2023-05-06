const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const seller = new Schema({
    
    sellerName: {
        type: String,
        maxlength: 100,
        required: true,

    },

    shopName: {
        type: String,
        maxlength: 100,
        required: true,
    },

    shopAddress: {
        type: String,
        maxlength: 100,
        required: true,
    },

    Email: {
        type: String,
        maxlength: 50,
        required: true,
    },

    mobileNumber: {
        type: Number,
        maxlength: 10,
        required: true,
    },

})

const Seller = mongoose.model("Seller", seller);
module.exports = Seller;