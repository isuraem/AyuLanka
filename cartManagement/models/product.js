const { number } = require("joi");
const mongoose =require("mongoose");

const Schema =mongoose.Schema;

const product = new Schema({

    productTitle : {
        type:String,
        maxlength: 100,
        required : true,
    },

    productName : {
        type:String,
        maxlength: 100,
        required : true,
    },

    productCode: {
        type:String,
        maxlength: 100,
        required : true,
    },

    shop:{
        type: Schema.Types.ObjectId,
		required: true
    },

    productPrice :{
        type:Number,
        min: 0,
        required : true,
    },

    productDiscount: {
        type:Number,
        min: 0,

    },
    productQuantity:{
        type:Number,
        min: 0
    },

    productDescription: {
        type:String,
        maxlength: 1000,
        required : true,
    },

    productCategory: {
        type: String,
        maxlength: 100,
    },

    cashOnDelivery: {
        type: Boolean,
		default: false
    },
    productImages : [{
        public_id: {
            type: String
        },
        url: {
            type: String
        } 
    }]


})

const Product = mongoose.model("Product" ,product);
module.exports = Product;