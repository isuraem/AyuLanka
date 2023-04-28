const { number } = require("joi");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const order = new Schema({

    orderID: {
        type: String,
        maxlength: 100,
        required: true,
    },

    productID: {
        type: String,
        maxlength: 100,
        required: true,
    },

    sellerID: {
        type: Schema.Types.ObjectId,
        ref: 'Seller',
        index: true,
        required: true
    },

    deliveryServiceID: {
        type: String,
        maxlength: 100,
        required: true,
    },

    // deliveryAddress: {
    //     street: {
    //         type: String,
    //         maxlength: 100,
    //         required: true,
    //     },
    //     city: {
    //         type: String,
    //         maxlength: 100,
    //         required: true,
    //     },
    //     province: {
    //         type: String,
    //         maxlength: 100,
    //         required: true,
    //     },
    //     postalCode: {
    //         type: String,
    //         maxlength: 100,
    //         required: true,
    //     },
    // },

    paymentID: {
        type: String,
        maxlength: 100,
        // required: true,
    },
    isOnlinePayment: {
        type: Boolean,
        default: false,
        required: true,

    },

    unitPrice: {
        type: Number,
        min: 0,
        required: true,
    },

    quantity: {
        type: Number,
        min: 0,
        required: true,

    },
    total: {
        type: Number,
        min: 0
    },




})

const Order = mongoose.model("CheckoutOrder", order);
module.exports = Order;