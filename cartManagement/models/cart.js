const { number } = require("joi");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cart = new Schema({

    // cartID: {
    //     type: String,
    //     maxlength: 100,
    //     required: true,
    // },

    item: {
        type: String,
        maxlength: 100,
        required: true,
    },

    itemPrice: {
        type: Number,
        required: true,
    },

    cartQuantity: {
        type: Number,
        require: true,

    },

    itemId: {
        type: String,
        required: true,
    },

    userId: {
        type: String,

    }

})

const Cart = mongoose.model("Cart", cart);
module.exports = Cart;